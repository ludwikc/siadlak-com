import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

type ThankYouProps = {
  type?: 'contact' | 'newsletter' | 'discovery-call' | 'webinar';
};

export default function ThankYou({ type = 'generic' }: ThankYouProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [location.pathname]);

  let title = 'Dziękuję!';
  let message = 'Twoja wiadomość została pomyślnie wysłana.';
  let cta = 'Wróć do strony głównej';
  let ctaLink = '/';

  switch (type) {
    case 'contact':
      title = 'Dziękujemy za kontakt!';
      message = 'Odezwę się do Ciebie w ciągu 48 godzin.';
      cta = 'Wróć do strony głównej';
      ctaLink = '/';
      break;
    case 'newsletter':
      title = 'Dziękujemy za dołączenie!';
      message = 'Potwierdź swój adres e-mail, aby otrzymywać regularne aktualizacje.';
      cta = 'Wróć do strony głównej';
      ctaLink = '/';
      break;
    case 'discovery-call':
      title = 'Zapisano na rozmowę!';
      message = 'Dziękuję za rejestrację na rozmowę. Wysłaliśmy szczegóły na Twój adres email. Nie zapomnij dodać wydarzenia do kalendarza!';
      cta = 'Wróć do strony głównej';
      ctaLink = '/';
      break;
    case 'webinar':
      title = 'Zapisano na webinar!';
      message = 'Dziękuję za rejestrację na webinar. Wysłaliśmy szczegóły na Twój adres email. Nie zapomnij dodać wydarzenia do kalendarza!';
      cta = 'Wróć do strony głównej';
      ctaLink = '/';
      break;
    default:
      title = 'Dziękujemy!';
      message = 'Dziękujemy za zainteresowanie.';
      cta = 'Wróć do strony głównej';
      ctaLink = '/';
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-luminous-white dark:bg-deep-space py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-deep-charcoal dark:text-silver-mist">
              {title}
            </h2>
            <p className="mt-2 text-center text-sm text-deep-charcoal/60 dark:text-silver-mist/60">
              {message}
            </p>
          </div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-neural-violet hover:bg-ascension-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ascension-pink"
            onClick={() => navigate(ctaLink)}
          >
            {cta}
          </button>
        </div>
      </div>
    </Layout>
  );
}
