import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthContainer: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {isLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};