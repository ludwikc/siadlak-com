
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Timeline links for the webinar navigation
const timelineLinks = [
  { time: "00:00", label: "Powitanie i dlaczego to spotkanie jest dla Ciebie" },
  { time: "03:30", label: "Kim jest Mateusz Lizak i dlaczego warto go wysłuchać" },
  { time: "14:30", label: "Historia dryfowania: od obietnicy ojcu do Deep Work" },
  { time: "29:00", label: "Punkt zwrotny: wzięcie odpowiedzialności za siebie" },
  { time: "36:00", label: "5 Filarów Współczesnej Męskości" },
  { time: "42:00", label: "Ćwiczenie 3-3-3: Twoje pierwsze kroki" },
  { time: "54:00", label: "Jak pracować z każdym z filarów" },
  { time: "01:18:00", label: "Prezentacja programu Męski Kompas" },
  { time: "01:26:00", label: "Oferta specjalna i Q&A" },
];

const WebinarReplay = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60); // 7 days in seconds
  const [offerExpired, setOfferExpired] = useState(false);

  useEffect(() => {
    // Set up the interval to update the timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setOfferExpired(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as dd:hh:mm:ss
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResourceDownload = (resource: string) => {
    toast({
      title: "Pobieranie",
      description: `Pobieranie: ${resource}`,
    });
  };

  const handleShare = (platform: string) => {
    toast({
      title: "Udostępnianie",
      description: `Udostępnianie nagrania na platformie: ${platform}`,
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-luminous-white to-secondary pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-500 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">[REPLAY]</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-twilight-indigo bg-gradient-to-r from-twilight-indigo to-zenith-gold bg-clip-text text-transparent">
              Koniec z Dryfowaniem: Jak Analityczny Umysł Sabotuje Twoją Męskość
            </h1>

            <p className="text-lg mb-4 text-deep-charcoal/80">
              Nagranie dostępne tylko do [15.10.2025 + 7 dni]
            </p>

            <div className="max-w-xs mx-auto mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <p className="font-medium mb-2">Nagranie wygasa za:</p>
              <div className="font-mono text-2xl font-bold text-twilight-indigo">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content - 2 columns wide */}
            <div className="lg:col-span-2 space-y-8">
              {/* Replay Video */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <div style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                    <iframe
                      height="100%"
                      width="100%"
                      src="https://webinar.mywave.video/U46SI3aV5Pti8zbg?embed"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      scrolling="no"
                      title="Webinar replay"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Timeline Navigation */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Nawigacja po rozdziałach:
                </h3>

                <div className="space-y-3">
                  {timelineLinks.map((link, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 hover:bg-twilight-indigo/5 rounded-lg flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <span className="text-twilight-indigo font-mono">
                        {link.time}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Limited-Time Offer */}
              <div
                className={`rounded-2xl p-8 border shadow-lg ${
                  offerExpired
                    ? "bg-gray-100 border-gray-300"
                    : "bg-gradient-to-r from-twilight-indigo/10 to-zenith-gold/10 border-twilight-indigo/20"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-xl font-bold ${offerExpired ? "text-gray-500" : "text-twilight-indigo"}`}
                  >
                    {offerExpired
                      ? "⏱️ Było, minęło..."
                      : "🔥 Specjalna oferta dla oglądających replay:"}
                  </h3>

                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      offerExpired
                        ? "bg-gray-200 text-gray-500"
                        : "bg-twilight-indigo/20 text-twilight-indigo"
                    }`}
                  >
                    {offerExpired ? "Oferta wygasła" : "Oferta pilotażowa"}
                  </div>
                </div>

                <p
                  className={`text-lg mb-6 ${offerExpired ? "text-gray-500" : ""}`}
                >
                  {offerExpired
                    ? "Ta specjalna oferta wygasła. Sprawdź stronę Męski Kompas, aby poznać aktualne możliwości."
                    : "Podczas webinaru na żywo przedstawiliśmy ekskluzywną ofertę pilotażową programu Męski Kompas - 5-tygodniową transformację przez wszystkie filary męskości."}
                </p>

                {!offerExpired && (
                  <div className="mb-6 space-y-4">
                    <p className="font-semibold text-twilight-indigo">
                      Co otrzymujesz w programie:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>5 tygodni pracy z Ludwikiem i Mateuszem w grupie max 10 mężczyzn</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Workbooki do każdego filaru męskości</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Dostęp do zamkniętej grupy i sesji coachingowych</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span><strong>BONUS:</strong> Lifetime dostęp do społeczności Lifehackerzy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span><strong>BONUS:</strong> Kurs "7 Technik Produktywności" (wartość 497 zł)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Nagrania wszystkich sesji na zawsze</span>
                      </li>
                    </ul>
                    
                    <div className="bg-white/50 rounded-lg p-4 border border-twilight-indigo/30">
                      <p className="text-2xl font-bold text-twilight-indigo mb-2">
                        Cena pilotażu: 497 zł
                      </p>
                      <p className="text-sm text-deep-charcoal/70">
                        (zamiast planowanych 1997 zł)
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  size="lg"
                  className={`w-full ${
                    offerExpired
                      ? "bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  }`}
                  onClick={() => navigate("/program/meski-kompas")}
                  disabled={offerExpired}
                >
                  {offerExpired
                    ? "Oferta wygasła - Było, minęło..."
                    : "DOŁĄCZ DO MĘSKIEGO KOMPASU →"}
                </Button>

                {!offerExpired && (
                  <p className="text-sm text-center mt-4 text-deep-charcoal/70">
                    Gwarancja satysfakcji: jeśli po pierwszym tygodniu uznasz, że to nie dla Ciebie - zwrot 100% środków, bez pytań.
                  </p>
                )}
              </div>

              {/* Live Participants Testimonials */}
              <div className="bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5 backdrop-blur-lg rounded-2xl p-8 border border-twilight-indigo/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-twilight-indigo">
                  💬 Tak zareagowali mężczyźni podczas transmisji na żywo:
                </h3>
                <p className="text-deep-charcoal/70 mb-6">
                  Poniżej prawdziwe komentarze z czatu webinaru - bez edycji, bez filtrów.
                </p>

                <div className="space-y-8">
                  {/* Group 1: Recognition */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-twilight-indigo">
                      "To brzmi jak moja historia..."
                    </h4>
                    <div className="space-y-4">
                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-twilight-indigo">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Kurczę jakbym słyszał o swoim poprzednim związku - lata walki, za wszelką cenę inwestycja w związek i totalne załamanie, kiedy odeszła, totalny dołek i porażka - znam to"
                        </p>
                        <p className="text-sm font-medium text-twilight-indigo">— Konrad</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-twilight-indigo">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Znam to uczucie bardzo dobrze z autopsji"
                        </p>
                        <p className="text-sm font-medium text-twilight-indigo">— Daniel</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-twilight-indigo">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Hi5 z tym mózgiem analitycznym, nie jest łatwo 🙈"
                        </p>
                        <p className="text-sm font-medium text-twilight-indigo">— Anna</p>
                      </blockquote>
                    </div>
                  </div>

                  {/* Group 2: Community Value */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-zenith-gold">
                      Wartość społeczności, o której mówiliśmy
                    </h4>
                    <div className="space-y-4">
                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-zenith-gold">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Nie da się ukryć że otoczenie prawdziwych osób wspierających daje przestrzeń, pozwala zrozumieć i daje siłę by iść dalej, zmieniać"
                        </p>
                        <p className="text-sm font-medium text-zenith-gold">— Artur</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-zenith-gold">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Ludwik to czarodziej 😉 to nie jest zwykły kurs"
                        </p>
                        <p className="text-sm font-medium text-zenith-gold">— Artur</p>
                      </blockquote>
                    </div>
                  </div>

                  {/* Group 3: Decisions */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-deep-charcoal">
                      A potem zaczęły się decyzje...
                    </h4>
                    <div className="space-y-4">
                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-deep-charcoal">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "O spoko! Dobra cena. Ja myślałem że między 2500 a 5000"
                        </p>
                        <p className="text-sm font-medium text-deep-charcoal">— Konrad</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-deep-charcoal">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Kupione! Wiem że to będzie dobra współpraca z Wami. Poznałem Was w najgorszym dla mnie kryzysie"
                        </p>
                        <p className="text-sm font-medium text-deep-charcoal">— Konrad</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-deep-charcoal">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Ja płaciłem więcej niż na początku i dalej się bardzo bardzo opłaca. Polecam każdemu 😎"
                        </p>
                        <p className="text-sm font-medium text-deep-charcoal">— Jakub <span className="text-xs opacity-70">(członek społeczności Lifehackerzy)</span></p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-deep-charcoal">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Wchodzę w to 👍🏻"
                        </p>
                        <p className="text-sm font-medium text-deep-charcoal">— Kamil</p>
                      </blockquote>

                      <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-deep-charcoal">
                        <p className="text-deep-charcoal/90 italic mb-2">
                          "Już nie mogę się doczekać!"
                        </p>
                        <p className="text-sm font-medium text-deep-charcoal">— Patryk</p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-twilight-indigo/20">
                  <p className="text-center font-semibold text-lg mb-4">
                    Miejsca zostały już zarezerwowane przez uczestników na żywo
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                    onClick={() => navigate("/program/meski-kompas")}
                  >
                    DOŁĄCZ ZANIM OFERTA WYGAŚNIE →
                  </Button>
                </div>
              </div>

              {/* Free Resources Section */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Materiały dodatkowe:
                </h3>

                <p className="mb-6 text-deep-charcoal/80">
                  Bezpłatne zasoby wspomniane podczas webinaru. Narzędzia i przestrzenie, które pomogły zarówno Mateuszowi, jak i setkom Lifehackerów w codziennej pracy nad sobą:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-twilight-indigo pl-4">
                    <h4 className="font-semibold text-twilight-indigo mb-2">🖥️ DeepWork.pl</h4>
                    <p className="text-sm text-deep-charcoal/70 mb-2">Bezpłatny cowork online</p>
                    <p className="text-sm">
                      Codziennie na Discordzie Lifehackerów. To właśnie tam Mateusz siedział w dniu swojej obrony, otrzymując wsparcie społeczności. Jak mówił Jakub - "zmiana poranna i zmiana wieczorna wspierają się nawzajem". Wejdź, włącz kamerę, zacznij pracować nad tym, co odkładasz.
                    </p>
                  </div>

                  <div className="border-l-4 border-zenith-gold pl-4">
                    <h4 className="font-semibold text-zenith-gold mb-2">🧘 UważneŻycie.pl</h4>
                    <p className="text-sm text-deep-charcoal/70 mb-2">Bezpłatne medytacje prowadzone przez Ludwika</p>
                    <p className="text-sm">
                      Każdy wtorek o 6:30 rano. Mniej niż 20 minut medytacji, które pomagają uporządkować myśli i zacząć dzień z wewnętrznym spokojem. Bo jak mówiliśmy - spokój to najważniejszy element wszystkich filarów.
                    </p>
                  </div>

                  <div className="border-l-4 border-deep-charcoal pl-4">
                    <h4 className="font-semibold text-deep-charcoal mb-2">👥 Lifehackerzy.pl</h4>
                    <p className="text-sm text-deep-charcoal/70 mb-2">Społeczność Klientów Ludwika</p>
                    <p className="text-sm">
                      Miejsce, w którym codziennie o 12:34 odbywają się Daily Coachingi. To tam Mateusz dostał narzędzia, które zmieniły jego życie. To tam możesz dostać feedback od ludzi, którzy myślą podobnie do Ciebie i rozumieją Twoje wyzwania.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Znasz kogoś, kto potrzebuje tej wiedzy?
                </h3>

                <p className="mb-6">
                  Możesz udostępnić to nagranie osobom, które mogłyby skorzystać
                  z metodologii 5 Filarów Męskości. Nagranie będzie aktywne tylko
                  przez 7 dni od daty webinaru.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500"
                    onClick={() => handleShare("Facebook")}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400"
                    onClick={() => handleShare("Twitter")}
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-700"
                    onClick={() => handleShare("LinkedIn")}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500"
                    onClick={() => handleShare("WhatsApp")}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-twilight-indigo text-twilight-indigo"
                    onClick={() => handleShare("Email")}
                  >
                    Email
                  </Button>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-6">
                  Najczęściej zadawane pytania:
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-twilight-indigo mb-2">
                      Czy to tylko dla mężczyzn?
                    </h4>
                    <p className="text-sm text-deep-charcoal/80">
                      Program Męski Kompas jest zaprojektowany specyficznie dla mężczyzn. Webinar jednak może być wartościowy dla każdego, kto zmaga się z paraliżem analitycznym.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-twilight-indigo mb-2">
                      Czy muszę być Lifehackerem?
                    </h4>
                    <p className="text-sm text-deep-charcoal/80">
                      Nie - program Męski Kompas jest otwarty dla wszystkich. Otrzymujesz w bonusie lifetime dostęp do społeczności Lifehackerzy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-twilight-indigo mb-2">
                      Co jeśli nie mam czasu na 5 tygodni?
                    </h4>
                    <p className="text-sm text-deep-charcoal/80">
                      To właśnie znak, że potrzebujesz tego programu. Spotkania są tak zaprojektowane, by dawać Ci energię, nie zabierać jej.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-twilight-indigo mb-2">
                      Czy będą kolejne edycje?
                    </h4>
                    <p className="text-sm text-deep-charcoal/80">
                      Tak, ale cena pilotażowa 497 zł jest zarezerwowana TYLKO dla pierwszej, testowej grupy. Kolejne edycje będą minimum dwukrotnie droższe.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-center text-deep-charcoal/70 mb-4">
                    Jeśli masz pytania dotyczące programu, napisz do nas
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/contact")}
                  >
                    Skontaktuj się z nami
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column wide */}
            <div className="space-y-6">
              {/* Engagement Features */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-6">
                  Maksymalizuj swoją naukę:
                </h3>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      handleResourceDownload("Chaptered Navigation")
                    }
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Chaptered Navigation
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleResourceDownload("Workbook")}
                  >
                    <BookOpen className="mr-2 h-4 w-4" /> Workbook
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleResourceDownload("Transcript")}
                  >
                    <FileText className="mr-2 h-4 w-4" /> Transcript
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleResourceDownload("Resources")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Resources
                  </Button>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-twilight-indigo/20 to-zenith-gold/20 backdrop-blur-lg rounded-2xl p-6 border border-twilight-indigo/30 shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Gotowy na transformację?
                </h3>

                <p className="mb-6">
                  Jeśli to, co usłyszałeś na webinarze, rezonuje z Tobą, rozważ
                  przejście do następnego kroku i dołączenie do programu Męski Kompas.
                </p>

                <Button
                  className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  onClick={() => navigate("/program/meski-kompas")}
                >
                  Dowiedz się więcej <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Testimonial */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <p className="italic mb-4">
                  "Program Męski Kompas pomógł mi wreszcie przestać dryfować. Po raz pierwszy od lat czuję, że mam kierunek i potrafię go utrzymać."
                </p>
                <p className="font-medium text-right">
                  – Paweł M., Analityk Danych
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebinarReplay;
