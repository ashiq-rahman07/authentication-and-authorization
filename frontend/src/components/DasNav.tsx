import { Store, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { useAuth } from '@/contexts/AuthContext'

const DasNav = ({setShowProfile}) => {
    const { user} = useAuth();
     
  return (
     <header className="relative z-10 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
         <Link to={'/'}>
               <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl shadow-indigo-500/50">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Multi-Shop Dashboard
              </h1>
            </div>
         </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-4 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Avatar className="h-12 w-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/50">
                <AvatarFallback className="bg-transparent">
                  <User className="h-6 w-6 text-white" />
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline font-semibold text-lg">{user.username}</span>
            </Button>
          </div>
        </div>
      </header>
  )
}

export default DasNav