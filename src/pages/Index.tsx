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
      link: "/program/mental-elevator",
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

      <div className="py-12 md:py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-4 text-deep-charcoal dark:text-silver-mist">
              Zaktualizuj swój system. 
            </h2>
            <p className="text-xl text-deep-charcoal/80 dark:text-silver-mist/80">
              AI jest wszędzie, ale to kombinacja (🧠+🤖)^💜 zapala iskrę i dolewa oliwy do ognia. Pomagam profesjonalistom przejść z Windows 98 na współczesny macOS - w głowie. Od przestarzałych wzorców myślenia do systemu, który faktycznie wykorzystuje twój potencjał.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks title="Dwie opcje aktualizacji" steps={steps} />

      <div className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Czy Life OS jest dla Ciebie?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neural-violet to-luminal-magenta mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Lider lub Ekspert</h3>
                <p className="text-deep-charcoal/80 dark:text-silver-mist/80 leading-relaxed">
                  Osiągnąłeś sukces dzięki dotychczasowym metodom, ale czujesz, że stare podejście przestaje wystarczać w nowej, bardziej złożonej rzeczywistości.
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Przedsiębiorca</h3>
                <p className="text-deep-charcoal/80 dark:text-silver-mist/80 leading-relaxed">
                  Rozumiesz, że rozwój firmy jest nierozerwalnie związany z rozwojem Twojego własnego umysłu i sposobu myślenia.
                </p>
              </div>

              <div className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Profesjonalista</h3>
                <p className="text-deep-charcoal/80 dark:text-silver-mist/80 leading-relaxed">
                  Dbasz o dietę, kondycję fizyczną i najlepsze narzędzia, a teraz czujesz, że czas zająć się najważniejszym zasobem – tym, co masz w głowie.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-neural-violet/5 to-luminal-magenta/5">
              <p className="text-xl md:text-2xl font-medium text-neural-violet dark:text-luminal-magenta leading-relaxed">
                Jeśli jesteś gotów, by zadbać o swój umysł z taką samą uwagą, z jaką dbasz o technologię, której używasz – jesteś we właściwym miejscu.
              </p>
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
