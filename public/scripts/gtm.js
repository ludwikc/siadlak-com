// Google Tag Manager with Consent Mode v2
(function(w,d,s,l,i){
    // Initialize dataLayer if it doesn't exist
    w[l]=w[l]||[];
    
    // Set default consent state - denied for all
    w.dataLayer.push({
        'event': 'default_consent',
        'consent_mode': {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'region': ['EEA', 'UK', 'CH'] // EEA, UK, Switzerland
        }
    });
    
    // Push GTM start event
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    
    // Create and insert GTM script
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    
    // Function to update consent in dataLayer
    w.updateConsentState = function(consent) {
        w.dataLayer.push({
            'event': 'consent_update',
            'consent_mode': consent
        });
    };
})(window,document,'script','dataLayer','GTM-LFS3');
