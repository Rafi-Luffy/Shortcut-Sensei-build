// API-based Authentication for Shortcut Sensei
// This file handles user authentication across all pages using the Supabase Postgres API

import { DataSyncService } from './data-sync.js';

class APIAuthService {
    constructor() {
        // In local dev, HTML pages may be served from :3000 while React runs on :3000
        // Always prefer :5000 for backend API
        const origin = window.location.origin;
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        if (isLocal) {
            this.baseURL = 'http://localhost:5000/api';
        } else {
            this.baseURL = `${origin}/api`;
        }
        const storedToken = localStorage.getItem('authToken') || localStorage.getItem('auth_token') || localStorage.getItem('token');
        this.token = storedToken;
        if (storedToken && !localStorage.getItem('authToken')) {
            localStorage.setItem('authToken', storedToken);
        }
        this.user = null;
        this.dataSyncService = null;
        this.init();
    }

    init() {
        // Check if user is already logged in
        if (this.token) {
            this.validateToken();
        }

        // Set up global logout function
        window.logout = () => this.logout();

        // Set up global login function
        window.login = (email, password) => this.login(email, password);

        // Set up global register function
        window.register = (email, password, displayName) => this.register(email, password, displayName);

        // Initialize auth state listener
        this.setupAuthStateListener();
    }

    // Validate stored token on page load
    async validateToken() {
        try {
            const response = await fetch(`${this.baseURL}/users/profile`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                this.user = data.user;
                this.updateUI(true);
                this.initializeDataSync(); // Initialize data sync when token is valid
            } else {
                // Token is invalid, clear it
                this.clearAuthData();
                this.updateUI(false);
            }
        } catch (error) {
            console.error('Token validation error:', error);
            this.clearAuthData();
            this.updateUI(false);
        }
    }

    // Login user
    async login(email, password) {
        try {
            const response = await fetch(`${this.baseURL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                this.token = data.token;
                this.user = data.user;
                localStorage.setItem('authToken', this.token);
                this.storeUserData(data.user);
                this.updateUI(true);
                this.initializeDataSync(); // Initialize data sync after login

                // Redirect to home page or previous page
                const redirectUrl = localStorage.getItem('redirectAfterLogin') || '../index.html';
                localStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;

                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message || 'Login failed' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Network error. Please try again.' };
        }
    }

    // Register new user
    async register(email, password, displayName) {
        try {
            const response = await fetch(`${this.baseURL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, displayName })
            });

            const data = await response.json();

