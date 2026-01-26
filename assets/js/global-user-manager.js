/**
 * Global User Management System v2
 * Handles user profile display, persistence, and updates across all pages
 * Fixed authentication state management
 */

// API Base URL - backend on port 5000
const USER_API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
  ? 'http://localhost:5000/api' 
  : window.location.origin + '/api';

const USER_ASSET_ORIGIN = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:5000'
  : window.location.origin;

const toAbsoluteAvatarUrl = (value) => {
  if (!value || typeof value !== 'string') return '';
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  // Most avatars are returned from backend as relative paths like /uploads/avatars/...
  if (value.startsWith('/')) return USER_ASSET_ORIGIN + value;
  return value;
};

class GlobalUserManager {
  constructor() {
    this.user = null;
    this.isLoggedIn = false;
    this.tokenCheckInterval = null;
    this.init();
  }

  init() {
    // Delay initialization to ensure DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.initializeUser(), 100);
      });
    } else {
      setTimeout(() => this.initializeUser(), 100);
    }
  }

  initializeUser() {
    this.loadUserFromStorage();
    this.updateUIAcrossPages();
    this.setupGlobalListeners();
    
    // Periodic sync of auth state (every 1 second)
    this.tokenCheckInterval = setInterval(() => {
      const wasLoggedIn = this.isLoggedIn;
      this.loadUserFromStorage();
      
      // Only update UI if auth state changed
      if (wasLoggedIn !== this.isLoggedIn) {
        this.updateUIAcrossPages();
      }
    }, 1000);
  }

  loadUserFromStorage() {
    try {
      const storedUser = localStorage.getItem('currentUser') || localStorage.getItem('current_user') || localStorage.getItem('user');
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('auth_token') || 
                   localStorage.getItem('authToken');

      if (storedUser) {
        try {
          this.user = JSON.parse(storedUser);
        } catch (e) {
          this.user = null;
        }
      }

      if (!this.user) {
        const displayName = localStorage.getItem('userDisplayName');
        const email = localStorage.getItem('userEmail');
        const avatar = localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL');
        if (displayName || email) {
          this.user = {
            displayName: displayName || email,
            name: displayName || email,
            email: email || '',
            avatar: avatar || ''
          };
        }
      }

      this.isLoggedIn = !!(token && this.user);
    } catch (error) {
      console.error('Error loading user from storage:', error);
      this.user = null;
      this.isLoggedIn = false;
    }
  }

  saveUserToStorage() {
    if (this.user) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    }
  }

  // Update all header elements across the application
  updateUIAcrossPages() {
    // Find all login buttons and user menus on the page
    const loginContainers = document.querySelectorAll('.login-button-container, #loginButtonContainer');
    const userMenuContainers = document.querySelectorAll('#userMenuContainer, .user-menu-container, [id*="userMenuContainer"]');

    if (this.isLoggedIn && this.user) {
      // Show user menu, hide login button
      loginContainers.forEach(container => {
        container.style.setProperty('display', 'none', 'important');
        container.style.visibility = 'hidden';
      });

      userMenuContainers.forEach(container => {
        container.style.setProperty('display', 'flex', 'important');
        container.style.visibility = 'visible';
        this.updateUserHeader(container);
      });
    } else {
      // Show login button, hide user menu
      loginContainers.forEach(container => {
        container.style.setProperty('display', 'block', 'important');
        container.style.visibility = 'visible';
      });

      userMenuContainers.forEach(container => {
        container.style.setProperty('display', 'none', 'important');
        container.style.visibility = 'hidden';
      });
    }
  }

  updateUserHeader(container) {
    if (!container || !this.user) return;
    
    try {
      // Update user name in button
      const userBtn = container.querySelector('button');
      if (userBtn) {
        const displayName = this.user.displayName || this.user.name || 'User';
        userBtn.innerHTML = `<i class="fas fa-user"></i> ${displayName}<i class="fas fa-chevron-down dropdown-arrow"></i>`;
      }

      // Update avatar if exists
      const avatar = container.querySelector('[id="headerAvatar"], img.user-avatar, i.user-avatar');
      const rawAvatarUrl = this.user.avatar || localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL');
      const avatarUrl = toAbsoluteAvatarUrl(rawAvatarUrl);
      if (avatarUrl && avatar && avatar.tagName === 'IMG') {
        avatar.src = avatarUrl;
        avatar.style.display = 'block';
      } else if (avatarUrl && avatar && avatar.tagName !== 'IMG') {
        const img = document.createElement('img');
        img.src = avatarUrl;
        img.alt = `${this.user.displayName || this.user.name || 'User'} Avatar`;
        img.id = avatar.id || 'headerAvatar';
        img.className = avatar.className || 'user-avatar';
        img.style.cssText = 'width: 36px; height: 36px; border-radius: 50%; object-fit: cover; cursor: pointer; display: inline-block; line-height: 1;';
        avatar.replaceWith(img);
      }
      
      // Update user name text
      const nameEl = container.querySelector('.user-name');
      if (nameEl) {
        nameEl.textContent = this.user.displayName || this.user.name || 'User';
      }
    } catch (error) {
      console.error('Error updating user header:', error);
    }
  }

  setupGlobalListeners() {
    // Listen for user updates from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'currentUser' || e.key === 'token' || e.key === 'auth_token' || e.key === 'authToken') {
        this.loadUserFromStorage();
        this.updateUIAcrossPages();
      }
    });
  }

  // Logout user
  logout() {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userAvatarImage');
    this.user = null;
    this.isLoggedIn = false;
    this.updateUIAcrossPages();
    setTimeout(() => {
      window.location.href = '/pages/user/login_page.html';
    }, 300);
  }

  // Update user profile (called when user edits profile)
  async updateUserProfile(newData) {
    try {
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('auth_token') ||
                   localStorage.getItem('authToken');
      
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }

      const response = await fetch(USER_API_BASE + '/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        this.user = updatedUser.user || updatedUser;
        this.saveUserToStorage();
        this.updateUIAcrossPages();
        return { success: true, message: 'Profile updated successfully' };
      } else {
        const error = await response.json();
        return { success: false, message: error.message || 'Failed to update profile' };
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, message: error.message };
    }
  }

  // Check if username is available
  async checkUsernameAvailability(username) {
    try {
      const response = await fetch(USER_API_BASE + `/users/check-username?username=${encodeURIComponent(username)}`);
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error('Error checking username:', error);
      return false;
    }
  }

  // Get user's performance report data
  getPerformanceReportData() {
    if (!this.user) return null;
    
    return {
      userName: this.user.displayName || this.user.email,
      email: this.user.email,
      memberSince: this.user.createdAt,
      totalQuizzes: this.user.quizResults?.length || 0,
      averageScore: this.calculateAverageScore(),
      totalTimeSpent: this.calculateTotalTime(),
      topApplications: this.getTopApplications(),
      recentQuizzes: (this.user.quizResults || []).slice(-10),
      generatedDate: new Date().toLocaleDateString()
    };
  }

  calculateAverageScore() {
    const results = this.user?.quizResults || [];
    if (results.length === 0) return 0;
    const total = results.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
    return Math.round(total / results.length);
  }

  calculateTotalTime() {
    const results = this.user?.quizResults || [];
    const totalMinutes = results.reduce((sum, quiz) => sum + (quiz.timeSpent || 0), 0);
    return Math.round(totalMinutes / 60);
  }

  getTopApplications() {
    const results = this.user?.quizResults || [];
    const appMap = {};
    
    results.forEach(quiz => {
      appMap[quiz.appName] = (appMap[quiz.appName] || 0) + 1;
    });

    return Object.entries(appMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([app, count]) => ({ app, quizzesTaken: count }));
  }

  // Generate CSV report
  generatePerformanceReport() {
    const data = this.getPerformanceReportData();
    if (!data) {
      alert('No performance data available');
      return;
    }

    const fileName = `${data.userName}_performance_report_${new Date().toISOString().split('T')[0]}.csv`;
    
    let csv = 'Shortcut Sensei - Performance Report\n';
    csv += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    csv += 'USER INFORMATION\n';
    csv += `Name,${data.userName}\n`;
    csv += `Email,${data.email}\n`;
    csv += `Member Since,${data.memberSince}\n\n`;
    
    csv += 'PERFORMANCE METRICS\n';
    csv += `Total Quizzes Completed,${data.totalQuizzes}\n`;
    csv += `Average Score,${data.averageScore}%\n`;
    csv += `Total Time Spent (Hours),${data.totalTimeSpent}\n`;
    csv += '\n';
    
    csv += 'TOP APPLICATIONS\n';
    csv += 'Application,Quizzes Taken\n';
    data.topApplications.forEach(app => {
      csv += `${app.app},${app.quizzesTaken}\n`;
    });
    
    csv += '\nRECENT QUIZZES\n';
    csv += 'Application,Score,Date,Time Spent (min)\n';
    data.recentQuizzes.forEach(quiz => {
      csv += `${quiz.appName},${quiz.score}%,${new Date(quiz.date).toLocaleDateString()},${quiz.timeSpent}\n`;
    });

    this.downloadCSV(csv, fileName);
  }

  downloadCSV(csv, fileName) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  // Apply dark mode across all pages
  applyDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }
}

// Initialize global user manager when DOM is ready
let globalUserManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      globalUserManager = new GlobalUserManager();
      window.globalUserManager = globalUserManager;
    }, 50);
  });
} else {
  setTimeout(() => {
    globalUserManager = new GlobalUserManager();
    window.globalUserManager = globalUserManager;
  }, 50);
}

// Make logout available globally for onclick handlers
window.logoutUser = function() {
  if (window.globalUserManager) {
    window.globalUserManager.logout();
  }
};
