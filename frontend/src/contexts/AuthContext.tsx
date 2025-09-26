import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

const API = "http://localhost:8000/auth.php";

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const res = await fetch(`${API}?action=me`, { credentials: "include" });
      const data = await res.json();
      if (data.user) {
        setUser({ username: data.user });
      }
    } catch (err) {
      console.error('Failed to check auth status:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    setError('');
    try {
      const res = await fetch(`${API}?action=login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      
      if (data.success) {
        setUser({ username: data.user });
        return true;
      } else {
        setError(data.error || 'Login failed');
        return false;
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
      return false;
    }
  };

  const register = async (username: string, password: string): Promise<boolean> => {
    setError('');
    try {
      const res = await fetch(`${API}?action=register`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      
      if (data.success) {
        // Auto-login after successful registration
        return await login(username, password);
      } else {
        setError(data.error || 'Registration failed');
        return false;
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Registration error:', err);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await fetch(`${API}?action=logout`, { credentials: "include" });
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const clearError = () => {
    setError('');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};