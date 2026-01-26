/**
 * Real-Time Progress Tracking Service
 * Handles quiz progress, user stats, and live updates
 */

class ProgressTracker {
    constructor(authService) {
        this.authService = authService;
        this.baseURL = authService.baseURL;
        this.updateInterval = null;
        this.listeners = [];
        this.currentProgress = null;
    }

    /**
     * Initialize progress tracking
     */
    async init() {
        if (!this.authService.isAuthenticated()) {
            console.warn('User not authenticated. Progress tracking disabled.');
            return;
        }

        // Load initial progress
        await this.loadProgress();

        // Start real-time updates (every 30 seconds)
        this.startRealTimeUpdates();

        console.log('Progress tracking initialized');
    }

    /**
     * Load user progress from API
     */
    async loadProgress() {
        try {
            const response = await fetch(`${this.baseURL}/users/profile`, {
                headers: this.authService.getAuthHeader()
            });

            if (response.ok) {
                const data = await response.json();
                this.currentProgress = {
                    totalQuizzes: data.user.quizProgress?.length || 0,
                    totalScore: this.calculateTotalScore(data.user.quizProgress),
                    level: this.calculateLevel(data.user.quizProgress),
                    streak: data.user.learningStreak?.current || 0,
                    longestStreak: data.user.learningStreak?.longest || 0,
                    bookmarks: data.user.bookmarks?.length || 0,
                    achievements: data.user.achievements?.length || 0,
                    rank: await this.getUserRank(),
                    recentQuizzes: data.user.quizProgress?.slice(-10) || []
                };

                // Notify listeners
                this.notifyListeners(this.currentProgress);
                
                return this.currentProgress;
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
        return null;
    }

    /**
     * Submit quiz result and update progress in real-time
     */
    async submitQuizResult(quizData) {
        try {
            const response = await fetch(`${this.baseURL}/users/quiz-result`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.authService.getAuthHeader()
                },
                body: JSON.stringify(quizData)
            });

            if (response.ok) {
                const data = await response.json();
                
                // Reload progress immediately after quiz submission
                await this.loadProgress();
                
                console.log('Quiz result submitted successfully');
                return { success: true, data };
            } else {
                const error = await response.json();
                console.error('Failed to submit quiz result:', error);
                return { success: false, error: error.message };
            }
        } catch (error) {
            console.error('Error submitting quiz result:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Calculate total score from quiz progress
     */
    calculateTotalScore(quizProgress) {
        if (!quizProgress || quizProgress.length === 0) return 0;
        return quizProgress.reduce((total, quiz) => total + (quiz.score || 0), 0);
    }

    /**
     * Calculate user level based on total score
     */
    calculateLevel(quizProgress) {
        const totalScore = this.calculateTotalScore(quizProgress);
        return Math.floor(totalScore / 100) + 1;
    }

    /**
     * Get user's rank from leaderboard
     */
    async getUserRank() {
        try {
            const response = await fetch(`${this.baseURL}/users/leaderboard?limit=1000`);
            if (response.ok) {
                const data = await response.json();
                const currentUserId = localStorage.getItem('userId');
                
                const userIndex = data.users.findIndex(u => u._id === currentUserId);
                return userIndex >= 0 ? userIndex + 1 : null;
            }
        } catch (error) {
            console.error('Error fetching rank:', error);
        }
        return null;
    }

    /**
     * Start real-time updates (every 30 seconds)
     */
    startRealTimeUpdates() {
        // Clear existing interval
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }

        // Update every 30 seconds
        this.updateInterval = setInterval(() => {
            this.loadProgress();
        }, 30000);

        console.log('Real-time progress updates started (30s interval)');
    }

    /**
     * Stop real-time updates
     */
    stopRealTimeUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
            console.log('Real-time progress updates stopped');
        }
    }

    /**
     * Add progress change listener
     */
    addListener(callback) {
        this.listeners.push(callback);
    }

    /**
     * Remove progress change listener
     */
    removeListener(callback) {
        this.listeners = this.listeners.filter(cb => cb !== callback);
    }

    /**
     * Notify all listeners of progress changes
     */
    notifyListeners(progress) {
        this.listeners.forEach(callback => {
            try {
                callback(progress);
            } catch (error) {
                console.error('Error in progress listener:', error);
            }
        });
    }

    /**
     * Get current progress snapshot
     */
    getProgress() {
        return this.currentProgress;
    }

    /**
     * Force immediate progress update
     */
    async forceUpdate() {
        return await this.loadProgress();
    }

    /**
     * Update streak (call this when user completes a quiz)
     */
    async updateStreak() {
        const progress = await this.loadProgress();
        return progress?.streak || 0;
    }

    /**
     * Add bookmark
     */
    async addBookmark(shortcutData) {
        try {
            const response = await fetch(`${this.baseURL}/users/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.authService.getAuthHeader()
                },
                body: JSON.stringify(shortcutData)
            });

            if (response.ok) {
                await this.loadProgress(); // Reload to update bookmark count
                return { success: true };
            }
        } catch (error) {
            console.error('Error adding bookmark:', error);
        }
        return { success: false };
    }

    /**
     * Unlock achievement
     */
    async unlockAchievement(achievementData) {
        try {
            const response = await fetch(`${this.baseURL}/users/achievement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.authService.getAuthHeader()
                },
                body: JSON.stringify(achievementData)
            });

            if (response.ok) {
                await this.loadProgress(); // Reload to update achievement count
                return { success: true };
            }
        } catch (error) {
            console.error('Error unlocking achievement:', error);
        }
        return { success: false };
    }

    /**
     * Get leaderboard position and nearby users
     */
    async getLeaderboardContext() {
        try {
            const currentUserId = localStorage.getItem('userId');
            const response = await fetch(`${this.baseURL}/users/leaderboard?limit=1000`);
            
            if (response.ok) {
                const data = await response.json();
                const userIndex = data.users.findIndex(u => u._id === currentUserId);
                
                if (userIndex >= 0) {
                    return {
                        rank: userIndex + 1,
                        total: data.total,
                        above: userIndex > 0 ? data.users[userIndex - 1] : null,
                        current: data.users[userIndex],
                        below: userIndex < data.users.length - 1 ? data.users[userIndex + 1] : null
                    };
                }
            }
        } catch (error) {
            console.error('Error getting leaderboard context:', error);
        }
        return null;
    }
}

// Make available globally
window.ProgressTracker = ProgressTracker;

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressTracker;
}
