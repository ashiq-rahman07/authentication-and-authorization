/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from '@/api/axios';
import { toast } from 'sonner';

interface User {
  id: string;
  username: string;
  shopNames: string[];
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string, rememberMe: boolean) => Promise<boolean>;
  signup: (username: string, password: string, shopNames: string[]) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    setLoading(true);
    try {
      const token = Cookies.get('authToken');
      if (!token) {
        setUser(null);
      } else {
        const res = await axios.get('/user/my-profile');
        setUser(res.data.data);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setUser(null);
      Cookies.remove('authToken');
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const signup = async (username: string, password: string, shopNames: string[]) => {
    try {
      const res = await axios.post('/user/register', { username, password, shopNames });
      toast('Signup successful!');
      return res.data.success;
    } catch (err: any) {
      toast(err.response?.data?.message || 'Signup failed');
      return false;
    }
  };

  const login = async (username: string, password: string, rememberMe: boolean) => {
    try {
      const res = await axios.post('/auth/login', { username, password, rememberMe });
      const token = res.data.data.accessToken;

      Cookies.set('authToken', token, {
        domain: '.localhost', // ✅ Must match backend cookie
        expires: rememberMe ? 7 : 0.0208,
        secure: false,
        sameSite: 'lax',
       
      });

      await checkAuthStatus(); // ✅ Fetch user right after login
      toast(`Welcome back, ${username}`);
      return true;
    } catch (err: any) {
      toast(err.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('authToken', { domain: '.localhost' }); // ✅ Clear for subdomains
    setUser(null);
    toast('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, signup, logout }}>
      {loading ? <div className="text-center mt-10">Loading...</div> : children}
    </AuthContext.Provider>
  );
};
