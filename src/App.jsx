import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/NavBarFixed';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Products from './components/Products';
import HealMind from './components/HealMind';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralynLoader from './components/NeuralynLoader';
import NeuralynMangaIntro from './components/NeuralynMangaIntro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import all new pages
import HealMindAI from './pages/products/healmind';
import VoxHeart from './pages/products/voxheart';
import DiabeX from './pages/products/diabex';
import NeuraDiet from './pages/products/neuradiet';
import MentalWellness from './pages/solutions/mental-wellness';
import Diagnostics from './pages/solutions/diagnostics';
import ChronicCare from './pages/solutions/chronic-care';
import SmartHospitals from './pages/solutions/smart-hospitals';
import Careers from './pages/careers';
import Blog from './pages/blog';
import Docs from './pages/docs';
import Support from './pages/support';
import API from './pages/api';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Security from './pages/security';
import Sitemap from './pages/sitemap';
import Investors from './pages/investors';
import Founder from './pages/founder';
import Roadmap from './pages/roadmap';
import Media from './pages/media';
import Team from './pages/team';
import GooglePartnership from './pages/google-partnership';

console.log('App component is mounting');

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Listen for custom event from Hero to trigger the intro
  useEffect(() => {
    const handleShowIntro = () => setShowIntro(true);
    window.addEventListener('triggerNeuralynIntro', handleShowIntro);
    return () => window.removeEventListener('triggerNeuralynIntro', handleShowIntro);
  }, []);

  if (isLoading) {
    return <NeuralynLoader />;
  }

  return (
    <BrowserRouter>
      <main className="relative min-h-screen bg-background text-white">
        {/* Show the intro overlay if triggered */}
        <AnimatePresence>{showIntro && <NeuralynMangaIntro onFinish={() => setShowIntro(false)} />}</AnimatePresence>
        {/* Hide main content while intro is active */}
        {!showIntro && (
          <>
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <Routes>
              <Route path="/" element={<Hero triggerIntro={() => setShowIntro(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/products" element={<Products />} />
              <Route path="/healmind" element={<HealMind />} />
              <Route path="/contact" element={<Contact />} />
              {/* Products */}
              <Route path="/products/healmind" element={<HealMindAI />} />
              <Route path="/products/voxheart" element={<VoxHeart />} />
              <Route path="/products/diabex" element={<DiabeX />} />
              <Route path="/products/neuradiet" element={<NeuraDiet />} />
              {/* Solutions */}
              <Route path="/solutions/mental-wellness" element={<MentalWellness />} />
              <Route path="/solutions/diagnostics" element={<Diagnostics />} />
              <Route path="/solutions/chronic-care" element={<ChronicCare />} />
              <Route path="/solutions/smart-hospitals" element={<SmartHospitals />} />
              {/* Resources */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/api" element={<API />} />
              {/* Careers */}
              <Route path="/careers" element={<Careers />} />
              {/* Partnership */}
              <Route path="/google-partnership" element={<GooglePartnership />} />
              {/* Legal & Compliance */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/media" element={<Media />} />
              <Route path="/team" element={<Team />} />
            </Routes>
            <Footer />
          </>
        )}
      </main>
    </BrowserRouter>
  );
}

export default App;
