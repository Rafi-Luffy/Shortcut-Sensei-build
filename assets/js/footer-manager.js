/**
 * Global Footer Manager
 * Updates footer social links consistently across all pages
 */

class FooterManager {
  static SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/rafi-s-b-m-a3492a265/',
    facebook: 'https://www.facebook.com/profile.php?id=100015198880002',
    twitter: 'https://twitter.com/RAFI09925204'
  };

  static init() {
    this.updateAllFooterLinks();
  }

  static updateAllFooterLinks() {
    // Update all footer links
    document.querySelectorAll('footer').forEach(footer => {
      this.updateFooterSection(footer);
    });
  }

  static updateFooterSection(footer) {
    // Normalize social links/icons to match the homepage footer
    const socialLinks = footer.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
      const icon = link.querySelector('i');
      if (!icon) return;

      if (icon.classList.contains('fa-facebook') || icon.classList.contains('fa-facebook-f')) {
        link.href = this.SOCIAL_LINKS.facebook;
        icon.className = 'fab fa-facebook';
      } else if (icon.classList.contains('fa-twitter')) {
        link.href = this.SOCIAL_LINKS.twitter;
        icon.className = 'fab fa-twitter';
      } else if (icon.classList.contains('fa-linkedin') || icon.classList.contains('fa-linkedin-in')) {
        link.href = this.SOCIAL_LINKS.linkedin;
        icon.className = 'fab fa-linkedin-in';
      }
    });

    // Remove Instagram from all footers
    const instagramTargets = footer.querySelectorAll('a[href*="instagram"], i.fa-instagram, i.fab.fa-instagram');
    instagramTargets.forEach(node => {
      const link = node.closest('a') || (node.tagName === 'A' ? node : null);
      const li = (link || node).closest('li');
      if (li) {
        li.remove();
      } else if (link) {
        link.remove();
      }
    });
  }

  static updateLink(platform, url) {
    if (this.SOCIAL_LINKS.hasOwnProperty(platform)) {
      this.SOCIAL_LINKS[platform] = url;
      this.updateAllFooterLinks();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  FooterManager.init();
  window.FooterManager = FooterManager;
});
