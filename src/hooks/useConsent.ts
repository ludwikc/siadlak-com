/**
 * Enhanced hook for interacting with CookieYes consent management platform
 * Provides comprehensive functions to check consent status, update dataLayer,
 * and reopen consent settings in compliance with GDPR and ePrivacy Directive
 */

import { useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Define consent categories
export enum ConsentCategory {
  NECESSARY = 'necessary',
  PREFERENCES = 'preferences',
  ANALYTICS = 'analytics',
  MARKETING = 'marketing'
}

// Define Google Consent Mode types
export enum ConsentType {
  AD_STORAGE = 'ad_storage',
  ANALYTICS_STORAGE = 'analytics_storage',
  AD_USER_DATA = 'ad_user_data',
  AD_PERSONALIZATION = 'ad_personalization'
}

// Define consent status
export type ConsentStatus = 'denied' | 'granted';

// Define consent state object
export interface ConsentState {
  [ConsentType.AD_STORAGE]: ConsentStatus;
  [ConsentType.ANALYTICS_STORAGE]: ConsentStatus;
  [ConsentType.AD_USER_DATA]: ConsentStatus;
  [ConsentType.AD_PERSONALIZATION]: ConsentStatus;
}

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
      setLanguage?: (lang: string) => void;
    };
    dataLayer?: any[];
    updateConsentState?: (consent: ConsentState) => void;
  }
}

/**
 * Maps CookieYes consent categories to Google Consent Mode types
 */
const categoryToConsentTypeMap: Record<ConsentCategory, ConsentType[]> = {
  [ConsentCategory.NECESSARY]: [],
  [ConsentCategory.PREFERENCES]: [],
  [ConsentCategory.ANALYTICS]: [ConsentType.ANALYTICS_STORAGE],
  [ConsentCategory.MARKETING]: [ConsentType.AD_STORAGE, ConsentType.AD_USER_DATA, ConsentType.AD_PERSONALIZATION]
};

export const useConsent = () => {
  const { language } = useLanguage();

  /**
   * Updates the dataLayer with the current consent state
   */
  const updateDataLayerConsent = useCallback(() => {
    if (!window.cookieyes?.consent) return;
    
    // Create consent state object
    const consentState: ConsentState = {
      [ConsentType.AD_STORAGE]: 'denied',
      [ConsentType.ANALYTICS_STORAGE]: 'denied',
      [ConsentType.AD_USER_DATA]: 'denied',
      [ConsentType.AD_PERSONALIZATION]: 'denied'
    };
    
    // Update consent state based on accepted categories
    const accepted = window.cookieyes.consent.accepted;
    
    // Check each category and update corresponding consent types
    Object.entries(categoryToConsentTypeMap).forEach(([category, consentTypes]) => {
      if (accepted.includes(category)) {
        consentTypes.forEach(type => {
          consentState[type] = 'granted';
        });
      }
    });
    
    // Update dataLayer
    if (window.updateConsentState) {
      window.updateConsentState(consentState);
    }
  }, []);

  // Sync language with CookieYes when language changes
  useEffect(() => {
    if (window.cookieyes?.setLanguage) {
      // Map our language codes to CookieYes language codes
      const cookieYesLang = language === 'pl' ? 'pl' : 'en';
      window.cookieyes.setLanguage(cookieYesLang);
    }
  }, [language]);

  // Set up consent change listener
  useEffect(() => {
    // Function to handle consent changes
    const handleConsentChange = () => {
      updateDataLayerConsent();
    };

    // Set up MutationObserver to detect changes to CookieYes consent
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' && 
          mutation.attributeName === 'data-cookieyes'
        ) {
          handleConsentChange();
        }
      });
    });

    // Start observing the document body for consent changes
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['data-cookieyes'] 
    });

    // Initial update
    updateDataLayerConsent();

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [updateDataLayerConsent]);

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
  const hasConsent = (category: ConsentCategory): boolean => {
    if (!window.cookieyes?.consent) {
      return category === ConsentCategory.NECESSARY; // Necessary cookies are always allowed
    }
    
    return window.cookieyes.consent.accepted.includes(category);
  };

  /**
   * Check if consent has been given for a specific Google Consent Mode type
   * @param type The consent type to check
   * @returns boolean indicating if consent was given
   */
  const hasConsentForType = (type: ConsentType): boolean => {
    // Find which categories map to this consent type
    const relevantCategories = Object.entries(categoryToConsentTypeMap)
      .filter(([_, types]) => types.includes(type))
      .map(([category, _]) => category as ConsentCategory);
    
    // Check if any of the relevant categories have consent
    return relevantCategories.some(category => hasConsent(category));
  };

  return {
    openConsentSettings,
    hasConsent,
    hasConsentForType,
    updateDataLayerConsent,
    ConsentCategory,
    ConsentType
  };
};
