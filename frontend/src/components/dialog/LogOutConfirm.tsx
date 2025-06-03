import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { useAuth } from '@/contexts/AuthContext';

const LogOutConfirm = () => {
     const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
       const {  logout } = useAuth();
        const handleLogout = () => {
    logout();
    setShowLogoutConfirm(false);
  };
  return (
    <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-800/95 via-red-900/70 to-slate-900/95 backdrop-blur-xl border border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">Confirm Logout</DialogTitle>
            <DialogDescription className="text-gray-300 text-lg">
              Are you sure you want to logout? You'll need to sign in again to access your shops.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 justify-end pt-6">
            <Button variant="outline" onClick={() => setShowLogoutConfirm(false)} className="border-slate-600 text-white bg-transparent hover:bg-slate-700/60 px-6 py-3">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleLogout} className="bg-red-600/80 hover:bg-red-600 shadow-xl shadow-red-500/50 px-6 py-3">
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
  )
}

export default LogOutConfirm