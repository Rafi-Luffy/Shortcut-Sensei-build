/**
 * User Avatar Utilities
 * Generates avatar with first letter of user's name (no profile pics to save storage)
 */

class AvatarUtils {
    /**
     * Generate avatar URL with user's initials
     * @param {string} displayName - User's display name
     * @param {number} size - Avatar size in pixels (default: 40)
     * @param {string} bgColor - Background color hex without # (default: 8B5FBF purple)
     * @param {string} textColor - Text color hex without # (default: FFFFFF white)
     * @returns {string} - Avatar URL
     */
    static generateAvatarURL(displayName, size = 40, bgColor = '8B5FBF', textColor = 'FFFFFF') {
        const initials = this.getInitials(displayName);
        return `https://via.placeholder.com/${size}/${bgColor}/${textColor}?text=${initials}`;
    }

    /**
     * Get initials from display name
     * @param {string} displayName - User's display name
     * @returns {string} - User initials (1-2 characters)
     */
    static getInitials(displayName) {
        if (!displayName || displayName.trim() === '') {
            return 'U'; // Default for "User"
        }

        const name = displayName.trim();
        const parts = name.split(/\s+/); // Split by whitespace

        if (parts.length === 1) {
            // Single word name - use first letter only
            return parts[0].charAt(0).toUpperCase();
        } else {
            // Multiple words - use first letter of first two words
            return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
        }
    }

    /**
     * Create avatar element
     * @param {string} displayName - User's display name
     * @param {number} size - Avatar size
     * @returns {HTMLImageElement} - Avatar img element
     */
    static createAvatarElement(displayName, size = 40) {
        const img = document.createElement('img');
        img.src = this.generateAvatarURL(displayName, size);
        img.alt = `${displayName} Avatar`;
        img.className = 'user-avatar';
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        
        // Fallback if image fails to load
        img.onerror = () => {
            img.src = this.generateAvatarURL(displayName || 'User', size);
        };
        
        return img;
    }

    /**
     * Update all avatar elements on the page
     * @param {string} displayName - User's display name
     */
    static updateAllAvatars(displayName) {
        const avatars = document.querySelectorAll('.user-avatar, #headerAvatar, [id*="avatar"]');
        avatars.forEach(avatar => {
            if (avatar.tagName === 'IMG') {
                avatar.src = this.generateAvatarURL(displayName);
                avatar.alt = `${displayName} Avatar`;
            }
        });
    }

    /**
     * Get avatar CSS for use in styles
     * @param {string} displayName - User's display name
     * @returns {string} - CSS background-image property
     */
    static getAvatarCSS(displayName) {
        return `url('${this.generateAvatarURL(displayName)}')`;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AvatarUtils;
}

// Make available globally
window.AvatarUtils = AvatarUtils;
