
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown, Book, Headphones, Users, Mail, Video, Lock, Home, Calendar, FileText } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Hover handlers for dropdown with delay
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
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
              <div 
                className="fixed left-0 right-0 top-full pt-3 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mx-auto max-w-[95vw] bg-white dark:bg-deep-space shadow-2xl rounded-xl border border-slate-200 dark:border-silver-mist/10 overflow-hidden">
                  {/* Desktop Layout - 3 columns, responsive width */}
                  <div className="hidden lg:flex max-w-[1060px] w-full mx-auto">
                    {/* Column 1: Twoja Ścieżka Rozwoju (280px) - Information Only */}
                    <div className="flex-[280] min-w-0 p-4">
                      <div className="journey-header mb-4">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">
                          Twoja ścieżka rozwoju
                        </h3>
                        <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                          3 kroki do transformacji
                        </p>
                      </div>
                      
                      <div className="journey-steps space-y-6">
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

                    {/* Column 2: Możliwości Cards (480px) */}
                    <div className="flex-[480] min-w-0 p-8 border-l border-slate-200 dark:border-silver-mist/10">
                      <div className="possibilities-header mb-8">
                        <h3 className="text-xl font-semibold text-deep-charcoal dark:text-silver-mist">
                          Wszystkie możliwości
                        </h3>
                      </div>
                      
                      <div className="possibilities-grid space-y-3">
                        {/* Full Width Cards */}
                        <Link 
                          to="/program" 
                          className="nav-card block p-4 bg-slate-50 dark:bg-secondary/20 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
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
                          </div>
                        </Link>

                        <Link 
                          to="/webinar" 
                          className="nav-card block p-4 bg-slate-50 dark:bg-secondary/20 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
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
                          </div>
                        </Link>

                        <Link 
                          to="/community" 
                          className="nav-card block p-4 bg-slate-50 dark:bg-secondary/20 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
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
                          </div>
                        </Link>

                        {/* 50% Width Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          <Link 
                            to="/podcasts" 
                            className="nav-card block p-3 bg-slate-50 dark:bg-secondary/20 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="text-center">
                              <div className="nav-icon w-8 h-8 flex items-center justify-center mx-auto mb-2">
                                <Headphones size={18} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                              </div>
                              <h4 className="text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Krótkie treści
                              </h4>
                              <p className="text-xs text-deep-charcoal/70 dark:text-silver-mist/70">
                                Podcasty i vlogi
                              </p>
                            </div>
                          </Link>

                          <Link 
                            to="/newsletter" 
                            className="nav-card block p-3 bg-slate-50 dark:bg-secondary/20 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="text-center">
                              <div className="nav-icon w-8 h-8 flex items-center justify-center mx-auto mb-2">
                                <Mail size={18} className="text-deep-charcoal/70 dark:text-silver-mist/70" />
                              </div>
                              <h4 className="text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Newsletter
                              </h4>
                              <p className="text-xs text-deep-charcoal/70 dark:text-silver-mist/70">
                                Moje przemyślenia
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Strefa Lifehackerów (280px) - Different Background */}
                    <div className="flex-[280] min-w-0 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neural-violet/10 dark:to-ascension-pink/10 border-l border-slate-200 dark:border-silver-mist/10">
                      <div className="members-zone">
                        <div className="members-header flex items-center mb-4">
                          <div className="lock-icon w-8 h-8 flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 rounded-lg mr-3 border border-amber-200 dark:border-amber-700">
                            <Lock size={16} className="text-amber-700 dark:text-amber-400" />
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
                              className="member-link flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            >
                              <Home size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Portal Lifehackerów
                              </span>
                            </a>
                            
                            <a 
                              href="/discord" 
                              className="member-link flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            >
                              <Calendar size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                12:34 Daily Coaching
                              </span>
                            </a>
                            
                            <a 
                              href="/zasoby" 
                              className="member-link flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            >
                              <FileText size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Protipy
                              </span>
                            </a> 
                            <a 
                              href="/zasoby" 
                              className="member-link flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            >
                              <FileText size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                              <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                                Protipy
                              </span>
                            </a> 
                            <a 
                              href="/zasoby" 
                              className="member-link flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
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
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">1</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Wybierz kurs</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">2</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Dołącz do społeczności</span>
                          </Link>

                          <Link 
                            to="/contact" 
                            className="flex items-center p-3 bg-gradient-to-r from-ascension-pink/10 to-neural-violet/5 dark:from-luminal-magenta/10 dark:to-neural-violet/10 rounded-lg hover:from-ascension-pink/20 hover:to-neural-violet/10 dark:hover:from-luminal-magenta/20 dark:hover:to-neural-violet/20 transition-colors border border-ascension-pink/20 dark:border-luminal-magenta/20 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="w-6 h-6 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">3</span>
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Pracuj ze mną 1:1</span>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Główna nawigacja */}
                      <div className="flex-1 min-w-0 p-6 border-l border-slate-200 dark:border-silver-mist/10">
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-4">Możliwości</h3>
                        
                        <div className="space-y-2">
                          <Link 
                            to="/program" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Book size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Programy</span>
                          </Link>

                          <Link 
                            to="/podcasts" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Headphones size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Podcasty</span>
                          </Link>

                          <Link 
                            to="/community" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Users size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Społeczność</span>
                          </Link>

                          <Link 
                            to="/newsletter" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Mail size={18} className="mr-3 text-deep-charcoal/70 dark:text-silver-mist/70" />
                            <span className="font-medium text-deep-charcoal dark:text-silver-mist">Newsletter</span>
                          </Link>

                          <Link 
                            to="/webinar" 
                            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-secondary/20 hover:bg-slate-100 dark:hover:bg-secondary/30 transition-colors border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
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
