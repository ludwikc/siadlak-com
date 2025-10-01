import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Youtube,
  Users,
  ExternalLink,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                <br /> <br /> Buduję społeczności, w których liczy się Człowiek, a
                nie <em>tylko hajs</em>.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">
              Szybkie linki
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
                  to="/program"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Programy
                </Link>
              </li>
              <li>
                <Link
                  to="/podcast"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Podcasty
                </Link>
              </li>
              <li>
                <a
                  href="https://lifehackerzy.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/80 hover:text-luminal-magenta transition-colors"
                >
                  Społeczność
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <Link
                  to="/webinar"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Webinar
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

          {/* Programs and Podcasts */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">
              Programy
            </h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-violet to-luminal-magenta rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/program/lifeos-system-upgrade"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  LifeOS: System Upgrade
                </Link>
              </li>
              <li>
                <Link
                  to="/program/hakowanie-produktywnosci"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Hakowanie Produktywności
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 mt-8 text-white">
              Podcasty
            </h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-violet to-luminal-magenta rounded-full mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/podcast/life-hacking"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Life Hacking Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/program/uwazne-zycie"
                  className="text-white/80 hover:text-luminal-magenta transition-colors inline-block"
                >
                  Uważne Życie
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">
              Społeczność
            </h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-violet to-luminal-magenta rounded-full mb-4"></div>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              Dołącz do grupy profesjonalistów dążących do rozwoju na styku
              technologii i ludzkiego potencjału.
            </p>
            <a
              href="https://lifehackerzy.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white hover:bg-white/20 transition-all duration-300 group text-sm"
            >
              <Users size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Dołącz do Lifehackerów</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
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
