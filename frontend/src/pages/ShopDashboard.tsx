import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { Store, ArrowLeft, Loader2, Crown, Sparkles,TrendingUp, Users, Package, Star, Globe } from 'lucide-react';
import { getSubdomain } from '@/utils/getSubdomain';

const ShopDashboard = () => {
  const { user, loading } = useAuth();
  console.log(user)
  const [authorized, setAuthorized] = useState(false);
  const shopName = getSubdomain();

  useEffect(() => {
    if (!loading && user && shopName) {
      const ownsShop = user.shopNames.some(name => name.toLowerCase() === shopName.toLowerCase());
      setAuthorized(ownsShop);
    }
  }, [loading, user, shopName]);

  const handleBackToDashboard = () => {
    window.location.href = `${window.location.protocol}//localhost:${window.location.port || '8080'}/dashboard`;
  };

  const handleSignIn = () => {
    window.location.href = `${window.location.protocol}//localhost:${window.location.port || '8080'}/signin`;
  };

  if ( loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-slate-800/70 via-emerald-900/40 to-slate-900/70 backdrop-blur-xl border border-emerald-400/30 shadow-2xl shadow-emerald-500/40">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-8">
              <Loader2 className="h-20 w-20 animate-spin text-emerald-400" />
              <div className="absolute inset-0 h-20 w-20 bg-emerald-400/30 rounded-full animate-ping" />
            </div>
            <p className="text-gray-300 font-semibold text-xl">Verifying authentication...</p>
            <p className="text-gray-400 text-sm mt-2">Checking cross-domain session</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-500/30 to-red-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-slate-800/70 via-red-900/40 to-slate-900/70 backdrop-blur-xl border border-red-400/30 shadow-2xl shadow-red-500/40">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 rounded-3xl shadow-xl shadow-red-500/50">
                  <Store className="h-12 w-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-500 rounded-3xl blur-xl opacity-40 scale-110" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Access Denied
            </CardTitle>
            <div className="text-center mt-10">Please login to view {authorized} shop</div>;
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <p className="text-gray-300 text-xl">You need to be logged in to access this shop.</p>
            <div className="space-y-4">
              <Button 
                onClick={handleSignIn}
                className="w-full h-14 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700 text-white shadow-xl shadow-red-500/50 text-lg font-bold"
              >
                Sign In
              </Button>
              <Button 
                variant="outline"
                onClick={handleBackToDashboard}
                className="w-full h-12 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Main Site
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if user owns this shop
  // const ownsShop = user.shopNames.some(name => name.toLowerCase() === shopName.toLowerCase());

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-slate-800/70 via-orange-900/40 to-slate-900/70 backdrop-blur-xl border border-orange-400/30 shadow-2xl shadow-orange-500/40">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600 rounded-3xl shadow-xl shadow-orange-500/50">
                  <Crown className="h-12 w-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl blur-xl opacity-40 scale-110" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Unauthorized
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <p className="text-gray-300 text-xl">You don't have access to this shop.</p>
            <Button 
              onClick={handleBackToDashboard}
              className="w-full h-14 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white shadow-xl shadow-orange-500/50 text-lg font-bold"
            >
              <ArrowLeft className="h-5 w-5 mr-3" />
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 relative overflow-hidden">
      {/* Multi-layered animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/15 to-green-500/20 rounded-full blur-3xl" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '3s'}} />
      </div>

      <header className="relative z-10 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="p-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl shadow-xl shadow-emerald-500/50">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-xl opacity-30 scale-110" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent capitalize">
                {shopName} Shop
              </h1>
            </div>
            <Button 
              variant="outline" 
              onClick={handleBackToDashboard}
              className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-6 py-3 text-lg"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Section */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/70 via-emerald-900/40 to-slate-900/70 border border-emerald-400/30 shadow-2xl shadow-emerald-500/40 text-center mb-16">
          <CardHeader className="pb-10">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="p-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl shadow-xl shadow-emerald-500/50">
                  <Sparkles className="h-20 w-20 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-30 scale-110" />
                <div className="absolute -top-3 -right-3">
                  <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            <CardTitle className="text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent capitalize mb-8">
              Welcome to {shopName} Shop
            </CardTitle>
            <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl mx-auto">
              This is your <span className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text capitalize">{shopName}</span> shop dashboard. 
              Manage your operations and grow your business with our comprehensive tools.
            </p>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 backdrop-blur-sm p-10 rounded-3xl border border-emerald-400/40">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Crown className="h-8 w-8 text-emerald-300" />
                <span className="text-emerald-200 font-bold text-2xl tracking-wide">Authentication Success</span>
                <Globe className="h-6 w-6 text-teal-300" />
              </div>
              <p className="text-emerald-100 leading-relaxed text-xl">
                🎉 Cross-subdomain authentication is working perfectly!<br />
                <span className="font-bold">Shop:</span> <span className="capitalize font-mono bg-emerald-400/30 px-4 py-2 rounded-lg text-white">{shopName}</span> | 
                <span className="font-bold"> Owner:</span> <span className="font-mono bg-emerald-400/30 px-4 py-2 rounded-lg text-white">{user.username}</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-gradient-to-br from-slate-700/60 via-emerald-800/40 to-slate-700/60 backdrop-blur-sm rounded-3xl border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-2xl">Inventory</h3>
                    <p className="text-emerald-300 text-lg">Manage your products</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-slate-700/60 via-teal-800/40 to-slate-700/60 backdrop-blur-sm rounded-3xl border border-teal-400/30 hover:border-teal-400/50 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-2xl">Orders</h3>
                    <p className="text-teal-300 text-lg">Track sales & orders</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-slate-700/60 via-cyan-800/40 to-slate-700/60 backdrop-blur-sm rounded-3xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-2xl">Analytics</h3>
                    <p className="text-cyan-300 text-lg">View performance</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ShopDashboard;