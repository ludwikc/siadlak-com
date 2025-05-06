
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail, CheckCircle } from 'lucide-react';

const About = () => {
  const approachPoints = [
    "Technologia powinna Tobie służyć, nie odwrotnie",
    "Twoje ludzkie zdolności są niezastąpione i muszą być chronione",
    "Odpowiednie systemy pozwalają kierować technologią, pozostając człowiekiem",
    "Równowaga nie polega na używaniu mniejszej ilości technologii, ale na sprawowaniu nad nią kontroli"
  ];

  const credentials = [
    "Ponad 19 lat jako certyfikowany trener Microsoft",
    "Szkolenia zespołów w firmach z listy Fortune 500 i organizacjach wojskowych",
    "Twórca społeczności Hackerzy z ponad 150 aktywnymi członkami",
    "Twórca Metody Cyfrowego Dowodzenia wykorzystywanej przez profesjonalistów na całym świecie"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/lovable-uploads/acfe5513-536a-4e0b-a176-0adb69c86dbf.png"
            alt="Ludwik Siadlak" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-deep-space/70 to-deep-space/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              O mnie
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Pomagam profesjonalistom kierować technologią, zamiast jej służyć
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-neural-violet hover:bg-ascension-pink text-silver-mist animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Umów rozmowę
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg">
                  Przez ponad 19 lat działam na styku najnowocześniejszej technologii i ludzkiej wydajności. Łącząc ekspertyzę z obu światów, prowadzę profesjonalistów do odzyskania kontroli nad ich cyfrowym życiem bez poświęcania tego, co czyni ich wyjątkowo ludzkimi.
                </p>
                
                <p className="text-lg">
                  Moja droga rozpoczęła się jako certyfikowany trener Microsoft, gdzie na własne oczy zobaczyłem, jak technologia może albo wzmacniać, albo przytłaczać. Podczas gdy inni koncentrowali się wyłącznie na umiejętnościach technicznych, ja dostrzegłem, że brakującym elementem jest nauczenie ludzi, jak zachować ludzką przewagę przy jednoczesnym wykorzystaniu cyfrowych narzędzi.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-neural-violet hover:bg-ascension-pink text-silver-mist">
                    Umów rozmowę
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                <img src="/public/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png" alt="Ludwik Siadlak" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Moje podejście jest proste, ale potężne
            </h2>
            
            <div className="space-y-6">
              {approachPoints.map((point, index) => (
                <div key={index} className="flex glass-card p-5 rounded-xl">
                  <div className="mr-4">
                    <CheckCircle className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <p className="text-deep-charcoal dark:text-silver-mist text-lg">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl text-deep-charcoal dark:text-silver-mist">
                To, co wyróżnia moją pracę, to skupienie na utrzymaniu Cię w roli dowodzącego. Nie uczę jedynie umiejętności technicznych czy uważności osobno — pokazuję, jak integrować oba aspekty dla prawdziwego cyfrowego mistrzostwa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Credentials Section */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Doświadczenie, które przynosi rezultaty
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <p className="text-deep-charcoal dark:text-silver-mist">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gotowy odzyskać kontrolę nad swoim cyfrowym życiem?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Zacznij od moich cotygodniowych spostrzeżeń lub umów Rozmowę Discovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/newsletter" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Otrzymuj cotygodniowe spostrzeżenia
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Umów Rozmowę Discovery
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
