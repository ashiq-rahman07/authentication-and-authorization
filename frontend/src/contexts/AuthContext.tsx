import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';


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
  }, []);

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem('authToken');
      const rememberMe = localStorage.getItem('rememberMe') === 'true';
      const loginTime = localStorage.getItem('loginTime');
      
      if (!token || !loginTime) {
        setLoading(false);
        return;
      }

      const now = Date.now();
      const loginTimestamp = parseInt(loginTime);
      const sessionDuration = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 30 * 60 * 1000; // 7 days or 30 minutes
      
      if (now - loginTimestamp > sessionDuration) {
        logout();
        setLoading(false);
        return;
      }

      // Validate token and get user data
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Auth check error:', error);
      logout();
    }
    setLoading(false);
  };

  const validatePassword = (password: string): boolean => {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return hasMinLength && hasNumber && hasSpecialChar;
  };

  const isShopNameTaken = (shopName: string, excludeUser?: string): boolean => {
    const users = JSON.parse(localStorage.getItem('allUsers') || '[]');
    return users.some((user: User) => 
      user.username !== excludeUser && 
      user.shopNames.some(name => name.toLowerCase() === shopName.toLowerCase())
    );
  };

  const signup = async (username: string, password: string, shopNames: string[]): Promise<boolean> => {
    try {
      // Validation
      if (!validatePassword(password)) {
        toast("Invalid Password | Password must be at least 8 characters with at least one number and one special character.");
        return false;
      }

      if (shopNames.length < 3) {
        toast("Insufficient Shop Names | Please provide at least 3 shop names.");
        return false;
      }

      // Check if username exists
      const users = JSON.parse(localStorage.getItem('allUsers') || '[]');
      if (users.some((user: User) => user.username === username)) {
        toast("Username Taken This username is already registered.");
        return false;
      }

      // Check for duplicate shop names
      for (const shopName of shopNames) {
        if (isShopNameTaken(shopName)) {
          toast(`Shop Name Taken Shop name | ${shopName} is already taken by another user.`);
          return false;
        }
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        username,
        shopNames,
        createdAt: new Date().toISOString()
      };

      // Save user
      const updatedUsers = [...users, newUser];
      localStorage.setItem('allUsers', JSON.stringify(updatedUsers));
      localStorage.setItem('userPasswords', JSON.stringify({
        ...JSON.parse(localStorage.getItem('userPasswords') || '{}'),
        [username]: password
      }));

      toast("Your account has been created successfully!");

      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast("Signup Failed ,An error occurred during signup.");
      return false;
    }
  };

  const login = async (username: string, password: string, rememberMe: boolean): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('allUsers') || '[]');
      const passwords = JSON.parse(localStorage.getItem('userPasswords') || '{}');
      
      const user = users.find((u: User) => u.username === username);
      
      if (!user) {
        toast( "User Not Found ,No account found with this username.");
        return false;
      }

      if (passwords[username] !== password) {
        toast("Incorrect Password  The password you entered is incorrect.");
        return false;
      }

      // Create session
      const token = `auth_${Date.now()}_${Math.random()}`;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('loginTime', Date.now().toString());
      localStorage.setItem('rememberMe', rememberMe.toString());

      setUser(user);
      
      toast(`Login Successful | Welcome back, ${username}!`);

      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast( "Login Failed An error occurred during login.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('rememberMe');
    setUser(null);
    toast( "You have been logged out successfully.",);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
