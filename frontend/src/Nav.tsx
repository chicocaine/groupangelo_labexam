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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">College of Computing Education</h1>
            </Link>
          </div>

          {/* Navigation Items - Always visible */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/programs') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Programs
            </Link>
            <Link 
              to="/news" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/news') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              News & Events
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                isActivePage('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user.username}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Sign Up
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
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/about') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About
          </Link>
          <Link 
            to="/programs" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/programs') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Programs
          </Link>
          <Link 
            to="/news" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/news') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            News & Events
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
              isActivePage('/contact') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};