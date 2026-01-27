const formData = require('form-data');
const Mailgun = require('mailgun.js');

// Initialize Mailgun only if credentials are provided
let mg = null;
if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
  const mailgun = new Mailgun(formData);
  mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.mailgun.net'
  });
  console.log('✅ Mailgun email service initialized');
} else {
  console.warn('⚠️  Mailgun credentials not found. Email features will be disabled.');
}

// Send verification email
const sendVerificationEmail = async (email, displayName, verificationToken) => {
  if (!mg) {
    console.warn('Email service not configured. Skipping verification email.');
    return { success: false, message: 'Email service not configured' };
  }
  
  try {
    const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify-email?token=${verificationToken}`;

    const data = {
      from: `${process.env.FROM_NAME || 'Shortcut Sensei'} <${process.env.FROM_EMAIL || 'noreply@shortcut-sensei.com'}>`,
      to: email,
      subject: 'Verify Your Email - Shortcut Sensei',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .button {
              display: inline-block;
              padding: 15px 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 12px;
            }
            .warning {
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              padding: 15px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 Welcome to Shortcut Sensei!</h1>
          </div>
          <div class="content">
            <h2>Hi ${displayName}! 👋</h2>
            <p>Thank you for registering with Shortcut Sensei. We're excited to have you join our community of productivity enthusiasts!</p>

            <p>To complete your registration and start learning keyboard shortcuts, please verify your email address by clicking the button below:</p>

            <center>
              <a href="${verificationUrl}" class="button">Verify Email Address</a>
            </center>

            <p>Or copy and paste this link into your browser:</p>
            <p style="background: #fff; padding: 10px; border: 1px solid #ddd; word-break: break-all;">${verificationUrl}</p>

            <div class="warning">
              <strong>⚠️ Important:</strong> This verification link will expire in 24 hours.
            </div>

            <p>Once verified, you'll be able to:</p>
            <ul>
              <li>📚 Learn shortcuts for your favorite applications</li>
              <li>🎮 Test your knowledge with interactive quizzes</li>
              <li>⭐ Bookmark your favorite shortcuts</li>
              <li>📊 Track your learning progress</li>
              <li>🏆 Earn achievements and badges</li>
            </ul>

            <p>If you didn't create an account with us, please ignore this email.</p>

            <p>Happy learning! 🚀</p>
            <p><strong>The Shortcut Sensei Team</strong></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Shortcut Sensei. All rights reserved.</p>
            <p>You received this email because you signed up for Shortcut Sensei.</p>
          </div>
        </body>
        </html>
      `
    };

    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    console.log(`Verification email sent to ${email} via Mailgun`);
    return { success: true };
  } catch (error) {
    console.error('Error sending verification email via SendGrid:', error);
    throw error;
  }
};

// Send welcome email after verification
const sendWelcomeEmail = async (email, displayName) => {
  try {
    const data = {
      from: `${process.env.FROM_NAME || 'Shortcut Sensei'} <${process.env.FROM_EMAIL || 'noreply@shortcut-sensei.com'}>`,
      to: email,
      subject: 'Welcome to Shortcut Sensei! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .feature {
              background: white;
              padding: 15px;
              margin: 10px 0;
              border-left: 4px solid #667eea;
              border-radius: 5px;
            }
            .button {
              display: inline-block;
              padding: 15px 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎉 Email Verified Successfully!</h1>
          </div>
          <div class="content">
            <h2>Welcome aboard, ${displayName}! 🚀</h2>
            <p>Your email has been verified and your account is now fully activated.</p>

            <h3>🎯 Get Started:</h3>

            <div class="feature">
              <strong>📚 Browse Applications</strong>
              <p>Explore shortcuts for 50+ popular applications including VS Code, Chrome, Word, and more.</p>
            </div>

            <div class="feature">
              <strong>🎮 Take Quizzes</strong>
              <p>Test your knowledge with interactive quizzes tailored to each application.</p>
            </div>

            <div class="feature">
              <strong>⭐ Save Favorites</strong>
              <p>Bookmark shortcuts you use frequently for quick access.</p>
            </div>

            <div class="feature">
              <strong>📊 Track Progress</strong>
              <p>Monitor your learning journey with detailed analytics and achievements.</p>
            </div>

            <center>
              <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}" class="button">Start Learning Now</a>
            </center>

            <p><strong>Pro Tip:</strong> Start with your most-used application and try to learn just 3 shortcuts per day. You'll be amazed how much more productive you become! ⚡</p>

            <p>Questions or feedback? We'd love to hear from you!</p>

            <p>Happy shortcutting! 🎯</p>
            <p><strong>The Shortcut Sensei Team</strong></p>
          </div>
        </body>
        </html>
      `
    };

    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    console.log(`Welcome email sent to ${email} via Mailgun`);
    return { success: true };
  } catch (error) {
    console.error('Error sending welcome email via Mailgun:', error);
    throw error;
  }
};

// Send password reset email
const sendPasswordResetEmail = async (email, displayName, resetToken) => {
  try {
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

    const data = {
      from: `${process.env.FROM_NAME || 'Shortcut Sensei'} <${process.env.FROM_EMAIL || 'noreply@shortcut-sensei.com'}>`,
      to: email,
      subject: 'Reset Your Password - Shortcut Sensei',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .button {
              display: inline-block;
              padding: 15px 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
            .warning {
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              padding: 15px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🔒 Password Reset Request</h1>
          </div>
          <div class="content">
            <h2>Hi ${displayName},</h2>
            <p>We received a request to reset your password for your Shortcut Sensei account.</p>

            <p>Click the button below to reset your password:</p>

            <center>
              <a href="${resetUrl}" class="button">Reset Password</a>
            </center>

            <p>Or copy and paste this link into your browser:</p>
            <p style="background: #fff; padding: 10px; border: 1px solid #ddd; word-break: break-all;">${resetUrl}</p>

            <div class="warning">
              <strong>⚠️ Important:</strong> This link will expire in 1 hour.
            </div>

            <p>If you didn't request a password reset, please ignore this email or contact support if you have concerns.</p>

            <p>Best regards,<br><strong>The Shortcut Sensei Team</strong></p>
          </div>
        </body>
        </html>
      `
    };

    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    console.log(`Password reset email sent to ${email} via Mailgun`);
    return { success: true };
  } catch (error) {
    console.error('Error sending password reset email via SendGrid:', error);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail
};
