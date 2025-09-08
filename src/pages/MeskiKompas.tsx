import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { CheckCircle, AlertCircle } from '@/lib/icons';
import { Link } from 'react-router-dom';

export default function MeskiKompas() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(210, 45%, 12%)' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/a4fb6895-f87c-44d6-aab9-c77f08e52f54.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Zgubiony kurs?<br />
              <span style={{ color: 'hsl(45, 85%, 50%)' }}>Czas skalibrować</span><br />
              wewnętrzny kompas.
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'hsl(210, 20%, 95%)' }}>
              Męski Kompas to 5-tygodniowy, intensywny program dla mężczyzn po 30-tce z analitycznym umysłem. 
              Odzyskaj kierunek, spokój i wewnętrzną spójność – bez duchowego bullshitu, z konkretem i strukturą.
            </h2>
            <Link to="/contact">
              <CTAButton
                variant="primary"
                size="xl"
                className="shadow-2xl hover:shadow-3xl mb-6 font-bold !text-black border-0 px-8 py-4 !bg-yellow-500 hover:!bg-yellow-600"
                aria-label="Zarezerwuj jedno z 10 miejsc"
                showArrow
              >
                Zarezerwuj jedno z 10 miejsc
              </CTAButton>
            </Link>
            <div className="text-sm font-medium" style={{ color: 'hsl(210, 20%, 95%)' }}>
              Startujemy [Data] | Tylko 10 miejsc | Inwestycja: 497 zł
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(0, 0%, 99%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Czy to o Tobie?
            </h2>

            <div className="space-y-6">
              {[
                "Czujesz, że utknąłeś, a Twoje życie toczy się siłą rozpędu, bez jasno określonego kierunku?",
                "Masz analityczny umysł, ale gubisz się w natłoku myśli i wewnętrznych konfliktów?",
                "Brakuje Ci konkretnych narzędzi, by przełożyć swoje wartości na codzienne działania?",
                "Masz dość górnolotnych frazesów i szukasz męskiej, rzeczowej przestrzeni do rozwoju?",
                "Czujesz, że to, co robisz, rozmija się z tym, co jest dla Ciebie naprawdę ważne?"
              ].map((item, index) => (
                <GlassCard key={index} className="flex items-start gap-4 p-6" style={{ backgroundColor: 'hsl(210, 20%, 95%)', border: '1px solid hsl(210, 40%, 15%)' }}>
                  <div className="w-4 h-4 border-2 rounded-sm flex-shrink-0 mt-1" style={{ borderColor: 'hsl(45, 85%, 50%)' }} />
                  <p className="text-lg" style={{ color: 'hsl(210, 10%, 45%)' }}>{item}</p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-bold" style={{ color: 'hsl(45, 85%, 50%)' }}>
                Jeśli kiwasz głową, czytając te słowa – jesteś we właściwym miejscu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 20%, 95%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Odzyskaj stery. Zbuduj swój Męski Kompas.
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl leading-relaxed" style={{ color: 'hsl(210, 10%, 45%)' }}>
                Męski Kompas nie jest kolejnym kursem motywacyjnym. To warsztat, w którym przez 5 tygodni, 
                krok po kroku, zbudujesz swój osobisty system nawigacji.
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Co zyskasz?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Jasność",
                  description: "Zdefiniujesz, gdzie jesteś i co jest dla Ciebie naprawdę ważne."
                },
                {
                  title: "Spójność", 
                  description: "Zbudujesz swój rytm i strukturę działania opartą na Twojej energii, a nie tylko kalendarzu."
                },
                {
                  title: "Siłę",
                  description: "Nauczysz się stawiać granice i podejmować świadome decyzje, odzyskując kontrolę nad swoją przestrzenią."
                },
                {
                  title: "Głębię",
                  description: "Poprawisz jakość swoich relacji przez autentyczność i prawdziwą obecność."
                }
              ].map((item, index) => (
                <GlassCard key={index} className="p-6" style={{ backgroundColor: 'hsl(0, 0%, 99%)', border: '1px solid hsl(210, 40%, 15%)' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: 'hsl(45, 85%, 50%)' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'hsl(210, 10%, 45%)' }}>
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'hsl(210, 40%, 15%)' }}>
              <p className="text-xl text-white">
                Po 5 tygodniach wyjdziesz z własnym, skalibrowanym kompasem – zestawem wartości, rytuałów, 
                granic i zasad podejmowania decyzji, który będzie Cię prowadził długo po zakończeniu programu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders Section - YIN & YANG */}
      <section className="py-20" style={{ backgroundColor: 'hsl(0, 0%, 99%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Dwóch liderów. Dwie perspektywy. Jeden cel.
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl" style={{ color: 'hsl(210, 10%, 45%)' }}>
                Wierzymy w siłę synergii. Dlatego program prowadzą dwie silne, ale uzupełniające się osobowości.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 rounded-3xl overflow-hidden shadow-2xl">
              {/* Ludwik - Black (Yin) */}
              <div className="p-12 flex flex-col items-center text-center" style={{ backgroundColor: 'hsl(210, 20%, 8%)' }}>
                <img 
                  src="/lovable-uploads/2f3ca5c3-f7b8-49dc-84ce-efd1a4eaf31a.png" 
                  alt="Ludwik Siadlak - Mistrz porywania ludzi i pracy z emocjami"
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4"
                  style={{ borderColor: 'hsl(45, 85%, 50%)' }}
                />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Ludwik Siadlak
                </h3>
                <p className="leading-relaxed" style={{ color: 'hsl(210, 20%, 95%)' }}>
                  Mistrz porywania ludzi i pracy z emocjami. Ludwik zapala iskrę, inspiruje do sięgania głębiej 
                  i pomaga nazwać to, co nienazwane. To on dba o to, by podróż miała sens i serce.
                </p>
              </div>

              {/* Mateusz - White (Yang) */}
              <div className="bg-white p-12 flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/4c324741-f8fb-4fbf-8a33-9e099e8422e3.png" 
                  alt="Mateusz Lizak - Mistrz konkretu i pracy warsztatowej"
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4"
                  style={{ borderColor: 'hsl(210, 40%, 15%)' }}
                />
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(210, 20%, 8%)' }}>
                  Mateusz Lizak
                </h3>
                <p className="leading-relaxed" style={{ color: 'hsl(210, 10%, 45%)' }}>
                  Mistrz konkretu i pracy warsztatowej. Mateusz twardo stąpa po ziemi, dostarcza sprawdzonych narzędzi 
                  i dba o to, by każda idea została przełożona na praktyczne działanie.
                </p>
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'hsl(45, 85%, 50%)' }}>
              <p className="text-xl font-bold" style={{ color: 'hsl(210, 20%, 8%)' }}>
                Razem tworzymy przestrzeń, gdzie wielkie wizje spotykają się z realnym działaniem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 20%, 95%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Twój 5-tygodniowy rejs po wewnętrzne mistrzostwo
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl" style={{ color: 'hsl(210, 10%, 45%)' }}>
                Program jest podzielony na 5 intensywnych, tematycznych tygodni. W każdym tygodniu otrzymasz 
                konkretne narzędzia (w formie PDF i wideo/audio) oraz weźmiesz udział w sesjach na żywo.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  week: 1,
                  title: "Orientacja i Priorytety",
                  goal: "Zdefiniowanie, gdzie jesteś i co jest dla Ciebie naprawdę ważne.",
                  tools: "Mapa Dnia vs Mapa Wartości, Priorytetyzator 3xP."
                },
                {
                  week: 2,
                  title: "System i Rytuały",
                  goal: "Zbudowanie osobistego rytmu opartego na energii, nie kalendarzu.",
                  tools: "Tygodniowa Pętla (plan > działanie > refleksja), Rytuał startu i zamknięcia dnia."
                },
                {
                  week: 3,
                  title: "Granice i Decyzje",
                  goal: "Odzyskanie wpływu i przestrzeni przez świadome wybory.",
                  tools: "Model decyzyjny Kompas 3W, Ćwiczenie mówienia \"NIE\"."
                },
                {
                  week: 4,
                  title: "Relacje i Autentyczność",
                  goal: "Zwiększenie jakości relacji przez obecność, a nie kontrolę.",
                  tools: "Krąg 5 (przegląd relacji), Skrypt rozmowy autentycznej."
                },
                {
                  week: 5,
                  title: "Kompas Wewnętrzny",
                  goal: "Integracja i stworzenie osobistego systemu prowadzenia na kolejne miesiące.",
                  tools: "Kompas 5-punktowy, Męska Deklaracja."
                }
              ].map((week, index) => (
                <GlassCard key={index} className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                  <div className="flex items-start gap-6">
                    <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                      <span className="text-2xl font-bold">{week.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                        Tydzień {week.week}: {week.title}
                      </h3>
                      <p className="text-lg mb-3" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Cel:</strong> {week.goal}
                      </p>
                      <p style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</strong> {week.tools}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20" style={{ backgroundColor: 'hsl(0, 0%, 99%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Dla kogo jest Męski Kompas?
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-xl" style={{ color: 'hsl(210, 10%, 45%)' }}>
                Ten program jest stworzony z myślą o konkretnym typie mężczyzny. Zapraszamy Cię, jeśli:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* FOR */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(45, 85%, 50%)' }}>
                  To JEST dla Ciebie, jeśli:
                </h3>
                <div className="space-y-4">
                  {[
                    "Masz 30+ lat i analityczny, dociekliwy umysł.",
                    "Masz już pewien poziom samoświadomości i nie szukasz prostych odpowiedzi, ale skutecznych narzędzi.",
                    "Jesteś gotów na konkretną pracę w kameralnej, męskiej grupie (tylko 10 osób).",
                    "Cenisz sobie strukturę, rytm i działanie ponad niekończące się dyskusje."
                  ].map((item, index) => (
                    <GlassCard key={index} className="flex items-start gap-4 p-4" style={{ backgroundColor: 'hsl(120, 40%, 95%)', border: '1px solid hsl(120, 40%, 70%)' }}>
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(120, 60%, 40%)' }} />
                      <p style={{ color: 'hsl(210, 10%, 45%)' }}>{item}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* NOT FOR */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(0, 60%, 50%)' }}>
                  To NIE jest dla Ciebie, jeśli:
                </h3>
                <div className="space-y-4">
                  <GlassCard className="flex items-start gap-4 p-4" style={{ backgroundColor: 'hsl(0, 40%, 95%)', border: '1px solid hsl(0, 40%, 70%)' }}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(0, 60%, 50%)' }} />
                    <p style={{ color: 'hsl(210, 10%, 45%)' }}>
                      Szukasz magicznej pigułki, terapii grupowej lub kolejnego kręgu, w którym tylko się rozmawia.
                    </p>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 20%, 95%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'hsl(210, 20%, 8%)' }}>
              Jesteś gotów, by obrać właściwy kurs?
            </h2>
            
            <p className="text-xl mb-12" style={{ color: 'hsl(210, 10%, 45%)' }}>
              Pierwsza, pilotażowa edycja Męskiego Kompasu to wyjątkowa okazja. Dołącz do kameralnej grupy 
              10 mężczyzn, którzy razem z nami wyruszą w tę podróż.
            </p>

            <div className="p-8 rounded-2xl mb-12" style={{ backgroundColor: 'hsl(0, 0%, 99%)', border: '1px solid hsl(210, 40%, 15%)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(210, 20%, 8%)' }}>
                Co otrzymujesz:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  "5-tygodniowy program warsztatowy",
                  "Dostęp do materiałów wideo, audio i Markdown",
                  "Udział w 3 sesjach LIVE z prowadzącymi",
                  "Pracę w zamkniętej, wspierającej grupie 10 mężczyzn",
                  "Możliwość indywidualnej konsultacji z Mateuszem"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(45, 85%, 50%)' }} />
                    <p style={{ color: 'hsl(210, 10%, 45%)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-3xl font-bold mb-4" style={{ color: 'hsl(45, 85%, 50%)' }}>
                Twoja inwestycja w odzyskanie kierunku: 497 zł
              </p>
              <p className="text-lg" style={{ color: 'hsl(210, 10%, 45%)' }}>
                Miejsca są ograniczone, a o przyjęciu decyduje kolejność zgłoszeń. 
                Nie ma skomplikowanych formularzy – po prostu dołącz i zacznij działać.
              </p>
            </div>

            <Link to="/contact">
              <div className="inline-block p-1 rounded-xl" style={{ background: 'hsl(45, 85%, 50%)' }}>
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl mb-6 !bg-transparent !text-black border-0"
                  aria-label="Zapisuję się i zaczynam nawigować"
                  showArrow
                >
                  ZAPISUJĘ SIĘ I ZACZYNAM NAWIGOWAĆ
                </CTAButton>
              </div>
            </Link>

            <div className="text-sm font-bold" style={{ color: 'hsl(0, 60%, 50%)' }}>
              Zostały tylko 4 miejsca!
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}