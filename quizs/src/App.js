import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import QUIZ_DATA from './quizData';
import LoginPage from './components/LoginPage';

// List of all applications
const APPLICATIONS = [
  // Microsoft Suite
  "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", 
  "Microsoft Outlook", "Microsoft OneNote", "Microsoft OneDrive", "Microsoft Teams",
  
  // Browsers & File Tools
  "Microsoft Edge", "Google Chrome", "File Explorer",
  
  // Communication Apps
  "Slack", "Telegram", "Discord", "WhatsApp", "Skype", "Zoom",
  
  // Creative & Multimedia
  "Adobe Photoshop", "Adobe Creative Cloud", "Acrobat Adobe Reader", 
  "Audacity", "VLC Media Player",
  
  // Developer & System Tools
  "HTML Cheat Sheet", "Visual Studio", "Windows 11", "macOS",
  
  // Task & Productivity
  "Trello", "Spotify", "WinRAR", "7-Zip","Mozilla ThunderBird"
];

// API origin helper - uses environment variable or defaults to localhost for development
const API_ORIGIN = process.env.REACT_APP_API_URL || 
  ((typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:5000'
    : window.location.origin);
const FRONTEND_ORIGIN = (typeof window !== 'undefined')
  ? window.location.origin
  : '';

const toAbsoluteUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return '';
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `${API_ORIGIN}${value}`;
};

const resolveQuizAppName = (rawName) => {
  if (!rawName) return null;
  const normalized = rawName.replace(/_/g, ' ').trim();
  if (QUIZ_DATA[normalized]) return normalized;
  const match = Object.keys(QUIZ_DATA).find(
    key => key.toLowerCase() === normalized.toLowerCase()
  );
  return match || normalized;
};

