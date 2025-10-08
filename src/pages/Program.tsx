import Layout from "@/components/layout/Layout";
import AppStoreStats from "@/components/sections/AppStoreStats";
import AppCard from "@/components/ui/app-card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Brain,
  Clock,
  Diamond,
  GraduationCap,
  Heart,
  Lock,
  MapPin,
  MessageSquare,
  Mic2,
  Shield,
  Users,
  Video,
  Quote,
  Lightbulb,
  AlertTriangle,
  Download,
  Sparkles,
  Trophy,
  TrendingUp,
  Zap,
  ArrowDown,
} from "@/lib/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import effectGif from "@/assets/I-know-kung-fu.gif";
import redPillGif from "@/assets/red-pill.gif";
import lifehackerzyLogo from "@/assets/lifehackerzy-logo.png";

const apps = [
  {
    title: "Hakowanie Produktywności",
    subtitle: "System produktywności zgodny z wartościami",
    description:
      "Przestań być kontrolowanym przez technologię. Odzyskaj sprawczość i zbuduj system, który faktycznie wspiera Twoje cele.",
    category: "Produktywność" as const,
    rating: 5.0,
    downloads: "115 instalacji",
    status: "DOSTĘPNA" as const,
    duration: "6 tygodni",
    target: "Dla świadomych optymalizatorów",
    features: [
      "Kompleksowa diagnoza blokad produktywności",
      "Zintegrowany system zarządzania zadaniami",
      "Protokoły głębokiej pracy",
      "Praktyczne wdrożenie narzędzi",
    ],
    link: "/program/hakowanie-produktywnosci",
  },
  {
    title: "Silna Głowa",
    subtitle: "Odporność psychiczna w wymagającym świecie",
    description:
      "Zbuduj psychiczną odporność, która pozwoli Ci zachować spokój i klarowność myślenia nawet w najbardziej wymagających okolicznościach.",
    category: "Odporność psychiczna" as const,
    rating: 5.0,
    downloads: "64 instalacji",
    status: "NIEDOSTĘPNA" as const,
    duration: "6 tygodni",
    target: "Dla poszukujących balansu",
    features: [
      "Praktyczne techniki redukcji stresu",
      "Protokoły zarządzania energią mentalną",
      "Strategie podejmowania decyzji pod presją",
      "Metody budowania długoterminowej odporności",
    ],
    link: "/program/silna-glowa",
  },
  {
    title: "Męski Kompas",
    subtitle: "Mapa transformacji dla świadomych mężczyzn",
    description:
      "Program dla mężczyzn gotowych przejąć pełną odpowiedzialność za swoje życie. Odkryj i wzmocnij swoją autentyczną męskość.",
    category: "Męskość" as const,
    rating: 5.0,
    downloads: "6 instalacji",
    status: "DOSTĘPNA" as const,
    duration: "5 tygodni",
    target: "Dla gotowych na transformację",
    features: [
      "Kompleksowa analiza sytuacji życiowej",
      "Praktyczne narzędzia przywództwa osobistego",
      "Strategie budowania autentycznych relacji",
      "Protokoły rozwoju fizycznego i mentalnego",
    ],
    link: "/program/meski-kompas",
    featured: true,
  },
];

