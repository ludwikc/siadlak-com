import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import TrustElements from "../components/sections/TrustElements";
import Newsletter from "../components/sections/Newsletter";
import CTASection from "../components/sections/CTASection";
import BeforeAfterSlider from "../components/sections/BeforeAfterSlider";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";
import {
  Package,
  Rocket,
  CheckCircle,
  Zap,
  Lightbulb,
  Brain,
} from "../lib/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // How It Works steps
  const steps = [
    {
      title: "Zainstaluj aplikacje",
      description:
        "Konkretne umiejętności jak produktywność, odporność psychiczna czy męskość. Wybierz aplikację, której właśnie potrzebujesz - tak jak nową aplikację do telefonu. Szybki upgrade konkretnego obszaru.",
      icon: <Package className="w-8 h-8 text-white" />,
      link: "/program",
      linkText: "Zobacz dostępne aplikacje ≫",
    },
    {
      title: "Life OS Upgrade",
      description:
        "Fundamentalna rekonstrukcja całego systemu operacyjnego. Jak przejście z Windows 98 na macOS. 8 tygodni intensywnej pracy, maksymalnie 5 osób jednocześnie. To nie coaching - to przeprogramowanie.",
      icon: <Rocket className="w-8 h-8 text-white" />,
      link: "/program/lifeos-system-upgrade",
      linkText: "Sprawdź dostępność ≫",
    },
    {
      title: "Społeczność Lifehackerów",
      description:
        "Lifehackerzy to ekskluzywna przestrzeń dla absolwentów programów. Daily Coaching o 12:34, Sesje DeepWork, warsztaty i zamknięte szkolenia. <br/><br/> Nie grupa na Facebooku czy Skool - społeczność dla tych, którzy już się podjęli upgrade'u.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Praca z Ludwikiem zmieniła wszystko w sposobie, w jaki korzystam z technologii. Przeszedłem od ciągłego poczucia bycia w tyle do skutecznego wykorzystywania narzędzi AI. Rezultaty przemieniły zarówno moją pracę, jak i życie osobiste.",
      name: "Dyrektor marketingu",
      title: "sektor technologiczny",
    },
    {
      quote:
        "To, co wyróżnia to podejście, to sposób, w jaki stawia człowieka na pierwszym miejscu, przy jednoczesnym inteligentnym wykorzystaniu technologii. Zwiększyłem swoją wydajność o 40%, spędzając przy tym mniej czasu przed ekranami. Nie chodzi o więcej technologii — chodzi o mądrzejszą kontrolę.",
      name: "Starszy kierownik projektów",
      title: "branża finansowa",
    },
  ];

  return (
    <Layout>
      <SEO {...getSEOConfig("/")} />
      <Hero
        title="Czas na Upgrade Systemu"
        subtitle={
          <>
            Dbasz o swój telefon, instalujesz nowe aplikacje, robisz upgrade
            systemu. <br />
            <br />A kiedy ostatni raz <strong>świadomie</strong> zaktualizowałeś
            oprogramowanie <strong>w swojej głowie</strong>?
          </>
        }
        ctaText="Sprawdź gotowość na upgrade"
        ctaLink="/assessment"
        secondaryCtaText="Zarezerwuj sesję Discovery"
        secondaryCtaLink="/discovery"
        heroImage="/lovable-uploads/SIADLAK-coffee-transparent.png"
        imageDescription="Ludwik C. Siadlak - Lifehacker"
        fullHeight={true}
      />

      <div className="relative py-16 md:py-24 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orb for subtle depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-neural-blue/20 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full blur opacity-40 animate-pulse"></div>
                    <Badge className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-xl md:text-2xl px-6 py-3 shadow-xl">
                      <Brain className="inline h-6 w-6 mr-2" />
                      Human First 🧠 Tech Second 🤖
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal leading-tight">
                    Upgrade Your Life Operating System
                  </h2>
                  <p className="text-xl md:text-2xl text-deep-charcoal/80 leading-relaxed">
                    Technology amplifies who you are.{" "}
                    <strong className="text-neural-blue">
                      The real upgrade happens in your mind.
                    </strong>
                  </p>
                  <p className="text-lg md:text-xl text-deep-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                    Transform from outdated mental patterns to a system that
                    actually unlocks your potential. Stop running on{" "}
                    <span className="line-through text-red-500">
                      Windows 98
                    </span>{" "}
                    thinking—upgrade to{" "}
                    <span className="font-bold text-neural-blue">
                      clarity, purpose, and impact
                    </span>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <BeforeAfterSlider />

      <HowItWorks title="Dwie opcje aktualizacji" steps={steps} />

      <div className="relative py-20 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orbs for subtle depth */}
        <div className="absolute top-40 right-20 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-twilight-indigo/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-2 bg-neural-blue/10 rounded-full border border-neural-blue/20">
                <span className="text-sm font-semibold text-neural-blue uppercase tracking-wide">
                  Dla wymagających profesjonalistów
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Czy Life OS jest dla Ciebie?
              </h2>
              <div className="w-24 h-1.5 bg-neural-blue mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="relative overflow-hidden bg-white text-center group hover:shadow-2xl transition-all duration-300 border-2 border-neural-blue/20 hover:border-neural-blue/50 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neural-blue">
                    Lider lub Ekspert
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed text-base">
                    Osiągnąłeś sukces dzięki dotychczasowym metodom, ale
                    czujesz, że stare podejście przestaje wystarczać w nowej,
                    bardziej złożonej rzeczywistości.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-white text-center group hover:shadow-2xl transition-all duration-300 border-2 border-twilight-indigo/20 hover:border-twilight-indigo/50 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 h-24 bg-twilight-indigo/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-twilight-indigo">
                    Przedsiębiorca
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed text-base">
                    Rozumiesz, że rozwój firmy jest nierozerwalnie związany z
                    rozwojem Twojego własnego umysłu i sposobu myślenia.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-white text-center group hover:shadow-2xl transition-all duration-300 border-2 border-growth-gold/20 hover:border-growth-gold/50 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-24 h-24 bg-growth-gold/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-growth-gold to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-growth-gold">
                    Profesjonalista
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed text-base">
                    Dbasz o dietę, kondycję fizyczną i najlepsze narzędzia, a
                    teraz czujesz, że czas zająć się najważniejszym zasobem –
                    tym, co masz w głowie.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="relative overflow-hidden bg-neural-blue/5 text-center border-2 border-neural-blue/20 shadow-xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-10 md:p-16 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-deep-charcoal leading-relaxed mb-4">
                  Jeśli jesteś gotów, by zadbać o swój umysł z taką samą uwagą,
                  z jaką dbasz o technologię, której używasz
                </p>
                <p className="text-xl text-neural-blue font-semibold">
                  – jesteś we właściwym miejscu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <TrustElements
        title="Dlaczego to podejście działa"
        communityStats="Dołącz do ponad 150 profesjonalistów, którzy odzyskali kontrolę nad swoim cyfrowym życiem"
        testimonials={testimonials}
        credentialsSummary="Łączę prawie 20-letnie doświadczenie w twardym stacku technologicznym z głębokim zrozumieniem ludzkiego potencjału, tworząc wyjątkowo zbalansowane podejście."
      />

      <Newsletter />

      <CTASection
        title="Gotów na upgrade systemu?"
        description="Jeśli to rozpoznajesz, nie potrzebujesz więcej informacji. Potrzebujesz upgrade'u systemu."
        buttonText="Zobacz LifeOS AppStore"
        buttonLink="/program"
      />
    </Layout>
  );
};

export default Index;
