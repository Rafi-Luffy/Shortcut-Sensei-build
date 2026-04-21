const express = require('express');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env for local development
try {
  // dotenv is already a dependency of the repo root
  const dotenv = require('dotenv');
  // Prefer repo-root .env, but also support clerk-auth/.env.local
  dotenv.config({ path: path.join(__dirname, '.env'), quiet: true });
  dotenv.config({ path: path.join(__dirname, 'clerk-auth', '.env.local'), quiet: true });
  // Fallback to default behavior (process.cwd()) if needed
  dotenv.config({ quiet: true });
} catch (error) {
  // Ignore if dotenv isn't available
}

const app = express();

// Expose browser-safe config for static pages.
app.get('/app-config.json', (req, res) => {
  const clerkPublishableKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    process.env.CLERK_PUBLISHABLE_KEY ||
    process.env.VITE_CLERK_PUBLISHABLE_KEY ||
    '';

  const apiBaseUrl =
    process.env.API_BASE_URL ||
    process.env.VITE_API_BASE_URL ||
    '';

  res.set('Cache-Control', 'no-store');
  return res.json({
    clerkPublishableKey,
    apiBaseUrl
  });
});

// Clerk (Vite) auth app (served from built assets)
const clerkBuildPath = path.join(__dirname, 'clerk-auth', 'dist');
const clerkIndexPath = path.join(clerkBuildPath, 'index.html');
const hasClerkBuild = fs.existsSync(clerkIndexPath);

if (hasClerkBuild) {
  const sendClerkIndex = (res) => {
    try {
      const raw = fs.readFileSync(clerkIndexPath, 'utf8');

      // Publishable key can be exposed to the browser; do NOT inject secret keys.
      const clerkPublishableKey =
        process.env.VITE_CLERK_PUBLISHABLE_KEY ||
        process.env.CLERK_PUBLISHABLE_KEY ||
        '';

      const apiBaseUrl = process.env.VITE_API_BASE_URL || process.env.API_BASE_URL || '';

      const injected = raw.replace(
        /<head>/i,
        `<head>\n    <script>window.__APP_CONFIG__=${JSON.stringify({ clerkPublishableKey, apiBaseUrl })};</script>`
      );

      res.set('Cache-Control', 'no-store');
      res.type('html').send(injected);
    } catch (error) {
      res.sendFile(clerkIndexPath);
    }
  };

  // Back-compat with existing links to login.html + legacy login page
  app.get(
    ['/login', '/login/', '/login.html', '/signup', '/signup/', '/signup.html', '/pages/user/login_page.html'],
    (req, res) => {
      return sendClerkIndex(res);
    }
  );

  // Static assets produced by Vite build (base is /login/)
  app.use('/login', express.static(clerkBuildPath, { index: false }));

  // SPA fallback
  app.get(/^\/(login|signup)(\/.*)?$/, (req, res) => {
    sendClerkIndex(res);
  });
}

// Serve home-page.html as the default entry
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'home-page.html'));
});

// Serve favicon
app.get('/favicon.ico', (req, res) => {
  const candidates = [
    path.join(__dirname, 'favicon.ico'),
    path.join(__dirname, 'quizs', 'public', 'favicon.ico'),
    path.join(__dirname, 'quizs', 'favicon.ico'),
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (found) return res.sendFile(found);
  return res.status(404).end();
});

// Serve the quiz React app on /quizs route
const quizBuildPath = path.join(__dirname, 'quizs', 'build');
const quizPublicIndex = path.join(__dirname, 'quizs', 'public', 'index.html');
const quizIndexPath = fs.existsSync(path.join(quizBuildPath, 'index.html'))
  ? path.join(quizBuildPath, 'index.html')
  : quizPublicIndex;

app.use('/quizs', express.static(quizBuildPath));
app.get(['/quizs', '/quizs/index.html'], (req, res) => {
  res.sendFile(quizIndexPath);
});
app.get(/^\/quizs(\/.*)?$/, (req, res) => {
  res.sendFile(quizIndexPath);
});

// Serve HTML files with automatic unified-system injection for consistent behavior across all pages
app.get(/.*\.html$/, (req, res, next) => {
  try {
    const requestedPath = decodeURIComponent(req.path);
    const filePath = path.join(__dirname, requestedPath);
    const normalized = path.normalize(filePath);

    if (!normalized.startsWith(path.normalize(__dirname + path.sep))) {
      return res.status(400).send('Bad request');
    }

    if (!fs.existsSync(normalized) || !fs.statSync(normalized).isFile()) {
      return next();
    }

    let html = fs.readFileSync(normalized, 'utf8');
    const hasUnified = /assets\/js\/unified-system\.js/.test(html);
    if (!hasUnified) {
      const injection = '\n    <script src="/assets/js/unified-system.js"></script>\n';
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${injection}</body>`);
      } else if (html.includes('</html>')) {
        html = html.replace('</html>', `${injection}</html>`);
      } else {
        html += injection;
      }
    }

    res.type('html').send(html);
  } catch (error) {
    next(error);
  }
});

// Serve static files from the root directory (all HTML pages, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Local dev: backend typically uses PORT=5000, so don't reuse it for the frontend.
// Production/PaaS: honor PORT.
const isProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.RENDER ||
  process.env.RENDER_EXTERNAL_URL;

const PORT = isProduction
  ? process.env.PORT || process.env.FRONTEND_PORT || 3000
  : process.env.FRONTEND_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
