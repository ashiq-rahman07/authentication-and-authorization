import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Store, Users } from 'lucide-react';
const FeaturesSection = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          <Card className="bg-gradient-to-br from-slate-800/60 via-blue-900/40 to-slate-900/60 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex p-6 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl shadow-xl shadow-blue-500/50 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">Easy Registration</CardTitle>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Sign up with username, secure password, and register 3+ shop names with our intuitive interface
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/60 via-emerald-900/40 to-slate-900/60 backdrop-blur-xl border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex p-6 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-3xl shadow-xl shadow-emerald-500/50 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <Store className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent mb-6">Multi-Shop Management</CardTitle>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Each shop gets its own subdomain dashboard for organized management and seamless operations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-slate-900/60 backdrop-blur-xl border border-purple-400/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 rounded-3xl shadow-xl shadow-purple-500/50 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">Secure Authentication</CardTitle>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Cross-subdomain session management with flexible login duration and enterprise-grade security
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
  )
}

export default FeaturesSection