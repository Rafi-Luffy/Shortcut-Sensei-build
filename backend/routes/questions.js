const express = require('express');
const { body, validationResult } = require('express-validator');
const Question = require('../models/Question');

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  console.log('Auth header:', authHeader); // Debug log
  console.log('Token:', token ? 'present' : 'missing'); // Debug log

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  const jwt = require('jsonwebtoken');
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      console.log('JWT verify error:', err); // Debug log
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    console.log('Decoded user:', user); // Debug log
    req.user = user;
    next();
  });
};

// Get all questions with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.application) filter.application = req.query.application;
    if (req.query.difficulty) filter.difficulty = req.query.difficulty;
    if (req.query.status) filter.status = req.query.status;

    const questions = await Question.find(filter)
      .populate('author', 'displayName avatarUrl')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-answers.votes'); // Exclude vote details for performance

    const total = await Question.countDocuments(filter);

    res.json({
      questions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get questions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single question with answers
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate('author', 'displayName avatarUrl')
      .populate('answers.author', 'displayName avatarUrl');

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Increment view count
    question.views += 1;
    await question.save();

    res.json({ question });
  } catch (error) {
    console.error('Get question error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new question
router.post('/', authenticateToken, [
  body('title').trim().isLength({ min: 10, max: 200 }),
  body('content').trim().isLength({ min: 20 }),
  body('category').isIn(['general', 'application-specific', 'troubleshooting', 'tips-tricks']),
  body('application').optional().trim().isLength({ min: 1, max: 100 }),
  body('difficulty').optional().isIn(['beginner', 'intermediate', 'advanced']),
  body('tags').optional().isArray({ max: 5 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, category, application, difficulty, tags } = req.body;

    console.log('Creating question with user:', req.user); // Debug log

    const question = new Question({
      title,
      content,
      category,
      application,
      difficulty,
      tags: tags || [],
      authorId: req.user.userId
    });

    await question.save();

    // Populate author info
    await question.populate('authorId', 'displayName avatarUrl');

    res.status(201).json({
      message: 'Question created successfully',
      question
    });
  } catch (error) {
    console.error('Create question error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update question
router.put('/:id', authenticateToken, [
  body('title').optional().trim().isLength({ min: 10, max: 200 }),
  body('content').optional().trim().isLength({ min: 20 }),
  body('category').optional().isIn(['general', 'application-specific', 'troubleshooting', 'tips-tricks']),
  body('application').optional().trim().isLength({ min: 1, max: 100 }),
  body('difficulty').optional().isIn(['beginner', 'intermediate', 'advanced']),
  body('tags').optional().isArray({ max: 5 }),
  body('status').optional().isIn(['open', 'resolved', 'closed'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if user is the author
    if (question.author.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this question' });
    }

    const updates = {};
    const allowedFields = ['title', 'content', 'category', 'application', 'difficulty', 'tags', 'status'];
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    updates.updatedAt = new Date();

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate('author', 'displayName avatarUrl');

    res.json({
      message: 'Question updated successfully',
      question: updatedQuestion
    });
  } catch (error) {
    console.error('Update question error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete question
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if user is the author
    if (question.author.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this question' });
    }

    await Question.findByIdAndDelete(req.params.id);

    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Delete question error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add answer to question
router.post('/:id/answers', authenticateToken, [
  body('content').trim().isLength({ min: 10 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const newAnswer = {
      content: req.body.content,
      author: req.user.userId,
      createdAt: new Date()
    };

    question.answers.push(newAnswer);
    question.answerCount += 1;
    question.lastActivity = new Date();

    await question.save();
    await question.populate('answers.author', 'displayName avatarUrl');

    const addedAnswer = question.answers[question.answers.length - 1];

    res.status(201).json({
      message: 'Answer added successfully',
      answer: addedAnswer
    });
  } catch (error) {
    console.error('Add answer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update answer
router.put('/:questionId/answers/:answerId', authenticateToken, [
  body('content').trim().isLength({ min: 10 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const answer = question.answers.id(req.params.answerId);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }

    // Check if user is the author
    if (answer.author.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this answer' });
    }

    answer.content = req.body.content;
    answer.updatedAt = new Date();
    question.lastActivity = new Date();

    await question.save();
    await question.populate('answers.author', 'displayName avatarUrl');

    res.json({
      message: 'Answer updated successfully',
      answer
    });
  } catch (error) {
    console.error('Update answer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Vote on answer
router.post('/:questionId/answers/:answerId/vote', authenticateToken, [
  body('voteType').isIn(['upvote', 'downvote'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const answer = question.answers.id(req.params.answerId);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }

    const userId = req.user.userId;
    const voteType = req.body.voteType;

    // Remove existing vote if any
    answer.votes = answer.votes.filter(vote => vote.user.toString() !== userId);

    // Add new vote
    answer.votes.push({
      user: userId,
      voteType,
      createdAt: new Date()
    });

    // Update vote counts
    const upvotes = answer.votes.filter(vote => vote.voteType === 'upvote').length;
    const downvotes = answer.votes.filter(vote => vote.voteType === 'downvote').length;
    answer.upvotes = upvotes;
    answer.downvotes = downvotes;

    await question.save();

    res.json({
      message: 'Vote recorded successfully',
      upvotes: answer.upvotes,
      downvotes: answer.downvotes
    });
  } catch (error) {
    console.error('Vote error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark answer as accepted
router.post('/:questionId/answers/:answerId/accept', authenticateToken, async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if user is the question author
    if (question.author.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Only question author can accept answers' });
    }

    const answer = question.answers.id(req.params.answerId);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }

    // Remove accepted status from other answers
    question.answers.forEach(ans => {
      ans.isAccepted = false;
    });

    // Mark this answer as accepted
    answer.isAccepted = true;
    question.status = 'resolved';

    await question.save();

    res.json({ message: 'Answer marked as accepted' });
  } catch (error) {
    console.error('Accept answer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;