const communityBenefits = [
  {
    icon: Clock,
    title: "12:34 Daily Coaching",
    description: "Codzienne spotkania o stałej porze",
  },
  {
    icon: Mic2,
    title: "Wsparcie na Żywo",
    description: "Motywacja i inspiracja każdego dnia",
  },
  {
    icon: MessageSquare,
    title: "Forum Dyskusyjne",
    description: "180+ aktywnych wątków",
  },
  {
    icon: MapPin,
    title: "Globalna Społeczność",
    description: "Lifehackerzy z 8+ krajów",
  },
  {
    icon: Users,
    title: "Autentyczne Przyjaźnie",
    description: "Silne więzi i motywacja",
  },
  {
    icon: Heart,
    title: "Wzajemne Wsparcie",
    description: "Wymiana wiedzy i doświadczeń",
  },
  {
    icon: Lock,
    title: "Sekrety Lifehackerów",
    description: "Ukryte strategie efektywności",
  },
  {
    icon: GraduationCap,
    title: "Warsztaty Eksperckie",
    description: "Sesje o GTD, Notion, Apple/Windows",
  },
  {
    icon: Video,
    title: "50+ Protipów",
    description: "Wewnętrzne nagrania niedostępne publicznie",
  },
  {
    icon: Brain,
    title: "Mindset & Motywacja",
    description: "Materiały o odporności psychicznej",
  },
  {
    icon: Users,
    title: "Lekcje Co-Trenerów",
    description: "Eksperci od delegowania, automatyzacji, medytacji",
  },
  {
    icon: Diamond,
    title: "Toolbox Lifehackera",
    description: "Notatki i strategie społeczności",
  },
  {
    icon: BookOpen,
    title: "Wiedza w Pigułce",
    description: "Skondensowane notatki najlepszych",
  },
];

