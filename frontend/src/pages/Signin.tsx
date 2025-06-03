import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, Shield, Lock, User, Star, Zap } from 'lucide-react';
import AnimatedSignin from '@/components/animatedbg/AnimatedSignin';
// import Footer from '@/components/Footer';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(username, password, rememberMe);
    if (success) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-4 relative overflow-hidden">
        {/* Multi-layered animated background */}
       <AnimatedSignin/>

        <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-slate-800/70 via-blue-900/40 to-slate-900/70 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/40">
          <CardHeader className="text-center pb-4">
           <Link to='/'>
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-blue-400 animate-pulse" />
            </div> <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="p-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-2xl shadow-xl shadow-blue-500/50">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-40 scale-110" />
                <div className="absolute -top-1 -right-1">
                  <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
           </Link>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-300 text-sm">
              Sign in to access your <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">multi-shop dashboard</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <div className="p-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <User className="h-3 w-3 text-white" />
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
                  className="h-10 bg-slate-700/60 border-2 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <div className="p-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Lock className="h-3 w-3 text-white" />
                  </div>
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="h-10 bg-slate-700/60 border-2 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50"
                />
              </div>

              <div className="flex items-center space-x-3 bg-gradient-to-r from-slate-700/40 via-blue-800/30 to-slate-700/40 p-3 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-blue-500 data-[state=checked]:to-cyan-500 data-[state=checked]:border-blue-400 h-4 w-4"
                />
                <Label htmlFor="remember" className="text-gray-300 cursor-pointer text-sm">
                  Remember me <span className="text-blue-400 font-semibold">(7 days)</span>
                </Label>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 text-white font-bold shadow-2xl shadow-blue-500/50 transition-all duration-300 group hover:scale-105"
              >
                <LogIn className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-gradient-to-r from-transparent via-slate-600 to-transparent">
              <p className="text-gray-300">
                Don't have an account?{' '}
                <Link to="/signup" className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold transition-all duration-300 hover:from-blue-300 hover:to-cyan-300 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Signin;