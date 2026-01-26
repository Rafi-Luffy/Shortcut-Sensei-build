/**
 * Custom Email Service - Development Version
 * Logs emails to file and console
 * Can be easily swapped with real SMTP service in production
 */

const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/emails.log');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * Log email to file and console
 */
function logEmail(email, subject, recipientName, type) {
  const timestamp = new Date().toISOString();
  const logEntry = `
=====================================
Timestamp: ${timestamp}
Type: ${type}
To: ${email}
Name: ${recipientName}
Subject: ${subject}
=====================================
`;

  try {
    fs.appendFileSync(logFile, logEntry);
    console.log(`Email logged (${type}):`, email);
    return { success: true, logged: true, timestamp };
  } catch (error) {
    console.error('Error logging email:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Send welcome email on registration
 */
async function sendWelcomeEmail(email, name) {
  try {
    console.log(`Sending welcome email to: ${email}`);
    
    const subject = `Welcome to Shortcut Sensei, ${name}`;
    const result = logEmail(email, subject, name, 'WELCOME_EMAIL');
    
    if (result.success) {
      console.log(`Welcome email processed for: ${email}`);
      return { success: true, messageId: `dev-${Date.now()}` };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error sending welcome email:', error.message);
    throw error;
  }
}

/**
 * Send password reset email
 */
async function sendPasswordResetEmail(email, name, resetToken) {
  try {
    console.log(`Sending password reset email to: ${email}`);
    
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password.html?token=${resetToken}`;
    const subject = `Password Reset Link - Shortcut Sensei`;
    
    const result = logEmail(email, subject, name, 'PASSWORD_RESET');
    
    if (result.success) {
      console.log(`Password reset email processed for: ${email}`);
      return { success: true, messageId: `dev-${Date.now()}` };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error sending password reset email:', error.message);
    throw error;
  }
}

/**
 * Send support/help request email
 */
async function sendSupportEmail(name, senderEmail, subject, message) {
  try {
    console.log(`Sending support email from: ${senderEmail}`);
    
    const fullSubject = `Support Request: ${subject}`;
    const result = logEmail(
      process.env.MAILGUN_SUPPORT_EMAIL || 'support@shortcutsensei.com',
      fullSubject,
      name,
      'SUPPORT_REQUEST'
    );
    
    if (result.success) {
      console.log(`Support email processed from: ${senderEmail}`);
      return { success: true, messageId: `dev-${Date.now()}` };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error sending support email:', error.message);
    throw error;
  }
}

module.exports = {
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendSupportEmail
};
