import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  Calendar,
} from "lucide-react";
import XIcon from "../ui/x-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-void via-electric to-void text-white pt-20 pb-8 overflow-hidden">
      {/* Premium static background orbs */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-electric/50 to-depth rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-depth to-electric rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
                <h3 className="text-2xl font-bold text-white">
                  Ludwik&nbsp;C. Siadlak
                </h3>
              </Link>
              <p className="text-white/90 text-sm leading-relaxed">
                <span className="font-bold">Life Hacker. </span>
                <br />
                <br />
                Katalizuję wojowników. <br />
                Prowadzę poszukiwaczy.
                <br /> <br /> Na co czekasz?
              </p>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://twitter.com/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="X (formerly Twitter)"
              >
                <XIcon size={18} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://youtube.com/ludwikcsiadlak"
                className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="YouTube"
              >
                <Youtube size={18} className="text-white" />
              </a>
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
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  to="/discovery"
                  onClick={scrollToTop}
                  className="text-electric hover:text-electric/80 transition-colors inline-flex items-center gap-2 font-semibold"
                >
                  Sesja Discovery
                  <Calendar size={16} className="flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  Opinie Klientów (120+)
                </Link>
              </li>
              <li>
                <Link
                  to="/webinar"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  Najbliższy Webinar
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
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
                  to="/program/lifeos-system-upgrade"
                  onClick={scrollToTop}
                  className="text-white hover:text-depth transition-colors inline-flex items-center gap-2 font-semibold group"
                >
                  <span className="inline-block w-2 h-2 bg-gradient-to-br from-electric to-depth rounded-full group-hover:scale-125 transition-transform"></span>
                  LifeOS: System Upgrade
                </Link>
              </li>
              <li>
                <Link
                  to="/program/hakowanie-produktywnosci"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  Instaluj: Produktywność
                </Link>
              </li>
              <li>
                <Link
                  to="/program/silna-glowa"
                  onClick={scrollToTop}
                  className="text-white/80 hover:text-depth transition-colors inline-block"
                >
                  Instaluj: Odporność Psychiczna
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-white/10">
                <Link
                  to="/program"
                  onClick={scrollToTop}
                  className="text-white/60 hover:text-depth transition-colors inline-flex items-center gap-1.5 text-sm"
                >
                  Zobacz wszystkie programy
                  <ExternalLink size={12} className="rotate-[-45deg]" />
                </Link>
              </li>
            </ul>

            {/* Projekty */}
            <h4 className="text-lg font-bold mb-2 text-white mt-8">Projekty</h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-electric to-depth rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://fundacja.hackerzy.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-depth transition-colors inline-flex items-center gap-1.5"
                >
                  Fundacja HACKERZY.PL
                  <ExternalLink size={14} className="flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://deepwork.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-depth transition-colors inline-flex items-center gap-1.5"
                >
                  DeepWork.pl
                  <ExternalLink size={14} className="flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://uwaznezycie.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-depth transition-colors inline-flex items-center gap-1.5"
                >
                  UwazneZycie.pl
                  <ExternalLink size={14} className="flex-shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/legal"
              onClick={scrollToTop}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Informacje Prawne
            </Link>
            <Link
              to="/legal/privacy"
              onClick={scrollToTop}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/legal/terms"
              onClick={scrollToTop}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
