/**
 * Brevo Email Service
 * Using Brevo (formerly Sendinblue) for transactional emails
 * - Welcome emails on registration
 * - Password reset emails
 * 
 * DIRECT EMAIL SENDING - No automation setup needed!
 */

const SibApiV3Sdk = require('sib-api-v3-sdk');

// Initialize Brevo client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

// Initialize Transactional Emails API (NOT Events API)
const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * Send welcome email on registration
 * Sends directly using Brevo Transactional Email API
 */
async function sendWelcomeEmail(email, name) {
  try {
    console.log(`Attempting to send welcome email to: ${email}`);
    console.log(`Using API Key: ${process.env.BREVO_API_KEY ? 'Set' : 'Missing'}`);
    
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{
      email: email,
      name: name
    }];
    sendSmtpEmail.sender = {
      name: 'Shortcut Sensei',
      email: 'noreply@shortcutsensei.com'
    };
    sendSmtpEmail.subject = '🎉 Welcome to Shortcut Sensei!';
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Welcome to Shortcut Sensei!</h1>
            </div>
            <div class="content">
              <h2>Hi ${name} 👋</h2>
              <p>Welcome to <strong>Shortcut Sensei</strong> - your ultimate companion for mastering keyboard shortcuts!</p>
              
              <p>🎯 Here's what you can do:</p>
              <ul>
                <li>📚 Learn shortcuts for 50+ applications</li>
                <li>🎮 Take interactive quizzes to test your knowledge</li>
                <li>🏆 Compete on leaderboards with other learners</li>
                <li>📊 Track your learning progress</li>
                <li>⭐ Bookmark your favorite shortcuts</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:8000'}" class="button">Start Learning Now</a>
              </p>
              
              <p>Happy learning and boost your productivity! 💪</p>
              
              <p>Best regards,<br>
              <strong>Team Shortcut Sensei</strong></p>
            </div>
            <div class="footer">
              <p>You're receiving this email because you signed up for Shortcut Sensei.</p>
              <p>© 2025 Shortcut Sensei. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    
    const result = await emailApi.sendTransacEmail(sendSmtpEmail);
    console.log(`Welcome email sent to: ${email} (Message ID: ${result.messageId})`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Brevo welcome email error:', error.response?.body || error.message);
    throw error;
  }
}

/**
 * Send password reset email
 * Sends directly using Brevo Transactional Email API
 */
async function sendPasswordResetEmail(email, name, resetToken) {
  try {
    console.log(`Attempting to send password reset email to: ${email}`);
    
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password.html?token=${resetToken}`;
    
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{
      email: email,
      name: name
    }];
    sendSmtpEmail.sender = {
      name: 'Shortcut Sensei',
      email: 'noreply@shortcutsensei.com'
    };
    sendSmtpEmail.subject = '🔐 Reset Your Shortcut Sensei Password';
    sendSmtpEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 15px 40px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔐 Password Reset Request</h1>
            </div>
            <div class="content">
              <h2>Hi ${name},</h2>
              <p>We received a request to reset your Shortcut Sensei password.</p>
              
              <p style="text-align: center;">
                <a href="${resetLink}" class="button">Reset Password</a>
              </p>
              
              <div class="warning">
                <strong>⏳ Important:</strong> This link expires in <strong>30 minutes</strong> for security reasons.
              </div>
              
              <p><strong>Didn't request this?</strong><br>
              If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.</p>
              
              <p>For security, never share this link with anyone.</p>
              
              <p>Best regards,<br>
              <strong>Team Shortcut Sensei</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply.</p>
              <p>© 2025 Shortcut Sensei. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    
    const result = await emailApi.sendTransacEmail(sendSmtpEmail);
    console.log(`Password reset email sent to: ${email} (Message ID: ${result.messageId})`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Brevo password reset email error:', error.response?.body || error.message);
    throw error;
  }
}

module.exports = {
  sendWelcomeEmail,
  sendPasswordResetEmail
};
