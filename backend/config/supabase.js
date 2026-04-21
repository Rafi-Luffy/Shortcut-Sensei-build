const { createClient } = require('@supabase/supabase-js');

function decodeJwtPayload(token) {
  try {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = parts[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const padded = payload + '='.repeat((4 - (payload.length % 4)) % 4);
    const decoded = Buffer.from(padded, 'base64').toString('utf8');
    return JSON.parse(decoded);
  } catch (error) {
    return null;
  }
}

function getProjectRefFromConnectionString() {
  const raw = process.env.SUPABASE_CONNECTION_STRING || process.env.connection_string || process.env.DATABASE_URL || '';
  if (!raw) return null;

  const match = raw.match(/(?:postgres\.)?([a-z0-9]+)\.(?:pooler\.)?supabase\.com/i);
  return match ? match[1] : null;
}

function getProjectRefFromAnonKey() {
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.anon_key || null;
  const payload = decodeJwtPayload(anonKey);
  return payload?.ref || null;
}

function getSupabaseUrl() {
  const explicit = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || null;
  if (explicit) return explicit;

  const projectRef = getProjectRefFromAnonKey() || getProjectRefFromConnectionString();
  if (!projectRef) return null;

  return `https://${projectRef}.supabase.co`;
}

function getSupabaseSecretKey() {
  return process.env.SUPABASE_SECRET_KEY || process.env.supabase_secret_key || null;
}

function validateSupabaseEnv() {
  const missing = [];

  if (!getSupabaseUrl()) {
    missing.push('SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)');
  }

  if (!getSupabaseSecretKey()) {
    missing.push('SUPABASE_SECRET_KEY (or supabase_secret_key)');
  }

  if (missing.length) {
    throw new Error(
      `Missing Supabase environment variables: ${missing.join(', ')}. ` +
      'Add these to your backend env file before starting the server.'
    );
  }
}

function createSupabaseAdminClient() {
  validateSupabaseEnv();

  return createClient(getSupabaseUrl(), getSupabaseSecretKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

module.exports = {
  createSupabaseAdminClient,
  validateSupabaseEnv,
  getSupabaseUrl,
  getSupabaseSecretKey,
  getProjectRefFromAnonKey,
  getProjectRefFromConnectionString
};
