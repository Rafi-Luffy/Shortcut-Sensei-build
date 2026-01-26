/**
 * Global Dark Mode Manager
 * Ensures consistent dark/light mode across all pages
 */

class DarkModeManager {
  constructor() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.init();
  }

  init() {
    this.applyMode();
    this.setupToggleListeners();
    this.syncAcrossTabs();
  }

  applyMode() {
    const html = document.documentElement;
    const body = document.body;

    if (this.isDarkMode) {
      html.classList.add('dark-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }

    // Apply to all elements that have dark-mode-toggle class
    this.applyThemeVariables();
  }

  applyThemeVariables() {
    if (this.isDarkMode) {
      document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--border-color', '#333333');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#333333');
      document.documentElement.style.setProperty('--border-color', '#e0e0e0');
    }
  }

  setupToggleListeners() {
    // Find all dark mode toggle buttons
    const toggleButtons = document.querySelectorAll('[id*="darkMode"], .dark-mode-toggle');
    
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });

    // Also check for keyboard shortcut (Ctrl/Cmd + Shift + D)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
    this.applyMode();
    this.notifyOtherTabs();
    this.updateToggleButton();
  }

  updateToggleButton() {
    const buttons = document.querySelectorAll('[id*="darkMode"], .dark-mode-toggle');
    buttons.forEach(btn => {
      const sunIcon = btn.querySelector('.fa-sun');
      const moonIcon = btn.querySelector('.fa-moon');
      
      if (sunIcon && moonIcon) {
        if (this.isDarkMode) {
          sunIcon.style.display = 'inline';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline';
        }
      }
    });
  }

  notifyOtherTabs() {
    // Notify other tabs via storage event
    const event = new CustomEvent('darkModeChanged', {
      detail: { isDarkMode: this.isDarkMode }
    });
    window.dispatchEvent(event);
  }

  syncAcrossTabs() {
    // Listen for storage changes from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'darkMode') {
        this.isDarkMode = e.newValue === 'true';
        this.applyMode();
        this.updateToggleButton();
      }
    });

    // Listen for custom event from same tab
    window.addEventListener('darkModeChanged', (e) => {
      this.updateToggleButton();
    });
  }

  getCurrentMode() {
    return this.isDarkMode ? 'dark' : 'light';
  }
}

// Initialize dark mode manager
let darkModeManager;
document.addEventListener('DOMContentLoaded', () => {
  darkModeManager = new DarkModeManager();
  window.darkModeManager = darkModeManager;
});
