import { useEffect, useMemo, useState } from 'react';
import '../index.css';

const resolveApiUrl = () => {
  const envUrl = process.env.REACT_APP_API_URL || '';
  const isLocalHost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);

  if (isLocalHost) {
    return 'http://localhost:5000';
  }

  if (envUrl && !envUrl.includes('your-backend-url.onrender.com')) {
    return envUrl;
  }

  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin;
  }

  return 'http://localhost:5000';
};

const API_URL = resolveApiUrl();

const SOCIAL_PROVIDERS = [
  { key: 'google', label: 'Google', strategy: 'oauth_google' },
  { key: 'linkedin', label: 'LinkedIn', strategy: 'oauth_linkedin_oidc' },
  { key: 'facebook', label: 'Facebook', strategy: 'oauth_facebook' }
];

function getModeFromPath() {
  const params = new URLSearchParams(window.location.search);
  return params.get('mode') === 'signup' ? 'signup' : 'signin';
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0;
  const feedback = [];

  if (password.length >= 8) strength++;
  else feedback.push('At least 8 characters');

  if (/[a-z]/.test(password)) strength++;
  else feedback.push('Lowercase letter');

  if (/[A-Z]/.test(password)) strength++;
  else feedback.push('Uppercase letter');

  if (/[0-9]/.test(password)) strength++;
  else feedback.push('Number');

  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;
  else feedback.push('Special character');

  return {
    strength,
    isValid: strength >= 3,
    feedback,
    label: strength === 0 ? 'Too weak' : strength === 1 ? 'Weak' : strength === 2 ? 'Fair' : strength === 3 ? 'Good' : strength === 4 ? 'Strong' : 'Very Strong'
  };
}

