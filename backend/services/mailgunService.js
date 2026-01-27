/**
 * Mailgun Email Service
 * Sends transactional emails via Mailgun
 */

const mailgun = require('mailgun.js');
const FormData = require('form-data');

// Initialize Mailgun with Account 1 (Welcome emails)
const mg = new mailgun(FormData);
const client = mg.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

const domain = process.env.MAILGUN_DOMAIN;

/**
 * Send welcome email on registration using template
 */
async function sendWelcomeEmail(email, name) {
  try {
    console.log(`📧 Sending welcome email to: ${email}`);
    console.log(`🔐 Domain: ${domain}`);
    console.log(`📋 Template: shortcut-welcome`);
    
    const variables = { name: name };
    console.log(`📬 Variables: ${JSON.stringify(variables)}`);
    
    const messageData = {
      from: `Shortcut Sensei <postmaster@${domain}>`,
      to: email,
      'reply-to': 'shortcut.sensei.01@gmail.com',
      template: 'shortcut-welcome',
      'h:X-Mailgun-Variables': JSON.stringify(variables)
    };
    
    console.log(`📤 Sending message with template...`);
    const result = await client.messages.create(domain, messageData);
    console.log(`Welcome email sent successfully! Message ID: ${result.id}`);
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error('Mailgun welcome email error:', error.message);
    console.error('Full error:', error);
    throw error;
  }
}

/**
 * Send password reset email
 */
async function sendPasswordResetEmail(email, name, resetToken) {
  try {
    console.log(`📧 Sending password reset email to: ${email}`);
    
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password.html?token=${resetToken}`;
    
    const messageData = {
      from: `Shortcut Sensei <postmaster@${domain}>`,
      to: email,
      subject: '🔐 Reset Your Shortcut Sensei Password',
      html: `
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
      `
    };
    
    const result = await client.messages.create(domain, messageData);
    console.log(`Password reset email sent successfully! Message ID: ${result.id}`);
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error('Mailgun password reset email error:', error.message);
    throw error;
  }
}

module.exports = {
  sendWelcomeEmail,
  sendPasswordResetEmail
};
