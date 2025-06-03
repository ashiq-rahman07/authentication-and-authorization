import { ArrowRight, Rocket, Star } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
     <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-indigo-600/30 backdrop-blur-sm border border-purple-500/40 rounded-full px-8 py-3 mb-10">
            <Rocket className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">Next Generation Shop Management</span>
            <Star className="h-4 w-4 text-pink-300" />
          </div>
          
          <h2 className="text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent block">
              Manage Multiple
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
              Shops Seamlessly
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
            Create your account, register multiple shops, and access each shop through 
            its dedicated subdomain dashboard with <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">seamless authentication</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white shadow-2xl shadow-purple-500/60 px-12 py-8 text-xl font-bold transition-all duration-300 hover:scale-110">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/30 text-white bg-transparent hover:bg-white/20 backdrop-blur-sm px-12 py-8 text-xl transition-all duration-300 hover:scale-105">
              <Link to="/signin">Watch Demo</Link>
            </Button>
          </div>
        </div>
  )
}

export default HeroSection