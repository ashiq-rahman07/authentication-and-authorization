import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useAuth } from '@/contexts/AuthContext';
import { User, LogOut, Store, Sparkles, ArrowRight, Crown, Star } from 'lucide-react';

import LogOutConfirm from '@/components/dialog/LogOutConfirm';
import Footer from '@/components/Footer';
import DashBg from '@/components/animatedbg/DashBg';
import DasNav from '@/components/DasNav';

const Dashboard = () => {
  const { user} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
 

  const handleShopClick = (shopName: string) => {
    // Redirect to subdomain
    const protocol = window.location.protocol;
    const port = window.location.port ? `:${window.location.port}` : '';
    const subdomainUrl = `${protocol}//${shopName.toLowerCase()}.localhost${port}`;
    window.location.href = subdomainUrl;
  };



  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Multi-layered animated background */}
  <DashBg/>

    <DasNav setShowProfile={setShowProfile} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-indigo-500/40 rounded-full px-8 py-3 mb-8">
            <Crown className="h-5 w-5 text-indigo-300" />
            <span className="text-indigo-200 font-semibold tracking-wide">Dashboard Access</span>
            <Star className="h-4 w-4 text-purple-300" />
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Welcome back, {user.username}!
          </h2>
          <p className="text-2xl text-gray-300">Select a shop to access its dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {user.shopNames.map((shopName, index) => {
            const gradients = [
              'from-blue-500/60 via-cyan-500/40 to-teal-500/60',
              'from-purple-500/60 via-fuchsia-500/40 to-pink-500/60',
              'from-indigo-500/60 via-violet-500/40 to-purple-500/60',
              'from-emerald-500/60 via-green-500/40 to-cyan-500/60',
              'from-rose-500/60 via-pink-500/40 to-fuchsia-500/60',
              'from-amber-500/60 via-orange-500/40 to-red-500/60'
            ];
            const gradientClass = gradients[index % gradients.length];

            return (
              <Card 
                key={index} 
                className={`group cursor-pointer bg-gradient-to-br ${gradientClass} backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-105 hover:border-indigo-400/50`}
                onClick={() => handleShopClick(shopName)}
              >
                <CardHeader className="pb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <Store className="h-8 w-8 text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-white group-hover:text-white/90 transition-colors duration-500 capitalize">
                    {shopName}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Click to access shop dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full h-14 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30 text-lg font-semibold">
                    <Sparkles className="h-5 w-5 mr-3" />
                    Open Shop Dashboard
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Profile Dialog */}
      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-800/95 via-indigo-900/70 to-slate-900/95 backdrop-blur-xl border border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              <User className="h-8 w-8 text-indigo-400" />
              Profile Information
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-lg">
              Your account details and shop information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-700/60 via-indigo-800/40 to-slate-700/60 p-6 rounded-2xl border border-indigo-500/30">
              <h3 className="font-bold text-white mb-3 text-lg">Username</h3>
              <p className="text-gray-300 font-mono bg-slate-600/60 px-4 py-3 rounded-xl text-lg">{user.username}</p>
            </div>
            <div className="bg-gradient-to-r from-slate-700/60 via-purple-800/40 to-slate-700/60 p-6 rounded-2xl border border-purple-500/30">
              <h3 className="font-bold text-white mb-4 text-lg">Shop Names</h3>
              <ul className="space-y-3">
                {user.shopNames.map((shopName, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-4 bg-slate-600/60 px-4 py-3 rounded-xl">
                    <Store className="h-5 w-5 text-indigo-400" />
                    <span className="font-mono capitalize text-lg">{shopName}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-gradient-to-r from-transparent via-slate-600 to-transparent">
              <Button 
                variant="destructive" 
                // onClick={() => setShowLogoutConfirm(true)}
                className="w-full flex items-center gap-3 h-14 bg-red-600/80 hover:bg-red-600 shadow-xl shadow-red-500/50 text-lg font-bold"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <LogOutConfirm />

      <Footer/>
    </div>
  );
};

export default Dashboard;