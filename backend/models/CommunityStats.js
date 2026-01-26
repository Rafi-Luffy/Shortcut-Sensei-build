const mongoose = require('mongoose');

const communityStatsSchema = new mongoose.Schema({
  totalUsers: {
    type: Number,
    default: 0
  },
  totalQuestions: {
    type: Number,
    default: 0
  },
  totalAnswers: {
    type: Number,
    default: 0
  },
  activeUsersToday: {
    type: Number,
    default: 0
  },
  activeUsersWeek: {
    type: Number,
    default: 0
  },
  activeUsersMonth: {
    type: Number,
    default: 0
  },
  questionsAnsweredToday: {
    type: Number,
    default: 0
  },
  questionsAnsweredWeek: {
    type: Number,
    default: 0
  },
  questionsAnsweredMonth: {
    type: Number,
    default: 0
  },
  topCategories: [{
    category: String,
    count: Number
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Ensure only one stats document exists
communityStatsSchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('CommunityStats', communityStatsSchema);