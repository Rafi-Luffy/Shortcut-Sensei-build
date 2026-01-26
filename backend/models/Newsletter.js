const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  unsubscribedAt: {
    type: Date,
    default: null
  },
  preferences: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
      default: 'weekly'
    },
    categories: [{
      type: String,
      enum: ['productivity', 'shortcuts', 'technology', 'tips', 'news']
    }]
  }
});

// Email already has a unique index via `unique: true`
newsletterSchema.index({ userId: 1 });

module.exports = mongoose.model('Newsletter', newsletterSchema);