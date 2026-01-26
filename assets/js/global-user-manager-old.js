class GlobalUserManager {
  constructor() {
    this.user = null;
    this.isLoggedIn = false;
    this.init();
  }

  init() {
    this.loadUserFromStorage();
    this.updateUIAcrossPages();
    this.setupGlobalListeners();
  }

  loadUserFromStorage() {
    try {
      const storedUser = localStorage.getItem('currentUser');
      const token = localStorage.getItem('token') || localStorage.getItem('auth_token') || localStorage.getItem('authToken');
      
      if (storedUser && token) {
        this.user = JSON.parse(storedUser);
        this.isLoggedIn = true;
      }
    } catch (error) {
      console.error('Error loading user from storage:', error);
    }
  }

  saveUserToStorage() {
    if (this.user) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    }
  }

  // Update all header elements across the application
  updateUIAcrossPages() {
    if (!this.isLoggedIn || !this.user) {
      this.showLoginUI();
      return;
    }

    this.showUserUI();
  }

  showLoginUI() {
    // Hide user menu, show login buttons
    const userMenus = document.querySelectorAll('[id*="userMenu"]');
    const loginBtns = document.querySelectorAll('[id*="loginBtn"], .login-btn, .login-button-container');
    
    userMenus.forEach(menu => menu.style.display = 'none');
    loginBtns.forEach(btn => btn.style.display = 'block');
  }

  showUserUI() {
    // Show user menu with profile info
    const userMenuContainers = document.querySelectorAll('[id*="userMenuContainer"]');
    const loginBtnContainers = document.querySelectorAll('.login-button-container');
    
    userMenuContainers.forEach(container => {
      container.style.display = 'flex';
      this.updateUserHeader(container);
    });
    
    loginBtnContainers.forEach(btn => btn.style.display = 'none');
  }

  updateUserHeader(container) {
    if (!container) return;
    
    // Update user name in button
    const userBtn = container.querySelector('.login-btn, button[onclick*="toggleUserMenu"]');
    if (userBtn && this.user.displayName) {
      userBtn.innerHTML = `<i class="fas fa-user"></i> ${this.user.displayName}
        <i class="fas fa-chevron-down dropdown-arrow"></i>`;
    }

    // Update avatar
    const avatar = container.querySelector('[id="headerAvatar"], .user-avatar');
    if (avatar && this.user.avatar) {
      avatar.src = this.user.avatar;
      avatar.style.display = 'block';
    }
  }

  setupGlobalListeners() {
    // Listen for user updates from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'currentUser') {
        this.loadUserFromStorage();
        this.updateUIAcrossPages();
      }
      if (e.key === 'darkMode') {
        this.applyDarkMode(e.newValue === 'true');
      }
    });
  }

  // Update user profile (called when user edits profile)
  async updateUserProfile(newData) {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('auth_token');
      const response = await fetch('/api/users/profile', {
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
      const response = await fetch(`/api/users/check-username?username=${encodeURIComponent(username)}`);
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error('Error checking username:', error);
      return false;
    }
  }

  // Logout user
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('authToken');
    this.user = null;
    this.isLoggedIn = false;
    this.updateUIAcrossPages();
    window.location.href = '/pages/user/login_page.html';
  }

  // Apply dark mode across all pages
  applyDarkMode(isDark) {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  // Get user's performance report data
  getPerformanceReportData() {
    return {
      userName: this.user.displayName || this.user.email,
      email: this.user.email,
      memberSince: this.user.createdAt,
      totalQuizzes: this.user.quizResults?.length || 0,
      averageScore: this.calculateAverageScore(),
      totalTimeSpent: this.calculateTotalTime(),
      currentStreak: this.user.streak || 0,
      longestStreak: this.user.longestStreak || 0,
      totalBookmarks: this.user.bookmarks?.length || 0,
      topApplications: this.getTopApplications(),
      recentQuizzes: (this.user.quizResults || []).slice(-10),
      generatedDate: new Date().toLocaleDateString()
    };
  }

  calculateAverageScore() {
    const results = this.user.quizResults || [];
    if (results.length === 0) return 0;
    const total = results.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
    return Math.round(total / results.length);
  }

  calculateTotalTime() {
    const results = this.user.quizResults || [];
    const totalMinutes = results.reduce((sum, quiz) => sum + (quiz.timeSpent || 0), 0);
    return Math.round(totalMinutes / 60);
  }

  getTopApplications() {
    const results = this.user.quizResults || [];
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
    csv += `Current Streak,${data.currentStreak} days\n`;
    csv += `Longest Streak,${data.longestStreak} days\n`;
    csv += `Total Bookmarks,${data.totalBookmarks}\n\n`;
    
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
}

// Initialize global user manager when DOM is ready
let globalUserManager;
document.addEventListener('DOMContentLoaded', () => {
  globalUserManager = new GlobalUserManager();
  
  // Apply saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    globalUserManager.applyDarkMode(true);
  }
});

// Make it globally accessible
window.globalUserManager = globalUserManager || {};
