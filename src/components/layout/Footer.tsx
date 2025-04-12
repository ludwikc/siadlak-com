
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Linkedin, Youtube, Map } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, getLocalizedPath } = useLanguage();
  
  // Footer text based on language
  const footerText = {
    en: {
      tagline: "Guiding professionals at the intersection of technology and human potential.",
      quickLinks: "Quick Links",
      programs: "Programs",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe for insights at the intersection of technology and human potential.",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      copyright: `© ${currentYear} Ludwik C. Siadlak. All rights reserved.`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
      home: "Home",
      about: "About",
      courses: "Courses",
      resources: "Resources",
      contact: "Contact",
      testimonials: "Testimonials",
      mentalElevator: "Mental Elevator",
      hakowanieProduktywnosci: "Hakowanie Produktywności"
    },
    pl: {
      tagline: "Prowadzę profesjonalistów na styku technologii i ludzkiego potencjału.",
      quickLinks: "Szybkie linki",
      programs: "Programy",
      newsletter: "Newsletter",
      newsletterDesc: "Zapisz się po inspiracje na styku technologii i ludzkiego potencjału.",
      emailPlaceholder: "Twój email",
      subscribe: "Zapisz się",
      copyright: `© ${currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.`,
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania",
      sitemap: "Mapa witryny",
      home: "Strona główna",
      about: "O mnie",
      courses: "Kursy",
      resources: "Zasoby",
      contact: "Kontakt",
      testimonials: "Referencje",
      mentalElevator: "Mental Elevator",
      hakowanieProduktywnosci: "Hakowanie Produktywności"
    }
  };

  // Get current language text
  const txt = language === 'en' ? footerText.en : footerText.pl;
  
  return (
    <footer className="bg-secondary dark:bg-deep-space/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to={getLocalizedPath("/")} className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
                Ludwik C. Siadlak
              </h3>
            </Link>
            <p className="text-subtle-slate dark:text-silver-mist/70 max-w-xs">
              {txt.tagline}
            </p>
            <div className="flex space-x-4 text-subtle-slate">
              <a href="https://instagram.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">{txt.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath("/about")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.about}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/courses")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.courses}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/resources")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.resources}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/contact")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.contact}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/testimonials")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.testimonials}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/newsletter")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.newsletter}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">{txt.programs}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath("/courses/mental-elevator")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.mentalElevator}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/courses/hakowanie-produktywnosci")} className="text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
                  {txt.hakowanieProduktywnosci}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">{txt.newsletter}</h4>
            <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
              {txt.newsletterDesc}
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={txt.emailPlaceholder} 
                className="py-2 px-3 rounded-l-md border-y border-l border-border bg-luminous-white dark:bg-deep-space w-full"
                aria-label={txt.emailPlaceholder}
              />
              <button 
                type="submit"
                className="bg-ascension-pink hover:bg-luminal-magenta text-white p-2 rounded-r-md transition-colors"
                aria-label={txt.subscribe}
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-subtle-slate dark:text-silver-mist/70 text-sm">
            {txt.copyright}
          </p>
          <div className="flex flex-wrap space-x-4 md:space-x-6 mt-4 md:mt-0 justify-center">
            <Link to={getLocalizedPath("/sitemap")} className="text-sm text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors flex items-center">
              <Map size={14} className="mr-1" />
              {txt.sitemap}
            </Link>
            <a href="https://docs.siadlak.com/legal/regulaminy" className="text-sm text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
              {txt.privacy}
            </a>
            <a href="https://docs.siadlak.com/legal/regulaminy" className="text-sm text-subtle-slate hover:text-neural-violet dark:text-silver-mist/70 dark:hover:text-luminal-magenta transition-colors">
              {txt.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
