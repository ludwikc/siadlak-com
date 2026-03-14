import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

type TimelineLink = {
  time: string;
  label: string;
};

const timelineLinks: TimelineLink[] = [
  {
    time: "00:00",
    label:
      "Ten jeden obszar życia, który sabotuje wszystko inne (i dlaczego nikt o nim nie mówi)",
  },
  {
    time: "03:30",
    label:
      "Od obietnicy na klatce piersiowej ojca do 300 km dojazdów na studia: historia człowieka, który sprawdził każdą pułapkę analitycznego umysłu",
  },
  {
    time: "14:30",
    label:
      "Moment, kiedy siedziałem na deep work z atakiem paniki w dniu obrony... i zobaczyłem wiadomość, która wszystko zmieniła",
  },
  {
    time: "29:00",
    label:
      "Ta decyzja w Niemczech na zbiorach truskawek: jak jedno spojrzenie w lustro skończyło kilkuletnie dryfowanie",
  },
  {
    time: "36:00",
    label:
      "5 rzeczy, które sprawiają, że facet jest facetem (i dlaczego współczesna męskość to nie to, co myślisz)",
  },
  {
    time: "42:00",
    label:
      "3 sekundy, 3 pytania, 3 mikrokroki: jedyne ćwiczenie, którego potrzebujesz, żeby przestać analizować i zacząć działać",
  },
  {
    time: "54:00",
    label:
      'Dlaczego „chłopaki nie płaczą" to najgorsza rada, jaką możesz dać facetowi (i co zamiast tego musisz zrobić)',
  },
  {
    time: "01:18:00",
    label:
      "497 zł vs 2500 zł: dlaczego ten program jest 5x tańszy niż powinien (i co to znaczy dla ciebie)",
  },
  {
    time: "01:26:00",
    label:
      "10 miejsc. 5 tygodni. 1 szansa, żeby przestać być linią lotniczą, do której dokładasz pieniądze",
  },
];

