import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import TrustElements from "../components/sections/TrustElements";
import Newsletter from "../components/sections/Newsletter";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";

const Index = () => {
  // How It Works steps
  const steps = [
    {
      title: "Zainstaluj aplikacje",
      description: "Konkretne umiejętności jak produktywność, odporność psychiczna czy męskość. Wybierz aplikację, której właśnie potrzebujesz - tak jak nową aplikację do telefonu. Szybki upgrade konkretnego obszaru.",
      link: "/program",
      linkText: "Zobacz dostępne aplikacje ≫"
    },
    {
      title: "Life OS Upgrade",
      description: "Fundamentalna rekonstrukcja całego systemu operacyjnego. Jak przejście z Windows 98 na macOS. 8 tygodni intensywnej pracy, maksymalnie 5 osób jednocześnie. To nie coaching - to przeprogramowanie.",
      link: "/program/lifeos-system-upgrade",
      linkText: "Sprawdź dostępność ≫"
    },
    {
      title: "Społeczność Lifehackerów",
      description: "Lifehackerzy to ekskluzywna przestrzeń dla absolwentów programów. Daily Coaching o 12:34, Sesje DeepWork, warsztaty i zamknięte szkolenia. <br/><br/> Nie grupa na Facebooku czy Skool - społeczność dla tych, którzy już się podjęli upgrade'u."
    }
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
        subtitle={<>Dbasz o swój telefon, instalujesz nowe aplikacje, robisz upgrade systemu. <br /><br />A kiedy ostatni raz <strong>świadomie</strong> zaktualizowałeś oprogramowanie <strong>w swojej głowie</strong>?</>}
        ctaText="Sprawdź gotowość na upgrade"
        ctaLink="/assessment"
        secondaryCtaText="Zarezerwuj sesję Discovery"
        secondaryCtaLink="/discovery"
        heroImage="/lovable-uploads/SIADLAK-coffee-transparent.png"
        imageDescription="Ludwik C. Siadlak - Lifehacker"
        fullHeight={true}
      />

      <div className="py-16 md:py-24 bg-gradient-to-br from-neural-violet/10 via-quantum-blue/5 to-neural-violet/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-24 h-24 bg-neural-violet rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-neural-violet rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-neural-violet/20">
              <div className="text-center space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-neural-violet/10 to-neural-violet/10 rounded-full border border-neural-violet/30 mb-4">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neural-violet to-quantum-blue bg-clip-text text-transparent">
                    (🧠+🤖)^💜
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal leading-tight">
                  Zaktualizuj swój system
                </h2>
                <p className="text-xl md:text-2xl text-deep-charcoal/80 leading-relaxed">
                  AI jest wszędzie, ale to kombinacja <strong className="text-neural-violet">(🧠+🤖)^💜</strong> zapala iskrę i dolewa oliwy do ognia.
                </p>
                <p className="text-lg md:text-xl text-deep-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                  Pomagam profesjonalistom przejść z <span className="line-through text-color-error">Windows 98</span> na <span className="font-bold text-neural-violet">współczesny macOS</span> - w głowie. Od przestarzałych wzorców myślenia do systemu, który faktycznie wykorzystuje twój potencjał.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks title="Dwie opcje aktualizacji" steps={steps} />

      <div className="py-20 bg-gradient-to-b from-luminous-white via-secondary/10 to-background relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-20 w-32 h-32 bg-neural-violet rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-neural-violet rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-2 bg-neural-violet/10 rounded-full border border-neural-violet/20">
                <span className="text-sm font-semibold text-neural-violet uppercase tracking-wide">
                  Dla wymagających profesjonalistów
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Czy Life OS jest dla Ciebie?
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-neural-violet via-quantum-blue to-neural-violet mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 border-2 border-neural-violet/20 hover:border-neural-violet/50 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-neural-violet to-quantum-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neural-violet">Lider lub Ekspert</h3>
                <p className="text-deep-charcoal/80 leading-relaxed text-base">
                  Osiągnąłeś sukces dzięki dotychczasowym metodom, ale czujesz, że stare podejście przestaje wystarczać w nowej, bardziej złożonej rzeczywistości.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 border-2 border-quantum-blue/20 hover:border-quantum-blue/50 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neural-violet">Przedsiębiorca</h3>
                <p className="text-deep-charcoal/80 leading-relaxed text-base">
                  Rozumiesz, że rozwój firmy jest nierozerwalnie związany z rozwojem Twojego własnego umysłu i sposobu myślenia.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 border-2 border-quantum-blue/20 hover:border-quantum-blue/50 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-quantum-blue">Profesjonalista</h3>
                <p className="text-deep-charcoal/80 leading-relaxed text-base">
                  Dbasz o dietę, kondycję fizyczną i najlepsze narzędzia, a teraz czujesz, że czas zająć się najważniejszym zasobem – tym, co masz w głowie.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-neural-violet/10 via-quantum-blue/10 to-neural-violet/10 rounded-2xl p-10 md:p-16 text-center border-2 border-neural-violet/30 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet via-quantum-blue to-neural-violet rounded-2xl blur opacity-20"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-quantum-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-deep-charcoal leading-relaxed mb-4">
                  Jeśli jesteś gotów, by zadbać o swój umysł z taką samą uwagą, z jaką dbasz o technologię, której używasz
                </p>
                <p className="text-xl text-neural-violet font-semibold">
                  – jesteś we właściwym miejscu.
                </p>
              </div>
            </div>
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
