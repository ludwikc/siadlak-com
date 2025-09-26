import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import PersonaSection from "../components/sections/PersonaSection";
import TrustElements from "../components/sections/TrustElements";
import Newsletter from "../components/sections/Newsletter";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";
import { Brain, Settings, Briefcase } from "lucide-react";

const Index = () => {
  // How It Works steps
  const steps = [
    {
      title: "Instaluj aplikacje",
      description:
        "Konkretne umiejętności jak produktywność, odporność psychiczna czy męskość. Wybierz aplikację, której właśnie potrzebujesz - tak jak nową aplikację do telefonu. Szybki upgrade konkretnego obszaru.",
    },
    {
      title: "Life OS Upgrade",
      description:
        "Fundamentalna rekonstrukcja całego systemu operacyjnego. Jak przejście z Windows 98 na macOS. 8 tygodni intensywnej pracy, maksymalnie 5 osób jednocześnie. To nie coaching - to przeprogramowanie.",
    },
    {
      title: "Społeczność jako nagroda",
      description:
        "Lifehackerzy to ekskluzywna przestrzeń dla absolwentów programów. Daily Coaching o 12:34, Sesje DeepWork, warsztaty i zamknięte szkolenia. Nie grupa na Facebooku czy Skool - społeczność dla tych, którzy już się podjęli upgrade'u.",
    },
  ];

  // Personas
  const personas = [
    {
      title: "Profesjonaliści wysokiego poziomu z przestarzałym systemem",
      description:
        "Masz umiejętności i doświadczenie, ale wewnętrznie wiesz, że działasz na starym oprogramowaniu. Analizujesz zamiast działać, utknąłeś w sofistykowanych mechanizmach obronnych.",
      icon: <Brain size={24} />,
    },
    {
      title: "Eksperci gotowi na fundamentalną zmianę",
      description:
        "Czujesz, że nadszedł czas nie na kolejny kurs, ale na transformację tego, kim jesteś. Szukasz upgrade'u systemu, nie tylko nowych aplikacji.",
      icon: <Settings size={24} />,
    },
    {
      title: "Liderzy, którzy odmawiają powierzchownych rozwiązań",
      description:
        "Potrzebujesz głębokiej zmiany sposobu funkcjonowania. Chcesz przejść od reaktywności do suwerenności, od szukania akceptacji do tworzenia wartości.",
      icon: <Briefcase size={24} />,
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
        title="LUDWIK C. SIADLAK"
        subtitle="Aktualizacja Oprogramowania"
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
              Aktualizuj swój system. Dbasz o swój telefon, instalujesz nowe aplikacje, robisz upgrade systemu. Kiedy ostatnio zaktualizowałeś oprogramowanie <strong>w głowie</strong>?
            </h2>
            <p className="text-xl text-deep-charcoal/80 dark:text-silver-mist/80">
              AI jest wszędzie, ale to kombinacja głowa+serce zapala iskrę i dolewa oliwy do ognia. Pomagam profesjonalistom przejść z Windows 98 na współczesny macOS - w głowie. Od przestarzałych wzorców myślenia do systemu, który faktycznie wykorzystuje twój potencjał.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks title="Dwie opcje aktualizacji" steps={steps} />

      <PersonaSection
        title="Czy to dla Ciebie?"
        personas={personas}
        callout="Jeśli to rozpoznajesz, nie potrzebujesz więcej informacji. Potrzebujesz upgrade'u systemu. Pracuję metodą, która wymaga odwagi - zarówno ode mnie, jak i od ciebie."
        ctaText="Zobacz LifeOS AppStore"
        ctaLink="/program"
      />

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
