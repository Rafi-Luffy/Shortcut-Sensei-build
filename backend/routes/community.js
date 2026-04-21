const express = require('express');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const { createSupabaseAdminClient } = require('../config/supabase');
const { authenticate } = require('../middleware/auth');

const router = express.Router();
const supabase = createSupabaseAdminClient();

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

router.get('/posts', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return res.json({ success: true, posts: data || [] });
  } catch (error) {
    console.error('Get posts error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading posts' });
  }
});

router.post('/posts', authenticate, [
  body('title').isString().trim().isLength({ min: 3, max: 200 }),
  body('content').isString().trim().isLength({ min: 1 }),
  body('category').optional().isIn(['general', 'tips', 'questions', 'showcase', 'help'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const now = new Date().toISOString();

    const payload = {
      user_id: req.user.id,
      user_name: req.dbUser.name,
      user_email: req.dbUser.email,
      title: req.body.title.trim(),
      content: req.body.content.trim(),
      category: req.body.category || 'general',
      likes: 0,
      liked_by: [],
      comments: [],
      created_at: now,
      updated_at: now
    };

    const { data, error } = await supabase
      .from('community_posts')
      .insert(payload)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.status(201).json({ success: true, message: 'Post created', post: data });
  } catch (error) {
    console.error('Create post error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error creating post' });
  }
});

router.post('/posts/:postId/like', async (req, res) => {
  try {
    const postId = req.params.postId;

    const { data: post, error: fetchError } = await supabase
      .from('community_posts')
      .select('id,likes')
      .eq('id', postId)
      .maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const nextLikes = Number(post.likes || 0) + 1;

    const { error: updateError } = await supabase
      .from('community_posts')
      .update({ likes: nextLikes, updated_at: new Date().toISOString() })
      .eq('id', postId);

    if (updateError) {
      throw updateError;
    }

    return res.json({ success: true, likes: nextLikes, isLiked: true });
  } catch (error) {
    console.error('Like post error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error liking post' });
  }
});

router.get('/posts/:postId/comments', async (req, res) => {
  try {
    const { data: post, error } = await supabase
      .from('community_posts')
      .select('comments')
      .eq('id', req.params.postId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    return res.json({ success: true, comments: toArray(post.comments) });
  } catch (error) {
    console.error('Get comments error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading comments' });
  }
});

router.post('/posts/:postId/comments', [
  body('content').isString().trim().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const postId = req.params.postId;

    const { data: post, error: fetchError } = await supabase
      .from('community_posts')
      .select('id,comments')
      .eq('id', postId)
      .maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const comments = toArray(post.comments);
    const comment = {
      id: crypto.randomUUID(),
      userId: req.body.userId || null,
      userName: req.body.userName || 'Community Member',
      content: req.body.content.trim(),
      createdAt: new Date().toISOString()
    };
    comments.push(comment);

    const { error: updateError } = await supabase
      .from('community_posts')
      .update({ comments, updated_at: new Date().toISOString() })
      .eq('id', postId);

    if (updateError) {
      throw updateError;
    }

    return res.status(201).json({ success: true, message: 'Comment added', comment });
  } catch (error) {
    console.error('Add comment error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error adding comment' });
  }
});

router.delete('/posts/:postId', authenticate, async (req, res) => {
  try {
    const postId = req.params.postId;

    const { data: post, error: fetchError } = await supabase
      .from('community_posts')
      .select('id,user_id')
      .eq('id', postId)
      .maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    if (post.user_id && post.user_id !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this post' });
    }

    const { error: deleteError } = await supabase
      .from('community_posts')
      .delete()
      .eq('id', postId);

    if (deleteError) {
      throw deleteError;
    }

    return res.json({ success: true, message: 'Post deleted' });
  } catch (error) {
    console.error('Delete post error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error deleting post' });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const [postsRes, usersRes, questionsRes] = await Promise.all([
      supabase.from('community_posts').select('id,category', { count: 'exact' }),
      supabase.from('users').select('id', { count: 'exact' }),
      supabase.from('questions').select('id', { count: 'exact' })
    ]);

    if (postsRes.error) throw postsRes.error;
    if (usersRes.error) throw usersRes.error;
    if (questionsRes.error) throw questionsRes.error;

    const posts = postsRes.data || [];

    const stats = {
      totalPosts: postsRes.count || 0,
      totalMembers: usersRes.count || 0,
      totalQuestions: questionsRes.count || 0,
      totalDiscussions: posts.filter((p) => p.category === 'questions').length,
      totalTips: posts.filter((p) => p.category === 'tips').length
    };

    return res.json({ success: true, stats });
  } catch (error) {
    console.error('Get stats error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading community stats' });
  }
});

module.exports = router;
