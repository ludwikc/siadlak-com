# Consent Management Implementation

This document outlines the consent management solution implemented for the website, ensuring compliance with EU/EEA regulations including GDPR, the ePrivacy Directive, and Google Consent Mode v2 (GCMv2).

## Overview

The implementation uses CookieYes (via Google Tag Manager) as the Consent Management Platform (CMP) to handle cookie consent for users in the European Economic Area (EEA), UK, and Switzerland. The solution includes:

1. Google Tag Manager integration
2. CookieYes consent management
3. React components for managing consent
4. Multilingual support (English and Polish)

## Implementation Details

### 1. Google Tag Manager Integration

Google Tag Manager (GTM) is used to load and manage CookieYes. The GTM code is placed in the `index.html` file:

- The GTM script is placed in the `<head>` section
- The GTM noscript iframe is placed immediately after the opening `<body>` tag

### 2. React Components

The following components have been created to manage consent:

#### ConsentManager

`src/components/consent/ConsentManager.tsx`

This component:
- Wraps the application to ensure CookieYes is properly initialized
- Handles language synchronization between the application and CookieYes
- Is placed high in the component tree (in App.tsx)

#### ConsentButton

`src/components/consent/ConsentButton.tsx`

This component:
- Provides a button to reopen the CookieYes consent settings dialog
- Supports both English and Polish languages
- Is integrated into the Footer component

### 3. Hooks

#### useConsent

`src/hooks/useConsent.ts`

This hook:
- Provides functions to interact with CookieYes
- Allows checking consent status for different categories
- Provides a function to open the consent settings dialog

### 4. Multilingual Support

The consent management solution supports both English and Polish languages:

- The ConsentButton component displays text in the current language
- The ConsentManager attempts to synchronize the application language with CookieYes

## Maintenance

### Adding New Languages

If you add a new language to the application:

1. Add translations for the "Cookie Settings" button in `ConsentButton.tsx`
2. Update the language mapping in `ConsentManager.tsx`

### Updating CookieYes Configuration

CookieYes is configured through Google Tag Manager. To update the configuration:

1. Log in to your Google Tag Manager account
2. Navigate to the CookieYes tag
3. Update the configuration as needed

### Testing Compliance

To ensure continued compliance:

1. Regularly test the consent flow in both English and Polish
2. Verify that no cookies are set before consent is given (except strictly necessary cookies)
3. Ensure the consent banner appears immediately for users from EEA, UK, and Switzerland
4. Verify that Google services respect the consent status

## Technical Reference

### CookieYes API

The CookieYes JavaScript API provides several methods that can be used to interact with the consent management platform:

```javascript
// Open the consent settings dialog
window.cookieyes.show();

// Check if consent has been given for a category
const hasAnalyticsConsent = window.cookieyes.consent.accepted.includes('analytics');
```

### Google Consent Mode v2

Google Consent Mode v2 is configured through Google Tag Manager and CookieYes. It manages the following consent types:

- `ad_storage`: Enables storage (such as cookies) related to advertising
- `analytics_storage`: Enables storage related to analytics (e.g., visit duration)
- `ad_user_data`: Controls whether data about a user's online activity can be used to inform ads
- `ad_personalization`: Controls whether personalized advertising is enabled

## Compliance Requirements

This implementation ensures compliance with:

- **GDPR**: By obtaining explicit consent before processing personal data
- **ePrivacy Directive**: By obtaining consent before setting non-essential cookies
- **Google Consent Mode v2**: By properly signaling consent status to Google services
