// Global Scripts for All Pages - Shortcut Sensei

// Newsletter Subscription Handler
function initializeNewsletter() {
    const subscribeButton = document.getElementById('subscribeButton');
    const emailInput = document.getElementById('emailInput');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const subscribeForm = document.querySelector('.subscribe-form');

    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Hide form and show confirmation
            if (subscribeForm) {
                subscribeForm.style.display = 'none';
            }
            
            if (confirmationMessage) {
                confirmationMessage.style.display = 'block';
                confirmationMessage.textContent = 'Thanks for subscribing to our newsletter!';
            }
            
            // Log subscription (replace with actual API call)
            console.log('Newsletter subscription:', email);
            
            // Reset after 5 seconds
            setTimeout(() => {
                if (subscribeForm) {
                    subscribeForm.style.display = 'flex';
                }
                if (confirmationMessage) {
                    confirmationMessage.style.display = 'none';
                }
                emailInput.value = '';
            }, 5000);
        });
    }
}

// User Menu Toggle
function initializeUserMenu() {
    const userAvatar = document.getElementById('headerAvatar');
    const userDropdown = document.getElementById('userDropdownMenu');
    
    if (userAvatar && userDropdown) {
        userAvatar.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.style.display = 'none';
            }
        });
    }
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
}

// Dark Mode Toggle
function initializeDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (darkModeToggle) {
        normalizeDarkModePreference();
        // Check for saved dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            updateDarkModeIcon(true);
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark-mode');
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            updateDarkModeIcon(isDark);
        });
    }
}

function normalizeDarkModePreference() {
    const legacyValue = localStorage.getItem('darkMode');
    const themeValue = localStorage.getItem('theme');

    if (legacyValue === 'enabled' || legacyValue === 'disabled') {
        localStorage.setItem('darkMode', legacyValue === 'enabled' ? 'true' : 'false');
        return;
    }

    if (themeValue === 'dark' || themeValue === 'light') {
        localStorage.setItem('darkMode', themeValue === 'dark' ? 'true' : 'false');
    }
}

function updateDarkModeIcon(isDark) {
    const darkModeToggle = document.querySelector('.dark-mode-toggle i');
    if (darkModeToggle) {
        darkModeToggle.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Authentication State Check
function getStoredToken() {
    const keys = ['authToken', 'auth_token', 'token'];
    for (const key of keys) {
        const value = localStorage.getItem(key);
        if (value) return value;
    }
    return null;
}

function getStoredUser() {
    const currentUser = localStorage.getItem('current_user');
    if (currentUser) {
        try {
            return JSON.parse(currentUser);
        } catch (e) {
            // ignore parse errors
        }
    }

    const legacyUser = localStorage.getItem('user');
    if (legacyUser) {
        try {
            return JSON.parse(legacyUser);
        } catch (e) {
            // ignore parse errors
        }
    }

    const displayName = localStorage.getItem('userDisplayName');
    const email = localStorage.getItem('userEmail');
    const avatar = localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL');

    if (displayName || email) {
        return {
            name: displayName || email,
            displayName: displayName || email,
            email: email || '',
            avatarUrl: avatar || ''
        };
    }

    return null;
}

function checkAuthState() {
    const authToken = getStoredToken();
    const user = getStoredUser();
    
    const userMenuContainer = document.getElementById('userMenuContainer');
    const loginButtonContainer = document.getElementById('loginButtonContainer');
    const headerAvatar = document.getElementById('headerAvatar');
    
    if (authToken || (user && (user.email || user.displayName || user.name))) {
        // User is logged in
        if (userMenuContainer) {
            userMenuContainer.style.display = 'block';
        }
        if (loginButtonContainer) {
            loginButtonContainer.style.display = 'none';
        }
        if (headerAvatar && (user?.displayName || user?.name || user?.email)) {
            // Set avatar or initials
            const displayName = user.displayName || user.name || user.email || 'User';
            const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
            headerAvatar.alt = displayName;
            // If no avatar image, you can set a default or use initials
        }
    } else {
        // User is not logged in
        if (userMenuContainer) {
            userMenuContainer.style.display = 'none';
        }
        if (loginButtonContainer) {
            loginButtonContainer.style.display = 'block';
        }
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/pages/user/login_mongo.html';
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-container input[type="text"]');
    const searchButton = document.querySelector('.search-container button');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `/search-results.html?q=${encodeURIComponent(query)}`;
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `/search-results.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

function removeCommunityNavLinks() {
    const links = document.querySelectorAll('a[href*="community"], a[href*="/quizs/?community"]');
    links.forEach(link => {
        const text = (link.textContent || '').trim().toLowerCase();
        if (text.includes('community') || link.getAttribute('href')?.includes('community')) {
            const li = link.closest('li');
            if (li) {
                li.remove();
            } else {
                link.remove();
            }
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNewsletter();
    initializeUserMenu();
    initializeMobileMenu();
    initializeDarkMode();
    checkAuthState();
    initializeSearch();
    removeCommunityNavLinks();
});

// Make logout function globally available
window.logout = logout;
