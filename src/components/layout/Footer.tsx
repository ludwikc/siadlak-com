import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, ExternalLink, Calendar } from "lucide-react";
import XIcon from "@/design-system/components/x-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-void bg-void-glow text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-electric/50 to-depth rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-depth to-electric rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-md p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Link to="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded">
                <h3 className="text-2xl font-bold text-white">Ludwik&nbsp;C. Siadlak</h3>
              </Link>
              <p className="text-dim text-sm leading-relaxed">
                <span className="font-bold">Life Hacker. </span>
                <br />
                <br />
                Uzbrajam wojowników. <br />
                Prowadzę poszukiwaczy.
                <br /> <br /> Na co czekasz?
                <br />
                <Link to="/discovery" className="font-bold underline text-white hover:text-electric transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded">
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
                  className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
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
              <li>
                <Link
                  to="/about"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  to="/discovery"
                 
                  className="text-electric hover:text-electric/80 transition-colors inline-flex items-center gap-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Sesja Discovery
                  <Calendar size={16} className="flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Opinie Klientów (120+)
                </Link>
              </li>
              <li>
                <Link
                  to="/webinar"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Najbliższy Webinar
                </Link>
              </li>
              <li>
                <Link
                  to="/siadlakvip"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  SIADLAK.VIP Telegram
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Kontakt
                </Link>
              </li>
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
                 
                  className="text-white hover:text-electric transition-colors inline-flex items-center gap-2 font-semibold group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  <span className="inline-block w-2 h-2 bg-gradient-to-br from-electric to-depth rounded-full group-hover:scale-125 transition-transform"></span>
                  Mentoring 1:1
                </Link>
              </li>
              <li>
                <Link
                  to="/program/produktywnosc"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Instaluj: Produktywność
                </Link>
              </li>
              <li>
                <Link
                  to="/program/odpornosc"
                 
                  className="text-dim hover:text-electric transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  Instaluj: Odporność Psychiczna
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-white/10">
                <Link
                  to="/program"
                 
                  className="text-on-dark-tertiary hover:text-electric transition-colors inline-flex items-center gap-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
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
                    className="text-dim hover:text-electric transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
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
          <p className="text-on-dark-tertiary text-sm">&copy; {currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/legal"
             
              className="text-sm text-on-dark-tertiary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
            >
              Informacje Prawne
            </Link>
            <Link
              to="/legal/privacy"
             
              className="text-sm text-on-dark-tertiary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/legal/terms"
             
              className="text-sm text-on-dark-tertiary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
