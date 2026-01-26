// Universal Dark Mode Script for Shortcut Sensei
// This script maintains dark mode preference across all pages using localStorage

class DarkModeManager {
    constructor() {
        this.init();
    }

    init() {
        // Load dark mode preference on page load
        this.loadDarkModePreference();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Apply dark mode to dynamically loaded content
        this.observeContentChanges();
    }

    loadDarkModePreference() {
        const body = document.body;
        const html = document.documentElement;
        const darkMode = this.normalizeStoredPreference();
        const darkModeToggle = document.querySelector('.dark-mode-toggle i');
        
        if (darkMode === 'true') {
            html.classList.add('dark-mode');
            body.classList.add('dark-mode');
            if (darkModeToggle) {
                darkModeToggle.className = 'fa-solid fa-sun';
            }
        } else {
            html.classList.remove('dark-mode');
            body.classList.remove('dark-mode');
            if (darkModeToggle) {
                darkModeToggle.className = 'fa-solid fa-moon';
            }
        }
        
        // Store current state
        this.isDarkMode = darkMode === 'true';
    }

    normalizeStoredPreference() {
        const legacyValue = localStorage.getItem('darkMode');
        const themeValue = localStorage.getItem('theme');

        if (legacyValue === 'enabled' || legacyValue === 'disabled') {
            const normalized = legacyValue === 'enabled' ? 'true' : 'false';
            localStorage.setItem('darkMode', normalized);
            return normalized;
        }

        if (themeValue === 'dark' || themeValue === 'light') {
            const normalized = themeValue === 'dark' ? 'true' : 'false';
            localStorage.setItem('darkMode', normalized);
            return normalized;
        }

        return legacyValue === 'true' ? 'true' : 'false';
    }

    toggleDarkMode() {
        const body = document.body;
        const html = document.documentElement;
        const darkModeToggle = document.querySelector('.dark-mode-toggle i');
        
        this.isDarkMode = !this.isDarkMode;
        
        if (this.isDarkMode) {
            html.classList.add('dark-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
            if (darkModeToggle) {
                darkModeToggle.className = 'fa-solid fa-sun';
            }
        } else {
            html.classList.remove('dark-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
            if (darkModeToggle) {
                darkModeToggle.className = 'fa-solid fa-moon';
            }
        }

        // Trigger custom event for other components to listen
        window.dispatchEvent(new CustomEvent('darkModeChanged', { 
            detail: { isDarkMode: this.isDarkMode } 
        }));
    }

    setupEventListeners() {
        // Set up toggle button
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }

        // Listen for dark mode changes from other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === 'darkMode') {
                this.loadDarkModePreference();
            }
        });
    }

    observeContentChanges() {
        // Observer for dynamically loaded content
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        // Apply dark mode to new elements if needed
                        this.applyDarkModeToNewElements(mutation.addedNodes);
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    applyDarkModeToNewElements(nodes) {
        if (!this.isDarkMode) return;

        nodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                // Apply dark mode classes to specific elements if needed
                if (node.classList && node.classList.contains('needs-dark-mode')) {
                    node.classList.add('dark-mode');
                }
            }
        });
    }

    // Method to get current dark mode state
    getDarkModeState() {
        return this.isDarkMode;
    }

    // Method to programmatically set dark mode
    setDarkMode(enabled) {
        if (enabled !== this.isDarkMode) {
            this.toggleDarkMode();
        }
    }
}

// Initialize dark mode manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.darkModeManager = new DarkModeManager();
    });
} else {
    window.darkModeManager = new DarkModeManager();
}

// Global function for backward compatibility
window.toggleDarkMode = function() {
    if (window.darkModeManager) {
        window.darkModeManager.toggleDarkMode();
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeManager;
}