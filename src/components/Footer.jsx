import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for columns
  const colVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 + i * 0.13, ease: 'easeOut' } })
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-black/70 backdrop-blur-md border-t border-white/10 pt-14 pb-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <span className="text-2xl font-semibold text-white mb-2 tracking-wide">Neuralyn</span>
            <span className="text-white/70 text-base font-light">The Brain Behind Better Health</span>
          </div>
          {/* Products */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/healmind" className="text-white/70 hover:text-white text-sm transition-colors">HealMind_AI</Link></li>
              <li><Link to="/products/voxheart" className="text-white/70 hover:text-white text-sm transition-colors">VOXHEART</Link></li>
              <li><Link to="/products/diabex" className="text-white/70 hover:text-white text-sm transition-colors">DiabeX</Link></li>
              <li><Link to="/products/neuradiet" className="text-white/70 hover:text-white text-sm transition-colors">NeuraDiet</Link></li>
            </ul>
          </motion.div>
          {/* Solutions */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions/mental-wellness" className="text-white/70 hover:text-white text-sm transition-colors">Mental Wellness</Link></li>
              <li><Link to="/solutions/diagnostics" className="text-white/70 hover:text-white text-sm transition-colors">Diagnostics</Link></li>
              <li><Link to="/solutions/chronic-care" className="text-white/70 hover:text-white text-sm transition-colors">Chronic Care</Link></li>
              <li><Link to="/solutions/smart-hospitals" className="text-white/70 hover:text-white text-sm transition-colors">Smart Hospitals</Link></li>
            </ul>
          </motion.div>
          {/* Company */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#mission" className="text-white/70 hover:text-white text-sm transition-colors">Mission</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white text-sm transition-colors">Careers</Link></li>
            </ul>
          </motion.div>
          {/* Resources */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/docs" className="text-white/70 hover:text-white text-sm transition-colors">Docs</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-white text-sm transition-colors">Support</Link></li>
              <li><Link to="/api" className="text-white/70 hover:text-white text-sm transition-colors">API</Link></li>
            </ul>
          </motion.div>
          {/* Follow */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Follow</h4>
            <div className="flex flex-wrap gap-3 mt-1">
              <a href="https://www.linkedin.com/in/neuralyn-llc-44a285369/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-blue-400 transition-colors text-xl"><FiLinkedin /></a>
              <a href="https://www.instagram.com/neuralyn.health/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-pink-400 transition-colors text-xl"><FiInstagram /></a>
              <a href="mailto:main@neuralyn.health" aria-label="Email" className="text-white/70 hover:text-green-400 transition-colors text-xl"><FiMail /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-left text-white/60 text-sm">
            Built with intelligence. Backed by empathy.
          </div>
          <div className="flex-1 text-center text-white/50 text-xs flex flex-col items-center gap-2">
            <div>© {currentYear} Neuralyn. All Rights Reserved. Built with intelligence, for humanity.</div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/40">Powered by</span>
              <a href="https://startup.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Google for Startups
              </a>
            </div>
          </div>
          <div className="flex-1 text-right text-white/60 text-xs flex items-center justify-end gap-4">
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/security" className="hover:underline">Security</a>
            <a href="/sitemap" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 