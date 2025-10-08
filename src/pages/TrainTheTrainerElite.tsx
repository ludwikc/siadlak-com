import { Helmet } from "react-helmet-async";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  X,
  XCircle,
  Megaphone,
  Presentation,
  UserX,
  Brain,
  Calendar,
  Globe,
  Users,
  Star,
  Sparkles,
  Trophy,
  Shield,
  TrendingUp,
  Award,
  Target,
  Zap,
  Building2,
  Quote,
  AlertTriangle,
  ArrowDown,
  MessageSquare,
  Video,
  BookOpen,
  LifeBuoy,
  TrendingDown,
  Clock,
  Calculator,
  Lightbulb,
  Heart,
  ArrowRight,
  Mic,
  FileText,
  DollarSign,
} from "lucide-react";

export default function TrainTheTrainerElite() {
  return (
    <div className="min-h-screen bg-luminous-white">
      <Helmet>
        <title>Train The Trainer: Elite Academy | Ludwik C. Siadlak</title>
        <meta
          name="description"
          content="Od technika w piwnicy do trenera na scenie Fortune 500: 8 tygodni transformacji"
        />
      </Helmet>

      {/* SEKCJA 1: HERO - Theme Locked */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neural-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 backdrop-blur-sm border border-neural-blue/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg animate-pulse">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  KOHORTA Q1 2025
                </span>
                <span className="text-xs sm:text-sm text-locked-silver">
                  • 2 z 8 miejsc pozostało
                </span>
              </div>
            </div>

            {/* Main Headline - Benefit-Focused */}
            <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              {`Od Technika w Piwnicy do `}
              <span className="text-locked-gradient">
                Trenera na Scenie Fortune 500
              </span>
              {`: 8 Tygodni, 40-60 Tysięcy Złotych Dziennie`}
            </h1>

            {/* Subheadline - Problem/Solution */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Jak seniorzy techniczni transformują się w elitarnych trenerów
              korporacyjnych bez lat Toastmasters i bullshitu
            </p>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  19 lat doświadczenia
                </span>
              </div>
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  10,000+ przeszkolonych
                </span>
              </div>
            </div>

            {/* Primary CTA - Prominent */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="relative group inline-block w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <Button
                  size="lg"
                  className="relative btn-locked-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform duration-200"
                >
                  Umów Bezpłatną Sesję Discovery (30 Min)
                </Button>
              </div>
            </div>

            {/* Trust bar */}
            <div className="pt-8 border-t border-locked-white/20">
              <p className="text-sm text-locked-silver mb-4 text-center">
                Zaufali mi:
              </p>
              <div className="flex flex-wrap justify-center gap-6 items-center text-locked-silver text-sm sm:text-base">
                <span>US DoD</span>
                <span>•</span>
                <span>NATO</span>
                <span>•</span>
                <span>ING Bank</span>
                <span>•</span>
                <span>Equinor</span>
                <span>•</span>
                <span>Norweska Policja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 2: AGITACJA PROBLEMU - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Znasz to uczucie, prawda?
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary">
                Sprawdź, ile z tych myśli Cię dotyczy
              </p>
            </div>

            {/* Problem Cards - Progressive Intensity */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12">
              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.08) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base">
                  Siedzisz w piwnicy – dosłownie lub mentalnie. Czternasta
                  godzina przed kodem. Twoja wiedza jest doskonała, mogłabyś
                  uczyć na MIT.
                </p>
              </div>

              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(185, 28, 28, 0.12) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-red-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base">
                  Ale gdy wyobrażasz sobie siebie na scenie przed 500 ludźmi...
                  czujesz, jak żołądek się zaciska.
                </p>
              </div>

              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.08) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base">
                  <strong>Impostor syndrome.</strong> Ten cichy głos: „Kto ja
                  jestem, żeby ich uczyć? Zobaczą, że blefuję."
                </p>
              </div>

              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(156, 163, 175, 0.03) 0%, rgba(107, 114, 128, 0.05) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base">
                  Więc zostajesz przy bezpiecznej opcji. Kontrakty za 800 zł/h.
                  Projekty. Konsulting. Dobre pieniądze. Ale nie to, o czym
                  marzyłeś.
                </p>
              </div>

              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.05) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base">
                  Widzisz innych – czasem gorszych technicznie – którzy dostają
                  40k zł za dzień. Których zapraszają Fortune 500.
                </p>
              </div>

              <div
                className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(147, 51, 234, 0.05) 100%)",
                }}
              >
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-purple-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm sm:text-base font-medium">
                  I zadajesz sobie pytanie:{" "}
                  <span className="text-neural-blue font-bold">
                    „Dlaczego nie ja?"
                  </span>
                </p>
              </div>
            </div>

            {/* Key Message Card */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur opacity-20"></div>
              <div className="relative text-center p-8 sm:p-10 bg-white rounded-2xl border-2 border-zenith-gold/20">
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl text-text-primary font-semibold">
                    Odpowiedź jest prosta. I brutalna.
                  </p>
                  <p className="text-base sm:text-lg text-text-secondary">
                    Nie chodzi o twoją wiedzę techniczną. Nigdy nie chodziło.
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-twilight-indigo">
                    Chodzi o to, kim jesteś, gdy stajesz przed ludźmi.
                  </p>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-2xl sm:text-3xl font-extrabold text-neural-blue">
                      I to można zmienić. W osiem tygodni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: NIEUDANE ROZWIĄZANIA - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-5 py-2 rounded-full mb-6">
                <XCircle className="h-5 w-5 text-red-500" />
                <span className="text-sm font-bold text-red-600 uppercase">
                  Nieudane rozwiązania
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Próbowałeś już „naprawić się", prawda?
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary">
                Sprawdź, które z tych metod już próbowałeś
              </p>
            </div>

            {/* Failed Solutions Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Toastmasters */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors mb-4 group-hover:scale-110 duration-300">
                    <Megaphone className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Toastmasters
                  </h3>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm mb-4">
                  „Po prostu ćwicz wystąpienia publiczne!" Fajnie. Poza tym, że
                  Toastmasters uczy, jak mówić, nie jak być kimś wartym
                  słuchania.
                </p>
                <div className="pt-4 border-t border-red-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-red-600 flex items-center gap-1">
                    <XCircle className="h-3 w-3" />
                    Nie dotyka rzeczywistego problemu
                  </p>
                </div>
              </div>

              {/* Presentation Skills */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors mb-4 group-hover:scale-110 duration-300">
                    <Presentation className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Presentation Skills
                  </h3>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm mb-4">
                  Slajdy. Struktura. Storytelling. Świetnie. Ale nadal czułeś
                  się jak oszust recytujący cudze skrypty.
                </p>
                <div className="pt-4 border-t border-orange-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-orange-600 flex items-center gap-1">
                    <XCircle className="h-3 w-3" />
                    Powierzchowna technika bez głębi
                  </p>
                </div>
              </div>

              {/* Fake It Till You Make It */}
              <div className="group relative bg-white rounded-xl p-6 border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-3 right-3 w-16 h-1.5 bg-yellow-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors mb-4 group-hover:scale-110 duration-300">
                    <UserX className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Fake It Till You Make It
                  </h3>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed text-sm mb-4">
                  Najgorszy advice wszech czasów. Bo nie możesz podrobić
                  obecności. Ludzie czują, że to nie jest prawdziwe.
                </p>
                <div className="pt-4 border-t border-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-yellow-600 flex items-center gap-1">
                    <XCircle className="h-3 w-3" />
                    Pogarsza impostor syndrome
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-6 text-center mb-12">
              <p className="text-xl font-semibold text-text-primary">
                Tutaj jest problem z tym wszystkim:
              </p>
              <p className="text-lg font-medium text-text-secondary">
                Żadne z tych rozwiązań nie dotyka rzeczywistego problemu.
              </p>
            </div>

            {/* Real Problem Card */}
            <div className="relative mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur opacity-20"></div>
              <Card className="relative bg-white border-2 border-neural-blue/30">
                <CardContent className="p-8 sm:p-10 text-center">
                  <Brain className="h-12 w-12 text-neural-blue mx-auto mb-4" />
                  <p className="text-2xl sm:text-3xl font-bold text-neural-blue mb-4">
                    Rzeczywisty problem jest w twojej tożsamości
                  </p>
                  <p className="text-lg text-text-secondary mb-6">
                    Widzisz siebie jako{" "}
                    <span className="italic">
                      „technika, który czasem uczy"
                    </span>
                    .
                    <br />
                    Nie jako{" "}
                    <span className="italic font-semibold text-text-primary">
                      „trenera światowej klasy, który zna też technologię"
                    </span>
                    .
                  </p>
                  <div className="pt-6 border-t-2 border-gray-200">
                    <p className="text-xl font-bold text-zenith-gold">
                      Ta różnica? Przepaść wartości kilkuset tysięcy złotych w
                      ciągu następnej dekady.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Requirements */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto text-center mb-8">
              <p className="font-semibold text-text-primary">
                I <strong>NIE</strong> zamkniesz tej przepaści kolejnym kursem o
                tym, jak robić lepsze slajdy.
              </p>
              <p className="text-xl font-bold text-text-primary">
                Zamkniesz ją, przebudowując swoją tożsamość od fundamentów.
              </p>
              <p className="text-text-secondary">A to wymaga kogoś, kto:</p>
            </div>

            {/* Credentials List */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white p-6 rounded-xl border-2 border-neural-blue/20 hover:border-neural-blue/40 transition-colors">
                <CheckCircle className="h-10 w-10 text-neural-blue mb-3 mx-auto" />
                <p className="text-sm text-text-secondary text-center">
                  Zrobił to sam (19 lat, 50+ krajów, 10 000+ przeszkolonych)
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-twilight-indigo/20 hover:border-twilight-indigo/40 transition-colors">
                <Brain className="h-10 w-10 text-twilight-indigo mb-3 mx-auto" />
                <p className="text-sm text-text-secondary text-center">
                  Rozumie, że nauczanie to nie technika, to transformacja
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-zenith-gold/20 hover:border-zenith-gold/40 transition-colors">
                <Target className="h-10 w-10 text-zenith-gold mb-3 mx-auto" />
                <p className="text-sm text-text-secondary text-center">
                  Wie, jak przeprowadzić cię przez transformację bez lat terapii
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-zenith-gold rounded-2xl blur opacity-30 animate-pulse"></div>
              <Card className="relative bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10 border-2 border-neural-blue/30">
                <CardContent className="p-8 sm:p-10 text-center">
                  <Trophy className="h-14 w-14 text-zenith-gold mx-auto mb-4" />
                  <p className="text-2xl sm:text-3xl font-bold text-neural-blue mb-4">
                    Witaj w Train The Trainer: Elite Academy
                  </p>
                  <p className="text-xl font-medium text-text-primary">
                    To nie jest kurs. To jest ośmiotygodniowa rekonstrukcja
                    twojej tożsamości.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: DOWÓD AUTORYTETU - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 px-5 py-2 rounded-full mb-6">
                <Shield className="h-5 w-5 text-neural-blue" />
                <span className="text-sm font-bold text-neural-blue uppercase">
                  Dowód społeczny
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Skąd wiem, że to działa?
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                Zanim Ci powiem, <strong>jak</strong> to działa, pozwól, że Ci
                pokażę, <strong>że</strong> to działa.
              </p>
            </div>

            {/* Intro Text */}
            <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
              <p className="text-xl font-semibold text-text-primary">
                19 lat. 10,000+ osób. Każdy poziom – od juniorów po dekorowanych
                generałów.
              </p>
              <p className="text-lg font-medium text-twilight-indigo">
                Jedyną rzeczą, która bije świetny marketing, jest dowód.
              </p>
            </div>

            {/* Stats bar with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="group bg-white rounded-xl p-6 border-2 border-neural-blue/20 hover:border-neural-blue/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <span className="block text-4xl sm:text-5xl font-bold text-neural-blue mb-2">
                    19
                  </span>
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    lat doświadczenia
                  </span>
                </div>
              </div>
              <div className="group bg-white rounded-xl p-6 border-2 border-twilight-indigo/20 hover:border-twilight-indigo/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <span className="block text-4xl sm:text-5xl font-bold text-twilight-indigo mb-2">
                    50+
                  </span>
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    krajów na świecie
                  </span>
                </div>
              </div>
              <div className="group bg-white rounded-xl p-6 border-2 border-zenith-gold/20 hover:border-zenith-gold/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <span className="block text-4xl sm:text-5xl font-bold text-zenith-gold mb-2">
                    10k+
                  </span>
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    przeszkolonych osób
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonials Intro */}
            <div className="text-center mb-8">
              <p className="text-xl font-semibold text-text-primary">
                A ja mam dowody z:
              </p>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* US DoD */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-neural-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary text-lg mb-1">
                        US Department of Defense
                      </h4>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary italic leading-relaxed">
                    "Exceptional training methodology that transformed our
                    technical capabilities."
                  </blockquote>
                </CardContent>
              </Card>

              {/* NATO */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-twilight-indigo/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-full flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary text-lg mb-1">
                        NATO Training Program
                      </h4>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary italic leading-relaxed">
                    "Very experienced and knowledgeable, adapted explanations to
                    the knowledge level of participants."
                  </blockquote>
                </CardContent>
              </Card>

              {/* ING Bank */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-zenith-gold/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary text-lg mb-1">
                        Fortune 500 (ING Bank)
                      </h4>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary italic leading-relaxed">
                    "Very professional and very nice, pleasant person. Helped
                    with lab issues immediately."
                  </blockquote>
                </CardContent>
              </Card>

              {/* Others */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-neural-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center shrink-0">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary text-lg mb-1">
                        Global Enterprises
                      </h4>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-text-secondary font-medium">
                    Norwegian Police • Equinor • Critical Manufacturing • EY
                    Norway
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Social Proof Summary */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/10 to-twilight-indigo/10 px-6 py-3 rounded-full border border-neural-blue/20">
                <CheckCircle className="h-5 w-5 text-neural-blue" />
                <p className="font-bold text-text-primary">
                  ...i kolejne 250+ zweryfikowanych opinii klientów
                </p>
              </div>
            </div>

            {/* Pattern Interrupt Box */}
            <div className="relative my-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur opacity-20"></div>
              <Card className="relative bg-gradient-to-br from-neural-blue/10 to-twilight-indigo/5 border-2 border-neural-blue/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                      <Quote className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-text-primary mb-2">
                        Zauważ coś w tych opiniach.
                      </p>
                      <p className="text-lg text-text-secondary">
                        Nie mówią o mojej wiedzy technicznej.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg font-medium mb-4 text-text-primary">
                    Mówią o:
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-neural-blue shrink-0" />
                      <p className="italic text-text-secondary text-sm">
                        "Engaging way of sharing knowledge"
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-twilight-indigo shrink-0" />
                      <p className="italic text-text-secondary text-sm">
                        "Enthusiasm was contagious"
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-neural-blue shrink-0" />
                      <p className="italic text-text-secondary text-sm">
                        "Created good atmosphere for learning"
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-twilight-indigo shrink-0" />
                      <p className="italic text-text-secondary text-sm">
                        "Adapted explanations to knowledge level"
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg md:col-span-2">
                      <CheckCircle className="h-5 w-5 text-neural-blue shrink-0" />
                      <p className="italic text-text-secondary text-sm">
                        "Made complex concepts accessible"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed">
              <p className="font-medium">
                To nie są umiejętności techniczne. To są umiejętności obecności.
              </p>

              <p className="text-xl font-bold text-neural-blue text-center py-4">
                To jest różnica między „dobrym programistą" a „trenerem za 60
                tysięcy złotych dziennie".
              </p>

              <p>
                I każda z tych organizacji zapłaciła mi – nie żeby im pokazać
                „jak działa SQL" – ale żeby transformować ich ludzi poprzez moją
                obecność.
              </p>

              <p className="text-xl font-bold text-deep-charcoal pt-4">
                Dokładnie tego Cię nauczę.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 5: VALUE EQUATION */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tradycyjne podejścia zawodzą
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-medium">Matematyka jest prosta. I brutalna.</p>

            <p>
              Alex Hormozi ma wzór zwany <strong>Value Equation</strong>.
              Wygląda tak:
            </p>

            {/* Value Equation Formula Card */}
            <Card className="my-12 border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/5">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neural-blue">
                    Hormozi Value Equation
                  </h3>
                </div>
                <div className="text-center space-y-6">
                  <div className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                    <div className="mb-4 text-neural-blue">WARTOŚĆ =</div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className="border-b-4 border-deep-charcoal pb-4 px-4 bg-white/50 rounded-t-lg">
                          <div className="text-lg md:text-xl">
                            (Wymarzony Rezultat × Prawdopodobieństwo Sukcesu)
                          </div>
                        </div>
                        <div className="pt-4 px-4 bg-gray-100 rounded-b-lg">
                          <div className="text-lg md:text-xl text-deep-charcoal/80">
                            (Opóźnienie Czasowe × Wysiłek i Poświęcenie)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Traditional Approach */}
              <Card className="border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Tradycyjne Szkolenie
                  </h3>

                  <div className="space-y-4">
                    {/* Dream Result */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Target className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-700">
                            Wymarzony Rezultat
                          </p>
                          <p className="text-sm text-gray-600">
                            Zostać lepszym prezenterem
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-500 rounded-full"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">
                          7/10
                        </span>
                      </div>
                    </div>

                    {/* Probability */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-700">
                            Prawdopodobieństwo
                          </p>
                          <p className="text-sm text-gray-600">
                            Tysiąc ludzi zrobiło ten kurs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">
                          5/10
                        </span>
                      </div>
                    </div>

                    {/* Time Delay */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Clock className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-700">
                            Opóźnienie
                          </p>
                          <p className="text-sm text-gray-600">
                            6 miesięcy minimum
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-500 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">
                          2/10
                        </span>
                      </div>
                    </div>

                    {/* Effort */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Zap className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-700">
                            Wysiłek
                          </p>
                          <p className="text-sm text-gray-600">
                            Ćwiczyć przez miesiące
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-500 rounded-full"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">
                          3/10
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                    <p className="font-mono text-lg font-bold text-gray-700 text-center">
                      (7 × 5) ÷ (2 × 3) = 5,8
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Train The Trainer */}
              <Card className="border-2 border-neural-blue/50 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/20 rounded-full blur-3xl"></div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-neural-blue mb-6 flex items-center gap-2">
                    <Trophy className="h-6 w-6" />
                    Train The Trainer
                  </h3>

                  <div className="space-y-4">
                    {/* Dream Result */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Target className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-neural-blue">
                            Wymarzony Rezultat
                          </p>
                          <p className="text-sm text-deep-charcoal">
                            20-60k zł dziennie, keynote stages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-neural-blue/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-neural-blue">
                          10/10
                        </span>
                      </div>
                    </div>

                    {/* Probability */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-neural-blue">
                            Prawdopodobieństwo
                          </p>
                          <p className="text-sm text-deep-charcoal">
                            19 lat + DoD/NATO + transformacje
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-neural-blue/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-neural-blue">
                          9/10
                        </span>
                      </div>
                    </div>

                    {/* Time Delay */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Clock className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-neural-blue">
                            Opóźnienie
                          </p>
                          <p className="text-sm text-deep-charcoal">
                            8 tygodni – SZYBKO
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-neural-blue/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-neural-blue">
                          9/10
                        </span>
                      </div>
                    </div>

                    {/* Effort */}
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <Zap className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-neural-blue">
                            Wysiłek
                          </p>
                          <p className="text-sm text-deep-charcoal">
                            Po prostu stań się sobą
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-neural-blue/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-neural-blue">
                          8/10
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue to-zenith-gold rounded-lg blur opacity-25"></div>
                    <div className="relative p-4 bg-gradient-to-r from-neural-blue/20 to-zenith-gold/20 rounded-lg">
                      <p className="font-mono text-lg font-bold text-neural-blue text-center">
                        (10 × 9) ÷ (9 × 8) = 1,25×
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="font-medium text-xl pt-8">
              Ale to nie opowiada pełnej historii.
            </p>

            <p>
              Bo tradycyjne podejście uczy cię, <strong>JAK</strong> mówić.
            </p>

            <p className="font-semibold">
              Moje podejście transformuje, <strong>KIM JESTEŚ</strong>, gdy
              mówisz.
            </p>

            <div className="my-12 p-8 bg-neural-blue/10 rounded-xl border border-neural-blue/30">
              <p className="text-xl font-bold text-deep-charcoal text-center">
                To jest różnica między technikiem, który „prowadzi szkolenia", a
                trenerem światowej klasy, który transformuje przestrzenie, do
                których wchodzi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 6: TROJAN HORSE REVEAL */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Co naprawdę dostajesz
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <Card className="mb-8 border-2 border-orange-400/50 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-xl font-bold text-deep-charcoal pt-1">
                    Sekret, który zrujnuje mój marketing
                  </p>
                </div>
                <p className="text-lg text-deep-charcoal mb-4">
                  Ten program nie jest naprawdę o umiejętnościach nauczania.
                </p>
                <div className="inline-block px-4 py-2 bg-neural-blue/10 border-2 border-neural-blue/30 rounded-lg">
                  <p className="text-lg font-bold text-neural-blue">
                    To jest coaching transformacyjny przebrany za Train The
                    Trainer.
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="pt-4">Dlaczego?</p>

            <p>
              Bo gdybym ci powiedział „sprzedaję ci ośmiotygodniową
              transformację tożsamości, która rozwiąże twój impostor syndrome,
              poprawi twoje relacje i uczyni cię kimś wartym 60 tysięcy złotych
              dziennie"...
            </p>

            <p className="italic">
              ...powiedziałbyś „brzmi jak woo-woo bullshit" i wyszedł.
            </p>

            <p>Bo jesteś technikiem. Overthinkerem. Analitykiem.</p>

            <p>Potrzebujesz systemu. Frameworku. Struktury.</p>

            <p className="font-semibold">Więc daję ci Train The Trainer.</p>

            <p className="font-medium text-xl pt-4">Ale pod spodem?</p>

            <p className="font-semibold">
              To ta sama metodologia, którą używam w Life OS – mojej flagowej
              ofercie transformacyjnej.
            </p>

            <p className="font-medium text-xl pt-8">
              Dowód? Dwie studia przypadków:
            </p>

            {/* Case studies */}
            <div className="grid md:grid-cols-1 gap-8 my-12">
              <Card className="border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neural-blue">
                      CASE STUDY #1: Anna (CEO, przychody ośmiocyfrowe)
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Problem */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                        <XCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-charcoal mb-1">
                          Problem
                        </p>
                        <p className="text-deep-charcoal/90">
                          Uwięziona w narracji ofiary („niesprawiedliwość wobec
                          kobiet w biznesie")
                        </p>
                        <p className="text-sm text-deep-charcoal/70 mt-2">
                          <strong>Rzeczywisty problem:</strong> Tożsamość ofiary
                          jako mechanizm bezpieczeństwa
                        </p>
                      </div>
                    </div>

                    {/* Method */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-charcoal mb-1">
                          Metoda
                        </p>
                        <p className="text-deep-charcoal/90">
                          Filozoficzna konfrontacja + framework wymiany energii
                        </p>
                        <p className="text-sm italic text-deep-charcoal/70 mt-2">
                          „Ile podatku płacisz za tę historię?"
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowDown className="h-6 w-6 text-neural-blue animate-bounce" />
                    </div>

                    {/* Result */}
                    <div className="flex gap-4 p-4 bg-gradient-to-r from-neural-blue/10 to-zenith-gold/10 rounded-lg border border-neural-blue/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-lg flex items-center justify-center shrink-0">
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-neural-blue mb-1">
                          Rezultat
                        </p>
                        <p className="text-deep-charcoal font-semibold">
                          Kompletna zmiana tożsamości:{" "}
                          <span className="text-neural-blue">
                            ofiara → sprawca
                          </span>
                        </p>
                        <p className="text-deep-charcoal/90 mt-1">
                          Transformacja modelu mentalnego. Opanowanie granic.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neural-blue">
                      CASE STUDY #2: Lucja (przedsiębiorca, założycielka
                      RevSpace)
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Problem */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                        <XCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-charcoal mb-1">
                          Problem
                        </p>
                        <p className="text-deep-charcoal/90">
                          Pracowała na wakacjach w mentalnym garniturze,
                          wypalenie, chaos
                        </p>
                        <p className="text-sm text-deep-charcoal/70 mt-2">
                          <strong>Rzeczywisty problem:</strong> Konflikt między
                          kobietą biznesu a duchową częścią siebie
                        </p>
                      </div>
                    </div>

                    {/* Method */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-charcoal mb-1">
                          Metoda
                        </p>
                        <p className="text-deep-charcoal/90">
                          Integracja yin-yang + medytacja + równoległe
                          rzeczywistości
                        </p>
                        <p className="text-sm italic text-deep-charcoal/70 mt-2">
                          „Jesteś już rybakiem na plaży"
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowDown className="h-6 w-6 text-neural-blue animate-bounce" />
                    </div>

                    {/* Result */}
                    <div className="flex gap-4 p-4 bg-gradient-to-r from-neural-blue/10 to-zenith-gold/10 rounded-lg border border-neural-blue/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-lg flex items-center justify-center shrink-0">
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-neural-blue mb-1">
                          Rezultat
                        </p>
                        <p className="text-deep-charcoal/90">
                          Codzienna medytacja. Córka w terapii (po miesiącach
                          oporu). Wewnętrzny spokój.
                        </p>
                        <p className="text-deep-charcoal font-semibold mt-1">
                          Biznes rośnie{" "}
                          <span className="text-neural-blue">SZYBCIEJ</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="my-12 border-2 border-neural-blue/30 bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-deep-charcoal mb-4">
                      Zauważ:
                    </p>
                    <p className="text-lg text-deep-charcoal mb-4">
                      Żadna z nich nie przyszła po „coaching transformacyjny".
                    </p>
                    <p className="text-lg text-deep-charcoal">
                      Anna przyszła, bo chciała „strategię biznesową". Lucja
                      przyszła, bo chciała „systemy produktywności".
                    </p>
                    <div className="mt-4 p-4 bg-neural-blue/10 rounded-lg border border-neural-blue/30">
                      <p className="text-lg font-bold text-neural-blue">
                        Dostały transformację tożsamości.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-xl font-bold text-deep-charcoal">
              Dokładnie jak ty.
            </p>

            <Card className="my-8 border-2 border-neural-blue/50 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-bold text-neural-blue">
                  Przychodzisz po „Train The Trainer". Dostajesz rekonstrukcję
                  tożsamości, która przy okazji uczyni cię trenerem światowej
                  klasy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-zenith-gold/40 bg-gradient-to-br from-zenith-gold/10 to-orange-500/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-deep-charcoal mb-4">
                      Skutki uboczne:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-zenith-gold shrink-0" />
                        <p className="text-deep-charcoal">
                          Lepsze relacje (zawodowe i romantyczne)
                        </p>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-zenith-gold shrink-0" />
                        <p className="text-deep-charcoal">
                          Koniec nadmiernego myślenia
                        </p>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-zenith-gold shrink-0" />
                        <p className="text-deep-charcoal">
                          Prawdziwa pewność siebie (nie udawana)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEKCJA 7: 8-TYGODNIOWY BREAKDOWN - iOS Style */}
      <section className="py-16 md:py-20 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 px-5 py-2 rounded-full mb-6">
                <CheckCircle className="h-5 w-5 text-twilight-indigo" />
                <span className="text-sm font-bold text-twilight-indigo uppercase">
                  Program 8 tygodni
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Co dokładnie dostajesz w osiem tygodni
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                8 modułów gotowych do wdrożenia w twoją transformację
              </p>
            </div>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto text-center">
              <p className="font-medium">Tu jest, gdzie to staje się realne.</p>

              <p>
                Wiem już, jaki jest twój problem (impostor syndrome maskujący
                się jako „brak umiejętności").
              </p>

              <p>
                Wiem już, jakie jest rozwiązanie (transformacja tożsamości
                poprzez mistrzostwo w nauczaniu).
              </p>

              <p className="font-semibold text-twilight-indigo text-xl">
                Teraz pokażę ci, jak dokładnie to robimy w osiem tygodni.
              </p>
            </div>

            <div className="space-y-6">
              {/* Week 1-2 */}
              <Card className="group relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-neural-blue/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Icon and Value Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-[18px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-neural-blue/60">
                            TYDZIEŃ 1–2
                          </span>
                          <div className="flex-1 h-1 bg-neural-blue/20 rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-neural-blue">
                          ZMIANA MENTALNOŚCI ELITY
                        </h3>
                      </div>
                    </div>
                    <div className="relative ml-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-4 py-2 rounded-full border-2 border-zenith-gold/40">
                        <span className="text-sm font-bold text-deep-charcoal whitespace-nowrap">
                          12 000 zł
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 italic mb-8 pl-20">
                    Rozbicie „mentalności technika". Przebudowa jako „przewodnik
                    transformacji".
                  </p>

                  {/* Deliverables */}
                  <div className="bg-neural-blue/5 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neural-blue" />
                      Co dostajesz:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          2 sesje mentorskie po 2 godziny (na żywo, jeden na
                          jeden, intensywne)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Framework „Archeologia Tożsamości" (odkryj, kim
                          NAPRAWDĘ jesteś vs. kim się udajesz)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Model Wymiany Energii zastosowany do nauczania (każda
                          interakcja = transakcja energii)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Nagrania + transkrypcje każdej sesji (dostęp
                          dożywotni)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Why It Works */}
                  <div className="border-t-2 border-neural-blue/20 pt-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Dlaczego to działa:
                    </h4>
                    <div className="space-y-3 text-deep-charcoal/90 pl-7">
                      <p>
                        Bo 90% problemu z impostor syndrome to brak zgodności
                        między tym, kim jesteś, a kim próbujesz być.
                      </p>
                      <p>
                        Gdy stajesz na scenie jako „fałszywy ekspert" – ludzie
                        to czują. I ty to czujesz.
                      </p>
                      <p className="font-semibold text-neural-blue">
                        Gdy stajesz jako „człowiek, który przeszedł drogę i
                        teraz pokazuje ją innym" – to jest autentyczne. I
                        nieodparte.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Week 3-4 */}
              <Card className="group relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-neural-blue/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-[18px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-neural-blue/60">
                            TYDZIEŃ 3–4
                          </span>
                          <div className="flex-1 h-1 bg-neural-blue/20 rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                              style={{ width: "50%" }}
                            ></div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-neural-blue">
                          ARCHITEKTURA EMOCJONALNA
                        </h3>
                      </div>
                    </div>
                    <div className="relative ml-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-4 py-2 rounded-full border-2 border-zenith-gold/40">
                        <span className="text-sm font-bold text-deep-charcoal whitespace-nowrap">
                          10 000 zł
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 italic mb-8 pl-20">
                    Projektowanie szkoleń, które fascynują od pierwszej minuty.
                    Zastąpienie suchych wykładów transformującymi
                    doświadczeniami.
                  </p>

                  <div className="bg-neural-blue/5 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neural-blue" />
                      Co dostajesz:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          2 sesje mentorskie (adaptacyjne: 60 minut–2,5 godziny,
                          w zależności od potrzebnej głębokości)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Mistrzostwo w zadawaniu pytań sokratejskich (jak
                          używać pytań, aby ONI doszli do wniosków, nie ty)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Framework metafor (moje najlepsze: podatki, rowery,
                          wiosłowanie, rybak, znakowanie bydła)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Struktura opowieści dla treści technicznych (jak
                          zrobić SQL interesującym)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Dostęp do prywatnego kanału Slack (wsparcie codzienne,
                          non-stop)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-neural-blue/20 pt-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Dlaczego to działa:
                    </h4>
                    <div className="space-y-3 text-deep-charcoal/90 pl-7">
                      <p>Bo nikt nie chce „kolejnego szkolenia SQL".</p>
                      <p>Chcą doświadczenia, które ich zmieni.</p>
                      <p>
                        Twoja praca nie jest „nauczyć ich SQL". Twoja praca to
                        użyć SQL jako narzędzia ich transformacji.
                      </p>
                      <p className="font-semibold text-neural-blue">
                        Gdy to zrozumiesz – wszystko się zmienia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Week 5-6 */}
              <Card className="group relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-neural-blue/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-[18px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-neural-blue/60">
                            TYDZIEŃ 5–6
                          </span>
                          <div className="flex-1 h-1 bg-neural-blue/20 rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                              style={{ width: "62.5%" }}
                            ></div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-neural-blue">
                          WARSZTAT MISTRZA
                        </h3>
                      </div>
                    </div>
                    <div className="relative ml-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-4 py-2 rounded-full border-2 border-zenith-gold/40">
                        <span className="text-sm font-bold text-deep-charcoal whitespace-nowrap">
                          8 000 zł
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 italic mb-8 pl-20">
                    Radzenie sobie z trudnymi uczestnikami z wdziękiem.
                    Przekształcanie trudnych momentów w przełomowe wglądy.
                  </p>

                  <div className="bg-neural-blue/5 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neural-blue" />
                      Co dostajesz:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          2 sesje mentorskie (mogą trwać 2+ godziny, gdy jest
                          taka potrzeba)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Framework „konflikt jako katalizator" (jak wykorzystać
                          opór jako paliwo)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Mistrzostwo nieprzewidywalności (strategiczna cisza,
                          manipulacja timingiem, kontrolowany chaos)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Umiejętności czytania sali (diagnostyczna precyzja –
                          kto potrzebuje jakiej ścieżki)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Kontynuowany dostęp do Slacka (rozwiązywanie problemów
                          case-by-case)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-neural-blue/20 pt-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Dlaczego to działa:
                    </h4>
                    <div className="space-y-3 text-deep-charcoal/90 pl-7">
                      <p>Bo najlepsi trenerzy nie unikają trudnych sytuacji.</p>
                      <p className="font-semibold">Wykorzystują je.</p>
                      <p>
                        Ktoś agresywny? Świetnie – ukierunkuj tę energię. Ktoś
                        wycofany? Świetnie – stwórz bezpieczeństwo dla
                        ekspansji. Ktoś kwestionuje twoją autorytet? Świetnie –
                        przekształć to w naukę dla grupy.
                      </p>
                      <p className="font-semibold text-neural-blue">
                        Tego nie da się nauczyć z książki. Tylko przez
                        bezpośrednie przekazanie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Week 7 */}
              <Card className="group relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-neural-blue/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-[18px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <DollarSign className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-neural-blue/60">
                            TYDZIEŃ 7
                          </span>
                          <div className="flex-1 h-1 bg-neural-blue/20 rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full"
                              style={{ width: "87.5%" }}
                            ></div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-neural-blue">
                          SYSTEM POZYSKIWANIA KLIENTÓW
                        </h3>
                      </div>
                    </div>
                    <div className="relative ml-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-4 py-2 rounded-full border-2 border-zenith-gold/40">
                        <span className="text-sm font-bold text-deep-charcoal whitespace-nowrap">
                          10 000 zł
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 italic mb-8 pl-20">
                    Sprawdzone metody docierania do klientów korporacyjnych i
                    rządowych. Budowanie ofert, których nie mogą odmówić.
                  </p>

                  <div className="bg-neural-blue/5 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neural-blue" />
                      Co dostajesz:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          1 intensywna sesja (zwykle 2–2,5 godziny)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Framework pozycjonowania Fortune 500 (jak mówić
                          językiem przedsiębiorstw)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Psychologia cenowa (uzasadnienie 20–60 tysięcy złotych
                          dziennie – nie sprzedajesz czasu, sprzedajesz
                          transformację)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Szablony outreachu (sekwencje e-maili, które
                          rzeczywiście działają)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Struktura propozycji (jak zdobyłem kontrakty z DoD,
                          NATO, ING)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-neural-blue/20 pt-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Dlaczego to działa:
                    </h4>
                    <div className="space-y-3 text-deep-charcoal/90 pl-7">
                      <p>
                        Bo nie jesteś już „freelance deweloperem, który uczy".
                      </p>
                      <p className="font-semibold">
                        Jesteś elitarnym przewodnikiem transformacji, który
                        używa technologii jako narzędzia.
                      </p>
                      <p className="font-bold text-neural-blue text-xl">
                        Ta różnica? To 800 złotych na godzinę versus 60 tysięcy
                        złotych dziennie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Week 8 */}
              <Card className="group relative overflow-hidden border-2 border-zenith-gold/50 hover:border-zenith-gold/70 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-zenith-gold/5 via-neural-blue/5 to-orange-500/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Icon and Progress */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-[18px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-zenith-gold/60">
                            TYDZIEŃ 8
                          </span>
                          <div className="flex-1 h-1 bg-zenith-gold/20 rounded-full overflow-hidden max-w-[100px]">
                            <div
                              className="h-full bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-neural-blue flex items-center gap-2">
                          SIEĆ ABSOLWENTÓW DOŻYWOTNIO
                          <span className="text-3xl text-zenith-gold">∞</span>
                        </h3>
                      </div>
                    </div>
                    {/* Value Badge with Glow */}
                    <div className="relative ml-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-4 py-2 rounded-full border-2 border-zenith-gold/40">
                        <span className="text-sm font-bold text-deep-charcoal whitespace-nowrap">
                          20 000 zł
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 italic mb-8 pl-20">
                    Dołącz do zamkniętej społeczności przewodników
                    transformacji. Dziel się możliwościami. Buduj trwałe
                    relacje.
                  </p>

                  {/* Deliverables Section */}
                  <div className="bg-zenith-gold/5 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-zenith-gold" />
                      Co dostajesz:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Finalna sesja integracyjna (często 2 godziny+, czasem
                          więcej – adaptacyjna)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Dostęp do Lifehackers Inner Circle (codzienny Discord
                          12:30, kwartalne wydarzenia w Warszawie)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Dożywotnia społeczność absolwentów (wszyscy absolwenci
                          Life OS + kohorta Train The Trainer)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal">
                          Intensywy osobiste (Warszawa, planowane kwartalnie)
                        </span>
                      </div>
                      <div className="flex gap-3 items-start p-3 bg-gradient-to-r from-zenith-gold/10 to-orange-500/10 rounded-lg border border-zenith-gold/30">
                        <CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-0.5" />
                        <span className="text-deep-charcoal font-bold">
                          Na zawsze. Raz dołączysz, zawsze będziesz.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Why It Works Section */}
                  <div className="border-t-2 border-zenith-gold/20 pt-6">
                    <h4 className="font-bold text-deep-charcoal text-lg mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Dlaczego to działa:
                    </h4>
                    <div className="space-y-3 text-deep-charcoal/90 pl-7">
                      <p>
                        Bo transformacja nie kończy się po ośmiu tygodniach.
                      </p>
                      <p className="font-medium">
                        To początek relacji na 5–10 lat.
                      </p>
                      <p>
                        Niektórzy moi klienci pracują ze mną 3+ lata. Wracają do
                        różnych wyzwań. Pogłębiają pracę.
                      </p>
                      <p className="font-bold text-neural-blue text-lg">
                        To nie jest transakcja. To wejście do rodziny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 8: FULL STACK VALUE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-deep-charcoal text-center">
            Pełny stos wartości
          </h2>

          <div className="max-w-[700px] mx-auto">
            <div className="bg-luminous-white rounded-xl border-2 border-neural-blue/30 p-8 space-y-3">
              {[
                {
                  name: "Zmiana Mentalności Elity (Tydzień 1–2)",
                  price: "12 000 zł",
                },
                {
                  name: "Architektura Emocjonalna (Tydzień 3–4)",
                  price: "10 000 zł",
                },
                { name: "Warsztat Mistrza (Tydzień 5–6)", price: "8 000 zł" },
                {
                  name: "Pozyskiwanie Klientów (Tydzień 7)",
                  price: "10 000 zł",
                },
                {
                  name: "Sieć Absolwentów Dożywotnio (Tydzień 8+)",
                  price: "20 000 zł",
                },
                {
                  name: "8 sesji mentoringu jeden na jeden (50 minut–2,5 godziny każda, rynkowa stawka 2000–4000 zł/godz.)",
                  price: "32 000 zł",
                },
                {
                  name: "Dostęp do prywatnego kanału Slack (8 tygodni intensywnego wsparcia)",
                  price: "8 000 zł",
                },
                {
                  name: "Nagrania sesji + transkrypcje (dostęp dożywotni)",
                  price: "8 000 zł",
                },
                {
                  name: "Metodologia International IT Trainer (19 lat destylacji)",
                  price: "12 000 zł",
                },
                { name: "3 miesiące wsparcia po programie", price: "8 000 zł" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-6 py-3 border-b border-neural-blue/10 last:border-0"
                >
                  <div className="flex gap-3 flex-1">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal leading-snug">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold text-neural-blue whitespace-nowrap text-right">
                    {item.price}
                  </span>
                </div>
              ))}

              <div className="pt-8 mt-8 border-t-2 border-neural-blue/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-wide text-deep-charcoal/60 mb-2">
                      Łączna wartość
                    </div>
                    <div className="text-3xl font-bold text-deep-charcoal">
                      <span className="text-neural-blue">128 000 zł</span>
                    </div>
                  </div>

                  {/* Animated Arrow Separator */}
                  <div className="relative py-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-dashed border-neural-blue/30 animate-pulse"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-luminous-white px-4 py-2 rounded-full border-2 border-neural-blue/20 animate-bounce">
                        <ArrowDown className="h-6 w-6 text-neural-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Final Price Card with Glow */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold via-orange-400 to-zenith-gold rounded-2xl blur opacity-30 animate-pulse"></div>
                    <div className="relative text-center p-8 bg-gradient-to-br from-zenith-gold/10 to-orange-500/10 rounded-xl border-2 border-zenith-gold/40">
                      <div className="text-sm uppercase tracking-wide text-deep-charcoal/60 mb-2">
                        Twoja inwestycja
                      </div>
                      <div className="text-5xl md:text-6xl font-bold text-zenith-gold mb-4">
                        16 000 zł
                      </div>
                      <div className="text-sm text-deep-charcoal/70">
                        (Lub 2 × 6500 zł netto jeśli wolisz rozłożyć + odliczasz
                        VAT)
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-neural-blue/10 rounded-xl">
                    <div className="text-2xl font-bold text-neural-blue">
                      Oszczędzasz: 112 000 zł
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 9: PRICE JUSTIFICATION (ROI MATH) */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego 16 000 zł to właściwie za mało
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            {/* Hormozi Quote Card */}
            <Card className="border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-medium text-deep-charcoal mb-3">
                      Alex Hormozi mówi:{" "}
                      <span className="italic text-neural-blue font-bold">
                        „Chcę pobierać haniebne kwoty pieniędzy."
                      </span>
                    </p>
                    <p className="text-deep-charcoal/80">
                      16 000 zł nie jest „haniebne".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Badge */}
            <div className="flex justify-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-2xl blur opacity-40"></div>
                <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-8 py-4 rounded-2xl border-2 border-zenith-gold/50">
                  <p className="text-2xl font-bold text-deep-charcoal">
                    To jest absurdalnie zaniżona cena za to, co dostajesz.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Header */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <p className="font-bold text-2xl text-deep-charcoal">
                Oto matematyka:
              </p>
            </div>

            {/* Scenario cards */}
            <div className="space-y-6 my-12">
              {/* Scenario A - Status Quo */}
              <Card className="group relative overflow-hidden border-2 border-gray-400/50 hover:border-gray-400/70 transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300/20 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shrink-0">
                      <TrendingDown className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-700">
                        Scenariusz A: Zostajesz tam, gdzie jesteś
                      </h3>
                    </div>
                  </div>

                  {/* Calculation Box */}
                  <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-gray-400">
                    <div className="flex items-start gap-3 mb-4">
                      <Calculator className="h-5 w-5 text-gray-600 shrink-0 mt-1" />
                      <div className="font-mono text-base space-y-2 text-deep-charcoal/90">
                        <div>
                          Kontrakty: 800 zł/godz. × 160 godz./miesiąc = 128 000
                          zł/miesiąc
                        </div>
                        <div>Rok: 1 536 000 zł</div>
                        <div className="font-bold text-lg text-gray-700">
                          5 lat: 7 680 000 zł
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reality Check */}
                  <div className="bg-gray-100/60 rounded-xl p-5 border border-gray-300">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                      <p className="font-medium text-gray-800">
                        Ale: Wciąż w piwnicy (mentalnie). Wciąż impostor
                        syndrome. Cierpiące relacje.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scenario B - World Class Trainer */}
              <Card className="group relative overflow-hidden border-2 border-neural-blue/50 hover:border-neural-blue/70 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neural-blue">
                        Scenariusz B: Stajesz się trenerem światowej klasy
                      </h3>
                    </div>
                  </div>

                  {/* Calculation Box */}
                  <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-neural-blue shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <Calculator className="h-5 w-5 text-neural-blue shrink-0 mt-1" />
                      <div className="font-mono text-base space-y-2 text-deep-charcoal/90">
                        <div>
                          Szkolenia: 40 000 zł/dzień × 2 dni/miesiąc = 80 000
                          zł/miesiąc (konserwatywnie)
                        </div>
                        <div>Rok: 960 000 zł</div>
                        <div className="font-bold text-lg text-neural-blue">
                          5 lat: 4 800 000 zł
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-neural-blue/10 to-zenith-gold/10 rounded-xl p-5 border border-neural-blue/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                      <p className="font-medium text-deep-charcoal">
                        Plus: Transformacja tożsamości. Pewność siebie. Lepsze
                        relacje. Prawdziwe spełnienie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Alert */}
              <Card className="border-2 border-red-400/50 bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        Różnica: –2 880 000 zł w ciągu 5 lat.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reality Check Card */}
              <Card className="my-8 border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-50 to-amber-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <p className="font-semibold text-xl text-deep-charcoal">
                        Moment. To brzmi, jakby scenariusz A był lepszy
                        finansowo?
                      </p>
                      <p className="font-bold text-3xl text-neural-blue">
                        Nie.
                      </p>
                      <p className="text-deep-charcoal/90 text-lg">
                        Bo scenariusz A zakłada, że będziesz mógł utrzymać 160
                        godzin kontraktowych miesięcznie przez 5 lat. Nie
                        będziesz. Wypalenie cię dopadnie. Zdrowie się pogorszy.
                        Relacje się rozpadną.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scenario B Realistic */}
              <Card className="group relative overflow-hidden border-2 border-zenith-gold/50 hover:border-zenith-gold/70 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-zenith-gold/10 via-neural-blue/5 to-orange-500/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/15 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Trophy Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-zenith-gold">
                        Scenariusz B? Bardziej realistyczny:
                      </h3>
                    </div>
                  </div>

                  {/* Growth Points */}
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3 items-start p-3 bg-white/60 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-zenith-gold shrink-0 mt-0.5" />
                      <p className="text-deep-charcoal">
                        40 000 zł/dzień to początek. Po roku to będzie 60 000
                        zł/dzień.
                      </p>
                    </div>
                    <div className="flex gap-3 items-start p-3 bg-white/60 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-zenith-gold shrink-0 mt-0.5" />
                      <p className="text-deep-charcoal">
                        2 dni/miesiąc to bardzo konserwatywna liczba.
                        Realistyczne jest 3–4 dni.
                      </p>
                    </div>
                  </div>

                  {/* Realistic Calculation */}
                  <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-zenith-gold shadow-sm">
                    <div className="flex items-start gap-3">
                      <Calculator className="h-5 w-5 text-zenith-gold shrink-0 mt-1" />
                      <div className="font-mono text-base space-y-2 text-deep-charcoal/90">
                        <div>
                          60 000 zł × 3 dni × 12 miesięcy = 2 160 000 zł/rok
                        </div>
                        <div className="font-bold text-xl text-zenith-gold">
                          5 lat: 10 800 000 zł
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Massive Win Badge */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-2xl blur opacity-40"></div>
                    <div className="relative p-6 bg-gradient-to-r from-zenith-gold/20 to-orange-500/10 rounded-2xl border-2 border-zenith-gold/50">
                      <p className="text-3xl font-bold text-neural-blue text-center">
                        Różnica: +3 120 000 zł w ciągu 5 lat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Massive ROI Card */}
            <div className="relative mt-12">
              <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <Card className="relative bg-gradient-to-br from-neural-blue/10 via-white to-zenith-gold/10 border-4 border-zenith-gold/50">
                <CardContent className="p-10 text-center">
                  <p className="text-lg text-text-secondary mb-2">
                    Inwestycja: 16 000 zł
                  </p>
                  <div className="relative inline-block">
                    <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-neural-blue via-twilight-indigo to-zenith-gold bg-clip-text text-transparent mb-2">
                      195×
                    </div>
                    <Sparkles className="absolute -top-2 -right-8 h-8 w-8 text-zenith-gold animate-pulse" />
                    <Sparkles
                      className="absolute -bottom-2 -left-8 h-6 w-6 text-neural-blue animate-pulse"
                      style={{ animationDelay: "150ms" }}
                    />
                  </div>
                  <p className="text-xl font-semibold text-text-primary">
                    Return on Investment
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="italic text-deep-charcoal/70">
              I to przy założeniu BARDZO konserwatywnych liczb.
            </p>

            <div className="my-8 p-6 bg-neural-blue/5 rounded-xl border-l-4 border-neural-blue">
              <p className="font-semibold text-xl mb-4 text-neural-blue">
                Rzeczywistość? Gdy już jesteś ustawiony jako elitarny trener:
              </p>
              <div className="space-y-2 pl-6">
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>60 000 zł dziennie staje się normą</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>3–4 dni miesięcznie to realna liczba</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>2–3 miliony rocznie to możliwe</p>
                </div>
              </div>
            </div>

            <p className="font-bold text-2xl text-deep-charcoal pt-6">
              Więc 16 000 zł?
            </p>

            <p className="font-semibold text-xl">
              To nie jest drogie. To jest okazja.
            </p>

            <p>Szczególnie gdy rozumiesz, że:</p>

            <div className="pl-6 space-y-3 my-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>
                  To nie jest „kurs". To osobisty mentoring. Osiem tygodni pracy
                  jeden na jeden.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>
                  To nie są „porady prezentacyjne". To kompletna rekonstrukcja
                  tożsamości.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>
                  Skutki uboczne (lepsze relacje, pewność siebie, eliminacja
                  nadmiernego myślenia) same są warte tej ceny.
                </p>
              </div>
            </div>

            <div className="my-12 p-8 bg-gradient-to-br from-secondary/30 to-neural-blue/10 rounded-xl border border-neural-blue/30">
              <p className="font-bold text-xl mb-6 text-neural-blue">
                Hormozi nazywa to „cyklem cnotliwej ceny":
              </p>
              <p className="mb-4 font-medium">Gdy PODNOSISZ cenę:</p>
              <div className="space-y-3 pl-6">
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">1.</span>
                  <p>Klient inwestuje więcej emocjonalnie</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">2.</span>
                  <p>Postrzegana wartość ROŚNIE</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">3.</span>
                  <p>Rezultaty są LEPSZE (bo zaangażowanie wyższe)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">4.</span>
                  <p>TY możesz dać WIĘCEJ (bo masz zasoby)</p>
                </div>
              </div>
            </div>

            <p className="font-bold text-xl text-deep-charcoal">
              Dlatego klienci za 16 000 zł dostają lepsze rezultaty, niż
              dostaliby za 997 zł.
            </p>

            <p>Nie dlatego, że program jest inny.</p>

            <p className="font-semibold text-xl text-neural-blue">
              Dlatego, że ICH zaangażowanie jest inne.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 10: DUAL GUARANTEE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Jak wiem, że to zadziała dla mnie?
          </h2>

          <p className="text-xl mb-12 text-deep-charcoal font-semibold">
            Dwie gwarancje. Obie bezwarunkowe.
          </p>

          <div className="space-y-8">
            {/* Guarantee 1 */}
            <Card className="group relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 hover:shadow-xl bg-luminous-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-neural-blue text-white px-6 py-3 rounded-lg font-bold text-lg mb-4">
                      GWARANCJA #1: 7-DNIOWY ZWROT PIENIĘDZY
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed pl-22">
                  <p className="font-medium">
                    Po pierwszym tygodniu programu, jeśli uznasz, że to nie dla
                    ciebie – zwrot 100% wpłaconej kwoty.
                  </p>

                  <div className="flex items-center gap-3 p-4 bg-neural-blue/10 rounded-lg border border-neural-blue/20">
                    <CheckCircle className="h-5 w-5 text-neural-blue shrink-0" />
                    <p className="font-semibold text-neural-blue">
                      Zero pytań. Zero warunków. Po prostu: „To nie dla mnie" i
                      dostajesz pieniądze z powrotem.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neural-blue/20">
                    <p className="font-semibold text-deep-charcoal mb-3">
                      Dlaczego?
                    </p>
                    <div className="space-y-3 pl-4">
                      <p>
                        Bo jeśli po dwóch sesjach ze mną nie czujesz, że coś
                        fundamentalnego się zmienia – to znaczy, że nie pasujesz
                        do programu.
                      </p>
                      <p className="font-medium">
                        I wolę zwrócić pieniądze, niż zmarnować twój czas i mój.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee 2 */}
            <Card className="group relative overflow-hidden border-2 border-zenith-gold/40 hover:border-zenith-gold/60 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-zenith-gold/5 to-luminous-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-zenith-gold text-white px-6 py-3 rounded-lg font-bold text-lg mb-4">
                      GWARANCJA #2: 12-MIESIĘCZNA GWARANCJA KONTRAKTU
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed pl-22">
                  <p className="font-medium">
                    Jeśli w ciągu 12 miesięcy od ukończenia programu nie
                    zdobędziesz kontraktu szkoleniowego wartego minimum 10 000
                    złotych...
                  </p>

                  <div className="flex items-center gap-3 p-4 bg-zenith-gold/10 rounded-lg border border-zenith-gold/30">
                    <CheckCircle className="h-5 w-5 text-zenith-gold shrink-0" />
                    <p className="font-semibold text-zenith-gold text-xl">
                      ...dostajesz dodatkowe 3 miesiące mentoringu bezpłatnie.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zenith-gold/30">
                    <p className="font-semibold text-deep-charcoal mb-3">
                      Dlaczego?
                    </p>
                    <div className="space-y-3 pl-4">
                      <p>
                        Bo albo program nie zadziałał (mało prawdopodobne,
                        biorąc pod uwagę historię sukcesów), albo potrzebujesz
                        więcej wsparcia w części pozyskiwania klientów.
                      </p>
                      <p className="font-medium">
                        Tak czy inaczej – nie zostawiam cię samego.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reality check */}
            <div className="mt-12 p-8 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
              <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
                <p className="font-bold text-xl text-deep-charcoal">
                  Ale szczerze?
                </p>

                <p>
                  Jeśli przejdziesz przez osiem tygodni ze mną i nie dostaniesz
                  kontraktu za 40 000+ złotych w rok...
                </p>

                <p className="font-semibold text-xl text-neural-blue">
                  ...to znaczy, że nie wykonałeś pracy.
                </p>

                <p>
                  Bo transformacja wymaga twojego zaangażowania. Nie mogę tego
                  zrobić ZA ciebie.
                </p>

                <p className="font-medium">
                  Mogę tylko przeprowadzić cię przez proces.
                </p>

                <p className="font-semibold text-lg">
                  Reszta zależy od Ciebie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 11: SCARCITY */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tylko pięć miejsc (i dlaczego to prawda)
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-semibold text-xl">
              To nie jest fałszywy deficyt.
            </p>

            <p>
              Większość marketerów mówi „tylko 5 miejsc!", potem nagle
              „otwieramy 3 dodatkowe!".
            </p>

            <p className="font-bold text-2xl text-neural-blue">Bzdura.</p>

            <p className="font-semibold text-xl">
              U mnie: 5 miejsc = 5 miejsc. Twardy limit. Zero wyjątków.
            </p>

            <p className="font-medium pt-4">Dlaczego?</p>

            <p>Bo to nie jest skalowalny program grupowy.</p>

            <p className="font-medium">
              To intensywny mentoring jeden na jeden, gdzie każda sesja trwa
              1–2,5 godziny, w zależności od potrzebnej głębokości.
            </p>

            <div className="my-8 p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30">
              <p className="font-mono text-lg font-bold text-deep-charcoal text-center">
                5 klientów × 8 tygodni × 2 godziny średnio = 80 godzin
                intensywnej pracy
              </p>
            </div>

            <div className="space-y-3 pl-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Plus codzienne wsparcie na Slacku.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>
                  Plus przygotowanie przed sesją (myślę o twoich problemach na
                  dni wcześniej, synchronistycznie).
                </p>
              </div>
            </div>

            <p className="font-semibold text-xl pt-6">
              To jest maksimum mojej pojemności przy zachowaniu jakości.
            </p>

            <p>Więcej? Jakość spada. Uwaga się rozmywa. Rezultaty cierpią.</p>

            <div className="my-8 p-6 bg-secondary/30 rounded-xl border-l-4 border-neural-blue">
              <p className="mb-3">
                Hormozi mówi:{" "}
                <span className="italic">
                  „Biznes służy klientowi, nie na odwrót."
                </span>
              </p>
              <p className="font-semibold">Dokładnie.</p>
            </div>

            <p className="font-bold text-xl text-neural-blue">
              Wolę 5 transformowanych klientów niż 50 przeciętnych rezultatów.
            </p>

            <div className="my-12 space-y-8">
              <p className="font-semibold text-xl">Plus:</p>

              {/* Capacity Meter */}
              <Card className="relative overflow-hidden border-2 border-zenith-gold/50 bg-gradient-to-br from-zenith-gold/10 to-orange-500/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 animate-pulse">
                      <AlertTriangle className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-zenith-gold">
                        2 z 5 miejsc pozostało na Q1 2025
                      </p>
                    </div>
                  </div>

                  {/* Visual capacity bar */}
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-zenith-gold rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white drop-shadow-lg">
                        60% WYPEŁNIONE
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Timeline */}
              <div className="relative">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-sm text-deep-charcoal/60 mb-1">
                        2020-2023
                      </p>
                      <p className="font-semibold text-deep-charcoal">
                        4 900 - 12 000 zł
                      </p>
                      <p className="text-sm text-deep-charcoal/70 mt-1">
                        Poprzednie edycje
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-0.5 h-full bg-neural-blue/30 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-sm font-bold text-neural-blue mb-1">
                        DZIŚ (Q1 2025)
                      </p>
                      <p className="text-2xl font-bold text-neural-blue">
                        16 000 zł
                      </p>
                      <div className="inline-block mt-2 px-3 py-1 bg-zenith-gold/20 border border-zenith-gold/40 rounded-full">
                        <p className="text-xs font-bold text-zenith-gold">
                          OSTATNIA SZANSA W TEJ CENIE
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-deep-charcoal/60 mb-1">
                        Q1 2026
                      </p>
                      <p className="font-semibold text-deep-charcoal/70">
                        Następna rekrutacja
                      </p>
                      <p className="text-sm text-deep-charcoal/60 mt-1">
                        Wyższa cena
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-deep-charcoal/50 mb-1">
                        2027+
                      </p>
                      <p className="font-semibold text-deep-charcoal/60">
                        32 000 - 38 000 zł
                      </p>
                      <p className="text-sm text-deep-charcoal/50 mt-1">
                        Szacowana cena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 12: QUALIFICATION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Kim musisz być, żeby to wziąć
          </h2>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p>
              Tu jest część, gdzie większość stron sprzedażowych mówi: „KLIKNIJ
              TERAZ! OGRANICZONY CZAS!"
            </p>

            <p className="font-bold text-2xl text-neural-blue">Pieprzyć to.</p>

            <p className="font-semibold text-xl">
              Nie każdy kwalifikuje się do tego programu.
            </p>

            <p className="font-medium">Serio.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Not for - Red Warning Card */}
            <Card className="relative overflow-hidden border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100/50 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shrink-0">
                    <X className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">
                    To nie jest dla:
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Ludzi szukających szybkiej poprawki
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Tych, którzy chcą taktyk bez pracy nad tożsamością
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Osób niegotowych na osiem tygodni intensywnej pracy (10–15
                      godzin tygodniowo)
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Tych, którzy „może kiedyś" chcą być trenerami
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Ludzi bez pojemności finansowej na 16 000 zł (lub 2 × 6500
                      zł netto)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Is for - Green Success Card */}
            <Card className="relative overflow-hidden border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neural-blue">
                    To jest dla:
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Seniorów deweloperów/architektów/menedżerów z 5+ lat
                      doświadczenia
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Ludzi, którzy prowadzili projekty o wartości 400 000+ zł
                      (rozumiesz kontekst biznesowy)
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Overthinkerów i analityków zmęczonych piwnicą, marzących o
                      scenach
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Tych, którzy czują, że mają niewykorzystany potencjał
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Osób gotowych na transformację (nie tylko „porady")
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal/90">
                      Biegła znajomość angielskiego w mowie i piśmie (Fortune
                      500/NATO tego wymagają)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Discovery Session Process */}
          <Card className="mt-16 bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5 border-2 border-neural-blue/30">
            <CardContent className="p-8">
              <p className="text-xl font-bold text-deep-charcoal mb-6">
                Jeśli to ty – umów Sesję Discovery (30 minut).
              </p>

              <p className="text-lg text-deep-charcoal/90 mb-6">
                To kwalifikacyjna rozmowa, gdzie:
              </p>

              <div className="space-y-4">
                <div className="group flex gap-4 p-4 bg-white rounded-lg border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <p className="text-lg text-deep-charcoal/90 pt-1">
                    Sprawdzam twoje doświadczenie, cele, gotowość
                  </p>
                </div>
                <div className="group flex gap-4 p-4 bg-white rounded-lg border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <p className="text-lg text-deep-charcoal/90 pt-1">
                    TY sprawdzasz, czy jestem odpowiedni dla ciebie
                  </p>
                </div>
                <div className="group flex gap-4 p-4 bg-white rounded-lg border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <p className="text-lg text-deep-charcoal/90 pt-1">
                    Jeśli pasujesz – dostajesz zaproszenie do programu
                  </p>
                </div>
                <div className="group flex gap-4 p-4 bg-white rounded-lg border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <p className="text-lg text-deep-charcoal/90 pt-1">
                    Jeśli nie – powiem, dlaczego (i co zrobić, żeby się
                    kwalifikować później)
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30 text-center">
                <p className="text-2xl font-bold text-neural-blue">
                  Decyzja w 24 godziny.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEKCJA 13: FINAL CLOSE */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Słowa finalne
          </h2>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p className="font-semibold text-xl">
              Skończę tak, jak zacząłem: brutalnie.
            </p>

            <p className="font-bold text-2xl text-deep-charcoal">
              Masz dwa wybory.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {/* Choice A - Dark Warning State */}
            <Card className="relative overflow-hidden border-2 border-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gray-300 rounded-full opacity-50 blur-xl"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingDown className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700">
                    Wybór A: Status Quo
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">
                      Kontynuuj życie jako „dobry technik". Kontrakty za 200
                      złotych na godzinę. Bezpiecznie. Stabilnie. Cholernie
                      nudno.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">
                      Impostor syndrome wciąż tam za każdym razem, gdy myślisz o
                      scenach. Relacje wciąż cierpią, bo nie jesteś spełniony.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                    <p className="text-lg font-semibold text-gray-800">
                      Pięć lat później: wciąż w tym samym miejscu. Starszy.
                      Bardziej zgorzkniały. Zastanawiasz się: „co, jeśli?"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-5xl font-bold text-neural-blue py-6">
              LUB
            </div>

            {/* Choice B - Vibrant Success State */}
            <Card className="relative overflow-hidden border-4 border-neural-blue/50 bg-gradient-to-br from-neural-blue/10 via-zenith-gold/10 to-luminous-white">
              <div className="absolute top-4 right-4 w-24 h-24 bg-neural-blue rounded-full opacity-30 blur-2xl"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 animate-pulse">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neural-blue">
                    Wybór B: Transformacja
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                    <p className="text-lg text-deep-charcoal">
                      Osiem tygodni intensywnej pracy. Niewygodne. Wymagające.
                      Zmieniające życie.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                    <p className="text-lg text-deep-charcoal">
                      Stajesz się kimś, kto wchodzi do sal i transformuje
                      przestrzenie. 20 000–30 000 złotych tygodniowo staje się
                      normą. Klienci Fortune 500 stają się regularni.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                    <p className="text-lg text-deep-charcoal">
                      Impostor syndrome? Zniknął – bo stałeś się osobą, którą
                      próbowałeś udawać.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-blue shrink-0 mt-0.5" />
                    <p className="text-lg text-deep-charcoal">
                      Relacje? Lepsze – bo jesteś spełniony, pewny siebie,
                      obecny.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <CheckCircle className="h-6 w-6 text-zenith-gold shrink-0 mt-0.5" />
                    <p className="text-xl font-bold text-neural-blue">
                      Pięć lat później: zupełnie inna trajektoria życia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social proof mini-section */}
          <div className="my-12 p-8 bg-secondary/30 rounded-xl border-l-4 border-neural-blue">
            <div className="space-y-4 text-lg text-deep-charcoal/90">
              <p>
                <strong>Anna</strong> wybrała Wybór B. Z narracji ofiary
                przeszła do sprawstwa. Kompletna zmiana modelu mentalnego.
              </p>
              <p>
                <strong>Lucja</strong> wybrała Wybór B. Z chaosu wypalenia
                przeszła do codziennej medytacji + biznes rośnie szybciej.
              </p>
              <p>
                <strong>30+ klientów Fortune 500/NATO</strong> wybrało Wybór B.
                Z „kolejnego szkolenia technicznego" dostali transformujące
                doświadczenie.
              </p>
            </div>
          </div>

          <div className="my-12 space-y-6 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-bold text-2xl text-deep-charcoal">
              Pytanie nie jest „czy to zadziała".
            </p>

            <p>
              30+ opinii + 19 lat historii + studia przypadków Anny i Lucji =
              wiesz, że działa.
            </p>

            <p className="font-bold text-2xl text-neural-blue">
              Pytanie jest: „Czy TY jesteś gotowy?"
            </p>
          </div>

          <div className="my-12 p-8 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
            <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
              <p>
                Bo jeśli nie jesteś gotowy zostawić piwnicy (dosłownie lub
                mentalnie)...
              </p>
              <p>
                ...jeśli nie jesteś gotowy na osiem tygodni intensywnej pracy
                nad tożsamością...
              </p>
              <p>...jeśli wolisz „może kiedyś" zamiast „kurwa, teraz"...</p>
              <p className="font-bold text-xl text-deep-charcoal pt-2">
                ...to nie klikaj przycisku poniżej.
              </p>
              <p className="font-medium">Serio. Oszczędź swój czas i mój.</p>
            </div>
          </div>

          <div className="my-12 p-8 bg-gradient-to-br from-zenith-gold/20 to-neural-blue/10 rounded-xl border-2 border-zenith-gold/40">
            <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
              <p className="font-semibold text-xl">
                Ale jeśli czytasz to i czujesz w żołądku, że to jest moment...
              </p>
              <p>
                ...że masz dość tego, gdzie jesteś, i jesteś gotowy na to, gdzie
                możesz być...
              </p>
              <p>...że masz dosyć życia w półśrodkach...</p>
              <p className="font-bold text-2xl text-neural-blue pt-2">
                ...to umów Sesję Discovery.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 mb-12">
            <p className="text-xl font-medium text-deep-charcoal">
              30 minut. Zoom. Sprawdzimy, czy pasujesz.
            </p>

            <div className="p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30 inline-block">
              <p className="text-lg">
                Następna rekrutacja: <span className="font-bold">Q1 2026</span>
              </p>
              <p className="text-base text-deep-charcoal/70">
                (w 2027 prawdopodobnie 32 000–38 000 zł)
              </p>
            </div>

            <p className="text-2xl font-bold text-zenith-gold pt-4">
              To ostatnia szansa w cenie 16 000 zł.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 14: CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center space-y-8">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-600 rounded-full px-6 py-3 shadow-lg animate-pulse">
              <Clock className="h-5 w-5 text-red-600" />
              <span className="text-sm font-bold text-red-900">
                TYLKO 2 MIEJSCA POZOSTAŁY Q1 2025
              </span>
            </div>

            {/* Massive CTA with Glow */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <Button
                size="lg"
                className="relative text-xl px-12 py-8 min-h-[60px] flex items-center gap-3 bg-neural-blue hover:bg-neural-blue/90 text-white shadow-xl font-bold"
              >
                <Calendar className="h-6 w-6" />
                UMÓW SESJĘ DISCOVERY (30 MIN) – BEZPŁATNIE
              </Button>
            </div>

            <p className="text-base text-deep-charcoal font-medium">
              Następna rekrutacja Q1 2026 (prawdopodobnie 32-38k zł)
            </p>

            <div className="h-16"></div>

            {/* P.S. Section */}
            <Card className="text-left bg-white border-2 border-neural-blue/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg text-deep-charcoal">
                      <span className="italic font-bold text-neural-blue">
                        P.S.
                      </span>{" "}
                      – Hormozi mówi: „Najlepszy czas, żeby zacząć, był 5 lat
                      temu. Drugi najlepszy czas to teraz."
                    </p>
                    <p className="text-lg text-deep-charcoal">
                      Pięć lat temu mogłeś zacząć tę transformację. Nie
                      zacząłeś.
                    </p>
                    <p className="text-lg font-semibold text-deep-charcoal">
                      Teraz masz drugą szansę.
                    </p>
                    <p className="text-xl font-bold text-neural-blue">
                      Nie zmarnuj jej.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
