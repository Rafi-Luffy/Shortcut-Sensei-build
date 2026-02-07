import React, { useState, useEffect } from 'react';
import './App.css';
import QUIZ_DATA from './quizData';

// API origin helper - uses environment variable or defaults to localhost for development
const API_ORIGIN = process.env.REACT_APP_API_URL || 
  ((typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:5000'
    : window.location.origin);

const toAbsoluteUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return '';
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `${API_ORIGIN}${value}`;
};

/**
 * QuizEmbed Component
 * Embeds a quiz interface in HTML pages
 * 
 * Props:
 * - mode: 'main' (all apps) or 'app-specific' (specific app)
 * - appName: (optional) specific app name for app-specific mode
 * - onClose: callback when closing (not used in full-page mode)
 */
function QuizEmbed({ mode = 'main', appName = null, onClose = null }) {
  const [selectedApp, setSelectedApp] = useState(appName || null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDifficultySelection, setShowDifficultySelection] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');

  // Check login status on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    const urlName = urlParams.get('name');
    const urlEmail = urlParams.get('email');

    if (urlToken) {
      localStorage.setItem('token', urlToken);
      localStorage.setItem('auth_token', urlToken);
      if (urlName) localStorage.setItem('userDisplayName', urlName);
      if (urlEmail) localStorage.setItem('userEmail', urlEmail);
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const token = localStorage.getItem('token');
    const displayName = localStorage.getItem('userDisplayName');
    const email = localStorage.getItem('userEmail');

    if (token && (displayName || email)) {
      setIsLoggedIn(true);
      setUserDisplayName(displayName || email.split('@')[0]);
    }
  }, []);

  // For app-specific mode, auto-start with that app
  useEffect(() => {
    if (mode === 'app-specific' && appName) {
      setSelectedApp(appName);
      if (QUIZ_DATA[appName]) {
        setShowDifficultySelection(true);
      }
    }
  }, [mode, appName]);

  const selectApp = (app) => {
    setSelectedApp(app);
    if (QUIZ_DATA[app]) {
      setShowDifficultySelection(true);
    } else {
      setShowQuiz(true);
    }
  };

  const selectDifficulty = (difficulty) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to take the quiz!');
      window.location.href = `${API_ORIGIN}/pages/user/login_page.html`;
      return;
    }

    setSelectedDifficulty(difficulty);
    const allQuestions = QUIZ_DATA[selectedApp][difficulty];
    const randomQuestions = getRandomQuestions(allQuestions, 20);
    setQuizQuestions(randomQuestions);
    setShowDifficultySelection(false);
    setShowQuiz(true);
  };

  const getRandomQuestions = (questions, count) => {
    if (questions.length <= count) {
      return [...questions];
    }
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const backToApps = () => {
    setShowQuiz(false);
    setShowDifficultySelection(false);
    if (mode !== 'app-specific') {
      setSelectedApp(null);
    }
    setSelectedDifficulty(null);
    setQuizQuestions([]);
  };

  return (
    <div className="quiz-embed-container">
      {!showQuiz && !showDifficultySelection ? (
        <QuizSelection 
          mode={mode} 
          onSelectApp={selectApp}
          selectedApp={selectedApp}
        />
      ) : showDifficultySelection ? (
        <DifficultySelectionEmbed 
          appName={selectedApp}
          onSelectDifficulty={selectDifficulty}
          onBack={backToApps}
        />
      ) : (
        <QuizEmbed_Main 
          appName={selectedApp}
          difficulty={selectedDifficulty}
          quizData={quizQuestions}
          onBackToApps={backToApps}
        />
      )}
    </div>
  );
}

function QuizSelection({ mode, onSelectApp, selectedApp }) {
  const APPLICATIONS = [
    "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint",
    "Microsoft Outlook", "Microsoft OneNote", "Microsoft OneDrive", "Microsoft Teams",
    "Microsoft Edge", "Google Chrome", "File Explorer",
    "Slack", "Telegram", "Discord", "WhatsApp", "Skype", "Zoom",
    "Adobe Photoshop", "Adobe Creative Cloud", "Acrobat Adobe Reader",
    "Audacity", "VLC Media Player",
    "HTML Cheat Sheet", "Visual Studio", "Windows 11",
    "Trello", "Spotify", "WinRAR", "7-Zip", "Mozilla ThunderBird"
  ];

  if (mode === 'app-specific') {
    // For app-specific mode, show minimal selection - just the selected app with start button
    return (
      <div className="app-selection-mini">
        <h2>Quiz for {selectedApp}</h2>
        <p>Select difficulty level to start</p>
      </div>
    );
  }

  // For main mode, show all apps
  const categories = {
    "Microsoft Suite": APPLICATIONS.slice(0, 7),
    "Browsers & File Tools": APPLICATIONS.slice(7, 10),
    "Communication Apps": APPLICATIONS.slice(10, 16),
    "Creative & Multimedia": APPLICATIONS.slice(16, 21),
    "Developer & System Tools": APPLICATIONS.slice(21, 24),
    "Task & Productivity": APPLICATIONS.slice(24)
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

function DifficultySelectionEmbed({ appName, onSelectDifficulty, onBack }) {
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
          <span className="difficulty-desc">Fundamental shortcuts</span>
        </button>
        <button
          className="difficulty-button medium"
          onClick={() => onSelectDifficulty('medium')}
        >
          <span className="difficulty-label">Medium</span>
          <span className="difficulty-desc">Intermediate shortcuts</span>
        </button>
        <button
          className="difficulty-button hard"
          onClick={() => onSelectDifficulty('hard')}
        >
          <span className="difficulty-label">Hard</span>
          <span className="difficulty-desc">Advanced shortcuts</span>
        </button>
      </div>

      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
}

// Main quiz component (same as the full app version)
function QuizEmbed_Main({ appName, difficulty, quizData, onBackToApps }) {
  // ... same implementation as Quiz component from App.js
  return (
    <div className="quiz-container">
      <h2>{appName} Quiz - {difficulty}</h2>
      <p>Quiz implementation would go here</p>
      <button onClick={onBackToApps}>Back</button>
    </div>
  );
}

export default QuizEmbed;
