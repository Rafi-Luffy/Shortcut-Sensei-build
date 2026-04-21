// Shared API Authentication for Shortcut Sensei
// This file handles user authentication across all pages using REST API

console.log('API authentication script loading...');

// Global reference to API Auth Service instance
let apiAuthInstance = null;

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Initializing API authentication...');

    // Initialize API authentication service
    await initializeAPIAuth();

    // Set up authentication listener
    setupAuthListener();

    // Make auth functions globally available
    window.apiAuth = apiAuthInstance;
});

async function initializeAPIAuth() {
    try {
        // Import the API authentication service
        const module = await import('./api-auth.js');
        const ServiceClass = module.APIAuthService;
        window.APIAuthService = ServiceClass;
        apiAuthInstance = new ServiceClass();

        console.log('API authentication initialized successfully');
    } catch (error) {
        console.error('Error initializing API authentication:', error);
    }
}

function setupAuthListener() {
    // Check authentication state on page load and periodically
    checkAuthState();

    // Set up periodic auth state checking
    setInterval(checkAuthState, 60000); // Check every minute
}

function checkAuthState() {
    if (!apiAuthInstance) {
        return;
    }

    const isAuthenticated = apiAuthInstance.isAuthenticated();
    const user = apiAuthInstance.getCurrentUser();

    console.log('Auth state checked:', isAuthenticated ? 'User logged in' : 'User logged out');

    const userMenuContainer = document.getElementById('userMenuContainer');
    const loginButtonContainer = document.getElementById('loginButtonContainer');

    if (isAuthenticated && user) {
        console.log('User is authenticated');
        if (userMenuContainer) {
            userMenuContainer.style.display = 'block';
            userMenuContainer.classList.add('authenticated');
            updateUserProfile(user);
        }
        if (loginButtonContainer) {
            loginButtonContainer.style.display = 'none';
        }
    } else {
        console.log('User is not authenticated');
        if (userMenuContainer) {
            userMenuContainer.style.display = 'none';
            userMenuContainer.classList.remove('authenticated');
        }
        if (loginButtonContainer) {
            loginButtonContainer.style.display = 'block';
        }
    }
}

function updateUserProfile(user) {
    console.log('Updating user profile for:', user.email);

    const headerAvatar = document.getElementById('headerAvatar');
    if (headerAvatar) {
        // Use same logic as homepage - check for saved avatar first, then user photo, then default
        const savedAvatar = localStorage.getItem('userAvatarImage');
        const avatar = savedAvatar || user.photoURL || generateDefaultAvatar(user);

        const displayName = user.displayName || user.email || 'User';
        const applyAvatarToElement = (el) => {
            if (!el) return;

            if (el.tagName === 'IMG') {
                el.src = avatar;
                el.alt = `${displayName} Avatar`;
                el.style.display = 'block';
                el.onerror = () => { el.src = generateDefaultAvatar(user); };
                return;
            }

            // Replace icon/div/span/etc with an IMG so it works across all pages
            const img = document.createElement('img');
            img.id = el.id || 'headerAvatar';
            img.className = el.className || 'user-avatar';
            img.src = avatar;
            img.alt = `${displayName} Avatar`;
            img.style.cssText = 'width: 40px; height: 40px; border-radius: 50%; object-fit: cover; cursor: pointer; display: inline-block;';

            // Preserve click handler if present
            if (typeof el.onclick === 'function') {
                img.onclick = el.onclick;
            } else if (el.getAttribute && el.getAttribute('onclick')) {
                img.setAttribute('onclick', el.getAttribute('onclick'));
            }

            img.onerror = () => { img.src = generateDefaultAvatar(user); };
            el.replaceWith(img);
        };

        applyAvatarToElement(headerAvatar);

        console.log('User avatar updated successfully');
    } else {
        console.warn('Header avatar element not found');
    }
}

function generateDefaultAvatar(user) {
    const displayName = user.displayName || user.email || 'User';
    const firstName = displayName.split(' ')[0] || displayName;
    const lastName = displayName.split(' ')[1] || '';
    const initials = firstName.charAt(0).toUpperCase() + (lastName ? lastName.charAt(0).toUpperCase() : firstName.charAt(1).toUpperCase());

    return `https://via.placeholder.com/40/8B5FBF/FFFFFF?text=${initials}`;
}

// Global logout function
window.logout = async function() {
    console.log('Logging out user...');

    try {
        if (window.apiAuth && typeof window.apiAuth.logout === 'function') {
            const result = await window.apiAuth.logout();

            if (result && result.success) {
                console.log('User logged out successfully');
                return;
            }

            if (result && result.error) {
                console.error('Error signing out:', result.error);
                return;
            }

            return;
        }

        console.warn('API auth is not initialized yet');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};

// Global function to toggle user menu
window.toggleUserMenu = function() {
    const dropdown = document.getElementById('userDropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
};

// Close user menu when clicking outside
document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu-container');
    if (userMenu && !userMenu.contains(event.target)) {
        const dropdown = document.getElementById('userDropdownMenu');
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});