function App() {
  // State for application selection screen
  const [selectedApp, setSelectedApp] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDifficultySelection, setShowDifficultySelection] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userAvatarUrl, setUserAvatarUrl] = useState('');

  // Runtime guard: force scrollability even if conflicting CSS gets applied.
  const enforceScrollableViewport = useCallback(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById('root');

    if (!html || !body || !root) return;

    html.style.height = 'auto';
    html.style.minHeight = '100%';
    html.style.overflowX = 'hidden';
    html.style.overflowY = 'auto';
    html.style.overscrollBehavior = 'auto';
    html.style.position = 'static';
    html.style.touchAction = 'auto';

    body.style.height = 'auto';
    body.style.minHeight = '100vh';
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'auto';
    body.style.overscrollBehavior = 'auto';
    body.style.position = 'static';
    body.style.touchAction = 'auto';

    root.style.height = 'auto';
    root.style.minHeight = '100vh';
    root.style.overflowX = 'hidden';
    root.style.overflowY = 'visible';
    root.style.overscrollBehavior = 'auto';
    root.style.position = 'static';
    root.style.display = 'block';
  }, []);

  useEffect(() => {
    const applyThemeFromStorage = () => {
      const html = document.documentElement;
      const body = document.body;
      const themeValue = localStorage.getItem('theme');
      const darkModeValue = localStorage.getItem('darkMode');
      const isDark = themeValue === 'dark' || darkModeValue === 'true';

      html.classList.toggle('dark-mode', isDark);
      body.classList.toggle('dark-mode', isDark);
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    };

    applyThemeFromStorage();
    window.addEventListener('storage', applyThemeFromStorage);
    window.addEventListener('focus', applyThemeFromStorage);

    return () => {
      window.removeEventListener('storage', applyThemeFromStorage);
      window.removeEventListener('focus', applyThemeFromStorage);
    };
  }, []);

  useEffect(() => {
    enforceScrollableViewport();
    const rafId = window.requestAnimationFrame(enforceScrollableViewport);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [enforceScrollableViewport, showProfile, showQuiz, showDifficultySelection, selectedApp, selectedDifficulty]);

  useEffect(() => {
    const isScrollableY = (element) => {
      if (!element || element === document.body || element === document.documentElement) return false;
      const style = window.getComputedStyle(element);
      const overflowY = style.overflowY;
      const allowsScroll = overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';
      return allowsScroll && element.scrollHeight > element.clientHeight;
    };

    const hasScrollableAncestorInDirection = (start, deltaY) => {
      let current = start;
      while (current && current !== document.body && current !== document.documentElement) {
        if (isScrollableY(current)) {
          const canScrollDown = deltaY > 0 && (current.scrollTop + current.clientHeight < current.scrollHeight);
          const canScrollUp = deltaY < 0 && current.scrollTop > 0;
          if (canScrollDown || canScrollUp) {
            return true;
          }
        }
        current = current.parentElement;
      }
      return false;
    };

    const onWheel = (event) => {
      if (event.defaultPrevented) return;

      const target = event.target;
      if (!target) return;

      const tagName = target.tagName ? target.tagName.toLowerCase() : '';
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target.isContentEditable) {
        return;
      }

      if (hasScrollableAncestorInDirection(target, event.deltaY)) {
        return;
      }

      const scroller = document.scrollingElement || document.documentElement;
      if (!scroller) return;

      const maxScrollTop = scroller.scrollHeight - scroller.clientHeight;
      if (maxScrollTop <= 0) return;

      const previous = scroller.scrollTop;
      const next = Math.max(0, Math.min(maxScrollTop, previous + event.deltaY));
      if (next !== previous) {
        scroller.scrollTop = next;
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', onWheel, { capture: true, passive: false });
    return () => document.removeEventListener('wheel', onWheel, { capture: true });
  }, []);

  // Check login status on mount
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/' || pathname === '/index.html') {
      // no-op
    }

    // Check URL params for auth token (cross-port login)
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    const urlName = urlParams.get('name');
    const urlEmail = urlParams.get('email');
    const showProfileParam = urlParams.get('profile');
    
    if (urlToken) {
      // Store auth data from URL params
      localStorage.setItem('token', urlToken);
      localStorage.setItem('auth_token', urlToken);
      if (urlName) localStorage.setItem('userDisplayName', urlName);
      if (urlEmail) localStorage.setItem('userEmail', urlEmail);
      
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Check localStorage for existing auth
    const token = localStorage.getItem('token') || 
                  localStorage.getItem('auth_token') || 
                  localStorage.getItem('authToken');
    const displayName = localStorage.getItem('userDisplayName');
    const email = localStorage.getItem('userEmail');
    
    if (token && (displayName || email)) {
      setIsLoggedIn(true);
      setUserDisplayName(displayName || email.split('@')[0]);
    }

    const storedAvatar = localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL') || '';
    setUserAvatarUrl(storedAvatar);

    
    // Check if profile should be shown
    if (showProfileParam === 'true') {
      const authToken = localStorage.getItem('token') || 
                        localStorage.getItem('auth_token') || 
                        localStorage.getItem('authToken');
      if (authToken) {
        // Force profile-first view (ignore any app/difficulty state)
        setSelectedApp(null);
        setSelectedDifficulty(null);
        setQuizQuestions([]);
        setShowQuiz(false);
        setShowDifficultySelection(false);
        setShowProfile(true);
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        // Redirect to login if not authenticated
        window.location.href = `${FRONTEND_ORIGIN}/quizs/?mode=signin`;
      }
    }
    
    // Newsletter subscription handler
    const subscribeForm = document.getElementById('quizSubscribeForm');
    if (subscribeForm) {
      subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('quizEmailInput');
        const confirmationMessage = document.getElementById('quizConfirmationMessage');
        const email = emailInput.value.trim();
        
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          subscribeForm.style.display = 'none';
          confirmationMessage.style.display = 'block';
          console.log('Newsletter subscription:', email);
          
          setTimeout(() => {
            subscribeForm.style.display = 'flex';
            confirmationMessage.style.display = 'none';
            emailInput.value = '';
          }, 5000);
        }
      });
    }
  }, []);

  useEffect(() => {
    const onAvatarUpdated = (e) => {
      const next = e?.detail?.avatar || localStorage.getItem('userAvatarImage') || localStorage.getItem('userPhotoURL') || '';
      setUserAvatarUrl(next);
    };
    window.addEventListener('user-avatar-updated', onAvatarUpdated);
    return () => window.removeEventListener('user-avatar-updated', onAvatarUpdated);
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    // If the user explicitly requested profile mode, don't deep-link into an app quiz.
    if (urlParams.get('profile') === 'true') return;
    const appParam = urlParams.get('app');
    if (appParam) {
      const resolvedApp = resolveQuizAppName(appParam);
      setSelectedApp(resolvedApp);
      if (resolvedApp && QUIZ_DATA[resolvedApp]) {
        setShowDifficultySelection(true);
      } else {
        setShowQuiz(true);
      }
    }
  }, []);

  // Function to handle app selection
  const selectApp = (app) => {
    setSelectedApp(app);
    
    // Check if selected app has quiz data
    if (QUIZ_DATA[app]) {
      setShowDifficultySelection(true);
    } else {
      // If no quiz data, show a message (handled in Quiz component)
      setShowQuiz(true);
    }
  };
  
  // Function to select difficulty and prepare quiz
  const selectDifficulty = (difficulty) => {
    // Check if user is logged in before starting quiz
    const token = localStorage.getItem('token') ||
                  localStorage.getItem('auth_token') ||
                  localStorage.getItem('authToken');
    if (!token) {
      alert('Please log in to take the quiz!');
      window.location.href = `${FRONTEND_ORIGIN}/quizs/?mode=signin`;
      return;
    }
    
    setSelectedDifficulty(difficulty);
    
    // Get questions for the selected app and difficulty
    const allQuestions = QUIZ_DATA[selectedApp][difficulty];
    
    // Select 20 random questions or all if less than 20
    const randomQuestions = getRandomQuestions(allQuestions, 20);
    setQuizQuestions(randomQuestions);
    
    setShowDifficultySelection(false);
    setShowQuiz(true);
    
    // Scroll to top when quiz starts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Function to get random questions
  const getRandomQuestions = (questions, count) => {
    // If we have fewer questions than requested, return all questions
    if (questions.length <= count) {
      return [...questions];
    }
    
    // Otherwise, randomly select count questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  // Function to go back to app selection
  const backToApps = () => {
    setShowQuiz(false);
    setShowDifficultySelection(false);
    setSelectedApp(null);
    setSelectedDifficulty(null);
    setQuizQuestions([]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDisplayName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAvatarImage');
    localStorage.removeItem('userPhotoURL');
    localStorage.removeItem('current_user');
    setIsLoggedIn(false);
    setShowUserDropdown(false);
    setShowProfile(false);
  };

  const handleLoginSuccess = () => {
    const token = localStorage.getItem('authToken') || localStorage.getItem('token');
    const displayName = localStorage.getItem('userDisplayName');
    const email = localStorage.getItem('userEmail');
    
    if (token && (displayName || email)) {
      setIsLoggedIn(true);
      setUserDisplayName(displayName || email.split('@')[0]);
      window.location.href = `${FRONTEND_ORIGIN}/home-page.html`;
    }
  };

  // Show login page if not authenticated
  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <a href={`${FRONTEND_ORIGIN}/home-page.html`}>Shortcut Sensei</a>
          </div>
          
          <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href={`${FRONTEND_ORIGIN}/pages/blogs/blogs.html`}>Blogs</a></li>
              <li><a href={`${FRONTEND_ORIGIN}/Applications.html`}>Applications</a></li>
              <li><a href={`${FRONTEND_ORIGIN}/About.html`}>About</a></li>
              <li>
                <a
                  href={`${FRONTEND_ORIGIN}/quizs/`}
                  className="active"
                  onClick={() => {
                    setShowProfile(false);
                    setShowQuiz(false);
                    setShowDifficultySelection(false);
                    setSelectedApp(null);
                  }}
                >
                  Quiz
                </a>
              </li>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          <div className="header-right">
            <div className="login-button-container">
              {isLoggedIn ? (
                <div className="user-menu">
                  <button className="login-btn" onClick={() => setShowUserDropdown(!showUserDropdown)}>
                    {userAvatarUrl ? (
                      <img
                        className="quiz-user-avatar"
                        src={toAbsoluteUrl(userAvatarUrl)}
                        alt="User"
                        onError={() => setUserAvatarUrl('')}
                      />
                    ) : (
                      <i className="fas fa-user"></i>
                    )}
                    {userDisplayName}
                    <i className={`fas fa-chevron-down dropdown-arrow ${showUserDropdown ? 'open' : ''}`}></i>
                  </button>
                  {showUserDropdown && (
                    <div className="user-dropdown">
                      <button onClick={() => { setShowProfile(true); setShowUserDropdown(false); }} className="dropdown-item">
                        <i className="fas fa-user-circle"></i> My Profile
                      </button>
                      <button onClick={handleLogout} className="dropdown-item logout-btn">
                        <i className="fas fa-sign-out-alt"></i> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button className="login-btn" onClick={() => window.location.href = `${FRONTEND_ORIGIN}/quizs/?mode=signin`}>
                  <i className="fas fa-sign-in-alt"></i> Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="app-container">
        {showProfile ? (
          <UserProfile onClose={() => setShowProfile(false)} />
        ) : !showQuiz && !showDifficultySelection ? (
          <AppSelection onSelectApp={selectApp} applications={APPLICATIONS} />
        ) : showDifficultySelection ? (
          <DifficultySelection 
            appName={selectedApp} 
            onSelectDifficulty={selectDifficulty}
            onBack={backToApps}
          />
        ) : (
          <Quiz 
            appName={selectedApp}
            difficulty={selectedDifficulty}
            quizData={quizQuestions} 
            onBackToApps={backToApps}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Resources</h3>
            <p>Your ultimate guide to mastering keyboard shortcuts. We provide comprehensive guides and tips to help you work faster and more efficiently.</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Subscribe</h3>
            <form className="subscribe-form" id="quizSubscribeForm">
              <input type="email" id="quizEmailInput" placeholder="Your email" required />
              <button type="submit" id="quizSubscribeButton">Subscribe</button>
            </form>
            <p id="quizConfirmationMessage" style={{display: 'none', color: '#8a2be2', fontWeight: 'bold', marginTop: '10px'}}>Thanks for subscribing to our newsletter!</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Shortcut Sensei. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function UserProfile({ onClose }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [quizHistory, setQuizHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const fetchUserData = useCallback(async () => {
    try {
      // First, try to load from localStorage for immediate display
      const localUser = localStorage.getItem('current_user');
      if (localUser) {
        try {
          const parsedUser = JSON.parse(localUser);
          setUserData({
            ...parsedUser,
            name: parsedUser.displayName || parsedUser.name || '',
            email: parsedUser.email || '',
            avatar: parsedUser.avatarUrl || parsedUser.avatar || '',
            createdAt: parsedUser.createdAt || null
          });
          setFormData({
            name: parsedUser.displayName || parsedUser.name || '',
            email: parsedUser.email || ''
          });
        } catch (e) {
          console.error('Error parsing local user:', e);
        }
      }

      // Check all possible token storage keys
      const token = localStorage.getItem('token') || 
                    localStorage.getItem('auth_token') || 
                    localStorage.getItem('authToken');
      
      if (!token) {
        // If we have local user but no token, show what we have
        if (localUser) {
          setLoading(false);
          return;
        }
        setMessage({ type: 'error', text: 'Please log in to view your profile' });
        setLoading(false);
        return;
      }
      
      console.log('Fetching profile with token:', token.substring(0, 20) + '...');
      
      const response = await fetch(`${API_ORIGIN}/api/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Profile data received:', data);
        const user = data.user || data; // Handle both { user } and direct user object
        const normalizedUser = {
          ...user,
          avatar: user.avatar ? toAbsoluteUrl(user.avatar) : '',
          createdAt: user.createdAt || user.dateJoined || null
        };

        setUserData(normalizedUser);
        setFormData({
          name: normalizedUser.name || '',
          email: normalizedUser.email || '',
          
        });
        setQuizHistory(normalizedUser.quizResults || normalizedUser.quizProgress || []);
        const normalizedBookmarks = (normalizedUser.bookmarks || []).map((bookmark) => {
          if (bookmark.applicationName || bookmark.applicationId) {
            return bookmark;
          }
          return {
            applicationId: (bookmark.application || '').toLowerCase().replace(/\s+/g, '-'),
            applicationName: bookmark.application || 'Application',
            shortcuts: bookmark.shortcut
              ? [{
                  shortcutId: bookmark.shortcutId || bookmark.shortcut,
                  keys: bookmark.shortcut,
                  description: bookmark.description || ''
                }]
              : (bookmark.shortcuts || [])
          };
        });
        setBookmarks(normalizedBookmarks);
        
        // Update localStorage with latest data including createdAt
        localStorage.setItem('current_user', JSON.stringify({
          id: normalizedUser._id || normalizedUser.id,
          displayName: normalizedUser.name,
          email: normalizedUser.email,
          avatarUrl: normalizedUser.avatar,
          clerkId: normalizedUser.clerkUserId,
          createdAt: normalizedUser.createdAt
        }));
        localStorage.setItem('userDisplayName', normalizedUser.name);
        localStorage.setItem('userEmail', normalizedUser.email);

        // If backend sent a refreshed token, persist it for future requests
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage({ type: 'error', text: errorData.message || 'Failed to load profile data' });
      }
    } catch (error) {
      console.error('Profile fetch error:', error);
      setMessage({ type: 'error', text: 'Error loading profile. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
    const interval = setInterval(fetchUserData, 30000);
    return () => clearInterval(interval);
  }, [fetchUserData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getApplicationHref = (applicationName = '', applicationId = '') => {
    const name = String(applicationName || '').trim();
    const id = String(applicationId || '').trim();

    const overrides = {
      'Windows 11': '/pages/applications/Windows_11.html',
      'Mac Shortcuts': '/pages/applications/Mac_Shortcuts.html',
      'Microsoft Excel': '/pages/applications/Microsoft Excell.html'
    };

    if (overrides[name]) return overrides[name];

    // Most application pages are named exactly as the application name (spaces included)
    if (name) return `/pages/applications/${encodeURIComponent(name)}.html`;

    // Fallback: use quiz deep-link if we can't resolve a guide page
    if (id) return `/quizs/?app=${encodeURIComponent(id)}`;
    return '/Applications.html';
  };

  const downloadPerformanceCSV = () => {
    if (!userData) return;

    const csvData = [];
    
    // Header
    csvData.push('SHORTCUT SENSEI - USER PERFORMANCE REPORT');
    csvData.push('');
    csvData.push('Personal Information');
    csvData.push(`Name,${userData.name}`);
    csvData.push(`Email,${userData.email}`);
    csvData.push(`Member Since,${userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}`);
    csvData.push('');
    
    // Quiz History
    csvData.push('Quiz Performance');
    csvData.push('Application,Difficulty,Score,Total Questions Correct,Total Questions Present,Date');
    quizHistory.forEach(quiz => {
      const totalPresent = typeof quiz.totalQuestions === 'number' ? quiz.totalQuestions : null;
      const totalCorrect = typeof quiz.correctAnswers === 'number'
        ? quiz.correctAnswers
        : (typeof quiz.correct === 'number' ? quiz.correct : null);
      csvData.push(`${quiz.application},${quiz.difficulty},${quiz.score}%,${totalCorrect ?? 'N/A'},${totalPresent ?? 'N/A'},${quiz.completedAt ? new Date(quiz.completedAt).toLocaleDateString() : 'N/A'}`);
    });
    csvData.push('');
    
    // Statistics
    if (quizHistory.length > 0) {
      const avgScore = (quizHistory.reduce((sum, q) => sum + (q.score || 0), 0) / quizHistory.length).toFixed(2);
      const highestScore = Math.max(...quizHistory.map(q => q.score || 0));
      csvData.push('Overall Statistics');
      csvData.push(`Total Quizzes Taken,${quizHistory.length}`);
      csvData.push(`Average Score,${avgScore}%`);
      csvData.push(`Highest Score,${highestScore}%`);
      csvData.push('');
    }

    const csvContent = csvData.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shortcut-sensei-performance-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    setMessage({ type: 'success', text: 'Performance report downloaded!' });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('token') ||
                    localStorage.getItem('auth_token') ||
                    localStorage.getItem('authToken');
      const updateData = {
        displayName: formData.name
      };

      const response = await fetch(`${API_ORIGIN}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user || data;
        const normalizedUser = {
          ...user,
          avatar: user.avatar ? toAbsoluteUrl(user.avatar) : ''
        };

        setUserData(normalizedUser);
        localStorage.setItem('userDisplayName', normalizedUser.name);
        // Keep unified-system/AuthManager in sync across static pages
        localStorage.setItem('current_user', JSON.stringify({
          displayName: normalizedUser.name,
          email: normalizedUser.email,
          avatarUrl: normalizedUser.avatar
        }));
        
        // Save avatar to localStorage if available
        if (normalizedUser.avatar) {
          // No cache-busting in storage; keep a stable URL for other pages
          localStorage.setItem('userAvatarImage', normalizedUser.avatar);
          window.dispatchEvent(new CustomEvent('user-avatar-updated', { detail: { avatar: normalizedUser.avatar } }));
        }

        // If backend sent a refreshed token, persist it for future requests
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
        setEditing(false);
        
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.message || 'Update failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error updating profile' });
    }
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i> Loading profile...
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-left">
          <div className="profile-avatar-container">
            {userData?.avatar ? (
              <img
                src={userData.avatar}
                alt="Profile"
                className="profile-avatar"
                onError={() => setUserData((prev) => (prev ? { ...prev, avatar: '' } : prev))}
              />
            ) : (
              <i className="fas fa-user-circle profile-avatar-icon"></i>
            )}
          </div>
          <h1>My Profile</h1>
        </div>
        <button onClick={onClose} className="close-profile-btn">
          <i className="fas fa-times"></i> Close
        </button>
      </div>

      {message.text && (
        <div className={`profile-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="profile-content">
        <div className="profile-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            {!editing && (
              <button onClick={() => setEditing(true)} className="edit-btn">
                <i className="fas fa-edit"></i> Edit Profile
              </button>
            )}
          </div>

          {editing ? (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  <i className="fas fa-save"></i> Save Changes
                </button>
                <button type="button" onClick={() => setEditing(false)} className="cancel-btn">
                  <i className="fas fa-times"></i> Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">{userData?.name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{userData?.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Member Since:</span>
                <span className="info-value">
                  {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Quiz History</h2>
          {quizHistory.length > 0 ? (
            <div className="quiz-history">
              {quizHistory.slice(0, 10).map((quiz, index) => (
                <div key={index} className="quiz-history-item">
                  <div className="quiz-info">
                    <span className="quiz-app">{quiz.application}</span>
                    <span className="quiz-difficulty">{quiz.difficulty}</span>
                  </div>
                  <div className="quiz-score">
                    <span className={`score ${quiz.score >= 80 ? 'high' : quiz.score >= 60 ? 'medium' : 'low'}`}>
                      {quiz.score}%
                    </span>
                    <span className="quiz-metrics">
                      {typeof quiz.timeSpent === 'number' ? formatTime(quiz.timeSpent) : 'N/A'} •
                      {(typeof quiz.correctAnswers === 'number' ? quiz.correctAnswers : (typeof quiz.correct === 'number' ? quiz.correct : 'N/A'))} correct
                    </span>
                    <span className="quiz-date">
                      {quiz.completedAt ? new Date(quiz.completedAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-history">No quiz history yet. Start taking quizzes to see your progress!</p>
          )}
        </div>

        <div className="profile-section">
          <div className="section-header">
            <h2>Performance Report</h2>
            <button onClick={downloadPerformanceCSV} className="download-performance-btn">
              <i className="fas fa-download"></i> Download Performance
            </button>
          </div>
          <p className="section-description">
            Download a CSV report of your quiz performance.
          </p>
        </div>

        <div className="profile-section">
          <h2>My Bookmarks</h2>
          {bookmarks.length > 0 ? (
            <div className="bookmarks-container">
              {bookmarks.map((bookmark, index) => (
                <div key={index} className="bookmark-app">
                  <h4>{bookmark.applicationName}</h4>
                  <a
                    className="bookmark-go-btn"
                    href={getApplicationHref(bookmark.applicationName, bookmark.applicationId)}
                  >
                    Let's go
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-history">No bookmarked applications yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AppSelection({ onSelectApp, applications }) {
  // Group applications by category
  const categories = {
    "Microsoft Suite": applications.slice(0, 7),
    "Browsers & File Tools": applications.slice(7, 10),
    "Communication Apps": applications.slice(10, 16),
    "Creative & Multimedia": applications.slice(16, 21),
    "Developer & System Tools": applications.slice(21, 24),
    "Task & Productivity": applications.slice(24)
  };

  return (
    <div className="app-selection">
      {Object.entries(categories).map(([category, apps]) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="app-grid">
            {apps.map(app => (
              <button 
                key={app} 
                className="app-button" 
                onClick={() => onSelectApp(app)}
              >
                {app}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DifficultySelection({ appName, onSelectDifficulty, onBack }) {
  return (
    <div className="difficulty-container">
      <h2>{appName} Shortcut Quiz</h2>
      
      <p>Select a difficulty level:</p>
      
      <div className="difficulty-grid">
        <button 
          className="difficulty-button easy" 
          onClick={() => onSelectDifficulty('easy')}
        >
          <span className="difficulty-label">Easy</span>
          <span className="difficulty-desc">Fundamental shortcuts that every user should know</span>
        </button>
        
        <button 
          className="difficulty-button medium" 
          onClick={() => onSelectDifficulty('medium')}
        >
          <span className="difficulty-label">Medium</span>
          <span className="difficulty-desc">Intermediate shortcuts for efficient productivity</span>
        </button>
        
        <button 
          className="difficulty-button hard" 
          onClick={() => onSelectDifficulty('hard')}
        >
          <span className="difficulty-label">Hard</span>
          <span className="difficulty-desc">Advanced shortcuts for power users</span>
        </button>
      </div>
      
      <button className="back-btn" onClick={onBack}>Back to Applications</button>

    </div>
  );
}

// Helper function to format time
function formatTime(seconds) {
  if (!seconds) return 'N/A';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function Results({ appName, difficulty, score, quizData, userAnswers, onBackToApps }) {
  return (
    <div className="results-analysis-page">
      <div className="results-header">
        <h1 className="results-title">Quiz Analysis Report</h1>
        <p className="results-subtitle">{appName} • {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level</p>
      </div>

      <div className="results-main-layout">
        {/* Primary Section: Review Your Answers (70-75% width) */}
        <div className="review-section-primary">
          <div className="review-card">
            <div className="section-header">
              <i className="fas fa-clipboard-check"></i>
              <h2>Detailed Answer Review</h2>
              <span className="question-count">{quizData.length} Questions</span>
            </div>
            
            <div className="review-items-container">
              {quizData.map((question, index) => {
                const isCorrect = userAnswers[index] === question.correctAnswer;
                return (
                  <div key={index} className={`review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`}>
                    <div className="review-header">
                      <span className="question-number">Question {index + 1}</span>
                      <span className={`answer-status ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                        <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="question-text">{question.question}</p>
                    <div className="answer-details">
                      <p className="your-answer">
                        <strong>Your answer:</strong> 
                        <span className={isCorrect ? "correct" : "incorrect"}>
                          {userAnswers[index] || 'Not answered'}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="correct-answer">
                          <strong>Correct answer:</strong> {question.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary Section: Compact Score Summary (25-30% width) */}
        <aside className="score-sidebar">
          <div className="sticky-score-card">
            <div className="score-compact">
              <div className="score-label">Your Score</div>
              <div className="score-percentage">{score.percentage}%</div>
              <div className="score-details">
                <div className="score-stat">
                  <i className="fas fa-check-circle"></i>
                  <span>{score.correct} Correct</span>
                </div>
                <div className="score-stat">
                  <i className="fas fa-times-circle"></i>
                  <span>{score.total - score.correct} Incorrect</span>
                </div>
                <div className="score-stat total">
                  <i className="fas fa-list"></i>
                  <span>{score.total} Total</span>
                </div>
              </div>
            </div>
            
            <div className="performance-summary">
              <h4>Performance</h4>
              <div className="performance-bar">
                <div 
                  className="performance-fill" 
                  style={{ 
                    width: `${score.percentage}%`,
                    background: score.percentage >= 80 ? '#10b981' : score.percentage >= 60 ? '#f59e0b' : '#ef4444'
                  }}
                ></div>
              </div>
              <p className="performance-label">
                {score.percentage >= 80 ? 'Excellent!' : score.percentage >= 60 ? 'Good Job!' : 'Keep Practicing!'}
              </p>
            </div>

            <button className="back-btn-sidebar" onClick={onBackToApps}>
              <i className="fas fa-arrow-left"></i> Back to Applications
            </button>
          </div>
        </aside>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top-btn"
        onClick={() => {
          const resultsPage = document.querySelector('.results-analysis-page');
          if (resultsPage) {
            resultsPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        title="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

function Quiz({ appName, difficulty, quizData, onBackToApps }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [markedQuestions, setMarkedQuestions] = useState(new Set());
  const [visitedQuestions, setVisitedQuestions] = useState(new Set([0]));
  const [timer, setTimer] = useState(() => {
    // Set timer based on difficulty: Easy=7.5min, Medium=10min, Hard=12.5min
    if (difficulty === 'easy') return 7.5 * 60;
    if (difficulty === 'medium') return 10 * 60;
    return 12.5 * 60; // hard
  });
  const [milliseconds, setMilliseconds] = useState(0);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [quizStartTime] = useState(Date.now());
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  // Submit quiz function - defined early to avoid hoisting issues
  const handleSubmitQuiz = useCallback(async () => {
    // Check if all questions are visited and answered
    const notVisitedIndices = quizData.filter((_, index) => !visitedQuestions.has(index));
    const notAnsweredIndices = quizData.filter((_, index) => userAnswers[index] === null);
    const notVisited = notVisitedIndices.length;
    const notAnswered = notAnsweredIndices.length;
    
    if (notVisited > 0 || notAnswered > 0) {
      let message = '';
      if (notVisited > 0 && notAnswered === 0) {
        // Only unvisited questions
        message = `${notVisited} question${notVisited > 1 ? 's are' : ' is'} not visited`;
      } else if (notVisited === 0 && notAnswered > 0) {
        // Only unanswered questions
        message = `${notAnswered} question${notAnswered > 1 ? 's are' : ' is'} unanswered`;
      } else {
        // Both unvisited and unanswered
        message = `${notVisited} question${notVisited > 1 ? 's are' : ' is'} not visited, ${notAnswered} question${notAnswered > 1 ? 's are' : ' is'} unanswered`;
      }
      
      setWarningMessage(message);
      setShowSubmitWarning(true);
      return;
    }
    
    submitQuizFinal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizData, userAnswers, visitedQuestions]);
  
  const submitQuizFinal = useCallback(async () => {
    setShowSubmitWarning(false);
    
    let correctCount = 0;

    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / quizData.length) * 100);
    const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000); // in seconds

    setScore({
      correct: correctCount,
      total: quizData.length,
      percentage: finalScore
    });

    setIsQuizSubmitted(true);

    // Save quiz result to backend
    try {
      const token = localStorage.getItem('authToken') || 
                    localStorage.getItem('token') || 
                    localStorage.getItem('auth_token');
      if (token) {
        const response = await fetch(`${API_ORIGIN}/api/users/quiz-result`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            application: appName,
            score: finalScore,
            totalQuestions: quizData.length,
            difficulty: difficulty,
            timeSpent: timeSpent,
            correctAnswers: correctCount
          })
        });

        if (response.ok) {
          console.log('Quiz result saved successfully');
        } else {
          console.error('Failed to save quiz result');
        }
      }
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }

    // Also save to localStorage for immediate UI updates
    const quizResult = {
      application: appName,
      score: finalScore,
      date: new Date().toISOString(),
      difficulty: difficulty,
      timeSpent: timeSpent,
      correctAnswers: correctCount,
      totalQuestions: quizData.length
    };

    const existingData = JSON.parse(localStorage.getItem('userQuizData') || '[]');
    existingData.push(quizResult);
    localStorage.setItem('userQuizData', JSON.stringify(existingData));

    // Trigger profile sync to ensure quiz results are visible in profile
    try {
      const token = localStorage.getItem('authToken') || 
                    localStorage.getItem('token') || 
                    localStorage.getItem('auth_token');
      if (token) {
        // Fetch fresh profile data to sync quiz results
        await fetch(`${API_ORIGIN}/api/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(res => {
          if (res.ok) {
            console.log('Profile synced after quiz submission');
          }
        }).catch(err => console.error('Failed to sync profile:', err));
      }
    } catch (error) {
      console.error('Error syncing profile after quiz:', error);
    }
  }, [appName, difficulty, quizData, userAnswers, quizStartTime]);

  // Timer effect
  // Timer effect with milliseconds
  useEffect(() => {
    if (isQuizSubmitted) return;
    
    // Milliseconds counter (updates every 10ms)
    const millisecondsInterval = setInterval(() => {
      setMilliseconds(prev => (prev + 1) % 100);
    }, 10);
    
    // Seconds countdown
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          clearInterval(millisecondsInterval);
          handleSubmitQuiz();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(countdown);
      clearInterval(millisecondsInterval);
    };
  }, [isQuizSubmitted, handleSubmitQuiz]);

  // Format timer display - Min : Sec : Millisec
  const formatTime = useCallback(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
  }, [timer, milliseconds]);

  // Handle answer selection
  const handleAnswerSelect = (selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  // If no quiz data is available yet
  if (!quizData || quizData.length === 0) {
    return (
      <div className="quiz-container">
        <h2>Quiz coming soon for {appName}</h2>
        <p className="no-history">We’re preparing this quiz. Check back soon.</p>
        <button className="back-btn" onClick={onBackToApps}>Back to Applications</button>
      </div>
    );
  }

  // Display results if quiz is submitted
  if (isQuizSubmitted) {
    return (
      <Results 
        appName={appName}
        difficulty={difficulty}
        score={score}
        quizData={quizData}
        userAnswers={userAnswers}
        onBackToApps={onBackToApps}
      />
    );
  }

  // Current question data
  const currentQuestion = quizData[currentQuestionIndex];

  // Toggle mark for review
  const toggleMark = () => {
    const newMarked = new Set(markedQuestions);
    if (newMarked.has(currentQuestionIndex)) {
      newMarked.delete(currentQuestionIndex);
    } else {
      newMarked.add(currentQuestionIndex);
    }
    setMarkedQuestions(newMarked);
  };

  // Navigate with visit tracking
  const navigateWithTracking = (index) => {
    const newVisited = new Set(visitedQuestions);
    newVisited.add(index);
    setVisitedQuestions(newVisited);
    setCurrentQuestionIndex(index);
  };

  // Get question status for palette
  const getQuestionStatus = (index) => {
    if (markedQuestions.has(index)) return 'marked';
    if (userAnswers[index] !== null) return 'answered';
    if (!visitedQuestions.has(index)) return 'not-visited';
    return 'not-answered';
  };

  // Count stats for progress
  const answeredCount = userAnswers.filter(a => a !== null).length;
  const markedCount = markedQuestions.size;

  // Calculate total time and percentage for progress indicator
  const totalTime = difficulty === 'easy' ? 7.5 * 60 : difficulty === 'medium' ? 10 * 60 : 12.5 * 60;
  const timePercentage = (timer / totalTime) * 100;

  return (
    <div className="manaquiz-container">
      {/* Top Header */}
      <div className="manaquiz-header">
        <div className="manaquiz-header-left">
          <button className="quiz-back-btn" onClick={onBackToApps}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <h1 className="manaquiz-title">{appName} Test</h1>
        </div>
        <div className="manaquiz-stats">
          <span className="stat-item">
            <i className="fas fa-list"></i> {currentQuestionIndex + 1} of {quizData.length}
          </span>
          <span className="stat-item">
            <i className="fas fa-check-circle"></i> Answered: {answeredCount}/{quizData.length}
          </span>
          <span className="stat-item timer-display">
            <div className="timer-progress-ring">
              <svg className="progress-ring" width="60" height="60">
                <circle
                  className="progress-ring-circle-bg"
                  stroke="#1e293b"
                  strokeWidth="3"
                  fill="transparent"
                  r="26"
                  cx="30"
                  cy="30"
                />
                <circle
                  className="progress-ring-circle"
                  stroke={timePercentage > 20 ? '#60a5fa' : '#ef4444'}
                  strokeWidth="3"
                  fill="transparent"
                  r="26"
                  cx="30"
                  cy="30"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 26}`,
                    strokeDashoffset: `${2 * Math.PI * 26 * (1 - timePercentage / 100)}`,
                    transition: 'stroke-dashoffset 0.3s ease, stroke 0.3s ease'
                  }}
                />
              </svg>
              <div className="timer-content">
                <i className="fas fa-clock"></i>
              </div>
            </div>
            <span className="timer-text">{formatTime()}</span>
          </span>
          <button className="submit-button" onClick={handleSubmitQuiz}>Submit</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="manaquiz-main">
        {/* Question Area */}
        <div className="question-area">
          <div className="question-header">
            <h2 className="question-number">Question {currentQuestionIndex + 1}</h2>
            <div className="question-tags">
              <span className="tag tag-{difficulty}">{difficulty}</span>
            </div>
            <button 
              className={`mark-review-btn ${markedQuestions.has(currentQuestionIndex) ? 'marked' : ''}`}
              onClick={toggleMark}
            >
              <i className="fas fa-flag"></i> Mark for Review
            </button>
          </div>

          <div className="question-content">
            <p className="question-text">{currentQuestion.question}</p>
          </div>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <label 
                key={index} 
                className={`option-item ${userAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
              >
                <input 
                  type="radio" 
                  name={`q${currentQuestionIndex}`} 
                  checked={userAnswers[currentQuestionIndex] === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                <span className="option-radio"></span>
                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="question-nav-buttons">
            <button 
              className="nav-button prev-button" 
              disabled={currentQuestionIndex === 0}
              onClick={() => navigateWithTracking(currentQuestionIndex - 1)}
            >
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <button 
              className="nav-button next-button" 
              onClick={() => {
                if (currentQuestionIndex < quizData.length - 1) {
                  navigateWithTracking(currentQuestionIndex + 1);
                }
              }}
            >
              Save & Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Question Palette Sidebar */}
        <div className="question-palette">
          <h3 className="palette-title">Question Palette</h3>
          
          <div className="palette-grid">
            {quizData.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <button
                  key={index}
                  className={`palette-btn status-${status} ${index === currentQuestionIndex ? 'current' : ''}`}
                  onClick={() => navigateWithTracking(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="palette-legend">
            <h4 className="legend-title">Legend:</h4>
            <div className="legend-item">
              <span className="legend-box status-not-visited"></span>
              <span className="legend-text">Not Visited</span>
            </div>
            <div className="legend-item">
              <span className="legend-box status-not-answered"></span>
              <span className="legend-text">Not Answered</span>
            </div>
            <div className="legend-item">
              <span className="legend-box status-answered"></span>
              <span className="legend-text">Answered</span>
            </div>
            <div className="legend-item">
              <span className="legend-box status-marked"></span>
              <span className="legend-text">Marked for Review</span>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="progress-stats">
            <h4 className="stats-title">Progress</h4>
            <div className="stat-row">
              <span className="stat-label">Answered:</span>
              <span className="stat-value">{answeredCount}/{quizData.length}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Marked:</span>
              <span className="stat-value">{markedCount}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(answeredCount / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Warning Modal */}
      {showSubmitWarning && (
        <div className="modal-overlay" onClick={() => setShowSubmitWarning(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>Warning</h3>
            </div>
            <div className="modal-body">
              <p>{warningMessage}</p>
              <p className="modal-question">Are you sure you want to submit?</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn cancel-btn" onClick={() => setShowSubmitWarning(false)}>
                Cancel
              </button>
              <button className="modal-btn submit-btn" onClick={submitQuizFinal}>
                Submit Anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;