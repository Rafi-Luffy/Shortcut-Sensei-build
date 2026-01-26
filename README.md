# Shortcut Sensei

A web application for learning and mastering keyboard shortcuts across various applications. Features an interactive quiz system, community forum, and comprehensive shortcut database.

## Features

### Core Functionality
- **30+ Application Guides** - Comprehensive shortcut collections
- **User Authentication** - API-backed login system
- **Bookmark System** - Save your favorite shortcuts
- **Dark Mode** - Easy on the eyes
- **Responsive Design** - Works on all devices
- **Search Functionality** - Find shortcuts quickly

---

## What's New

### Latest Session Updates

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

## Contact

For questions or support, please open an issue in the repository.
---

## License

Copyright © 2025 Shortcut Sensei. All rights reserved.

---

### Inspiration
Built with ❤️ to help people work more efficiently with keyboard shortcuts.

---

## Mission

> To make everyone more productive by providing easy access to keyboard shortcuts for all major applications.

---

