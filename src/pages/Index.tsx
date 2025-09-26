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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
              Czy Life OS jest dla Ciebie?
            </h2>
            <div className="space-y-6 text-lg text-deep-charcoal/80 dark:text-silver-mist/80 text-left">
              <p>
                <strong>Jesteś liderem lub ekspertem</strong>, który osiągnął sukces dzięki dotychczasowym metodom, ale czujesz, że stare podejście przestaje wystarczać w nowej, bardziej złożonej rzeczywistości.
              </p>
              <p>
                <strong>Jesteś przedsiębiorcą</strong>, który rozumie, że rozwój firmy jest nierozerwalnie związany z rozwojem jego własnego umysłu i sposobu myślenia.
              </p>
              <p>
                <strong>Jesteś profesjonalistą</strong>, który dba o dietę, kondycję fizyczną i najlepsze narzędzia, a teraz czuje, że czas zająć się najważniejszym zasobem – tym, co ma w głowie.
              </p>
              <p className="text-center pt-6 text-xl font-medium text-neural-violet dark:text-luminal-magenta">
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
