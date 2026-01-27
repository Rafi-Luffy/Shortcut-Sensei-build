/**
 * Data Synchronization Service
 * Handles synchronization of user data between frontend and backend
 */
class DataSyncService {
  constructor(apiAuthService) {
    this.apiAuthService = apiAuthService;
    this.syncInterval = 10 * 60 * 1000; // 10 minutes
    this.isOnline = navigator.onLine;
    this.pendingChanges = new Map();
    this.lastSyncTime = null;

    this.init();
  }

  /**
   * Initialize the sync service
   */
  init() {
    // Listen for online/offline events
    window.addEventListener('online', () => {
      console.log('Connection restored, syncing data...');
      this.isOnline = true;
      this.syncPendingChanges();
    });

    window.addEventListener('offline', () => {
      console.log('Connection lost');
      this.isOnline = false;
    });

    // Start periodic sync
    this.startPeriodicSync();

    // Sync on page visibility change
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isOnline) {
        this.syncAll();
      }
    });
  }

  /**
   * Start periodic synchronization
   */
  startPeriodicSync() {
    setInterval(() => {
      if (this.isOnline) {
        this.syncAll();
      }
    }, this.syncInterval);
  }

  /**
   * Sync all data
   */
  async syncAll() {
    if (!this.isOnline) {
      console.log('Skipping sync - offline');
      return;
    }

    try {
      console.log('Syncing all data...');

      await Promise.all([
        this.syncUserProfile(),
        this.syncUserPreferences(),
        this.syncLocalStorage()
      ]);

      this.lastSyncTime = new Date();
      console.log('Data sync completed');
    } catch (error) {
      console.error('Data sync failed:', error);
    }
  }

  async syncUserProfile() {
    try {
      const localUser = this.apiAuthService.getCurrentUser();
      if (!localUser) return;

      // Get latest profile from server
      const serverResponse = await this.apiAuthService.apiCall('/users/profile');
      if (!serverResponse.success) {
        throw new Error(serverResponse.message || 'Failed to get user profile');
      }

      const serverProfile = serverResponse.data.user;

      // Merge local and server data
      const mergedProfile = this.mergeUserProfiles(localUser, serverProfile);

      // Update local storage
      localStorage.setItem('user', JSON.stringify(mergedProfile));

      // Update server if local changes exist
      if (this.hasLocalChanges('userProfile', mergedProfile)) {
        const updateResponse = await this.apiAuthService.apiCall('/users/profile', {
          method: 'PUT',
          body: JSON.stringify(mergedProfile)
        });
        if (updateResponse.success) {
          this.clearPendingChanges('userProfile');
        } else {
          throw new Error(updateResponse.message || 'Failed to update user profile');
        }
      }

    } catch (error) {
      console.error('Profile sync failed:', error);
      this.addPendingChange('userProfile', 'sync');
    }
  }

  async syncUserPreferences() {
    try {
      const localPrefs = this.getLocalPreferences();
      const serverResponse = await this.apiAuthService.apiCall('/users/preferences');
      if (!serverResponse.success) {
        throw new Error(serverResponse.message || 'Failed to get user preferences');
      }

      const serverPrefs = serverResponse.data;

      const mergedPrefs = { ...serverPrefs, ...localPrefs };

      // Update server
      const updateResponse = await this.apiAuthService.apiCall('/users/preferences', {
        method: 'PUT',
        body: JSON.stringify(mergedPrefs)
      });

      if (updateResponse.success) {
        // Update local storage
        localStorage.setItem('userPreferences', JSON.stringify(mergedPrefs));
      } else {
        throw new Error(updateResponse.message || 'Failed to update user preferences');
      }

    } catch (error) {
      console.error('Preferences sync failed:', error);
      this.addPendingChange('preferences', 'sync');
    }
  }

  async syncLocalStorage() {
    try {
      // Sync quiz progress
      const quizProgress = this.getLocalQuizProgress();
      if (quizProgress && Object.keys(quizProgress).length > 0) {
        const response = await this.apiAuthService.apiCall('/quiz/progress', {
          method: 'PUT',
          body: JSON.stringify(quizProgress)
        });
        if (response.success) {
          // Clear synced progress
          localStorage.removeItem('quizProgress');
        }
      }

      // Sync user activity
      const activity = this.getLocalActivity();
      if (activity && activity.length > 0) {
        const response = await this.apiAuthService.apiCall('/analytics/activity', {
          method: 'PUT',
          body: JSON.stringify({ activities: activity })
        });
        if (response.success) {
          // Clear synced activity
          localStorage.setItem('userActivity', JSON.stringify([]));
        }
      }

    } catch (error) {
      console.error('Local storage sync failed:', error);
    }
  }

  /**
   * Sync pending changes when coming back online
   */
  async syncPendingChanges() {
    if (!this.isOnline) return;

    console.log('Syncing pending changes...');

    for (const [key, change] of this.pendingChanges) {
      try {
        switch (change.type) {
          case 'userProfile':
            await this.syncUserProfile();
            break;
          case 'preferences':
            await this.syncUserPreferences();
            break;
          case 'quizProgress':
            await this.syncLocalStorage();
            break;
          default:
            console.warn(`Unknown pending change type: ${change.type}`);
            break;
        }
        this.pendingChanges.delete(key);
      } catch (error) {
        console.error(`Failed to sync pending change ${key}:`, error);
      }
    }
  }

  /**
   * Merge user profiles from local and server
   */
  mergeUserProfiles(local, server) {
    return {
      ...server,
      ...local,
      // Server data takes precedence for critical fields
      id: server.id || local.id,
      email: server.email || local.email,
      // Local data can override display preferences
      displayName: local.displayName || server.displayName,
      avatarUrl: local.avatarUrl || server.avatarUrl,
      preferences: {
        ...server.preferences,
        ...local.preferences
      }
    };
  }

  /**
   * Check if there are local changes that need to be synced
   */
  hasLocalChanges(type, data) {
    const pending = this.pendingChanges.get(type);
    return pending && pending.timestamp > (this.lastSyncTime || 0);
  }

  /**
   * Add a pending change
   */
  addPendingChange(type, action) {
    this.pendingChanges.set(type, {
      type,
      action,
      timestamp: Date.now()
    });
  }

  /**
   * Clear pending changes
   */
  clearPendingChanges(type) {
    this.pendingChanges.delete(type);
  }

  /**
   * Get local user preferences
   */
  getLocalPreferences() {
    try {
      const prefs = localStorage.getItem('userPreferences');
      return prefs ? JSON.parse(prefs) : {};
    } catch (error) {
      console.error('Error reading local preferences:', error);
      return {};
    }
  }

  /**
   * Get local quiz progress
   */
  getLocalQuizProgress() {
    try {
      const progress = localStorage.getItem('quizProgress');
      return progress ? JSON.parse(progress) : {};
    } catch (error) {
      console.error('Error reading quiz progress:', error);
      return {};
    }
  }

  /**
   * Get local user activity
   */
  getLocalActivity() {
    try {
      const activity = localStorage.getItem('userActivity');
      return activity ? JSON.parse(activity) : [];
    } catch (error) {
      console.error('Error reading user activity:', error);
      return [];
    }
  }

  /**
   * Force immediate sync
   */
  async forceSync() {
    console.log('⚡ Forcing immediate data synchronization...');
    await this.syncAll();
  }

  /**
   * Get sync status
   */
  getStatus() {
    return {
      isOnline: this.isOnline,
      lastSyncTime: this.lastSyncTime,
      pendingChanges: this.pendingChanges.size,
      syncInterval: this.syncInterval
    };
  }

  /**
   * Update sync interval
   */
  setSyncInterval(interval) {
    this.syncInterval = interval;
    console.log(`Sync interval updated to ${interval}ms`);
  }
}

export { DataSyncService };

module.exports = DataSyncService;