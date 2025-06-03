import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="text-center">
          <Card className="max-w-6xl mx-auto bg-gradient-to-br from-slate-800/60 via-indigo-900/40 to-slate-900/60 backdrop-blur-xl border border-indigo-400/30 shadow-2xl shadow-indigo-500/30">
            <CardHeader className="pb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-indigo-500/40 rounded-full px-6 py-3 mx-auto mb-8">
                <Globe className="h-5 w-5 text-indigo-300" />
                <span className="text-indigo-200 font-semibold">Join Thousands of Users</span>
                <Sparkles className="h-4 w-4 text-purple-300" />
              </div>
              <CardTitle className="text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
                Ready to get started?
              </CardTitle>
              <CardDescription className="text-2xl text-gray-300 leading-relaxed">
                Join thousands of shop owners managing their businesses efficiently with our platform
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-8 justify-center pb-10">
              <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl shadow-indigo-500/60 px-12 py-8 text-xl font-bold transition-all duration-300 hover:scale-110">
                <Link to="/signup">
                  <Sparkles className="h-6 w-6 mr-3" />
                  Create Account
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 bg-transparent text-white hover:bg-white/20 backdrop-blur-sm px-12 py-8 text-xl transition-all duration-300 hover:scale-105">
                <Link to="/signin">Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
  )
}

export default CallToAction