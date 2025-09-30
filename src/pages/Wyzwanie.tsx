import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Countdown Timer Component
function ChallengeCountdown() {
  const targetDate = new Date("2025-10-07T11:30:00+02:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24;

  return (
    <div className="flex justify-center gap-2 sm:gap-4 mb-12">
      <div className="text-center">
        <div
          className={`${isUrgent ? "bg-red-500/10 border-red-500 animate-pulse" : "bg-card border-border"} border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] transition-all`}
        >
          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {timeLeft.days}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase">
            dni
          </div>
        </div>
      </div>
      <div className="text-center">
        <div
          className={`${isUrgent ? "bg-red-500/10 border-red-500 animate-pulse" : "bg-card border-border"} border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] transition-all`}
        >
          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {timeLeft.hours}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase">
            godz
          </div>
        </div>
      </div>
      <div className="text-center">
        <div
          className={`${isUrgent ? "bg-red-500/10 border-red-500 animate-pulse" : "bg-card border-border"} border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] transition-all`}
        >
          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {timeLeft.minutes}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase">
            min
          </div>
        </div>
      </div>
      <div className="text-center">
        <div
          className={`${isUrgent ? "bg-red-500/10 border-red-500 animate-pulse" : "bg-card border-border"} border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px] transition-all`}
        >
          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {timeLeft.seconds}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase">
            sek
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wyzwanie() {
  return (
    <Layout hideHeader hideFooter>
      <SEO
        title="Drwal w Białej Koszuli - 4-dniowe wyzwanie produktywności"
        description="Darmowe 4-dniowe wyzwanie dla profesjonalistów, którzy osiągają cele, ale nie czują spełnienia. 7-10 października 2025."
        keywords="produktywność, wyzwanie, cele, wartości, efektywność, coaching"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 py-12 sm:py-20 px-4">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8 sm:space-y-10">
            {/* Main headline with staggered animation */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              >
                Ile kursów produktywności
                <br />
                <span className="text-[#2563eb]">już kupiłeś?</span>
              </h1>

              <div className="flex items-center justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light">
                <span className="inline-block transition-all duration-300 hover:scale-125 hover:text-[#2563eb] hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] cursor-default">
                  3?
                </span>
                <span className="inline-block transition-all duration-300 hover:scale-125 hover:text-[#2563eb] hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] cursor-default">
                  5?
                </span>
                <span className="inline-block transition-all duration-300 hover:scale-125 hover:text-[#2563eb] hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] cursor-default">
                  7?
                </span>
              </div>
            </div>

            {/* The uncomfortable question */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -inset-4 bg-[#2563eb]/5 blur-xl rounded-full"></div>
              <p className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold max-w-4xl mx-auto leading-tight">
                I pytanie drugie:
                <br />
                <span className="text-[#2563eb]">
                  Dlaczego nadal czujesz,
                  <br />
                  że coś jest nie tak?
                </span>
              </p>
            </div>

            {/* The answer */}
            <div
              className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="leading-relaxed">
                Nie dlatego, że tamte kursy były złe.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Dlatego, że{" "}
                <span className="text-[#2563eb] relative inline-block">
                  rąbiesz drzewa w cudzym lesie.
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-[#2563eb]/30 rounded-full"></span>
                </span>
              </p>
            </div>

            {/* Main promise - MOVED UP */}
            <div
              className="py-6 sm:py-8 space-y-3 sm:space-y-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                4 dni, które pokażą Ci,
                <br />
                <span className="text-[#2563eb]">GDZIE</span> powinieneś rąbać
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto italic">
                (Zamiast DAĆ Ci ostrzejszą siekierę do rąbania w złym miejscu)
              </p>
            </div>

            {/* PRIMARY CTA - MOVED WAY UP & ENHANCED */}
            <div
              className="py-6 sm:py-8 space-y-4 sm:space-y-6 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="relative group inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a
                  href="https://buy.siadlak.com/checkout/spotkanie-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center px-6 py-4 sm:px-10 sm:py-5 text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="block text-xs sm:text-sm uppercase tracking-wider opacity-90 mb-1">
                    Darmowe 4-dniowe wyzwanie
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl font-bold">
                    Sprawdzam, w którym lesie stoję →
                  </span>
                </a>
              </div>

              {/* Social proof reframed as scarcity */}
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  <span className="text-[#2563eb]">
                    Grupa ograniczona do 50 osób
                  </span>{" "}
                  • Zostało{" "}
                  <span className="text-[#2563eb] font-bold">16 miejsc</span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  (34 profesjonalistów już dołączyło)
                </p>
              </div>
            </div>

            {/* Event details card - MOVED DOWN */}
            <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2563eb]/20 to-accent/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
                  <div className="grid gap-3 sm:gap-4 text-left">
                    <div className="flex items-center gap-3 group/item hover:bg-muted/30 p-2 rounded-lg transition-colors cursor-default">
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-2xl">📅</span>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Data
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-foreground">
                          7-10 października 2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group/item hover:bg-muted/30 p-2 rounded-lg transition-colors cursor-default">
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Godzina
                        </p>
                        <p className="text-base sm:text-lg text-foreground">
                          Codziennie o 11:30
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group/item hover:bg-muted/30 p-2 rounded-lg transition-colors cursor-default">
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Format
                        </p>
                        <p className="text-base sm:text-lg text-foreground">
                          Live na Discord
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group/item hover:bg-muted/30 p-2 rounded-lg transition-colors cursor-default">
                      <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-2xl">📹</span>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Nagrania
                        </p>
                        <p className="text-base sm:text-lg text-foreground">
                          Zostają (ale energia live'a nie)
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-border/50">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-[#2563eb] text-center">
                        ZERO kosztów • Zero bullshitu • Zero motywacyjnych
                        frazesów
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown - MOVED DOWN as urgency reinforcement */}
            <div className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 uppercase tracking-wide">
                Start za:
              </p>
              <ChallengeCountdown />
            </div>

            {/* Trust badges + Secondary CTA */}
            <div
              className="pt-4 sm:pt-6 space-y-4 sm:space-y-6 animate-fade-in"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
                <p className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    Bezpłatny dostęp • Bez karty • Bez subskrypcji
                  </span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    Dostaniesz: Link do Discord + Materiały + Przypomnienia
                  </span>
                </p>
              </div>

              {/* Secondary CTA - scroll down */}
              <button
                onClick={() =>
                  document
                    .getElementById("pain-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm sm:text-base text-muted-foreground hover:text-[#2563eb] transition-colors underline decoration-dotted underline-offset-4"
              >
                Dowiedz się więcej ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section id="pain-section" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
            Rozpoznajesz któreś z tych?
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Pracuję 50+ godzin tygodniowo i mam wrażenie, że robię w kółko
                to samo"
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Nie robisz. Ty RĄBIESZ.
                  <br />
                  Problem:{" "}
                  <strong className="text-foreground">
                    To nie Twoje drzewa.
                  </strong>
                </p>

                <p>
                  To cele, które brzmią dobrze na LinkedIn.
                  <br />
                  To projekty, które "trzeba" zrobić.
                  <br />
                  To oczekiwania rodziców/szefa/społeczeństwa zamaskowane jako
                  "Twoja ambicja".
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Przeczytałem 30 książek o produktywności. Żadna nie pomogła na
                dłużej"
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Bo książki dają Ci{" "}
                  <strong className="text-foreground">narzędzia</strong>.<br />
                  Ty potrzebujesz{" "}
                  <strong className="text-foreground">kierunku</strong>.
                </p>

                <p>
                  Najostrzejsza siekiera na świecie nie pomoże, jeśli rąbiesz w
                  cudzym lesie.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Osiągam cele. Czuję pustkę."
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  To nie depresja.
                  <br />
                  To{" "}
                  <strong className="text-foreground">
                    cognitive dissonance
                  </strong>
                  .
                </p>

                <p>
                  Twój mózg wie, że rąbiesz w cudzym lesie.
                  <br />
                  Ale nie chcesz się do tego przyznać. Bo wtedy trzeba zmienić.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Mam 5 rozpoczętych projektów. 0 ukończonych."
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  To nie ADHD.
                  <br />
                  To nie brak dyscypliny.
                </p>

                <p>
                  To{" "}
                  <strong className="text-foreground">
                    paralysis analysis
                  </strong>{" "}
                  - objaw tego, że nie wiesz, KTÓRY las jest Twój.
                </p>

                <p>
                  Więc rąbiesz trochę tu, trochę tam, licząc że "w końcu trafi".
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2563eb]/10 border-l-4 border-[#2563eb] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prawdziwy problem (którego nikt nie nazywa)
            </h3>
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Większość ludzi optymalizuje <strong>DROGĘ</strong> do
              niewłaściwego <strong>MIEJSCA</strong>.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
              <li>Mają techniki Pomodoro</li>
              <li>Mają aplikacje GTD</li>
              <li>Mają morning routines</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              I nadal czują, że{" "}
              <strong className="text-foreground">coś jest nie tak</strong>.
            </p>
            <p className="text-xl font-bold text-foreground mt-6">
              Bo problem nie jest w siekierze. Problem jest w lesie.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            4 DNI, 4 DIAGNOZ
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    1
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 1: "Sprawdzian Lasu"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Odkryjesz, ile z Twoich obecnych "priorytetów" wybrałeś
                    świadomie, a ile przejąłeś od kogoś innego.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong>{" "}
                    Konfrontacja z kartką (7 min, które mogą zmienić 7 lat)
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Lista "drzew", które przestaniesz
                    rąbać
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    2
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 2: "Kompas, Nie Mapa"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dostaniesz framework, który pokazuje TWÓJ las (nie cel na
                    LinkedIn, nie rada rodzica, nie artykuł z Harvard Business
                    Review)
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong>{" "}
                    Kalibracja Kompasu - Twoje TOP 5 wartości
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Wiedza, które cele są cudze (i
                    dlaczego możesz je odpuścić bez poczucia winy)
                  </p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    3
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 3: "System, Nie Motywacja"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dostaniesz 3 narzędzia (Siekiera, Piła, Kompas) i nauczysz
                    się, KTÓREGO użyć KIEDY (i przestaniesz używać piły do
                    siekiery jak 99% ludzi)
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong>{" "}
                    Design Your Week
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Twój idealny tydzień na kartce
                    (gotowy do wdrożenia w poniedziałek)
                  </p>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    4
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 4: "Live Daily 12:34"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coaching session na żywo. 3-4 osoby dostaną coaching przy
                    całej grupie. Reszta uczy się z ich problemów.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Format:</strong>{" "}
                    Przychodzisz z problemem → Wychodzisz z planem
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Bonus:</strong> Prezentacja kursu "Hakowanie
                    Produktywności" (dla tych, którzy chcą pełny system)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            To{" "}
            <span className="relative inline-block text-red-600">
              nie jest
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,2 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            kolejny webinar motywacyjny
          </h2>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              <div className="mx-auto md:mx-0">
                <img
                  src="/lovable-uploads/ludwik-siadlak-profile.png"
                  alt="Ludwik C. Siadlak"
                  className="rounded-lg w-full max-w-[300px]"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Prowadzi: Ludwik C. Siadlak
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Nie guru. Nie coach life. Nie motivational speaker.
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg font-semibold text-foreground">
                    Facet, który:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      Przeszedł tę samą ścieżkę (30+ kursów produktywności, 0
                      transformacji)
                    </li>
                    <li>
                      Znalazł własny las (i wyciął już ścieżkę, którą możesz
                      pójść)
                    </li>
                    <li>
                      Prowadzi Daily Coaching 12:34 dla społeczności
                      Lifehackerzy od lat
                    </li>
                  </ul>

                  <p className="text-xl font-bold text-foreground pt-4">
                    Nie uczę produktywności. Uczę, jak przestać rąbać w cudzym
                    lesie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Nie mam czasu na 4-dniowe wyzwanie"
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Masz czas na scrollowanie LinkedIn 40 min dziennie.
                <br />
                Masz czas na "ważne" spotkania, które mogły być mailem.
                <br />
                Masz czas na rąbanie w cudzym lesie.
              </p>

              <p className="text-foreground font-semibold text-lg">
                Pytanie: Czy masz czas na 4 dni, które mogą zmienić następne 4
                lata?
              </p>
            </div>
          </div>

          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Już próbowałem tysiąca rzeczy. To też nie zadziała."
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-lg">
                Dobra wiadomość: Nie próbowałeś TEGO.
              </p>

              <p>
                Tamte kursy dawały Ci narzędzia.
                <br />
                To wyzwanie pokaże Ci, CZY RĄBIESZ WE WŁAŚCIWYM LESIE.
              </p>

              <p>
                Jeśli nie - żadne narzędzie nie pomoże.
                <br />
                Jeśli tak - w końcu będziesz wiedział, dlaczego warto
                kontynuować.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Co jeśli odkryję, że rąbię w cudzym lesie i... będę musiał to
              zmienić?"
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-2xl font-bold text-foreground">Tak.</p>

              <p>
                I to jest powód, dlaczego większość ludzi tego nie robi.
                <br />
                Łatwiej kupić kolejny kurs produktywności niż skonfrontować się
                z prawdą.
              </p>

              <p className="text-foreground font-semibold text-lg">
                Ale prawda nie zniknie. Tylko będzie głośniejsza z każdym
                rokiem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Najczęstsze pytania
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to naprawdę za darmo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tak. Zero kosztów. Wyzwanie jest darmowe. W dniu 4 przedstawię
                płatny kurs, ale udział w wyzwaniu nie zobowiązuje do niczego.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co jeśli nie mogę być na żywo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nagrania zostają dostępne dla wszystkich zapisanych. Ale
                interakcja na żywo jest najważniejsza - szczególnie w dniu 4
                (live coaching).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to kolejny kurs o Pomodoro i GTD?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nie. To nie jest o technikach. To o fundamentach. Najpierw
                wybieramy właściwy las, potem ostrzymy siekierę.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Dla kogo to NIE jest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Dla osób szukających quick fix. Dla osób, które nie są gotowe
                skonfrontować się z pytaniem "czy to naprawdę moje cele?". Dla
                osób bez 60 minut dziennie przez 4 dni.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Jak wygląda techniczne setup?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Potrzebujesz: 1) Konto Discord (za darmo), 2) Link dostaniesz w
                mailu po zapisie, 3) Instrukcja wideo: "Jak dołączyć" w
                pierwszym mailu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co po wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Zależy od Ciebie. Możesz wdrożyć narzędzia samodzielnie. Możesz
                dołączyć do kursu "Hakowanie Produktywności" (8 tygodni, daily
                coaching, społeczność). Możesz nic nie robić. Żadnych
                zobowiązań.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Kto jeszcze będzie na wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Profesjonaliści z różnych branż: IT, biznes, freelancing,
                zarządzanie. Wiek: 30-45. Wspólny mianownik: wysoka ambicja,
                poczucie, że coś jest nie tak z obecnym sposobem pracy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        id="signup"
        className="py-20 px-4 bg-gradient-to-br from-[#2563eb]/20 to-muted/30"
      >
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Dwa scenariusze:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div
                className="border border-border border-l-4 border-l-red-500 rounded-xl p-6"
                style={{ backgroundColor: "rgb(239 68 68 / 0.45)" }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  SCENARIUSZ A:
                </h3>
                <p className="text-foreground leading-relaxed">
                  Nie zapiszesz się. Za miesiąc będziesz dokładnie tam, gdzie
                  jesteś teraz. Tylko starszy o miesiąc. I nadal będziesz rąbał
                  w cudzym lesie.
                </p>
              </div>

              <div
                className="border border-border border-l-4 border-l-green-500 rounded-xl p-6"
                style={{ backgroundColor: "rgb(34 197 94 / 0.45)" }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  SCENARIUSZ B:
                </h3>
                <p className="text-foreground leading-relaxed mb-3">
                  Zapiszesz się. Za 4 dni będziesz wiedział:
                </p>
                <ul className="space-y-1 text-foreground list-disc list-inside">
                  <li>W którym lesie stoję</li>
                  <li>Gdzie powinienem być</li>
                  <li>Którędy iść</li>
                  <li>Jak to wdrożyć</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <a
              href="https://buy.siadlak.com/checkout/spotkanie-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors"
            >
              Sprawdzam, w którym lesie stoję (4 dni, 0 zł)
            </a>

            <div
              className="border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto text-left"
              style={{ backgroundColor: "rgb(34 197 94 / 0.45)" }}
            >
              <p className="font-semibold text-foreground mb-3">Dostaniesz:</p>
              <ul className="space-y-2 text-foreground list-disc list-inside">
                <li>Link do Discord (natychmiast)</li>
                <li>Materiały przygotowawcze (dzień przed startem)</li>
                <li>Przypomnienia o live'ach (żebyś nie przegapił)</li>
                <li>Dostęp do nagrań (jeśli nie zdążysz na live)</li>
              </ul>
              <p className="text-lg font-semibold text-foreground mt-6 text-center">
                Start: 7 października, godz. będzie niespodzianka
              </p>
            </div>
          </div>

          <div className="bg-[#2563eb]/10 border-l-4 border-[#2563eb] rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-foreground mb-4">
              P.S. To nie jest dla każdego.
            </p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Jeśli szukasz motywacyjnych frazesów - odpuść.
                <br />
                Jeśli chcesz magicznej pigułki - odpuść.
                <br />
                Jeśli chcesz, żebym Ci powiedział, że "wszystko jest OK" -
                odpuść.
              </p>

              <p className="font-semibold text-foreground">
                To wyzwanie jest dla ludzi, którzy:
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Mają dość udawania, że wszystko jest OK</li>
                <li>Są gotowi skonfrontować się z prawdą</li>
                <li>
                  Chcą wiedzieć, CZY rąbią w swoim lesie (nawet jeśli odpowiedź
                  będzie trudna)
                </li>
              </ul>

              <p className="text-lg font-bold text-foreground pt-4">
                Jeśli to Ty - widzimy się 7 października.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.siadlak.com/checkout/spotkanie-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors"
            >
              Ostatnia szansa: Zapisuję się teraz
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Dołącz do 34 profesjonalistów, którzy już sprawdzają, czy rąbią w
              swoim lesie.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Masz pytania? Napisz:{" "}
            <a
              href="mailto:ludwikc@siadlak.email"
              className="text-[#2563eb] hover:underline"
            >
              ludwikc@siadlak.email
            </a>
          </p>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link
              to="/legal/privacy"
              className="text-muted-foreground hover:text-[#2563eb]"
            >
              Polityka prywatności
            </Link>
            <Link
              to="/legal/terms"
              className="text-muted-foreground hover:text-[#2563eb]"
            >
              Regulamin
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Ludwik C. Siadlak. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </Layout>
  );
}
