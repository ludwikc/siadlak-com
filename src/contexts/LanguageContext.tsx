
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pl';
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  languagePrefix: string;
  getLocalizedPath: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  languagePrefix: '',
  getLocalizedPath: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [languagePrefix, setLanguagePrefix] = useState('');

  // Path translations for resources
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

  // Set initial language based on URL or browser preference
  useEffect(() => {
    // Check if we're on a Polish page
    const isPolishUrl = window.location.pathname.startsWith('/pl');
    
    // Get browser language preference
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    
    // If we're on a Polish page, set language to Polish
    if (isPolishUrl) {
      setLanguage('pl');
      setLanguagePrefix('/pl');
    } else if (!localStorage.getItem('preferredLanguage') && browserLang === 'pl') {
      // If no stored preference and browser language is Polish, redirect to Polish version
      const newPath = `/pl${window.location.pathname}`;
      window.location.href = newPath;
    } else {
      // Otherwise use English
      setLanguage('en');
      setLanguagePrefix('');
    }
  }, []);

  // Update language when URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      const isPolishUrl = window.location.pathname.startsWith('/pl');
      if (isPolishUrl && language !== 'pl') {
        setLanguage('pl');
        setLanguagePrefix('/pl');
      } else if (!isPolishUrl && language !== 'en') {
        setLanguage('en');
        setLanguagePrefix('');
      }
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);
    
    // Initial check
    handleLocationChange();
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [language]);

  // Store language preference when changed
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    setLanguagePrefix(language === 'pl' ? '/pl' : '');
  }, [language]);

  // Get path for current language
  const getLocalizedPath = (path: string): string => {
    // Special handling for resource paths that have different translations
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    
    // First, check if this is a resource path that needs special translation
    // Check in both language mappings
    let resourceKey: string | undefined;
    let sourceLang: Language | undefined;
    
    // Check if the path is in English resources
    for (const [key, value] of Object.entries(resourcePathTranslations.en)) {
      if (value === normalizedPath) {
        resourceKey = key;
        sourceLang = 'en';
        break;
      }
    }
    
    // If not found in English, check Polish resources
    if (!resourceKey) {
      for (const [key, value] of Object.entries(resourcePathTranslations.pl)) {
        if (value === normalizedPath) {
          resourceKey = key;
          sourceLang = 'pl';
          break;
        }
      }
    }
    
    // If we found a resource path and the source language is different from the target language
    if (resourceKey && sourceLang && sourceLang !== language) {
      const translatedPath = resourcePathTranslations[language][resourceKey];
      return language === 'pl' ? `/pl${translatedPath}` : translatedPath;
    }
    
    // Special handling for course detail pages - preserve the course slug
    const courseDetailRegex = /^\/(pl\/)?courses\/([^/]+)\/?$/;
    const courseMatch = normalizedPath.match(courseDetailRegex);
    
    if (courseMatch) {
      const courseSlug = courseMatch[2];
      return language === 'pl' ? `/pl/courses/${courseSlug}` : `/courses/${courseSlug}`;
    }
    
    // Remove any existing language prefix
    let cleanPath = normalizedPath;
    if (cleanPath.startsWith('/pl/')) {
      cleanPath = cleanPath.substring(3);
    } else if (cleanPath === '/pl') {
      cleanPath = '/';
    }
    
    // Add correct language prefix
    if (language === 'pl' && cleanPath !== '/') {
      return `/pl${cleanPath}`;
    } else if (language === 'pl' && cleanPath === '/') {
      return '/pl';
    }
    
    return cleanPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languagePrefix, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};
