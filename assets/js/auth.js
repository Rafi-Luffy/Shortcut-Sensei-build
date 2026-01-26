/**
 * Shortcut Sensei - Authentication & User Management
 * Handles login, registration, session management, and user progress
 */

const AUTH_CONFIG = {
    API_URL: 'http://localhost:4000/api',
    TOKEN_KEY: 'shortcut_sensei_token',
    USER_KEY: 'shortcut_sensei_user'
};

class AuthManager {
    constructor() {
        this.token = this.getToken();
        this.user = this.getUser();
    }

    // Token Management
    getToken() {
        return localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
    }

    setToken(token) {
        localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, token);
        this.token = token;
    }

    removeToken() {
        localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
        this.token = null;
    }

    // User Management
    getUser() {
        const userStr = localStorage.getItem(AUTH_CONFIG.USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    }

    setUser(user) {
        localStorage.setItem(AUTH_CONFIG.USER_KEY, JSON.stringify(user));
        this.user = user;
    }

    removeUser() {
        localStorage.removeItem(AUTH_CONFIG.USER_KEY);
        this.user = null;
    }

    // Check if user is logged in
    isLoggedIn() {
        return !!this.token && !!this.user;
    }

    // Register new user
    async register(email, password, displayName) {
        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, displayName })
            });

            const data = await response.json();

            if (response.ok) {
                this.setToken(data.token);
                this.setUser(data.user);
                return { success: true, data };
            } else {
                return { success: false, error: data.message || 'Registration failed' };
            }
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Network error. Please try again.' };
        }
    }

    // Login user
    async login(email, password) {
        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                this.setToken(data.token);
                this.setUser(data.user);
                return { success: true, data };
            } else {
                return { success: false, error: data.message || 'Login failed' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Network error. Please try again.' };
        }
    }

    // Logout user
    logout() {
        this.removeToken();
        this.removeUser();
        window.location.href = '/index.html';
    }

    // Get user profile
    async getProfile() {
        if (!this.isLoggedIn()) {
            return { success: false, error: 'Not logged in' };
        }

        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/profile`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                this.setUser(data.user);
                return { success: true, data };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            console.error('Get profile error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Update UI based on auth state
    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');

        if (this.isLoggedIn()) {
            // User is logged in
            if (loginBtn) loginBtn.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'block';
            if (userAvatar) {
                userAvatar.style.display = 'block';
                userAvatar.src = this.user.avatarUrl || '/images/default-avatar.png';
            }
            if (userName) userName.textContent = this.user.displayName;
        } else {
            // User is not logged in
            if (loginBtn) loginBtn.style.display = 'block';
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (userAvatar) userAvatar.style.display = 'none';
        }
    }
}

// Progress Manager - Handles quiz results and bookmarks
class ProgressManager {
    constructor(authManager) {
        this.auth = authManager;
    }

    // Save quiz result
    async saveQuizResult(application, score, totalQuestions) {
        if (!this.auth.isLoggedIn()) {
            return { success: false, error: 'Please login to save progress' };
        }

        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/quiz-result`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth.token}`
                },
                body: JSON.stringify({ application, score, totalQuestions })
            });

            const data = await response.json();
            return response.ok ? 
                { success: true, data } : 
                { success: false, error: data.message };
        } catch (error) {
            console.error('Save quiz error:', error);
            return { success: false, error: 'Failed to save quiz result' };
        }
    }

    // Add bookmark
    async addBookmark(application, shortcut, description) {
        if (!this.auth.isLoggedIn()) {
            return { success: false, error: 'Please login to add bookmarks' };
        }

        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth.token}`
                },
                body: JSON.stringify({ application, shortcut, description })
            });

            const data = await response.json();
            return response.ok ? 
                { success: true, data } : 
                { success: false, error: data.message };
        } catch (error) {
            console.error('Add bookmark error:', error);
            return { success: false, error: 'Failed to add bookmark' };
        }
    }

    // Remove bookmark
    async removeBookmark(application, shortcut) {
        if (!this.auth.isLoggedIn()) {
            return { success: false, error: 'Please login to remove bookmarks' };
        }

        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/bookmark`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth.token}`
                },
                body: JSON.stringify({ application, shortcut })
            });

            const data = await response.json();
            return response.ok ? 
                { success: true, data } : 
                { success: false, error: data.message };
        } catch (error) {
            console.error('Remove bookmark error:', error);
            return { success: false, error: 'Failed to remove bookmark' };
        }
    }

    // Check if shortcut is bookmarked
    isBookmarked(application, shortcut) {
        if (!this.auth.isLoggedIn() || !this.auth.user.bookmarks) {
            return false;
        }

        return this.auth.user.bookmarks.some(b => 
            b.application === application && b.shortcut === shortcut
        );
    }

    // Get user progress
    async getProgress() {
        if (!this.auth.isLoggedIn()) {
            return { success: false, error: 'Not logged in' };
        }

        try {
            const response = await fetch(`${AUTH_CONFIG.API_URL}/users/progress`, {
                headers: {
                    'Authorization': `Bearer ${this.auth.token}`
                }
            });

            const data = await response.json();
            return response.ok ? 
                { success: true, data } : 
                { success: false, error: data.message };
        } catch (error) {
            console.error('Get progress error:', error);
            return { success: false, error: 'Failed to fetch progress' };
        }
    }
}

// Initialize global instances
const auth = new AuthManager();
const progress = new ProgressManager(auth);

// Auto-update UI on page load
document.addEventListener('DOMContentLoaded', () => {
    auth.updateUI();
});

// Export for use in other scripts
window.ShortcutSensei = {
    auth,
    progress
};