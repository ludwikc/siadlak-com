
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import PersonaSection from '@/components/sections/PersonaSection';
import TrustElements from '@/components/sections/TrustElements';
import Newsletter from '@/components/sections/Newsletter';
import CTASection from '@/components/sections/CTASection';
import { Brain, Rocket, Cog } from 'lucide-react';

const PolishIndex = () => {
  // How It Works steps
  const steps = [
    {
      title: "Odzyskaj wpływ",
      description: "Najpierw identyfikujemy, gdzie technologia przejęła nad Tobą kontrolę. Dzięki sprawdzonym metodom, odzyskasz panowanie nad swoim cyfrowym środowiskiem i przestaniesz czuć się przytłoczony."
    },
    {
      title: "Zbuduj systemy, które Ci służą",
      description: "Następnie tworzymy systemy, które sprawiają, że technologia pracuje dla Ciebie, a nie przeciwko Tobie. Te systemy respektują Twoje naturalne mocne strony, jednocześnie wzmacniając Twoje możliwości."
    },
    {
      title: "Utrzymaj kontrolę długoterminowo",
      description: "Na koniec opanujesz metody wdrażania, które trwają, pozwalając Ci zachować kontrolę nad technologią bez poświęcania tego, co czyni Cię człowiekiem."
    }
  ];
  
  // Personas for "Who It's For" section
  const personas = [
    {
      title: "Eksperci techniczni wchodzący w role przywódcze",
      description: "Opanowałeś techniczną stronę, ale teraz stajesz przed wyzwaniem prowadzenia innych. Potrzebujesz strategii, które honorują zarówno Twój techniczny umysł, jak i rosnącą rolę lidera.",
      icon: <Brain size={24} />
    },
    {
      title: "Profesjonaliści czujący się kontrolowani przez technologię",
      description: "Jesteś wykwalifikowany w swojej dziedzinie, ale czujesz się coraz bardziej zdominowany przez cyfrowe narzędzia, które miały Ci pomóc. Szukasz sposobów, by te narzędzia służyły Tobie, a nie odwrotnie.",
      icon: <Cog size={24} />
    },
    {
      title: "Przedsiębiorcy balansujący między rozwojem a dobrostanem",
      description: "Budujesz coś wartościowego, ale zmagasz się z ciągłymi cyfrowymi wymaganiami. Potrzebujesz podejścia, które wspiera Twój biznes, nie niszcząc przy tym Twojego zdrowia i relacji.",
      icon: <Rocket size={24} />
    }
  ];
  
  // Trust elements testimonials
  const testimonials = [
    {
      quote: "Praca z Ludwikiem zmieniła wszystko w sposobie, w jaki korzystam z technologii. Przeszedłem od ciągłego poczucia bycia w tyle do skutecznego wykorzystywania narzędzi AI. Rezultaty przemieniły zarówno moją pracę, jak i życie osobiste.",
      name: "Dyrektor marketingu",
      title: "Sektor technologiczny"
    },
    {
      quote: "To, co wyróżnia to podejście, to sposób, w jaki stawia człowieka na pierwszym miejscu, przy jednoczesnym inteligentnym wykorzystaniu technologii. Zwiększyłem swoją wydajność o 40%, spędzając przy tym mniej czasu przed ekranami. Nie chodzi o więcej technologii — chodzi o mądrzejszą kontrolę.",
      name: "Starszy kierownik projektów",
      title: "Branża finansowa"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Przejmij kontrolę w cyfrowym świecie"
        subtitle="Przestań być kontrolowanym przez technologię. Zacznij nią świadomie sterować."
        ctaText="Sprawdź swoją cyfrową kontrolę"
        ctaLink="/pl/assessment"
        secondaryCtaText="Otrzymuj cotygodniowe inspiracje"
        secondaryCtaLink="/pl/newsletter"
        imageDescription="Profesjonalista wyglądający pewnie i kontrolujący pracę z technologią, pokazujący mistrzostwo zamiast przytłoczenia"
      />
      
      <div className="py-12 md:py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-deep-charcoal dark:text-silver-mist">
              Technologia powinna pracować dla Ciebie, nie przeciwko Tobie. Pomagam profesjonalistom przejść od poczucia przytłoczenia do pełnej kontroli nad cyfrowymi narzędziami i własnym życiem.
            </p>
          </div>
        </div>
      </div>
      
      <HowItWorks 
        title="Trzy kroki do cyfrowej kontroli"
        steps={steps}
      />
      
      <PersonaSection 
        title="Czy to dla Ciebie?"
        personas={personas}
        callout="Jeśli odnajdujesz się w tych opisach, jesteś we właściwym miejscu. Metody, którymi się dzielę, są stworzone specjalnie dla tych, którzy odmawiają bycia kontrolowanymi przez technologię, która miała im pomóc odnieść sukces."
        ctaText="Znajdź swoją ścieżkę"
        ctaLink="/pl/contact"
      />
      
      <TrustElements 
        title="Dlaczego to podejście działa"
        communityStats="Dołącz do ponad 1500 profesjonalistów, którzy odzyskali kontrolę nad swoim cyfrowym życiem"
        testimonials={testimonials}
        credentialsSummary="Łączę ponad 15-letnie doświadczenie w certyfikacji Microsoft z głębokim zrozumieniem ludzkiego potencjału, tworząc wyjątkowo zbalansowane podejście"
      />
      
      <Newsletter />
      
      <CTASection 
        title="Gotowy kierować swoim cyfrowym życiem?"
        description="Zrób pierwszy krok w kierunku transformacji Twojej relacji z technologią."
        buttonText="Zarezerwuj rozmowę Discovery"
        buttonLink="/pl/contact"
      />
    </Layout>
  );
};

export default PolishIndex;
