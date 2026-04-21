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

router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, Number(req.query.limit) || 10));
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from('questions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to);

    if (req.query.category) {
      query = query.eq('category', req.query.category);
    }

    if (req.query.authorId) {
      query = query.eq('author_user_id', req.query.authorId);
    }

    const { data, count, error } = await query;

    if (error) {
      throw error;
    }

    return res.json({
      success: true,
      questions: data || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Get questions error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading questions' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const { data: question, error } = await supabase
      .from('questions')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!question) {
      return res.status(404).json({ success: false, message: 'Question not found' });
    }

    const nextViews = Number(question.views || 0) + 1;
    await supabase.from('questions').update({ views: nextViews }).eq('id', id);

    return res.json({ success: true, question: { ...question, views: nextViews } });
  } catch (error) {
    console.error('Get question error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading question' });
  }
});

router.post('/', authenticate, [
  body('title').isString().trim().isLength({ min: 3, max: 200 }),
  body('content').isString().trim().isLength({ min: 3 }),
  body('category').optional().isString(),
  body('tags').optional().isArray({ max: 10 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const now = new Date().toISOString();

    const payload = {
      title: req.body.title.trim(),
      content: req.body.content.trim(),
      author_user_id: req.user.id,
      category: req.body.category || 'general',
      tags: toArray(req.body.tags),
      answers: [],
      votes: 0,
      voters: [],
      views: 0,
      is_resolved: false,
      created_at: now,
      updated_at: now
    };

    const { data, error } = await supabase
      .from('questions')
      .insert(payload)
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return res.status(201).json({ success: true, message: 'Question created', question: data });
  } catch (error) {
    console.error('Create question error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error creating question' });
  }
});

router.post('/:id/answers', authenticate, [
  body('content').isString().trim().isLength({ min: 2 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const id = req.params.id;

    const { data: question, error: fetchError } = await supabase
      .from('questions')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    if (!question) {
      return res.status(404).json({ success: false, message: 'Question not found' });
    }

    const answers = toArray(question.answers);
    const answer = {
      id: crypto.randomUUID(),
      authorUserId: req.user.id,
      authorName: req.dbUser.name,
      content: req.body.content.trim(),
      votes: 0,
      voters: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    answers.push(answer);

    const { error: updateError } = await supabase
      .from('questions')
      .update({ answers, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (updateError) {
      throw updateError;
    }

    return res.status(201).json({ success: true, message: 'Answer added', answer });
  } catch (error) {
    console.error('Add answer error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error adding answer' });
  }
});

module.exports = router;
