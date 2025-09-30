

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import PodcastPlayer from '../components/podcast/PodcastPlayer';
import NextSessionCountdown from '../components/podcast/NextSessionCountdown';
import { Calendar } from 'lucide-react';

const UwazneZyciePodcast = () => {

  return (
    <Layout>
      <Hero
        title="Uważne Życie"
        subtitle="Odnajdź równowagę w świecie ciągłych wymagań"
        ctaText="Posłuchaj najnowszego odcinka"
        ctaLink="#player"
        backgroundImage="/lovable-uploads/83c4de73-257e-4763-9477-2e4a54d8f95b.png"
        imageDescription="Osoba w pozie medytacyjnej w spokojnym otoczeniu"
        fullHeight={true}
      />

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-deep-charcoal mb-6">
              W świecie, gdzie produktywność jest często stawiana ponad
              dobrostanem, "Uważne Życie" oferuje przestrzeń na odzyskanie
              równowagi bez poczucia winy.
            </p>
            <p className="text-lg text-deep-charcoal mb-6">
              Każdy odcinek zawiera praktyczne ćwiczenia uważności, które możesz
              wykonać podczas porannej kawy, w drodze do pracy, czy wieczorem po
              intensywnym dniu. To nie teoretyczne dywagacje, ale konkretne
              techniki dla ludzi, którzy cenią skuteczność nawet w pracy nad
              sobą.
            </p>
            <p className="text-lg text-deep-charcoal">
              Regularna praktyka uważności poprawi Twoją zdolność podejmowania
              decyzji, odporność na stres i jakość koncentracji – kluczowe
              umiejętności dla ambitnych profesjonalistów na każdym poziomie
              kariery.
            </p>
          </div>

          <div id="player" className="max-w-3xl mx-auto">
            <PodcastPlayer
              title="Uważne Życie"
              embedUrl="https://open.spotify.com/embed/show/0M0P2V6eQfwzJ4fow7wsIc"
              coverArt="/lovable-uploads/17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png"
            />
          </div>
        </div>
      </section>

      <section id="live-sessions" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-luminous-white rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-neural-violet mb-4 flex items-center">
              <Calendar className="mr-2 h-6 w-6" />
              Sesje live
            </h2>
            <p className="text-deep-charcoal mb-6">
              Dołącz do cotygodniowej sesji medytacji na żywo - to wyjątkowa
              okazja, by praktykować uważność w grupie podobnie myślących
              profesjonalistów. Sesje odbywają się każdy wtorek o 6:30 rano –
              idealny moment na reset na resztę tygodnia, po ugaszeniu
              poniedziałkowych pożarów.
            </p>

            <NextSessionCountdown />

            <form className="mb-4">
              <h4 className="font-semibold text-deep-charcoal mb-3">
                Zapisz się na powiadomienia o sesjach:
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Twój adres email"
                  className="flex-grow py-2 px-4 rounded-lg sm:rounded-r-none border border-border focus:outline-none focus:ring-2 focus:ring-neural-violet"
                  required
                />
                <button
                  type="submit"
                  className="bg-neural-violet hover:bg-neural-violet/80 text-white px-4 py-2 rounded-lg sm:rounded-l-none transition-colors"
                >
                  Zapisz się
                </button>
              </div>
              <p className="text-sm text-subtle-slate mt-2">
                Otrzymasz przypomnienie na 30 minut przed każdą sesją oraz
                dostęp do nagrań.
              </p>
            </form>

            <div className="flex justify-center space-x-4">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Uwa%C5%BCne%20%C5%BBycie%20%E2%80%93%20medytacje%20prowadzone%20%28live%29&location=https%3A%2F%2Fdiscord.com%2Fevents%2F428530875085619200%2F1384400577311670313&details=S%C5%82yszymy%20si%C4%99%20na%20Discordzie%2C%20na%20kanale%20%23warszataty%3A%20%0Ahttps%3A%2F%2Fdiscord.com%2Fchannels%2F428530875085619200%2F988452597549641758%0A%0A%E2%86%92%20https%3A%2F%2Fuwaznezycie.pl%20&dates=20250930T062800%2F20250930T065000&recur=RRULE%3AFREQ%3DWEEKLY%3BBYDAY%3DTU&ctz=Europe%2FWarsaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-neural-violet hover:text-ascension-pink transition-colors"
              >
                Dodaj do swojego Google Calendar
              </a>
              <a
                href="/assets/UwazneZycie.ics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-neural-violet hover:text-ascension-pink transition-colors"
              >
                Dodaj do iCloud/Outlook
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default UwazneZyciePodcast;
