/**
 * Bookmark Management System
 * Handles adding/removing bookmarks across all application pages
 */

// API Base URL - backend on port 5000
const BOOKMARK_API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
  ? 'http://localhost:5000/api' 
  : window.location.origin + '/api';

class BookmarkManager {
  constructor() {
    this.userBookmarks = [];
    this.initBookmarkButtons();
    this.loadBookmarksFromApi();
  }

  getToken() {
    return localStorage.getItem('authToken') || localStorage.getItem('token') || localStorage.getItem('auth_token');
  }

  async loadBookmarksFromApi() {
    const token = this.getToken();
    if (!token) return;

    try {
      const response = await fetch(`${BOOKMARK_API_BASE}/users/progress`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        this.userBookmarks = data.bookmarks || [];
        this.updateBookmarkButtonStates();
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  }

  initBookmarkButtons() {
    // Find all bookmark buttons
    document.querySelectorAll('[data-bookmark-app], .bookmark-btn, [onclick*="bookmark"]').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleBookmarkClick(e));
    });

    // Update bookmark button states
    this.updateBookmarkButtonStates();
  }

  handleBookmarkClick(event) {
    const token = localStorage.getItem('token') || localStorage.getItem('auth_token');
    if (!token) {
      alert('Please log in to bookmark applications');
      window.location.href = '/pages/user/login_page.html';
      return;
    }

    event.stopPropagation();
    const btn = event.target.closest('[data-bookmark-app], .bookmark-btn, button');
    const appName = btn?.getAttribute('data-bookmark-app') || btn?.getAttribute('data-app') || this.getAppNameFromPage();

    if (!appName) {
      console.error('Could not determine application name');
      return;
    }

    this.toggleBookmark(appName, btn);
  }

  async toggleBookmark(appName, button) {
    const token = this.getToken();
    if (!token) return;

    const applicationId = appName.toLowerCase().replace(/\s+/g, '-');
    const isBookmarked = this.isBookmarked(appName, applicationId);

    const payload = {
      applicationId,
      applicationName: appName,
      shortcut: `Guide for ${appName}`,
      description: `Shortcut guide for ${appName}`,
      url: window.location.pathname
    };

    try {
      const response = await fetch(`${BOOKMARK_API_BASE}/users/bookmark`, {
        method: isBookmarked ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await this.loadBookmarksFromApi();
        if (button) {
          if (isBookmarked) {
            button.classList.remove('bookmarked');
            button.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
          } else {
            button.classList.add('bookmarked');
            button.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
          }
        }
      }
    } catch (error) {
      console.error('Error saving bookmark:', error);
    }
  }

  isBookmarked(appName, appId) {
    return this.userBookmarks.some(b => b.applicationName === appName || b.applicationId === appId);
  }

  updateBookmarkButtonStates() {
    document.querySelectorAll('[data-bookmark-app], .bookmark-btn').forEach(btn => {
      const appName = btn.getAttribute('data-bookmark-app') || btn.getAttribute('data-app');
      if (appName && this.isBookmarked(appName, appName.toLowerCase().replace(/\s+/g, '-'))) {
        btn.classList.add('bookmarked');
        btn.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
      }
    });
  }

  getAppNameFromPage() {
    // Try to extract app name from page title or URL
    const title = document.title;
    const path = window.location.pathname;
    
    // Extract from path like /pages/applications/Microsoft_Word.html
    const match = path.match(/\/([^\/]+)\.html/);
    if (match) {
      return match[1].replace(/_/g, ' ');
    }

    // Extract from title
    return title.replace(' - Shortcut Sensei', '').trim();
  }

  getBookmarks() {
    return this.userBookmarks;
  }
}

// Initialize bookmark manager
let bookmarkManager;
document.addEventListener('DOMContentLoaded', () => {
  bookmarkManager = new BookmarkManager();
  window.bookmarkManager = bookmarkManager;
});

// Global bookmark function
window.toggleBookmark = function(appName) {
  if (window.bookmarkManager) {
    window.bookmarkManager.toggleBookmark(appName);
  }
};
