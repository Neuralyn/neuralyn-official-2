import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/mission', label: 'Mission' },
  { path: '/products', label: 'Products' },
  { path: '/solutions/mental-wellness', label: 'Mental Wellness Solution' },
  { path: '/solutions/diagnostics', label: 'Diagnostics Solution' },
  { path: '/solutions/chronic-care', label: 'Chronic Care Solution' },
  { path: '/solutions/smart-hospitals', label: 'Smart Hospitals Solution' },
  { path: '/blog', label: 'Blog' },
  { path: '/docs', label: 'Docs' },
  { path: '/support', label: 'Support' },
  { path: '/api', label: 'API' },
  { path: '/contact', label: 'Contact' },
  { path: '/careers', label: 'Careers' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/security', label: 'Security' },
  { path: '/sitemap', label: 'Sitemap' },
];

const Sitemap = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    {/* Geometric accents */}
    <svg className="absolute top-8 right-8 w-32 h-32 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="80" height="80" rx="18" stroke="#2de0fc" strokeWidth="2" />
      <line x1="20" y1="80" x2="80" y2="20" stroke="#b16cff" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-8 left-8 w-24 h-24 opacity-10 z-0" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="32" stroke="#b16cff" strokeWidth="2" />
      <circle cx="40" cy="40" r="18" stroke="#2de0fc" strokeWidth="1.5" />
    </svg>
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-3xl w-full mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-xl p-10 md:p-14 z-10"
    >
      <h1 className="text-4xl font-bold mb-10 text-left tracking-tight text-white/95">Sitemap</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className="text-blue-300 hover:text-blue-400 underline text-lg font-medium transition-colors duration-200">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default Sitemap; 