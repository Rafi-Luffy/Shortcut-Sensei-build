// MongoDB Authentication for Shortcut Sensei
// Authentication via the MongoDB-backed API

console.log('MongoDB authentication script loading...');

// Configuration
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:5000/api'
  : window.location.origin + '/api';

// Authentication state
let currentUser = null;

// ============================================================================
// Core Authentication Functions
// ============================================================================

/**
 * Register a new user
 */
async function register(email, password, displayName) {
  try {
    console.log('Attempting registration with:', { email, displayName });
    
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        email, 
        password, 
        name: displayName || 'User' 
      })
    });

    console.log('Registration response status:', response.status);
    
    const data = await response.json();
    console.log('Registration response data:', data);
    
    // Check if response indicates failure
    if (!response.ok || !data.success) {
      console.error('Registration failed:', data.message);
      return { success: false, error: data.message || 'Registration failed' };
    }

    console.log('Registration successful:', data);

    // Store token and user data immediately
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('current_user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', data.user.email);
      localStorage.setItem('userDisplayName', data.user.name);
      currentUser = data.user;
    }

    // Return success - no verification needed
    return { 
      success: true, 
      user: data.user,
      token: data.token,
      message: 'Account created successfully! Welcome!' 
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Login user
 */
async function login(email, password) {
  try {
    console.log('Attempting login with:', email);
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    console.log('Login response status:', response.status);

    // Parse response
    const data = await response.json();

    // Check if response is ok
    if (!response.ok) {
      console.error('Login error response:', data);
      throw new Error(data.message || 'Login failed');
    }

    console.log('Login successful:', data);

    // Store token and user data
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('current_user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    localStorage.setItem('userEmail', data.user.email);
    localStorage.setItem('userDisplayName', data.user.name);
    currentUser = data.user;

    return { success: true, user: data.user, message: data.message };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Logout user
 */
function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('current_user');
  currentUser = null;
  
  // Redirect to login page or home
  const currentPage = window.location.pathname;
  if (currentPage.includes('/pages/')) {
    window.location.href = '/login/';
  } else {
    window.location.href = '/login/';
  }
}

/**
 * Get current user from localStorage
 */
function getCurrentUser() {
  if (currentUser) {
    return currentUser;
  }

  const userData = localStorage.getItem('userData');
  if (userData) {
    try {
      currentUser = JSON.parse(userData);
      return currentUser;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  return null;
}

/**
 * Check if user is authenticated
 */
function isAuthenticated() {
  const token = localStorage.getItem('auth_token');
  const user = getCurrentUser();
  return !!(token && user);
}

/**
 * Get authentication token
 */
function getAuthToken() {
  return localStorage.getItem('auth_token');
}

/**
 * Request password reset
 */
async function forgotPassword(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Password reset request failed');
    }

    return { success: true, message: data.message, resetToken: data.resetToken };
  } catch (error) {
    console.error('Password reset request error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Reset password with token
 */
async function resetPassword(token, newPassword) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, newPassword })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Password reset failed');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Password reset error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================================================
// API Helper Functions with Authentication
// ============================================================================

/**
 * Make authenticated API request
 */
async function authenticatedFetch(url, options = {}) {
  const token = getAuthToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers
  };

  const response = await fetch(url, { ...options, headers });

  // Handle token expiration
  if (response.status === 401 || response.status === 403) {
    logout();
    throw new Error('Session expired. Please login again.');
  }

  return response;
}

/**
 * Get user profile
 */
async function getUserProfile() {
  try {
    const response = await authenticatedFetch(`${API_BASE_URL}/users/profile`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch profile');
    }

    // Update stored user data
    localStorage.setItem('current_user', JSON.stringify(data.user));
    currentUser = data.user;

    return { success: true, user: data.user };
  } catch (error) {
    console.error('Get profile error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update user profile
 */
async function updateProfile(updates) {
  try {
    const response = await authenticatedFetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update profile');
    }

    // Update stored user data
    localStorage.setItem('current_user', JSON.stringify(data.user));
    currentUser = data.user;

    return { success: true, user: data.user, message: data.message };
  } catch (error) {
    console.error('Update profile error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Add bookmark
 */
async function addBookmark(shortcut, description, application, category) {
  try {
    const applicationName = application || 'Application';
    const applicationId = applicationName.toLowerCase().replace(/\s+/g, '-');

    const response = await authenticatedFetch(`${API_BASE_URL}/users/bookmark`, {
      method: 'POST',
      body: JSON.stringify({
        shortcut,
        description,
        application: applicationName,
        applicationName,
        applicationId,
        category
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to add bookmark');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Add bookmark error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Remove bookmark
 */
async function removeBookmark(shortcut, application) {
  try {
    const applicationName = application || 'Application';
    const applicationId = applicationName.toLowerCase().replace(/\s+/g, '-');

    const response = await authenticatedFetch(`${API_BASE_URL}/users/bookmark`, {
      method: 'DELETE',
      body: JSON.stringify({
        shortcut,
        application: applicationName,
        applicationName,
        applicationId
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to remove bookmark');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Remove bookmark error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Save quiz result
 */
async function saveQuizResult(application, score, totalQuestions, difficulty, timeSpent) {
  try {
    const response = await authenticatedFetch(`${API_BASE_URL}/users/quiz-result`, {
      method: 'POST',
      body: JSON.stringify({ application, score, totalQuestions, difficulty, timeSpent })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to save quiz result');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Save quiz result error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get user progress
 */
async function getUserProgress() {
  try {
    const response = await authenticatedFetch(`${API_BASE_URL}/users/progress`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch progress');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Get progress error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get user bookmarks
 */
async function getBookmarks() {
  try {
    const response = await authenticatedFetch(`${API_BASE_URL}/users/progress`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch bookmarks');
    }

    return { success: true, bookmarks: data.bookmarks || [] };
  } catch (error) {
    console.error('Get bookmarks error:', error);
    return { success: false, bookmarks: [], error: error.message };
  }
}

/**
 * Subscribe to newsletter
 */
async function subscribeNewsletter(email) {
  try {
    const token = getAuthToken();
    const headers = { 'Content-Type': 'application/json' };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/users/newsletter/subscribe`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Newsletter subscription failed');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================================================
// UI Update Functions
// ============================================================================

/**
 * Update UI based on authentication state
 */
function updateUIForAuthState() {
  const user = getCurrentUser();
  const isLoggedIn = isAuthenticated();

  // Update user dropdown/avatar - support both ID patterns
  const userMenuContainer = document.getElementById('userMenuContainer');
  const loginButtonContainer = document.getElementById('loginButtonContainer');
  const headerAvatar = document.getElementById('headerAvatar');
  const loginButton = document.getElementById('loginButton');

  console.log('Updating UI for auth state. Logged in:', isLoggedIn, 'User:', user);

  if (isLoggedIn && user) {
    // Show user menu container
    if (userMenuContainer) {
      userMenuContainer.style.display = 'flex';
      userMenuContainer.style.visibility = 'visible';
      console.log('Showing user menu container');
    }

    // Hide login button containers
    if (loginButtonContainer) {
      loginButtonContainer.style.display = 'none';
      console.log('Hiding login button container');
    }
    if (loginButton) {
      loginButton.style.display = 'none';
    }

    // Update user name in dropdown if exists
    const userNameElement = document.querySelector('.user-name');
    if (userNameElement) {
      userNameElement.textContent = user.displayName || user.email;
    }
  } else {
    // Show login button, hide user menu
    console.log('User not logged in - showing login button');
    if (userMenuContainer) {
      userMenuContainer.style.display = 'none';
      console.log('Hiding user menu container');
    }
    if (loginButtonContainer) {
      loginButtonContainer.style.display = 'flex';
      console.log('Showing login button container');
    }
    if (loginButton) {
      loginButton.style.display = 'flex';
    }
  }
}

/**
 * Toggle user dropdown
 */
function toggleUserDropdown() {
  const dropdown = document.getElementById('userDropdownMenu');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

/**
 * Close dropdown when clicking outside
 */
document.addEventListener('click', function(event) {
  const userAvatar = document.getElementById('userAvatar');
  const dropdown = document.getElementById('userDropdownMenu');
  
  if (dropdown && userAvatar) {
    if (!userAvatar.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  }
});

// ============================================================================
// Page Load Initialization
// ============================================================================

/**
 * Initialize authentication on page load
 */
function initializeAuth() {
  console.log('Initializing MongoDB authentication...');
  
  // Update UI based on auth state
  updateUIForAuthState();
  
  // Setup user avatar click handler
  const headerAvatar = document.getElementById('headerAvatar');
  if (headerAvatar) {
    headerAvatar.addEventListener('click', toggleUserDropdown);
  }
  
  // Also check periodically in case user logs in/out in another tab
  setInterval(() => {
    const currentUser = getCurrentUser();
    const isLoggedIn = isAuthenticated();
    const userMenuContainer = document.getElementById('userMenuContainer');
    
    if (isLoggedIn && userMenuContainer && userMenuContainer.style.display === 'none') {
      console.log('Auth state changed - updating UI');
      updateUIForAuthState();
    }
  }, 1000);
  
  console.log('MongoDB authentication initialized');
  console.log('User authenticated:', isAuthenticated());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAuth);
} else {
  initializeAuth();
}

// ============================================================================
// Export functions for global use
// ============================================================================

window.MongoAuth = {
  // Core auth
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  getAuthToken,
  forgotPassword,
  resetPassword,
  
  // User management
  getUserProfile,
  updateProfile,
  
  // Features
  addBookmark,
  removeBookmark,
  getBookmarks,
  saveQuizResult,
  getUserProgress,
  subscribeNewsletter,
  
  // UI
  updateUIForAuthState,
  toggleUserDropdown
};

// Create authService alias for compatibility
window.authService = window.MongoAuth;

// Add global functions for onclick handlers
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

window.logout = async function() {
  await window.MongoAuth.logout();
  window.location.href = '../user/login_page.html';
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

console.log('MongoDB authentication module loaded');