export default function Program() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isFaqOverlayVisible, setIsFaqOverlayVisible] = useState(true);

  const handleUnlockAccess = () => {
    setIsOverlayVisible(false);
  };

  const handleShowEffect = () => {
    setIsFaqOverlayVisible(false);
  };

  const scrollToApps = () => {
    const appsSection = document.querySelector(".apps-section");
    appsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neural-blue/5 via-background to-zenith-gold/5 py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-blue rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-twilight-indigo rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-zenith-gold rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full blur opacity-30"></div>
                <Badge className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-sm px-6 py-2 shadow-lg">
                  <Brain className="inline h-4 w-4 mr-2" />
                  Mental Software Update
                </Badge>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-deep-charcoal leading-tight">
                LifeOS{" "}
                <span className="bg-gradient-to-r from-neural-blue via-twilight-indigo to-zenith-gold bg-clip-text text-transparent">
                  AppStore
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 mb-4 leading-relaxed">
                Aplikacje mentalnej transformacji.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed">
                Zainstaluj nowe oprogramowanie.{" "}
                <span className="italic bg-gradient-to-r from-neural-blue to-twilight-indigo bg-clip-text text-transparent font-bold">
                  W głowie.
                </span>
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Card className="border border-neural-blue/30 bg-white/80 backdrop-blur-sm hover:border-neural-blue/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Download className="h-4 w-4 text-neural-blue" />
                  <span className="text-sm font-semibold text-deep-charcoal">
                    4-6 tygodni
                  </span>
                </CardContent>
              </Card>
              <Card className="border border-neural-blue/30 bg-white/80 backdrop-blur-sm hover:border-neural-blue/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neural-blue" />
                  <span className="text-sm font-semibold text-deep-charcoal">
                    Intensywna transformacja
                  </span>
                </CardContent>
              </Card>
              <Card className="border border-neural-blue/30 bg-white/80 backdrop-blur-sm hover:border-neural-blue/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-neural-blue" />
                  <span className="text-sm font-semibold text-deep-charcoal">
                    Społeczność absolwentów
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-2xl blur opacity-30 animate-pulse"></div>
                <CTAButton
                  onClick={scrollToApps}
                  className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-neural-blue/90 hover:to-twilight-indigo/90 text-white shadow-xl text-lg px-8 py-6 border-0"
                >
                  Przeglądaj Aplikacje
                  <ArrowDown className="ml-2 h-5 w-5 inline animate-bounce" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Statistics */}
      <section className="py-12 bg-neural-blue/5">
        <div className="container mx-auto px-4">
          <AppStoreStats />
        </div>
      </section>

      {/* Section 1: Basic Apps (50%/50%) */}
      <section
        id="apps-section"
        className="py-20 apps-section bg-luminous-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div>
                <Badge
                  variant="outline"
                  className="text-neural-blue border-neural-blue px-6 py-2 text-sm font-semibold"
                >
                  Programy Fundamentalne
                </Badge>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight max-w-4xl mx-auto">
                Przestań instalować kolejne aplikacje. Zacznij naprawiać to, co
                działa w Twojej głowie.
              </h2>

              {/* Intro Text with Icon Card */}
              <Card className="max-w-3xl mx-auto border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4 text-left">
                      <p className="text-lg text-deep-charcoal/80">
                        Słuchaj, powiem Ci coś, czego nikt inny nie powie:
                      </p>
                      <p className="text-2xl font-bold text-neural-blue">
                        Nie potrzebujesz kolejnego kursu produktywności.
                      </p>
                      <p className="text-lg text-deep-charcoal">
                        Potrzebujesz przeprogramować fundamenty – sposób, w jaki
                        myślisz o czasie, energii, priorytetach i swojej
                        tożsamości.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mental Software Update Card */}
              <Card className="max-w-4xl mx-auto border-2 border-neural-blue/50 hover:border-neural-blue/70 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Download className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-deep-charcoal text-left">
                        Moje Programy = Twój Mental Software Update
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-deep-charcoal/80 mb-6 text-left">
                    Każda aplikacja to{" "}
                    <strong className="text-neural-blue">
                      intensywny, 4-6 tygodniowy program
                    </strong>{" "}
                    zaprojektowany, żeby zaktualizować JEDEN fundamentalny
                    program działający w tle:
                  </p>

                  {/* Feature Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3 items-start p-4 bg-white/60 rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                      <Zap className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                      <span className="text-left text-lg text-deep-charcoal">
                        <strong>Jak myślisz o produktywności</strong> (nie jak
                        używasz Notion)
                      </span>
                    </div>
                    <div className="flex gap-3 items-start p-4 bg-white/60 rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                      <Zap className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                      <span className="text-left text-lg text-deep-charcoal">
                        <strong>Jak radzisz sobie z chaosem</strong> (nie jak
                        planujesz dni)
                      </span>
                    </div>
                    <div className="flex gap-3 items-start p-4 bg-white/60 rounded-lg border border-neural-blue/10 hover:border-neural-blue/30 transition-colors">
                      <Zap className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                      <span className="text-left text-lg text-deep-charcoal">
                        <strong>Kim jesteś jako mężczyzna</strong> (nie jak
                        zarządzasz zespołem)
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-neural-blue/10 to-zenith-gold/10 rounded-xl p-5 border border-neural-blue/30">
                    <p className="text-lg text-deep-charcoal text-left">
                      To nie są taktyki. To są{" "}
                      <strong className="text-neural-blue">fundamenty</strong>,
                      które muszą działać, zanim cokolwiek innego zadziała.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why It Works Card */}
              <Card className="max-w-3xl mx-auto border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-50 to-amber-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4 text-left">
                      <h3 className="text-3xl md:text-4xl font-bold text-deep-charcoal">
                        Dlaczego to działa (a kolejny kurs Udemy nie)
                      </h3>
                      <div className="space-y-4 text-lg text-deep-charcoal/90">
                        <p>
                          Bo nie uczę Cię <strong>JAK</strong> używać narzędzi.
                        </p>
                        <p>
                          Przeprogramowuję{" "}
                          <strong className="text-neural-blue">SPOSÓB</strong>,
                          w jaki myślisz o tym, czemu te narzędzia mają służyć.
                        </p>
                        <div className="bg-white/60 rounded-xl p-5 border border-yellow-400/30">
                          <p className="text-xl font-bold text-deep-charcoal">
                            Różnica? Każde narzędzie po tym zaczyna działać. Bo
                            problem nigdy nie był w narzędziu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Text */}
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-xl font-semibold text-deep-charcoal">
                  Wybierz aplikację. Zainstaluj ją. Obserwuj, jak reszta zaczyna
                  działać.
                </p>
                <p className="text-lg text-deep-charcoal/70">
                  A potem, jak będziesz gotów na pełen system upgrade →{" "}
                  <Link
                    to="/program/lifeos-system-upgrade"
                    className="text-neural-blue hover:underline font-semibold"
                  >
                    Life OS
                  </Link>{" "}
                  czeka.
                </p>
              </div>

              {/* Apps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                {apps.slice(0, 2).map((app) => (
                  <div key={app.title} className="group">
                    <AppCard {...app} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured New App - Męski Kompas */}
      <section className="py-20 bg-gradient-to-br from-neural-blue/10 via-twilight-indigo/5 to-zenith-gold/10 relative overflow-hidden">
        {/* Background Effect Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neural-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zenith-gold/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-full blur opacity-40 animate-pulse"></div>
                <Badge className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-base px-6 py-3 shadow-lg">
                  <Sparkles className="inline h-4 w-4 mr-2" />
                  NOWY PROGRAM - DOŁĄCZ TERAZ!
                </Badge>
              </div>
            </div>

            {/* Featured Card with Spotlight */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neural-blue via-zenith-gold to-twilight-indigo rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative flex justify-center">
                <div className="w-full max-w-md">
                  <div className="relative">
                    {/* NEW Badge on Card */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-full blur opacity-60 animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-zenith-gold to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl">
                          NEW
                        </div>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <AppCard {...apps[2]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Efekt? Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge
                variant="outline"
                className="mb-4 text-neural-blue border-neural-blue"
              >
                FAQ: EFEKT?
              </Badge>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-charcoal">
                Pokaż mi jak wygląda proces instalacji
              </h2>
            </div>

            {/* Effect Display with Overlay */}
            <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
              {/* Privacy Overlay */}
              {isFaqOverlayVisible && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-neural-blue/20 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-neural-blue" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">
                        Chcesz zobaczyć efekt?
                      </h3>
                      <p className="text-white/80 text-lg">
                        Zobacz jak wygląda proces mentalnej transformacji
                      </p>
                    </div>

                    <CTAButton
                      onClick={handleShowEffect}
                      className="bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue"
                      size="lg"
                    >
                      Pokaż Efekt
                    </CTAButton>
                  </div>
                </div>
              )}

              {/* GIF Content */}
              <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-neural-blue/20">
                <img
                  src={effectGif}
                  alt="Mental transformation effect demonstration"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Źródło: Matrix (1999), Warner Bros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Lifehackerzy Community Benefits */}
      <section className="py-16 sm:py-20 bg-lifehacker-purple-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-6 text-white border-0 px-6 py-2 text-base sm:text-lg font-bold shadow-lg bg-lifehacker-purple">
                💎 BONUS BEZCENNY
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Dożywotni dostęp do społeczności{" "}
              <span className="text-lifehacker-purple">LIFEHACKERZY</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ekskluzywna społeczność dostępna wyłącznie dla klientów moich
              programów rozwojowych.
            </p>

            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border-2 border-lifehacker-purple-border mb-12 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-semibold text-white mb-3">
                Instalując dowolną aplikację otrzymujesz dostęp{" "}
                <span className="text-lifehacker-purple">LIFETIME</span>
              </p>
              <p className="text-base sm:text-lg text-white/70 mb-4">
                P.S. To jedyny sposób, aby dołączyć do Lifehackerów.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Wartość: BEZCENNA
                </p>
                <p className="text-lg sm:text-xl font-semibold text-lifehacker-purple">
                  DOSTĘP LIFETIME. W cenie każdej aplikacji.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
              {communityBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group border border-lifehacker-purple-border-light hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-lifehacker-purple to-lifehacker-purple rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-lifehacker-purple group-hover:scale-105 transition-transform">
                    {benefit.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}

              {/* Highlighted CTA Card */}
              <div
                onClick={scrollToApps}
                className="col-span-full rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 border-lifehacker-purple-light bg-gradient-to-br from-lifehacker-purple to-lifehacker-purple"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={lifehackerzyLogo}
                    alt="Lifehackerzy logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  To wszystko i więcej
                </h3>

                <p className="text-white/90">
                  Dostęp otrzymasz natychmiast i na zawsze
                </p>
              </div>
            </div>

            {/* Jim Rohn Quote */}
            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-lifehacker-purple-border-light">
                <h3 className="text-2xl font-bold mb-4 text-lifehacker-purple">
                  Społeczność dostępna wyłącznie dla moich Klientów
                </h3>
                <p className="text-xl text-white/90 mb-4 italic">
                  "Jesteśmy wypadkową pięciu osób, z którymi spędzamy najwięcej
                  czasu"
                </p>
                <p className="text-lg text-white/70">— Jim Rohn</p>
                <p className="text-lg text-white/80 mt-6">
                  Otocz się ludźmi, którzy tak jak Ty chcą od życia czegoś
                  więcej
                </p>
              </div>
            </div>

            {/* Lifehackerzy Branding */}
            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl max-w-3xl mx-auto bg-white/5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white mb-3">
                  Hackerzy łamią ograniczenia systemów.
                </p>
                <p className="text-xl font-semibold text-lifehacker-purple">
                  Z nami złamiesz ograniczenia swojego życia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Premium App - LifeOS: System Upgrade - FULL WIDTH "FINAL BOSS" */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-neural-blue to-twilight-indigo relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-gold/10 to-twilight-indigo/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zenith-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-zenith-gold to-twilight-indigo text-white border-0 px-6 py-2 text-lg font-medium">
                💎 LIFE OS UPGRADE
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Life OS: System Upgrade
              </h2>

              <p className="text-xl md:text-2xl font-medium mb-8 text-white/90 max-w-4xl mx-auto">
                Fundamentalna rekonstrukcja całego systemu operacyjnego. Nie
                aplikacja - cały nowy system.
              </p>
            </div>

            {/* FULL WIDTH PREMIUM CARD */}
            <div className="w-full">
              <div className="glass-card rounded-2xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-2xl hover:shadow-twilight-indigo/20 bg-gradient-to-br from-deep-space/50 to-neural-blue/50 relative border-2 border-zenith-gold/30">
                {/* Privacy Overlay */}
                {isOverlayVisible && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                    <div className="mb-8">
                      <Shield className="h-20 w-20 text-zenith-gold mx-auto mb-6" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Ten program jest dla zaawansowanych
                      </h3>
                      <p className="text-white/80 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
                        Rozpocznij swoją podróż od podstawowych aplikacji, a
                        później odblokuj dostęp do programu premium.
                      </p>
                    </div>

                    <div className="space-y-4 w-full max-w-md">
                      <CTAButton
                        onClick={handleUnlockAccess}
                        className="w-full bg-gradient-to-r from-zenith-gold to-twilight-indigo hover:from-zenith-gold/90 hover:to-twilight-indigo/90"
                        size="lg"
                      >
                        Sprawdź dostępność
                      </CTAButton>

                      <Link to="/discovery" className="block">
                        <CTAButton
                          variant="secondary"
                          className="w-full"
                          size="lg"
                        >
                          Zarezerwuj sesję Discovery
                        </CTAButton>
                      </Link>
                    </div>
                  </div>
                )}

                {/* MOBILE-OPTIMIZED PREMIUM CARD */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-deep-space to-neural-blue border border-zenith-gold/20 rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
                    {/* Left Column - Content */}
                    <div className="order-2 lg:order-1">
                      {/* Header - Mobile optimized */}
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-6 min-w-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-zenith-gold to-twilight-indigo rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
                            OS
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 break-words leading-tight">
                            System Upgrade
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base lg:text-lg break-words">
                            Indywidualny Program Mentoringowy
                          </p>
                        </div>
                      </div>

                      {/* Rating - Mobile optimized */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 text-lg sm:text-xl lg:text-2xl"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-white/70 text-sm sm:text-base lg:text-lg">
                          5.0 • Ekskluzywny
                        </span>
                      </div>

                      {/* Description - Mobile optimized */}
                      <p className="text-white/80 mb-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed break-words">
                        Jak przejście z Windows 98 na macOS. 8 tygodni
                        intensywnej pracy, maksymalnie 5 osób jednocześnie. To
                        nie coaching - to przeprogramowanie całego systemu
                        operacyjnego w Twojej głowie. I w emocjach.
                      </p>

                      {/* Features - Mobile optimized */}
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          "Indywidualna sesja diagnostyczna (3h)",
                          "8 x sesje mentoringowe 1:1 (90 min)",
                          "Dostęp LIFETIME do społeczności absolwentów",
                          "Materiały i narzędzia premium",
                          "24/7 wsparcie przez cały program",
                          "Gwarancja rezultatu lub zwrot pieniędzy",
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3 lg:gap-4 text-white/90 text-sm sm:text-base lg:text-lg min-w-0"
                          >
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-zenith-gold rounded-full flex-shrink-0 mt-1.5 sm:mt-1"></div>
                            <span className="flex-1 min-w-0 break-words leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Price & CTA - Mobile optimized */}
                    <div className="text-center lg:text-right order-1 lg:order-2">
                      {/* Price - Mobile friendly */}
                      <div className="mb-6 lg:mb-8">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zenith-gold mb-2 sm:mb-3 break-words leading-tight">
                          16 000 PLN
                        </div>
                        <div className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                          8 tygodni intensywnej transformacji
                        </div>
                        <div className="text-white/40 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 break-words">
                          Masz firmę? 13 008,13 PLN netto
                        </div>
                      </div>

                      {/* Exclusivity Badge - Mobile optimized */}
                      <div className="bg-gradient-to-r from-zenith-gold/20 to-twilight-indigo/20 border-2 border-zenith-gold/40 rounded-xl lg:rounded-2xl p-4 sm:p-6 mb-6 lg:mb-8">
                        <div className="text-zenith-gold text-xl sm:text-2xl mb-2">
                          👑
                        </div>
                        <p className="text-zenith-gold font-bold text-sm sm:text-base lg:text-lg break-words">
                          Prowadzę max 5 osób jednocześnie
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm mt-2 break-words">
                          Najbardziej ekskluzywny program w portfolio
                        </p>
                      </div>

                      {/* CTA Button - Mobile responsive */}
                      <CTAButton
                        className="w-full lg:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-zenith-gold/50 to-twilight-indigo/50 hover:from-zenith-gold/50 hover:to-twilight-indigo/50 cursor-not-allowed opacity-60"
                        size="lg"
                        showArrow={false}
                      >
                        Obecnie niedostępne
                      </CTAButton>

                      <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4 break-words">
                        Następny nabór: Q4 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 bg-gradient-to-br from-neural-blue/5 to-muted/10 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal">
              Gotowy na upgrade systemu?
            </h3>

            <p className="text-lg mb-8 text-subtle-slate">
              Nie potrzebujesz więcej informacji. Potrzebujesz upgrade'u
              systemu. Wybierz aplikację i zacznij transformację już dziś.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue"
                onClick={() => {
                  const appsSection = document.getElementById("apps-section");
                  if (appsSection) {
                    appsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Wróć na górę i dołącz do nas
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Red Pill GIF Section */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <img
              src={redPillGif}
              alt="Red pill choice matrix scene"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-xs text-muted-foreground mt-4 mb-12">
              Źródło: Matrix (1999), Warner Bros.
            </p>

            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-xl blur-sm opacity-60 transition-opacity duration-300 hover:opacity-80"></div>
              <Link to="/discovery" className="relative z-10">
                <CTAButton
                  size="xl"
                  className="text-xl px-12 py-6 font-bold bg-red-600 hover:bg-red-700 text-white border-0 relative transition-all duration-300"
                >
                  Zarezerwuj sesję Discovery
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
