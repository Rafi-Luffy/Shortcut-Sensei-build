// Bookmark Handler - Universal bookmark functionality for all application pages
// Add this script to any page with id="bookmark-btn"

(function() {
    const bookmarkButton = document.getElementById('bookmark-btn');
    const shareButton = document.getElementById('share-btn');
    if (!bookmarkButton && !shareButton) return;
    const initEl = bookmarkButton || shareButton;
    if (initEl.dataset.bookmarkInitialized === 'true') return;
    initEl.dataset.bookmarkInitialized = 'true';

    // Remove inline onclick handlers so page-specific stubs can't hijack behavior
    if (bookmarkButton) bookmarkButton.removeAttribute('onclick');
    if (shareButton) shareButton.removeAttribute('onclick');

    const normalizeAppName = (value) => {
        if (!value) return '';
        return String(value)
            .replace(/^Top\s+\d+\s+/i, '')
            .replace(/^Top\s+Shortcuts\s+for\s+/i, '')
            .replace(/^Top\s+Shortcuts\s+/i, '')
            .replace(/\s+Shortcuts\s*$/i, '')
            .replace(/Shortcuts?/i, '')
            .replace(/_/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const getApplicationName = () => {
        const raw = document.querySelector('.hero h1')?.textContent ||
            document.querySelector('.hero-title')?.textContent ||
            document.querySelector('.page-title')?.textContent ||
            document.querySelector('h1')?.textContent ||
            document.title.split('-')[0].trim();
        return normalizeAppName(raw) || 'Application';
    };

    // Check if page is bookmarked on load
    checkBookmarkStatus();

    const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5000/api'
        : `${window.location.origin}/api`;

    const getToken = () => localStorage.getItem('authToken') || localStorage.getItem('token') || localStorage.getItem('auth_token');

    if (bookmarkButton) bookmarkButton.addEventListener('click', async () => {
        const token = getToken();
        if (!token) {
            showNotification('Please login to bookmark pages');
            setTimeout(() => {
                window.location.href = '../../pages/user/login_page.html';
            }, 1500);
            return;
        }

        const isBookmarked = bookmarkButton.classList.contains('bookmarked');
        const applicationName = getApplicationName();
        const applicationId = applicationName.toLowerCase().replace(/\s+/g, '-');
        const description = document.querySelector('.hero p')?.textContent || 
                    document.querySelector('p')?.textContent || 
                    `Shortcut guide for ${applicationName}`;

        try {
            if (isBookmarked) {
                // Remove bookmark
                const response = await fetch(`${API_BASE}/users/bookmark`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        applicationId: applicationId,
                        applicationName: applicationName,
                        shortcut: `Guide for ${applicationName}`
                    })
                });

                if (response.ok) {
                    bookmarkButton.classList.remove('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
                    showNotification('Bookmark removed');
                } else {
                    showNotification('Failed to remove bookmark');
                }
            } else {
                // Add bookmark
                const response = await fetch(`${API_BASE}/users/bookmark`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        applicationId: applicationId,
                        applicationName: applicationName,
                        shortcut: `Guide for ${applicationName}`,
                        description: description,
                        url: window.location.pathname
                    })
                });

                if (response.ok) {
                    bookmarkButton.classList.add('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
                    showNotification('Bookmark added');
                } else {
                    showNotification('Failed to add bookmark');
                }
            }
        } catch (error) {
            console.error('Bookmark error:', error);
            showNotification('Network error. Please try again.');
        }
    });

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const shareUrl = window.location.href;
            const title = document.title || `${getApplicationName()} - Shortcut Sensei`;

            try {
                if (navigator.share) {
                    await navigator.share({ title, url: shareUrl });
                    return;
                }
            } catch (e) {
                // fall back to clipboard
            }

            try {
                await navigator.clipboard.writeText(shareUrl);
                showNotification('Link copied to clipboard!');
            } catch (e) {
                showNotification('Unable to share. Please copy the URL.');
            }
        });
    }

    // Check bookmark status on page load
    async function checkBookmarkStatus() {
        const token = getToken();
        if (!token || !bookmarkButton) return;

        try {
            const response = await fetch(`${API_BASE}/users/progress`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                const currentUrl = window.location.pathname;
                const appName = getApplicationName();
                const appId = appName.toLowerCase().replace(/\s+/g, '-');
                const isBookmarked = data.bookmarks?.some(b => 
                    b.applicationId === appId || b.applicationName === appName
                );

                if (isBookmarked) {
                    bookmarkButton.classList.add('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
                } else {
                    bookmarkButton.classList.remove('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
                }
            }
        } catch (error) {
            console.error('Error checking bookmark status:', error);
        }
    }

    // Notification function (if not already defined)
    function showNotification(message) {
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: #4caf50;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                opacity: 0;
                transform: translateY(-20px);
                transition: all 0.3s ease;
            `;
            document.body.appendChild(notification);
        }

        notification.textContent = message;
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
        }, 3000);
    }
})();
