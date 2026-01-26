const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const User = require('../models/User');
const Newsletter = require('../models/Newsletter');
const emailService = require('../services/emailService');
const brevoService = require('../services/brevoService');

const router = express.Router();

// Configure multer for avatar uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads/avatars');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'avatar-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    if (user?.id && !user?.userId) {
      req.user.userId = user.id;
    }
    next();
  });
};

// Register new user - NO EMAIL VERIFICATION REQUIRED (simplified for faster testing)
router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('displayName').trim().isLength({ min: 2, max: 50 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, displayName } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate verification token
    // No verification tokens needed anymore
    const verificationToken = null;
    const verificationExpires = null;

    // Create new user - AUTO-VERIFIED (no email verification required)
    // Password will be hashed by the pre-save hook in User model
    const user = new User({
      email,
      name: displayName,  // User model uses 'name' field
      password: password,  // Will be hashed by pre-save hook
      isEmailVerified: true, // Auto-verified - no verification needed
      emailVerificationToken: null,
      emailVerificationExpires: null,
      avatar: `https://via.placeholder.com/40/8B5FBF/FFFFFF?text=${displayName.charAt(0).toUpperCase()}`
    });

    await user.save();

    // Send welcome email immediately after registration
    try {
      await brevoService.sendWelcomeEmail(email, displayName);
      console.log(`User registered and welcome email sent: ${email}`);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Continue with registration even if email fails
    }

    // Mark as logged in since we're auto-logging them in
    user.hasLoggedIn = true;
    await user.save();

    // Generate JWT token for immediate login
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Account created successfully! Welcome to Shortcut Sensei!',
      token,
      user: {
        id: user._id,
        email: user.email,
        displayName: user.name,
        avatarUrl: user.avatar,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Verify email with token
router.get('/verify-email/:token', async (req, res) => {
  try {
    const { token } = req.params;

    // Find user with this verification token
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid or expired verification token. Please request a new verification email.'
      });
    }

    // Mark email as verified
    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    await user.save();

    // Send welcome email
    try {
      await emailService.sendWelcomeEmail(user.email, user.name);
      console.log(`Welcome email sent to ${user.email}`);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
    }

    res.json({
      message: 'Email verified successfully! You can now login.',
      success: true
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ message: 'Server error during email verification' });
  }
});

