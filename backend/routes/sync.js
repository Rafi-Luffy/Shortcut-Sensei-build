const express = require('express');
const dataSyncService = require('../services/dataSyncService');

const router = express.Router();

// Middleware to verify JWT token (admin only)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  const jwt = require('jsonwebtoken');
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Get sync service status
router.get('/status', (req, res) => {
  try {
    const status = dataSyncService.getStatus();
    res.json({
      success: true,
      status
    });
  } catch (error) {
    console.error('Get sync status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Force immediate synchronization
router.post('/sync', authenticateToken, async (req, res) => {
  try {
    console.log(`Manual sync triggered by user ${req.user.userId}`);

    await dataSyncService.forceSync();

    res.json({
      success: true,
      message: 'Data synchronization completed successfully'
    });
  } catch (error) {
    console.error('Manual sync error:', error);
    res.status(500).json({
      success: false,
      message: 'Data synchronization failed'
    });
  }
});

// Sync user statistics only
router.post('/sync/users', authenticateToken, async (req, res) => {
  try {
    console.log(`Manual user sync triggered by user ${req.user.userId}`);

    await dataSyncService.syncUserStatistics();

    res.json({
      success: true,
      message: 'User statistics synchronization completed'
    });
  } catch (error) {
    console.error('User sync error:', error);
    res.status(500).json({
      success: false,
      message: 'User statistics synchronization failed'
    });
  }
});

// Sync community statistics only
router.post('/sync/community', authenticateToken, async (req, res) => {
  try {
    console.log(`Manual community sync triggered by user ${req.user.userId}`);

    await dataSyncService.syncCommunityStats();

    res.json({
      success: true,
      message: 'Community statistics synchronization completed'
    });
  } catch (error) {
    console.error('Community sync error:', error);
    res.status(500).json({
      success: false,
      message: 'Community statistics synchronization failed'
    });
  }
});

// Clean up orphaned data
router.post('/cleanup', authenticateToken, async (req, res) => {
  try {
    console.log(`Manual cleanup triggered by user ${req.user.userId}`);

    await dataSyncService.cleanupOrphanedData();

    res.json({
      success: true,
      message: 'Data cleanup completed successfully'
    });
  } catch (error) {
    console.error('Cleanup error:', error);
    res.status(500).json({
      success: false,
      message: 'Data cleanup failed'
    });
  }
});

module.exports = router;