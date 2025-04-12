
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';
import HeaderControls from '../navigation/HeaderControls';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getLocalizedPath } = useLanguage();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-luminous-white dark:bg-deep-space shadow-md py-2' 
        : 'bg-luminous-white/80 dark:bg-deep-space/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={getLocalizedPath("/")} className="flex items-center">
          <span className="text-2xl font-bold font-heading bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
            Ludwik C. Siadlak
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <DesktopNavigation />
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <HeaderControls />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 ml-2 text-deep-charcoal dark:text-silver-mist"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Controls - Hidden on Mobile */}
        <div className="hidden md:block">
          <HeaderControls />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
