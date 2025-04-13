import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * ConsentManager component
 * 
 * This component handles the initialization and management of the CookieYes
 * consent management platform. It ensures that CookieYes is properly initialized
 * and that it respects the language settings of the application.
 * 
 * It should be placed high in the component tree, ideally in the App component.
 */
export const ConsentManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();

  // Initialize CookieYes and handle language changes
  useEffect(() => {
    // CookieYes is initialized via GTM, so we don't need to initialize it here
    // However, we can try to update the language when it changes

    // Check if CookieYes is available and has a setLanguage method
    if (window.cookieyes && typeof (window.cookieyes as any).setLanguage === 'function') {
      // Map our language codes to CookieYes language codes if needed
      const cookieYesLang = language === 'pl' ? 'pl' : 'en';
      (window.cookieyes as any).setLanguage(cookieYesLang);
    }
  }, [language]);

  // Simply render children as this is just a management component
  return <>{children}</>;
};

export default ConsentManager;
