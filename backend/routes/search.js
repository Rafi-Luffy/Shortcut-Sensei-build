const express = require('express');
const Question = require('../models/Question');
const User = require('../models/User');

const router = express.Router();

// Search questions
router.get('/questions', async (req, res) => {
  try {
    const {
      q: query,
      category,
      application,
      difficulty,
      author,
      sortBy = 'relevance',
      page = 1,
      limit = 10
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    let searchQuery = {};

    // Text search
    if (query) {
      searchQuery.$or = [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { tags: { $in: [new RegExp(query, 'i')] } }
      ];
    }

    // Filters
    if (category) searchQuery.category = category;
    if (application) searchQuery.application = { $regex: application, $options: 'i' };
    if (difficulty) searchQuery.difficulty = difficulty;

    // Author filter
    if (author) {
      const authorUser = await User.findOne({
        $or: [
          { displayName: { $regex: author, $options: 'i' } },
          { email: { $regex: author, $options: 'i' } }
        ]
      });
      if (authorUser) {
        searchQuery.author = authorUser._id;
      }
    }

    // Sorting
    let sortOptions = {};
    switch (sortBy) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'oldest':
        sortOptions = { createdAt: 1 };
        break;
      case 'most-answered':
        sortOptions = { answerCount: -1 };
        break;
      case 'most-viewed':
        sortOptions = { views: -1 };
        break;
      case 'relevance':
      default:
        // For relevance, prioritize questions with answers and recent activity
        sortOptions = { answerCount: -1, lastActivity: -1, createdAt: -1 };
        break;
    }

    const questions = await Question.find(searchQuery)
      .populate('author', 'displayName avatarUrl')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-answers.votes'); // Exclude vote details for performance

    const total = await Question.countDocuments(searchQuery);

    res.json({
      questions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      query: {
        searchTerm: query,
        filters: { category, application, difficulty, author },
        sortBy
      }
    });
  } catch (error) {
    console.error('Search questions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search users
router.get('/users', async (req, res) => {
  try {
    const {
      q: query,
      page = 1,
      limit = 10
    } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const searchQuery = {
      $or: [
        { displayName: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } }
      ]
    };

    const users = await User.find(searchQuery)
      .select('displayName avatarUrl createdAt lastLogin')
      .sort({ displayName: 1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await User.countDocuments(searchQuery);

    res.json({
      users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      query
    });
  } catch (error) {
    console.error('Search users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search applications
router.get('/applications', async (req, res) => {
  try {
    const {
      q: query,
      page = 1,
      limit = 10
    } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Search for unique applications mentioned in questions
    const applications = await Question.aggregate([
      {
        $match: {
          application: { $regex: query, $options: 'i' }
        }
      },
      {
        $group: {
          _id: '$application',
          questionCount: { $sum: 1 },
          lastActivity: { $max: '$lastActivity' }
        }
      },
      {
        $sort: { questionCount: -1, lastActivity: -1 }
      },
      {
        $skip: skip
      },
      {
        $limit: parseInt(limit)
      }
    ]);

    const total = await Question.distinct('application', {
      application: { $regex: query, $options: 'i' }
    }).then(apps => apps.length);

    res.json({
      applications,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      query
    });
  } catch (error) {
    console.error('Search applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get search suggestions
router.get('/suggestions', async (req, res) => {
  try {
    const { q: query, type = 'all' } = req.query;

    if (!query || query.length < 2) {
      return res.json({ suggestions: [] });
    }

    const suggestions = [];

    if (type === 'all' || type === 'applications') {
      // Get application suggestions
      const appSuggestions = await Question.aggregate([
        {
          $match: {
            application: { $regex: `^${query}`, $options: 'i' }
          }
        },
        {
          $group: {
            _id: '$application',
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 5
        }
      ]);

      suggestions.push(...appSuggestions.map(item => ({
        type: 'application',
        text: item._id,
        count: item.count
      })));
    }

    if (type === 'all' || type === 'users') {
      // Get user suggestions
      const userSuggestions = await User.find({
        displayName: { $regex: `^${query}`, $options: 'i' }
      })
        .select('displayName')
        .sort({ displayName: 1 })
        .limit(5);

      suggestions.push(...userSuggestions.map(user => ({
        type: 'user',
        text: user.displayName
      })));
    }

    if (type === 'all' || type === 'tags') {
      // Get tag suggestions
      const tagSuggestions = await Question.aggregate([
        {
          $unwind: '$tags'
        },
        {
          $match: {
            tags: { $regex: `^${query}`, $options: 'i' }
          }
        },
        {
          $group: {
            _id: '$tags',
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 5
        }
      ]);

      suggestions.push(...tagSuggestions.map(item => ({
        type: 'tag',
        text: item._id,
        count: item.count
      })));
    }

    res.json({ suggestions });
  } catch (error) {
    console.error('Get suggestions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Advanced search with multiple filters
router.post('/advanced', async (req, res) => {
  try {
    const {
      query,
      filters = {},
      sortBy = 'relevance',
      page = 1,
      limit = 10
    } = req.body;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    let searchQuery = {};

    // Text search
    if (query) {
      searchQuery.$or = [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { tags: { $in: [new RegExp(query, 'i')] } }
      ];
    }

    // Advanced filters
    if (filters.category && filters.category.length > 0) {
      searchQuery.category = { $in: filters.category };
    }
    if (filters.application && filters.application.length > 0) {
      searchQuery.application = { $in: filters.application.map(app => new RegExp(app, 'i')) };
    }
    if (filters.difficulty && filters.difficulty.length > 0) {
      searchQuery.difficulty = { $in: filters.difficulty };
    }
    if (filters.tags && filters.tags.length > 0) {
      searchQuery.tags = { $in: filters.tags };
    }
    if (filters.dateRange) {
      searchQuery.createdAt = {
        $gte: new Date(filters.dateRange.start),
        $lte: new Date(filters.dateRange.end)
      };
    }
    if (filters.hasAcceptedAnswer !== undefined) {
      if (filters.hasAcceptedAnswer) {
        searchQuery['answers.isAccepted'] = true;
      } else {
        searchQuery.$or = searchQuery.$or || [];
        searchQuery.$or.push(
          { answers: { $size: 0 } },
          { 'answers.isAccepted': { $ne: true } }
        );
      }
    }

    // Sorting
    let sortOptions = {};
    switch (sortBy) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'oldest':
        sortOptions = { createdAt: 1 };
        break;
      case 'most-answered':
        sortOptions = { answerCount: -1 };
        break;
      case 'most-viewed':
        sortOptions = { views: -1 };
        break;
      case 'relevance':
      default:
        sortOptions = { answerCount: -1, lastActivity: -1, createdAt: -1 };
        break;
    }

    const questions = await Question.find(searchQuery)
      .populate('author', 'displayName avatarUrl')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-answers.votes');

    const total = await Question.countDocuments(searchQuery);

    res.json({
      questions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      searchCriteria: {
        query,
        filters,
        sortBy
      }
    });
  } catch (error) {
    console.error('Advanced search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;