// Resend verification email
router.post('/resend-verification', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if user exists
      return res.json({ message: 'If an account exists, a verification email has been sent.' });
    }

    if (user.isEmailVerified) {
      return res.status(400).json({ message: 'Email is already verified' });
    }

    // Generate new verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    user.emailVerificationToken = verificationToken;
    user.emailVerificationExpires = verificationExpires;
    await user.save();

    // Send verification email
    try {
      await emailService.sendVerificationEmail(email, user.name, verificationToken);
      console.log(`Verification email resent to ${email}`);
    } catch (emailError) {
      console.error('Failed to resend verification email:', emailError);
    }

    res.json({
      message: 'Verification email sent. Please check your inbox.'
    });
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login user
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user by email and explicitly select password field
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    if (!user.password || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        displayName: user.name,  // User model uses 'name' field
        avatarUrl: user.avatar,  // User model uses 'avatar' field
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// ============================================================================
// EMAIL VERIFICATION ENDPOINTS - DISABLED (using simplified registration)
// ============================================================================
// 
// Email verification is disabled to simplify the registration flow.
// All new users are automatically verified (isEmailVerified: true).
// These endpoints are kept commented for future reference if needed.
//
// /* DISABLED EMAIL VERIFICATION ENDPOINTS
// 
// router.get('/verify-email/:token', async (req, res) => {
//   res.status(501).json({ 
//     message: 'Email verification is disabled. All users are auto-verified.' 
//   });
// });
// 
// router.post('/resend-verification', async (req, res) => {
//   res.status(501).json({ 
//     message: 'Email verification is disabled. All users are auto-verified.' 
//   });
// });
// 
// END DISABLED ENDPOINTS */

// Get current user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // Handle different token structures (userId, id, or _id) + fallback by email
    const tokenUserId = req.user?.userId || req.user?.id || req.user?._id;
    const tokenEmail = req.user?.email;

    let user = null;

    if (tokenUserId && mongoose.isValidObjectId(tokenUserId)) {
      user = await User.findById(tokenUserId).select('-password').lean();
    }

    if (!user && tokenEmail) {
      user = await User.findOne({ email: tokenEmail }).select('-password').lean();
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure all expected fields are present
    const profileData = {
      ...user,
      _id: user._id,
      name: user.name || user.displayName || '',
      email: user.email || '',
      avatar: user.avatar || null,
      quizResults: user.quizProgress || [],  // Map quizProgress to quizResults for API compatibility
      bookmarks: user.bookmarks || [],
      badges: user.badges || [],
      streak: user.streak || { current: 0, longest: 0 },
      learningStreak: user.learningStreak || { current: 0, longest: 0 },
      createdAt: user.createdAt || new Date()
    };

    // If token did not include the right user id shape, return a refreshed token
    let refreshedToken;
    if (tokenEmail && (!tokenUserId || !mongoose.isValidObjectId(tokenUserId) || String(user._id) !== String(tokenUserId))) {
      refreshedToken = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );
    }

    res.json({ user: profileData, ...(refreshedToken ? { token: refreshedToken } : {}) });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: 'Server error fetching profile' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, [
  body('displayName').optional().trim().isLength({ min: 2, max: 50 }),
  body('name').optional().trim().isLength({ min: 2, max: 50 }),
  body('avatarUrl').optional().isURL(),
  body('currentPassword').optional(),
  body('newPassword').optional().isLength({ min: 6 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const tokenUserId = req.user?.userId || req.user?.id || req.user?._id;
    const tokenEmail = req.user?.email;

    let user = null;
    if (tokenUserId && mongoose.isValidObjectId(tokenUserId)) {
      user = await User.findById(tokenUserId).select('+password');
    }
    if (!user && tokenEmail) {
      user = await User.findOne({ email: tokenEmail }).select('+password');
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updates = {};
    
    // Update display name
    const nameCandidate = typeof req.body.displayName === 'string'
      ? req.body.displayName
      : (typeof req.body.name === 'string' ? req.body.name : undefined);
    if (nameCandidate) updates.name = nameCandidate;
    
    // Update avatar URL
    if (req.body.avatarUrl !== undefined) updates.avatar = req.body.avatarUrl;

    // Email updates are intentionally not supported
    // (Email is the primary identifier and changing it requires a separate verification flow.)

    // Handle password change
    if (req.body.newPassword) {
      if (!req.body.currentPassword) {
        return res.status(400).json({ message: 'Current password is required to change password' });
      }

      // Verify current password
      const isMatch = await bcrypt.compare(req.body.currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
      updates.password = hashedPassword;
    }

    // Apply updates
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload avatar
router.post('/avatar', authenticateToken, (req, res) => {
  upload.single('avatar')(req, res, async (err) => {
    try {
      if (err) {
        const message = err.code === 'LIMIT_FILE_SIZE'
          ? 'Image size should be less than 5MB'
          : (err.message || 'Upload failed');
        return res.status(400).json({ message });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const tokenUserId = req.user?.userId || req.user?.id || req.user?._id;
      const tokenEmail = req.user?.email;

      let user = null;
      if (tokenUserId && mongoose.isValidObjectId(tokenUserId)) {
        user = await User.findById(tokenUserId).select('-password');
      }
      if (!user && tokenEmail) {
        user = await User.findOne({ email: tokenEmail }).select('-password');
      }
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const avatarUrl = `/uploads/avatars/${req.file.filename}`;

      await User.findByIdAndUpdate(
        user._id,
        { avatar: avatarUrl },
        { new: true }
      ).select('-password');

      return res.json({
        message: 'Avatar uploaded successfully',
        avatar: avatarUrl
      });
    } catch (error) {
      console.error('Avatar upload error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
});

// Subscribe to newsletter
router.post('/newsletter/subscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    const userId = req.user ? req.user.userId : null;

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email, isActive: true });
    if (existing) {
      return res.status(400).json({ message: 'Already subscribed to newsletter' });
    }

    // Create subscription
    const subscription = new Newsletter({
      email,
      userId,
      preferences: req.body.preferences || {}
    });

    await subscription.save();

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      subscription
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Unsubscribe from newsletter
router.post('/newsletter/unsubscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    const subscription = await Newsletter.findOneAndUpdate(
      { email, isActive: true },
      {
        isActive: false,
        unsubscribedAt: new Date()
      },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Progress Tracking Endpoints

// Save quiz result
router.post('/quiz-result', authenticateToken, async (req, res) => {
  try {
    const { application, score, totalQuestions, difficulty, timeSpent, correctAnswers } = req.body;
    
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate correct answers if not provided
    const correctCount = correctAnswers || Math.round((score / 100) * totalQuestions);

    // Add quiz result to progress - with all required fields for leaderboard
    user.quizProgress.push({
      application,
      score,
      totalQuestions,
      difficulty,
      timeSpent: typeof timeSpent === 'number' ? timeSpent : Number(timeSpent) || 0,
      correctAnswers: correctCount,
      completedAt: new Date()
    });

    // Update learning streak
    const today = new Date().toDateString();
    const lastActivity = user.learningStreak.lastActivityDate?.toDateString();
    
    if (lastActivity === today) {
      // Already practiced today
    } else if (lastActivity === new Date(Date.now() - 86400000).toDateString()) {
      // Practiced yesterday, increment streak
      user.learningStreak.current += 1;
    } else {
      // Streak broken, reset to 1
      user.learningStreak.current = 1;
    }
    
    user.learningStreak.lastActivityDate = new Date();
    if (user.learningStreak.current > user.learningStreak.longest) {
      user.learningStreak.longest = user.learningStreak.current;
    }

    // Add to activity log
    user.activityLog.push({
      action: 'quiz_completed',
      details: `Completed ${application} quiz with ${score}% score`,
      metadata: { application, score, difficulty, timeSpent }
    });

    // Keep only last 100 activities
    if (user.activityLog.length > 100) {
      user.activityLog = user.activityLog.slice(-100);
    }

    // Save and return updated user data
    await user.save();
    res.json({ 
      message: 'Quiz result saved successfully',
      score: score,
      quizCount: user.quizProgress.length,
      streak: user.learningStreak.current
    });
  } catch (error) {
    console.error('Save quiz result error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add bookmark
router.post('/bookmark', authenticateToken, async (req, res) => {
  try {
    const { shortcut, description, application, applicationName, applicationId, category, url } = req.body;
    const resolvedApplication = applicationName || application || 'Application';
    const resolvedApplicationId = applicationId || resolvedApplication.toLowerCase().replace(/\s+/g, '-');
    
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if bookmark already exists for application
    let existingBookmark = user.bookmarks.find(b => 
      b.applicationId === resolvedApplicationId || b.applicationName === resolvedApplication
    );

    if (!existingBookmark) {
      existingBookmark = {
        applicationId: resolvedApplicationId,
        applicationName: resolvedApplication,
        bookmarkedAt: new Date(),
        shortcuts: []
      };
      user.bookmarks.push(existingBookmark);
    }

    const shortcutKey = shortcut || `Guide for ${resolvedApplication}`;
    const shortcutDescription = description || `Shortcut guide for ${resolvedApplication}`;

    if (!existingBookmark.shortcuts) {
      existingBookmark.shortcuts = [];
    }

    const alreadyHasShortcut = existingBookmark.shortcuts.find(s => s.keys === shortcutKey);
    if (!alreadyHasShortcut) {
      existingBookmark.shortcuts.push({
        shortcutId: `${resolvedApplicationId}-${Date.now()}`,
        keys: shortcutKey,
        description: shortcutDescription,
        addedAt: new Date()
      });
    }

    // Add to activity log
    user.activityLog.push({
      action: 'bookmark_added',
      details: `Bookmarked ${shortcutKey} from ${resolvedApplication}`,
      metadata: { shortcut: shortcutKey, application: resolvedApplication, url }
    });

    await user.save();
    res.json({ message: 'Bookmark added successfully' });
  } catch (error) {
    console.error('Add bookmark error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove bookmark
router.delete('/bookmark', authenticateToken, async (req, res) => {
  try {
    const { shortcut, application, applicationName, applicationId } = req.body;
    const resolvedApplication = applicationName || application;
    const resolvedApplicationId = applicationId || (resolvedApplication ? resolvedApplication.toLowerCase().replace(/\s+/g, '-') : null);
    
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove bookmark or shortcut
    user.bookmarks = user.bookmarks
      .map(b => {
        const matchesApp = resolvedApplicationId
          ? b.applicationId === resolvedApplicationId
          : b.applicationName === resolvedApplication;

        if (!matchesApp) return b;

        if (shortcut && b.shortcuts) {
          b.shortcuts = b.shortcuts.filter(s => s.keys !== shortcut);
          return b;
        }

        return null;
      })
      .filter(Boolean);

    await user.save();
    res.json({ message: 'Bookmark removed successfully' });
  } catch (error) {
    console.error('Remove bookmark error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user progress
router.get('/progress', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate stats
    const quizData = user.quizProgress;
    const totalQuizzes = quizData.length;
    const scores = quizData.map(q => q.score);
    const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const bestScore = scores.length > 0 ? Math.max(...scores) : 0;

    // Calculate accuracy stats
    const totalCorrectAnswers = quizData.reduce((sum, q) => sum + (q.correctAnswers || 0), 0);
    const totalQuestions = quizData.reduce((sum, q) => sum + (q.totalQuestions || 0), 0);
    const averageAccuracy = totalQuestions > 0 ? Math.round((totalCorrectAnswers / totalQuestions) * 100) : 0;

    // Get stats by application
    const appStats = {};
    quizData.forEach(q => {
      if (!appStats[q.application]) {
        appStats[q.application] = {
          attempts: 0,
          bestScore: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalQuestions: 0,
          scoreHistory: []
        };
      }
      appStats[q.application].attempts++;
      appStats[q.application].bestScore = Math.max(appStats[q.application].bestScore, q.score);
      appStats[q.application].scoreHistory.push(q.score);
      appStats[q.application].totalCorrect += (q.correctAnswers || 0);
      appStats[q.application].totalQuestions += (q.totalQuestions || 0);
    });

    // Calculate app averages
    Object.keys(appStats).forEach(app => {
      const stats = appStats[app];
      stats.averageScore = Math.round(stats.scoreHistory.reduce((a, b) => a + b, 0) / stats.scoreHistory.length);
      stats.accuracy = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;
      delete stats.scoreHistory;
    });

    // Get recent quiz history with detailed stats
    const recentQuizzes = quizData
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
      .slice(0, 10)
      .map(q => ({
        application: q.application,
        score: q.score,
        difficulty: q.difficulty,
        correctAnswers: q.correctAnswers || 0,
        totalQuestions: q.totalQuestions,
        accuracy: q.totalQuestions > 0 ? Math.round((q.correctAnswers || 0) / q.totalQuestions * 100) : 0,
        timeSpent: q.timeSpent,
        date: q.completedAt
      }));

    // Get achievements
    const achievements = user.achievements.map(a => ({
      id: a.achievementId,
      name: a.name,
      description: a.description,
      unlockedAt: a.unlockedAt,
      icon: a.icon
    }));

    // Get recent activity
    const recentActivity = user.activityLog
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 10)
      .map(a => ({
        action: a.action,
        description: a.details,
        time: a.timestamp,
        icon: getActivityIcon(a.action)
      }));

    res.json({
      quizStats: {
        totalQuizzes,
        averageScore,
        bestScore,
        totalCorrectAnswers,
        totalQuestions,
        averageAccuracy
      },
      quizHistory: recentQuizzes,
      applicationProgress: appStats,
      bookmarks: user.bookmarks,
      achievements,
      learningStreak: user.learningStreak,
      recentActivity
    });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Unlock achievement
router.post('/achievement', authenticateToken, async (req, res) => {
  try {
    const { achievementId, name, description, icon } = req.body;
    
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if achievement already unlocked
    const existingAchievement = user.achievements.find(a => a.achievementId === achievementId);
    if (existingAchievement) {
      return res.status(400).json({ message: 'Achievement already unlocked' });
    }

    // Add achievement
    user.achievements.push({
      achievementId,
      name,
      description,
      icon,
      unlockedAt: new Date()
    });

    // Add to activity log
    user.activityLog.push({
      action: 'achievement_unlocked',
      details: `Unlocked achievement: ${name}`,
      metadata: { achievementId, name }
    });

    await user.save();
    res.json({ message: 'Achievement unlocked successfully' });
  } catch (error) {
    console.error('Unlock achievement error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Helper function to get activity icon
function getActivityIcon(action) {
  const iconMap = {
    'quiz_completed': 'brain',
    'bookmark_added': 'bookmark',
    'achievement_unlocked': 'trophy',
    'profile_updated': 'user',
    'login': 'sign-in-alt',
    'logout': 'sign-out-alt'
  };
  return iconMap[action] || 'circle';
}

// Request password reset
router.post('/forgot-password', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if user exists or not for security
      return res.json({ 
        message: 'If an account with that email exists, a password reset link has been sent.' 
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Save reset token to user
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetExpires;
    await user.save();

    // Send password reset email via Brevo
    try {
      const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password.html?token=${resetToken}`;
      await brevoService.sendPasswordResetEmail(email, user.name, resetToken, resetLink);
      console.log(`Password reset email sent to ${email}`);
    } catch (emailError) {
      console.error('Failed to send password reset email:', emailError);
    }
    
    res.json({
      message: 'If an account with that email exists, a password reset link has been sent to your email.',
      expiresIn: '1 hour'
    });
  } catch (error) {
    console.error('Password reset request error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset password with token
router.post('/reset-password', [
  body('token').notEmpty(),
  body('newPassword').isLength({ min: 6 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { token, newPassword } = req.body;

    // Find user with this reset token
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid or expired reset token. Please request a new password reset.' 
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password and clear reset token
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.json({
      message: 'Password reset successfully. You can now login with your new password.'
    });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Server error during password reset' });
  }
});

// Get leaderboard (top users by total score)
router.get('/leaderboard', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const offset = parseInt(req.query.offset) || 0;

    // Get all users, including those without quiz progress
    const users = await User.find(
      {},
      { displayName: 1, email: 1, avatarUrl: 1, quizProgress: 1, createdAt: 1, learningStreak: 1 }
    )
    .sort({ createdAt: 1 })
    .limit(limit)
    .skip(offset);

    // Calculate scores and sort
    const usersWithScores = users.map(user => {
      const totalScore = user.quizProgress?.reduce((sum, quiz) => sum + (quiz.score || 0), 0) || 0;
      return {
        _id: user._id,
        displayName: user.displayName,
        email: user.email,
        avatarUrl: user.avatarUrl,
        totalScore,
        level: Math.floor(totalScore / 100) + 1,
        quizCount: user.quizProgress?.length || 0,
        learningStreak: user.learningStreak || { current: 0, longest: 0 }
      };
    }).sort((a, b) => b.totalScore - a.totalScore);

    // Return array directly for compatibility
    res.json(usersWithScores);
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ message: 'Error fetching leaderboard', error: error.message });
  }
});

// Get all achievements (public endpoint with optional auth)
router.get('/achievements', async (req, res) => {
  try {
    // Define all available achievements
    const allAchievements = [
      { id: 1, title: 'First Steps', description: 'Complete your first shortcut practice', icon: '🎯', category: 'learning', points: 10, maxProgress: 1 },
      { id: 2, title: 'Quick Learner', description: 'Master 10 shortcuts', icon: '⚡', category: 'learning', points: 50, maxProgress: 10 },
      { id: 3, title: 'Shortcut Master', description: 'Master 50 shortcuts', icon: '⌨️', category: 'learning', points: 200, maxProgress: 50 },
      { id: 4, title: 'Quiz Champion', description: 'Score 100% on any quiz', icon: '🏆', category: 'practice', points: 100, maxProgress: 1 },
      { id: 5, title: 'Streak Keeper', description: 'Maintain a 7-day learning streak', icon: '🔥', category: 'practice', points: 150, maxProgress: 7 },
      { id: 6, title: 'Community Helper', description: 'Help 5 community members', icon: '🤝', category: 'community', points: 75, maxProgress: 5 },
      { id: 7, title: 'Early Adopter', description: 'Join the Shortcut Sensei community', icon: '🚀', category: 'special', points: 25, maxProgress: 1 },
      { id: 8, title: 'Night Owl', description: 'Practice shortcuts after midnight', icon: '🦉', category: 'special', points: 30, maxProgress: 1 }
    ];

    // If user is authenticated, include their progress
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User.findById(decoded.userId);
        
        if (user) {
          // Merge user's progress with achievement definitions
          const achievementsWithProgress = allAchievements.map(achievement => {
            const userAchievement = user.achievements?.find(a => a.achievementId === achievement.id);
            return {
              ...achievement,
              unlocked: !!userAchievement,
              progress: userAchievement ? achievement.maxProgress : 0,
              unlockedAt: userAchievement?.unlockedAt
            };
          });
          
          return res.json({ achievements: achievementsWithProgress });
        }
      } catch (err) {
        // Invalid token, continue as unauthenticated
      }
    }

    // Return achievements without progress for unauthenticated users
    const achievementsForGuests = allAchievements.map(achievement => ({
      ...achievement,
      unlocked: achievement.id === 7, // Early Adopter is unlocked for everyone
      progress: achievement.id === 7 ? achievement.maxProgress : 0
    }));

    res.json({ achievements: achievementsForGuests });
  } catch (error) {
    console.error('Achievements error:', error);
    res.status(500).json({ message: 'Error fetching achievements', error: error.message });
  }
});

// GET leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const { limit = 10, application } = req.query;

    let matchStage = {};
    if (application) {
      matchStage = {
        'quizProgress.application': application
      };
    }

    const leaderboard = await User.aggregate([
      { $match: matchStage },
      {
        $project: {
          name: 1,
          email: 1,
          avatar: 1,
          quizProgress: 1,
          totalScore: { $sum: '$quizProgress.score' },
          quizCount: { $size: '$quizProgress' },
          averageScore: { $avg: '$quizProgress.score' }
        }
      },
      { $sort: { totalScore: -1, averageScore: -1 } },
      { $limit: parseInt(limit) }
    ]);

    res.json({
      success: true,
      leaderboard: leaderboard.map((user, index) => ({
        rank: index + 1,
        name: user.name,
        avatar: user.avatar,
        totalScore: Math.round(user.totalScore || 0),
        averageScore: Math.round(user.averageScore || 0),
        quizCount: user.quizCount
      }))
    });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/count
// @desc    Get total user count
// @access  Public
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({
      success: true,
      count: count
    });
  } catch (error) {
    console.error('Error getting user count:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;

