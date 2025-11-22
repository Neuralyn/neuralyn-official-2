import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'mission', label: 'Mission', path: '/mission' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'healmind', label: 'HealMind_AI', path: '/healmind' },
  { id: 'team', label: 'Team', path: '/team' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Brand on top left */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-6 left-8 z-50"
      >
        <Link to="/" className="font-semibold text-xl tracking-widest text-white select-none" style={{ textShadow: '0 2px 12px #1e293b33, 0 1px 0 #fff2' }}>
          Neuralyn
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 right-6 z-50 md:hidden text-white/80 hover:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 right-0 z-40 hidden md:block p-6"
      >
        <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3 flex items-center justify-end w-full max-w-4xl">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-[#0a223a] via-black to-[#1e293b] backdrop-blur-xl border-l-2 border-cyan-400/20 shadow-[0_0_32px_0_rgba(45,224,252,0.10)]"
              style={{ boxShadow: '0 0 64px 0 #2de0fc22, 0 0 0 1px #2de0fc11' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-full w-[280px] bg-black/90 backdrop-blur-xl border-l border-white/10 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6 pb-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Scrollable Menu List */}
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <ul className="space-y-6">
                  {[
                    // Main Navigation
                    { id: 'home', label: 'Home', path: '/' },
                    { id: 'about', label: 'About', path: '/about' },
                    { id: 'mission', label: 'Mission', path: '/mission' },
                    { id: 'products', label: 'Products', path: '/products' },
                    { id: 'healmind', label: 'HealMind_AI', path: '/healmind' },
                    
                    // Company & Team
                    { id: 'team', label: 'Team', path: '/team' },
                    { id: 'founder', label: 'Founder', path: '/founder' },
                    { id: 'investors', label: 'Investors', path: '/investors' },
                    
                    // Partnership
                    { id: 'google-partnership', label: 'Google Partnership', path: '/google-partnership' },
                    
                    // Resources & Media
                    { id: 'blog', label: 'Blog', path: '/blog' },
                    { id: 'media', label: 'Media/Press', path: '/media' },
                    { id: 'roadmap', label: 'Roadmap', path: '/roadmap' },
                    
                    // Contact
                    { id: 'contact', label: 'Contact', path: '/contact' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.id || item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-base font-medium tracking-wide transition-colors duration-200 px-2 py-1 rounded text-white/70 hover:text-cyan-300 font-sans ${location.pathname === item.path ? 'text-cyan-300' : ''}`}
                        style={{ letterSpacing: '0.01em' }}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
