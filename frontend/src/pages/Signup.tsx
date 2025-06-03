/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { X, Plus, Store, Sparkles, User, Lock, Zap, Crown, Eye, EyeOff } from 'lucide-react';
import AnimatedSignUp from '@/components/animatedbg/AnimatedSignUp';

import { toast } from 'sonner';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shopNames, setShopNames] = useState(['', '', '']);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 
  const navigate = useNavigate();
  const { signup } = useAuth();

  const addShopField = () => {
    setShopNames([...shopNames, '']);
  };

  const removeShopField = (index: number) => {
    if (shopNames.length > 3) {
      setShopNames(shopNames.filter((_, i) => i !== index));
    }
  };

  const updateShopName = (index: number, value: string) => {
    const updated = [...shopNames];
    updated[index] = value;
    setShopNames(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const filteredShopNames = shopNames.filter(name => name.trim() !== '');
    if (filteredShopNames.length < 3) {
      toast.error('Please provide at least 3 shop names.');
      setLoading(false);
      return;
    }

    const success = await signup(username, password, filteredShopNames);
    setLoading(false);
    if (success) {
      navigate('/signin');
    }
  };
  

  const getPasswordValidation = () => {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      <div className="text-sm space-y-3 mt-4 bg-gradient-to-r from-slate-700/40 via-purple-800/30 to-slate-700/40 p-4 rounded-2xl border border-purple-500/30">
        <div className={`flex items-center gap-3 ${hasMinLength ? "text-emerald-400" : "text-rose-400"}`}>
          <div className={`w-3 h-3 rounded-full ${hasMinLength ? "bg-emerald-500" : "bg-rose-500"} shadow-lg`} />
          <span className="font-medium">At least 8 characters</span>
        </div>
        <div className={`flex items-center gap-3 ${hasNumber ? "text-emerald-400" : "text-rose-400"}`}>
          <div className={`w-3 h-3 rounded-full ${hasNumber ? "bg-emerald-500" : "bg-rose-500"} shadow-lg`} />
          <span className="font-medium">At least one number</span>
        </div>
        <div className={`flex items-center gap-3 ${hasSpecialChar ? "text-emerald-400" : "text-rose-400"}`}>
          <div className={`w-3 h-3 rounded-full ${hasSpecialChar ? "bg-emerald-500" : "bg-rose-500"} shadow-lg`} />
          <span className="font-medium">At least one special character</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 p-4 relative ">
      {/* Animated background */}
   <AnimatedSignUp/>

      <Card className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]  max-w-2xl relative z-10 bg-gradient-to-br from-slate-800/70 via-purple-900/40 to-slate-900/70 backdrop-blur-xl border border-purple-400/30 shadow-2xl shadow-purple-500/40">
        <CardHeader className="text-center pb-8">
          <Link to={"/"}>
            <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 rounded-3xl shadow-xl shadow-purple-500/50">
              
                <Sparkles className="h-8 w-8 text-white" />
             
                
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-40 scale-110" />
              <div className="absolute -top-2 -right-2">
                <Crown className="h-6 w-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          </Link>
          
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-300 text-md">
            Start your <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">multi-shop journey</span> today
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Username */}
            <div className="space-y-4">
              <Label htmlFor="username" className="text-white font-semibold flex items-center gap-3 text-md">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <User className="h-4 w-4 text-white" />
                </div>
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="h-14 bg-slate-700/60 border-2 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 text-md"
              />
            </div>

            {/* Password */}
            <div className="space-y-4">
              <Label htmlFor="password" className="text-white font-semibold flex items-center gap-3 text-md">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="h-14 bg-slate-700/60 border-2 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 text-md pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-purple-400 focus:outline-none"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {password && getPasswordValidation()}
            </div>

            {/* Shop Names */}
            <div className="space-y-6">
              <Label className="text-white font-semibold flex items-center gap-3 text-md">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Store className="h-4 w-4 text-white" />
                </div>
                Shop Names <span className="text-purple-400">(minimum 3 required)</span>
              </Label>
              {shopNames.map((shopName, index) => (
                <div key={index} className="flex gap-3">
                  <Input
                    type="text"
                    value={shopName}
                    onChange={(e) => updateShopName(index, e.target.value)}
                    placeholder={`Shop ${index + 1} name`}
                    className="flex-1 h-14 bg-slate-700/60 border-2 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 text-md"
                    required={index < 3}
                  />
                  {shopNames.length > 3 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeShopField(index)}
                      className="h-14 w-14 border-2 border-slate-600/50 bg-slate-700/60 text-gray-300 hover:border-red-400 hover:text-red-400 hover:bg-red-400/20 transition-all duration-300"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addShopField}
                className="w-full h-14 border-2 border-dashed border-purple-500/50 bg-purple-700/20 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
              >
                <Plus className="h-5 w-5 mr-3" />
                Add Another Shop
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 text-white font-bold text-md shadow-2xl shadow-purple-500/50 transition-all duration-300 group hover:scale-105"
            >
              <Sparkles className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              {loading ? (
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 animate-spin" />
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Signin link */}
          <div className="text-center pt-6 border-t border-slate-600/30">
            <p className="text-gray-300 text-md">
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-400 hover:text-pink-400 font-semibold transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
