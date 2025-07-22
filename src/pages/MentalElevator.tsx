

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar, Shield, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentalElevator() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-deep-space to-neural-violet">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#BDBDBD]">
              MENTAL ELEVATOR
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-[#BDBDBD]">
              Dla Wybranych Programistów Gotowych Przejąć Kontrolę Nad Swoją Karierą
            </p>
            <p className="text-lg md:text-xl mb-10 text-[#BDBDBD]/90 italic">
              Transformacja zaczyna się od decyzji. Nie od kolejnego kursu.
            </p>
            <Link to="/contact">
              <Button className="bg-ascension-pink hover:bg-luminal-magenta text-white py-6 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Zarezerwuj Sesję Discovery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-deep-charcoal dark:text-silver-mist text-center">
              Czy to Twoja rzeczywistość?
            </h2>
            
            <div className="space-y-4 mb-10">
              {[
                'Posiadasz zaawansowane umiejętności techniczne, ale Twoja kariera nie odzwierciedla Twojego potencjału',
                'Praca, która kiedyś była wyzwaniem, teraz stała się rutyną i źródłem frustracji',
                'Oddajesz swoją najlepszą energię korporacji, która traktuje Cię jak wymienną część',
                'Wewnętrznie czujesz, że możesz zbudować coś własnego, ale brakuje Ci konkretnego planu działania',
                'Wiesz, że jesteś w stanie osiągnąć więcej, ale brakuje Ci struktury i kierunku'
              ].map((item, index) => (
                <div key={index} className="flex items-start glass-card p-5 rounded-lg">
                  <CheckCircle className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-subtle-slate dark:text-silver-mist/90">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-medium text-deep-charcoal dark:text-silver-mist text-center p-6 glass-card rounded-lg">
              <strong>Jeśli rozpoznajesz te wzorce, wiesz już, że nadszedł czas na zmianę. Nie na kolejny kurs, ale na transformację.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Platform Section */}
      <section className="py-16 bg-gradient-to-br from-neural-violet/10 to-ascension-pink/10 dark:from-deep-space dark:to-quantum-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist text-center">
              Mental Elevator - Platforma Transformacji
            </h2>
            
            <p className="text-lg mb-10 text-subtle-slate dark:text-silver-mist/90 text-center">
              Program Mental Elevator nie jest dla wszystkich. Przyjmuję wyłącznie uczestników, którzy udowodnili 
              swoją gotowość do działania, nie tylko deklaracjami, ale konkretnymi krokami.
            </p>
            
            <div className="mb-12 text-center">
              <p className="text-xl font-medium mb-6 text-deep-charcoal dark:text-silver-mist">
                <strong>Ja dostarczam metodologię. Ty wdrażasz pracę. Razem tworzymy transformację, o której inni tylko mówią.</strong>
              </p>
              
              <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/90">
                Mental Elevator to dosłownie winda, która przenosi Cię:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-deep-space/80 to-quantum-blue/80">
                <h3 className="text-2xl font-bold mb-4 text-[#BDBDBD]">
                  Z piwnicy...
                </h3>
                <p className="text-[#BDBDBD]/90">
                  Gdzie jako świetny programista tkwisz w zamkniętej przestrzeni, bez perspektyw, z niszowymi zainteresowaniami i ograniczonymi relacjami społecznymi.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-ascension-pink/80 to-luminal-magenta/80">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Do penthouse'u...
                </h3>
                <p className="text-white/90">
                  Gdzie doświadczasz przestrzeni, wolności finansowej, satysfakcjonujących relacji i pełnej kontroli nad swoim życiem.
                </p>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist text-center">
                Dla wybranych uczestników programu, rezultaty są mierzalne i konkretne:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  'Pełna suwerenność zawodowa - przejście od roli wykonawcy do roli eksperta i partnera biznesowego',
                  'Jasna komunikacja swojej wartości, co prowadzi do radykalnej zmiany w relacjach zawodowych i finansowych',
                  'Stworzenie własnego produktu lub usługi, która wykorzystuje Twoje unikalne połączenie umiejętności',
                  'Przejęcie kontroli nad swoim harmonogramem, lokalizacją i sposobem pracy',
                  'Zbudowanie życia, w którym technologia służy Twoim celom, a nie odwrotnie'
                ].map((item, index) => (
                  <div key={index} className="flex items-start glass-card p-5 rounded-lg">
                    <Star className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <p className="text-subtle-slate dark:text-silver-mist/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Proces Selekcji
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/90 text-center">
              Program Mental Elevator wybiera kandydatów, którzy wykazują gotowość do transformacji poprzez swoje działania, nie tylko słowa. 
              Proces aplikacji identyfikuje tych, którzy w pełni zaangażują się w proces.
            </p>
            
            <div className="glass-card p-8 rounded-xl mb-10">
              <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-neural-violet dark:text-luminal-magenta" />
                Sesja Discovery
              </h3>
              
              <p className="text-subtle-slate dark:text-silver-mist/90 mb-6">
                Nie jest rozmową sprzedażową, ale obustronną oceną dopasowania. Podczas 30-minutowej rozmowy:
              </p>
              
              <ol className="space-y-4 mb-6">
                {[
                  'Przeprowadzimy strategiczną diagnozę Twojej obecnej sytuacji',
                  'Zidentyfikujemy rzeczywiste blokady (często inne niż te, które są oczywiste na pierwszy rzut oka)',
                  'Określimy, czy Mental Elevator jest właściwym programem dla Ciebie',
                  'Ustalimy jasny pierwszy krok, niezależnie od wyniku rozmowy'
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-neural-violet dark:bg-luminal-magenta text-white mr-3">
                      {index + 1}
                    </span>
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              
              <p className="text-subtle-slate dark:text-silver-mist/90 italic">
                Sesja sama w sobie jest zaprojektowana, aby stworzyć jasność i kierunek - niezależnie od tego, czy będziemy kontynuować współpracę, czy nie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gradient-to-br from-deep-space to-quantum-blue text-[#BDBDBD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Metodologia Black Panther
            </h2>
            
            <p className="text-lg mb-12 text-[#BDBDBD]/90 text-center">
              Program Mental Elevator opiera się na metodologii Black Panther, która łączy trzy kluczowe elementy:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 mr-3 text-luminal-magenta" />
                  <h3 className="text-xl font-bold">Suwerenna Tożsamość</h3>
                </div>
                <p className="text-[#BDBDBD]/90">
                  Transformacja technologisty w lidera, który działa z naturalnym autorytetem, nie z pozycji siły czy tytułu.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 mr-3 text-luminal-magenta" />
                  <h3 className="text-xl font-bold">Strategiczna Implementacja</h3>
                </div>
                <p className="text-[#BDBDBD]/90">
                  Proces zamiany wiedzy w konkretne rezultaty poprzez systematyczne działanie, a nie przypadkowe eksperymenty.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 mr-3 text-luminal-magenta" />
                  <h3 className="text-xl font-bold">Zintegrowana Spójność</h3>
                </div>
                <p className="text-[#BDBDBD]/90">
                  Połączenie umiejętności technicznych, biznesowych i przywódczych w jeden, spójny system działania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
              Inwestycja
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/90">
              Inwestycja w program Mental Elevator odzwierciedla zarówno jego wartość, jak i wymagane zaangażowanie. 
              Osoby poszukujące opcji ze zniżką nie są zgodne z celem programu.
            </p>
            
            <div className="glass-card p-10 rounded-xl mb-8 bg-gradient-to-br from-ascension-pink/5 to-neural-violet/5 dark:from-ascension-pink/10 dark:to-neural-violet/10">
              <p className="text-4xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">
                12 000 PLN
              </p>
              <p className="text-lg text-subtle-slate dark:text-silver-mist/90 mb-0">
                za pełen, 8-tygodniowy program transformacyjny
              </p>
            </div>
            
            <p className="text-lg mb-6 text-subtle-slate dark:text-silver-mist/90">
              To inwestycja, której zwrot zależy wyłącznie od Ciebie - 100%? 150%? A może 10,000%? 
              Ty decydujesz. Ja dostarczam windę, Ty decydujesz, jak wysoko chcesz się wznieść.
            </p>
            
            <p className="text-lg italic text-deep-charcoal dark:text-silver-mist">
              "Nie ma nic gorszego niż wybierać rozwiązanie życiowych wyzwań, kierując się ceną."
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-gradient-to-br from-neural-violet/10 to-ascension-pink/10 dark:from-deep-space dark:to-quantum-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Kim jestem?
            </h2>
            
            <div className="glass-card p-8 rounded-xl">
              <p className="text-lg mb-6 text-subtle-slate dark:text-silver-mist/90">
                Jestem Ludwik C. Siadlak. Przez prawie dwie dekady funkcjonuję na styku technologii i rozwoju ludzkiego potencjału.
              </p>
              
              <p className="text-lg mb-6 text-subtle-slate dark:text-silver-mist/90">
                Nie jestem certyfikowanym coachem, nie ukończyłem kursu mentoringu, nie mam potwierdzenia na papierze. 
                To, co mam, to udokumentowane rezultaty osób, które przeszły transformację pod moim przewodnictwem.
              </p>
              
              <p className="text-lg text-subtle-slate dark:text-silver-mist/90">
                Nie pracuję z każdym. Wybieram uczestników programu starannie, ponieważ wiem, że moje podejście działa 
                tylko dla określonego profilu osobowości.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
              Ograniczona dostępność
            </h2>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <p className="text-lg mb-6 text-subtle-slate dark:text-silver-mist/90">
                Ze względu na intensywność programu i moje zaangażowanie w proces, pracuję jednocześnie 
                z maksymalnie 5 uczestnikami.
              </p>
              
              <p className="text-lg text-subtle-slate dark:text-silver-mist/90">
                Nie przyjmuję klientów w sposób ciągły. Otwieram dostęp do programu tylko wtedy, gdy mam 
                przestrzeń na pełne zaangażowanie w transformację nowych uczestników.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/10 dark:to-ascension-pink/10">
              <p className="text-lg font-medium text-deep-charcoal dark:text-silver-mist mb-0">
                Dostępnych miejsc: <span className="text-ascension-pink dark:text-luminal-magenta font-bold">3 z 5</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gradient-to-br from-deep-space to-quantum-blue text-[#BDBDBD]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Następny krok
            </h2>
            
            <p className="text-lg mb-10 text-[#BDBDBD]/90">
              Jeśli rozpoznajesz się w opisie i czujesz gotowość do transformacji:
            </p>
            
            <div className="glass-card p-8 rounded-xl backdrop-blur-sm bg-white/5 mb-10">
              <ol className="space-y-5 text-left">
                {[
                  'Wybierz termin Sesji Discovery w kalendarzu poniżej',
                  'Przyjdź przygotowany - to jest już pierwszy test zaangażowania',
                  'Bądź gotowy na bezpośrednią ocenę Twojej sytuacji - nie będę owijał w bawełnę'
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-ascension-pink text-white mr-3">
                      {index + 1}
                    </span>
                    <span className="text-[#BDBDBD]/90 pt-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              
              <p className="text-[#BDBDBD]/90 mt-8 text-center italic">
                Jeśli nie jesteś gotowy na konfrontację z rzeczywistością i konkretne działania - ten program nie jest dla Ciebie.
              </p>
            </div>
            
            <Link to="/contact">
              <Button className="bg-ascension-pink hover:bg-luminal-magenta text-white py-6 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Zarezerwuj Sesję Discovery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <p className="text-xl mt-12 italic">
              "Rzeczywista transformacja zawsze zaczyna się od decyzji, nie od informacji."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
