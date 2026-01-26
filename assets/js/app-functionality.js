// Enhanced functionality script for all application pages
// Handles bookmarks, action buttons, user activity tracking, and image loading

class ApplicationPageManager {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        this.startTime = Date.now();
        this.userActivityData = this.loadUserActivityData();
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    init() {
        this.setupImagePaths();
        this.setupActionButtons();
        this.setupBookmarkSystem();
        this.startActivityTracking();
        this.loadDarkModeScript();
    }

    // Fix image paths for application pages
    setupImagePaths() {
        const imageMap = {
            'Discord': 'images/apps/discord.jpg',
            'Microsoft Excel': 'images/apps/excell.webp',
            'Microsoft Word': 'images/apps/word.webp',
            'Microsoft PowerPoint': 'images/apps/ms-Powerpoint.png',
            'Google Chrome': 'images/apps/Google_Chrome.jpg',
            'Microsoft Edge': 'images/apps/MS_Edge.jpg',
            'Visual Studio': 'images/apps/Visual_Studio.png',
            'Spotify': 'images/apps/Spotify.jpg',
            'VLC Media Player': 'images/apps/VLC.jpg',
            'Microsoft Teams': 'images/apps/Microsoft Teams.jpg',
            'Slack': 'images/apps/Slack.png',
            'Adobe PhotoShop': 'images/apps/Adobe PhotoShop.webp',
            'Windows_11': 'images/apps/win11.jpg'
        };

        // Update featured images
        const featuredImages = document.querySelectorAll('.featured-image');
        featuredImages.forEach(img => {
            if (imageMap[this.currentPage]) {
                img.src = `../../${imageMap[this.currentPage]}`;
                img.alt = `${this.currentPage} Interface`;
                img.onerror = () => {
                    img.src = '../../images/apps/default-app.png';
                    console.warn(`Image not found for ${this.currentPage}, using default`);
                };
            }
        });

        // Update app icons in Applications.html
        if (this.currentPage === 'Applications') {
            this.updateApplicationIcons();
        }
    }

    updateApplicationIcons() {
        const iconMap = {
            'Microsoft Excel': 'images/apps/excell.webp',
            'Microsoft Word': 'images/apps/word.webp', 
            'Microsoft PowerPoint': 'images/apps/ms-Powerpoint.png',
            'Google Chrome': 'images/apps/Google_Chrome.jpg',
            'Microsoft Edge': 'images/apps/MS_Edge.jpg',
            'Discord': 'images/apps/discord.jpg',
            'Microsoft Teams': 'images/apps/Microsoft Teams.jpg',
            'Slack': 'images/apps/Slack.png',
            'Adobe Photoshop': 'images/apps/Adobe PhotoShop.webp',
            'Visual Studio Code': 'images/apps/Visual_Studio.png',
            'VLC Media Player': 'images/apps/VLC.jpg',
            'Spotify': 'images/apps/Spotify.jpg'
        };

        document.querySelectorAll('.app-icon').forEach(icon => {
            const appName = icon.alt;
            if (iconMap[appName]) {
                icon.src = iconMap[appName];
                icon.onerror = () => {
                    icon.src = 'images/apps/default-app.png';
                };
            }
        });
    }

