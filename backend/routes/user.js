const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify token
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
};

// @route   POST /api/user/quiz-progress
// @desc    Save quiz progress
// @access  Private
router.post('/quiz-progress', authMiddleware, async (req, res) => {
  try {
    const { quizId, quizName, score, totalQuestions, answers } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Add quiz progress
    user.quizProgress.push({
      quizId,
      quizName,
      score,
      totalQuestions,
      completedAt: new Date(),
      answers
    });

    // Update points
    user.totalPoints += score;

    // Update streak
    const today = new Date().setHours(0, 0, 0, 0);
    const lastActivity = user.streak.lastActivity ? 
      new Date(user.streak.lastActivity).setHours(0, 0, 0, 0) : null;
    
    if (!lastActivity || today - lastActivity === 86400000) {
      // Consecutive day
      user.streak.current += 1;
      if (user.streak.current > user.streak.longest) {
        user.streak.longest = user.streak.current;
      }
    } else if (today - lastActivity > 86400000) {
      // Streak broken
      user.streak.current = 1;
    }
    user.streak.lastActivity = new Date();

    await user.save();

    res.json({
      success: true,
      message: 'Quiz progress saved',
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('Save quiz progress error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   GET /api/user/quiz-progress
// @desc    Get user quiz progress
// @access  Private
router.get('/quiz-progress', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      quizProgress: user.quizProgress
    });
  } catch (error) {
    console.error('Get quiz progress error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   POST /api/user/bookmark
// @desc    Add bookmark
// @access  Private
router.post('/bookmark', authMiddleware, async (req, res) => {
  try {
    const { applicationId, applicationName, shortcut } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Find or create application bookmark
    let appBookmark = user.bookmarks.find(b => b.applicationId === applicationId);
    
    if (!appBookmark) {
      appBookmark = {
        applicationId,
        applicationName,
        shortcuts: []
      };
      user.bookmarks.push(appBookmark);
    }

    // Check if shortcut already bookmarked
    const existingShortcut = appBookmark.shortcuts.find(
      s => s.shortcutId === shortcut.shortcutId
    );

    if (existingShortcut) {
      return res.status(400).json({ 
        success: false, 
        message: 'Shortcut already bookmarked' 
      });
    }

    // Add shortcut
    appBookmark.shortcuts.push({
      shortcutId: shortcut.shortcutId,
      keys: shortcut.keys,
      description: shortcut.description,
      bookmarkedAt: new Date()
    });

    await user.save();

    res.json({
      success: true,
      message: 'Bookmark added',
      bookmarks: user.bookmarks
    });
  } catch (error) {
    console.error('Add bookmark error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   DELETE /api/user/bookmark
// @desc    Remove bookmark
// @access  Private
router.delete('/bookmark', authMiddleware, async (req, res) => {
  try {
    const { applicationId, shortcutId } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Find application bookmark
    const appBookmark = user.bookmarks.find(b => b.applicationId === applicationId);
    
    if (!appBookmark) {
      return res.status(404).json({ 
        success: false, 
        message: 'Application bookmark not found' 
      });
    }

    // Remove shortcut
    appBookmark.shortcuts = appBookmark.shortcuts.filter(
      s => s.shortcutId !== shortcutId
    );

    // Remove application if no shortcuts left
    if (appBookmark.shortcuts.length === 0) {
      user.bookmarks = user.bookmarks.filter(b => b.applicationId !== applicationId);
    }

    await user.save();

    res.json({
      success: true,
      message: 'Bookmark removed',
      bookmarks: user.bookmarks
    });
  } catch (error) {
    console.error('Remove bookmark error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   GET /api/user/bookmarks
// @desc    Get user bookmarks
// @access  Private
router.get('/bookmarks', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      bookmarks: user.bookmarks
    });
  } catch (error) {
    console.error('Get bookmarks error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, avatar } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    if (name) user.name = name;
    if (avatar) user.avatar = avatar;

    await user.save();

    res.json({
      success: true,
      message: 'Profile updated',
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

module.exports = router;
