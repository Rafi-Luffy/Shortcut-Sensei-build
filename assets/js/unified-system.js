/**
 * Unified Dark Mode and Authentication System
 * Include this script in ALL pages for consistent behavior
 */

(function() {
    'use strict';

    // ==================== DARK MODE MANAGEMENT ====================
    
    const DarkModeManager = {
        STORAGE_KEY: 'darkMode',
        
        init() {
            this.normalizeStoredPreference();
            // Check localStorage for saved preference, default to false (light mode)
            const savedMode = localStorage.getItem(this.STORAGE_KEY);
            const isDark = savedMode === 'true';
            
            // Apply immediately to prevent flash
            this.apply(isDark);
            
            // Setup toggle listeners
            this.setupToggles();
        },
        
        normalizeStoredPreference() {
            const legacyValue = localStorage.getItem(this.STORAGE_KEY);
            const themeValue = localStorage.getItem('theme');

            if (legacyValue === 'enabled' || legacyValue === 'disabled') {
                localStorage.setItem(this.STORAGE_KEY, legacyValue === 'enabled' ? 'true' : 'false');
                return;
            }

            if (themeValue === 'dark' || themeValue === 'light') {
                localStorage.setItem(this.STORAGE_KEY, themeValue === 'dark' ? 'true' : 'false');
            }
        },
        
        apply(isDark) {
            if (isDark) {
                document.documentElement.classList.add('dark-mode');
                document.body.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
                document.body.classList.remove('dark-mode');
            }
            
            // Update all toggle icons
            const toggles = document.querySelectorAll('.dark-mode-toggle');
            toggles.forEach(toggle => {
                const icon = toggle.querySelector('i');
                if (icon) {
                    if (isDark) {
                        icon.className = 'fa-solid fa-sun';
                    } else {
                        icon.className = 'fa-solid fa-moon';
                    }
                }
            });
            
            // Save to localStorage
            localStorage.setItem(this.STORAGE_KEY, isDark.toString());
        },
        
        toggle() {
            const isDark = document.documentElement.classList.contains('dark-mode');
            this.apply(!isDark);
        },
        
        setupToggles() {
            const toggles = document.querySelectorAll('.dark-mode-toggle');
            toggles.forEach(toggle => {
                // Remove any existing listeners
                const newToggle = toggle.cloneNode(true);
                toggle.parentNode.replaceChild(newToggle, toggle);
                
                // Add new listener
                newToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggle();
                });
            });
        },
        
        isDark() {
            return document.documentElement.classList.contains('dark-mode');
        }
    };

    // ==================== AUTHENTICATION MANAGEMENT ====================
    
    const AuthManager = {
        STORAGE_KEYS: ['authToken', 'auth_token', 'token'],
        USER_KEY: 'current_user',
        API_BASE: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
            ? 'http://localhost:5000/api' 
            : '/api',
        
        init() {
            this.updateUI();
            this.setupLogoutHandlers();
            this.setupUserMenuToggle();
        },
        
        setupUserMenuToggle() {
            // Setup click handler for user avatar
            const avatars = document.querySelectorAll('.user-avatar, #headerAvatar');
            avatars.forEach(avatar => {
                avatar.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = avatar.closest('.user-menu-container')?.querySelector('.user-dropdown');
                    if (dropdown) {
                        dropdown.classList.toggle('show');
                    }
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.user-menu-container')) {
                    document.querySelectorAll('.user-dropdown').forEach(dropdown => {
                        dropdown.classList.remove('show');
                    });
                }
            });
        },
        
        getToken() {
            for (const key of this.STORAGE_KEYS) {
                const value = localStorage.getItem(key);
                if (value) return value;
            }
            return null;
        },
        
        getUser() {
            const userStr = localStorage.getItem(this.USER_KEY);
            if (userStr) return JSON.parse(userStr);

            const displayName = localStorage.getItem('userDisplayName');
            const email = localStorage.getItem('userEmail');
            const avatar = localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL');

            if (displayName || email) {
                return {
                    displayName: displayName || email,
                    email: email || '',
                    avatarUrl: avatar || ''
                };
            }

            return null;
        },
        
        setAuth(token, user) {
            if (token) {
                localStorage.setItem('authToken', token);
            }
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
            this.updateUI();
        },
        
        clearAuth() {
            localStorage.removeItem(this.USER_KEY);
            localStorage.removeItem('authToken');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('token');
            localStorage.removeItem('userDisplayName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userAvatarImage');
            localStorage.removeItem('userPhotoURL');
            this.updateUI();
        },
        
        isAuthenticated() {
            return !!this.getToken();
        },
        
        async validateToken() {
            const token = this.getToken();
            if (!token) return false;
            
            try {
                const response = await fetch(`${this.API_BASE}/users/validate`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    this.clearAuth();
                    return false;
                }
                
                return true;
            } catch (error) {
                console.error('Token validation error:', error);
                return false;
            }
        },
        
        updateUI() {
            const isAuth = this.isAuthenticated();
            const user = this.getUser();
            
            // Update login buttons and user menus
            const loginButtonContainers = document.querySelectorAll('.login-button-container, #loginButtonContainer');
            const userMenus = document.querySelectorAll('.user-menu-container, #userMenuContainer');
            
            if (isAuth && user) {
                // Hide login buttons
                loginButtonContainers.forEach(container => {
                    container.style.display = 'none';
                });
                
                // Show user menus
                userMenus.forEach(menu => {
                    menu.style.display = 'block';
                    
                    // Update user info
                    const nameEl = menu.querySelector('.user-name');
                    const avatarEl = menu.querySelector('.user-avatar, #headerAvatar');
                    const emailEl = menu.querySelector('.user-email');
                    
                    if (nameEl) nameEl.textContent = user.displayName || user.name || 'User';
                    if (emailEl) emailEl.textContent = user.email || '';
                    
                    // Only update src if avatarEl is an actual img element, not an icon
                    if (avatarEl && avatarEl.tagName === 'IMG') {
                        const storedAvatar = localStorage.getItem('userAvatarImage');
                        avatarEl.src = storedAvatar || user.avatarUrl || user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.name || 'User')}&background=8B5FBF&color=fff`;
                    }
                    // If it's an icon element (i tag), don't modify it - it's already styled
                });
            } else {
                // Show login buttons
                loginButtonContainers.forEach(container => {
                    container.style.display = 'block';
                });
                
                // Hide user menus
                userMenus.forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        },
        
        setupLogoutHandlers() {
            const logoutButtons = document.querySelectorAll('.logout-btn, [data-action="logout"]');
            logoutButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
            });
        },
        
        logout() {
            this.clearAuth();
            // Redirect to home or login page
            const currentPath = window.location.pathname;
            if (currentPath.includes('/pages/') || currentPath.includes('/user/')) {
                window.location.href = '../../index.html';
            } else {
                window.location.href = '/index.html';
            }
        }
    };

    // ==================== APPLICATION PAGE ENHANCEMENTS ====================

    const AppPageEnhancements = {
        init() {
            if (!this.isApplicationPage()) return;

            const appName = this.getCurrentAppName();
            if (appName) {
                this.updateQuizLinks(appName);
            }

            this.enableDownloadPrint();
            this.removePrintButtons();
            this.setupBookmarkButton(appName);
            this.setupShareButton(appName);
        },

        isApplicationPage() {
            return window.location.pathname.includes('/pages/applications/');
        },

        getCurrentAppName() {
            const fileName = window.location.pathname.split('/').pop() || '';
            const fileMap = {
                'Microsoft%20Excell.html': 'Microsoft Excel',
                'Microsoft Excell.html': 'Microsoft Excel',
                'Windows_11.html': 'Windows 11',
                'Mac_Shortcuts.html': 'macOS',
                'Adobe%20PhotoShop.html': 'Adobe Photoshop',
                '7-zip.html': '7-Zip',
                'HTML%20Cheat%20Sheet.html': 'HTML Cheat Sheet'
            };

            if (fileMap[fileName]) return fileMap[fileName];

            const h1 = document.querySelector('h1');
            const title = document.title || '';
            const titlePart = title.split('-')[0]?.trim();
            const raw = titlePart || (h1 && h1.textContent) || '';

            if (!raw) return null;

            return this.normalizeAppName(raw);
        },

        normalizeAppName(value) {
            return value
                .replace(/^Top\s+\d+\s+/i, '')
                .replace(/^Top\s+Shortcuts\s+for\s+/i, '')
                .replace(/^Top\s+Shortcuts\s+/i, '')
                .replace(/Shortcuts?/i, '')
                .replace(/_/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        },

        updateQuizLinks(appName) {
            const quizLinks = document.querySelectorAll('a[href*="/quizs"], a[href$="/quizs/"]');
            if (!quizLinks.length) return;

            const quizUrl = `${window.location.origin}/quizs/?app=${encodeURIComponent(appName)}`;
            quizLinks.forEach(link => {
                const href = link.getAttribute('href') || '';
                const text = (link.textContent || '').trim().toLowerCase();
                if (href.includes('profile=true') || text.includes('profile') || text.includes('my profile')) {
                    return;
                }
                if (!text || text === 'quiz') {
                    link.setAttribute('href', quizUrl);
                }
            });
        },

        removePrintButtons() {
            const printButtons = document.querySelectorAll('#print-btn, .print-btn, .action-button.print');
            printButtons.forEach(btn => btn.remove());
        },

        enableDownloadPrint() {
            const downloadButtons = document.querySelectorAll('#download-btn, .download-btn, .action-button.download');
            downloadButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.print();
                });
            });
        },

        setupBookmarkButton(appName) {
            const bookmarkButton = document.getElementById('bookmark-btn');
            if (!bookmarkButton || bookmarkButton.dataset.bookmarkInitialized === 'true') return;
            bookmarkButton.dataset.bookmarkInitialized = 'true';
            bookmarkButton.removeAttribute('onclick');

            const API_BASE = (window.location.hostname === 'localhost')
                ? 'http://localhost:5000/api'
                : `${window.location.origin}/api`;
            const getToken = () => localStorage.getItem('authToken') || localStorage.getItem('token') || localStorage.getItem('auth_token');

            const resolveAppName = () => appName || this.getCurrentAppName() || 'Application';
            const resolveAppId = (name) => name.toLowerCase().replace(/\s+/g, '-');

            const updateButtonState = (isBookmarked) => {
                if (isBookmarked) {
                    bookmarkButton.classList.add('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
                } else {
                    bookmarkButton.classList.remove('bookmarked');
                    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
                }
            };

            const showNotification = (message) => {
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
            };

            const checkBookmarkStatus = async () => {
                const token = getToken();
                if (!token) return;

                try {
                    const response = await fetch(`${API_BASE}/users/progress`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) return;

                    const data = await response.json();
                    const name = resolveAppName();
                    const id = resolveAppId(name);
                    const isBookmarked = data.bookmarks?.some(b =>
                        b.applicationId === id || b.applicationName === name
                    );

                    updateButtonState(!!isBookmarked);
                } catch (error) {
                    console.error('Error checking bookmark status:', error);
                }
            };

            const toggleBookmark = async () => {
                const token = getToken();
                if (!token) {
                    showNotification('Please login to bookmark pages');
                    setTimeout(() => {
                        window.location.href = '/login/';
                    }, 1500);
                    return;
                }

                const name = resolveAppName();
                const id = resolveAppId(name);
                const isBookmarked = bookmarkButton.classList.contains('bookmarked');

                try {
                    if (isBookmarked) {
                        const response = await fetch(`${API_BASE}/users/bookmark`, {
                            method: 'DELETE',
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                applicationId: id,
                                applicationName: name,
                                shortcut: `Guide for ${name}`
                            })
                        });

                        if (response.ok) {
                            updateButtonState(false);
                            showNotification('Bookmark removed');
                            checkBookmarkStatus();
                        } else {
                            showNotification('Failed to remove bookmark');
                        }
                    } else {
                        const response = await fetch(`${API_BASE}/users/bookmark`, {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                applicationId: id,
                                applicationName: name,
                                shortcut: `Guide for ${name}`,
                                description: `Shortcut guide for ${name}`,
                                url: window.location.pathname
                            })
                        });

                        if (response.ok) {
                            updateButtonState(true);
                            showNotification('Bookmark added');
                            checkBookmarkStatus();
                        } else {
                            showNotification('Failed to add bookmark');
                        }
                    }
                } catch (error) {
                    console.error('Bookmark error:', error);
                    showNotification('Network error. Please try again.');
                }
            };

            bookmarkButton.addEventListener('click', toggleBookmark);

            // Expose for pages using onclick="bookmarkPage()"
            window.bookmarkPage = toggleBookmark;

            checkBookmarkStatus();
        },

        setupShareButton(appName) {
            const shareButtons = document.querySelectorAll('#share-btn, .share-btn, .action-button.share');
            if (!shareButtons.length) return;

            const shareHandler = async () => {
                const title = document.title || `${appName} Shortcuts`;
                const text = `Check out these useful ${appName || 'app'} shortcuts!`;
                const url = window.location.href;

                if (navigator.share) {
                    try {
                        await navigator.share({ title, text, url });
                    } catch (error) {
                        // ignore share cancel
                    }
                    return;
                }

                try {
                    await navigator.clipboard.writeText(url);
                    const notification = document.getElementById('notification');
                    if (notification) {
                        notification.textContent = 'Link copied to clipboard!';
                        notification.classList.add('show');
                        setTimeout(() => notification.classList.remove('show'), 3000);
                    }
                } catch (error) {
                    alert('Link copied to clipboard!');
                }
            };

            shareButtons.forEach(btn => {
                btn.removeAttribute('onclick');
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    shareHandler();
                });
            });

            // Expose for pages using onclick="shareContent()"
            window.shareContent = shareHandler;
        }
    };

    // ==================== FOOTER TEMPLATE (CANONICAL) ====================

    const FooterTemplateManager = {
        canonicalHtml() {
            // Use absolute paths so links work from nested pages.
            return `
<footer>
    <div class="footer-content">
        <div class="footer-column">
            <h3>Resources</h3>
            <p>Your ultimate guide to mastering keyboard shortcuts. We provide comprehensive guides and tips to help you work faster and more efficiently.</p>
        </div>
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="/home-page.html">Home</a></li>
                <li><a href="/home-page.html#features">Features</a></li>
                <li><a href="/home-page.html#testimonials">Testimonials</a></li>
                <li><a href="/About.html">About</a></li>
                <li><a href="/Privacy.html">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Follow Us</h3>
            <ul class="social-icons">
                <li><a href="https://www.facebook.com/profile.php?id=100015198880002"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/RAFI09925204"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rafi-s-b-m-a3492a265/"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Subscribe</h3>
            <form class="subscribe-form">
                <input id="emailInput" type="email" placeholder="Your email" required>
                <button id="subscribeButton" type="submit">Subscribe</button>
            </form>
            <p id="confirmationMessage" style="display: none;">Thank you for subscribing to our newsletter!</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Shortcut Sensei. All rights reserved.</p>
    </div>
</footer>
            `.trim();
        },

        ensureCanonicalFooter() {
            const html = this.canonicalHtml();
            const tpl = document.createElement('template');
            tpl.innerHTML = html;
            const canonicalFooter = tpl.content.querySelector('footer');
            if (!canonicalFooter) return;

            const existing = document.querySelector('footer');
            if (existing) {
                // Avoid doing work twice.
                if (existing.dataset.canonicalFooter === 'true') return;

                // Replace to guarantee identical markup.
                existing.replaceWith(canonicalFooter);
            } else {
                document.body.appendChild(canonicalFooter);
            }

            canonicalFooter.dataset.canonicalFooter = 'true';
        },

        init() {
            this.ensureCanonicalFooter();
        }
    };

    // ==================== NEWSLETTER ====================

    const NewsletterManager = {
        init() {
            const forms = document.querySelectorAll('.subscribe-form');
            if (!forms.length) return;

            forms.forEach(form => {
                if (form.dataset.newsletterInitialized === 'true') return;
                form.dataset.newsletterInitialized = 'true';

                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const emailInput = form.querySelector('input[type="email"]');
                    const email = emailInput?.value.trim() || '';

                    if (!email || !this.isValidEmail(email)) {
                        this.showMessage(form, 'Please enter a valid email address', 'error');
                        return;
                    }

                    const normalized = email.toLowerCase();
                    const map = this.getMap();
                    const alreadySubscribed = map[normalized] === true;
                    map[normalized] = true;
                    this.saveMap(map);

                    this.showMessage(form, alreadySubscribed ? "You're already subscribed!" : 'Thank you for subscribing to our newsletter!', 'success');
                    this.createFireworks();
                    if (emailInput) emailInput.value = '';
                });
            });
        },

        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        getMap() {
            try {
                return JSON.parse(localStorage.getItem('newsletterSubscriptions') || '{}');
            } catch (error) {
                return {};
            }
        },

        saveMap(map) {
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(map));
        },

        showMessage(form, message, type) {
            const existing = form.parentNode.querySelector('.subscribe-message');
            if (existing) existing.remove();

            const messageDiv = document.createElement('div');
            messageDiv.className = 'subscribe-message';
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';
            messageDiv.style.backgroundColor = type === 'error' ? '#f44336' : '#4caf50';

            form.parentNode.insertBefore(messageDiv, form.nextSibling);

            setTimeout(() => {
                messageDiv.style.opacity = '0';
                messageDiv.style.transition = 'opacity 0.5s';
                setTimeout(() => messageDiv.remove(), 500);
            }, 5000);
        },

        ensureFireworksStyles() {
            if (document.getElementById('newsletter-fireworks-style')) return;
            const style = document.createElement('style');
            style.id = 'newsletter-fireworks-style';
            style.textContent = `
                .fireworks-container {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 9999;
                }
                .firework {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    animation: firework-burst 1.8s ease-out forwards;
                }
                @keyframes firework-burst {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(12); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        },

        createFireworks() {
            this.ensureFireworksStyles();
            const container = document.createElement('div');
            container.className = 'fireworks-container';
            document.body.appendChild(container);

            const colors = ['#ff9800', '#e91e63', '#9c27b0', '#03a9f4', '#4caf50', '#ffc107'];
            const count = 12;

            for (let i = 0; i < count; i++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = `${Math.random() * 100}%`;
                firework.style.top = `${Math.random() * 60 + 10}%`;
                firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                firework.style.animationDelay = `${Math.random() * 0.3}s`;
                container.appendChild(firework);
            }

            setTimeout(() => container.remove(), 2000);
        }
    };

    const FooterSocialManager = {
        init() {
            const canonical = {
                facebook: 'https://www.facebook.com/profile.php?id=100015198880002',
                twitter: 'https://twitter.com/RAFI09925204',
                linkedin: 'https://www.linkedin.com/in/rafi-s-b-m-a3492a265/'
            };

            document.querySelectorAll('footer').forEach(footer => {
                // Remove Instagram from all footers
                const instagramTargets = footer.querySelectorAll('a[href*="instagram"], i.fa-instagram, i.fab.fa-instagram');
                instagramTargets.forEach(node => {
                    const link = node.closest('a') || (node.tagName === 'A' ? node : null);
                    const li = (link || node).closest('li');
                    if (li) {
                        li.remove();
                    } else if (link) {
                        link.remove();
                    }
                });

                // Normalize social links/icons to match the homepage footer
                const socialLinks = footer.querySelectorAll('.social-icons a');
                socialLinks.forEach(link => {
                    const icon = link.querySelector('i');
                    if (!icon) return;

                    if (icon.classList.contains('fa-facebook') || icon.classList.contains('fa-facebook-f')) {
                        link.href = canonical.facebook;
                        icon.className = 'fab fa-facebook';
                    } else if (icon.classList.contains('fa-twitter')) {
                        link.href = canonical.twitter;
                        icon.className = 'fab fa-twitter';
                    } else if (icon.classList.contains('fa-linkedin') || icon.classList.contains('fa-linkedin-in')) {
                        link.href = canonical.linkedin;
                        icon.className = 'fab fa-linkedin-in';
                    }
                });
            });
        }
    };

    const FooterYearManager = {
        TARGET_YEAR: '2025',

        init() {
            const footerParagraphs = document.querySelectorAll('footer .footer-bottom p, footer p');
            footerParagraphs.forEach(p => {
                const text = (p.textContent || '').trim();
                if (!text) return;
                if (!/Shortcut\s*Sensei/i.test(text)) return;

                const updated = text
                    .replace(/(©|\u00A9|&copy;|\(c\))\s*\d{4}/i, `© ${this.TARGET_YEAR}`)
                    .replace(/\b20\d{2}\b(?=.*Shortcut\s*Sensei)/i, this.TARGET_YEAR);

                if (updated !== text) {
                    p.textContent = updated;
                }
            });
        }
    };

    // ==================== INITIALIZATION ====================
    function removeCommunityNavLinks() {
        const links = document.querySelectorAll('a[href*="community"], a[href*="/quizs/?community"]');
        links.forEach(link => {
            const text = (link.textContent || '').trim().toLowerCase();
            if (text.includes('community') || link.getAttribute('href')?.includes('community')) {
                const li = link.closest('li');
                if (li) {
                    li.remove();
                } else {
                    link.remove();
                }
            }
        });
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            DarkModeManager.init();
            AuthManager.init();
            removeCommunityNavLinks();
            AppPageEnhancements.init();
            FooterTemplateManager.init();
            NewsletterManager.init();
            FooterSocialManager.init();
            FooterYearManager.init();
        });
    } else {
        DarkModeManager.init();
        AuthManager.init();
        removeCommunityNavLinks();
        AppPageEnhancements.init();
        FooterTemplateManager.init();
        NewsletterManager.init();
        FooterSocialManager.init();
        FooterYearManager.init();
    }

    // Export to window for external access
    window.DarkModeManager = DarkModeManager;
    window.AuthManager = AuthManager;

    // Make toggle function available globally for onclick handlers
    window.toggleDarkMode = () => DarkModeManager.toggle();
    
    // Add global toggleUserMenu function for onclick handlers
    window.toggleUserMenu = function() {
        const menu = document.getElementById('userDropdownMenu');
        if (menu) {
            // Toggle display property for visibility
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(-10px)';
            } else {
                menu.style.display = 'block';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            }
        }
    };
    
    // Add global logout function
    window.logout = function() {
        AuthManager.logout();
        return false; // Prevent default link behavior
    };
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const userMenuContainer = document.getElementById('userMenuContainer');
        const userDropdown = document.getElementById('userDropdownMenu');
        
        if (userDropdown && userMenuContainer && !userMenuContainer.contains(event.target)) {
            userDropdown.style.display = 'none';
            userDropdown.style.opacity = '0';
            userDropdown.style.visibility = 'hidden';
            userDropdown.style.transform = 'translateY(-10px)';
        }
    });

})();

