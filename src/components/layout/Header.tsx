
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "../ui/navigation-menu";
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, getLocalizedPath } = useLanguage();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Menu items based on language
  const menuItems = {
    en: {
      home: "Home",
      about: "About",
      courses: "Courses",
      resources: "Resources",
      newsletter: "Newsletter",
      testimonials: "Testimonials",
      bookCall: "Book a Call",
      allCourses: "All Courses",
      allCoursesDesc: "Browse all our available programs and courses",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-week mentoring program to elevate your performance",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Comprehensive course on mastering productivity systems",
      allResources: "All Resources",
      allResourcesDesc: "Access free tools, articles, and guides",
      testimonialsDesc: "Success stories from program participants",
    },
    pl: {
      home: "Strona główna",
      about: "O mnie",
      courses: "Kursy",
      resources: "Zasoby",
      newsletter: "Newsletter",
      testimonials: "Referencje",
      bookCall: "Umów rozmowę",
      allCourses: "Wszystkie kursy",
      allCoursesDesc: "Przeglądaj wszystkie dostępne programy i kursy",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-tygodniowy program mentoringowy podnoszący Twoją wydajność",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Kompleksowy kurs opanowania systemów produktywności",
      allResources: "Wszystkie zasoby",
      allResourcesDesc: "Uzyskaj dostęp do darmowych narzędzi, artykułów i poradników",
      testimonialsDesc: "Historie sukcesu uczestników programu",
    }
  };
  
  // Get current language text
  const txt = language === 'en' ? menuItems.en : menuItems.pl;
  
  const navigate = useNavigate();

  // Direct navigation handlers - fixing the type errors here
  const handleCoursesClick = () => {
    navigate(getLocalizedPath("/courses"));
  };

  const handleResourcesClick = () => {
    navigate(getLocalizedPath("/resources"));
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-luminous-white dark:bg-deep-space shadow-md py-2' 
        : 'bg-luminous-white/80 dark:bg-deep-space/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={getLocalizedPath("/")} className="flex items-center">
          <span className="text-2xl font-bold font-heading bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
            Ludwik C. Siadlak
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to={getLocalizedPath("/about")}
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
                >
                  {txt.about}
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent"
                  onClick={handleCoursesClick}
                >
                  {txt.courses}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                    <div className="grid grid-cols-1 gap-3">
                      <Link 
                        to={getLocalizedPath("/courses")} 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.allCourses}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          {txt.allCoursesDesc}
                        </p>
                      </Link>
                      <Link 
                        to={getLocalizedPath("/courses/mental-elevator")} 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.mentalElevator}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          {txt.mentalElevatorDesc}
                        </p>
                      </Link>
                      <Link 
                        to={getLocalizedPath("/courses/hakowanie-produktywnosci")} 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.hakowanieProduktywnosci}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          {txt.hakowanieProduktywnosiDesc}
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent"
                  onClick={handleResourcesClick}
                >
                  {txt.resources}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                    <div className="grid grid-cols-1 gap-3">
                      <Link 
                        to={getLocalizedPath("/resources")} 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.allResources}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          {txt.allResourcesDesc}
                        </p>
                      </Link>
                      <Link 
                        to={getLocalizedPath("/testimonials")} 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.testimonials}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          {txt.testimonialsDesc}
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to={getLocalizedPath("/newsletter")}
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
                >
                  {txt.newsletter}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to={getLocalizedPath("/contact")}
            className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors"
          >
            {txt.bookCall}
          </Link>
          
          {/* Theme Toggle and Language Switcher */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <LanguageSwitcher />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 ml-2 text-deep-charcoal dark:text-silver-mist"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
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
      )}
    </header>
  );
}