            if (response.ok) {
                this.token = data.token;
                this.user = data.user;
                localStorage.setItem('authToken', this.token);
                this.storeUserData(data.user);
                this.updateUI(true);
                this.initializeDataSync(); // Initialize data sync after registration

                // Redirect to home page
                window.location.href = '../index.html';

                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message || 'Registration failed' };
            }
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Network error. Please try again.' };
        }
    }

    // Logout user
    async logout() {
        try {
            // Stop data sync service
            this.stopDataSync();

            // Call logout endpoint if needed
            this.clearAuthData();
            this.updateUI(false);

            // Redirect to login page
            window.location.href = '../user/login_page.html';
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    // Store user data in localStorage (for backward compatibility)
    storeUserData(user) {
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userDisplayName', user.displayName || user.email);
        localStorage.setItem('userPhotoURL', user.avatarUrl || '');
        localStorage.setItem('userId', user.id);
    }

    // Clear authentication data
    clearAuthData() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userDisplayName');
        localStorage.removeItem('userPhotoURL');
        localStorage.removeItem('userId');
    }

    // Update UI based on authentication state
    updateUI(isAuthenticated) {
        const userMenuContainer = document.getElementById('userMenuContainer');
        const loginButtonContainer = document.getElementById('loginButtonContainer');

        if (isAuthenticated && this.user) {
            // Show user menu
            if (userMenuContainer) {
                userMenuContainer.style.display = 'block';
                this.updateUserProfile();
            }
            if (loginButtonContainer) {
                loginButtonContainer.style.display = 'none';
            }
        } else {
            // Show login button
            if (userMenuContainer) {
                userMenuContainer.style.display = 'none';
            }
            if (loginButtonContainer) {
                loginButtonContainer.style.display = 'block';
            }
        }
    }

    // Update user profile in UI
    updateUserProfile() {
        if (!this.user) return;

        const displayName = localStorage.getItem('userDisplayName') || this.user.displayName || this.user.email || 'User';
        
        // Prefer uploaded avatar (stored by React) when available
        const savedAvatar = localStorage.getItem('userAvatarImage');
        const avatarURL = savedAvatar || this.generateAvatarURL(displayName);
        
        // Update all avatar elements on the page (supports IMG and icon placeholders)
        const avatarElements = document.querySelectorAll('#headerAvatar, .user-avatar, [data-user-avatar]');
        avatarElements.forEach(avatar => {
            if (avatar) {
                if (avatar.tagName === 'IMG') {
                    avatar.src = avatarURL;
                    avatar.alt = `${displayName} Avatar`;
                    avatar.style.display = 'block';
                    avatar.onerror = () => { avatar.src = this.generateAvatarURL('User'); };
                    return;
                }

                // Replace non-IMG nodes with an IMG so custom avatars render everywhere
                const img = document.createElement('img');
                img.id = avatar.id || 'headerAvatar';
                img.className = avatar.className || 'user-avatar';
                img.src = avatarURL;
                img.alt = `${displayName} Avatar`;
                img.style.cssText = 'width: 40px; height: 40px; border-radius: 50%; object-fit: cover; cursor: pointer; display: inline-block;';

                if (typeof avatar.onclick === 'function') {
                    img.onclick = avatar.onclick;
                } else if (avatar.getAttribute && avatar.getAttribute('onclick')) {
                    img.setAttribute('onclick', avatar.getAttribute('onclick'));
                }

                img.onerror = () => { img.src = this.generateAvatarURL('User'); };
                avatar.replaceWith(img);
            }
        });

        // Update user name displays
        const userNameElements = document.querySelectorAll('[data-user-name]');
        userNameElements.forEach(element => {
            element.textContent = displayName;
        });
    }

    // Generate avatar URL with user's initials (storage-efficient - no image uploads)
    generateAvatarURL(displayName, size = 40) {
        const initials = this.getInitials(displayName);
        return `https://via.placeholder.com/${size}/8B5FBF/FFFFFF?text=${initials}`;
    }

    // Get initials from display name
    getInitials(displayName) {
        if (!displayName || displayName.trim() === '') return 'U';
        
        const name = displayName.trim();
        const parts = name.split(/\s+/);
        
        if (parts.length === 1) {
            // Single word - use first letter only
            return parts[0].charAt(0).toUpperCase();
        } else {
            // Multiple words - use first letter of first two words
            return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
        }
    }

    // Set up authentication state listener
    setupAuthStateListener() {
        // Check authentication state on page load and periodically
        setInterval(() => {
            if (this.token && !this.user) {
                this.validateToken();
            }
        }, 30000); // Check every 30 seconds
    }

    // Get current user
    getCurrentUser() {
        return this.user;
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!(this.token && this.user);
    }

    // Get authorization header for API calls
    getAuthHeader() {
        return this.token ? { 'Authorization': `Bearer ${this.token}` } : {};
    }

    // Initialize data sync service when user is authenticated
    initializeDataSync() {
        if (this.isAuthenticated() && !this.dataSyncService) {
                        console.log('Initializing data sync service...');
            this.dataSyncService = new DataSyncService(this);
        }
    }

    // Stop data sync service
    stopDataSync() {
        if (this.dataSyncService) {
                        console.log('Stopping data sync service...');
            // DataSyncService doesn't have a stop method, but we can set it to null
            this.dataSyncService = null;
        }
    }

    // Force data sync
    forceDataSync() {
        if (this.dataSyncService) {
            this.dataSyncService.forceSync();
        }
    }

    // Get data sync status
    getDataSyncStatus() {
        if (this.dataSyncService) {
            return this.dataSyncService.getStatus();
        }
        return null;
    }
}

// Global function to toggle user menu
window.toggleUserMenu = function() {
    const dropdown = document.getElementById('userDropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
};

// Close user menu when clicking outside
document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu-container');
    if (userMenu && !userMenu.contains(event.target)) {
        const dropdown = document.getElementById('userDropdownMenu');
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// Initialize API authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing API authentication...');
    window.apiAuth = new APIAuthService();
});

// Export for use in other files
export { APIAuthService };