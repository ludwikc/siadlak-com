
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, getLocalizedPath } = useLanguage();
  
  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'pl' : 'en';
    setLanguage(newLanguage);
    
    // Get the corresponding URL for the other language
    const newPath = getLocalizedPath(location.pathname);
    
    // Navigate to the new path with a page refresh
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
