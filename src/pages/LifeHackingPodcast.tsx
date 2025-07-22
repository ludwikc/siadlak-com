

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import PodcastPlayer from '../components/podcast/PodcastPlayer';
import PodcastPlatformLinks from '../components/podcast/PodcastPlatformLinks';
import ValueProposition from '../components/podcast/ValueProposition';
import PodcastEpisodeList, { PodcastEpisode } from '../components/podcast/PodcastEpisodeList';
import { ArrowRight } from 'lucide-react';

const LifeHackingPodcast = () => {
  // Sample episodes data - would be fetched from an API in a real scenario
  const episodes: PodcastEpisode[] = [
    {
      id: "1",
      title: "Jak stworzyć system produktywności, który faktycznie działa",
      description:
        "W tym odcinku omawiam praktyczne podejście do budowy systemu produktywności, który nie tylko działa na papierze, ale faktycznie wspiera Cię w codziennych wyzwaniach. Poznasz konkretne narzędzia i techniki.",
      date: "28 kwietnia 2025",
      duration: "38 min",
      audioUrl: "#",
      imageUrl: "/lovable-uploads/208a0c75-6c6d-4324-8241-a7de28c2fa3e.png",
    },
    {
      id: "2",
      title: "Sztuka strategicznej niekompetencji",
      description:
        "Czy wiesz, że bycie ekspertem we wszystkim może być Twoją największą słabością? W tym odcinku omawiam, jak strategicznie wybierać obszary, w których warto być przeciętnym, aby ekscelować w tym, co naprawdę ma znaczenie.",
      date: "21 kwietnia 2025",
      duration: "42 min",
      audioUrl: "#",
      imageUrl: "/lovable-uploads/2c4874da-4f8d-472e-a5ca-ec2c0b34fcd1.png",
    },
    {
      id: "3",
      title: "Jak zamienić wiedzę w działanie - protokół implementacji",
      description:
        'Największym wyzwaniem nie jest zdobywanie wiedzy, ale jej wdrażanie. W tym odcinku przedstawiam sprawdzony protokół, który pomaga przejść od "wiem jak" do "robię to" w zaledwie 72 godziny.',
      date: "14 kwietnia 2025",
      duration: "45 min",
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
    "Szukasz konkretnych, weryfikowalnych metod zamiast teoretycznych rozważań",
    "Cenisz efektywność i optymalizację procesów w życiu zawodowym i osobistym",
    "Potrzebujesz sprawdzonych sposobów na zarządzanie energią, nie tylko czasem",
    "Chcesz czerpać z doświadczeń innych wysoko funkcjonujących profesjonalistów",
  ];

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    console.log("Playing episode:", episode.title);
    // Here you would typically interact with an audio player API
  };

  return (
    <Layout>
      <Hero
        title="Life Hacking Podcast"
        subtitle="Praktyczne scenariusze przejmowania władzy nad światem"
        ctaText="Słuchaj najnowszego odcinka"
        ctaLink="#player"
        secondaryCtaText="Przeglądaj wszystkie odcinki"
        secondaryCtaLink="#episodes"
      />

      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-deep-charcoal dark:text-silver-mist mb-6">
              Jeśli jesteś freelancerem, przedsiębiorcą, prawnikiem, politykiem
              czy płatnym zabójcą - ten podcast jest dla CIebie.
            </p>
            <p className="text-lg text-deep-charcoal dark:text-silver-mist mb-6">
              Docenisz konkretne, oparte na doświadczeniu strategie zamiast
              teoretycznych koncepcji. Dlatego każdy odcinek skupia się na
              sprawdzonych rozwiązaniach, które można natychmiast wdrożyć –
              idealny towarzysz podczas dojazdów do pracy czy na siłownię.
            </p>
            <p className="text-lg text-deep-charcoal dark:text-silver-mist">
              Jeśli zmagasz się z równoważeniem wysokich ambicji i potrzeby
              odpoczynku, ten podcast dostarczy Ci narzędzi, które zoptymalizują
              Twój czas i energię bez ryzyka wypalenia.
            </p>

            <div className="mt-8 p-4 bg-luminous-white dark:bg-deep-space/80 rounded-lg border border-border">
              <h3 className="font-semibold text-neural-violet dark:text-neural-violet-light mb-2">
                Informacje o podcaście:
              </h3>
              <p className="text-deep-charcoal dark:text-silver-mist">
                <strong>Nowe odcinki:</strong> Co czwartek – idealny moment na
                refleksję przed końcem tygodnia
              </p>
              <p className="text-deep-charcoal dark:text-silver-mist">
                <strong>Prowadzi:</strong> Ludwik C. Siadlak - life hacker,
                trener, mentor, absolwent Oksfordu i motocyklista w jednym
              </p>
            </div>
          </div>

          <div id="player" className="max-w-3xl mx-auto">
            <PodcastPlayer
              title="Life Hacking Podcast"
              embedUrl="https://open.spotify.com/embed/show/example"
              coverArt="/lovable-uploads/208a0c75-6c6d-4324-8241-a7de28c2fa3e.png"
            />

            <PodcastPlatformLinks platforms={platforms} />

            <ValueProposition
              title="Ten podcast jest dla Ciebie, jeśli:"
              items={valuePropositionItems}
            />
          </div>
        </div>
      </section>

      <section id="episodes" className="py-12">
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

      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
            Zasubskrybuj i nigdy nie przegap nowego odcinka
          </h2>
          <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/80 mb-6 max-w-2xl mx-auto">
            Dołącz do społeczności słuchaczy, którzy co tydzień otrzymują
            powiadomienia o nowych odcinkach i ekskluzywne materiały, które nie
            są publikowane nigdzie indziej.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-grow py-2 px-4 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-neural-violet dark:bg-deep-space dark:text-silver-mist"
              required
            />
            <button
              type="submit"
              className="bg-neural-violet hover:bg-neural-violet/80 text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default LifeHackingPodcast;
