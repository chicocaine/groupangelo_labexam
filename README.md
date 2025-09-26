# University of Mindanao - College of Computing Education Website

## Laboratory Examination Project - GROUPANGELO

### Members:
- **Eduard Anthony C. Pechayco**
- **Dranreb Jay B. Arzadon**

**Objective**: The objective of this laboratory examination is to enable the students to apply web scripting languages in creating a functional, menu-driven web application. Specifically, the activity aims to develop the ability to design a creative landing page that reflects a chosen theme.

## Technology Stack

### Frontend
- React with TypeScript
- React Router DOM for navigation
- Tailwind CSS for styling
- Vite for development and building

### Backend  
- **PHP 8+** authentication API with session management
- **JSON file storage** for user data persistence
- **CORS support** for cross-origin requests

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PHP 8+ with web server (Apache/Nginx)
- Modern web browser

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
1. Place the `backend/` directory in your web server's document root
2. Ensure PHP has write permissions to `backend/users.json`
3. Configure CORS if needed for development

### Build for Production
```bash
cd frontend
npm run build
```

## Project Architecture

### Component Structure
- **Pages**: Complete page components (Homepage, About, Programs, News, Contact, Login, Register)
- **Navigation**: Responsive navigation with conditional rendering
- **Contexts**: Authentication context for state management
- **Hooks**: Custom hooks for authentication logic

## Project Structure

```
├── README.md
├── backend/
│   ├── auth.php          # Authentication API endpoints
│   └── users.json        # User data storage
└── frontend/
    ├── public/
    │   ├── logo.png      # UM CCE official logo
    │   └── vite.svg      # Vite favicon
    ├── src/
    │   ├── contexts/     # React contexts (Authentication)
    │   ├── hooks/        # Custom React hooks (useAuth)
    │   ├── pages/        # Page components (Homepage, About, etc.)
    │   ├── assets/       # Static assets and images
    │   ├── App.tsx       # Main app component with routing
    │   ├── Nav.tsx       # Navigation component
    │   └── main.tsx      # App entry point
    └── ...
```