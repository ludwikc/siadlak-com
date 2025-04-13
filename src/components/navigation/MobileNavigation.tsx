
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { getMenuItems } from './NavigationItems';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileNavigation({ isMenuOpen, setIsMenuOpen }: MobileNavigationProps) {
  const { language, languagePrefix, getLocalizedPath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const txt = getMenuItems(language);
  
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-luminous-white dark:bg-deep-space shadow-lg animate-fade-in">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <Link 
          to={getLocalizedPath("/about")}
          className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {txt.about}
        </Link>
        
        {/* Mobile Courses Dropdown */}
        <div className="space-y-2">
          <div 
            className="text-deep-charcoal dark:text-silver-mist font-medium flex items-center cursor-pointer"
            onClick={() => {
              navigate(getLocalizedPath("/courses"));
              setIsMenuOpen(false);
            }}
          >
            {txt.courses} <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="pl-4 flex flex-col space-y-2">
            <Link 
              to={getLocalizedPath("/courses")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.allCourses}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/mental-elevator")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.mentalElevator}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/hakowanie-produktywnosci")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.hakowanieProduktywnosci}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/silna-glowa")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.silnaGlowa}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/7-technik")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt["7-technik"]}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/train-the-trainer")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.trainTheTrainer}
            </Link>
            <Link 
              to={getLocalizedPath("/courses/total-immersion")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.totalImmersion}
            </Link>
          </div>
        </div>
        
        {/* Mobile Resources Dropdown */}
        <div className="space-y-2">
          <div 
            className="text-deep-charcoal dark:text-silver-mist font-medium flex items-center cursor-pointer"
            onClick={() => {
              navigate(getLocalizedPath("/resources"));
              setIsMenuOpen(false);
            }}
          >
            {txt.resources} <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="pl-4 flex flex-col space-y-2">
            <Link 
              to={getLocalizedPath("/resources")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.allResources}
            </Link>
            <Link 
              to={getLocalizedPath("/testimonials")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {txt.testimonials}
            </Link>
          </div>
        </div>
        
        <Link 
          to={getLocalizedPath("/newsletter")}
          className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {txt.newsletter}
        </Link>
        
        <Link 
          to={getLocalizedPath("/contact")}
          className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors inline-block"
          onClick={() => setIsMenuOpen(false)}
        >
          {txt.bookCall}
        </Link>
      </nav>
    </div>
  );
}
