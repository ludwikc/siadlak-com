import React from 'react';
import { Button } from '@/components/ui/button';
import { useConsent } from '@/hooks/useConsent';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConsentButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

/**
 * Button component that opens the CookieYes consent settings dialog
 */
export const ConsentButton: React.FC<ConsentButtonProps> = ({
  variant = 'link',
  size = 'sm',
  className = '',
}) => {
  const { openConsentSettings } = useConsent();
  const { language } = useLanguage();

  // Translations for the button text
  const buttonText = {
    en: 'Cookie Settings',
    pl: 'Ustawienia plików cookie',
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openConsentSettings}
    >
      {language === 'pl' ? buttonText.pl : buttonText.en}
    </Button>
  );
};

export default ConsentButton;
