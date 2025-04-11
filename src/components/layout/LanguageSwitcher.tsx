
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  
  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'pl' : 'en';
    setLanguage(newLanguage);
    
    // Get the corresponding URL for the other language
    let newPath = location.pathname;
    
    if (newLanguage === 'pl') {
      // Add /pl prefix if switching to Polish
      newPath = newPath === '/' ? '/pl' : `/pl${newPath}`;
    } else {
      // Remove /pl prefix if switching to English
      if (newPath.startsWith('/pl/')) {
        newPath = newPath.substring(3);
      } else if (newPath === '/pl') {
        newPath = '/';
      }
    }
    
    // Update URL without reloading page
    window.history.pushState(null, '', newPath);
  };
  
  return (
    <button 
      onClick={switchLanguage}
      className="flex items-center p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Polish' : 'English'}`}
    >
      <Globe size={18} className="mr-1" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'PL' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
