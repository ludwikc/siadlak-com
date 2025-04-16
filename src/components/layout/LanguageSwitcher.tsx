
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, getLocalizedPath } = useLanguage();
  
  const switchLanguage = () => {
    // Get the new language
    const newLanguage = language === 'en' ? 'pl' : 'en';
    
    // Use the context's getLocalizedPath function to determine the new path
    // This ensures consistent path translation across the application
    let currentPath = location.pathname;
    
    // If we're at the root, handle specially
    if (currentPath === '/' && newLanguage === 'pl') {
      currentPath = '/pl';
    } else if (currentPath === '/pl' && newLanguage === 'en') {
      currentPath = '/';
    }
    
    // For course detail pages, ensure we're using the correct path format
    const courseDetailRegex = /^\/(pl\/)?courses\/([^/]+)\/?$/;
    const courseMatch = currentPath.match(courseDetailRegex);
    
    if (courseMatch) {
      const courseSlug = courseMatch[2];
      currentPath = newLanguage === 'pl' ? `/pl/courses/${courseSlug}` : `/courses/${courseSlug}`;
    } else {
      // For other pages, get the localized path
      currentPath = getLocalizedPath(currentPath);
    }
    
    // Update language in context
    setLanguage(newLanguage);
    
    // Navigate to the new path
    window.location.href = currentPath;
  };
  
  return (
    <button 
      onClick={switchLanguage}
      className="flex items-center p-2 rounded-full bg-midnight-black/10 dark:bg-luminous-white/10 hover:bg-midnight-black/20 dark:hover:bg-luminous-white/20 text-deep-charcoal dark:text-silver-detail transition-colors"
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
