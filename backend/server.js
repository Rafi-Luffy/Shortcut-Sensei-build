const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const path = require('path');
const { createSupabaseAdminClient, validateSupabaseEnv } = require('./config/supabase');
const appConfig = require('./config/production-config');

dotenv.config();

validateSupabaseEnv();
const supabase = createSupabaseAdminClient();

// Initialize data sync service with error handling (disabled for testing)
// try {
//   const dataSyncService = require('./services/dataSyncService');
//   dataSyncService.start();
//   console.log('Data sync service started successfully');
// } catch (error) {
//   console.error('Failed to start data sync service:', error);
// }

const app = express();

// Middleware
app.use(express.json({ limit: appConfig.jsonBodyLimit }));
app.use(cors(appConfig.corsOptions));
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for local development
}));
app.use(morgan('common'));

// Serve uploaded files only (backend is API-only, frontend is separate)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit(appConfig.rateLimitOptions);
app.use(limiter);

// Import routes
const clerkRoutes = require('./routes/clerk');
const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/questions');
const communityRoutes = require('./routes/community');
const searchRoutes = require('./routes/search');

// API Routes
app.use('/api/clerk', clerkRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/search', searchRoutes);

// Basic Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Shortcut Sensei API',
    version: '1.0.0',
    endpoints: {
      clerk: '/api/clerk',
      users: '/api/users',
      questions: '/api/questions',
      community: '/api/community',
      search: '/api/search'
    }
  });
});

// Health check endpoint
app.get('/health', async (req, res) => {
  let dbStatus = 'unknown';

  try {
    const { error } = await supabase.from('users').select('id', { head: true, count: 'exact' });
    dbStatus = error ? 'error' : 'connected';
  } catch (error) {
    dbStatus = 'error';
  }

  res.json({
    status: 'OK',
    database: dbStatus,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Legacy newsletter subscription endpoint (keeping for backward compatibility)
app.post('/api/newsletter/subscribe', [
  require('express-validator').body('email').isEmail().withMessage('Please provide a valid email address')
], async (req, res) => {
  try {
    const { validationResult } = require('express-validator');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address',
        errors: errors.array() 
      });
    }

    const { email } = req.body;

    // Email options for the thank you message
    const mailOptions = {
      from: `"Shortcut Sensei" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Shortcut Sensei Newsletter! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #06a3be; margin: 0; font-size: 28px;">Shortcut Sensei</h1>
              <p style="color: #666; margin: 10px 0 0 0; font-size: 16px;">Master Your Productivity</p>
            </div>
            
            <h2 style="color: #333; margin-bottom: 20px;">Thank you for subscribing! 🙏</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Welcome to the Shortcut Sensei community! We're excited to have you on board.
            </p>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              You'll now receive:
            </p>
            
            <ul style="color: #555; font-size: 16px; line-height: 1.8; padding-left: 20px;">
              <li>🚀 Latest productivity tips and keyboard shortcuts</li>
              <li>💡 Weekly insights to boost your workflow</li>
              <li>🔥 Exclusive content and early access to new features</li>
              <li>📱 Application-specific shortcut guides</li>
            </ul>
            
            <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="color: #06a3be; font-weight: bold; margin: 0 0 10px 0;">Pro Tip:</p>
              <p style="color: #555; margin: 0; font-size: 14px;">
                Start exploring our blog section to discover shortcuts for your favorite applications!
              </p>
            </div>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Happy shortcutting! ⌨️
            </p>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #999; font-size: 14px; margin: 0;">
                Best regards,<br>
                The Shortcut Sensei Team
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              You received this email because you subscribed to Shortcut Sensei newsletter.
            </p>
          </div>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Thank you for subscribing! Please check your email for a confirmation message.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, something went wrong. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler - only for API routes, let static files pass through
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Supabase connected successfully');
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
