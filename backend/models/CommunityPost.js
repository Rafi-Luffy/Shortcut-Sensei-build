const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['general', 'tips', 'questions', 'showcase', 'help'],
    default: 'general'
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    userName: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true  // For sorting posts by date
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
communityPostSchema.index({ userId: 1 });
communityPostSchema.index({ category: 1 });
communityPostSchema.index({ createdAt: -1 });

module.exports = mongoose.model('CommunityPost', communityPostSchema);
