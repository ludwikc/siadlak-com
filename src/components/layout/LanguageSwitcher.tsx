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
    
    // Determine the new path based on the current path and new language
    let newPath;
    
    // Normalize the current path
    const normalizedPath = location.pathname.endsWith('/') 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
    
    // Special handling for the home page
    if (normalizedPath === '/' && newLanguage === 'pl') {
      newPath = '/pl';
    } else if (normalizedPath === '/pl' && newLanguage === 'en') {
      newPath = '/';
    } else {
      // For other pages, use the getLocalizedPath function
      // First, clean the current path by removing any language prefix
      let cleanPath = location.pathname;
      if (cleanPath.startsWith('/pl/')) {
        cleanPath = cleanPath.substring(3);
      } else if (cleanPath === '/pl') {
        cleanPath = '/';
      }
      
      // Then determine the new path based on the new language
      if (newLanguage === 'pl') {
        newPath = cleanPath === '/' ? '/pl' : `/pl${cleanPath}`;
      } else {
        newPath = cleanPath;
      }
      
      // Special handling for resource paths
      const resourcePathTranslations = {
        en: {
          '/resources/digital-command-checklist': '/resources/digital-command-checklist',
          '/resources/5-minutes-to-focus': '/resources/5-minutes-to-focus',
          '/resources/ai-command-scripts': '/resources/ai-command-scripts',
        },
        pl: {
          '/resources/digital-command-checklist': '/resources/lista-kontrolna-cyfrowego-dowodzenia',
          '/resources/5-minutes-to-focus': '/resources/5-minut-do-koncentracji',
          '/resources/ai-command-scripts': '/resources/skrypty-dowodzenia-ai',
        }
      };
      
      // Check if this is a resource path that needs special translation
      let isResourcePath = false;
      let resourceKey;
      
      // Check if the path is in English resources
      for (const [key, value] of Object.entries(resourcePathTranslations.en)) {
        if (cleanPath === value) {
          resourceKey = key;
          isResourcePath = true;
          break;
        }
      }
      
      // If not found in English, check Polish resources
      if (!isResourcePath) {
        for (const [key, value] of Object.entries(resourcePathTranslations.pl)) {
          if (cleanPath === value) {
            resourceKey = key;
            isResourcePath = true;
            break;
          }
        }
      }
      
      if (isResourcePath && resourceKey) {
        // Use the translated resource path for the new language
        const translatedPath = resourcePathTranslations[newLanguage][resourceKey];
        newPath = newLanguage === 'pl' ? `/pl${translatedPath}` : translatedPath;
      }

      // Check if this is a course path - we want to keep the same course when switching languages
      if (cleanPath.startsWith('/courses/')) {
        // No special handling needed - course identifiers are the same across languages
        newPath = newLanguage === 'pl' ? `/pl${cleanPath}` : cleanPath;
      }
    }
    
    // Update language in context
    setLanguage(newLanguage);
    
    // Force full page reload to ensure all components re-render with new language
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
