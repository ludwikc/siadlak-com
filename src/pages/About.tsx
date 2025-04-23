
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              O mnie
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Pomagam profesjonalistom kierować technologią, zamiast jej służyć
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Przez ponad 19 lat działam na styku najnowocześniejszej technologii i ludzkiej wydajności. Łącząc ekspertyzę z obu światów, prowadzę profesjonalistów do odzyskania kontroli nad ich cyfrowym życiem bez poświęcania tego, co czyni ich wyjątkowo ludzkimi.
                </p>
                
                <p>
                  Moja droga rozpoczęła się jako certyfikowany trener Microsoft, gdzie na własne oczy zobaczyłem, jak technologia może albo wzmacniać, albo przytłaczać. Podczas gdy inni koncentrowali się wyłącznie na umiejętnościach technicznych, ja dostrzegłem, że brakującym elementem jest nauczenie ludzi, jak zachować ludzką przewagę przy jednoczesnym wykorzystaniu cyfrowych narzędzi.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-neural-violet hover:bg-ascension-pink text-silver-mist">
                    Umów rozmowę
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for profile image */}
                <div className="bg-gradient-to-br from-neural-violet to-ascension-pink h-full w-full flex items-center justify-center">
                  <span className="text-white text-xl font-medium">Ludwik Siadlak</span>
                </div>
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
              <Link to="/newsletter">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Otrzymuj cotygodniowe spostrzeżenia
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/contact">
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
