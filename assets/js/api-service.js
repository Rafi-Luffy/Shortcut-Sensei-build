/**
 * API Service
 * Handles all API communications with the backend
 */
class ApiService {
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
    this.token = null;
    this.user = null;

    // Load stored auth data
    this.loadStoredAuth();
  }

  /**
   * Load stored authentication data
   */
  loadStoredAuth() {
    try {
      const token = localStorage.getItem('authToken');
      const user = localStorage.getItem('user');

      if (token) {
        this.token = token;
      }

      if (user) {
        this.user = JSON.parse(user);
      }
    } catch (error) {
      console.error('Error loading stored auth:', error);
    }
  }

  /**
   * Store authentication data
   */
  storeAuth(token, user) {
    this.token = token;
    this.user = user;

    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Clear authentication data
   */
  clearAuth() {
    this.token = null;
    this.user = null;

    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  /**
   * Get authorization headers
   */
  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  /**
   * Make an API request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        // Handle authentication errors
        if (response.status === 401) {
          this.clearAuth();
          window.location.href = '/login/';
          throw new Error('Authentication required');
        }

        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Authentication Methods

  /**
   * Register a new user
   */
  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });

    if (response.token && response.user) {
      this.storeAuth(response.token, response.user);
    }

    return response;
  }

  /**
   * Login user
   */
  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    if (response.token && response.user) {
      this.storeAuth(response.token, response.user);
    }

    return response;
  }

  /**
   * Logout user
   */
  async logout() {
    try {
      await this.request('/auth/logout', {
        method: 'POST'
      });
    } catch (error) {
      console.warn('Logout API call failed, clearing local auth anyway:', error);
    }

    this.clearAuth();
  }

  /**
   * Refresh authentication token
   */
  async refreshToken() {
    try {
      const response = await this.request('/auth/refresh', {
        method: 'POST'
      });

      if (response.token) {
        this.token = response.token;
        localStorage.setItem('authToken', response.token);
      }

      return response;
    } catch (error) {
      this.clearAuth();
      throw error;
    }
  }

  // User Profile Methods

  /**
   * Get current user profile
   */
  async getUserProfile() {
    return await this.request('/users/profile');
  }

  /**
   * Update user profile
   */
  async updateUserProfile(profileData) {
    const response = await this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });

    if (response.user) {
      this.user = response.user;
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    return response;
  }

  /**
   * Get user preferences
   */
  async getUserPreferences() {
    return await this.request('/users/preferences');
  }

  /**
   * Update user preferences
   */
  async updateUserPreferences(preferences) {
    return await this.request('/users/preferences', {
      method: 'PUT',
      body: JSON.stringify(preferences)
    });
  }

  // Quiz Methods

  /**
   * Get quiz questions
   */
  async getQuizQuestions(category = null, difficulty = null) {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (difficulty) params.append('difficulty', difficulty);

    const query = params.toString();
    return await this.request(`/quiz/questions${query ? `?${query}` : ''}`);
  }

  /**
   * Submit quiz answers
   */
  async submitQuizAnswers(answers) {
    return await this.request('/quiz/submit', {
      method: 'POST',
      body: JSON.stringify({ answers })
    });
  }

  /**
   * Get quiz results
   */
  async getQuizResults(quizId) {
    return await this.request(`/quiz/results/${quizId}`);
  }

  /**
   * Update quiz progress
   */
  async updateQuizProgress(progress) {
    return await this.request('/quiz/progress', {
      method: 'PUT',
      body: JSON.stringify(progress)
    });
  }

  // Analytics Methods

  /**
   * Track user activity
   */
  async trackActivity(activity) {
    return await this.request('/analytics/activity', {
      method: 'POST',
      body: JSON.stringify(activity)
    });
  }

  /**
   * Update user activity
   */
  async updateUserActivity(activities) {
    return await this.request('/analytics/activity', {
      method: 'PUT',
      body: JSON.stringify({ activities })
    });
  }

  /**
   * Get user statistics
   */
  async getUserStatistics() {
    return await this.request('/analytics/user-stats');
  }

  // Community Methods

  /**
   * Get community statistics
   */
  async getCommunityStats() {
    return await this.request('/community/stats');
  }

  /**
   * Get leaderboard
   */
  async getLeaderboard(timeframe = 'all') {
    return await this.request(`/community/leaderboard?timeframe=${timeframe}`);
  }

  // Data Sync Methods

  /**
   * Get sync status
   */
  async getSyncStatus() {
    return await this.request('/sync/status');
  }

  /**
   * Trigger manual sync
   */
  async triggerSync() {
    return await this.request('/sync/sync', {
      method: 'POST'
    });
  }

  /**
   * Sync user statistics
   */
  async syncUserStats() {
    return await this.request('/sync/user-stats', {
      method: 'POST'
    });
  }

  /**
   * Sync community statistics
   */
  async syncCommunityStats() {
    return await this.request('/sync/community-stats', {
      method: 'POST'
    });
  }

  // Utility Methods

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!(this.token && this.user);
  }

  /**
   * Get current user
   */
  getCurrentUser() {
    return this.user;
  }

  /**
   * Get current token
   */
  getCurrentToken() {
    return this.token;
  }

  /**
   * Handle API errors
   */
  handleError(error) {
    console.error('API Error:', error);

    // Show user-friendly error messages
    if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
      return 'Network connection error. Please check your internet connection.';
    }

    if (error.message.includes('401')) {
      return 'Authentication required. Please log in again.';
    }

    if (error.message.includes('403')) {
      return 'Access denied. You may not have permission for this action.';
    }

    if (error.message.includes('500')) {
      return 'Server error. Please try again later.';
    }

    return error.message || 'An unexpected error occurred.';
  }
}

// Create global instance
window.apiService = new ApiService();