import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-luminous-white dark:bg-deep-space shadow-md py-2"
          : "bg-luminous-white/80 dark:bg-deep-space/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-heading text-neural-violet dark:text-silver-mist bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
            Ludwik&nbsp;C. Siadlak
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="nav-link">
            O mnie
          </Link>
          
          {/* Dropdown for Możliwości */}
          <div className="relative group">
            <button
              className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Możliwości
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Megamenu Dropdown */}
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-80 bg-luminous-white dark:bg-deep-space shadow-lg rounded-lg border border-silver-mist/20 dark:border-silver-mist/10 p-6 z-50"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="space-y-4">
                  <Link 
                    to="/program" 
                    className="block group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                      Programy
                    </div>
                    <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mt-1">
                      Programy rozwojowe i szkolenia
                    </div>
                  </Link>
                  
                  <Link 
                    to="/podcast" 
                    className="block group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                      Podcasty
                    </div>
                    <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mt-1">
                      Lifehacking i Uważne Życie
                    </div>
                  </Link>
                  
                  <Link 
                    to="/community" 
                    className="block group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                      Społeczność
                    </div>
                    <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mt-1">
                      Zamknięta grupa Lifehackerów
                    </div>
                  </Link>
                  
                  <Link 
                    to="/newsletter" 
                    className="block group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                      Newsletter
                    </div>
                    <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mt-1">
                      Cotygodniowe inspiracje technologiczne
                    </div>
                  </Link>
                  
                  <Link 
                    to="/webinar" 
                    className="block group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                      Webinar
                    </div>
                    <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mt-1">
                      Live sesje i masterclassy
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
          >
            Kontakt
          </Link>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            {/* Light/Dark Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
              aria-label={`Przełącz na tryb ${theme === "dark" || theme === "dev" ? "jasny" : "ciemny"}`}
            >
              {theme === "dark" || theme === "dev" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Light/Dark Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-deep-charcoal dark:text-silver-mist transition-colors"
            aria-label={`Przełącz na tryb ${theme === "dark" || theme === "dev" ? "jasny" : "ciemny"}`}
          >
            {theme === "dark" || theme === "dev" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-deep-charcoal dark:text-silver-mist"
            aria-label="Menu nawigacyjne"
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
              O mnie
            </Link>
            
            {/* Mobile Możliwości Section */}
            <div className="py-2">
              <div className="font-medium text-deep-charcoal dark:text-silver-mist mb-3">
                Możliwości
              </div>
              <div className="ml-4 space-y-3">
                <Link
                  to="/program"
                  className="block text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programy
                </Link>
                <Link
                  to="/podcast"
                  className="block text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Podcasty
                </Link>
                <Link
                  to="/community"
                  className="block text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Społeczność
                </Link>
                <Link
                  to="/newsletter"
                  className="block text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <Link
                  to="/webinar"
                  className="block text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Webinar
                </Link>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
