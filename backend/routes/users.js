const express = require('express');
const { body, validationResult } = require('express-validator');
const { clerkClient } = require('@clerk/clerk-sdk-node');
const { createSupabaseAdminClient } = require('../config/supabase');
const { authenticate, createAppToken } = require('../middleware/auth');

const router = express.Router();
const supabase = createSupabaseAdminClient();

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeUser(user) {
  return {
    id: user.id,
    clerkUserId: user.clerk_user_id || null,
    authProvider: user.auth_provider || 'local',
    email: user.email,
    name: user.name,
    displayName: user.name,
    avatar: user.avatar || null,
    avatarUrl: user.avatar || null,
    totalPoints: user.total_points || 0,
    badges: toArray(user.badges),
    streak: user.streak || { current: 0, longest: 0 },
    learningStreak: user.learning_streak || { current: 0, longest: 0 },
    bookmarks: toArray(user.bookmarks),
    quizProgress: toArray(user.quiz_progress),
    createdAt: user.created_at,
    isEmailVerified: !!user.is_email_verified
  };
}

async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

async function getUserById(id) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

function getPrimaryClerkEmail(clerkUser) {
  if (!clerkUser) return null;

  const primary = (clerkUser.emailAddresses || []).find(
    (entry) => entry.id === clerkUser.primaryEmailAddressId
  );

  return primary?.emailAddress || clerkUser.emailAddresses?.[0]?.emailAddress || null;
}

async function getClerkUserByEmail(email) {
  const result = await clerkClient.users.getUserList({
    emailAddress: [email],
    limit: 1
  });

  if (Array.isArray(result)) {
    return result[0] || null;
  }

  if (Array.isArray(result?.data)) {
    return result.data[0] || null;
  }

  return null;
}

async function upsertSupabaseUserFromClerk(clerkUser, preferredName) {
  const email = getPrimaryClerkEmail(clerkUser);
  if (!email) {
    throw new Error('Clerk user has no email');
  }

  const defaultName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ')
    || preferredName
    || clerkUser.username
    || email;

  const now = new Date().toISOString();
  const existing = await getUserByEmail(email);

  if (existing) {
    const { data, error } = await supabase
      .from('users')
      .update({
        clerk_user_id: clerkUser.id,
        auth_provider: 'clerk',
        name: existing.name || defaultName,
        is_email_verified: true,
        has_logged_in: true,
        last_login: now,
        updated_at: now
      })
      .eq('id', existing.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  const { data, error } = await supabase
    .from('users')
    .insert({
      auth_provider: 'clerk',
      clerk_user_id: clerkUser.id,
      email,
      name: defaultName,
      is_email_verified: true,
      has_logged_in: true,
      last_login: now,
      created_at: now,
      updated_at: now
    })
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data;
}

router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('displayName').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('name').optional().isString().trim().isLength({ min: 2, max: 100 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    if (!process.env.CLERK_SECRET_KEY) {
      return res.status(500).json({ success: false, message: 'Clerk is not configured on the server' });
    }

    const email = req.body.email;
    const displayName = (req.body.displayName || req.body.name || email).trim();
    const existingClerkUser = await getClerkUserByEmail(email);

    if (existingClerkUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const nameParts = displayName.split(' ').filter(Boolean);
    const firstName = nameParts[0] || undefined;
    const lastName = nameParts.slice(1).join(' ') || undefined;

    const createdClerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password: req.body.password,
      firstName,
      lastName
    });

    const createdUser = await upsertSupabaseUserFromClerk(createdClerkUser, displayName);

    const token = createAppToken(createdUser);

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: normalizeUser(createdUser)
    });
  } catch (error) {
    console.error('Register error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    if (!process.env.CLERK_SECRET_KEY) {
      return res.status(500).json({ success: false, message: 'Clerk is not configured on the server' });
    }

    const email = req.body.email;
    const password = req.body.password;

    const clerkUser = await getClerkUserByEmail(email);
    if (!clerkUser) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    try {
      const verification = await clerkClient.users.verifyPassword({
        userId: clerkUser.id,
        password
      });

      if (verification && verification.verified === false) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (verifyError) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const updatedUser = await upsertSupabaseUserFromClerk(clerkUser);

    const token = createAppToken(updatedUser);

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: normalizeUser(updatedUser)
    });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error during login' });
  }
});

router.post('/validate', authenticate, async (req, res) => {
  return res.json({ success: true, valid: true, user: normalizeUser(req.dbUser) });
});

router.get('/profile', authenticate, async (req, res) => {
  return res.json({ success: true, user: normalizeUser(req.dbUser) });
});

