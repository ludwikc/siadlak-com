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
  
  // Scroll and escape handlers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            
            {/* Asana-style Mega Menu - Almost Fullscreen */}
            {isDropdownOpen && (
              <div className="fixed inset-x-0 top-full z-50 pt-1">
                <div className="bg-luminous-white dark:bg-deep-space shadow-xl border-t border-slate-200 dark:border-slate-700 min-h-[90vh] overflow-y-auto">
                  {/* Desktop Layout - Almost Fullscreen */}
                  <div className="hidden lg:block max-w-7xl mx-auto px-12 py-16">
                    <div className="grid grid-cols-3 gap-20">
                      {/* Column 1: Twoja Ścieżka */}
                      <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                            TWOJA ŚCIEŻKA
                          </h3>
                          <p className="text-base text-slate-600 dark:text-slate-300">
                            3 kroki do transformacji
                          </p>
                        </div>
                        
                        <div className="space-y-8">
                          <div className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center text-base font-medium">
                                1
                              </div>
                              <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-600 mt-3"></div>
                            </div>
                            <div className="pt-2">
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                                Wybierz kurs
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Programy rozwojowe i szkolenia
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center text-base font-medium">
                                2
                              </div>
                              <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-600 mt-3"></div>
                            </div>
                            <div className="pt-2">
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                                Dołącz do Lifehackerów
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Zamknięta grupa moich klientów
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neural-violet to-ascension-pink text-luminous-white flex items-center justify-center text-base font-medium">
                                3
                              </div>
                            </div>
                            <div className="pt-2">
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                                Pracuj ze mną 1:1
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Mentoring indywidualny
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Wszystkie Możliwości */}
                      <div className="p-8">
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                            WSZYSTKIE MOŻLIWOŚCI
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <Link 
                            to="/program" 
                            className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="w-12 h-12 flex items-center justify-center mr-4">
                              <Book size={22} className="text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                                Programy rozwojowe
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Kursy online i szkolenia
                              </p>
                            </div>
                          </Link>

                          <Link 
                            to="/podcasts" 
                            className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="w-12 h-12 flex items-center justify-center mr-4">
                              <Headphones size={22} className="text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                                Krótkie treści
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Podcasty i 300+ vlogów
                              </p>
                            </div>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="w-12 h-12 flex items-center justify-center mr-4">
                              <Users size={22} className="text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                                Ludzie
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Społeczność Lifehackerów
                              </p>
                            </div>
                          </Link>

                          <Link 
                            to="/newsletter" 
                            className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="w-12 h-12 flex items-center justify-center mr-4">
                              <Mail size={22} className="text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                                Newsletter
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Moje przemyślenia
                              </p>
                            </div>
                          </Link>

                          <Link 
                            to="/webinar" 
                            className="flex items-center p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="w-12 h-12 flex items-center justify-center mr-4">
                              <Video size={22} className="text-slate-500 dark:text-slate-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                                Wydarzenia na żywo
                              </h4>
                              <p className="text-base text-slate-600 dark:text-slate-400">
                                Sesje live i masterclassy
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Strefa Lifehackerów */}
                      <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                            STREFA LIFEHACKERÓW
                          </h3>
                        </div>
                        
                        <div className="bg-luminous-white dark:bg-deep-space border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                          <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
                              <Lock size={18} className="text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                                Dla członków
                              </h4>
                            </div>
                          </div>
                          
                          <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
                            Witaj z powrotem!
                          </p>
                          
                          <div className="space-y-3">
                            <a 
                              href="https://portal.siadlak.com" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                              <Home size={18} className="text-slate-500 dark:text-slate-400 mr-3" />
                              <span className="text-slate-700 dark:text-slate-300">Portal Lifehackerów</span>
                            </a>
                            
                            <a 
                              href="/discord" 
                              className="flex items-center p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                              <Calendar size={18} className="text-slate-500 dark:text-slate-400 mr-3" />
                              <span className="text-slate-700 dark:text-slate-300">12:34 Daily Coaching</span>
                            </a>
                            
                            <a 
                              href="/zasoby" 
                              className="flex items-center p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                              <FileText size={18} className="text-slate-500 dark:text-slate-400 mr-3" />
                              <span className="text-slate-700 dark:text-slate-300">Protipy</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tablet Layout */}
                  <div className="hidden md:block lg:hidden w-[700px]">
                    <div className="flex">
                      <div className="w-[350px] p-6">
                        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                          TWOJA ŚCIEŻKA
                        </h3>
                        
                        <div className="space-y-3">
                          <Link 
                            to="/program" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center text-xs font-medium mr-3">1</span>
                            <span className="font-medium text-slate-900 dark:text-slate-100">Wybierz kurs</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center text-xs font-medium mr-3">2</span>
                            <span className="font-medium text-slate-900 dark:text-slate-100">Dołącz do społeczności</span>
                          </Link>

                          <Link 
                            to="/contact" 
                            className="flex items-center p-3 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 rounded-lg hover:from-neural-violet/20 hover:to-ascension-pink/20 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-gradient-to-r from-neural-violet to-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-xs font-medium mr-3">3</span>
                            <span className="font-medium text-slate-900 dark:text-slate-100">Pracuj ze mną 1:1</span>
                          </Link>
                        </div>
                      </div>

                      <div className="w-[350px] p-6 border-l border-slate-200 dark:border-slate-700">
                        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                          MOŻLIWOŚCI
                        </h3>
                        
                        <div className="space-y-1">
                          <Link 
                            to="/program" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Book size={16} className="mr-3 text-slate-500 dark:text-slate-400" />
                            <span className="font-medium text-slate-900 dark:text-slate-100">Programy</span>
                          </Link>

                          <Link 
                            to="/podcasts" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Headphones size={16} className="mr-3 text-slate-500 dark:text-slate-400" />
                            <span className="font-medium text-slate-900 dark:text-slate-100">Podcasty</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Users size={16} className="mr-3 text-slate-500 dark:text-slate-400" />
                            <span className="font-medium text-slate-900 dark:text-slate-100">Społeczność</span>
                          </Link>

                          <Link 
                            to="/newsletter" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Mail size={16} className="mr-3 text-slate-500 dark:text-slate-400" />
                            <span className="font-medium text-slate-900 dark:text-slate-100">Newsletter</span>
                          </Link>

                          <Link 
                            to="/webinar" 
                            className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Video size={16} className="mr-3 text-slate-500 dark:text-slate-400" />
                            <span className="font-medium text-slate-900 dark:text-slate-100">Wydarzenia</span>
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