const WebinarReplay = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [offerExpired, setOfferExpired] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    // Target date: October 18, 2025 at 21:00 (9:00 PM)
    const targetDate = new Date("2025-10-18T21:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(0);
        setOfferExpired(true);
      } else {
        setTimeLeft(Math.floor(difference / 1000));
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      setShowFloatingCTA(scrollPercentage > 0.3 && scrollPercentage < 0.85);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);

    if (days > 0) {
      return `${days} ${days === 1 ? "dzień" : "dni"}, ${hours} ${hours === 1 ? "godzina" : "godzin"}`;
    }
    return `${hours} ${hours === 1 ? "godzina" : "godzin"}, ${minutes} ${minutes === 1 ? "minuta" : "minut"}`;
  };

  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gradient-to-br from-diamond to-secondary pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-500 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">[REPLAY]</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-depth">
              Koniec z Dryfowaniem: Jak Analityczny Umysł Sabotuje Twoją Męskość
            </h1>

            <div className="max-w-md mx-auto mb-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-5 border border-red-500/30">
              <p className="font-semibold mb-2 text-red-600">
                ⏰ To nagranie jest dostępne tylko przez 48 godzin od
                zakończenia spotkania
              </p>
              <div className="text-2xl md:text-3xl font-bold text-depth">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Replay Video */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <div
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
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
              <h3 className="text-lg font-bold mb-1 text-depth">
                Nawigacja po rozdziałach
              </h3>
              <p className="text-xs text-on-light-dim mb-4">
                Kliknij, aby przejść do wybranego momentu
              </p>

              <div className="divide-y divide-gray-200">
                {timelineLinks.map((link, index) => (
                  <button
                    key={index}
                    className="w-full text-left py-2.5 hover:bg-depth/5 transition-colors duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <h4 className="flex-1 text-sm text-on-light leading-snug line-clamp-2 group-hover:text-depth transition-colors duration-200">
                        {link.label}
                      </h4>
                      <span className="flex-shrink-0 text-depth font-mono text-xs font-medium bg-depth/10 px-2 py-1 rounded group-hover:bg-depth group-hover:text-white transition-colors duration-200">
                        {link.time}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Limited-Time Offer */}
            <div
              className={`rounded-2xl p-8 border shadow-xl ${
                offerExpired
                  ? "bg-muted/50 border-muted"
                  : "bg-gradient-to-br from-white via-depth/5 to-depth/5 border-depth/30 backdrop-blur-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-2xl font-bold ${
                    offerExpired
                      ? "text-muted-foreground"
                      : "text-depth"
                  }`}
                >
                  {offerExpired
                    ? "⏱️ Było, minęło..."
                    : "🔥 Specjalna oferta dla oglądających replay"}
                </h3>

                <div
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    offerExpired
                      ? "bg-muted text-muted-foreground"
                      : "bg-brand-gradient text-white"
                  }`}
                >
                  {offerExpired ? "Oferta wygasła" : "Oferta pilotażowa"}
                </div>
              </div>

              <p
                className={`text-base mb-6 leading-relaxed ${offerExpired ? "text-muted-foreground" : "text-foreground/80"}`}
              >
                {offerExpired
                  ? "Ta specjalna oferta wygasła. Sprawdź stronę Męski Kompas, aby poznać aktualne możliwości."
                  : "Podczas webinaru na żywo przedstawiliśmy ekskluzywną ofertę pilotażową programu Męski Kompas - 5-tygodniową transformację przez wszystkie filary męskości."}
              </p>

              {!offerExpired && (
                <div className="mb-8 space-y-8">
                  {/* Pricing Box */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-depth via-depth/95 to-electric shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-depth/20 backdrop-blur-sm border border-depth/40 text-white mb-6">
                        <span className="text-sm font-bold uppercase tracking-wide">
                          🔥 Oferta Pilotażowa
                        </span>
                      </div>

                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <p className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wide">Cena pilotażu</p>
                          <div className="flex items-baseline gap-3">
                            <p className="text-6xl md:text-7xl font-black text-white drop-shadow-lg">497</p>
                            <p className="text-3xl font-bold text-white/90 mb-2">zł</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-white/70 line-through mb-1">Regularna cena</p>
                          <p className="text-3xl font-bold text-white/60 line-through">1997 zł</p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/20">
                        <p className="text-xl font-bold text-electric">
                          🎯 Oszczędzasz 1500 zł (75% taniej!)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    <p className="text-lg font-bold text-depth">Co otrzymujesz w programie:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">✓</span>
                        <span className="text-foreground/90 leading-relaxed">5 tygodni pracy z Ludwikiem i Mateuszem w grupie max 10 mężczyzn</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">✓</span>
                        <span className="text-foreground/90 leading-relaxed">Workbooki do każdego filaru męskości</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">✓</span>
                        <span className="text-foreground/90 leading-relaxed">Dostęp do zamkniętej grupy i sesji coachingowych</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">★</span>
                        <span className="text-foreground/90 leading-relaxed">
                          <strong className="text-depth">BONUS:</strong>{" "}Lifetime dostęp do społeczności Lifehackerzy
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">★</span>
                        <span className="text-foreground/90 leading-relaxed">
                          <strong className="text-depth">BONUS:</strong>{" "}Kurs "7 Technik Produktywności" (wartość 497 zł)
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <span className="mr-3 mt-0.5 text-depth text-lg">✓</span>
                        <span className="text-foreground/90 leading-relaxed">Nagrania wszystkich sesji na zawsze</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <Button
                size="lg"
                className={`w-full text-lg font-bold py-6 ${
                  offerExpired
                    ? "bg-muted hover:bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-brand-gradient hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                }`}
                onClick={() => navigate("/program/meskosc")}
                disabled={offerExpired}
              >
                {offerExpired
                  ? "Oferta wygasła - Było, minęło..."
                  : "DOŁĄCZ DO MĘSKIEGO KOMPASU →"}
              </Button>

              {!offerExpired && (
                <div className="mt-4 p-4 bg-depth/5 rounded-lg border border-depth/10">
                  <p className="text-sm text-center text-foreground/70 leading-relaxed">
                    <span className="font-semibold text-depth">✓ Gwarancja satysfakcji:</span>{" "}
                    Jeśli po pierwszym tygodniu uznasz, że to nie dla Ciebie - zwrot 100% środków, bez pytań.
                  </p>
                </div>
              )}
            </div>

            {/* Live Participants Testimonials */}
            <div className="bg-gradient-to-br from-depth/5 to-electric/5 backdrop-blur-lg rounded-2xl p-8 border border-depth/20 shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-depth">
                💬 Tak zareagowali mężczyźni podczas transmisji na żywo:
              </h3>
              <p className="text-on-light-dim mb-6">
                Poniżej prawdziwe komentarze z czatu webinaru - bez edycji, bez filtrów.
              </p>

              <div className="space-y-8">
                {/* Group 1: Recognition */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-depth">"To brzmi jak moja historia..."</h4>
                  <div className="space-y-4">
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-depth">
                      <p className="text-on-light-dim italic mb-2">"Kurczę jakbym słyszał o swoim poprzednim związku - lata walki, za wszelką cenę inwestycja w związek i totalne załamanie, kiedy odeszła, totalny dołek i porażka - znam to"</p>
                      <p className="text-sm font-medium text-depth">— Konrad</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-depth">
                      <p className="text-on-light-dim italic mb-2">"Znam to uczucie bardzo dobrze z autopsji"</p>
                      <p className="text-sm font-medium text-depth">— Daniel</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-depth">
                      <p className="text-on-light-dim italic mb-2">"Hi5 z tym mózgiem analitycznym, nie jest łatwo 🙈"</p>
                      <p className="text-sm font-medium text-depth">— Anna</p>
                    </blockquote>
                  </div>
                </div>

                {/* Group 2: Community Value */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-electric">Wartość społeczności, o której mówiliśmy</h4>
                  <div className="space-y-4">
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-electric">
                      <p className="text-on-light-dim italic mb-2">"Nie da się ukryć że otoczenie prawdziwych osób wspierających daje przestrzeń, pozwala zrozumieć i daje siłę by iść dalej, zmieniać"</p>
                      <p className="text-sm font-medium text-electric">— Artur</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-electric">
                      <p className="text-on-light-dim italic mb-2">"Ludwik to czarodziej 😉 to nie jest zwykły kurs"</p>
                      <p className="text-sm font-medium text-electric">— Artur</p>
                    </blockquote>
                  </div>
                </div>

                {/* Group 3: Decisions */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-on-light">A potem zaczęły się decyzje...</h4>
                  <div className="space-y-4">
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-on-light">
                      <p className="text-on-light-dim italic mb-2">"O spoko! Dobra cena. Ja myślałem że między 2500 a 5000"</p>
                      <p className="text-sm font-medium text-on-light">— Konrad</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-on-light">
                      <p className="text-on-light-dim italic mb-2">"Kupione! Wiem że to będzie dobra współpraca z Wami. Poznałem Was w najgorszym dla mnie kryzysie"</p>
                      <p className="text-sm font-medium text-on-light">— Konrad</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-on-light">
                      <p className="text-on-light-dim italic mb-2">"Ja płaciłem więcej niż na początku i dalej się bardzo bardzo opłaca. Polecam każdemu 😎"</p>
                      <p className="text-sm font-medium text-on-light">— Jakub{" "}<span className="text-xs opacity-70">(członek społeczności Lifehackerzy)</span></p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-on-light">
                      <p className="text-on-light-dim italic mb-2">"Wchodzę w to 👍🏻"</p>
                      <p className="text-sm font-medium text-on-light">— Kamil</p>
                    </blockquote>
                    <blockquote className="bg-white/60 rounded-lg p-4 border-l-4 border-on-light">
                      <p className="text-on-light-dim italic mb-2">"Już nie mogę się doczekać!"</p>
                      <p className="text-sm font-medium text-on-light">— Patryk</p>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-depth/20">
                <p className="text-center font-semibold text-lg mb-4">
                  Miejsca zostały już zarezerwowane przez uczestników na żywo
                </p>
                <Button
                  size="lg"
                  className="w-full bg-depth hover:bg-depth/90 text-white"
                   onClick={() => navigate("/program/meskosc")}
                >
                  DOŁĄCZ ZANIM OFERTA WYGAŚNIE →
                </Button>
              </div>
            </div>

            {/* Free Resources Section */}
            <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Materiały dodatkowe
              </h3>

              <p className="mb-6 text-on-light-dim">
                Bezpłatne zasoby wspomniane podczas webinaru. Narzędzia i
                przestrzenie, które pomogły zarówno Mateuszowi, jak i setkom
                Lifehackerów w codziennej pracy nad sobą:
              </p>

              <div className="space-y-6">
                <a
                  href="https://deepwork.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-blue-900 hover:bg-blue-900/5 -ml-6 pl-6 pr-4 py-3 rounded-r-lg transition-colors group"
                >
                  <h4 className="font-semibold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors">
                    🖥️ DeepWork.pl →
                  </h4>
                  <p className="text-sm text-on-light-dim mb-2">
                    Bezpłatny cowork online
                  </p>
                  <p className="text-sm text-on-light-dim">
                    Codziennie na Discordzie Lifehackerów. To właśnie tam
                    Mateusz siedział w dniu swojej obrony, otrzymując wsparcie
                    społeczności. Jak mówił Jakub - "zmiana poranna i zmiana
                    wieczorna wspierają się nawzajem". Wejdź, włącz kamerę,
                    zacznij pracować nad tym, co odkładasz.
                  </p>
                </a>

                <a
                  href="https://uwaznezycie.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-green-800 hover:bg-green-800/5 -ml-6 pl-6 pr-4 py-3 rounded-r-lg transition-colors group"
                >
                  <h4 className="font-semibold text-green-800 mb-2 group-hover:text-green-700 transition-colors">
                    🧘 UważneŻycie.pl →
                  </h4>
                  <p className="text-sm text-on-light-dim mb-2">
                    Bezpłatne medytacje prowadzone przez Ludwika
                  </p>
                  <p className="text-sm text-on-light-dim">
                    Każdy wtorek o 6:30 rano. Mniej niż 20 minut medytacji,
                    które pomagają uporządkować myśli i zacząć dzień z
                    wewnętrznym spokojem. Bo jak mówiliśmy - spokój to
                    najważniejszy element wszystkich filarów.
                  </p>
                </a>

                <a
                  href="https://lifehackerzy.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-lifehacker-purple hover:bg-lifehacker-purple/5 -ml-6 pl-6 pr-4 py-3 rounded-r-lg transition-colors group"
                >
                  <h4 className="font-semibold text-lifehacker-purple mb-2 group-hover:text-lifehacker-purple-light transition-colors">
                    👥 Lifehackerzy.pl →
                  </h4>
                  <p className="text-sm text-on-light-dim mb-2">
                    Społeczność Klientów Ludwika
                  </p>
                  <p className="text-sm text-on-light-dim">
                    Miejsce, w którym codziennie o 12:34 odbywają się Daily
                    Coachingi. To tam Mateusz dostał narzędzia, które zmieniły
                    jego życie. To tam możesz dostać feedback od ludzi, którzy
                    myślą podobnie do Ciebie i rozumieją Twoje wyzwania.
                  </p>
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-semibold mb-6">
                Najczęściej zadawane pytania
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-depth mb-2">
                    Czy muszę być Lifehackerem?
                  </h4>
                  <p className="text-sm text-on-light-dim">
                    Nie - program Męski Kompas jest otwarty dla wszystkich.
                    Otrzymujesz w bonusie lifetime dostęp do społeczności
                    Lifehackerzy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-depth mb-2">
                    Czy będą kolejne edycje?
                  </h4>
                  <p className="text-sm text-on-light-dim">
                    Tak, ale cena pilotażowa 497 zł jest zarezerwowana TYLKO dla
                    pierwszej, testowej grupy. Kolejne edycje będą minimum
                    dwukrotnie droższe.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-depth mb-2">
                    Co jeśli po tygodniu uznam, że to nie dla mnie?
                  </h4>
                  <p className="text-sm text-on-light-dim">
                    Gwarancja satysfakcji - jeśli po pierwszym tygodniu uznasz,
                    że to nie dla Ciebie, otrzymujesz zwrot 100% środków, bez
                    pytań.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-center text-on-light-dim mb-4">
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
        </div>
      </div>

      {/* Floating CTA */}
      {showFloatingCTA && !offerExpired && (
        <div className="fixed bottom-6 left-0 right-0 z-50 px-4 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-gradient rounded-2xl shadow-2xl p-4 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white text-center sm:text-left">
                  <p className="font-bold text-base sm:text-lg">
                    Oferta pilotażowa: 497 zł
                  </p>
                  <p className="text-xs sm:text-sm text-white/90">
                    Tylko 10 miejsc w pierwszej edycji
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-depth hover:bg-white/90 font-bold shadow-lg px-6 py-3"
                  onClick={() => navigate("/program/meski-kompas")}
                >
                  <span className="inline sm:hidden">DOŁĄCZ →</span>
                  <span className="hidden sm:inline">DOŁĄCZ TERAZ →</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default WebinarReplay;