    // Setup functional action buttons
    setupActionButtons() {
        // Print Guide functionality
        const printButtons = document.querySelectorAll('[onclick*="printShortcuts"], .action-button:contains("Print")');
        printButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.printShortcuts();
            });
        });

        // Download PDF functionality
        const pdfButtons = document.querySelectorAll('[onclick*="downloadPDF"], .action-button:contains("PDF")');
        pdfButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadPDF();
            });
        });

        // Share functionality
        const shareButtons = document.querySelectorAll('[onclick*="shareShortcuts"], .action-button:contains("Share")');
        shareButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.shareShortcuts();
            });
        });

        // Bookmark functionality
        const bookmarkButtons = document.querySelectorAll('.bookmark-btn, .action-button:contains("Bookmark")');
        bookmarkButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleBookmark();
            });
        });
    }

    // Print functionality
    printShortcuts() {
        // Create a clean print version
        const printWindow = window.open('', '_blank');
        const shortcuts = document.querySelectorAll('.shortcut-category');
        
        let printContent = `
            <html>
            <head>
                <title>${this.currentPage} Shortcuts - Shortcut Sensei</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .category-title { color: #06a3be; font-size: 18px; margin: 20px 0 10px; }
                    .shortcut-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
                    .key { background: #8a2be2; color: white; padding: 2px 8px; border-radius: 4px; margin: 0 2px; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <h1>${this.currentPage} Shortcuts</h1>
                <p>Generated from Shortcut Sensei - ${new Date().toLocaleDateString()}</p>
        `;

        shortcuts.forEach(category => {
            const title = category.querySelector('.category-title').textContent;
            const items = category.querySelectorAll('.shortcut-item');
            
            printContent += `<h2 class="category-title">${title}</h2>`;
            items.forEach(item => {
                const description = item.querySelector('.shortcut-description').textContent;
                const keys = item.querySelector('.shortcut-keys').innerHTML;
                printContent += `<div class="shortcut-item"><span>${description}</span><span>${keys}</span></div>`;
            });
        });

        printContent += '</body></html>';
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
        
        this.trackActivity('print', { page: this.currentPage });
    }

    // PDF Download functionality
    downloadPDF() {
        // In a real implementation, this would use a PDF library like jsPDF
        // For now, we'll create a simple text file with shortcuts
        
        const shortcuts = document.querySelectorAll('.shortcut-category');
        let content = `${this.currentPage} Shortcuts - Shortcut Sensei\n`;
        content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        shortcuts.forEach(category => {
            const title = category.querySelector('.category-title').textContent;
            const items = category.querySelectorAll('.shortcut-item');
            
            content += `${title}\n${'='.repeat(title.length)}\n`;
            items.forEach(item => {
                const description = item.querySelector('.shortcut-description').textContent;
                const keys = item.querySelector('.shortcut-keys').textContent.replace(/\s+/g, ' ');
                content += `${description}: ${keys}\n`;
            });
            content += '\n';
        });

        // Create downloadable file
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentPage}-shortcuts.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        this.showNotification('Shortcuts downloaded successfully!', 'success');
        this.trackActivity('download', { page: this.currentPage, format: 'txt' });
    }

    // Share functionality
    shareShortcuts() {
        const shareData = {
            title: `${this.currentPage} Shortcuts - Shortcut Sensei`,
            text: `Check out these amazing ${this.currentPage} shortcuts that will boost your productivity!`,
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData).then(() => {
                this.trackActivity('share', { page: this.currentPage, method: 'native' });
            }).catch((error) => {
                console.log('Error sharing:', error);
                this.fallbackShare(shareData);
            });
        } else {
            this.fallbackShare(shareData);
        }
    }

    fallbackShare(shareData) {
        // Copy link to clipboard
        navigator.clipboard.writeText(shareData.url).then(() => {
            this.showNotification('Link copied to clipboard!', 'success');
            this.trackActivity('share', { page: this.currentPage, method: 'clipboard' });
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareData.url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Link copied to clipboard!', 'success');
            this.trackActivity('share', { page: this.currentPage, method: 'clipboard_fallback' });
        });
    }

    // Bookmark system
    setupBookmarkSystem() {
        // Add bookmark button if not exists
        const actionsToolbar = document.querySelector('.actions-toolbar');
        if (actionsToolbar && !document.querySelector('.bookmark-btn')) {
            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.className = 'action-button bookmark-btn';
            bookmarkBtn.innerHTML = this.isBookmarked() ? 
                '<i class="fas fa-bookmark"></i> Bookmarked' : 
                '<i class="far fa-bookmark"></i> Bookmark';
            bookmarkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleBookmark();
            });
            actionsToolbar.appendChild(bookmarkBtn);
        }
    }

    toggleBookmark() {
        const isCurrentlyBookmarked = this.isBookmarked();
        const pageData = {
            title: document.title,
            url: window.location.href,
            page: this.currentPage,
            timestamp: Date.now()
        };

        if (isCurrentlyBookmarked) {
            this.bookmarks = this.bookmarks.filter(bookmark => bookmark.page !== this.currentPage);
            this.showNotification('Bookmark removed!', 'info');
        } else {
            this.bookmarks.push(pageData);
            this.showNotification('Page bookmarked!', 'success');
        }

        this.saveBookmarks();
        this.updateBookmarkButton();
        this.trackActivity('bookmark_toggle', { page: this.currentPage, action: isCurrentlyBookmarked ? 'remove' : 'add' });
    }

    isBookmarked() {
        return this.bookmarks.some(bookmark => bookmark.page === this.currentPage);
    }

    updateBookmarkButton() {
        const bookmarkBtn = document.querySelector('.bookmark-btn');
        if (bookmarkBtn) {
            const isBookmarked = this.isBookmarked();
            bookmarkBtn.innerHTML = isBookmarked ? 
                '<i class="fas fa-bookmark"></i> Bookmarked' : 
                '<i class="far fa-bookmark"></i> Bookmark';
        }
    }

    loadBookmarks() {
        const saved = localStorage.getItem('shortcutSensei_bookmarks');
        return saved ? JSON.parse(saved) : [];
    }

    saveBookmarks() {
        localStorage.setItem('shortcutSensei_bookmarks', JSON.stringify(this.bookmarks));
    }

    // User activity tracking
    startActivityTracking() {
        // Track page visit
        this.trackActivity('page_visit', { 
            page: this.currentPage,
            timestamp: this.startTime,
            userAgent: navigator.userAgent,
            referrer: document.referrer
        });

        // Track page exit
        window.addEventListener('beforeunload', () => {
            const timeSpent = Date.now() - this.startTime;
            this.trackActivity('page_exit', { 
                page: this.currentPage,
                timeSpent: timeSpent,
                timestamp: Date.now()
            });
        });

        // Track interactions with shortcuts
        document.querySelectorAll('.shortcut-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                const description = item.querySelector('.shortcut-description').textContent;
                this.trackActivity('shortcut_interaction', {
                    page: this.currentPage,
                    shortcut: description,
                    index: index
                });
            });
        });
    }

    trackActivity(action, data) {
        if (!this.userActivityData.sessions) {
            this.userActivityData.sessions = [];
        }

        const activityEntry = {
            action,
            data,
            timestamp: Date.now()
        };

        this.userActivityData.sessions.push(activityEntry);
        this.saveUserActivityData();
    }

    loadUserActivityData() {
        const saved = localStorage.getItem('shortcutSensei_userActivity');
        return saved ? JSON.parse(saved) : { sessions: [] };
    }

    saveUserActivityData() {
        localStorage.setItem('shortcutSensei_userActivity', JSON.stringify(this.userActivityData));
    }

    // Performance report generation
    generatePerformanceReport() {
        const user = this.getCurrentUser();
        const userName = user ? (user.displayName || user.email) : 'Anonymous';
        const reportData = {
            user: userName,
            generatedAt: new Date().toISOString(),
            sessions: this.userActivityData.sessions,
            summary: this.generateActivitySummary()
        };

        const reportContent = this.formatPerformanceReport(reportData);
        
        // Download as text file
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${userName}_Performance_Report_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        this.showNotification('Performance report downloaded!', 'success');
    }

    generateActivitySummary() {
        const sessions = this.userActivityData.sessions;
        const summary = {
            totalSessions: 0,
            totalTimeSpent: 0,
            pagesVisited: {},
            shortcutsInteracted: 0,
            downloadsCount: 0,
            sharesCount: 0
        };

        sessions.forEach(session => {
            switch (session.action) {
                case 'page_visit':
                    summary.totalSessions++;
                    if (!summary.pagesVisited[session.data.page]) {
                        summary.pagesVisited[session.data.page] = 0;
                    }
                    summary.pagesVisited[session.data.page]++;
                    break;
                case 'page_exit':
                    summary.totalTimeSpent += session.data.timeSpent || 0;
                    break;
                case 'shortcut_interaction':
                    summary.shortcutsInteracted++;
                    break;
                case 'bookmark_toggle':
                    // Bookmarks are intentionally excluded from the downloadable report
                    break;
                case 'download':
                    summary.downloadsCount++;
                    break;
                case 'share':
                    summary.sharesCount++;
                    break;
                default:
                    // Handle unknown actions
                    break;
            }
        });

        return summary;
    }

    formatPerformanceReport(reportData) {
        const summary = reportData.summary;
        return `
SHORTCUT SENSEI - USER PERFORMANCE REPORT
==========================================

User: ${reportData.user}
Generated: ${new Date(reportData.generatedAt).toLocaleString()}

ACTIVITY SUMMARY
----------------
Total Sessions: ${summary.totalSessions}
Total Time Spent: ${Math.round(summary.totalTimeSpent / 1000 / 60)} minutes
Shortcuts Interacted: ${summary.shortcutsInteracted}
Downloads: ${summary.downloadsCount}
Shares: ${summary.sharesCount}

PAGES VISITED
-------------
${Object.entries(summary.pagesVisited).map(([page, count]) => `${page}: ${count} visits`).join('\n')}

DETAILED SESSION LOG
--------------------
${reportData.sessions.slice(-50).map(session => 
    `${new Date(session.timestamp).toLocaleString()} - ${session.action}: ${JSON.stringify(session.data)}`
).join('\n')}

Generated by Shortcut Sensei Performance Tracking System
        `.trim();
    }

    getCurrentUser() {
        // If a page exposes a current user object, return it
        return window.currentUser || null;
    }

    loadDarkModeScript() {
        // Load the dark mode script if not already loaded
        if (!window.darkModeManager) {
            const script = document.createElement('script');
            script.src = '../../assets/js/dark-mode.js';
            document.head.appendChild(script);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Public methods for external access
    getBookmarks() {
        return this.bookmarks;
    }

    getUserActivity() {
        return this.userActivityData;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.appPageManager = new ApplicationPageManager();
    });
} else {
    window.appPageManager = new ApplicationPageManager();
}

// Global functions for backward compatibility
window.printShortcuts = function() {
    if (window.appPageManager) {
        window.appPageManager.printShortcuts();
    }
};

window.downloadPDF = function() {
    if (window.appPageManager) {
        window.appPageManager.downloadPDF();
    }
};

window.shareShortcuts = function() {
    if (window.appPageManager) {
        window.appPageManager.shareShortcuts();
    }
};

window.generatePerformanceReport = function() {
    if (window.appPageManager) {
        window.appPageManager.generatePerformanceReport();
    }
};