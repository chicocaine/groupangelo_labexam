import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export const Nav: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <img src="/ccelogo.png" alt="UM CCE Logo" className="h-8 w-8 mr-3" />
                <h1 className="text-lg font-bold text-gray-900 hidden sm:block">COLLEGE OF COMPUTING EDUCATION</h1>
                <h1 className="text-lg font-bold text-gray-900 sm:hidden">CCE</h1>
              </div>
            </Link>
          </div>

          {/* Navigation Items - Always visible */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
              style={{color: isActivePage('/') ? 'var(--primary-green)' : undefined}}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/about') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/programs') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
              style={{color: isActivePage('/programs') ? 'var(--primary-green)' : undefined}}
            >
              Programs
            </Link>
            <Link 
              to="/news" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/news') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
              style={{color: isActivePage('/news') ? 'var(--primary-green)' : undefined}}
            >
              News & Events
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/contact') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
              style={{color: isActivePage('/contact') ? 'var(--primary-green)' : undefined}}
            >
              Contact
            </Link>
          </div>

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{backgroundColor: 'var(--primary-green)'}}
                >
                  <span className="text-white font-medium text-sm">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white transition duration-200 hover:opacity-90"
                  style={{backgroundColor: 'var(--secondary-gold)'}}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white transition duration-200 hover:opacity-90"
                style={{backgroundColor: 'var(--primary-green)'}}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/') 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-700 hover:text-green-600'
            }`}
            style={{color: isActivePage('/') ? 'var(--primary-green)' : undefined}}
          >
            Home
          </Link>
          <Link 
            to="/programs" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/programs') 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-700 hover:text-green-600'
            }`}
            style={{color: isActivePage('/programs') ? 'var(--primary-green)' : undefined}}
          >
            Programs
          </Link>
          <Link 
            to="/news" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/news') 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-700 hover:text-green-600'
            }`}
            style={{color: isActivePage('/news') ? 'var(--primary-green)' : undefined}}
          >
            Events
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/contact') 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-700 hover:text-green-600'
            }`}
            style={{color: isActivePage('/contact') ? 'var(--primary-green)' : undefined}}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};