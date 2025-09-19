
import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Mail, CheckCircle } from '@/lib/icons';
import SEO from '@/components/SEO';
import { getSEOConfig } from '@/lib/seo-config';

const About = () => {
  const approachPoints = [
    "Technologia powinna służyć Tobie - nie odwrotnie!",
    "Twoje ludzkie zdolności są niezastąpione i muszą być chronione",
    "Odpowiednie systemy pozwalają kierować technologią, pozostając człowiekiem",
    "Równowaga nie polega na używaniu mniejszej ilości technologii, ale na sprawowaniu nad nią kontroli",
  ];

  const credentials = [
    "Ponad 19 lat jako certyfikowany trener Microsoft",
    "Szkolenia zespołów w firmach z listy Fortune 500 i organizacjach wojskowych",
    "Twórca społeczności Hackerzy z ponad 150 aktywnymi członkami",
    "Twórca Metody Cyfrowego Dowodzenia wykorzystywanej przez profesjonalistów na całym świecie",
  ];

  return (
    <Layout>
      <SEO {...getSEOConfig("/about")} />
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/acfe5513-536a-4e0b-a176-0adb69c86dbf.png"
            alt="Ludwik C. Siadlak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-deep-space/70 to-deep-space/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              O mnie
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-silver-mist/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Pomagam profesjonalistom kierować technologią, zamiast jej służyć
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <CTAButton
                variant="secondary"
                className="animate-fade-in bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                showArrow={false}
                aria-label="Umów rozmowę - przejdź do formularza kontaktowego"
              >
                Umów rozmowę
                <Calendar className="h-4 w-4 ml-2" aria-hidden="true" />
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image - Now first on all screen sizes */}
            <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-800 rounded-2xl p-2">
              <img
                src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto min-h-[300px] rounded-xl shadow-xl"
                style={{ display: "block" }}
              />
              <img
                src="/lovable-uploads/SIADLAK-ig.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto min-h-[300px] rounded-xl shadow-xl"
                style={{ display: "block" }}
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-4xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                  Przewodnik na styku technologii i człowieczeństwa
                </h2>
                <p className="text-lg mb-4">
                  Przez ponad 19 lat działam na styku najnowocześniejszej
                  technologii i ludzkiej wydajności. Łącząc ekspertyzę z obu
                  światów, prowadzę profesjonalistów do odzyskania kontroli nad
                  ich cyfrowym życiem bez poświęcania tego, co czyni ich
                  wyjątkowo ludzkimi. Moja droga rozpoczęła się jako
                  certyfikowany trener Microsoft, gdzie na własne oczy
                  zobaczyłem, jak technologia może albo wzmacniać, albo
                  przytłaczać. Podczas gdy inni koncentrowali się wyłącznie na
                  umiejętnościach technicznych, ja dostrzegłem, że brakującym
                  elementem jest nauczenie ludzi, jak zachować ludzką przewagę
                  przy jednoczesnym wykorzystaniu cyfrowych narzędzi.
                </p>
                <h2 className="text-4xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                  Między zaawansowaną technologią a głębokim człowieczeństwem.
                </h2>

                <p className="text-lg mb-4">
                  Pamiętam moment, gdy siedząc w korporacyjnej sali
                  szkoleniowej, obserwowałem, jak błyskotliwy developer próbuje
                  implementować kolejne narzędzie automatyzacji, podczas gdy
                  jego zespół czuł się coraz bardziej zagubiony i przytłoczony.
                  Wtedy zrozumiałem swoje powołanie – być tłumaczem między
                  światami, pomagać profesjonalistom wykorzystywać technologię
                  bez bycia przez nią zdominowanym.
                </p>
                <p className="text-lg mb-4">
                  Moje podejście różni się od typowych szkoleń technicznych czy
                  kursów produktywności. Nie uczę tylko technik i narzędzi, ale
                  pokazuję, jak zintegrować je ze swoim unikalnym stylem pracy i
                  wartościami. Pomagam odnaleźć równowagę, gdzie technologia
                  staje się katalizatorem Twojego potencjału, zamiast go
                  zastępować.
                </p>
                <h2 className="text-4xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                  Zrozumienie Twojego świata
                </h2>
                <p className="text-lg mb-4">
                  Rozumiem codzienne wyzwania, z którymi się mierzysz. Sam
                  doświadczyłem przytłoczenia nieskończoną listą zadań i
                  powiadomień. Znalazłem się w sytuacji, gdy technologia,
                  zamiast pomagać, zaczęła kontrolować moje decyzje i czas. Na
                  własnej drodze odkryłem, że kluczem nie jest odrzucenie
                  technologii, ale nauczenie się świadomego jej wykorzystania w
                  służbie naszym głęboko ludzkim celom. Gdy nie prowadzę
                  warsztatów czy nie mentoruję klientów, znajdziesz mnie na
                  torze wyścigowym z moim motocyklem CBR, doskonalącego
                  umiejętności baritonu, lub spędzającego czas z rodziną. Te
                  różnorodne doświadczenia pozwalają mi lepiej rozumieć pełnię
                  ludzkiego doświadczenia, które wykracza daleko poza cyfrowy
                  świat.
                </p>
                <h2 className="text-4xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                  Nasze wspólne wartości
                </h2>
                <p className="text-lg mb-4">
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta mt-1 mr-3" />
                      <span className="text-deep-charcoal dark:text-silver-mist text-lg">
                        Technologia służy Tobie, nie odwrotnie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta mt-1 mr-3" />
                      <span className="text-deep-charcoal dark:text-silver-mist text-lg">
                        Twoje człowieczeństwo jest Twoją największą przewagą
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta mt-1 mr-3" />
                      <span className="text-deep-charcoal dark:text-silver-mist text-lg">
                        Świadome systemy pozwalają kierować technologią,
                        pozostając w pełni sobą
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta mt-1 mr-3" />
                      <span className="text-deep-charcoal dark:text-silver-mist text-lg">
                        Równowaga nie polega na używaniu mniejszej ilości
                        technologii, ale na mądrzejszym jej wykorzystaniu
                      </span>
                    </li>
                  </ul>
                </p>
                <p className="text-lg">
                  Jeśli te wartości rezonują z Tobą, jesteśmy na tej samej
                  drodze. Moją misją jest pomóc Ci odnaleźć swoją własną
                  ścieżkę, gdzie technologia staje się potężnym narzędziem
                  Twojego rozwoju, a nie źródłem przytłoczenia.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="secondary">
                    Umów rozmowę
                    <Calendar className="h-4 w-4" />
                  </Button>
                </Link>
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
                  <p className="text-deep-charcoal dark:text-silver-mist text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-deep-charcoal dark:text-silver-mist">
                To, co wyróżnia moją pracę, to skupienie na utrzymaniu Cię w
                roli dowodzącego. Nie uczę jedynie umiejętności technicznych czy
                uważności osobno — pokazuję, jak integrować oba aspekty dla
                prawdziwego cyfrowego mistrzostwa.
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
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    {credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gotowy odzyskać kontrolę nad swoim cyfrowym życiem?
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Zacznij od moich cotygodniowych spostrzeżeń lub umów Rozmowę
              Discovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/newsletter" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="bg-white text-neural-violet hover:bg-white/90 border-neural-violet"
                  aria-label="Poczytaj moje aktualne przemyślenia - przejdź do newslettera"
                >
                  Poczytaj moje aktualne przemyślenia
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>

              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-[rgba(255,255,255,0.1)]"
                  aria-label="Umów Rozmowę Discovery - przejdź do formularza kontaktowego"
                >
                  Umów Rozmowę Discovery
                  <Calendar className="h-4 w-4" aria-hidden="true" />
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
