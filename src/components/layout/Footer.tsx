import { Link } from "react-router-dom";
import {
  ArrowRight,
  Instagram,
  X,
  Linkedin,
  Youtube,
  Users,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-deep-space/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-neural-violet dark:text-silver-mist bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent dark:from-silver-mist dark:to-luminal-magenta">
                Ludwik&nbsp;C. Siadlak
              </h3>
            </Link>
            <p className="text-deep-charcoal dark:text-silver-mist/90 max-w-xs">
              Prowadzę profesjonalistów na styku technologii i ludzkiego
              potencjału.
              <br /> <br /> Buduję społeczności, w których liczy się Człowiek, a
              nie <em>tylko hajs</em>.
            </p>
            <div className="flex space-x-4 text-deep-charcoal dark:text-silver-mist/90">
              <a
                href="https://instagram.com/ludwikc"
                className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/ludwikc"
                className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ludwikc"
                className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com/ludwikcsiadlak"
                className="hover:text-ascension-pink dark:hover:text-luminal-magenta transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">
              Szybkie linki
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  to="/program"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Programy
                </Link>
              </li>
              <li>
                <Link
                  to="/podcast"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Podcasty
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Społeczność
                </Link>
              </li>
              <li>
                <Link
                  to="/webinar"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Webinar
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Materiały
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs and Podcasts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">
              Programy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/program/mental-elevator"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Mental Elevator
                </Link>
              </li>
              <li>
                <Link
                  to="/program/hakowanie-produktywnosci"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Hakowanie Produktywności
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6 text-deep-charcoal dark:text-silver-mist">
              Podcasty
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/podcast/life-hacking"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Life Hacking Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/podcast/uwazne-zycie"
                  className="text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
                >
                  Uważne Życie
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column (replacing Newsletter) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-deep-charcoal dark:text-silver-mist">
              Społeczność
            </h4>
            <p className="text-deep-charcoal dark:text-silver-mist/90 mb-4">
              Dołącz do grupy profesjonalistów dążących do rozwoju na styku
              technologii i ludzkiego potencjału.
            </p>
            <Link
              to="/community"
              className="inline-flex items-center space-x-2 text-neural-violet hover:text-ascension-pink dark:text-luminal-magenta dark:hover:text-luminal-magenta/80 transition-colors"
            >
              <Users size={18} />
              <span>Dołącz do Społeczności Lifehackerów</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-deep-charcoal dark:text-silver-mist/90 text-sm">
            &copy; {currentYear} Ludwik C. Siadlak. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/legal"
              className="text-sm text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
            >
              Informacje Prawne
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/terms"
              className="text-sm text-deep-charcoal hover:text-neural-violet dark:text-silver-mist/90 dark:hover:text-luminal-magenta transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
