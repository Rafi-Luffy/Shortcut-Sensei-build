import { useMemo, useState } from 'react';
import '../index.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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

export default function LoginPage({ onLoginSuccess }) {
  const initialMode = useMemo(() => getModeFromPath(), []);
  const [mode, setMode] = useState(initialMode);
  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInShowPassword, setSignInShowPassword] = useState(false);
  const [signInError, setSignInError] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);
  
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpShowPassword, setSignUpShowPassword] = useState(false);
  const [signUpShowConfirmPassword, setSignUpShowConfirmPassword] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setSignInError('');
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
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('current_user', JSON.stringify({
          id: user._id || user.id,
          displayName: user.name,
          email: user.email,
          createdAt: user.createdAt
        }));
        localStorage.setItem('userDisplayName', user.name);
        localStorage.setItem('userEmail', user.email);
        
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          window.location.href = '/home-page.html';
        }
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
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('current_user', JSON.stringify({
          id: user._id || user.id,
          displayName: user.name,
          email: user.email,
          createdAt: user.createdAt
        }));
        localStorage.setItem('userDisplayName', user.name);
        localStorage.setItem('userEmail', user.email);
        
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          window.location.href = '/home-page.html';
        }
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
          <form onSubmit={handleSignUp}>
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
            
            <div style={{ position: 'relative', marginBottom: '10px' }}>
              <input
                type={signUpShowPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                  setPasswordStrength(checkPasswordStrength(e.target.value));
                }}
                required
                disabled={signUpLoading}
                style={{ paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
              />
              <button
                type="button"
                onClick={() => setSignUpShowPassword(!signUpShowPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '0'
                }}
              >
                {signUpShowPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>

            {passwordStrength && (
              <div style={{
                marginBottom: '10px',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '12px',
                backgroundColor: passwordStrength.strength <= 1 ? '#ffebee' : passwordStrength.strength <= 2 ? '#fff3e0' : passwordStrength.strength <= 3 ? '#e8f5e9' : '#e3f2fd',
                color: passwordStrength.strength <= 1 ? '#c62828' : passwordStrength.strength <= 2 ? '#e65100' : passwordStrength.strength <= 3 ? '#2e7d32' : '#1565c0'
              }}>
                <strong>Password strength: {passwordStrength.label}</strong>
                {passwordStrength.feedback.length > 0 && (
                  <div style={{ marginTop: '4px' }}>
                    Add: {passwordStrength.feedback.join(', ')}
                  </div>
                )}
              </div>
            )}

            <div style={{ position: 'relative', marginBottom: '10px' }}>
              <input
                type={signUpShowConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={signUpConfirmPassword}
                onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                required
                disabled={signUpLoading}
                style={{ paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
              />
              <button
                type="button"
                onClick={() => setSignUpShowConfirmPassword(!signUpShowConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '0'
                }}
              >
                {signUpShowConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>

            {signUpPassword && signUpConfirmPassword && signUpPassword !== signUpConfirmPassword && (
              <div style={{
                marginBottom: '10px',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '12px',
                backgroundColor: '#ffebee',
                color: '#c62828'
              }}>
                ⚠️ Passwords do not match
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={signUpLoading || signUpPassword !== signUpConfirmPassword || (passwordStrength && !passwordStrength.isValid)}
            >
              {signUpLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
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
            
            <div style={{ position: 'relative', marginBottom: '10px' }}>
              <input
                type={signInShowPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                required
                disabled={signInLoading}
                style={{ paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
              />
              <button
                type="button"
                onClick={() => setSignInShowPassword(!signInShowPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '0'
                }}
              >
                {signInShowPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            
            <button type="submit" disabled={signInLoading}>
              {signInLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" type="button" onClick={() => setMode('signin')}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" type="button" onClick={() => setMode('signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
