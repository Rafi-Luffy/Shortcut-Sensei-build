/**
 * Nodemailer Email Service
 * Sends emails using Gmail SMTP
 */

const nodemailer = require('nodemailer');

// Create transporter with Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

/**
 * Send password reset email
 */
async function sendPasswordResetEmail(email, name, resetToken) {
  try {
    console.log(`📧 Sending password reset email to: ${email}`);
    
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password.html?token=${resetToken}`;
    
    const mailOptions = {
      from: `Shortcut Sensei <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: 'Password Reset Request - Shortcut Sensei',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; }
            .content { background: #f9f9f9; padding: 30px; margin-top: 20px; border-radius: 8px; }
            .button { display: inline-block; padding: 12px 30px; background: #ff6b6b; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
            .button:hover { background: #ee5a5a; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; margin-top: 20px; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Password Reset Request</h1>
            </div>
            
            <div class="content">
              <p>Hello ${name},</p>
              
              <p>We received a request to reset your password for your Shortcut Sensei account. Click the button below to reset your password:</p>
              
              <div style="text-align: center;">
                <a href="${resetLink}" class="button">Reset Password</a>
              </div>
              
              <div class="warning">
                <strong>⚠️ Security Note:</strong> This link will expire in 1 hour. If you did not request a password reset, please ignore this email or contact our support team.
              </div>
              
              <p>Best regards,<br><strong>Team Shortcut Sensei</strong></p>
            </div>
            
            <div class="footer">
              <p>© 2025 Shortcut Sensei - All Rights Reserved</p>
              <p>This is an automated email. Please do not reply with sensitive information.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Password reset email sent successfully! Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Nodemailer password reset email error:', error.message);
    throw error;
  }
}

/**
 * Test email connection
 */
async function testConnection() {
  try {
    console.log('📧 Testing Gmail connection...');
    await transporter.verify();
    console.log('✅ Gmail connection verified successfully!');
    return { success: true, message: 'Gmail connection verified' };
  } catch (error) {
    console.error('❌ Gmail connection failed:', error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendPasswordResetEmail,
  testConnection
};
