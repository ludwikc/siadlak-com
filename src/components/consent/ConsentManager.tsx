import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConsent } from '@/hooks/useConsent';

/**
 * Enhanced ConsentManager component
 * 
 * This component handles the initialization and management of the CookieYes
 * consent management platform with Google Consent Mode v2 integration.
 * It ensures that CookieYes is properly initialized, respects the language
 * settings of the application, and updates the dataLayer when consent changes.
 * 
 * It should be placed high in the component tree, ideally in the App component.
 */
export const ConsentManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const { updateDataLayerConsent } = useConsent();
  const cookieYesInitialized = useRef(false);

  // Initialize CookieYes and handle language changes
  useEffect(() => {
    // Function to check if CookieYes is loaded
    const checkCookieYesLoaded = () => {
      if (window.cookieyes && !cookieYesInitialized.current) {
        cookieYesInitialized.current = true;
        
        // Set language
        if (typeof window.cookieyes.setLanguage === 'function') {
          const cookieYesLang = language === 'pl' ? 'pl' : 'en';
          window.cookieyes.setLanguage(cookieYesLang);
        }
        
        // Update dataLayer with initial consent state
        updateDataLayerConsent();
        
        // Remove the interval once CookieYes is loaded
        clearInterval(checkInterval);
      }
    };
    
    // Check every 100ms if CookieYes is loaded (it's loaded asynchronously via GTM)
    const checkInterval = setInterval(checkCookieYesLoaded, 100);
    
    // Initial check
    checkCookieYesLoaded();
    
    // Cleanup
    return () => {
      clearInterval(checkInterval);
    };
  }, [language, updateDataLayerConsent]);

  // Update language when it changes
  useEffect(() => {
    if (cookieYesInitialized.current && window.cookieyes?.setLanguage) {
      const cookieYesLang = language === 'pl' ? 'pl' : 'en';
      window.cookieyes.setLanguage(cookieYesLang);
    }
  }, [language]);

  // Simply render children as this is just a management component
  return <>{children}</>;
};

export default ConsentManager;
