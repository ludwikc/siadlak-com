
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "../ui/navigation-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
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
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-luminous-white dark:bg-deep-space shadow-md py-2' 
        : 'bg-luminous-white/80 dark:bg-deep-space/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
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
                  to="/about"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
                >
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                    <div className="grid grid-cols-1 gap-3">
                      <Link 
                        to="/courses" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">All Courses</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          Browse all our available programs and courses
                        </p>
                      </Link>
                      <Link 
                        to="/courses/mental-elevator" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">Mental Elevator</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          Premium 8-week mentoring program to elevate your performance
                        </p>
                      </Link>
                      <Link 
                        to="/courses/hakowanie-produktywnosci" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">Hakowanie Produktywności</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          Comprehensive course on mastering productivity systems
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                    <div className="grid grid-cols-1 gap-3">
                      <Link 
                        to="/resources" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">All Resources</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          Access free tools, articles, and guides
                        </p>
                      </Link>
                      <Link 
                        to="/testimonials" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                      >
                        <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">Testimonials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                          Success stories from program participants
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/newsletter"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
                >
                  Newsletter
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/contact"
            className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors"
          >
            Book a Call
          </Link>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-deep-charcoal dark:text-silver-mist"
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
              to="/about"
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Courses Dropdown */}
            <div className="space-y-2">
              <div className="text-deep-charcoal dark:text-silver-mist font-medium flex items-center">
                Courses <ChevronDown size={16} className="ml-1" />
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link 
                  to="/courses"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Courses
                </Link>
                <Link 
                  to="/courses/mental-elevator"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mental Elevator
                </Link>
                <Link 
                  to="/courses/hakowanie-produktywnosci"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakowanie Produktywności
                </Link>
              </div>
            </div>
            
            {/* Mobile Resources Dropdown */}
            <div className="space-y-2">
              <div className="text-deep-charcoal dark:text-silver-mist font-medium flex items-center">
                Resources <ChevronDown size={16} className="ml-1" />
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link 
                  to="/resources"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Resources
                </Link>
                <Link 
                  to="/testimonials"
                  className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </div>
            </div>
            
            <Link 
              to="/newsletter"
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
            
            <Link 
              to="/contact"
              className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
