# College of Computing Education Website

This website has been transformed from a simple authentication-only application into a comprehensive college website for the College of Computing Education.

## Features

### Public Access (No Registration Required)
- **Homepage**: Welcome page with college overview, statistics, and highlights
- **About**: College mission, vision, history, leadership team, and core values
- **Academic Programs**: Detailed information about undergraduate and graduate programs, plus career opportunities
- **News & Events**: Latest news, upcoming events, and newsletter signup
- **Contact & Visit**: Contact information, campus visit options, and department contacts

### Optional User Authentication
- Users can browse the entire website without registering
- Optional registration and login for access to personalized dashboard
- Authentication is handled via backend PHP API

## Technology Stack

### Frontend
- React with TypeScript
- React Router DOM for navigation
- Tailwind CSS for styling
- Vite for development and building

### Backend  
- PHP authentication API
- JSON file storage for user data

## Getting Started

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
The backend PHP files are located in the `backend/` directory and need to be served by a web server with PHP support.

## Project Structure

```
├── README.md
├── backend/
│   ├── auth.php          # Authentication API
│   └── users.json        # User storage
└── frontend/
    ├── src/
    │   ├── components/    # Reusable components
    │   ├── contexts/      # React contexts (Auth)
    │   ├── hooks/         # Custom React hooks
    │   └── pages/         # Page components
    └── ...
```

## Navigation
- All pages are accessible without authentication
- Login/Register buttons appear in navigation for non-authenticated users
- Authenticated users see their profile and logout option
- Mobile-responsive navigation menu

The website successfully balances public accessibility with optional user features, making it suitable for prospective students, current students, faculty, and visitors.