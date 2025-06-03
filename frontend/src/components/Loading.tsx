import React from 'react'
import { Card, CardContent } from './ui/card'
import { Loader2 } from 'lucide-react'

const Loading = () => {
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
            <p className="text-gray-300 font-semibold text-xl">Loading...</p>
            <p className="text-gray-400 text-sm mt-2">Checking cross-domain session</p>
          </CardContent>
        </Card>
      </div>
  )
}

export default Loading