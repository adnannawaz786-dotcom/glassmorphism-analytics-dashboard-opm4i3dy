import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BarChart3, FileText, Settings, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/analytics' },
    { id: 'reports', label: 'Reports', icon: FileText, href: '/reports' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <motion.div 
          className="backdrop-blur-md bg-white/10 border-b border-white/20 px-4 py-3"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Analytics</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          >
            <motion.nav
              className="fixed top-16 left-0 right-0 mx-4 mt-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-colors"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 z-30">
        <motion.div 
          className="h-full backdrop-blur-xl bg-white/10 border-r border-white/20 p-6"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* User Profile */}
          <motion.div 
            className="absolute bottom-6 left-6 right-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">John Doe</p>
                  <p className="text-white/60 text-xs truncate">john@example.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30">
        <motion.div 
          className="backdrop-blur-xl bg-white/10 border-t border-white/20 px-4 py-2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center justify-around">
            {navigationItems.slice(0, 4).map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Layout;