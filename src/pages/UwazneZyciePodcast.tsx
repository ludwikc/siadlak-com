import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import PodcastPlayer from "../components/podcast/PodcastPlayer";
import PodcastPlatformLinks from "../components/podcast/PodcastPlatformLinks";
import ValueProposition from "../components/podcast/ValueProposition";
import PodcastEpisodeList, {
  PodcastEpisode,
} from "../components/podcast/PodcastEpisodeList";
import { Calendar, ArrowRight } from "lucide-react";

const UwazneZyciePodcast = () => {
  // Sample episodes data - would be fetched from an API in a real scenario
  const episodes: PodcastEpisode[] = [
    {
      id: "1",
      title: "Technika 4-7-8 dla szybkiego powrotu do równowagi",
      description:
        "W tym odcinku omawiam prostą, ale niezwykle skuteczną technikę oddechową, którą możesz zastosować w dowolnym momencie dnia, aby szybko zresetować swój układ nerwowy. Idealny sposób na powrót do równowagi po stresującej sytuacji.",
      date: "2 maja 2025",
      duration: "23 min",
      audioUrl: "#",
      imageUrl: "/lovable-uploads/17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png",
    },
    {
      id: "2",
      title: "Poranna medytacja dla zwiększenia klarowności umysłu",
      description:
        "Zaledwie 9 minut porannej praktyki może radykalnie zmienić przebieg całego dnia. W tym odcinku prezentuję krok po kroku prowadzoną medytację, którą możesz wykonać zaraz po przebudzeniu.",
      date: "25 kwietnia 2025",
      duration: "19 min",
      audioUrl: "#",
      imageUrl: "/lovable-uploads/871b0063-2208-416c-bc20-62cb3afaa171.png",
    },
    {
      id: "3",
      title: 'Medytacja "Skanowanie ciała" dla lepszego snu',
      description:
        "Problemy ze snem dotykają coraz więcej profesjonalistów. W tym odcinku prowadzę Cię przez medytację skanowania ciała, która pomaga wyciszyć umysł i przygotować się do głębokiego, regenerującego snu.",
      date: "18 kwietnia 2025",
      duration: "27 min",
      audioUrl: "#",
    },
  ];

  const platforms = [
    {
      name: "Spotify",
      url: "https://spotify.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
    {
      name: "Apple Podcasts",
      url: "https://apple.com/apple-podcasts",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg",
    },
    {
      name: "Google Podcasts",
      url: "https://podcasts.google.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Google_Podcasts_icon.svg",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/72/YouTube_social_white_square_%282017%29.svg",
    },
  ];

  const valuePropositionItems = [
    "Szukasz równowagi między wysokimi ambicjami a spokojem wewnętrznym",
    "Potrzebujesz metod na szybki reset umysłu między intensywnymi zadaniami",
    "Chcesz poprawić jakość snu i regeneracji, by zwiększyć wydajność",
    "Zmagasz się z nadmiarem informacji i potrzebujesz technik na oczyszczenie umysłu",
  ];

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    console.log("Playing episode:", episode.title);
    // Here you would typically interact with an audio player API
  };

  return (
    <Layout>
      <Hero
        title="Uważne Życie"
        subtitle="Odnajdź równowagę w świecie ciągłych wymagań"
        ctaText="Słuchaj najnowszego odcinka"
        ctaLink="#player"
        secondaryCtaText="Zapisz się na sesję live"
        secondaryCtaLink="#live-sessions"
      />

      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-deep-charcoal dark:text-silver-mist mb-6">
              W świecie, gdzie produktywność jest często stawiana ponad
              dobrostanem, "Uważne Życie" oferuje przestrzeń na odzyskanie
              równowagi bez poczucia winy.
            </p>
            <p className="text-lg text-deep-charcoal dark:text-silver-mist mb-6">
              Każdy odcinek zawiera praktyczne ćwiczenia uważności, które możesz
              wykonać podczas porannej kawy, w drodze do pracy, czy wieczorem po
              intensywnym dniu. To nie teoretyczne dywagacje, ale konkretne
              techniki dla ludzi, którzy cenią skuteczność nawet w pracy nad
              sobą.
            </p>
            <p className="text-lg text-deep-charcoal dark:text-silver-mist">
              Regularna praktyka uważności poprawi Twoją zdolność podejmowania
              decyzji, odporność na stres i jakość koncentracji – kluczowe
              umiejętności dla ambitnych profesjonalistów na każdym poziomie
              kariery.
            </p>
          </div>

          <div id="player" className="max-w-3xl mx-auto">
            <PodcastPlayer
              title="Uważne Życie"
              embedUrl="https://open.spotify.com/embed/show/example"
              coverArt="/lovable-uploads/17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png"
            />

            <PodcastPlatformLinks platforms={platforms} />

            <ValueProposition
              title="Te medytacje są dla Ciebie, jeśli:"
              items={valuePropositionItems}
            />
          </div>
        </div>
      </section>

      <section id="live-sessions" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-luminous-white dark:bg-deep-space/80 rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-neural-violet dark:text-neural-violet-light mb-4 flex items-center">
              <Calendar className="mr-2 h-6 w-6" />
              Sesje live
            </h2>
            <p className="text-deep-charcoal dark:text-silver-mist mb-6">
              Dołącz do cotygodniowej sesji medytacji na żywo - to wyjątkowa
              okazja, by praktykować uważność w grupie podobnie myślących
              profesjonalistów. Sesje odbywają się każdy wtorek o 6:30 rano –
              idealny moment na reset na resztę tygodnia, po ugaszeniu
              poniedziałkowych pożarów.
            </p>

            <div className="bg-secondary/50 dark:bg-quantum-blue/30 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-deep-charcoal dark:text-silver-mist mb-2">
                Następna sesja:
              </h3>
              <p className="text-deep-charcoal dark:text-silver-mist mb-1">
                <strong>Data:</strong> Wtorek, 7 maja 2025
              </p>
              <p className="text-deep-charcoal dark:text-silver-mist mb-1">
                <strong>Godzina:</strong> 6:30 - 7:00 (czas polski)
              </p>
              <p className="text-deep-charcoal dark:text-silver-mist">
                <strong>Temat:</strong> Technika "Mental Elevator" - medytacja
                dla zwiększenia świadomości swojej wartości
              </p>
            </div>

            <form className="mb-4">
              <h4 className="font-semibold text-deep-charcoal dark:text-silver-mist mb-3">
                Zapisz się na powiadomienia o sesjach:
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Twój adres email"
                  className="flex-grow py-2 px-4 rounded-lg sm:rounded-r-none border border-border focus:outline-none focus:ring-2 focus:ring-neural-violet dark:bg-deep-space dark:text-silver-mist"
                  required
                />
                <button
                  type="submit"
                  className="bg-neural-violet hover:bg-neural-violet/80 text-white px-4 py-2 rounded-lg sm:rounded-l-none transition-colors"
                >
                  Zapisz się
                </button>
              </div>
              <p className="text-sm text-subtle-slate dark:text-gentle-lavender mt-2">
                Otrzymasz przypomnienie na 30 minut przed każdą sesją oraz
                dostęp do nagrań.
              </p>
            </form>

            <div className="flex justify-center space-x-4">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-neural-violet hover:text-ascension-pink dark:text-neural-violet-light dark:hover:text-luminal-magenta transition-colors"
              >
                Dodaj do Google Calendar
              </a>
              <a
                href="https://calendar.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-neural-violet hover:text-ascension-pink dark:text-neural-violet-light dark:hover:text-luminal-magenta transition-colors"
              >
                Dodaj do Apple Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="episodes"
        className="py-12 bg-secondary/30 dark:bg-quantum-blue/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PodcastEpisodeList
              episodes={episodes}
              onPlayEpisode={handlePlayEpisode}
            />

            <div className="mt-10 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-ascension-pink hover:bg-luminal-magenta text-white rounded-lg transition-colors">
                Załaduj więcej odcinków <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UwazneZyciePodcast;
