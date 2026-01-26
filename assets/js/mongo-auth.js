// MongoDB-based Authentication Service
const API_BASE_URL = 'http://localhost:4000/api';

class MongoAuthService {
    constructor() {
        this.token = localStorage.getItem('authToken');
        this.user = JSON.parse(localStorage.getItem('user') || 'null');
    }

    // Register new user
    async register(name, email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (data.success) {
                this.token = data.token;
                this.user = data.user;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, user: data.user };
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
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                this.token = data.token;
                this.user = data.user;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, user: data.user };
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
        this.token = null;
        this.user = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        localStorage.removeItem('userAvatarImage');
        localStorage.removeItem('userDisplayName');
        return { success: true };
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!this.token && !!this.user;
    }

    // Get current user
    getCurrentUser() {
        return this.user;
    }

    // Get auth token
    getToken() {
        return this.token;
    }

    // Save quiz progress
    async saveQuizProgress(quizId, quizName, score, totalQuestions, answers) {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/quiz-progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    quizId,
                    quizName,
                    score,
                    totalQuestions,
                    answers
                })
            });

            const data = await response.json();
            
            if (data.success) {
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            
            return data;
        } catch (error) {
            console.error('Save quiz progress error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Get quiz progress
    async getQuizProgress() {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/quiz-progress`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            return await response.json();
        } catch (error) {
            console.error('Get quiz progress error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Add bookmark
    async addBookmark(applicationId, applicationName, shortcut) {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    applicationId,
                    applicationName,
                    shortcut
                })
            });

            return await response.json();
        } catch (error) {
            console.error('Add bookmark error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Remove bookmark
    async removeBookmark(applicationId, shortcutId) {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/bookmark`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    applicationId,
                    shortcutId
                })
            });

            return await response.json();
        } catch (error) {
            console.error('Remove bookmark error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Get bookmarks
    async getBookmarks() {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/bookmarks`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            return await response.json();
        } catch (error) {
            console.error('Get bookmarks error:', error);
            return { success: false, error: 'Network error' };
        }
    }

    // Update profile
    async updateProfile(name, avatar) {
        if (!this.isAuthenticated()) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const response = await fetch(`${API_BASE_URL}/user/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({ name, avatar })
            });

            const data = await response.json();
            
            if (data.success) {
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            
            return data;
        } catch (error) {
            console.error('Update profile error:', error);
            return { success: false, error: 'Network error' };
        }
    }
}

// Create singleton instance
const authService = new MongoAuthService();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = authService;
}
