const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  votes: {
    type: Number,
    default: 0
  },
  voters: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    voteType: {
      type: String,
      enum: ['up', 'down'],
      required: true
    }
  }]
});

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: ['general', 'technical', 'productivity', 'shortcuts', 'other'],
    default: 'general'
  },
  tags: [{
    type: String,
    trim: true
  }],
  answers: [answerSchema],
  votes: {
    type: Number,
    default: 0
  },
  voters: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    voteType: {
      type: String,
      enum: ['up', 'down'],
      required: true
    }
  }],
  views: {
    type: Number,
    default: 0
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  resolvedAnswerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
questionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Update answers' updatedAt field before saving
answerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Question', questionSchema);