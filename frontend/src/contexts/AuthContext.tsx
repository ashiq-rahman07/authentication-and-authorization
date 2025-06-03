/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import axios from '@/api/axios';

interface User {
  id: string;
  username: string;
  shopNames: string[];
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, rememberMe: boolean) => Promise<boolean>;
  signup: (username: string, password: string, shopNames: string[]) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
    // Listen for token changes (e.g., logout in another tab)
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);
const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

  const checkAuthStatus = async () => {
    setLoading(true);
    try {
      const token = Cookies.get('authToken');
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      // Optionally, verify token with backend or decode it
      // Here, we fetch user profile from backend
      const res = await axios.get(`${baseUrl}/user/my-profile`);
      console.log(res.data.data);
      setUser(res.data.data);
    } catch (error: any) {
      setUser(null);
      Cookies.remove('authToken');
    }
    setLoading(false);
  };

  const signup = async (username: string, password: string, shopNames: string[]): Promise<boolean> => {
    try {
      const res = await axios.post(`${baseUrl}/user/register`, { username, password, shopNames });
      if (res.data.success) {
        toast('Your account has been created successfully!');
        return true;
      }
      toast(res.data.message || 'Signup failed');
      return false;
    } catch (error: any) {
      toast(error.response?.data?.message || 'Signup failed');
      return false;
    }
  };

  const login = async (username: string, password: string, rememberMe: boolean): Promise<boolean> => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, { username, password, rememberMe });

      const { accessToken } = res.data.data;
      // Set token in cookies
      Cookies.set('authToken', accessToken, {
        expires: rememberMe ? 7 : 0.0208, // 7 days or ~30 minutes
        secure: true,
        sameSite: 'strict',
      });
      setUser(user);
      toast(`Login Successful | Welcome back, ${username}!`);
      
      return true;
    } catch (error: any) {
      toast(error.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('authToken');
    setUser(null);
    toast('You have been logged out successfully.');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
