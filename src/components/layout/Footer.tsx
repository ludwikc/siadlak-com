import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, ExternalLink, Calendar } from "lucide-react";
import XIcon from "@/design-system/components/x-icon";

const linkClasses =
  "text-white/80 hover:text-electric transition-colors duration-150 ease-out inline-block " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-void text-white pt-20 pb-8 overflow-hidden"
      style={{ backgroundImage: "var(--glow-gradient)" }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-md p-6 border border-white/20 hover:bg-white/15 transition-all duration-150 ease-out">
              <Link to="/" className={`${linkClasses} mb-4`}>
                <h3 className="text-2xl font-bold text-white">Ludwik&nbsp;C. Siadlak</h3>
              </Link>
              <p className="text-white/90 text-sm leading-relaxed">
                <span className="font-bold">Life Hacker. </span>
                <br />
                <br />
                Uzbrajam wojowników. <br />
                Prowadzę poszukiwaczy.
                <br /> <br /> Na co czekasz?
                <br />
                <Link to="/discovery" className="font-bold underline text-white hover:text-electric transition-colors">
                  Umów się ze mną.
                </Link>
              </p>
            </div>
            <div className="flex space-x-3">
              {[
                { href: "https://instagram.com/ludwikc", icon: Instagram, label: "Instagram" },
                { href: "https://twitter.com/ludwikc", icon: XIcon, label: "X (formerly Twitter)" },
                { href: "https://linkedin.com/in/ludwikc", icon: Linkedin, label: "LinkedIn" },
                { href: "https://youtube.com/ludwikcsiadlak", icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                  aria-label={label}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Odkryj */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">Odkryj</h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-electric to-depth rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li><Link to="/about" className={linkClasses}>O mnie</Link></li>
              <li>
                <Link
                  to="/discovery"
                  className="text-electric hover:text-electric/80 transition-colors duration-150 inline-flex items-center gap-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
                >
                  Sesja Discovery
                  <Calendar size={16} className="flex-shrink-0" />
                </Link>
              </li>
              <li><Link to="/newsletter" className={linkClasses}>Newsletter</Link></li>
              <li><Link to="/testimonials" className={linkClasses}>Opinie Klientów (120+)</Link></li>
              <li><Link to="/webinar" className={linkClasses}>Najbliższy Webinar</Link></li>
              <li><Link to="/siadlakvip" className={linkClasses}>SIADLAK.VIP Telegram</Link></li>
              <li><Link to="/contact" className={linkClasses}>Kontakt</Link></li>
            </ul>
          </div>

          {/* Programy */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">Programy</h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-electric to-depth rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/mentoring"
                  className="text-white hover:text-electric transition-colors duration-150 inline-flex items-center gap-2 font-semibold group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
                >
                  <span className="inline-block w-2 h-2 bg-gradient-to-br from-electric to-depth rounded-full"></span>
                  Mentoring 1:1
                </Link>
              </li>
              <li><Link to="/program/produktywnosc" className={linkClasses}>Instaluj: Produktywność</Link></li>
              <li><Link to="/program/odpornosc" className={linkClasses}>Instaluj: Odporność Psychiczna</Link></li>
              <li className="pt-2 mt-2 border-t border-white/10">
                <Link
                  to="/program"
                  className="text-white/60 hover:text-electric transition-colors duration-150 inline-flex items-center gap-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
                >
                  Zobacz wszystkie programy
                  <ExternalLink size={12} className="rotate-[-45deg]" />
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 text-white mt-8">Projekty</h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-electric to-depth rounded-full mb-4"></div>
            <ul className="space-y-3">
              {[
                { href: "https://fundacja.hackerzy.pl", label: "Fundacja HACKERZY.PL" },
                { href: "https://deepwork.pl", label: "DeepWork.pl" },
                { href: "https://uwaznezycie.pl", label: "UwazneZycie.pl" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-electric transition-colors duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
                  >
                    {label}
                    <ExternalLink size={14} className="flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; {currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/legal" className="text-sm text-white/60 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm">Informacje Prawne</Link>
            <Link to="/legal/privacy" className="text-sm text-white/60 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm">Polityka Prywatności</Link>
            <Link to="/legal/terms" className="text-sm text-white/60 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
