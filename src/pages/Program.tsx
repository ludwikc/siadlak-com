import Layout from "@/components/layout/Layout";
import AppStoreStats from "@/components/sections/AppStoreStats";
import HeroSection from "@/components/sections/HeroSection";
import AppCard from "@/components/ui/app-card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
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
      <HeroSection
        title="LifeOS AppStore"
        subtitle={
          <>
            Aplikacje mentalnej transformacji. <br/>Zainstaluj nowe oprogramowanie.<br/>{" "}
            <span className="italic text-ascension-pink">W głowie.</span>
          </>
        }
      />

      {/* App Store Statistics */}
      <section className="py-12" style={{ backgroundColor: "#EEEAF4" }}>
        <div className="container mx-auto px-4">
          <AppStoreStats />
        </div>
      </section>

      {/* Section 1: Basic Apps (50%/50%) */}
      <section id="apps-section" className="py-16 sm:py-20 apps-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-6">
                <Badge
                  variant="outline"
                  className="text-neural-violet border-neural-violet px-6 py-2 text-sm font-semibold hover:border-neural-violet/70 transition-colors"
                >
                  Programy Fundamentalne
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-deep-charcoal leading-tight">
                Instaluj Aplikacje Mentalne
              </h2>
              <p className="text-xl sm:text-2xl text-neural-violet font-semibold mb-4">
                Twoje pierwsze kroki w transformacji mentalnej
              </p>
              <p className="text-lg sm:text-xl text-subtle-slate mb-4 max-w-3xl mx-auto leading-relaxed">
                Konkretne umiejętności: produktywność, odporność psychiczna czy
                męskość.
              </p>
              <p className="text-base sm:text-lg text-subtle-slate/80 max-w-2xl mx-auto">
                Wybierz aplikację, której właśnie potrzebujesz - tak jak nową
                aplikację do telefonu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-8 mt-12">
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
      <section className="py-16 bg-gradient-to-r from-neural-violet/5 to-ascension-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-ascension-pink to-neural-violet text-white border-0 text-sm px-4 py-2 animate-pulse">
                🔥 NOWY PROGRAM - DOŁĄCZ TERAZ!
              </Badge>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <AppCard {...apps[2]} />
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
                className="mb-4 text-neural-violet border-neural-violet"
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
                    <div className="w-16 h-16 bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-neural-violet" />
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
                      className="bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90"
                      size="lg"
                    >
                      Pokaż Efekt
                    </CTAButton>
                  </div>
                </div>
              )}

              {/* GIF Content */}
              <div className="bg-gradient-to-br from-deep-space/50 to-quantum-blue/50 p-8 rounded-2xl border border-neural-violet/20">
                <img
                  src={effectGif}
                  alt="Mental transformation effect demonstration"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-xs text-white/50 mt-4 text-center">
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
      <section className="py-20 bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ascension-pink/10 to-neural-violet/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neural-violet/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-ascension-pink to-neural-violet text-white border-0 px-6 py-2 text-lg font-medium">
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
              <div className="glass-card rounded-2xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-2xl hover:shadow-neural-violet/20 bg-gradient-to-br from-deep-space/50 to-quantum-blue/50 relative border-2 border-ascension-pink/30">
                {/* Privacy Overlay */}
                {isOverlayVisible && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                    <div className="mb-8">
                      <Shield className="h-20 w-20 text-ascension-pink mx-auto mb-6" />
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
                        className="w-full bg-gradient-to-r from-ascension-pink to-neural-violet hover:from-ascension-pink/90 hover:to-neural-violet/90"
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
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-deep-space to-quantum-blue border border-ascension-pink/20 rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
                    {/* Left Column - Content */}
                    <div className="order-2 lg:order-1">
                      {/* Header - Mobile optimized */}
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-6 min-w-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-ascension-pink to-neural-violet rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-ascension-pink rounded-full flex-shrink-0 mt-1.5 sm:mt-1"></div>
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
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ascension-pink mb-2 sm:mb-3 break-words leading-tight">
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
                      <div className="bg-gradient-to-r from-ascension-pink/20 to-neural-violet/20 border-2 border-ascension-pink/40 rounded-xl lg:rounded-2xl p-4 sm:p-6 mb-6 lg:mb-8">
                        <div className="text-ascension-pink text-xl sm:text-2xl mb-2">
                          👑
                        </div>
                        <p className="text-ascension-pink font-bold text-sm sm:text-base lg:text-lg break-words">
                          Prowadzę max 5 osób jednocześnie
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm mt-2 break-words">
                          Najbardziej ekskluzywny program w portfolio
                        </p>
                      </div>

                      {/* CTA Button - Mobile responsive */}
                      <CTAButton
                        className="w-full lg:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-ascension-pink/50 to-neural-violet/50 hover:from-ascension-pink/50 hover:to-neural-violet/50 cursor-not-allowed opacity-60"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                className="text-lg px-8 py-4"
                onClick={() => {
                  const appsSection = document.getElementById('apps-section');
                  if (appsSection) {
                    appsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
