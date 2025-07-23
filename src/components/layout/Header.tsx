
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown, Book, Headphones, Users, Mail, Video, Lock, Home, Calendar, FileText } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Hover handlers for dropdown with delay
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };
  
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
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
            >
              Możliwości
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Simplified Mega Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 z-50 w-screen max-w-[95vw]">
                <div className="bg-luminous-white dark:bg-deep-space shadow-xl rounded-xl border border-silver-mist/20 dark:border-silver-mist/10 overflow-hidden w-full">
                  {/* Desktop Layout - 3 columns, responsive width */}
                  <div className="hidden lg:flex max-w-[1060px] w-full mx-auto">
                    {/* Column 1: Twoja Ścieżka Rozwoju (280px) */}
                    <div className="flex-[280] min-w-0 p-6">
                      <div className="journey-header mb-6">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">
                          Twoja ścieżka rozwoju
                        </h3>
                        <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                          3 kroki do transformacji
                        </p>
                      </div>
                      
                      <div className="journey-steps space-y-8">
                        <div className="step-item flex items-start">
                          <div className="step-visual flex flex-col items-center mr-4">
                            <div className="step-number w-8 h-8 rounded-full bg-secondary text-deep-charcoal/70 dark:text-silver-mist/70 flex items-center justify-center text-sm font-semibold">
                              1
                            </div>
                            <div className="step-line w-0.5 h-10 mt-2 bg-gradient-to-b from-secondary to-transparent"></div>
                          </div>
                          <div className="step-content pt-1">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                              Wybierz kurs
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Programy rozwojowe i szkolenia
                            </p>
                          </div>
                        </div>

                        <div className="step-item flex items-start">
                          <div className="step-visual flex flex-col items-center mr-4">
                            <div className="step-number w-8 h-8 rounded-full bg-secondary text-deep-charcoal/70 dark:text-silver-mist/70 flex items-center justify-center text-sm font-semibold">
                              2
                            </div>
                            <div className="step-line w-0.5 h-10 mt-2 bg-gradient-to-b from-secondary to-transparent"></div>
                          </div>
                          <div className="step-content pt-1">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                              Dołącz do Lifehackerów
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Zamknięta grupa moich klientów
                            </p>
                          </div>
                        </div>

                        <div className="step-item flex items-start">
                          <div className="step-visual flex flex-col items-center mr-4">
                            <div className="step-number w-8 h-8 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink text-luminous-white flex items-center justify-center text-sm font-semibold">
                              3
                            </div>
                          </div>
                          <div className="step-content pt-1">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                              Pracuj ze mną 1:1
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Mentoring indywidualny
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Możliwości (480px) */}
                    <div className="flex-[480] min-w-0 p-6 border-l border-silver-mist/20 dark:border-silver-mist/10">
                      <div className="possibilities-header mb-6">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist">
                          Wszystkie możliwości
                        </h3>
                      </div>
                      
                      <div className="possibilities-grid space-y-2">
                        <Link 
                          to="/program" 
                          className="nav-item flex items-center p-4 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all duration-200 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="nav-icon w-10 h-10 flex items-center justify-center mr-4">
                            <Book size={20} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                          </div>
                          <div className="nav-content">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-0.5 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Programy rozwojowe
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Kursy online i szkolenia
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/podcasts" 
                          className="nav-item flex items-center p-4 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all duration-200 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="nav-icon w-10 h-10 flex items-center justify-center mr-4">
                            <Headphones size={20} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                          </div>
                          <div className="nav-content">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-0.5 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Krótkie treści
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Podcasty i 300+ vlogów
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/community" 
                          className="nav-item flex items-center p-4 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all duration-200 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="nav-icon w-10 h-10 flex items-center justify-center mr-4">
                            <Users size={20} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                          </div>
                          <div className="nav-content">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-0.5 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Ludzie
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Społeczność Lifehackerów
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/newsletter" 
                          className="nav-item flex items-center p-4 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all duration-200 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="nav-icon w-10 h-10 flex items-center justify-center mr-4">
                            <Mail size={20} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                          </div>
                          <div className="nav-content">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-0.5 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Newsletter
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Moje przemyślenia
                            </p>
                          </div>
                        </Link>

                        <Link 
                          to="/webinar" 
                          className="nav-item flex items-center p-4 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-all duration-200 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="nav-icon w-10 h-10 flex items-center justify-center mr-4">
                            <Video size={20} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                          </div>
                          <div className="nav-content">
                            <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-0.5 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Wydarzenia na żywo
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                              Sesje live i masterclassy
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Strefa Lifehackerów (280px) */}
                    <div className="flex-[280] min-w-0 p-6 border-l border-silver-mist/20 dark:border-silver-mist/10">
                      <div className="members-zone bg-gradient-to-br from-secondary/30 to-secondary/10 dark:from-secondary/20 dark:to-secondary/5 border border-silver-mist/20 dark:border-silver-mist/10 rounded-xl p-6">
                        <div className="members-header flex items-center mb-5">
                          <div className="lock-icon w-8 h-8 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-3">
                            <Lock size={16} className="text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist">
                            Strefa Lifehackerów
                          </h3>
                        </div>
                        
                        <div className="members-content">
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-4">
                            Witaj z powrotem!
                          </p>
                          
                          <div className="member-links space-y-2">
                            <a 
                              href="https://portal.siadlak.com" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="member-link flex items-center p-3 bg-luminous-white dark:bg-deep-space/80 rounded-lg border border-silver-mist/20 dark:border-silver-mist/10 hover:bg-secondary/30 dark:hover:bg-secondary/20 transition-all duration-200 group"
                            >
                              <Home size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Portal Lifehackerów
                              </span>
                            </a>
                            
                            <a 
                              href="/discord" 
                              className="member-link flex items-center p-3 bg-luminous-white dark:bg-deep-space/80 rounded-lg border border-silver-mist/20 dark:border-silver-mist/10 hover:bg-secondary/30 dark:hover:bg-secondary/20 transition-all duration-200 group"
                            >
                              <Calendar size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                12:34 Daily Coaching
                              </span>
                            </a>
                            
                            <a 
                              href="/zasoby" 
                              className="member-link flex items-center p-3 bg-luminous-white dark:bg-deep-space/80 rounded-lg border border-silver-mist/20 dark:border-silver-mist/10 hover:bg-secondary/30 dark:hover:bg-secondary/20 transition-all duration-200 group"
                            >
                              <FileText size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Protipy
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tablet Layout - 2 columns */}
                  <div className="hidden md:block lg:hidden max-w-[760px] w-full mx-auto">
                    <div className="flex">
                      {/* Column 1: Ścieżka rozwoju */}
                      <div className="flex-1 min-w-0 p-6">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-4">Twoja ścieżka</h3>
                        
                        <div className="space-y-4">
                          <Link 
                            to="/program" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">1</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Wybierz kurs</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">2</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Dołącz do społeczności</span>
                          </Link>

                          <Link 
                            to="/contact" 
                            className="flex items-center p-3 bg-ascension-pink/10 dark:bg-luminal-magenta/10 rounded-lg hover:bg-ascension-pink/20 dark:hover:bg-luminal-magenta/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">3</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Pracuj ze mną 1:1</span>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Główna nawigacja */}
                      <div className="flex-1 min-w-0 p-6 border-l border-silver-mist/20 dark:border-silver-mist/10">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-4">Możliwości</h3>
                        
                        <div className="space-y-2">
                          <Link 
                            to="/program" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Book size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Programy</span>
                          </Link>

                          <Link 
                            to="/podcasts" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Headphones size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Podcasty</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Users size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Społeczność</span>
                          </Link>

                          <Link 
                            to="/newsletter" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Mail size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Newsletter</span>
                          </Link>

                          <Link 
                            to="/webinar" 
                            className="flex items-center p-3 rounded-lg hover:bg-secondary/50 dark:hover:bg-secondary/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Video size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Wydarzenia</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  to="/podcasts"
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
