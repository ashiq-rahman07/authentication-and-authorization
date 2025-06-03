import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Crown, Globe, Package, Sparkles, Star, Store, TrendingUp, Users } from 'lucide-react';
import React, { useEffect } from 'react'

const ShopPage = () => {
const [shopName, setShopName] = React.useState<string | null>(null);
      useEffect(() => {
    const shopName = window.location.hostname.split('.')[0]; // Extract subdomain as shop name
setShopName(shopName);
    document.title = `Verifying ${shopName}...`; // Set page title dynamically
      }, [ shopName]);

        const handleBackToDashboard = () => {
    window.location.href = `${window.location.protocol}//localhost:${window.location.port || '8080'}/dashboard`;
  };
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
              className="border-white/30 bg-transparent text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-6 py-3 text-lg"
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
                <span className="font-bold"> Owner:</span> <span className="font-mono bg-emerald-400/30 px-4 py-2 rounded-lg text-white"></span>
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
}

export default ShopPage