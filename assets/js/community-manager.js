/**
 * Community Page Manager
 * Handles real-time fetching and display of community posts, with live updates
 */

// API Base URL - backend on port 5000
const COMMUNITY_API_BASE = (window.location.hostname === 'localhost') 
  ? 'http://localhost:5000' 
  : window.location.origin;

class CommunityPageManager {
  constructor() {
    this.posts = [];
    this.users = {};
    this.stats = {
      totalUsers: 0,
      totalDiscussions: 0,
      totalTips: 0
    };
    this.init();
  }

  async init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.initialize(), 100);
      });
    } else {
      setTimeout(() => this.initialize(), 100);
    }
  }

  async initialize() {
    console.log('Initializing Community Page Manager...');
    
    // Fetch and display posts
    await this.fetchPosts();
    
    // Setup real-time updates (poll every 3 seconds)
    setInterval(() => this.fetchPosts(), 3000);
    
    // Setup live stats updates
    await this.updateCommunityStats();
    setInterval(() => this.updateCommunityStats(), 5000);
    
    // Setup form submission for new posts
    this.setupPostForm();
  }

  async fetchPosts() {
    try {
      const response = await fetch(COMMUNITY_API_BASE + '/api/community/posts');
      if (!response.ok) {
        console.warn('Failed to fetch posts:', response.status);
        return;
      }

      const data = await response.json();
      this.posts = data.posts || [];
      
      // Render posts
      this.renderPosts();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  renderPosts() {
    const postsContainer = document.getElementById('communityPosts') || 
                          document.querySelector('.posts-container') ||
                          document.querySelector('[id*="posts"]');
    
    if (!postsContainer) {
      console.warn('Posts container not found on page');
      return;
    }

    if (this.posts.length === 0) {
      postsContainer.innerHTML = `
        <div class="no-posts-message" style="text-align: center; padding: 40px; color: #666;">
          <i class="fas fa-comments" style="font-size: 48px; margin-bottom: 20px; display: block;"></i>
          <h2>No posts yet</h2>
          <p>Be the first to share a question, tip, or discussion!</p>
        </div>
      `;
      return;
    }

    // Group posts by category
    const postsByCategory = this.groupByCategory();
    let html = '';

    for (const [category, categoryPosts] of Object.entries(postsByCategory)) {
      html += `<div class="category-section">
        <h3 class="category-title">${this.formatCategoryName(category)}</h3>`;
      
      categoryPosts.forEach(post => {
        html += this.createPostHTML(post);
      });

      html += '</div>';
    }

    postsContainer.innerHTML = html;
    this.attachEventListeners();
  }

  groupByCategory() {
    const grouped = {};
    this.posts.forEach(post => {
      const category = post.category || 'general';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(post);
    });
    return grouped;
  }

  formatCategoryName(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  createPostHTML(post) {
    const userName = post.userName || post.userId?.name || 'Anonymous';
    const userEmail = post.userEmail || post.userId?.email || '';
    const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase();
    const createdDate = new Date(post.createdAt).toLocaleDateString();
    const commentCount = post.comments?.length || 0;
    const likeCount = post.likes || 0;

    return `
      <div class="post-card" data-post-id="${post._id}">
        <div class="post-header">
          <div class="post-user-info">
            <div class="user-avatar" title="Click to view profile" data-user-id="${post.userId?._id || userEmail}" style="cursor: pointer;">
              <div class="avatar-circle">${userInitials}</div>
            </div>
            <div class="user-details">
              <span class="user-name" data-user-id="${post.userId?._id || userEmail}" style="cursor: pointer; color: #06a3be; text-decoration: underline;">
                ${userName}
              </span>
              <span class="post-date">${createdDate}</span>
            </div>
          </div>
          <span class="post-category-badge">${post.category}</span>
        </div>

        <div class="post-content">
          <h4 class="post-title">${post.title || 'Untitled'}</h4>
          <p class="post-text">${post.content || ''}</p>
        </div>

        <div class="post-footer">
          <button class="post-action-btn like-btn" data-post-id="${post._id}">
            <i class="fas fa-thumbs-up"></i>
            <span class="action-count">${likeCount}</span>
          </button>
          <button class="post-action-btn comment-btn" data-post-id="${post._id}">
            <i class="fas fa-comment"></i>
            <span class="action-count">${commentCount}</span>
          </button>
        </div>

        <div class="post-comments" id="comments-${post._id}" style="display: none;">
          <div class="comments-list">
            ${(post.comments || []).map(comment => `
              <div class="comment">
                <div class="comment-user">${comment.userName || 'Anonymous'}</div>
                <div class="comment-text">${comment.content || ''}</div>
                <div class="comment-date">${new Date(comment.createdAt).toLocaleDateString()}</div>
              </div>
            `).join('')}
          </div>
          <div class="comment-form">
            <input type="text" class="comment-input" placeholder="Add a comment..." data-post-id="${post._id}">
            <button class="comment-submit-btn" data-post-id="${post._id}">Post</button>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Like button listeners
    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const postId = btn.dataset.postId;
        this.toggleLikePost(postId);
      });
    });

    // Comment button listeners
    document.querySelectorAll('.comment-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const postId = btn.dataset.postId;
        const commentsDiv = document.getElementById(`comments-${postId}`);
        if (commentsDiv) {
          commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
        }
      });
    });

    // Comment submit listeners
    document.querySelectorAll('.comment-submit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const postId = btn.dataset.postId;
        const input = document.querySelector(`.comment-input[data-post-id="${postId}"]`);
        if (input && input.value.trim()) {
          this.addComment(postId, input.value);
          input.value = '';
        }
      });
    });

    // User profile click listeners
    document.querySelectorAll('[data-user-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const userId = el.dataset.userId;
        // Route to React profile component
        window.location.href = `/quizs/?profile=true&userId=${userId}`;
      });
    });
  }

  async toggleLikePost(postId) {
    try {
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('auth_token') ||
                   localStorage.getItem('authToken');
      
      if (!token) {
        alert('Please login to like posts');
        return;
      }

      const response = await fetch(COMMUNITY_API_BASE + `/api/community/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        // Refresh posts
        await this.fetchPosts();
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  }

  async addComment(postId, content) {
    try {
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('auth_token') ||
                   localStorage.getItem('authToken');
      
      if (!token) {
        alert('Please login to comment');
        return;
      }

      const response = await fetch(COMMUNITY_API_BASE + `/api/community/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });

      if (response.ok) {
        // Refresh posts
        await this.fetchPosts();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }

  async updateCommunityStats() {
    try {
      const response = await fetch(COMMUNITY_API_BASE + '/api/community/stats');
      if (response.ok) {
        const stats = await response.json();
        this.stats = stats.stats || stats;
        this.renderStats();
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }

  renderStats() {
    // Update community stats display
    const usersCount = document.querySelector('[id*="usersCount"], [class*="users-count"]');
    const discussionsCount = document.querySelector('[id*="discussionsCount"], [class*="discussions-count"]');
    const tipsCount = document.querySelector('[id*="tipsCount"], [class*="tips-count"]');

    if (usersCount) {
      usersCount.textContent = this.stats.totalUsers || 0;
    }
    if (discussionsCount) {
      discussionsCount.textContent = this.stats.totalDiscussions || 0;
    }
    if (tipsCount) {
      tipsCount.textContent = this.stats.totalTips || 0;
    }
  }

  setupPostForm() {
    const postForm = document.querySelector('[id*="postForm"], form[class*="post"]');
    if (postForm) {
      postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleInput = postForm.querySelector('[name="title"], input[placeholder*="title"]');
        const contentInput = postForm.querySelector('[name="content"], textarea');
        const categorySelect = postForm.querySelector('[name="category"], select');

        if (titleInput && contentInput) {
          this.createNewPost(
            titleInput.value,
            contentInput.value,
            categorySelect?.value || 'general'
          );
          postForm.reset();
        }
      });
    }
  }

  async createNewPost(title, content, category) {
    try {
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('auth_token') ||
                   localStorage.getItem('authToken');
      
      if (!token) {
        alert('Please login to create posts');
        return;
      }

      const response = await fetch(COMMUNITY_API_BASE + '/api/community/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, content, category })
      });

      if (response.ok) {
        // Refresh posts and stats
        await this.fetchPosts();
        await this.updateCommunityStats();
        alert('Post created successfully!');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  }
}

// Initialize Community Page Manager
let communityManager;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      communityManager = new CommunityPageManager();
      window.communityManager = communityManager;
    }, 100);
  });
} else {
  setTimeout(() => {
    communityManager = new CommunityPageManager();
    window.communityManager = communityManager;
  }, 100);
}
