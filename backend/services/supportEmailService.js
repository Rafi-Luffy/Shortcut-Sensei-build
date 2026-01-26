/**
 * Support Email Service
 * Sends support/help request emails via Mailgun (separate account)
 */

const mailgun = require('mailgun.js');
const FormData = require('form-data');

// Initialize Mailgun with support account
const mg = new mailgun(FormData);
const client = mg.client({
  username: 'api',
  key: process.env.MAILGUN_SUPPORT_API_KEY
});

const domain = process.env.MAILGUN_SUPPORT_DOMAIN;

/**
 * Send support request email
 */
async function sendSupportEmail(name, email, subject, message) {
  try {
    console.log(`📧 Sending support request email from: ${email}`);
    
    const messageData = {
      from: `Shortcut Sensei <postmaster@${domain}>`,
      to: process.env.MAILGUN_SUPPORT_EMAIL || 'support@shortcutsensei.com',
      subject: `Support Request: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .details { background: white; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📨 New Support Request</h2>
            </div>
            <div class="content">
              <div class="details">
                <strong>From:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Subject:</strong> ${subject}
              </div>
              
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
              
              <hr>
              <p style="color: #666; font-size: 12px;">
                This is an automated email from Shortcut Sensei support system.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    const result = await client.messages.create(domain, messageData);
    console.log(`✅ Support email sent successfully! Message ID: ${result.id}`);
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error('❌ Mailgun support email error:', error.message);
    throw error;
  }
}

module.exports = {
  sendSupportEmail
};
