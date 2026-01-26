const express = require('express');

const router = express.Router();

let clerkSdk;
try {
  clerkSdk = require('@clerk/clerk-sdk-node');
} catch (error) {
  clerkSdk = null;
}

const User = require('../models/User');

router.post('/sync', async (req, res) => {
  if (!clerkSdk) {
    return res.status(500).json({
      success: false,
      message: 'Clerk SDK not installed on backend. Install @clerk/clerk-sdk-node and set CLERK_SECRET_KEY.'
    });
  }

  if (!process.env.CLERK_SECRET_KEY) {
    return res.status(500).json({
      success: false,
      message: 'CLERK_SECRET_KEY is not configured on the backend.'
    });
  }

  const { ClerkExpressRequireAuth, clerkClient } = clerkSdk;

  let requireAuth;
  try {
    requireAuth = ClerkExpressRequireAuth();
  } catch (error) {
    console.error('Failed to initialize Clerk middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to initialize Clerk auth middleware.'
    });
  }

  try {
    return requireAuth(req, res, async () => {
      try {
        const clerkUserId = req.auth?.userId;
        if (!clerkUserId) {
          return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

      const clerkUser = await clerkClient.users.getUser(clerkUserId);
      const primaryEmail = clerkUser.emailAddresses?.find(
        (e) => e.id === clerkUser.primaryEmailAddressId
      )?.emailAddress;
      const email = primaryEmail || clerkUser.emailAddresses?.[0]?.emailAddress;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Clerk user has no email address; cannot sync to MongoDB.'
        });
      }

      const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || clerkUser.username || email;

      // Prefer matching by clerkUserId; fallback to email if the user already exists.
      let user = await User.findOne({ clerkUserId });

      if (!user) {
        const existingByEmail = await User.findOne({ email });
        if (existingByEmail) {
          // Link existing MongoDB user to Clerk
          existingByEmail.clerkUserId = clerkUserId;
          existingByEmail.lastLogin = new Date();
          existingByEmail.isEmailVerified = true;
          // Preserve all existing MongoDB user data (avatar, name, etc.)
          await existingByEmail.save();
          user = existingByEmail;
        }
      }

      if (!user) {
        // Create new user with minimal Clerk data
        user = await User.create({
          authProvider: 'clerk',
          clerkUserId,
          email,
          name,
          isEmailVerified: true,
          lastLogin: new Date()
        });
      } else {
        // Only update login timestamp and verification status
        // Preserve all existing MongoDB user data (avatar, profile, etc.)
        user.lastLogin = new Date();
        user.isEmailVerified = true;
        await user.save();
      }

        return res.json({
          success: true,
          user: user.getPublicProfile()
        });
      } catch (error) {
        console.error('Clerk sync error:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to sync Clerk user to MongoDB'
        });
      }
    });
  } catch (error) {
    console.error('Clerk middleware threw:', error);
    return res.status(500).json({
      success: false,
      message: 'Clerk auth is not configured correctly on the backend.'
    });
  }
});

module.exports = router;
