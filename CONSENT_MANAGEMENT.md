# Enhanced Consent Management Implementation

This document outlines the enhanced consent management solution implemented for the website, ensuring comprehensive compliance with EU/EEA regulations including GDPR, the ePrivacy Directive, and Google Consent Mode v2 (GCMv2).

## Overview

The implementation uses CookieYes (via Google Tag Manager) as the Consent Management Platform (CMP) to handle cookie consent for users in the European Economic Area (EEA), UK, and Switzerland. The solution includes:

1. Google Tag Manager integration with Consent Mode v2
2. CookieYes consent management with granular categories
3. Enhanced React components for managing consent
4. Multilingual support (English and Polish)
5. Standard Contractual Clauses (SCCs) for US data transfers

## Implementation Details

### 1. Google Tag Manager Integration with Consent Mode v2

Google Tag Manager (GTM) is used to load and manage CookieYes with Google Consent Mode v2 integration. The implementation includes:

- Enhanced GTM script in the `<head>` section with default consent state set to 'denied'
- Region-specific consent requirements for EEA, UK, and Switzerland
- Consent-based tag triggers that respect user preferences
- The GTM noscript iframe immediately after the opening `<body>` tag

### 2. React Components

The following enhanced components have been created to manage consent:

#### ConsentManager

`src/components/consent/ConsentManager.tsx`

This component:
- Wraps the application to ensure CookieYes is properly initialized
- Handles language synchronization between the application and CookieYes
- Updates the dataLayer when consent changes
- Monitors consent status changes with MutationObserver
- Is placed high in the component tree (in App.tsx)

#### ConsentButton

`src/components/consent/ConsentButton.tsx`

This component:
- Provides an accessible button to reopen the CookieYes consent settings dialog
- Supports both English and Polish languages
- Includes proper ARIA attributes for accessibility
- Optional visual indicator (icon)
- Is integrated into the Footer component

### 3. Enhanced Hooks

#### useConsent

`src/hooks/useConsent.ts`

This enhanced hook:
- Provides typed functions to interact with CookieYes
- Maps CookieYes categories to Google Consent Mode types
- Allows checking consent status for different categories
- Updates the dataLayer when consent changes
- Provides a function to open the consent settings dialog
- Includes TypeScript enums and interfaces for better type safety

### 4. Multilingual Support

The consent management solution supports both English and Polish languages:

- The ConsentButton component displays text in the current language
- The ConsentManager synchronizes the application language with CookieYes
- All consent-related UI elements are fully localized

### 5. Standard Contractual Clauses (SCCs)

For compliance with GDPR requirements following the Schrems II decision:

- SCCs are implemented for all US-based services
- Documentation is available in `SCC_DOCUMENTATION.md`
- Supplementary measures are in place to enhance data protection
- Regular risk assessments are conducted

## Maintenance

### Adding New Languages

If you add a new language to the application:

1. Add translations for the "Cookie Settings" button in `ConsentButton.tsx`
2. Update the language mapping in `ConsentManager.tsx`
3. Configure the language in CookieYes

### Updating CookieYes Configuration

CookieYes is configured through Google Tag Manager. To update the configuration:

1. Log in to your Google Tag Manager account
2. Navigate to the CookieYes tag
3. Update the configuration as needed
4. Ensure consent categories map correctly to Google Consent Mode types

### Testing Compliance

To ensure continued compliance:

1. Regularly test the consent flow in both English and Polish
2. Verify that no cookies are set before consent is given (except strictly necessary cookies)
3. Ensure the consent banner appears immediately for users from EEA, UK, and Switzerland
4. Verify that Google services respect the consent status
5. Test that tag firing is properly controlled by consent status

## Technical Reference

### CookieYes API

The CookieYes JavaScript API provides several methods that can be used to interact with the consent management platform:

```javascript
// Open the consent settings dialog
window.cookieyes.show();

// Check if consent has been given for a category
const hasAnalyticsConsent = window.cookieyes.consent.accepted.includes('analytics');

// Set language (if supported)
window.cookieyes.setLanguage('pl');
```

### Google Consent Mode v2

Google Consent Mode v2 is configured through Google Tag Manager and CookieYes. It manages the following consent types:

- `ad_storage`: Enables storage (such as cookies) related to advertising
- `analytics_storage`: Enables storage related to analytics (e.g., visit duration)
- `ad_user_data`: Controls whether data about a user's online activity can be used to inform ads
- `ad_personalization`: Controls whether personalized advertising is enabled

The default state for all consent types is set to 'denied' until explicit consent is given.

## Compliance Requirements

This enhanced implementation ensures compliance with:

- **GDPR**: By obtaining explicit consent before processing personal data and implementing SCCs for US data transfers
- **ePrivacy Directive**: By obtaining consent before setting non-essential cookies and implementing granular consent categories
- **Google Consent Mode v2**: By properly signaling consent status to Google services and implementing default denied state
- **Accessibility**: By implementing ARIA attributes and keyboard navigation for the consent UI
