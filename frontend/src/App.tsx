import { Toaster } from 'sonner';
// import './App.css'
import { TooltipProvider } from './components/ui/tooltip';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import ShopDashboard from './pages/ShopDashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
// import TSignup from './pages/Testsignup';

function App() {
 // Check if we're on a subdomain
 const hostname = window.location.hostname;
  const isSubdomain = hostname.match(/^([^.]+)\.localhost$/);

  return (
    
      <TooltipProvider>
        <Toaster />
        
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {isSubdomain ? (
                // Subdomain routes
                <Route path="/*" element={<ShopDashboard />} />
              ) : (
                // Main domain routes
                <>
                  <Route path="/" element={<Index />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="*" element={<NotFound />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    
  )
}

export default App
