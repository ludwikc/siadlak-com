
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown, Book, Headphones, Users, Mail, Video, Lock, Home, Calendar } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Refs for dropdown management
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside and escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          <div className="relative" ref={dropdownRef}>
            <button
              className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Możliwości
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
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

      {/* Full-Screen Navigation Popup */}
      {isDropdownOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white dark:bg-deep-space rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-silver-mist/10">
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Wszystkie możliwości
                </h2>
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-secondary/20 transition-colors"
                  aria-label="Zamknij menu"
                >
                  <X size={24} className="text-deep-charcoal dark:text-silver-mist" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Column 1: Twoja Ścieżka Rozwoju */}
                  <div className="lg:col-span-1">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">
                        Twoja ścieżka rozwoju
                      </h3>
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                        3 kroki do transformacji
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 rounded-full bg-secondary text-deep-charcoal/70 dark:text-silver-mist/70 flex items-center justify-center text-sm font-semibold">
                            1
                          </div>
                          <div className="w-0.5 h-10 mt-2 bg-gradient-to-b from-deep-charcoal/50 dark:from-silver-mist/60 to-transparent"></div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                            Wybierz kurs
                          </h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                            Zrób to <strong>teraz</strong> - wiesz czego potrzebujesz. Podejmij decyzję.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 rounded-full bg-secondary text-deep-charcoal/70 dark:text-silver-mist/70 flex items-center justify-center text-sm font-semibold">
                            2
                          </div>
                          <div className="w-0.5 h-10 mt-2 bg-gradient-to-b from-deep-charcoal/50 dark:from-silver-mist/60 to-transparent"></div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                            Dołącz do Lifehackerów
                          </h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                            Dostęp LIFETIME otrzymasz <strong>jeszcze dzisiaj</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink text-luminous-white flex items-center justify-center text-sm font-semibold">
                            3
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                            Pracuj ze mną 1:1
                          </h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 leading-relaxed">
                            Towarzyszę Lifehackerom codziennie. Bez wyjątków. Dołącz do nas i działamy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Main Navigation */}
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Featured Cards */}
                      <Link 
                        to="/program" 
                        className="md:col-span-2 block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md relative overflow-hidden"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
                          Tu chcesz zacząć ⤵
                        </div>
                        <div className="flex items-center pt-8">
                          <div className="w-12 h-12 flex items-center justify-center mr-4 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Book size={24} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Programy rozwojowe
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Kursy online i szkolenia
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/webinar" 
                        className="md:col-span-2 block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md relative overflow-hidden"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-sm animate-pulse">
                          Liczba miejsc ograniczona
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 flex items-center justify-center mr-4 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Video size={24} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Wydarzenia na żywo
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Sesje live i masterclassy
                            </p>
                          </div>
                        </div>
                      </Link>

                      {/* Regular Cards */}
                      <Link 
                        to="/community" 
                        className="block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Users size={20} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Medytacje na żywo
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Każdy wtorek o 6:30
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/podcast" 
                        className="block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Headphones size={20} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Podcast
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Słuchaj i ucz się
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/newsletter" 
                        className="block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Mail size={20} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              Newsletter
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Cotygodniowe tipy
                            </p>
                          </div>
                        </div>
                      </Link>

                      <a 
                        href="https://youtube.com/@siadlak" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-slate-50 dark:bg-secondary/20 rounded-xl hover:bg-slate-100 dark:hover:bg-secondary/30 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white dark:bg-deep-space rounded-lg shadow-sm">
                            <Video size={20} className="text-neural-violet" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-deep-charcoal dark:text-silver-mist mb-1 group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                              YouTube
                            </h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">
                              Video content
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Members Zone */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neural-violet/10 dark:to-ascension-pink/10 rounded-xl border border-slate-200 dark:border-silver-mist/10">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 rounded-lg mr-3 border border-amber-200 dark:border-amber-700">
                          <Lock size={16} className="text-amber-700 dark:text-amber-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist">
                          Strefa Lifehackerów
                        </h3>
                      </div>
                      
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-4">
                        Witaj z powrotem!
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        <a 
                          href="https://portal.siadlak.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                        >
                          <Home size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                          <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                            Portal Lifehackerów
                          </span>
                        </a>
                        
                        <a 
                          href="/discord" 
                          className="flex items-center p-3 bg-white dark:bg-deep-space/80 rounded-lg hover:bg-slate-100 dark:hover:bg-secondary/20 transition-all duration-200 group border border-slate-200 dark:border-silver-mist/10 shadow-sm hover:shadow-md"
                        >
                          <Calendar size={16} className="text-deep-charcoal/70 dark:text-silver-mist/70 mr-3" />
                          <span className="text-sm font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">
                            12:34 Daily Coaching
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-silver-mist/10 text-center">
                      <Link 
                        to="/work" 
                        className="inline-flex items-center text-sm text-deep-charcoal/70 dark:text-silver-mist/70 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors group"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Zobacz wszystkie możliwości
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
