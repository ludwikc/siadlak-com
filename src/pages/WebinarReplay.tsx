
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Timeline links for the webinar navigation
const timelineLinks = [
  { time: "00:00", label: "Wprowadzenie i omówienie agendy" },
  { time: "12:34", label: "Trzy filary metodologii Black Panther" },
  { time: "27:15", label: "Technika wzmacniania suwerenności zawodowej" },
  { time: "43:21", label: "Praktyczne przykłady transformacji klientów" },
  { time: "54:30", label: "Jak wdrożyć te koncepcje w swoim życiu" },
  { time: "01:05:45", label: "Przewodnik po następnych krokach" },
  { time: "01:12:33", label: "Sesja Q&A z uczestnikami" },
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

  const handleLifeOSSystemUpgrade = () => {
    navigate("/program/lifeos-system-upgrade");
  };

  const handleUnlockBonus = () => {
    toast({
      title: "Materiały odblokowane",
      description:
        "Dodatkowe materiały zostały odblokowane i są dostępne do pobrania.",
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
              Jak przejąć kontrolę nad swoją karierą i życiem w erze sztucznej
              inteligencji
            </h1>

            <p className="text-lg mb-4 text-deep-charcoal/80">
              Nagranie dostępne tylko do 27 maja 2025
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
                    {offerExpired ? "Oferta wygasła" : "Oferta specjalna"}
                  </div>
                </div>

                <p
                  className={`text-lg mb-6 ${offerExpired ? "text-gray-500" : ""}`}
                >
                  {offerExpired
                    ? "Ta specjalna oferta wygasła. Sprawdź stronę LifeOS: System Upgrade, aby poznać aktualne możliwości."
                    : "Podczas webinaru na żywo, przedstawiłem ekskluzywną ofertę dla uczestników. Zdecydowałem się przedłużyć ją dla osób oglądających nagranie, ale tylko do końca odliczania powyżej."}
                </p>

                <Button
                  size="lg"
                  className={`w-full ${
                    offerExpired
                      ? "bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  }`}
                  onClick={handleLifeOSSystemUpgrade}
                  disabled={offerExpired}
                >
                  {offerExpired
                    ? "Oferta wygasła - Było, minęło..."
                    : "ODKRYJ PROGRAM LIFEOS: SYSTEM UPGRADE I SPECJALNĄ OFERTĘ"}
                </Button>

                {!offerExpired && (
                  <p className="text-sm text-center mt-2">
                    Oferta wygasa razem z dostępem do nagrania
                  </p>
                )}
              </div>

              {/* Bonus Section */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Ekskluzywne materiały, o których nie wspomniałem podczas
                  webinaru:
                </h3>

                <p className="mb-6">
                  Przygotowałem dodatkowy zestaw narzędzi "Suwerenny strateg IT"
                  - dostępny TYLKO dla osób, które obejrzały cały webinar i
                  klikną poniższy przycisk:
                </p>

                <Button
                  className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  onClick={handleUnlockBonus}
                >
                  Odblokuj dodatkowe materiały
                </Button>

                <p className="text-xs text-center mt-2">
                  Dostępne po obejrzeniu minimum 80% nagrania
                </p>
              </div>

              {/* Social Sharing */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Znasz kogoś, kto potrzebuje tej wiedzy?
                </h3>

                <p className="mb-6">
                  Możesz udostępnić to nagranie osobom, które mogłyby skorzystać
                  z metodologii Black Panther. Nagranie będzie aktywne tylko
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
                  przejście do następnego kroku i dołączenie do programu Mental
                  Elevator.
                </p>

                <Button
                  className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  onClick={handleLifeOSSystemUpgrade}
                >
                  Dowiedz się więcej <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Testimonial */}
              <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <p className="italic mb-4">
                  "Po implementacji tylko trzech technik z metodologii Black
                  Panther, moja efektywność wzrosła o 40%, a co ważniejsze -
                  odzyskałem kontrolę nad swoim czasem i energią."
                </p>
                <p className="font-medium text-right">
                  – Marcin K., DevOps Engineer
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