router.put('/profile', authenticate, async (req, res) => {
  try {
    const updates = {};

    if (typeof req.body.displayName === 'string' && req.body.displayName.trim()) {
      updates.name = req.body.displayName.trim();
    } else if (typeof req.body.name === 'string' && req.body.name.trim()) {
      updates.name = req.body.name.trim();
    }

    if (typeof req.body.avatarUrl === 'string') {
      updates.avatar = req.body.avatarUrl;
    } else if (typeof req.body.avatar === 'string') {
      updates.avatar = req.body.avatar;
    }

    if (!Object.keys(updates).length) {
      return res.json({ success: true, user: normalizeUser(req.dbUser) });
    }

    updates.updated_at = new Date().toISOString();

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', req.user.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.json({ success: true, message: 'Profile updated', user: normalizeUser(updatedUser) });
  } catch (error) {
    console.error('Update profile error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error updating profile' });
  }
});

router.get('/progress', authenticate, async (req, res) => {
  const user = req.dbUser;
  return res.json({
    success: true,
    progress: {
      quizProgress: toArray(user.quiz_progress),
      bookmarks: toArray(user.bookmarks),
      badges: toArray(user.badges),
      achievements: toArray(user.achievements),
      totalPoints: user.total_points || 0,
      streak: user.streak || { current: 0, longest: 0 },
      learningStreak: user.learning_streak || { current: 0, longest: 0 },
      applicationProgress: toArray(user.application_progress)
    }
  });
});

router.post('/quiz-result', authenticate, async (req, res) => {
  try {
    const user = req.dbUser;
    const quizProgress = toArray(user.quiz_progress);
    const activityLog = toArray(user.activity_log);
    const score = Number(req.body.score) || 0;
    const totalPoints = Number(user.total_points || 0) + score;
    const now = new Date();

    quizProgress.push({
      application: req.body.application || req.body.quizName || 'General',
      difficulty: req.body.difficulty || 'unknown',
      score,
      totalQuestions: Number(req.body.totalQuestions) || 0,
      timeSpent: Number(req.body.timeSpent) || 0,
      correctAnswers: Number(req.body.correctAnswers) || score,
      completedAt: now.toISOString(),
      answers: toArray(req.body.answers)
    });

    activityLog.push({
      action: 'quiz_result_submitted',
      details: `Score ${score}`,
      metadata: {
        application: req.body.application || null,
        difficulty: req.body.difficulty || null
      },
      timestamp: now.toISOString()
    });

    const streak = user.streak || { current: 0, longest: 0 };
    const last = streak.lastActivity ? new Date(streak.lastActivity) : null;
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (!last) {
      streak.current = 1;
      streak.longest = Math.max(streak.longest || 0, 1);
    } else {
      const startOfLast = new Date(last.getFullYear(), last.getMonth(), last.getDate());
      const diffDays = Math.floor((startOfToday - startOfLast) / 86400000);
      if (diffDays === 1) {
        streak.current = (streak.current || 0) + 1;
      } else if (diffDays > 1) {
        streak.current = 1;
      }
      streak.longest = Math.max(streak.longest || 0, streak.current || 0);
    }
    streak.lastActivity = now.toISOString();

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({
        quiz_progress: quizProgress,
        activity_log: activityLog,
        total_points: totalPoints,
        streak,
        updated_at: now.toISOString()
      })
      .eq('id', user.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.json({ success: true, message: 'Quiz result saved', user: normalizeUser(updatedUser) });
  } catch (error) {
    console.error('Quiz result error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error saving quiz result' });
  }
});

router.post('/bookmark', authenticate, async (req, res) => {
  try {
    const user = req.dbUser;
    const bookmarks = toArray(user.bookmarks);

    const applicationId = req.body.applicationId || req.body.appId || req.body.application;
    const applicationName = req.body.applicationName || req.body.application || 'Application';
    const shortcut = req.body.shortcut || {
      shortcutId: req.body.shortcutId,
      keys: req.body.keys,
      description: req.body.description
    };

    if (!applicationId || !shortcut?.shortcutId) {
      return res.status(400).json({ success: false, message: 'applicationId and shortcut.shortcutId are required' });
    }

    let appBookmark = bookmarks.find((b) => b.applicationId === applicationId);
    if (!appBookmark) {
      appBookmark = { applicationId, applicationName, bookmarkedAt: new Date().toISOString(), shortcuts: [] };
      bookmarks.push(appBookmark);
    }

    const exists = toArray(appBookmark.shortcuts).some((s) => s.shortcutId === shortcut.shortcutId);
    if (!exists) {
      appBookmark.shortcuts = toArray(appBookmark.shortcuts);
      appBookmark.shortcuts.push({
        shortcutId: shortcut.shortcutId,
        keys: shortcut.keys || '',
        description: shortcut.description || '',
        addedAt: new Date().toISOString()
      });
    }

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({ bookmarks, updated_at: new Date().toISOString() })
      .eq('id', user.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.json({ success: true, message: 'Bookmark saved', bookmarks: toArray(updatedUser.bookmarks) });
  } catch (error) {
    console.error('Bookmark save error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error saving bookmark' });
  }
});

