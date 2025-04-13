
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Map as SitemapIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PolishSitemap = () => {
  const { language, getLocalizedPath } = useLanguage();
  
  // Define all pages in the sitemap
  const mainPages = [
    { path: "/", label: "Strona główna" },
    { path: "/about", label: "O mnie" },
    { path: "/contact", label: "Kontakt" },
    { path: "/courses", label: "Kursy" },
    { path: "/resources", label: "Zasoby" },
    { path: "/testimonials", label: "Referencje" },
    { path: "/newsletter", label: "Newsletter" },
    { path: "/sitemap", label: "Mapa witryny" },
  ];
  
  // Course pages
  const coursePages = [
    { path: "/courses/mental-elevator", label: "Mental Elevator" },
    { path: "/courses/hakowanie-produktywnosci", label: "Hakowanie Produktywności" },
  ];
  
  // Resource pages
  const resourcePages = [
    { 
      path: "/resources/lista-kontrolna-cyfrowego-dowodzenia", 
      label: "Lista kontrolna cyfrowego dowodzenia"
    },
    { 
      path: "/resources/5-minut-do-koncentracji", 
      label: "5 minut do koncentracji"
    },
    { 
      path: "/resources/skrypty-dowodzenia-ai", 
      label: "Skrypty dowodzenia AI"
    },
  ];
  
  // Thank you pages
  const thankYouPages = [
    { path: "/thank-you", label: "Dziękuję" },
    { path: "/thank-you/contact", label: "Dziękuję za kontakt" },
    { path: "/thank-you/newsletter", label: "Dziękuję za subskrypcję" },
    { path: "/thank-you/discovery-call", label: "Dziękuję za umówienie rozmowy" },
  ];
  
  // Legal pages
  const legalPages = [
    { path: "/legal", label: "Informacje Prawne" },
    { path: "/legal/privacy-policy", label: "Polityka Prywatności" },
    { path: "/legal/terms-newsletter", label: "Regulamin (Newsletter)" },
    { path: "/legal/terms-sales", label: "Regulamin (Sprzedaż)" },
    { path: "/legal/terms-community", label: "Regulamin (Społeczność)" },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mapa witryny
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Pełna lista wszystkich stron na tej witrynie
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SitemapIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Główne strony
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {mainPages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-3 hover:bg-secondary/20 rounded-md transition-colors flex items-center text-deep-charcoal dark:text-silver-mist"
                  >
                    <span className="mr-2">•</span> {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SitemapIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Kursy
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {coursePages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-3 hover:bg-secondary/20 rounded-md transition-colors flex items-center text-deep-charcoal dark:text-silver-mist"
                  >
                    <span className="mr-2">•</span> {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SitemapIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Zasoby
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {resourcePages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-3 hover:bg-secondary/20 rounded-md transition-colors flex items-center text-deep-charcoal dark:text-silver-mist"
                  >
                    <span className="mr-2">•</span> {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SitemapIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Strony z podziękowaniami
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {thankYouPages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-3 hover:bg-secondary/20 rounded-md transition-colors flex items-center text-deep-charcoal dark:text-silver-mist"
                  >
                    <span className="mr-2">•</span> {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SitemapIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Strony Prawne
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {legalPages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-3 hover:bg-secondary/20 rounded-md transition-colors flex items-center text-deep-charcoal dark:text-silver-mist"
                  >
                    <span className="mr-2">•</span> {page.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishSitemap;
