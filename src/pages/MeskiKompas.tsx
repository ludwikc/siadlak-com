import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { CheckCircle, Zap, Users, Target, Brain, AlertCircle, Shield, BookOpen, MessageSquare, Video, Headphones } from '@/lib/icons';
import { Link } from 'react-router-dom';

export default function MeskiKompas() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              MĘSKI KOMPAS: STARTER PACK
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-silver-mist leading-tight">
              Program dla mężczyzn z umysłem analitycznym, którzy chcą odzyskać kierunek i wewnętrzną spójność
            </h2>
            <div className="text-center bg-gradient-to-r from-ascension-pink/10 to-neural-violet/10 p-6 rounded-2xl mb-8">
              <p className="text-xl font-bold text-white">
                Tu nie musisz udawać. Tu możesz być sobą.
              </p>
            </div>
            <Link to="/contact">
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                aria-label="Zapisz się na Męski Kompas"
                showArrow
              >
                Zapisz się na listę
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Dlaczego ten program działa inaczej?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <GlassCard padding="lg" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">5 tygodni intensywnej pracy</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                  Nie ma tu 10-tygodniowych maratonów. Konkret, rytm, struktura – bez duchowego bullshitu.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Tylko 10 osób w kameralnej kohorcie</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                  Zamknięta grupa świadomych mężczyzn w Twoim wieku. Poczucie braterstwa i wsparcia, nie anonimowej masy.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Dwie perspektywy: YIN-YANG prowadzenia</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                  <strong>Ludwik C. Siadlak</strong> – wizja, energia, kontekst emocjonalny<br />
                  <strong>Mateusz Lizak</strong> – konkret, narzędzia, warsztat
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Format dla analitycznych umysłów</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                  Żadnych kolorowych PDF-ów wygenerowanych z Chata GPT. Surowe materiały TXT (no dobra, tak naprawdę to Markdown), workbooki, które zmuszają do myślenia.
                </p>
              </GlassCard>
            </div>

            <div className="text-center bg-gradient-to-r from-deep-charcoal/10 to-neural-violet/10 p-8 rounded-2xl">
              <p className="text-xl text-deep-charcoal dark:text-silver-mist mb-4">
                Większość facetów nosi maski, bo muszą się dostosować.
              </p>
              <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/80">
                W Męskim Kompasie zrzucamy te maski i pracujemy surowo, bez ozdobników.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program 5 weeks */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Program 5 tygodni
            </h2>

            <div className="space-y-8">
              {/* Week 1 */}
              <GlassCard padding="lg" className="border-l-4 border-neural-violet">
                <div className="flex items-start gap-6">
                  <div className="bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full p-4">
                    <span className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      Tydzień 1: Orientacja i Priorytety
                    </h3>
                    <p className="text-lg mb-3 text-deep-charcoal/90 dark:text-silver-mist/90">
                      <strong>Cel:</strong> Zdefiniuj, gdzie jesteś i co jest naprawdę ważne
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80 mb-2">
                      <strong>Narzędzie:</strong> Mapa dnia vs wartości, 3xP (Projekt, Proces, Przestrzeń)
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80">
                      <strong>Pytanie tygodnia:</strong> Co w moim życiu jest hałasem, a co kompasem?
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Week 2 */}
              <GlassCard padding="lg" className="border-l-4 border-neural-violet">
                <div className="flex items-start gap-6">
                  <div className="bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full p-4">
                    <span className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      Tydzień 2: System i Rytuały
                    </h3>
                    <p className="text-lg mb-3 text-deep-charcoal/90 dark:text-silver-mist/90">
                      <strong>Cel:</strong> Zbuduj swój rytm tygodnia oparty na energii, nie kalendarzu
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80 mb-2">
                      <strong>Narzędzie:</strong> Pętla tygodniowa, Focus Sprint
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80">
                      <strong>Wyzwanie:</strong> 3 dni bez maila do 11:00
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Week 3 */}
              <GlassCard padding="lg" className="border-l-4 border-neural-violet">
                <div className="flex items-start gap-6">
                  <div className="bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full p-4">
                    <span className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      Tydzień 3: Granice i Decyzje
                    </h3>
                    <p className="text-lg mb-3 text-deep-charcoal/90 dark:text-silver-mist/90">
                      <strong>Cel:</strong> Odzyskaj wpływu nad własną przestrzenią
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80 mb-2">
                      <strong>Narzędzie:</strong> Kompas 3W, Ćwiczenie NIE
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80">
                      <strong>Live Q&A:</strong> Granice i Tożsamość z Mateuszem
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Week 4 */}
              <GlassCard padding="lg" className="border-l-4 border-neural-violet">
                <div className="flex items-start gap-6">
                  <div className="bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full p-4">
                    <span className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      Tydzień 4: Relacje i Autentyczność
                    </h3>
                    <p className="text-lg mb-3 text-deep-charcoal/90 dark:text-silver-mist/90">
                      <strong>Cel:</strong> Pogłęb relacje przez obecność, nie kontrolę
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80 mb-2">
                      <strong>Narzędzie:</strong> Krąg 5, rozmowa autentyczna
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80">
                      <strong>Fokus:</strong> Bycie widzialnym, nie tylko funkcjonalnym
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Week 5 */}
              <GlassCard padding="lg" className="border-l-4 border-neural-violet">
                <div className="flex items-start gap-6">
                  <div className="bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full p-4">
                    <span className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      Tydzień 5: Kompas Wewnętrzny
                    </h3>
                    <p className="text-lg mb-3 text-deep-charcoal/90 dark:text-silver-mist/90">
                      <strong>Cel:</strong> Zbuduj własny system prowadzenia na kolejne miesiące
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80 mb-2">
                      <strong>Efekt:</strong> Kompas 5-punktowy: wartości, rytuały, decyzje, granice, kierunek
                    </p>
                    <p className="text-deep-charcoal/80 dark:text-silver-mist/80">
                      <strong>Zamknięcie:</strong> Męska Deklaracja i dzielenie się kierunkiem
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Co otrzymujesz?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  text: "5 prowokujących APLIKOWALNYCH workbooków – surowe materiały, które zmuszają do działania"
                },
                {
                  icon: <Video className="w-6 h-6" />,
                  text: "5 filmów wprowadzających – kontekst i narzędzia od Ludwika i Mateusza"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "3 sesje live – start, Q&A o granicach, zamknięcie"
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  text: "30-minutowe konsultacje – możliwość indywidualnej sesji z Mateuszem (tydzień 2-4)"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: "Zamknięta społeczność Discord – bezpieczna przestrzeń dla tej kohorty"
                },
                {
                  icon: <Headphones className="w-6 h-6" />,
                  text: "Dostęp do Męskiego Forum – długoterminowe wsparcie społeczności"
                }
              ].map((item, index) => (
                <GlassCard key={index} className="flex items-start gap-4 p-6">
                  <div className="text-neural-violet dark:text-luminal-magenta mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-deep-charcoal/90 dark:text-silver-mist/90">{item.text}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's NOT For / Who It IS For */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* NOT FOR */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                  Dla kogo to NIE jest?
                </h2>
                <div className="space-y-4">
                  {[
                    "Jeśli szukasz kolejnego pięknego PDF-a do pobrania",
                    "Jeśli chcesz być pouczany, a nie pracować nad sobą",
                    "Jeśli wolisz 50-osobowe grupy i anonimowość",
                    "Jeśli nie jesteś gotowy zedrzeć z siebie maski"
                  ].map((item, index) => (
                    <GlassCard key={index} className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90 dark:text-silver-mist/90">{item}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* IS FOR */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                  Dla kogo to JEST?
                </h2>
                <div className="space-y-4">
                  {[
                    "Świadomy mężczyzna 30-45 lat, często z branży IT",
                    "Masz już podstawy samorozwoju, ale brakuje ci spójności",
                    "Przepracowany, szukasz kierunku i wewnętrznego spokoju",
                    "Potrzebujesz konkretów, nie duchowych abstraktów",
                    "Chcesz pracować z małą grupą podobnych sobie facetów"
                  ].map((item, index) => (
                    <GlassCard key={index} className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90 dark:text-silver-mist/90">{item}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment and Leaders */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Investment */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Inwestycja: 497 zł
              </h2>
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 mb-8">
                <p className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
                  Limit miejsc: 10 osób
                </p>
                <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/80">
                  Nie robimy otwartej rekrutacji. Zapraszamy indywidualnie mężczyzn, którzy są gotowi na tę pracę.
                </p>
              </div>
              <p className="text-xl text-deep-charcoal dark:text-silver-mist mb-4">
                Po pięciu tygodniach zbudujesz osobisty kompas: rytuały, wartości, decyzje, granice i kierunek.
              </p>
              <p className="text-lg font-bold text-neural-violet dark:text-luminal-magenta">
                Start: Wrzesień 2025
              </p>
            </div>

            {/* Leaders */}
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Kim jesteśmy?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                  Ludwik C. Siadlak
                </h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                  Twórca społeczności Lifehackerzy, ekspert od produktywności i uważnego życia. 
                  Prowadzi wizyjnie i daje kontekst emocjonalny.
                </p>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/lovable-uploads/4c324741-f8fb-4fbf-8a33-9e099e8422e3.png" 
                    alt="Mateusz Lizak - Mentor świadomych mężczyzn"
                    className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-white/20"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                    Mateusz Lizak
                  </h3>
                  <p className="text-deep-charcoal/90 dark:text-silver-mist/90">
                    Praktyk, który przeszedł przez wszystkie pułapki analitycznego umysłu. Od operatora maszyn CNC po mentora świadomych mężczyzn. 
                    Dostarcza konkretne narzędzia i trzyma za rękę w trudnych momentach.
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="text-center bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 p-8 rounded-2xl mb-12">
              <p className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                Razem tworzymy YIN-YANG: wizja + konkret, emocje + analiza, inspiracja + implementacja.
              </p>
            </div>

            <div className="text-center">
              <blockquote className="text-lg italic text-deep-charcoal/80 dark:text-silver-mist/80 mb-8">
                "Fasada jest ładna, ale prawdziwa praca dzieje się w surowych dokumentach tekstowych, które wyżerają się w mózg, a nie wyglądają ładnie na prezentacji."
              </blockquote>
              
              <Link to="/contact">
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl"
                  aria-label="Dołącz do Męskiego Kompasu"
                  showArrow
                >
                  Dołącz do Męskiego Kompasu
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}