router.delete('/bookmark', authenticate, async (req, res) => {
  try {
    const user = req.dbUser;
    const bookmarks = toArray(user.bookmarks);

    const applicationId = req.body.applicationId;
    const shortcutId = req.body.shortcutId;

    if (!applicationId || !shortcutId) {
      return res.status(400).json({ success: false, message: 'applicationId and shortcutId are required' });
    }

    const updatedBookmarks = bookmarks
      .map((b) => {
        if (b.applicationId !== applicationId) return b;
        const nextShortcuts = toArray(b.shortcuts).filter((s) => s.shortcutId !== shortcutId);
        return { ...b, shortcuts: nextShortcuts };
      })
      .filter((b) => toArray(b.shortcuts).length > 0);

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({ bookmarks: updatedBookmarks, updated_at: new Date().toISOString() })
      .eq('id', user.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.json({ success: true, message: 'Bookmark removed', bookmarks: toArray(updatedUser.bookmarks) });
  } catch (error) {
    console.error('Bookmark remove error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error removing bookmark' });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const limit = Math.max(1, Math.min(200, Number(req.query.limit) || 50));

    const { data, error } = await supabase
      .from('users')
      .select('id,name,avatar,total_points,streak,created_at')
      .order('total_points', { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    const leaderboard = (data || []).map((item, index) => ({
      rank: index + 1,
      userId: item.id,
      name: item.name,
      avatar: item.avatar,
      totalPoints: item.total_points || 0,
      streak: item.streak || { current: 0, longest: 0 },
      joinedAt: item.created_at
    }));

    return res.json({ success: true, leaderboard });
  } catch (error) {
    console.error('Leaderboard error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading leaderboard' });
  }
});

router.get('/check-username', async (req, res) => {
  try {
    const username = (req.query.username || '').trim();
    if (!username) {
      return res.status(400).json({ success: false, message: 'username query is required' });
    }

    const { data, error } = await supabase
      .from('users')
      .select('id')
      .ilike('name', username)
      .limit(1);

    if (error) {
      throw error;
    }

    return res.json({ success: true, available: !(data || []).length });
  } catch (error) {
    console.error('Check username error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error checking username' });
  }
});

router.post('/newsletter/subscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const email = req.body.email;
    const now = new Date().toISOString();

    const { error } = await supabase
      .from('newsletter_subscriptions')
      .upsert({
        email,
        is_active: true,
        subscribed_at: now,
        unsubscribed_at: null,
        preferences: { frequency: 'weekly', categories: [] }
      }, { onConflict: 'email' });

    if (error) {
      throw error;
    }

    return res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscribe error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error subscribing to newsletter' });
  }
});

router.post('/newsletter/unsubscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const email = req.body.email;
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .update({ is_active: false, unsubscribed_at: now })
      .eq('email', email)
      .select('id');

    if (error) {
      throw error;
    }

    if (!(data || []).length) {
      return res.status(404).json({ success: false, message: 'Subscription not found' });
    }

    return res.json({ success: true, message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error unsubscribing' });
  }
});

router.post('/forgot-password', async (req, res) => {
  return res.json({
    success: true,
    message: 'If an account exists for that email, a reset link will be sent.'
  });
});

router.post('/reset-password', async (req, res) => {
  return res.status(400).json({
    success: false,
    message: 'Password resets are handled by Clerk. Use Clerk reset-password flow.'
  });
});

router.post('/achievement', authenticate, async (req, res) => {
  try {
    const user = req.dbUser;
    const achievements = toArray(user.achievements);

    achievements.push({
      achievementId: req.body.achievementId || `achievement-${Date.now()}`,
      name: req.body.name || 'Achievement',
      description: req.body.description || '',
      unlockedAt: new Date().toISOString()
    });

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update({ achievements, updated_at: new Date().toISOString() })
      .eq('id', user.id)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.json({ success: true, achievements: toArray(updatedUser.achievements) });
  } catch (error) {
    console.error('Achievement error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error saving achievement' });
  }
});

module.exports = router;
