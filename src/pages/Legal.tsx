import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Scale as LegalIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Legal = () => {
  const { language, getLocalizedPath } = useLanguage();
  
  // Define all legal pages
  const legalPages = [
    { 
      path: "/legal/privacy-policy", 
      label: language === 'en' ? "Privacy Policy" : "Polityka Prywatności" 
    },
    { 
      path: "/legal/terms-newsletter", 
      label: language === 'en' ? "Terms and Conditions (Newsletter)" : "Regulamin (Newsletter)" 
    },
    { 
      path: "/legal/terms-sales", 
      label: language === 'en' ? "Terms and Conditions (Sales)" : "Regulamin (Sprzedaż)" 
    },
    { 
      path: "/legal/terms-community", 
      label: language === 'en' ? "Terms and Conditions (Community)" : "Regulamin (Społeczność)" 
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Legal Information' : 'Informacje Prawne'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en' 
                ? 'Important legal documents and policies for our website and services' 
                : 'Ważne dokumenty prawne i zasady dotyczące naszej strony internetowej i usług'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <LegalIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'Legal Documents' : 'Dokumenty Prawne'}
                </h2>
              </div>
              
              <p className="mb-8 text-deep-charcoal/80 dark:text-silver-mist/80">
                {language === 'en' 
                  ? 'Please review these important legal documents that govern your use of our website and services. These documents outline your rights and responsibilities, as well as our commitments to you.' 
                  : 'Prosimy o zapoznanie się z tymi ważnymi dokumentami prawnymi, które regulują korzystanie z naszej strony internetowej i usług. Dokumenty te określają Twoje prawa i obowiązki, a także nasze zobowiązania wobec Ciebie.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {legalPages.map((page, index) => (
                  <Link 
                    key={index} 
                    to={getLocalizedPath(page.path)} 
                    className="p-4 hover:bg-secondary/20 rounded-lg transition-colors flex items-center text-deep-charcoal dark:text-silver-mist border border-neural-violet/20 dark:border-luminal-magenta/20"
                  >
                    <LegalIcon size={20} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">
                {language === 'en' ? 'Questions About Our Policies?' : 'Pytania Dotyczące Naszych Zasad?'}
              </h3>
              <p className="mb-6 text-deep-charcoal/80 dark:text-silver-mist/80">
                {language === 'en' 
                  ? 'If you have any questions about our legal policies or need clarification on any terms, please don\'t hesitate to contact us.' 
                  : 'Jeśli masz jakiekolwiek pytania dotyczące naszych zasad prawnych lub potrzebujesz wyjaśnienia jakichkolwiek warunków, skontaktuj się z nami.'}
              </p>
              <Link 
                to={getLocalizedPath("/contact")} 
                className="inline-flex items-center px-4 py-2 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-md transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'Kontakt'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
