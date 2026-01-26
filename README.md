# Shortcut Sensei

A web application for learning and mastering keyboard shortcuts across various applications. Features an interactive quiz system, community forum, and comprehensive shortcut database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Documentation](#documentation)

## Features

### Core Functionality
- ✅ **30+ Application Guides** - Comprehensive shortcut collections
- ✅ **User Authentication** - API-backed login system
- ✅ **Bookmark System** - Save your favorite shortcuts
- ✅ **Dark Mode** - Easy on the eyes
- ✅ **Responsive Design** - Works on all devices
- ✅ **Search Functionality** - Find shortcuts quickly
- ✅ **Newsletter** - Stay updated with new shortcuts

### Recent Updates (v1.0.0)
- ✅ Fixed newsletter subscription scrolling
- ✅ Standardized user dropdown across all pages
- ✅ Enhanced Mac Shortcuts page
- ✅ Implemented bookmark system
- ✅ Fixed all navigation links
- ✅ Created comprehensive documentation

---

## 🎯 What's New

### Latest Session Updates

```
✅ Newsletter Subscription - Fixed page scrolling issue
✅ User Dropdown - Standardized to "User Profile" + "Logout"
✅ Mac Shortcuts Page - Added bookmark, print, share buttons
✅ Navigation Links - Fixed Mac link and About button
✅ Bookmark System - Full localStorage implementation
✅ Documentation - 12 comprehensive guides created
✅ Testing Tool - Interactive verification interface
```

- Interactive quiz application with multiple question types
- User authentication and profile management
- Community forum for sharing and discussing shortcuts
- Bookmark system for saving favorite shortcuts
- Search functionality across shortcut database
- Dark mode support
- Responsive design for mobile and desktop

### Supported Applications

Comprehensive coverage including:
- Productivity tools (Microsoft Office, Google Suite)
- Development environments (VS Code, Visual Studio)
- Creative software (Adobe Suite, GIMP)
- Communication platforms (Slack, Teams, Zoom)
- Operating systems (Windows, macOS)
- Media players and utilities

## Tech Stack

### Frontend
- React 18.2.0 for quiz application
- HTML5, CSS3, JavaScript ES6+
- Font Awesome 6.0.0 for icons
- Montserrat font family

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- RESTful API architecture

### Development Tools
- Git for version control
- npm for package management
- Create React App for frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB account (Atlas recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/shortcut-sensei.git
cd shortcut-sensei
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install quiz app dependencies
```bash
cd ../quizs
npm install
cd ..
```

4. Set up environment variables

Create `.env` file in backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
```

Create `.env` file in quizs directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

5. Start the development servers

Backend server:
```bash
cd backend
npm start
```

Frontend server (in new terminal):
```bash
cd quizs
npm start
```

Static files server (in new terminal):
```bash
npm run start-frontend
```

The application will be available at:
- Main site: http://localhost:3000
- Quiz app: http://localhost:3000/quizs
- Backend API: http://localhost:5000

## Project Structure

```
Shortcut_Sensei/
├── backend/                 # Express.js backend
│   ├── config/             # Configuration files
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── server.js           # Entry point
├── quizs/                  # React quiz application
│   ├── public/             # Static assets
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   └── App.js          # Main app component
│   └── package.json
├── assets/                 # Shared assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── data/              # JSON data files
├── pages/                  # HTML pages
│   ├── applications/      # Application guides
│   ├── blogs/             # Blog posts
│   └── user/              # User pages
├── home-page.html         # Landing page
├── index.html             # Entry point
└── package.json           # Root dependencies
```

## Development

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd quizs
npm test
```

### Building for Production

```bash
# Build React app
cd quizs
npm run build
```

This creates an optimized production build in the `quizs/build` directory.

## Deployment

For detailed deployment instructions, see [RENDER_DEPLOYMENT_GUIDE.md](RENDER_DEPLOYMENT_GUIDE.md).

### Quick Deploy to Render

1. Push code to GitHub
2. Create MongoDB Atlas cluster and get connection string
3. Create backend web service on Render
4. Create frontend static site on Render
5. Configure environment variables
6. Deploy

Estimated deployment time: 45 minutes

## Documentation

- [RENDER_DEPLOYMENT_GUIDE.md](RENDER_DEPLOYMENT_GUIDE.md) - Complete deployment guide for Render
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - General deployment guide

## License

All rights reserved.

## Contact

For questions or support, please open an issue in the repository.
---

## 📄 License

Copyright © 2024 Shortcut Sensei. All rights reserved.

---

## 🙏 Acknowledgments

### Technologies
- Mailgun - Email service
- Font Awesome - Icons
- Google Fonts - Typography

### Inspiration
Built with ❤️ to help people work more efficiently with keyboard shortcuts.

---

## 📊 Status

```
Development:   ✅ Complete
Testing:       ⏳ In Progress
Documentation: ✅ Complete
Deployment:    ⏳ Ready
Status:        🚀 Production Ready
```

---

## 🎉 Quick Links

### Documentation
- [📖 Start Here](START_HERE.md)
- [⚡ Quick Reference](QUICK_REFERENCE.md)
- [📊 Visual Summary](VISUAL_SUMMARY.md)
- [📚 Documentation Index](DOCUMENTATION_INDEX.md)

### Testing
- [🧪 Verification Tool](verify-fixes.html)
- [📋 Testing Guide](TESTING_GUIDE.md)

### Deployment
- [🚀 Deployment Checklist](DEPLOYMENT_CHECKLIST.md)
- [📈 Project Status](PROJECT_STATUS.md)

### Technical
- [💻 Session Summary](SESSION_COMPLETE_SUMMARY.md)
- [🔧 Fixes Completed](FIXES_COMPLETED.md)
- [📝 Implementation Notes](IMPLEMENTATION_SUMMARY.md)

---

## 💡 Pro Tips

1. **Start with [START_HERE.md](START_HERE.md)** for quickest onboarding
2. **Use [verify-fixes.html](verify-fixes.html)** for easy testing
3. **Bookmark frequently used shortcuts** for quick access
4. **Enable dark mode** for comfortable viewing
5. **Subscribe to newsletter** for updates

---

## 🎯 Mission

> To make everyone more productive by providing easy access to keyboard shortcuts for all major applications.

---

## ⭐ Star Us!

If you find Shortcut Sensei helpful, please consider starring the repository!

---

**Built with ❤️ by the Shortcut Sensei Team**

**Status**: ✅ Production Ready | **Version**: 1.0.0 | **Last Updated**: 2024

---

**[Get Started Now →](START_HERE.md)**
