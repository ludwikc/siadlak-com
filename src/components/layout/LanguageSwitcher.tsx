
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '../ui/button';

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
    <Button 
      onClick={switchLanguage}
      variant="ghost"
      size="sm"
      className="rounded-full flex items-center gap-1"
      aria-label={`Switch to ${language === 'en' ? 'Polish' : 'English'}`}
    >
      <Globe size={18} />
      <span className="font-medium">
        {language === 'en' ? 'PL' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
