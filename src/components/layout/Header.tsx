import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Hover handlers for dropdown
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
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
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                <div className="bg-luminous-white dark:bg-deep-space shadow-xl rounded-xl border border-silver-mist/20 dark:border-silver-mist/10 overflow-hidden">
                  {/* Desktop Layout - 3 columns */}
                  <div className="hidden lg:grid lg:grid-cols-3 w-[1060px]">
                    {/* Column 1: Ścieżka rozwoju (280px) */}
                    <div className="w-[280px] p-6 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/10 dark:to-luminal-magenta/10">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">Twoja ścieżka rozwoju</h3>
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-6">3 kroki do transformacji</p>
                      
                      <div className="space-y-4">
                        {/* Step 1 */}
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Wybierz kurs</h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Rozpocznij od fundamentów (nawet jeśli <em>wydaje Ci się</em>, że je znasz)</p>
                            <Link 
                              to="/program" 
                              className="text-sm text-neural-violet dark:text-luminal-magenta hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Wybierz ścieżkę rozwoju →
                            </Link>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Dołącz do Lifehackerów</h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Najsilniej wspierającej społeczności w polskim internecie</p>
                            <Link 
                              to="/community" 
                              className="text-sm text-neural-violet dark:text-luminal-magenta hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Jak dołączyć? →
                            </Link>
                          </div>
                        </div>

                        {/* Step 3 - Featured */}
                        <div className="flex gap-3 p-3 bg-ascension-pink/10 dark:bg-luminal-magenta/10 rounded-lg border border-ascension-pink/20 dark:border-luminal-magenta/20">
                          <span className="flex-shrink-0 w-8 h-8 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Pracuj ze mną 1:1</h4>
                            <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">8 tygodni, tylko Ty i ja, rozstanie ze schematami, które tak długo Cię ograniczały</p>
                            <Link 
                              to="/contact" 
                              className="text-sm text-ascension-pink dark:text-luminal-magenta font-medium hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Aplikuj →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Główna nawigacja (500px) */}
                    <div className="w-[500px] p-6 border-l border-r border-silver-mist/20 dark:border-silver-mist/10">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-6">Wszystkie możliwości</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* Programy */}
                        <Link 
                          to="/program" 
                          className="p-4 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="text-2xl mb-2">📚</div>
                          <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors mb-1">Programy rozwojowe</h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Kursy online i szkolenia korporacyjne</p>
                          <span className="text-sm text-neural-violet dark:text-luminal-magenta">Zobacz programy</span>
                        </Link>

                        {/* Expanded - Dostępne materiały */}
                        <div className="p-4 rounded-lg border border-neural-violet/20 dark:border-luminal-magenta/20 bg-neural-violet/5 dark:bg-luminal-magenta/5 col-span-2">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="text-2xl">📡</div>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Dostępne materiały</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Podcasty i vlogi</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Link 
                              to="/lifehacking-podcast" 
                              className="flex items-center gap-3 p-2 rounded hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <span className="text-lg">🎧</span>
                              <div>
                                <div className="font-medium text-deep-charcoal dark:text-silver-mist text-sm">Lifehacking Podcast</div>
                                <div className="text-xs text-deep-charcoal/70 dark:text-silver-mist/70">Produktywność i rozwój</div>
                              </div>
                            </Link>
                            
                            <Link 
                              to="/uwazne-zycie" 
                              className="flex items-center gap-3 p-2 rounded hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <span className="text-lg">🧘</span>
                              <div>
                                <div className="font-medium text-deep-charcoal dark:text-silver-mist text-sm flex items-center gap-2">
                                  Uważne Życie 
                                  <span className="px-2 py-0.5 bg-ascension-pink text-luminous-white text-xs rounded-full">na żywo</span>
                                </div>
                                <div className="text-xs text-deep-charcoal/70 dark:text-silver-mist/70">Mindfulness i balans</div>
                              </div>
                            </Link>
                            
                            <a 
                              href="https://youtube.com/@ludwiksiadlak" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-2 rounded hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors"
                            >
                              <span className="text-lg">📹</span>
                              <div>
                                <div className="font-medium text-deep-charcoal dark:text-silver-mist text-sm">Trenerskie Życie w Obrazkach</div>
                                <div className="text-xs text-deep-charcoal/70 dark:text-silver-mist/70">300+ odcinków daily vloga</div>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* Lifehackerzy */}
                        <Link 
                          to="/community" 
                          className="p-4 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="text-2xl mb-2">👥</div>
                          <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors mb-1">Lifehackerzy</h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Bezpłatna, ekskluzywna grupa moich Klientów</p>
                          <span className="text-sm text-neural-violet dark:text-luminal-magenta">Dołącz</span>
                        </Link>

                        {/* Newsletter */}
                        <Link 
                          to="/newsletter" 
                          className="p-4 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="text-2xl mb-2">📬</div>
                          <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors mb-1">Newsletter</h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Przemyślenia</p>
                          <span className="text-sm text-neural-violet dark:text-luminal-magenta">Zapisz się</span>
                        </Link>

                        {/* Wydarzenia na żywo */}
                        <Link 
                          to="/webinar" 
                          className="p-4 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="text-2xl mb-2">🎥</div>
                          <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors mb-1">Wydarzenia na żywo (online)</h4>
                          <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-2">Sesje live i masterclassy</p>
                          <span className="text-sm text-neural-violet dark:text-luminal-magenta">Zapisz się</span>
                        </Link>

                        {/* CTA */}
                        <Link 
                          to="/work" 
                          className="col-span-2 p-4 text-center bg-neural-violet/10 dark:bg-luminal-magenta/10 rounded-lg hover:bg-neural-violet/20 dark:hover:bg-luminal-magenta/20 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="font-medium text-neural-violet dark:text-luminal-magenta">Zobacz wszystkie możliwości →</span>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Strefa Lifehackerów (280px) */}
                    <div className="w-[280px] p-6 bg-gradient-to-br from-ascension-pink/5 to-neural-violet/5 dark:from-luminal-magenta/10 dark:to-neural-violet/10">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">🔐 Strefa Lifehackerów</h3>
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-6">Witaj z powrotem!</p>
                      
                      <div className="space-y-3">
                        <a 
                          href="https://portal.siadlak.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-luminous-white/50 dark:bg-deep-space/50 hover:bg-luminous-white dark:hover:bg-deep-space transition-colors"
                        >
                          <span className="text-lg">🍑</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Portal Lifehackerów</span>
                        </a>
                        
                        <a 
                          href="/discord" 
                          className="flex items-center gap-3 p-3 rounded-lg bg-luminous-white/50 dark:bg-deep-space/50 hover:bg-luminous-white dark:hover:bg-deep-space transition-colors"
                        >
                          <span className="text-lg">🔢</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">12:34 Daily Coaching</span>
                        </a>
                        
                        <a 
                          href="/zasoby" 
                          className="flex items-center gap-3 p-3 rounded-lg bg-luminous-white/50 dark:bg-deep-space/50 hover:bg-luminous-white dark:hover:bg-deep-space transition-colors"
                        >
                          <span className="text-lg">💡</span>
                          <span className="font-medium text-deep-charcoal dark:text-silver-mist">Protipy</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Tablet Layout - 2 columns */}
                  <div className="hidden md:grid lg:hidden md:grid-cols-2 w-[700px]">
                    {/* Column 1: Ścieżka rozwoju */}
                    <div className="p-6 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/10 dark:to-luminal-magenta/10">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2">Twoja ścieżka rozwoju</h3>
                      <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70 mb-6">3 kroki do transformacji</p>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Wybierz kurs</h4>
                            <Link 
                              to="/program" 
                              className="text-sm text-neural-violet dark:text-luminal-magenta hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Wybierz ścieżkę rozwoju →
                            </Link>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-neural-violet text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Dołącz do Lifehackerów</h4>
                            <Link 
                              to="/community" 
                              className="text-sm text-neural-violet dark:text-luminal-magenta hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Jak dołączyć? →
                            </Link>
                          </div>
                        </div>

                        <div className="flex gap-3 p-3 bg-ascension-pink/10 dark:bg-luminal-magenta/10 rounded-lg border border-ascension-pink/20 dark:border-luminal-magenta/20">
                          <span className="flex-shrink-0 w-8 h-8 bg-ascension-pink text-luminous-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-deep-charcoal dark:text-silver-mist mb-1">Pracuj ze mną 1:1</h4>
                            <Link 
                              to="/contact" 
                              className="text-sm text-ascension-pink dark:text-luminal-magenta font-medium hover:underline"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Aplikuj →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Główna nawigacja - rozszerzona */}
                    <div className="p-6 border-l border-silver-mist/20 dark:border-silver-mist/10">
                      <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-6">Wszystkie możliwości</h3>
                      
                      <div className="space-y-4">
                        <Link 
                          to="/program" 
                          className="block p-3 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">📚</span>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Programy rozwojowe</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Kursy online i szkolenia</p>
                            </div>
                          </div>
                        </Link>

                        <Link 
                          to="/podcast" 
                          className="block p-3 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">🎧</span>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Podcasty</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Lifehacking i Uważne Życie</p>
                            </div>
                          </div>
                        </Link>

                        <Link 
                          to="/community" 
                          className="block p-3 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">👥</span>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Lifehackerzy</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Społeczność</p>
                            </div>
                          </div>
                        </Link>

                        <Link 
                          to="/newsletter" 
                          className="block p-3 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">📬</span>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Newsletter</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Przemyślenia</p>
                            </div>
                          </div>
                        </Link>

                        <Link 
                          to="/webinar" 
                          className="block p-3 rounded-lg hover:bg-silver-mist/10 dark:hover:bg-silver-mist/5 transition-colors group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">🎥</span>
                            <div>
                              <h4 className="font-medium text-deep-charcoal dark:text-silver-mist group-hover:text-neural-violet dark:group-hover:text-luminal-magenta transition-colors">Wydarzenia na żywo</h4>
                              <p className="text-sm text-deep-charcoal/70 dark:text-silver-mist/70">Sesje live i masterclassy</p>
                            </div>
                          </div>
                        </Link>

                        <Link 
                          to="/work" 
                          className="block p-3 text-center bg-neural-violet/10 dark:bg-luminal-magenta/10 rounded-lg hover:bg-neural-violet/20 dark:hover:bg-luminal-magenta/20 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="font-medium text-neural-violet dark:text-luminal-magenta">Zobacz wszystkie możliwości →</span>
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
