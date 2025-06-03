import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Multi-layered animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/20 rounded-full blur-3xl" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '3s'}} />
      </div>

     
<Navbar />
      <main className="relative z-10 w-full px-6 lg:px-12 py-20">
        {/* Hero Section */}
       <HeroSection />

        {/* Features Grid */}
       <FeaturesSection/>

        {/* CTA Section */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