function EyeIcon({ isOpen }) {
  if (isOpen) {
    return (
      <svg className="eye-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }

  return (
    <svg className="eye-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <path d="M4 4l16 16" />
      <path d="M9.5 9.5a3.5 3.5 0 0 0 5 5" />
    </svg>
  );
}

function SocialProviderLogo({ providerKey }) {
  if (providerKey === 'google') {
    return (
      <svg className="social-provider-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.8 3.3 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12S6.7 21.6 12 21.6c6.9 0 9.6-4.8 9.6-7.2 0-.5 0-.9-.1-1.2H12z" />
        <path fill="#34A853" d="M2.4 7.3l3.2 2.3C6.5 7.8 9 6 12 6c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.8 3.3 14.6 2.4 12 2.4c-3.7 0-7 2.1-8.6 4.9z" />
        <path fill="#FBBC05" d="M12 21.6c2.5 0 4.6-.8 6.2-2.2l-2.9-2.4c-.8.6-1.9 1-3.3 1-3 0-5.5-2-6.4-4.7l-3.1 2.4c1.6 3 4.8 4.9 8.5 4.9z" />
        <path fill="#4285F4" d="M21.6 12c0-.7-.1-1.2-.2-1.8H12v3.9h5.5c-.3 1.4-1.2 2.5-2.2 3.2l2.9 2.4c1.7-1.5 2.8-3.8 2.8-7.7z" />
      </svg>
    );
  }

  if (providerKey === 'facebook') {
    return (
      <svg className="social-provider-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.8v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.4h-2.9v8.4A12 12 0 0 0 24 12z" />
      </svg>
    );
  }

  return (
    <svg className="social-provider-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0A66C2" d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.2 2.3 4.2 5.4v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z" />
    </svg>
  );
}

export default function LoginPage({ onLoginSuccess }) {
  const initialMode = useMemo(() => getModeFromPath(), []);
  const [mode, setMode] = useState(initialMode);
  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInShowPassword, setSignInShowPassword] = useState(false);
  const [signInError, setSignInError] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
  
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpShowPassword, setSignUpShowPassword] = useState(false);
  const [signUpShowConfirmPassword, setSignUpShowConfirmPassword] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [socialReady, setSocialReady] = useState(false);
  const [socialLoadingProvider, setSocialLoadingProvider] = useState('');

  const saveAuthToStorage = (token, user) => {
    const userId = user?._id || user?.id || '';
    const displayName = user?.name || user?.displayName || user?.email || 'User';
    const email = user?.email || '';
    const createdAt = user?.createdAt || user?.created_at;

    localStorage.setItem('authToken', token);
    localStorage.setItem('token', token);
    localStorage.setItem('auth_token', token);
    localStorage.setItem('current_user', JSON.stringify({
      id: userId,
      displayName,
      email,
      createdAt
    }));
    localStorage.setItem('userDisplayName', displayName);
    localStorage.setItem('userEmail', email);
  };

  const handleAuthSuccess = (token, user) => {
    saveAuthToStorage(token, user);

    if (onLoginSuccess) {
      onLoginSuccess();
    }

    window.location.href = '/home-page.html';
  };

  const fetchClerkPublishableKey = async () => {
    try {
      const response = await fetch('/app-config.json', { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        if (data?.clerkPublishableKey) {
          return data.clerkPublishableKey;
        }
      }
    } catch (error) {
      // Continue to env fallback.
    }

    return process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || '';
  };

  const ensureClerkLoaded = async () => {
    const publishableKey = await fetchClerkPublishableKey();
    if (!publishableKey) {
      throw new Error('Clerk publishable key is missing for social auth.');
    }

    if (!window.Clerk) {
      await new Promise((resolve, reject) => {
        const existingScript = document.getElementById('clerk-js-sdk');
        if (existingScript) {
          existingScript.addEventListener('load', resolve);
          existingScript.addEventListener('error', reject);
          return;
        }

        const script = document.createElement('script');
        script.id = 'clerk-js-sdk';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-clerk-publishable-key', publishableKey);
        script.src = 'https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load Clerk SDK.'));
        document.head.appendChild(script);
      });
    }

    await window.Clerk.load({ publishableKey });
  };

  const syncClerkSessionToApp = async () => {
    if (!window.Clerk || !window.Clerk.session) {
      return false;
    }

    const clerkToken = await window.Clerk.session.getToken();
    if (!clerkToken) {
      return false;
    }

    const response = await fetch(`${API_URL}/api/clerk/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${clerkToken}`
      }
    });

    const data = await response.json();
    if (!response.ok || !data.success || !data.user) {
      throw new Error(data.message || 'Failed to sync social login.');
    }

    handleAuthSuccess(clerkToken, data.user);
    return true;
  };

  useEffect(() => {
    let isMounted = true;

    const initSocialAuth = async () => {
      try {
        await ensureClerkLoaded();
        if (!isMounted) return;
        setSocialReady(true);

        try {
          await syncClerkSessionToApp();
        } catch (error) {
          // Ignore sync errors here; user can still use email/password login.
        }
      } catch (error) {
        if (!isMounted) return;
        setSocialReady(false);
      }
    };

    initSocialAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSocialAuth = async (provider) => {
    setSignInError('');
    setSignUpError('');
    setSocialLoadingProvider(provider.label);

    try {
      if (!socialReady || !window.Clerk) {
        throw new Error('Social login is not ready yet. Please try again in a moment.');
      }

      await window.Clerk.authenticateWithRedirect({
        strategy: provider.strategy,
        redirectUrl: `${window.location.origin}/quizs/`,
        redirectUrlComplete: `${window.location.origin}/quizs/`
      });
    } catch (error) {
      const message = error?.message || `Unable to continue with ${provider.label}.`;
      setSignInError(message);
      setSignUpError(message);
    } finally {
      setSocialLoadingProvider('');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setSignInError('');
    setForgotPasswordMessage('');
    setSignInLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const user = data.user;
        handleAuthSuccess(data.token, user);
      } else {
        setSignInError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setSignInError('Login failed. Please try again.');
    } finally {
      setSignInLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setSignInError('');
    setForgotPasswordMessage('');

    if (!signInEmail.trim()) {
      setForgotPasswordMessage('Enter your email first.');
      return;
    }

    setForgotPasswordLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: signInEmail.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setForgotPasswordMessage(data.message || 'If an account exists, a reset link will be sent.');
      } else {
        setForgotPasswordMessage(data.message || 'Unable to send reset link right now.');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setForgotPasswordMessage('Unable to send reset link right now.');
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpError('');
    setSignUpLoading(true);

    // Validate passwords match
    if (signUpPassword !== signUpConfirmPassword) {
      setSignUpError('Passwords do not match');
      setSignUpLoading(false);
      return;
    }

    // Check password strength
    const strength = checkPasswordStrength(signUpPassword);
    if (!strength.isValid) {
      setSignUpError(`Password is too weak. Please add: ${strength.feedback.join(', ')}`);
      setSignUpLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const user = data.user;
        handleAuthSuccess(data.token, user);
      } else {
        setSignUpError(data.message || 'Sign up failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setSignUpError('Sign up failed. Please try again.');
    } finally {
      setSignUpLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="main-logo-container">
        <img src="/images/general/Logo.png" alt="Shortcut Sensei" className="main-logo" />
      </div>

      <div className={`login-container ${mode === 'signup' ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form className="auth-form auth-form-signup" onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            
            {signUpError && <div className="error-message">{signUpError}</div>}
            
            <span>Enter your details to register</span>
            
            <input
              type="text"
              placeholder="Name"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              required
              disabled={signUpLoading}
            />
            
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              required
              disabled={signUpLoading}
            />
            
            <div className="password-field">
              <input
                type={signUpShowPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => {
                  const nextValue = e.target.value;
                  setSignUpPassword(nextValue);
                  setPasswordStrength(nextValue ? checkPasswordStrength(nextValue) : null);
                }}
                required
                disabled={signUpLoading}
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setSignUpShowPassword(!signUpShowPassword)}
                className="password-toggle"
                aria-label={signUpShowPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon isOpen={signUpShowPassword} />
              </button>
            </div>

            {passwordStrength && (
              <div className={`password-strength level-${passwordStrength.strength}`}>
                <strong>Password strength: {passwordStrength.label}</strong>
                {passwordStrength.feedback.length > 0 && (
                  <div className="password-strength-hint">
                    Add: {passwordStrength.feedback.join(', ')}
                  </div>
                )}
              </div>
            )}

            <div className="password-field">
              <input
                type={signUpShowConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={signUpConfirmPassword}
                onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                required
                disabled={signUpLoading}
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setSignUpShowConfirmPassword(!signUpShowConfirmPassword)}
                className="password-toggle"
                aria-label={signUpShowConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                <EyeIcon isOpen={signUpShowConfirmPassword} />
              </button>
            </div>

            {signUpPassword && signUpConfirmPassword && signUpPassword !== signUpConfirmPassword && (
              <div className="password-mismatch">
                Passwords do not match
              </div>
            )}

            <div className="social-auth-block">
              <div className="social-auth-divider">
                <span>or continue with</span>
              </div>
              <div className="social-auth-grid">
                {SOCIAL_PROVIDERS.map((provider) => (
                  <button
                    key={`signup-${provider.key}`}
                    type="button"
                    className={`social-auth-button social-${provider.key}`}
                    disabled={!socialReady || !!socialLoadingProvider || signUpLoading}
                    onClick={() => handleSocialAuth(provider)}
                    aria-label={`Continue with ${provider.label}`}
                  >
                    <SocialProviderLogo providerKey={provider.key} />
                    <span className="social-provider-label">{socialLoadingProvider === provider.label ? 'Please wait...' : provider.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={signUpLoading || signUpPassword !== signUpConfirmPassword || (passwordStrength && !passwordStrength.isValid)}
            >
              {signUpLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="auth-form auth-form-signin" onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            
            {signInError && <div className="error-message">{signInError}</div>}
            
            <span>Use your account credentials</span>
            
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              required
              disabled={signInLoading}
            />
            
            <div className="password-field">
              <input
                type={signInShowPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                required
                disabled={signInLoading}
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setSignInShowPassword(!signInShowPassword)}
                className="password-toggle"
                aria-label={signInShowPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon isOpen={signInShowPassword} />
              </button>
            </div>

            <div className="forgot-password-row">
              <button
                type="button"
                className="forgot-password-link"
                onClick={handleForgotPassword}
                disabled={forgotPasswordLoading}
              >
                {forgotPasswordLoading ? 'Sending reset link...' : 'Forgot password?'}
              </button>
            </div>

            {forgotPasswordMessage && (
              <div className="forgot-password-message" role="status" aria-live="polite">
                {forgotPasswordMessage}
              </div>
            )}

            <div className="social-auth-block">
              <div className="social-auth-divider">
                <span>or continue with</span>
              </div>
              <div className="social-auth-grid">
                {SOCIAL_PROVIDERS.map((provider) => (
                  <button
                    key={`signin-${provider.key}`}
                    type="button"
                    className={`social-auth-button social-${provider.key}`}
                    disabled={!socialReady || !!socialLoadingProvider || signInLoading}
                    onClick={() => handleSocialAuth(provider)}
                    aria-label={`Continue with ${provider.label}`}
                  >
                    <SocialProviderLogo providerKey={provider.key} />
                    <span className="social-provider-label">{socialLoadingProvider === provider.label ? 'Please wait...' : provider.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button type="submit" disabled={signInLoading}>
              {signInLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome back</h1>
              <p>Sign in to continue where you left off.</p>
              <button className="ghost" type="button" onClick={() => setMode('signin')}>
                Sign in
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Get started</h1>
              <p>Create an account to save your setup and access everything in one place.</p>
              <button className="ghost" type="button" onClick={() => setMode('signup')}>
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
