import { useMemo, useState } from 'react';
import '../index.css';

const API_URL = 'http://localhost:5000';

function getModeFromPath() {
  const params = new URLSearchParams(window.location.search);
  return params.get('mode') === 'signup' ? 'signup' : 'signin';
}

export default function LoginPage({ onLoginSuccess }) {
  const initialMode = useMemo(() => getModeFromPath(), []);
  const [mode, setMode] = useState(initialMode);
  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);
  
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);

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
            
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              required
              minLength="6"
              disabled={signUpLoading}
            />
            
            <button type="submit" disabled={signUpLoading}>
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
            
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              required
              disabled={signInLoading}
            />
            
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
