import React from 'react'

const DashBg = () => {
  return (
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-violet-500/15 to-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/15 to-fuchsia-500/20 rounded-full blur-3xl" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-violet-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '3s'}} />
      </div>
  )
}

export default DashBg