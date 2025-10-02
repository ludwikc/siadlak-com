import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Book,
  Headphones,
  Users,
  Mail,
  Video,
  Lock,
  Home,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Refs for dropdown management
  const dropdownRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
    }, 150);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      (dropdownRef.current && dropdownRef.current.contains(target)) ||
      (overlayRef.current && overlayRef.current.contains(target))
    ) {
      return; // click inside menu or overlay content, do nothing
    }
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
          ? "bg-luminous-white shadow-md py-2"
          : "bg-luminous-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-heading text-neural-violet bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent">
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
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Możliwości
              <ChevronDown
                size={16}
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""} group-hover:rotate-180`}
              />
            </button>
          </div>

          <Link
            to="/contact"
            className="text-deep-charcoal hover:text-neural-violet transition-colors"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-deep-charcoal"
            aria-label="Menu nawigacyjne"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Navigation Popup */}
      <div
        className={`${isDropdownOpen ? "block" : "hidden"} group-hover:block fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm animate-fade-in`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div
            ref={overlayRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in"
            onMouseEnter={handleMouseEnter}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-200 bg-gradient-to-r from-quantum-blue/5 to-white">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep-charcoal">
                  Wszystkie możliwości
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[hsl(45,95%,60%)] to-[#DA1EAE] rounded-full mt-2"></div>
              </div>
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 transition-all hover:scale-110"
                aria-label="Zamknij menu"
              >
                <X size={24} className="text-deep-charcoal" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Column 1: Twoja Ścieżka Rozwoju */}
                <div className="lg:col-span-1">
                  <div className="mb-6 p-4 bg-gradient-to-br from-quantum-blue/5 to-neural-violet/5 rounded-xl border border-quantum-blue/20">
                    <h3 className="text-lg font-bold text-deep-charcoal mb-2 flex items-center gap-2">
                      <span className="text-xl">🎯</span>
                      <span>Twoja ścieżka rozwoju</span>
                    </h3>
                    <p className="text-sm text-deep-charcoal/70">
                      3 kroki do transformacji
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-quantum-blue/20 to-quantum-blue/10 text-quantum-blue flex items-center justify-center text-base font-bold group-hover:scale-110 transition-transform">
                          1
                        </div>
                        <div className="w-0.5 h-12 mt-2 bg-gradient-to-b from-quantum-blue/30 to-transparent"></div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                          Wybierz program dla siebie
                        </h4>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                          Zrób to{" "}
                          <strong className="text-quantum-blue">teraz</strong> -
                          wiesz czego potrzebujesz. Podejmij decyzję.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-quantum-blue/30 to-quantum-blue/15 text-quantum-blue flex items-center justify-center text-base font-bold group-hover:scale-110 transition-transform">
                          2
                        </div>
                        <div className="w-0.5 h-12 mt-2 bg-gradient-to-b from-quantum-blue/40 to-transparent"></div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                          Dołącz do Lifehackerów
                        </h4>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                          Dostęp LIFETIME otrzymasz{" "}
                          <strong className="text-quantum-blue">
                            jeszcze dzisiaj
                          </strong>
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(45,95%,60%)] to-[#DA1EAE] text-white flex items-center justify-center text-base font-bold shadow-lg group-hover:scale-110 transition-transform">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-deep-charcoal mb-1 group-hover:bg-gradient-to-r group-hover:from-[hsl(45,95%,60%)] group-hover:to-[#DA1EAE] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          Pracuj ze mną 1:1
                        </h4>
                        <p className="text-sm text-deep-charcoal/70 leading-relaxed">
                          Towarzyszę Lifehackerom codziennie.{" "}
                          <strong className="text-[hsl(45,95%,60%)]">
                            Bez wyjątków.
                          </strong>{" "}
                          Dołącz do nas i działamy.
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
                      className="md:col-span-2 block p-5 bg-gradient-to-br from-[hsl(45,95%,60%)]/5 to-[hsl(45,95%,60%)]/10 rounded-xl hover:shadow-2xl hover:shadow-[hsl(45,95%,60%)]/20 transition-all duration-200 group border-2 border-[hsl(45,95%,60%)]/30 hover:border-[hsl(45,95%,60%)]/60 relative overflow-hidden min-h-[120px] hover:-translate-y-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[hsl(45,95%,60%)] to-[#DA1EAE] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                        <span>⭐</span>
                        <span>Tu chcesz zacząć</span>
                      </div>
                      <div className="flex items-stretch justify-between pt-8 h-full">
                        <div className="flex items-center flex-1">
                          <div className="w-14 h-14 flex items-center justify-center mr-4 bg-gradient-to-br from-[hsl(45,95%,60%)] to-[#DA1EAE] rounded-xl shadow-md group-hover:scale-110 transition-transform">
                            <Book size={28} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-deep-charcoal mb-1 group-hover:bg-gradient-to-r group-hover:from-[hsl(45,95%,60%)] group-hover:to-[#DA1EAE] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                              Programy rozwojowe
                            </h4>
                            <p className="text-sm text-deep-charcoal/70">
                              Kursy online i szkolenia
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center ml-4 flex-shrink-0">
                          <img
                            src="/lovable-uploads/b2282be8-5d99-4b31-a63c-8760647510ae.png"
                            alt="Programy rozwojowe - podgląd na różnych urządzeniach"
                            className="h-full max-h-24 w-auto group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/webinar"
                      className="md:col-span-2 block p-5 bg-gradient-to-br from-[#DA1EAE]/5 to-[#DA1EAE]/10 rounded-xl hover:shadow-2xl hover:shadow-[#DA1EAE]/20 transition-all duration-200 group border-2 border-[#DA1EAE]/30 hover:border-[#DA1EAE]/60 relative overflow-hidden hover:-translate-y-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#DA1EAE] to-luminal-magenta text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md animate-pulse flex items-center gap-1">
                        <span>🔥</span>
                        <span>Liczba miejsc ograniczona</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-14 h-14 flex items-center justify-center mr-4 bg-gradient-to-br from-[#DA1EAE] to-luminal-magenta rounded-xl shadow-md group-hover:scale-110 transition-transform">
                          <Video size={28} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-deep-charcoal mb-1 group-hover:text-[#DA1EAE] transition-colors">
                            Wydarzenia na żywo
                          </h4>
                          <p className="text-sm text-deep-charcoal/70">
                            Sesje live i masterclassy
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Regular Cards */}
                    <a
                      href="https://uwaznezycie.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-200 group border border-slate-200 hover:border-quantum-blue/50 hover:-translate-y-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex items-center justify-center mr-3 bg-gradient-to-br from-quantum-blue/10 to-quantum-blue/5 rounded-lg group-hover:scale-110 transition-transform">
                          <Users size={22} className="text-quantum-blue" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                            Medytacje na żywo
                          </h4>
                          <p className="text-sm text-deep-charcoal/70">
                            Każdy wtorek o 6:30
                          </p>
                        </div>
                      </div>
                    </a>

                    <Link
                      to="/podcast"
                      className="block p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-200 group border border-slate-200 hover:border-quantum-blue/50 hover:-translate-y-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex items-center justify-center mr-3 bg-gradient-to-br from-quantum-blue/10 to-quantum-blue/5 rounded-lg group-hover:scale-110 transition-transform">
                          <Headphones size={22} className="text-quantum-blue" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                            Podcast
                          </h4>
                          <p className="text-sm text-deep-charcoal/70">
                            Słuchaj i ucz się
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/newsletter"
                      className="block p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-200 group border border-slate-200 hover:border-quantum-blue/50 hover:-translate-y-1"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex items-center justify-center mr-3 bg-gradient-to-br from-quantum-blue/10 to-quantum-blue/5 rounded-lg group-hover:scale-110 transition-transform">
                          <Mail size={22} className="text-quantum-blue" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                            Newsletter
                          </h4>
                          <p className="text-sm text-deep-charcoal/70">
                            Cotygodniowe tipy
                          </p>
                        </div>
                      </div>
                    </Link>

                    <a
                      href="https://youtube.com/@ludwikcsiadlak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-200 group border border-slate-200 hover:border-quantum-blue/50 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex items-center justify-center mr-3 bg-gradient-to-br from-quantum-blue/10 to-quantum-blue/5 rounded-lg group-hover:scale-110 transition-transform">
                          <Video size={22} className="text-quantum-blue" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-deep-charcoal mb-1 group-hover:text-quantum-blue transition-colors">
                            YouTube
                          </h4>
                          <p className="text-sm text-deep-charcoal/70">
                            Video content
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Members Zone */}
                  <div className="mt-8 p-6 bg-gradient-to-br from-amber-50/50 to-[hsl(45,95%,60%)]/10 rounded-xl border-2 border-[hsl(45,95%,60%)]/30 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[hsl(45,95%,60%)] to-amber-300 rounded-lg mr-3 border-2 border-[hsl(45,95%,60%)]/50 shadow-sm">
                        <Lock size={18} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-deep-charcoal">
                        Strefa Lifehackerów
                      </h3>
                    </div>

                    <p className="text-sm text-deep-charcoal/80 mb-4 font-medium">
                      🎉 Witaj z powrotem!
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <a
                        href="https://portal.siadlak.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group border border-amber-200 hover:border-[hsl(45,95%,60%)] hover:-translate-y-0.5"
                      >
                        <Home
                          size={18}
                          className="text-amber-700 group-hover:text-[hsl(45,95%,60%)] mr-3 transition-colors"
                        />
                        <span className="text-sm font-semibold text-deep-charcoal group-hover:text-[hsl(45,95%,60%)] transition-colors">
                          Portal Lifehackerów
                        </span>
                      </a>

                      <a
                        href="/discord"
                        className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group border border-amber-200 hover:border-[hsl(45,95%,60%)] hover:-translate-y-0.5"
                      >
                        <Calendar
                          size={18}
                          className="text-amber-700 group-hover:text-[hsl(45,95%,60%)] mr-3 transition-colors"
                        />
                        <span className="text-sm font-semibold text-deep-charcoal group-hover:text-[hsl(45,95%,60%)] transition-colors">
                          12:34 Daily Coaching
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                    <Link
                      to="/work"
                      className="inline-flex items-center text-sm font-medium text-deep-charcoal/70 hover:bg-gradient-to-r hover:from-[hsl(45,95%,60%)] hover:to-[#DA1EAE] hover:bg-clip-text hover:text-transparent transition-all group px-4 py-2 rounded-lg hover:bg-slate-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Zobacz wszystkie możliwości
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform text-base">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-luminous-white shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-deep-charcoal hover:text-neural-violet transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              O mnie
            </Link>

            {/* Mobile Możliwości Section */}
            <div className="py-2">
              <div className="font-medium text-deep-charcoal mb-3">
                Możliwości
              </div>
              <div className="ml-4 space-y-3">
                <Link
                  to="/program"
                  className="block text-deep-charcoal/70 hover:text-neural-violet transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programy
                </Link>
                <Link
                  to="/podcast"
                  className="block text-deep-charcoal/70 hover:text-neural-violet transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Podcasty
                </Link>
                <a
                  href="https://lifehackerzy.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-deep-charcoal/70 hover:text-neural-violet transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Społeczność
                  <ExternalLink size={14} />
                </a>
                <Link
                  to="/newsletter"
                  className="block text-deep-charcoal/70 hover:text-neural-violet transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <Link
                  to="/webinar"
                  className="block text-deep-charcoal/70 hover:text-neural-violet transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Webinar
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-deep-charcoal hover:text-neural-violet transition-colors py-2"
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
