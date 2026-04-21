const express = require('express');
const { createSupabaseAdminClient } = require('../config/supabase');

const router = express.Router();
const supabase = createSupabaseAdminClient();

let clerkSdk;
try {
  clerkSdk = require('@clerk/clerk-sdk-node');
} catch (error) {
  clerkSdk = null;
}

function mapPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    totalPoints: user.total_points || 0,
    streak: user.streak || { current: 0, longest: 0 },
    badges: user.badges || [],
    createdAt: user.created_at
  };
}

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
            message: 'Clerk user has no email address; cannot sync to Supabase.'
          });
        }

        const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || clerkUser.username || email;
        const now = new Date().toISOString();

        let user = null;

        const { data: existingByClerkId, error: existingByClerkError } = await supabase
          .from('users')
          .select('*')
          .eq('clerk_user_id', clerkUserId)
          .maybeSingle();

        if (existingByClerkError) {
          throw existingByClerkError;
        }

        user = existingByClerkId;

        if (!user) {
          const { data: existingByEmail, error: existingByEmailError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .maybeSingle();

          if (existingByEmailError) {
            throw existingByEmailError;
          }

          if (existingByEmail) {
            const { data: updatedUser, error: updateError } = await supabase
              .from('users')
              .update({
                clerk_user_id: clerkUserId,
                last_login: now,
                is_email_verified: true,
                auth_provider: 'clerk',
                updated_at: now
              })
              .eq('id', existingByEmail.id)
              .select('*')
              .single();

            if (updateError) {
              throw updateError;
            }

            user = updatedUser;
          }
        }

        if (!user) {
          const { data: insertedUser, error: insertError } = await supabase
            .from('users')
            .insert({
              auth_provider: 'clerk',
              clerk_user_id: clerkUserId,
              email,
              name,
              is_email_verified: true,
              has_logged_in: true,
              last_login: now,
              created_at: now,
              updated_at: now
            })
            .select('*')
            .single();

          if (insertError) {
            throw insertError;
          }

          user = insertedUser;
        } else {
          const { data: updatedUser, error: updateError } = await supabase
            .from('users')
            .update({
              last_login: now,
              is_email_verified: true,
              has_logged_in: true,
              updated_at: now
            })
            .eq('id', user.id)
            .select('*')
            .single();

          if (updateError) {
            throw updateError;
          }

          user = updatedUser;
        }

        return res.json({
          success: true,
          user: mapPublicUser(user)
        });
      } catch (error) {
        console.error('Clerk sync error:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to sync Clerk user to Supabase'
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
