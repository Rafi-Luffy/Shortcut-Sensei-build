/**
 * Brevo Email Service
 * Handles transactional emails for:
 * - Account verification/signup
 * - Password reset links
 * 
 * Using Brevo (formerly Sendinblue) API
 * Focus: Transactional emails with high deliverability
 */

const axios = require('axios');

// Initialize Brevo API client
const brevoAPI = axios.create({
  baseURL: 'https://api.brevo.com/v3',
  headers: {
    'api-key': process.env.BREVO_API_KEY,
    'Content-Type': 'application/json'
  }
});

/**
 * Send Email Verification Link
 * Called during user registration
 */
const sendVerificationEmail = async (email, displayName, verificationToken) => {
  try {
    const verificationLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/verify-email?token=${verificationToken}`;
    
    const emailData = {
      sender: {
        name: 'Shortcut Sensei',
        email: process.env.BREVO_SENDER_EMAIL || 'noreply@shortcutsensei.com'
      },
      to: [
        {
          email: email,
          name: displayName
        }
      ],
      subject: '✅ Verify Your Shortcut Sensei Account',
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
              .code { background: #fff; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; font-family: monospace; word-break: break-all; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Shortcut Sensei! 🎓</h1>
                <p>Your learning journey starts here</p>
              </div>
              
              <div class="content">
                <p>Hi <strong>${displayName}</strong>,</p>
                
                <p>Thank you for creating your Shortcut Sensei account! To get started and unlock all features, please verify your email address.</p>
                
                <div style="text-align: center;">
                  <a href="${verificationLink}" class="button">Verify Email Address</a>
                </div>
                
                <p><strong>Or copy this link:</strong></p>
                <div class="code">${verificationLink}</div>
                
                <p style="color: #666; font-size: 14px;">
                  This verification link will expire in <strong>24 hours</strong>. If you didn't create this account, please ignore this email.
                </p>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                
                <p>Once verified, you'll be able to:</p>
                <ul>
                  <li>📚 Take interactive quizzes</li>
                  <li>⭐ Bookmark your favorite shortcuts</li>
                  <li>🏆 Compete on the leaderboard</li>
                  <li>🎯 Track your learning progress</li>
                  <li>🤝 Join our community</li>
                </ul>
              </div>
              
              <div class="footer">
                <p>Shortcut Sensei Team | <a href="http://localhost:8000" style="color: #667eea; text-decoration: none;">Visit Dashboard</a></p>
                <p>© 2025 Shortcut Sensei. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      textContent: `
        Welcome to Shortcut Sensei!
        
        Hi ${displayName},
        
        Thank you for creating your account. Please verify your email by clicking the link below:
        
        ${verificationLink}
        
        This link expires in 24 hours.
        
        Best regards,
        Shortcut Sensei Team
      `
    };

    const response = await brevoAPI.post('/smtp/email', emailData);
    console.log(`✅ Verification email sent to ${email} via Brevo (Message ID: ${response.data.messageId})`);
    return response.data;
  } catch (error) {
    console.error('❌ Error sending verification email via Brevo:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Send Password Reset Link
 * Called when user clicks "Forgot Password"
 */
const sendPasswordResetEmail = async (email, displayName, resetToken) => {
  try {
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password?token=${resetToken}`;
    
    const emailData = {
      sender: {
        name: 'Shortcut Sensei Support',
        email: process.env.BREVO_SENDER_EMAIL || 'noreply@shortcutsensei.com'
      },
      to: [
        {
          email: email,
          name: displayName
        }
      ],
      subject: '🔐 Reset Your Shortcut Sensei Password',
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; }
              .button { display: inline-block; background: #f5576c; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .warning { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; border-radius: 3px; }
              .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
              .code { background: #fff; padding: 15px; border-left: 4px solid #f5576c; margin: 15px 0; font-family: monospace; word-break: break-all; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Password Reset Request 🔐</h1>
                <p>Secure your account</p>
              </div>
              
              <div class="content">
                <p>Hi <strong>${displayName}</strong>,</p>
                
                <p>We received a request to reset your Shortcut Sensei password. Click the button below to set a new password:</p>
                
                <div style="text-align: center;">
                  <a href="${resetLink}" class="button">Reset Password</a>
                </div>
                
                <p><strong>Or copy this link:</strong></p>
                <div class="code">${resetLink}</div>
                
                <div class="warning">
                  <strong>⚠️ Security Note:</strong> This link will expire in <strong>1 hour</strong>. If you didn't request a password reset, please ignore this email. Your account is safe.
                </div>
                
                <h3>Password Tips:</h3>
                <ul style="font-size: 14px;">
                  <li>Use at least 8 characters</li>
                  <li>Mix uppercase and lowercase letters</li>
                  <li>Include numbers and special characters</li>
                  <li>Don't reuse old passwords</li>
                </ul>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                
                <p style="color: #666; font-size: 13px;">
                  If you have any issues resetting your password, please contact our support team at our help page.
                </p>
              </div>
              
              <div class="footer">
                <p>Shortcut Sensei Team | <a href="http://localhost:8000" style="color: #f5576c; text-decoration: none;">Back to Dashboard</a></p>
                <p>© 2025 Shortcut Sensei. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      textContent: `
        Password Reset Request
        
        Hi ${displayName},
        
        Click the link below to reset your password:
        ${resetLink}
        
        This link expires in 1 hour.
        
        If you didn't request this, you can safely ignore this email.
        
        Best regards,
        Shortcut Sensei Team
      `
    };

    const response = await brevoAPI.post('/smtp/email', emailData);
    console.log(`✅ Password reset email sent to ${email} via Brevo (Message ID: ${response.data.messageId})`);
    return response.data;
  } catch (error) {
    console.error('❌ Error sending password reset email via Brevo:', error.response?.data || error.message);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail
};
