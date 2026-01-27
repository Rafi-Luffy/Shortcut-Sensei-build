// API Configuration - Central API endpoint configuration
// Backend runs on port 5000, Frontend on port 8000

const API_BASE_URL = (function() {
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ) {
    return 'http://localhost:5000/api';
  }
  // Production: Use backend URL from environment or default deployed backend
  return 'https://shortcut-sensei-backend.onrender.com/api';
})();

// Helper function to make API calls
async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Add default headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  // Add auth token if available
  const token = localStorage.getItem('token') || localStorage.getItem('auth_token');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(url, config);
    return response;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Expose on window for non-module scripts
if (typeof window !== 'undefined') {
  window.API_BASE_URL = API_BASE_URL;
  window.apiCall = apiCall;
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { API_BASE_URL, apiCall };
}
