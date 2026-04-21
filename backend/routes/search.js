const express = require('express');
const { createSupabaseAdminClient } = require('../config/supabase');

const router = express.Router();
const supabase = createSupabaseAdminClient();

router.get('/questions', async (req, res) => {
  try {
    const queryText = (req.query.q || '').trim();
    const category = (req.query.category || '').trim();
    const limit = Math.max(1, Math.min(50, Number(req.query.limit) || 10));

    let query = supabase
      .from('questions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (category) {
      query = query.eq('category', category);
    }

    if (queryText) {
      query = query.or(`title.ilike.%${queryText}%,content.ilike.%${queryText}%`);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return res.json({ success: true, questions: data || [] });
  } catch (error) {
    console.error('Search questions error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error searching questions' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const queryText = (req.query.q || '').trim();
    if (!queryText) {
      return res.status(400).json({ success: false, message: 'Query is required' });
    }

    const { data, error } = await supabase
      .from('users')
      .select('id,name,email,avatar,total_points,created_at')
      .or(`name.ilike.%${queryText}%,email.ilike.%${queryText}%`)
      .order('name', { ascending: true })
      .limit(20);

    if (error) {
      throw error;
    }

    return res.json({ success: true, users: data || [] });
  } catch (error) {
    console.error('Search users error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error searching users' });
  }
});

router.get('/suggestions', async (req, res) => {
  try {
    const queryText = (req.query.q || '').trim();
    if (!queryText || queryText.length < 2) {
      return res.json({ success: true, suggestions: [] });
    }

    const [questionRes, userRes] = await Promise.all([
      supabase
        .from('questions')
        .select('title,tags')
        .or(`title.ilike.%${queryText}%,content.ilike.%${queryText}%`)
        .order('created_at', { ascending: false })
        .limit(5),
      supabase
        .from('users')
        .select('name')
        .ilike('name', `%${queryText}%`)
        .order('name', { ascending: true })
        .limit(5)
    ]);

    if (questionRes.error) throw questionRes.error;
    if (userRes.error) throw userRes.error;

    const suggestions = [];

    for (const q of questionRes.data || []) {
      if (q.title) {
        suggestions.push({ type: 'question', text: q.title });
      }
      for (const tag of q.tags || []) {
        if (typeof tag === 'string' && tag.toLowerCase().includes(queryText.toLowerCase())) {
          suggestions.push({ type: 'tag', text: tag });
        }
      }
    }

    for (const u of userRes.data || []) {
      if (u.name) {
        suggestions.push({ type: 'user', text: u.name });
      }
    }

    return res.json({ success: true, suggestions: suggestions.slice(0, 12) });
  } catch (error) {
    console.error('Search suggestions error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error loading suggestions' });
  }
});

module.exports = router;
