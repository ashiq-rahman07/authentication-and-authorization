import React from 'react'
import { Link } from 'react-router-dom';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 border-t border-purple-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl shadow-xl shadow-purple-500/30">
                <Store className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Multi-Shop
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with seamless multi-shop management solutions. Create, manage, and grow your shops with our innovative platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-sky-600/20 to-blue-600/20 backdrop-blur-sm border border-sky-500/30 rounded-xl hover:from-sky-600/30 hover:to-blue-600/30 transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-sky-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm border border-pink-500/30 rounded-xl hover:from-pink-600/30 hover:to-rose-600/30 transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-blue-700/20 to-indigo-700/20 backdrop-blur-sm border border-blue-600/30 rounded-xl hover:from-blue-700/30 hover:to-indigo-700/30 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'Sign Up', to: '/signup' },
                { label: 'Sign In', to: '/signin' },
                { label: 'Dashboard', to: '/dashboard' }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Shop Management',
                'Multi-Domain Support',
                'Secure Authentication',
                'Analytics Dashboard',
                'Customer Support',
                'API Integration'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 font-medium cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg group-hover:from-emerald-600/30 group-hover:to-teal-600/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-gray-300 group-hover:text-emerald-300 transition-colors">support@multishop.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 rounded-lg group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-300 transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-gray-300 group-hover:text-purple-300 transition-colors">123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gradient-to-r from-transparent via-purple-500/30 to-transparent mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Multi-Shop Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for entrepreneurs worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;