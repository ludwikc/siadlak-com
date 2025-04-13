
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Map as SitemapIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Sitemap = () => {
  const { language, getLocalizedPath } = useLanguage();
  
  // Define all pages in the sitemap
  const mainPages = [
    { path: "/", label: language === 'en' ? "Home" : "Strona główna" },
    { path: "/about", label: language === 'en' ? "About" : "O mnie" },
    { path: "/contact", label: language === 'en' ? "Contact" : "Kontakt" },
    { path: "/courses", label: language === 'en' ? "Courses" : "Kursy" },
    { path: "/resources", label: language === 'en' ? "Resources" : "Zasoby" },
    { path: "/testimonials", label: language === 'en' ? "Testimonials" : "Referencje" },
    { path: "/newsletter", label: language === 'en' ? "Newsletter" : "Newsletter" },
    { path: "/sitemap", label: language === 'en' ? "Sitemap" : "Mapa witryny" },
  ];
  
  // Course pages
  const coursePages = [
    { path: "/courses/mental-elevator", label: "Mental Elevator" },
    { path: "/courses/hakowanie-produktywnosci", label: language === 'en' ? "Productivity Hacking" : "Hakowanie Produktywności" },
  ];
  
  // Resource pages
  const resourcePages = [
    { 
      path: language === 'en' ? "/resources/digital-command-checklist" : "/resources/lista-kontrolna-cyfrowego-dowodzenia", 
      label: language === 'en' ? "Digital Command Checklist" : "Lista kontrolna cyfrowego dowodzenia"
    },
    { 
      path: language === 'en' ? "/resources/5-minutes-to-focus" : "/resources/5-minut-do-koncentracji", 
      label: language === 'en' ? "5 Minutes to Focus" : "5 minut do koncentracji"
    },
    { 
      path: language === 'en' ? "/resources/ai-command-scripts" : "/resources/skrypty-dowodzenia-ai", 
      label: language === 'en' ? "AI Command Scripts" : "Skrypty dowodzenia AI"
    },
  ];
  
  // Thank you pages
  const thankYouPages = [
    { path: "/thank-you", label: language === 'en' ? "Thank You" : "Dziękuję" },
    { path: "/thank-you/contact", label: language === 'en' ? "Contact Thank You" : "Dziękuję za kontakt" },
    { path: "/thank-you/newsletter", label: language === 'en' ? "Newsletter Thank You" : "Dziękuję za subskrypcję" },
    { path: "/thank-you/discovery-call", label: language === 'en' ? "Discovery Call Thank You" : "Dziękuję za umówienie rozmowy" },
  ];
  
  // Legal pages
  const legalPages = [
    { path: "/legal", label: language === 'en' ? "Legal Information" : "Informacje Prawne" },
    { path: "/legal/privacy-policy", label: language === 'en' ? "Privacy Policy" : "Polityka Prywatności" },
    { path: "/legal/terms-newsletter", label: language === 'en' ? "Terms and Conditions (Newsletter)" : "Regulamin (Newsletter)" },
    { path: "/legal/terms-sales", label: language === 'en' ? "Terms and Conditions (Sales)" : "Regulamin (Sprzedaż)" },
    { path: "/legal/terms-community", label: language === 'en' ? "Terms and Conditions (Community)" : "Regulamin (Społeczność)" },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Sitemap' : 'Mapa witryny'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en' ? 'Complete list of all pages on this website' : 'Pełna lista wszystkich stron na tej witrynie'}
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
                  {language === 'en' ? 'Main Pages' : 'Główne strony'}
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
                  {language === 'en' ? 'Courses' : 'Kursy'}
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
                  {language === 'en' ? 'Resources' : 'Zasoby'}
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
                  {language === 'en' ? 'Thank You Pages' : 'Strony z podziękowaniami'}
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
                  {language === 'en' ? 'Legal Pages' : 'Strony Prawne'}
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

export default Sitemap;
