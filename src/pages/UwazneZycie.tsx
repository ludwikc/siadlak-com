import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import lifehackerzyLogo from "@/assets/lifehackerzy-logotyp.png";
import {
  ArrowRight,
  Star,
  Anchor,
  ShipWheel,
  Target,
  Brain,
  Zap,
  CheckCircle2,
  Check,
  Sparkles,
  Compass,
  Trophy,
  Shield,
  Eye,
  Heart,
  Navigation,
  Battery,
} from "lucide-react";

const UwazneZycie = () => {
  const ctaUrl = "https://buy.siadlak.com/checkout/uwaznezycie";

  return (
    <Layout>
      <SEO
        title="Uważne Życie: Zostań Kapitanem Własnego Życia"
        description="6-tygodniowy program mentalny, który zamieni Cię z reaktywnego pasażera w proaktywnego kapitana. Przejmij kontrolę nad swoim umysłem."
      />

      {/* HERO SECTION - Deep Ocean Premium Theme */}
      <section
        className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 40%, hsl(205, 40%, 14%) 100%)",
        }}
      >
        {/* Subtle depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

        {/* Refined ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>

        {/* Subtle gold accent glow */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[radial-gradient(circle,rgba(251,191,36,0.04),transparent_70%)] blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Event badge */}
            <div className="flex justify-center mb-8 md:mb-10 animate-fade-in">
              <div
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full border backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(59,130,246,0.2) 100%)",
                  borderColor: "rgba(125,211,252,0.3)",
                  boxShadow:
                    "0 0 30px rgba(56, 189, 248, 0.15), 0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 flex-shrink-0" />
                <span className="font-semibold text-sky-100 text-xs sm:text-sm md:text-base tracking-wider uppercase">
                  Program 6-tygodniowy • Dostęp na zawsze
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.15] tracking-tight">
                <span className="text-slate-100">PRZESTAŃ BYĆ PASAŻEREM.</span>
                <br />
                <span
                  className="inline-block mt-2 md:mt-3 bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
                >
                  ZOSTAŃ KAPITANEM WŁASNEGO ŻYCIA.
                </span>
              </h1>

              <div className="mb-10 md:mb-12 flex justify-center animate-scale-in">
                <div
                  className="inline-block rounded-2xl px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 border max-w-4xl backdrop-blur-md transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    borderColor: "rgba(125, 211, 252, 0.2)",
                    boxShadow:
                      "0 16px 48px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 leading-relaxed">
                    Oto jak w 6 tygodni odzyskasz{" "}
                    <span className="font-semibold text-sky-300">
                      kontrolę, spokój i jasność umysłu
                    </span>
                    , której inni będą Ci zazdrościć.
                  </p>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mb-10 animate-fade-in">
                <div
                  className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-xl backdrop-blur-sm"
                  style={{
                    background: "rgba(15, 23, 42, 0.5)",
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                  }}
                >
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full border"
                      style={{
                        background: "linear-gradient(135deg, hsl(200, 80%, 30%) 0%, hsl(180, 70%, 45%) 50%, hsl(145, 65%, 50%) 100%)",
                        borderColor: "rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm">
                      500+ kapitanów w społeczności
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-slate-600"></div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/30">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                    <span className="font-medium text-sm">
                      Ocena 4.9/5
                    </span>
                  </div>
                </div>
              </div>

              {/* Bonus - Lifehackerzy */}
              <div className="mb-8 animate-fade-in">
                <div
                  className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-xl backdrop-blur-sm max-w-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.2) 100%)",
                    border: "1px solid rgba(167,139,250,0.3)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img 
                    src={lifehackerzyLogo} 
                    alt="Lifehackerzy" 
                    className="h-12 sm:h-14 w-auto flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-sm md:text-base text-violet-200">
                      Dostęp LIFETIME do społeczności LIFEHACKERZY w cenie programu.
                    </p>
                    <p className="text-xs md:text-sm text-violet-300/80 mt-1">
                      Wsparcie i wymiana doświadczeń.
                    </p>
                    <p className="text-xs md:text-sm text-violet-300/90 mt-1 italic">
                      Nie bez powodu nazywanej <span className="font-medium text-violet-200">najbardziej wspierającą społecznością w polskim internecie</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 animate-fade-in">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block group"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-14 py-5 sm:py-7 md:py-9 transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] border-0 text-center leading-tight min-h-[56px] touch-manipulation whitespace-normal h-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(217, 91%, 50%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 0 40px rgba(56, 189, 248, 0.25), 0 16px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <span className="hidden sm:inline">🚢 ZOSTAJĘ KAPITANEM – DOŁĄCZAM ZA 777 ZŁ</span>
                    <span className="sm:hidden">🚢 DOŁĄCZAM ZA 777 ZŁ</span>
                  </Button>
                </a>
              </div>

              <div className="space-y-2 animate-fade-in">
                <p className="text-slate-300 text-base md:text-lg">
                  <span className="text-slate-400 line-through">1,997 zł</span>
                  {" → "}
                  <span className="text-sky-300 font-bold text-xl md:text-2xl">777 zł</span>
                </p>
                <p className="text-slate-400 text-sm md:text-base">
                  Dostęp na zawsze • 30-dni gwarancji zwrotu • Bez ukrytych kosztów
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING SECTION - Hook */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Czy kiedykolwiek miałeś wrażenie, że Twoje życie toczy się{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  obok Ciebie?
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Że reagujesz, zamiast wybierać. Że Twoje dni to lista zadań
                odhaczanych przez zmęczony, wiecznie przebodźcowany umysł. Że
                Twoje myśli to niekończąca się, krytykująca narracja, której nie
                potrafisz wyłączyć.
              </p>

              <p>
                Budzisz się zmęczony. Działasz na autopilocie. Kończysz dzień z
                poczuciem, że znów nie dotknąłeś tego, co{" "}
                <strong className="text-foreground">NAPRAWDĘ</strong> ważne.
              </p>

              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-6 md:p-8 my-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  A co, jeśli problemem NIE JEST Twój "rozbiegany umysł"?
                </h3>
                <p className="text-xl text-foreground">
                  Co, jeśli problemem jest to, że{" "}
                  <strong className="text-sky-600 dark:text-sky-400">
                    nikt nigdy nie nauczył Cię, jak go NAPRAWDĘ używać?
                  </strong>{" "}
                  Jak przejąć kontrolę nad tym potężnym narzędziem, zamiast być
                  jego biernym pasażerem (albo więźniem)?
                </p>
              </Card>

              <p className="text-xl font-semibold text-foreground">
                Przedstawiam Ci system, który nie ma nic wspólnego z siadaniem po
                turecku i powtarzaniem "om". To{" "}
                <strong className="text-sky-600 dark:text-sky-400">
                  mentalny system operacyjny dla ludzi, którzy chcą WYGRYWAĆ w
                  prawdziwym świecie.
                </strong>
              </p>

              <p className="text-xl font-semibold text-sky-600 dark:text-sky-400">
                To program <strong>"Uważne Życie"</strong>. Ale nie nazywaj go
                kursem mindfulness. Nazwij go{" "}
                <strong>"Przejęciem kontroli nad własną psychiką".</strong>
              </p>
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 transition-all duration-300 hover:scale-105 border-0 shadow-xl whitespace-normal h-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                    color: "white",
                  }}
                >
                  <span className="hidden sm:inline">🚢 PRZEJMUJĘ KONTROLĘ – DOŁĄCZAM TERAZ</span>
                  <span className="sm:hidden">🚢 DOŁĄCZAM TERAZ</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECTION */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(210, 40%, 96%) 0%, hsl(210, 35%, 98%) 50%, hsl(210, 40%, 96%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                CZY TO TOBIE?
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Sprawdź, ile z tego pasuje do Ciebie
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  text: '"Zawsze się spieszę, ale nigdzie nie dochodzę." Czujesz chroniczny pośpiech, ale Twoje najważniejsze cele stoją w miejscu.',
                  icon: ShipWheel,
                },
                {
                  text: '"Moja głowa to radio, które nie da się wyłączyć." Natłok myśli, zamartwianie się przyszłością, rozpamiętywanie przeszłości.',
                  icon: Brain,
                },
                {
                  text: '"Reaguję, zamiast odpowiadać." Wysyłasz ostry mail, mówisz coś, czego żałujesz, sięgasz po niezdrową przekąskę – wszystko automatycznie.',
                  icon: Zap,
                },
                {
                  text: '"Gubię się w swoich myślach." Utożsamiasz się z każdą krytyczną myślą ("Jestem nie dość dobry") jakby to była prawda objawiona.',
                  icon: Eye,
                },
                {
                  text: '"Wypalam się." Twoja energia wycieka jak z dziurawego wiadra przez drobne stresy, rozproszenia i wewnętrzny opór.',
                  icon: Battery,
                },
                {
                  text: '"Wiem, co jest dla mnie ważne, ale…" Zawsze jest jakieś "ale". Brakuje Ci wewnętrznej dyscypliny, by działać w zgodzie ze swoimi wartościami.',
                  icon: Target,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                    border: "1px solid rgba(56, 189, 248, 0.15)",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <p className="text-base text-slate-700 pt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card
                className="max-w-3xl mx-auto border-0 p-8 text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(200, 70%, 25%) 0%, hsl(180, 60%, 35%) 50%, hsl(145, 55%, 40%) 100%)",
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.25), 0 0 60px rgba(6, 182, 212, 0.15)",
                }}
              >
                <CardContent className="p-0">
                  <p className="text-xl md:text-2xl font-bold mb-2">
                    Jeśli kiwnąłeś głową chociaż raz, to wiedz jedno:
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-sky-100 mb-2">
                    To nie Twoja wina.
                  </p>
                  <p className="text-xl md:text-2xl text-white/90">
                    Po prostu działałeś na wadliwym oprogramowaniu.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300 mt-4">
                    Czas na aktualizację.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO WYNIESIESZ Z PROGRAMU - Premium Benefit Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span className="text-sm font-bold text-sky-600 dark:text-sky-400 uppercase">
                  Program transformacji
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                PRZEDSTAWIAM CI: "UWAŻNE ŻYCIE"
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                6 modułów, które zmienią Twoje podejście do życia
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: 1,
                  icon: Compass,
                  gradient: "from-blue-500 to-blue-600",
                  title: "ARCHITEKTURA UWAGI – ODZYSKAJ STER",
                  description:
                    "Przestań być ofiarą okoliczności. Uważna uwaga to Twój supermoc – nauczysz się jej używać jako podstawowego narzędzia nawigacji.",
                },
                {
                  number: 2,
                  icon: Brain,
                  gradient: "from-purple-500 to-purple-600",
                  title: "DEAUTOMATYZACJA – WYŁĄCZ AUTOMAT, WŁĄCZ ŚWIADOMOŚĆ",
                  description:
                    'Moment "Aha!". Nauczysz się wyłapywać ten ułamek sekundy, zanim automatyczna reakcja przejmie kontrolę.',
                },
                {
                  number: 3,
                  icon: Eye,
                  gradient: "from-cyan-500 to-teal-600",
                  title: "DYSTANS STRATEGICZNY – UWOLNIJ SIĘ OD TYRANII MYŚLI",
                  description:
                    "Twoje myśli to nie rozkazy, tylko chmury na niebie. Przestaniesz wierzyć w każdą dramatyczną historię, którą opowie Ci głowa.",
                },
                {
                  number: 4,
                  icon: Heart,
                  gradient: "from-red-500 to-pink-600",
                  title: "NAWIGACJA EMOCJONALNA – NAWIGUJ WŚRÓD BURZY",
                  description:
                    "Twoje ciało to najdokładniejszy system wczesnego ostrzegania. Nauczysz się odczytywać jego sygnały z precyzją chirurga.",
                },
                {
                  number: 5,
                  icon: Navigation,
                  gradient: "from-green-500 to-emerald-600",
                  title: "KOMPAS WARTOŚCI – PŁYŃ TAM, GDZIE CHCESZ DOTRZEĆ",
                  description:
                    'Odkryjesz, co naprawdę nadaje sens Twojej podróży. Przestaniesz żyć w ciągłej "pogoni za" i zaczniesz żyć w "podróży do".',
                },
                {
                  number: 6,
                  icon: Battery,
                  gradient: "from-orange-500 to-amber-600",
                  title: "OPTYMALIZACJA ZASOBÓW – ZARZĄDZAJ ENERGIĄ, NIE CZASEM",
                  description:
                    "Jak ładować baterie i jak rozkładać siły, by nie wypalić się na półmetku. Najpotężniejsza praktyka: bycie własnym sojusznikiem.",
                },
              ].map((module) => (
                <div
                  key={module.number}
                  className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                    border: "1px solid rgba(56, 189, 248, 0.15)",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-start gap-5 md:gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl bg-gradient-to-br ${module.gradient}`}
                        style={{
                          boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                        }}
                      >
                        {module.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 transition-all duration-300 hover:scale-105 border-0 shadow-xl whitespace-normal h-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                    color: "white",
                  }}
                >
                  <span className="hidden sm:inline">🚢 TAK, CHCĘ PRZEJĄĆ KONTROLĘ</span>
                  <span className="sm:hidden">🚢 DOŁĄCZAM</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Premium Design */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(165deg, hsl(210, 50%, 8%) 0%, hsl(200, 45%, 12%) 50%, hsl(190, 40%, 16%) 100%)",
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header with gradient text */}
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(180, 70%, 70%) 50%, hsl(155, 60%, 60%) 100%)",
                  }}
                >
                  Twoja Inwestycja i Gwarancja
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300/80">
                (Bo Wiem, Co Robię)
              </p>
            </div>

            {/* Main pricing card with glass effect */}
            <div
              className="rounded-3xl p-8 md:p-12 backdrop-blur-md border relative overflow-hidden mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 80px rgba(6, 182, 212, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Decorative gradient corner */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.3), transparent 70%)",
                }}
              ></div>

              <div className="text-center mb-8 relative z-10">
                <p className="text-slate-300 text-lg mb-4">
                  Cenię swój czas i Twój. Ten program to esencja lat badań, testów i praktyki.
                </p>
                <p className="text-2xl md:text-3xl text-white mb-2">
                  Inwestycja w program "Uważne Życie":
                </p>
                <p className="text-xl md:text-2xl text-slate-400 line-through mb-2">1997 zł</p>
                <p className="text-4xl md:text-6xl font-extrabold mb-4"
                  style={{
                    background: "linear-gradient(135deg, hsl(180, 70%, 70%) 0%, hsl(155, 60%, 60%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  777 zł
                </p>
                <div className="flex items-center justify-center gap-1.5 text-white/90 text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Dostęp na zawsze • 30-dni gwarancji zwrotu</span>
                </div>
              </div>

              {/* Benefits grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 relative z-10">
                {[
                  "6 modułów kursu (30+ lekcji)",
                  "Społeczność wsparcia",
                  "Materiały do ćwiczeń",
                  "Aktualizacje na zawsze",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center relative z-10 mb-8">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 blur-2xl opacity-60 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, hsl(200, 70%, 45%), hsl(165, 60%, 50%), hsl(145, 55%, 50%))",
                  }}
                ></div>

                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block relative"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base md:text-lg font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-9 transition-all duration-300 hover:scale-105 border-0 shadow-2xl whitespace-normal h-auto"
                    style={{
                      background: "linear-gradient(135deg, hsl(200, 75%, 45%) 0%, hsl(180, 70%, 42%) 40%, hsl(155, 65%, 45%) 100%)",
                      color: "white",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3), 0 0 50px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    <span className="hidden sm:inline">🚢 PRZEJMUJĘ KONTROLĘ – DOŁĄCZAM TERAZ</span>
                    <span className="sm:hidden">🚢 DOŁĄCZAM</span>
                  </Button>
                </a>
              </div>

              {/* Daily cost breakdown */}
              <div className="text-center py-4 relative z-10">
                <p className="text-sm text-slate-400 mb-2">
                  Przelicz to na dzienną stawkę:
                </p>
                <p className="text-lg font-bold text-emerald-400">
                  To mniej niż 2,13 zł dziennie przez rok
                </p>
                <p className="text-sm text-slate-400 italic">
                  Mniej niż kawa z automatu. Za spokój w głowie.
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div
              className="rounded-2xl p-8 border-2"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    MOJA GWARANCJA JEST PROSTA I BEZLITOSNA:
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Przejdź przez program. Wykonaj wyzwania. Zaangażuj się na 100%.
                  </p>
                  <div
                    className="p-6 rounded-xl mb-4"
                    style={{
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "2px solid rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    <p className="text-xl font-bold text-emerald-300">
                      Jeśli w ciągu 30 dni od rozpoczęcia nie poczujesz, że odzyskałeś minimum 10% więcej kontroli nad swoim wewnętrznym dialogiem i reakcjami – napisz do mojego zespołu, a oddamy Ci każdą złotówkę. Bez pytań.
                    </p>
                  </div>
                  <p className="text-lg text-white font-semibold">
                    Dlaczego mogę dać taką gwarancję? Bo wiem, że jeśli wykonasz pracę, system zadziała. To inżynieria, nie magia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full mb-6">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Przejmij Stery. Zostań Kapitanem.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Program "Uważne Życie" czeka. Twoja podróż do kontroli, spokoju i jasności umysłu zaczyna się teraz.
            </p>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto sm:inline-block mb-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-12 py-6 group transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                }}
              >
                Dołączam Teraz Za 777 ZŁ
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm">30-dniowa gwarancja zwrotu pieniędzy</span>
            </div>

            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-xl font-bold text-foreground mb-2">
                Do zobaczenia na pokładzie,
              </p>
              <p className="text-lg text-sky-600 dark:text-sky-400">Ludwik C. Siadlak</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UwazneZycie;
