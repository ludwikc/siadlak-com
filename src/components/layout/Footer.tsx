import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Youtube,
  Users,
  ExternalLink,
  Calendar,
} from "lucide-react";
import XIcon from "../ui/x-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-deep-space via-quantum-blue/80 to-deep-space text-white pt-20 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-neural-violet rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-luminal-magenta rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-quantum-blue rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Link to="/" className="inline-block mb-4">
                <h3 className="text-2xl font-bold text-white">
                  Ludwik&nbsp;C. Siadlak
                </h3>
              </Link>
              <p className="text-white/90 text-sm leading-relaxed">
                Prowadzę profesjonalistów na styku technologii i ludzkiego
                potencjału.
                <br /> <br /> Buduję społeczności, w których liczy się Człowiek.
              </p>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://twitter.com/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="X (formerly Twitter)"
              >
                <XIcon size={18} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/ludwikc"
                className="w-10 h-10 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://youtube.com/ludwikcsiadlak"
                className="w-10 h-10 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                aria-label="YouTube"
              >
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Odkryj */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">
              Odkryj
            </h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-violet to-luminal-magenta rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  to="/discovery"
                  className="text-luminal-magenta hover:text-luminal-magenta/80 transition-colors inline-flex items-center gap-2 font-semibold"
                >
                  Sesja Discovery
                  <Calendar size={16} className="flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Opinie Klientów (120+)
                </Link>
              </li>
              <li>
                <Link
                  to="/webinar"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Najbliższy Webinar
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Programy */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">
              Programy
            </h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-violet to-luminal-magenta rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/program/lifeos-system-upgrade"
                  className="text-white hover:text-luminal-magenta transition-colors inline-flex items-center gap-2 font-semibold group"
                >
                  <span className="inline-block w-2 h-2 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full group-hover:scale-125 transition-transform"></span>
                  LifeOS: System Upgrade
                </Link>
              </li>
              <li>
                <Link
                  to="/program/hakowanie-produktywnosci"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Instaluj: Produktywność
                </Link>
              </li>
              <li>
                <Link
                  to="/program/silna-glowa"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Instaluj: Odporność Psychiczna
                </Link>
              </li>
              <li>
                <Link
                  to="/train-the-trainer"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  TrainTheTrainer.pl
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-white/10">
                <Link
                  to="/program"
                  className="text-white/60 hover:text-luminal-magenta transition-colors inline-flex items-center gap-1.5 text-sm"
                >
                  Zobacz wszystkie programy
                  <ExternalLink size={12} className="rotate-[-45deg]" />
                </Link>
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
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Informacje Prawne
            </Link>
            <Link
              to="/legal/privacy"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/legal/terms"
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
