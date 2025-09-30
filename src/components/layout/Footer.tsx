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
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-neural-violet bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent">
                Ludwik&nbsp;C. Siadlak
              </h3>
            </Link>
            <p className="text-deep-charcoal max-w-xs">
              Prowadzę profesjonalistów na styku technologii i ludzkiego
              potencjału.
              <br /> <br /> Buduję społeczności, w których liczy się Człowiek, a
              nie <em>tylko hajs</em>.
            </p>
            <div className="flex space-x-4 text-deep-charcoal">
              <a
                href="https://instagram.com/ludwikc"
                className="hover:text-ascension-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/ludwikc"
                className="hover:text-ascension-pink transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ludwikc"
                className="hover:text-ascension-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com/ludwikcsiadlak"
                className="hover:text-ascension-pink transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal">
              Szybkie linki
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  to="/program"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Programy
                </Link>
              </li>
              <li>
                <Link
                  to="/podcast"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Podcasty
                </Link>
              </li>
              <li>
                <a
                  href="https://lifehackerzy.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Społeczność
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <Link
                  to="/webinar"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Webinar
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs and Podcasts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal">
              Programy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/program/mental-elevator"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Mental Elevator
                </Link>
              </li>
              <li>
                <Link
                  to="/program/hakowanie-produktywnosci"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Hakowanie Produktywności
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6 text-deep-charcoal">
              Podcasty
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/podcast/life-hacking"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Life Hacking Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/program/uwazne-zycie"
                  className="text-deep-charcoal hover:text-neural-violet transition-colors"
                >
                  Uważne Życie
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column (replacing Newsletter) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal">
              Społeczność
            </h4>
            <p className="text-deep-charcoal mb-4">
              Dołącz do grupy profesjonalistów dążących do rozwoju na styku
              technologii i ludzkiego potencjału.
            </p>
            <a
              href="https://lifehackerzy.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-neural-violet hover:text-ascension-pink transition-colors"
            >
              <Users size={18} />
              <span>Dołącz do Społeczności Lifehackerów</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-deep-charcoal text-sm">
            &copy; {currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/legal"
              className="text-sm text-deep-charcoal hover:text-neural-violet transition-colors"
            >
              Informacje Prawne
            </Link>
            <Link
              to="/legal/privacy"
              className="text-sm text-deep-charcoal hover:text-neural-violet transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/legal/terms"
              className="text-sm text-deep-charcoal hover:text-neural-violet transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
