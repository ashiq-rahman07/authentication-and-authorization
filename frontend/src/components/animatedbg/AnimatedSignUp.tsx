import React from 'react'

const AnimatedSignUp = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-fuchsia-500/30 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-rose-500/15 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-fuchsia-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      </div>
  )
}

export default AnimatedSignUp