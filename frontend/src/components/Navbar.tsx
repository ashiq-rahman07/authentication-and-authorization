import React from 'react'
import { Sparkles, Store } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
     <header className="relative z-10 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl shadow-xl shadow-purple-500/50">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Multi-Shop Platform
              </h1>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild className="border-white/30 bg-transparent text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white shadow-xl shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                <Link to="/signup">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar