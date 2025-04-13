/**
 * Hook for interacting with CookieYes consent management platform
 * Provides functions to check consent status and reopen consent settings
 */

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Define the CookieYes window interface
declare global {
  interface Window {
    cookieyes?: {
      show: () => void;
      hide: () => void;
      consent: {
        accepted: string[];
        rejected: string[];
      };
    };
  }
}

export const useConsent = () => {
  const { language } = useLanguage();

  // Sync language with CookieYes when language changes
  useEffect(() => {
    // Some CMP implementations allow setting language programmatically
    // If CookieYes supports this in the future, it would be implemented here
    // Currently, CookieYes typically detects language from the browser or uses the configured default
  }, [language]);

  /**
   * Open the CookieYes consent settings dialog
   */
  const openConsentSettings = () => {
    if (window.cookieyes?.show) {
      window.cookieyes.show();
    } else {
      console.warn('CookieYes is not available');
    }
  };

  /**
   * Check if consent has been given for a specific category
   * @param category The consent category to check
   * @returns boolean indicating if consent was given
   */
  const hasConsent = (category: string): boolean => {
    if (!window.cookieyes?.consent) {
      return false;
    }
    
    return window.cookieyes.consent.accepted.includes(category);
  };

  return {
    openConsentSettings,
    hasConsent,
  };
};
