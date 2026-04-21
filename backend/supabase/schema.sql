-- Shortcut Sensei Supabase schema
-- Mirrors existing Supabase Postgres collections with JSONB columns for nested arrays.

create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  mongo_id text unique,
  auth_provider text not null default 'local',
  clerk_user_id text unique,
  name text not null,
  email text not null unique,
  password_hash text,
  avatar text,
  quiz_progress jsonb not null default '[]'::jsonb,
  bookmarks jsonb not null default '[]'::jsonb,
  badges jsonb not null default '[]'::jsonb,
  streak jsonb not null default '{"current":0,"longest":0}'::jsonb,
  learning_streak jsonb not null default '{"current":0,"longest":0}'::jsonb,
  activity_log jsonb not null default '[]'::jsonb,
  application_progress jsonb not null default '[]'::jsonb,
  achievements jsonb not null default '[]'::jsonb,
  total_points integer not null default 0,
  is_email_verified boolean not null default false,
  email_verification_token text,
  email_verification_expires timestamptz,
  reset_password_token text,
  reset_password_expires timestamptz,
  has_logged_in boolean not null default false,
  last_login timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists users_clerk_user_id_idx on public.users(clerk_user_id);
create index if not exists users_email_idx on public.users(email);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  mongo_id text unique,
  title text not null,
  content text not null,
  author_user_id uuid references public.users(id) on delete set null,
  author_mongo_id text,
  category text not null default 'general',
  tags text[] not null default '{}',
  answers jsonb not null default '[]'::jsonb,
  votes integer not null default 0,
  voters jsonb not null default '[]'::jsonb,
  views integer not null default 0,
  is_resolved boolean not null default false,
  resolved_answer_mongo_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists questions_author_user_id_idx on public.questions(author_user_id);
create index if not exists questions_created_at_idx on public.questions(created_at desc);
create index if not exists questions_category_idx on public.questions(category);

create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  mongo_id text unique,
  user_id uuid references public.users(id) on delete set null,
  user_mongo_id text,
  user_name text not null,
  user_email text not null,
  title text not null,
  content text not null,
  category text not null default 'general',
  likes integer not null default 0,
  liked_by jsonb not null default '[]'::jsonb,
  comments jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists community_posts_user_id_idx on public.community_posts(user_id);
create index if not exists community_posts_category_idx on public.community_posts(category);
create index if not exists community_posts_created_at_idx on public.community_posts(created_at desc);

create table if not exists public.community_stats (
  id uuid primary key default gen_random_uuid(),
  mongo_id text unique,
  total_users integer not null default 0,
  total_questions integer not null default 0,
  total_answers integer not null default 0,
  active_users_today integer not null default 0,
  active_users_week integer not null default 0,
  active_users_month integer not null default 0,
  questions_answered_today integer not null default 0,
  questions_answered_week integer not null default 0,
  questions_answered_month integer not null default 0,
  top_categories jsonb not null default '[]'::jsonb,
  last_updated timestamptz not null default now()
);

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  mongo_id text unique,
  email text not null unique,
  user_id uuid references public.users(id) on delete set null,
  user_mongo_id text,
  is_active boolean not null default true,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  preferences jsonb not null default '{"frequency":"weekly","categories":[]}'::jsonb
);

create index if not exists newsletter_subscriptions_user_id_idx on public.newsletter_subscriptions(user_id);
