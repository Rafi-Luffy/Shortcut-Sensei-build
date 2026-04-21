const jwt = require('jsonwebtoken');
const { verifyToken, clerkClient } = require('@clerk/clerk-sdk-node');
const { createSupabaseAdminClient } = require('../config/supabase');

const supabase = createSupabaseAdminClient();

function getBearerToken(req) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || typeof authHeader !== 'string') return null;

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) return null;
  return token;
}

async function ensureSupabaseUserFromClerk(clerkUserId) {
  const { data: existingUser, error: existingError } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_user_id', clerkUserId)
    .maybeSingle();

  if (existingError) {
    throw existingError;
  }

  if (existingUser) {
    return existingUser;
  }

  const clerkUser = await clerkClient.users.getUser(clerkUserId);
  const primaryEmail = clerkUser.emailAddresses?.find((e) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress;
  const email = primaryEmail || clerkUser.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    throw new Error('Clerk user has no email.');
  }

  const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || clerkUser.username || email;
  const now = new Date().toISOString();

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
        auth_provider: 'clerk',
        is_email_verified: true,
        has_logged_in: true,
        last_login: now,
        updated_at: now
      })
      .eq('id', existingByEmail.id)
      .select('*')
      .single();

    if (updateError) {
      throw updateError;
    }

    return updatedUser;
  }

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

  return insertedUser;
}

async function authenticate(req, res, next) {
  try {
    const token = getBearerToken(req);

    if (!token) {
      return res.status(401).json({ success: false, message: 'Access token required' });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (jwtSecret) {
      try {
        const decoded = jwt.verify(token, jwtSecret);
        const userId = decoded.userId || decoded.id;

        if (userId) {
          const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .maybeSingle();

          if (error) {
            throw error;
          }

          if (user) {
            req.user = {
              id: user.id,
              email: user.email,
              clerkUserId: user.clerk_user_id,
              authType: 'local'
            };
            req.dbUser = user;
            return next();
          }
        }
      } catch (localAuthError) {
        // Continue to Clerk verification.
      }
    }

    if (!process.env.CLERK_SECRET_KEY) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    const verified = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });
    const clerkUserId = verified.sub;

    if (!clerkUserId) {
      return res.status(401).json({ success: false, message: 'Invalid Clerk token payload' });
    }

    const user = await ensureSupabaseUserFromClerk(clerkUserId);

    req.user = {
      id: user.id,
      email: user.email,
      clerkUserId,
      authType: 'clerk'
    };
    req.dbUser = user;

    return next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

function createAppToken(user) {
  if (!process.env.JWT_SECRET) {
    return null;
  }

  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

module.exports = {
  authenticate,
  createAppToken
};
