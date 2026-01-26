const User = require('../models/User');
const Question = require('../models/Question');
const CommunityStats = require('../models/CommunityStats');

class DataSyncService {
  constructor() {
    this.syncInterval = 5 * 60 * 1000; // 5 minutes
    this.isRunning = false;
  }

  /**
   * Start the data synchronization service
   */
  start() {
    if (this.isRunning) {
      console.log('Data sync service is already running');
      return;
    }

    console.log('Starting data synchronization service...');
    this.isRunning = true;

    // Run initial sync with error handling
    this.syncAll().catch(error => {
      console.error('Initial data sync failed:', error);
    });

    // Set up periodic sync with error handling
    setInterval(() => {
      this.syncAll().catch(error => {
        console.error('Periodic data sync failed:', error);
      });
    }, this.syncInterval);
  }

  /**
   * Get the current status of the sync service
   */
  getStatus() {
    return {
      isRunning: this.isRunning,
      lastSyncTime: this.lastSyncTime,
      syncInterval: this.syncInterval,
      nextSyncTime: this.lastSyncTime ? new Date(this.lastSyncTime.getTime() + this.syncInterval) : null
    };
  }

  /**
   * Run all synchronization tasks
   */
  async syncAll() {
    try {
      console.log('Running data synchronization...');

      await Promise.all([
        this.syncUserStatistics(),
        this.syncCommunityStats(),
        this.syncQuestionCounts(),
        this.cleanupOrphanedData()
      ]);

      console.log('Data synchronization completed');
    } catch (error) {
      console.error('Data synchronization failed:', error);
    }
  }

  /**
   * Sync user statistics (questions posted, answers posted, etc.)
   */
  async syncUserStatistics() {
    try {
      console.log('Syncing user statistics...');

      const users = await User.find({});
      let updatedCount = 0;

      for (const user of users) {
        // Count questions posted by user
        const questionsCount = await Question.countDocuments({ author: user._id });

        // Count answers posted by user (across all questions)
        const answersCount = await Question.aggregate([
          { $match: { 'answers.author': user._id } },
          { $unwind: '$answers' },
          { $match: { 'answers.author': user._id } },
          { $count: 'totalAnswers' }
        ]);

        const answersPosted = answersCount.length > 0 ? answersCount[0].totalAnswers : 0;

        // Calculate total votes received
        const votesReceived = await Question.aggregate([
          { $match: { author: user._id } },
          { $group: { _id: null, totalUpvotes: { $sum: '$upvotes' }, totalDownvotes: { $sum: '$downvotes' } } }
        ]);

        const totalVotes = votesReceived.length > 0
          ? votesReceived[0].totalUpvotes - votesReceived[0].totalDownvotes
          : 0;

        // Update user if statistics changed
        if (user.questionsPosted !== questionsCount ||
            user.answersPosted !== answersPosted ||
            user.totalVotes !== totalVotes) {

          await User.findByIdAndUpdate(user._id, {
            questionsPosted: questionsCount,
            answersPosted: answersPosted,
            totalVotes: totalVotes
          });

          updatedCount++;
        }
      }

      console.log(`Synced statistics for ${updatedCount} users`);
    } catch (error) {
      console.error('User statistics sync failed:', error);
    }
  }

  /**
   * Sync community statistics
   */
  async syncCommunityStats() {
    try {
      console.log('Syncing community statistics...');

      // Get current statistics
      const totalUsers = await User.countDocuments({ isActive: true });
      const totalQuestions = await Question.countDocuments({});
      const totalAnswers = await Question.aggregate([
        { $unwind: '$answers' },
        { $count: 'total' }
      ]);
      const totalViews = await Question.aggregate([
        { $group: { _id: null, totalViews: { $sum: '$views' } } }
      ]);

      const stats = {
        totalUsers,
        totalQuestions,
        totalAnswers: totalAnswers.length > 0 ? totalAnswers[0].total : 0,
        totalViews: totalViews.length > 0 ? totalViews[0].totalViews : 0,
        lastUpdated: new Date()
      };

      // Update or create community stats
      await CommunityStats.findOneAndUpdate(
        {}, // Empty filter to match any document
        stats,
        { upsert: true, new: true }
      );

      console.log('Community statistics updated');
    } catch (error) {
      console.error('Community statistics sync failed:', error);
    }
  }

  /**
   * Sync question counts and metadata
   */
  async syncQuestionCounts() {
    try {
      console.log('Syncing question counts...');

      const questions = await Question.find({});
      let updatedCount = 0;

      for (const question of questions) {
        const answersCount = question.answers ? question.answers.length : 0;

        // Update answer count if it doesn't match
        if (question.answersCount !== answersCount) {
          await Question.findByIdAndUpdate(question._id, {
            answersCount: answersCount
          });
          updatedCount++;
        }
      }

      console.log(`Synced counts for ${updatedCount} questions`);
    } catch (error) {
      console.error('Question counts sync failed:', error);
    }
  }

  /**
   * Clean up orphaned data (answers with deleted authors, etc.)
   */
  async cleanupOrphanedData() {
    try {
      console.log('Cleaning up orphaned data...');

      let cleanedCount = 0;

      // Find questions with answers from non-existent users
      const questions = await Question.find({}).populate('answers.author');

      for (const question of questions) {
        if (question.answers && question.answers.length > 0) {
          const validAnswers = question.answers.filter(answer => answer.author != null);

          if (validAnswers.length !== question.answers.length) {
            await Question.findByIdAndUpdate(question._id, {
              answers: validAnswers
            });
            cleanedCount++;
          }
        }
      }

      console.log(`Cleaned up ${cleanedCount} orphaned records`);
    } catch (error) {
      console.error('Orphaned data cleanup failed:', error);
    }
  }

  /**
   * Sync user data from external sources (future use)
   */
  async syncExternalUserData(userId, externalData) {
    try {
      console.log(`Syncing external data for user ${userId}`);

      const updateData = {};

      // Map external data to internal fields
      if (externalData.displayName) updateData.displayName = externalData.displayName;
      if (externalData.photoURL) updateData.avatarUrl = externalData.photoURL;
      if (externalData.lastLogin) updateData.lastLogin = new Date(externalData.lastLogin);

      await User.findByIdAndUpdate(userId, updateData);

      console.log(`External data synced for user ${userId}`);
    } catch (error) {
      console.error(`External data sync failed for user ${userId}:`, error);
    }
  }

  /**
   * Force immediate sync
   */
  async forceSync() {
    console.log('Forcing immediate data synchronization...');
    await this.syncAll();
  }
}

// Export singleton instance
module.exports = new DataSyncService();