import Layout from '../components/layout/Layout';
import PodcastPlayer from '../components/podcast/PodcastPlayer';
import PodcastPlatformLinks from '../components/podcast/PodcastPlatformLinks';
import ValueProposition from '../components/podcast/ValueProposition';
import PodcastEpisodeList, { PodcastEpisode } from '../components/podcast/PodcastEpisodeList';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig, getTopicalConfig } from '../lib/seo-config';
import TopicalMeta from '../components/TopicalMeta';
import { getPodcastEntity, getWebPageEntity, getPodcastBreadcrumb, getFAQSchema } from '../lib/structured-data';

const podcastFaqs = [
  {
    question: "Czym jest Life Hacking Podcast?",
    answer: "Life Hacking Podcast to podcast o\u00A0praktycznych strategiach produktywno\u015Bci, optymalizacji \u017Cycia i\u00A0zarz\u0105dzania energi\u0105. Prowadzony przez Ludwika C. Siadlaka \u2014 coacha produktywno\u015Bci z\u00A019-letnim do\u015Bwiadczeniem, Certyfikowanego Trenera Microsoft i\u00A0tw\u00F3rc\u0119 Aplikacji Mentalnych. Nowe odcinki co czwartek.",
  },
  {
    question: "Dla kogo jest ten podcast?",
    answer: "Dla profesjonalist\u00F3w, freelancer\u00F3w i\u00A0przedsi\u0119biorc\u00F3w, kt\u00F3rzy szukaj\u0105 sprawdzonych metod zamiast teoretycznych koncepcji. Je\u015Bli zmagasz si\u0119 z\u00A0r\u00F3wnowa\u017Ceniem ambicji i\u00A0potrzeby odpoczynku \u2014 tu znajdziesz narz\u0119dzia, kt\u00F3re zoptymalizuj\u0105 Tw\u00F3j czas i\u00A0energi\u0119 bez ryzyka wypalenia.",
  },
  {
    question: "Czym r\u00F3\u017Cni si\u0119 od innych podcast\u00F3w o\u00A0produktywno\u015Bci?",
    answer: "Ka\u017Cdy odcinek skupia si\u0119 na jednym, konkretnym narz\u0119dziu lub strategii \u2014 nie na teorii. Oparte na 19 latach do\u015Bwiadczenia w\u00A0szkoleniu profesjonalist\u00F3w IT w\u00A0firmach Fortune 500 i\u00A0jednostkach NATO. Zero motywacyjnego \u2018bla bla\u2019 \u2014 same implementowalne rozwi\u0105zania.",
  },
  {
    question: "Gdzie mog\u0119 s\u0142ucha\u0107?",
    answer: "Na Spotify, Apple Podcasts, Google Podcasts i\u00A0YouTube. Nowe odcinki pojawiaj\u0105 si\u0119 co czwartek \u2014 idealny moment na refleksj\u0119 przed ko\u0144cem tygodnia.",
  },
];

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
  };

  return (
    <Layout>
      <SEO {...getSEOConfig("/podcast/life-hacking")} jsonLd={[
        getPodcastEntity('life-hacking'),
        getWebPageEntity('/podcast/life-hacking', 'Life Hacking Podcast', 'Podcast o hakach życiowych i produktywności prowadzony przez Ludwika C. Siadlaka.'),
        getPodcastBreadcrumb('Life Hacking Podcast', '/podcast/life-hacking'),
        getFAQSchema(podcastFaqs),
      ]} />
      {(() => { const t = getTopicalConfig("/podcast/life-hacking"); return t ? <TopicalMeta {...t} /> : null; })()}
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-void-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Life Hacking Podcast
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Praktyczne scenariusze przejmowania władzy nad światem
            </p>
          </div>
        </div>
      </section>

      {/* Definicja — extractable block */}
      <section className="py-10 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
            Czym jest Life Hacking Podcast?
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            Life Hacking Podcast to podcast o praktycznych strategiach
            produktywno&#347;ci i optymalizacji &#380;ycia, prowadzony przez
            Ludwika C. Siadlaka &#8212; coacha z 19-letnim do&#347;wiadczeniem,
            Certyfikowanego Trenera Microsoft i tw&#243;rc&#281; Aplikacji
            Mentalnych. Ka&#380;dy odcinek skupia si&#281; na jednym
            implementowalnym narz&#281;dziu. Nowe odcinki co czwartek.
          </p>
          <p className="text-xs text-dim mt-3">
            Aktualizacja: <time dateTime="2026-04-14">kwiecie&#324; 2026</time>
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-on-light mb-6">
              Je&#347;li jeste&#347; freelancerem, przedsiębiorcą, prawnikiem, politykiem
              czy płatnym zabójcą - ten podcast jest dla CIebie.
            </p>
            <p className="text-lg text-on-light-dim mb-6">
              Docenisz konkretne, oparte na doświadczeniu strategie zamiast
              teoretycznych koncepcji. Dlatego każdy odcinek skupia się na
              sprawdzonych rozwiązaniach, które można natychmiast wdrożyć –
              idealny towarzysz podczas dojazdów do pracy czy na siłownię.
            </p>
            <p className="text-lg text-on-light-dim">
              Jeśli zmagasz się z równoważeniem wysokich ambicji i potrzeby
              odpoczynku, ten podcast dostarczy Ci narzędzi, które zoptymalizują
              Twój czas i energię bez ryzyka wypalenia.
            </p>

            <div className="mt-8 p-4 bg-diamond rounded-lg border border-border">
              <h3 className="font-semibold text-depth mb-2">
                Informacje o podcaście:
              </h3>
              <p className="text-on-light-dim">
                <strong>Nowe odcinki:</strong> Co czwartek – idealny moment na
                refleksję przed końcem tygodnia
              </p>
              <p className="text-on-light-dim">
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
              <button className="inline-flex items-center px-6 py-3 bg-brand-gradient text-white rounded-lg transition-colors">
                Załaduj więcej odcinków <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-on-light mb-4">
            Zasubskrybuj i nigdy nie przegap nowego odcinka
          </h2>
          <p className="text-lg text-on-light-dim mb-6 max-w-2xl mx-auto">
            Dołącz do społeczności słuchaczy, którzy co tydzień otrzymują
            powiadomienia o nowych odcinkach i ekskluzywne materiały, które nie
            są publikowane nigdzie indziej.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-grow py-2 px-4 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-depth"
              required
            />
            <button
              type="submit"
              className="bg-depth hover:bg-depth/80 text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-10 text-center">
            Najcz&#281;&#347;ciej zadawane pytania
          </h2>
          <div className="space-y-4">
            {podcastFaqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 rounded-md">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-on-dark font-medium hover:text-electric transition-colors">
                  {faq.question}
                  <span className="ml-4 text-dim group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-dim leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeHackingPodcast;
