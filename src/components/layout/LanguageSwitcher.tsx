
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, getLocalizedPath } = useLanguage();
  
  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'pl' : 'en';
    setLanguage(newLanguage);
    
    // Get the corresponding path for the new language
    const newPath = getLocalizedPath(location.pathname);
    
    // Navigate to the new path with full page refresh
    // This ensures all components re-render with new language
    window.location.href = newPath;
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
