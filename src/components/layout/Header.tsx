import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

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
            
            {/* Mega Menu Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 z-50">
                <div className="bg-luminous-white dark:bg-deep-space shadow-xl rounded-xl border border-silver-mist/20 dark:border-silver-mist/10 overflow-hidden">
                  {/* Desktop Layout - 3 columns */}
                  <div className="hidden lg:flex w-[900px]">
                    {/* Column 1: Ścieżka rozwoju */}
                    <div className="w-[280px] p-6 border-r border-silver-mist/20 dark:border-silver-mist/10">
                      <h3 className="text-sm font-semibold text-deep-charcoal/60 dark:text-silver-mist/60 uppercase tracking-wide mb-4">TWOJA ŚCIEŻKA ROZWOJU</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                          <div>
                            <Link 
                              to="/program" 
                              className="block font-medium text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors mb-1"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Wybierz kurs
                            </Link>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Programy rozwojowe i szkolenia</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                          <div>
                            <Link 
                              to="/community" 
                              className="block font-medium text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors mb-1"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Dołącz do Lifehackerów
                            </Link>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Zamknięta grupa moich Klientów</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-ascension-pink/10 dark:bg-luminal-magenta/10 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                          <div>
                            <Link 
                              to="/contact" 
                              className="block font-medium text-deep-charcoal dark:text-silver-mist hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors mb-1"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Pracuj ze mną 1:1
                            </Link>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Mentoring indywidualny</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Główna nawigacja */}
                    <div className="w-[310px] p-6 border-r border-silver-mist/20 dark:border-silver-mist/10">
                      <h3 className="text-sm font-semibold text-deep-charcoal/60 dark:text-silver-mist/60 uppercase tracking-wide mb-4">WSZYSTKIE MOŻLIWOŚCI</h3>
                      
                      <div className="space-y-3">
                        <Link 
                          to="/program" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">📚</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Programy rozwojowe</div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Kursy online i szkolenia</div>
                          </div>
                        </Link>

                        <Link 
                          to="/lifehacking-podcast" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">🎧</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Lifehacking Podcast</div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Produktywność i rozwój</div>
                          </div>
                        </Link>

                        <Link 
                          to="/uwazne-zycie" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">🧘</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors flex items-center gap-2">
                              Uważne Życie 
                              <span className="px-1.5 py-0.5 bg-ascension-pink text-luminous-white text-xs rounded font-medium">na żywo</span>
                            </div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Mindfulness i balans</div>
                          </div>
                        </Link>

                        <Link 
                          to="/community" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">👥</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Lifehackerzy</div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Społeczność</div>
                          </div>
                        </Link>

                        <Link 
                          to="/newsletter" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">📬</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Newsletter</div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Przemyślenia</div>
                          </div>
                        </Link>

                        <Link 
                          to="/webinar" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">🎥</span>
                          <div>
                            <div className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Wydarzenia na żywo</div>
                            <div className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Sesje live i masterclassy</div>
                          </div>
                        </Link>
                      </div>

                      <div className="mt-6 pt-4 border-t border-silver-mist/20 dark:border-silver-mist/10">
                        <Link 
                          to="/work" 
                          className="flex items-center justify-between p-2 text-neural-violet dark:text-luminal-magenta hover:bg-neural-violet/10 dark:hover:bg-luminal-magenta/10 rounded-lg transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="font-medium">Zobacz wszystkie możliwości</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Strefa Lifehackerów */}
                    <div className="w-[310px] p-6">
                      <h3 className="text-sm font-semibold text-deep-charcoal/60 dark:text-silver-mist/60 uppercase tracking-wide mb-4 flex items-center gap-2">
                        🔐 STREFA LIFEHACKERÓW
                      </h3>
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-4">Witaj z powrotem!</p>
                      
                      <div className="space-y-3">
                        <a 
                          href="https://portal.siadlak.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                        >
                          <span className="text-lg">🍑</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Portal Lifehackerów</span>
                        </a>
                        
                        <a 
                          href="/discord" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                        >
                          <span className="text-lg">🔢</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">12:34 Daily Coaching</span>
                        </a>
                        
                        <a 
                          href="/zasoby" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                        >
                          <span className="text-lg">💡</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Protipy</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Tablet Layout - 2 columns */}
                  <div className="hidden md:grid lg:hidden md:grid-cols-2 w-[600px]">
                    {/* Column 1: Ścieżka rozwoju */}
                    <div className="p-6 border-r border-silver-mist/20 dark:border-silver-mist/10">
                      <h3 className="text-sm font-semibold text-deep-charcoal/60 dark:text-silver-mist/60 uppercase tracking-wide mb-4">TWOJA ŚCIEŻKA</h3>
                      
                      <div className="space-y-3">
                        <Link 
                          to="/program" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-5 h-5 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Wybierz kurs</span>
                        </Link>

                        <Link 
                          to="/community" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-5 h-5 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Dołącz do społeczności</span>
                        </Link>

                        <Link 
                          to="/contact" 
                          className="flex items-center gap-3 p-2 bg-ascension-pink/10 dark:bg-luminal-magenta/10 rounded-lg hover:bg-ascension-pink/20 dark:hover:bg-luminal-magenta/20 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-5 h-5 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Pracuj ze mną 1:1</span>
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Główna nawigacja */}
                    <div className="p-6">
                      <h3 className="text-sm font-semibold text-deep-charcoal/60 dark:text-silver-mist/60 uppercase tracking-wide mb-4">MOŻLIWOŚCI</h3>
                      
                      <div className="space-y-2">
                        <Link 
                          to="/program" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">📚</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Programy</span>
                        </Link>

                        <Link 
                          to="/podcast" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">🎧</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Podcasty</span>
                        </Link>

                        <Link 
                          to="/community" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">👥</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Społeczność</span>
                        </Link>

                        <Link 
                          to="/newsletter" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">📬</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Newsletter</span>
                        </Link>

                        <Link 
                          to="/webinar" 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="text-lg">🎥</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Wydarzenia</span>
                        </Link>
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