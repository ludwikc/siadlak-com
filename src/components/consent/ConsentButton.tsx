import React from 'react';
import { Button } from '@/components/ui/button';
import { useConsent } from '@/hooks/useConsent';
import { useLanguage } from '@/contexts/LanguageContext';
import { Settings } from 'lucide-react';

interface ConsentButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
}

/**
 * Enhanced button component that opens the CookieYes consent settings dialog
 * Includes accessibility improvements and visual indicator
 */
export const ConsentButton: React.FC<ConsentButtonProps> = ({
  variant = 'link',
  size = 'sm',
  className = '',
  showIcon = false,
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
      aria-label={language === 'pl' ? buttonText.pl : buttonText.en}
    >
      {showIcon && <Settings className="mr-2 h-4 w-4" aria-hidden="true" />}
      <span>{language === 'pl' ? buttonText.pl : buttonText.en}</span>
    </Button>
  );
};

export default ConsentButton;
