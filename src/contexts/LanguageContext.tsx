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

  // Set initial language based on URL or browser preference
  useEffect(() => {
    // Check if we're on a Polish page
    const isPolishUrl = window.location.pathname.startsWith('/pl/');
    
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

  // Store language preference when changed
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    setLanguagePrefix(language === 'pl' ? '/pl' : '');
  }, [language]);

  // Get path for current language
  const getLocalizedPath = (path: string): string => {
    // Remove any existing language prefix
    let cleanPath = path;
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
