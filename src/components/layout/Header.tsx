import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Badge } from "../ui/badge";

const dropdownItems: { label: string; desc?: string; to: string }[] = [
  { label: "Aplikacje Mentalne", desc: "Kursy i szkolenia", to: "/program" },
  { label: "Praca 1:1", desc: "Mentoring", to: "/mentoring" },
  { label: "Setki Opinii Klientów", to: "/testimonials" },
  { label: "Moja historia", to: "/about" },
  { label: "Kontakt", to: "/contact" },
];

const moreItems: { label: string; desc?: string; to: string; external?: boolean }[] = [
  { label: "Wywiady", desc: "Media o mnie", to: "/wywiady" },
  { label: "O mnie", desc: "Moja historia", to: "/about" },
  { label: "SIADLAK.VIP", desc: "Prywatna grupa Telegram", to: "/siadlakvip" },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };


  return (
    <nav className="fixed top-9 w-full z-50 bg-void/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-white font-heading font-bold tracking-widest uppercase text-sm">
          LCS <span className="text-electric">/</span> Upgrade
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Webinar */}
          <Link
            to="/webinar"
            className="text-white text-xs font-bold uppercase tracking-widest hover:text-electric transition-colors flex items-center gap-2"
          >
            Webinar
            <Badge className="bg-electric/90 text-white border-0 text-[10px] px-1.5 py-0 leading-tight uppercase tracking-wider animate-pulse">
              wkrótce
            </Badge>
          </Link>

          {/* Pracuj ze mną – dropdown */}
          <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="text-white text-xs font-bold uppercase tracking-widest hover:text-electric transition-colors flex items-center gap-1"
            >
              Pracuj ze mną
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-void-black border border-white/10 rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                <Link
                  to="/start"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-bold text-electric hover:text-white hover:bg-white/5 transition-colors"
                >
                  Zacznij tutaj →
                </Link>
                <div className="border-t border-white/10 my-1" />
                {dropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                    {item.desc && <span className="block text-[11px] text-white/40 mt-0.5">{item.desc}</span>}
                  </Link>
                ))}
                <div className="border-t border-white/10 my-1" />
                <Link
                  to="/start"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Wszystkie możliwości →
                </Link>
              </div>
            )}
          </div>

          {/* Aplikuj CTA */}
          <Link
            to="/discovery"
            className="text-void bg-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded hover:bg-white/90 transition-colors"
          >
            Aplikuj
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden text-white p-1" aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-void/95 backdrop-blur-lg border-t border-white/5 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            <Link
              to="/webinar"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest py-2"
            >
              Webinar
              <Badge className="bg-electric/90 text-white border-0 text-[10px] px-1.5 py-0 uppercase tracking-wider animate-pulse">
                wkrótce
              </Badge>
            </Link>

            <div className="text-white/40 text-[10px] uppercase tracking-widest pt-2">Pracuj ze mną</div>
            <Link
              to="/start"
              onClick={() => setMobileOpen(false)}
              className="block text-electric text-sm font-bold py-1.5 pl-3 border-l border-electric/30 hover:text-white transition-colors"
            >
              Zacznij tutaj →
            </Link>
            <div className="border-t border-white/10 my-1" />
            {dropdownItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 text-sm py-1.5 pl-3 border-l border-white/10 hover:text-white transition-colors"
              >
                {item.label}
                {item.desc && <span className="block text-[11px] text-white/40 mt-0.5">{item.desc}</span>}
              </Link>
            ))}
            <div className="border-t border-white/10 my-1" />
            <Link
              to="/start"
              onClick={() => setMobileOpen(false)}
              className="block text-white/50 text-sm py-1.5 pl-3 border-l border-white/10 hover:text-white transition-colors"
            >
              Wszystkie możliwości →
            </Link>

            <Link
              to="/discovery"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-void bg-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded mt-3"
            >
              Aplikuj
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
