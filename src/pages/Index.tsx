
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import PersonaSection from '../components/sections/PersonaSection';
import TrustElements from '../components/sections/TrustElements';
import Newsletter from '../components/sections/Newsletter';
import CTASection from '../components/sections/CTASection';
import { Brain, Settings, Briefcase } from 'lucide-react';

const Index = () => {
  // How It Works steps
  const steps = [
    {
      title: "Odzyskaj wpływ",
      description: "Zidentyfikujesz, gdzie technologia przejęła nad Tobą kontrolę. Dzięki sprawdzonym metodom, odzyskasz panowanie nad swoim swoim zmieniającym się środowiskiem pracy i przestaniesz czuć się przytłoczony."
    },
    {
      title: "Zbuduj systemy, które Ci służą",
      description: "Stworzysz systemy, które sprawią, że technologia pracuje na i dla Ciebie, a nie przeciwko Tobie. To meta-system, który respektuje Twoje naturalne mocne strony, jednocześnie wzmacniając Twoje możliwości."
    },
    {
      title: "Utrzymaj kontrolę długoterminowo",
      description: "Na koniec opanujesz metody wdrażania, które zintegrujesz ze swoim życiem tak, aby zachować kontrolę nad technologią bez poświęcania tego, co czyni Cię człowiekiem."
    }
  ];
  
  // Personas
  const personas = [
    {
      title: "Eksperci techniczni wchodzący w role przywódcze",
      description: "Opanowałeś technikalia, ale teraz stajesz przed wyzwaniem prowadzenia innych. Potrzebujesz strategii, które honorują zarówno Twój techniczny umysł, jak i rosnącą rolę lidera.",
      icon: <Brain size={24} />
    },
    {
      title: "Profesjonaliści czujący się kontrolowani przez technologię",
      description: "Jesteś wykwalifikowany w swojej dziedzinie, ale czujesz się coraz bardziej zdominowany przez cyfrowe narzędzia, które miały Ci pomóc. Szukasz sposobów, by te narzędzia służyły Tobie, a nie odwrotnie.",
      icon: <Settings size={24} />
    },
    {
      title: "Przedsiębiorcy balansujący między rozwojem a dobrostanem",
      description: "Budujesz coś wartościowego, ale zmagasz się z ciągłymi cyfrowymi wymaganiami. Potrzebujesz podejścia, które wspiera Twój biznes, nie niszcząc przy tym Twojego zdrowia i relacji.",
      icon: <Briefcase size={24} />
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "Praca z Ludwikiem zmieniła wszystko w sposobie, w jaki korzystam z technologii. Przeszedłem od ciągłego poczucia bycia w tyle do skutecznego wykorzystywania narzędzi AI. Rezultaty przemieniły zarówno moją pracę, jak i życie osobiste.",
      name: "Dyrektor marketingu",
      title: "sektor technologiczny"
    },
    {
      quote: "To, co wyróżnia to podejście, to sposób, w jaki stawia człowieka na pierwszym miejscu, przy jednoczesnym inteligentnym wykorzystaniu technologii. Zwiększyłem swoją wydajność o 40%, spędzając przy tym mniej czasu przed ekranami. Nie chodzi o więcej technologii — chodzi o mądrzejszą kontrolę.",
      name: "Starszy kierownik projektów",
      title: "branża finansowa"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Przejmij kontrolę."
        subtitle="Przestań być kontrolowanym przez technologię. Zacznij nią świadomie sterować."
        ctaText="Sprawdź swój poziom kontroli"
        ctaLink="/assessment"
        secondaryCtaText="Otrzymuj cotygodniowe inspiracje"
        secondaryCtaLink="/newsletter"
      />
      
      <div className="py-12 md:py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-4 text-deep-charcoal dark:text-silver-mist">
              Technologia powinna pracować na Ciebie, nie dodawać Ci zadań.
            </h2>
            <p className="text-xl text-deep-charcoal/80 dark:text-silver-mist/80">
              Pomagam profesjonalistom przejść od poczucia przytłoczenia do pełnej kontroli nad narzędziami AI, ale przede wszystkim - własnym życiem.
            </p>
          </div>
        </div>
      </div>
      
      <HowItWorks 
        title="Trzy kroki do cyfrowego mistrzostwa"
        steps={steps}
      />
      
      <PersonaSection 
        title="Czy to dla Ciebie?"
        personas={personas}
        callout="Jeśli odnajdujesz się w tych opisach, jesteś we właściwym miejscu. Metody, którymi się dzielę, są stworzone specjalnie dla tych, którzy odmawiają bycia kontrolowanymi przez technologię, która miała im pomóc odnieść sukces."
        ctaText="Znajdź swoją ścieżkę"
        ctaLink="/contact"
      />
      
      <TrustElements 
        title="Dlaczego to podejście działa"
        communityStats="Dołącz do ponad 150 profesjonalistów, którzy odzyskali kontrolę nad swoim cyfrowym życiem"
        testimonials={testimonials}
        credentialsSummary="Łączę prawie 20-letnie doświadczenie w twardym stacku technologicznym z głębokim zrozumieniem ludzkiego potencjału, tworząc wyjątkowo zbalansowane podejście."
      />
      
      <Newsletter />
      
      <CTASection 
        title="Gotów przejąć kontrolę nad swoim cyfrowym życiem?"
        description="Wykonaj pierwszy krok w kierunku transformacji swojej relacji z technologią."
        buttonText="Umów się na konsultację"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
