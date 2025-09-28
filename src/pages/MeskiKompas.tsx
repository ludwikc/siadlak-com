import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { CheckCircle, AlertCircle, Users } from '@/lib/icons';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeskiKompas() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(210, 45%, 12%)' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/meski-kompas-hero.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-wider"
              style={{
                background: 'linear-gradient(135deg, white 0%, #ECB614 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px hsl(45, 85%, 50% / 0.3)',
                filter: 'drop-shadow(0 4px 8px hsl(0, 0%, 0% / 0.3))'
              }}
            >
              MĘSKI KOMPAS
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: 'hsl(210, 20%, 95%)' }}>
              Męski Kompas to 5-tygodniowy, intensywny program dla mężczyzn po 30-tce z analitycznym umysłem. 
              Odzyskaj kierunek, spokój i wewnętrzną spójność – bez duchowego bullshitu, z konkretem i strukturą.
            </h2>
            <Link to="https://buy.siadlak.com/checkout/meski-kompas">
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
              Startujemy w październiku | Tylko 10 miejsc | Inwestycja: <span className="line-through">1997 PLN</span> 497 zł (pilot)
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(210, 20%, 94%) 100%)' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0, 65%, 51%) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(210, 20%, 8%)' }}>
                Czy to o Tobie?
              </h2>
              <p className="text-xl" style={{ color: 'hsl(0, 65%, 45%)' }}>
                Rozpoznajesz się w tych sytuacjach?
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Czujesz, że utknąłeś, a Twoje życie toczy się siłą rozpędu, bez jasno określonego kierunku?",
                "Masz analityczny umysł, ale gubisz się w natłoku myśli i wewnętrznych konfliktów?",
                "Brakuje Ci konkretnych narzędzi, by przełożyć swoje wartości na codzienne działania?",
                "Masz dość górnolotnych frazesów i szukasz męskiej, rzeczowej przestrzeni do rozwoju?",
                "Czujesz, że to, co robisz, rozmija się z tym, co jest dla Ciebie naprawdę ważne?"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover-scale group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <GlassCard 
                    className="flex items-start gap-5 p-6 transition-all duration-300 group-hover:shadow-xl"
                    style={{ 
                      backgroundColor: 'hsl(0, 0%, 99%)', 
                      border: '2px solid hsl(0, 65%, 85%)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 6px -1px hsl(0, 65%, 51% / 0.1), 0 2px 4px -1px hsl(0, 65%, 51% / 0.06)'
                    }}
                  >
                    <div className="relative">
                      <div 
                        className="rounded-full p-2 transition-colors duration-300"
                        style={{ backgroundColor: 'hsl(0, 65%, 95%)' }}
                      >
                        <AlertTriangle 
                          className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
                          size={24} 
                          style={{ color: 'hsl(0, 65%, 51%)' }} 
                        />
                      </div>
                      {/* Subtle glow effect */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ 
                          background: 'radial-gradient(circle, hsl(0, 65%, 51%) 0%, transparent 70%)',
                          transform: 'scale(1.5)'
                        }}
                      ></div>
                    </div>
                    <p 
                      className="text-lg font-medium leading-relaxed transition-colors duration-300 group-hover:text-gray-900" 
                      style={{ color: 'hsl(210, 10%, 45%)' }}
                    >
                      {item}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div 
                className="inline-block p-8 rounded-2xl animate-fade-in"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(45, 85%, 50%) 0%, hsl(45, 85%, 45%) 100%)',
                  animationDelay: '500ms'
                }}
              >
                <p className="text-xl font-bold text-white mb-2">
                  Jeśli kiwasz głową, czytając te słowa –
                </p>
                <p className="text-2xl font-extrabold text-white">
                  jesteś we właściwym miejscu.
                </p>
              </div>
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
                  Ludwik C. Siadlak
                </h3>
                <p className="leading-relaxed" style={{ color: 'hsl(210, 20%, 95%)' }}>
                  Mistrz porywania ludzi i pracy z emocjami. Ludwik zapala iskrę, inspiruje do sięgania głębiej 
                  i pomaga nazwać to, co nienazwane. To on dba o to, by podróż miała sens i serce.
                </p>
              </div>

              {/* Mateusz - White (Yang) */}
              <div className="bg-white p-12 flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/mateusz-lizak-profile.png" 
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

      {/* MĘSKI KOMPAS - STARTER PACK */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 20%, 95%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(210, 20%, 8%)' }}>
                MĘSKI KOMPAS - STARTER PACK
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'hsl(45, 85%, 50%)' }}>
                System dla mężczyzn z analitycznym umysłem (30+)
              </h3>
              <p className="text-xl italic mb-8" style={{ color: 'hsl(210, 10%, 45%)' }}>
                "Konkret, rytm i struktura. Bez przytulania drzew i coachingowego bullshitu."
              </p>
            </div>

            {/* PROFIL UCZESTNIKA */}
            <GlassCard className="p-8 mb-12" style={{ backgroundColor: 'hsl(0, 0%, 99%)', border: '2px solid hsl(45, 85%, 50%)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(45, 85%, 50%)' }}>
                PROFIL UCZESTNIKA
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                    <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Typ:</strong> Analityczny umysł, często z branży IT
                  </p>
                  <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                    <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Wiek:</strong> 30+ lat, stabilna sytuacja finansowa
                  </p>
                </div>
                <div>
                  <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                    <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Problem:</strong> paraliż analityczny, perfekcjonizm, nieustanna praca mentalna
                  </p>
                  <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                    <strong style={{ color: 'hsl(210, 20%, 8%)' }}>Cel:</strong> system nawigacji zamiast chaosu
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* PROGRAM CURRICULUM */}
            <div className="space-y-12">
              {/* TYDZIEŃ 1 */}
              <GlassCard className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                <div className="flex items-start gap-6">
                  <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      TYDZIEŃ 1: ORIENTACJA I PRIORYTETY
                    </h3>
                    <p className="text-lg mb-4 italic" style={{ color: 'hsl(45, 85%, 40%)' }}>
                      "Efekt: Jasność"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Problem do rozwiązania:</h4>
                      <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong>Paraliż analityczny</strong> - 20 otwartych zakładek, 10 projektów, zero konkretnych działań. 
                        Wszystko wydaje się ważne, nic nie jest priorytetem.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</h4>
                      <ul className="space-y-3" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Mapa dnia vs wartości:</strong> Audit tego, na co faktycznie tracisz czas vs. co deklarujesz jako ważne</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Zasada 3xP:</strong> Projects/People/Principles - tylko 3 priorytety w każdej kategorii</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Energy/Impact Matrix:</strong> Gdzie inwestować czas dla maksymalnego efektu</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>WYZWANIE: "Wielkie sprzątanie"</h4>
                      <ul className="list-disc list-inside space-y-1" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li>Zamknij wszystkie nieaktywne projekty/zakładki/commitments</li>
                        <li>Zostaw maksymalnie 3 aktywne</li>
                        <li><strong style={{ color: 'hsl(45, 85%, 40%)' }}>Rezultat:</strong> Po raz pierwszy od lat wiesz, co jest naprawdę ważne</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* TYDZIEŃ 2 */}
              <GlassCard className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                <div className="flex items-start gap-6">
                  <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      TYDZIEŃ 2: SYSTEM I RYTUAŁY
                    </h3>
                    <p className="text-lg mb-4 italic" style={{ color: 'hsl(45, 85%, 40%)' }}>
                      "Efekt: Spójność"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Problem do rozwiązania:</h4>
                      <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong>Brak rytmu i struktury</strong> - każdy dzień wygląda inaczej, brak przewidywalności, 
                        ciągłe reactive mode zamiast proactive.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</h4>
                      <ul className="space-y-3" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Pętla tygodniowa:</strong> Stały rytm planowania/wykonania/przeglądu</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Focus Sprint:</strong> Technika dla analityków - 25 min full focus + 5 min analiza</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Trigger System:</strong> Automatyczne reakcje na typowe sytuacje</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>WYZWANIE: "21-dniowy rytm"</h4>
                      <ul className="list-disc list-inside space-y-1" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li>Wdróż jeden, prosty rytuał tygodniowy</li>
                        <li>Testuj przez 3 tygodnie bez zmian</li>
                        <li><strong style={{ color: 'hsl(45, 85%, 40%)' }}>Rezultat:</strong> Pierwszy raz czujesz, że masz kontrolę nad czasem, a nie odwrotnie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* TYDZIEŃ 3 */}
              <GlassCard className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                <div className="flex items-start gap-6">
                  <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      TYDZIEŃ 3: GRANICE I DECYZJE
                    </h3>
                    <p className="text-lg mb-4 italic" style={{ color: 'hsl(45, 85%, 40%)' }}>
                      "Efekt: Moc decyzji"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Problem do rozwiązania:</h4>
                      <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong>Brak granic i delegowania</strong> - robisz wszystko sam, bo "będzie szybciej", 
                        ciągle dostępny dla innych, nie umiesz powiedzieć "nie".
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</h4>
                      <ul className="space-y-3" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Kompas 3W:</strong> Who/What/When - kto może to zrobić zamiast ciebie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Ćwiczenie "NIE":</strong> Systematyczne ćwiczenie odmawiania bez usprawiedliwiania się</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neural-violet dark:text-luminal-magenta text-lg leading-none mt-1">•</span>
                          <span className="break-words"><strong>Decision Framework:</strong> Algorytmy decyzyjne dla powtarzających się sytuacji</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>WYZWANIE: "Boundary Week"</h4>
                      <ul className="list-disc list-inside space-y-1" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li>Powiedz "nie" 3 prośbom, które normalnie przyjąłbyś</li>
                        <li>Zdeleguuj jedną rzecz, którą zawsze robisz sam</li>
                        <li><strong style={{ color: 'hsl(45, 85%, 40%)' }}>Rezultat:</strong> Odzyskujesz czas i przestrzeń mentalną</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* TYDZIEŃ 4 */}
              <GlassCard className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                <div className="flex items-start gap-6">
                  <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      TYDZIEŃ 4: RELACJE I AUTENTYCZNOŚĆ
                    </h3>
                    <p className="text-lg mb-4 italic" style={{ color: 'hsl(45, 85%, 40%)' }}>
                      "Efekt: Bycie sobą"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Problem do rozwiązania:</h4>
                      <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong>Powierzchowne relacje przez perfekcjonizm</strong> - pokazujesz tylko "dopracowaną wersję" siebie, 
                        unikasz vulnerabilności, tracisz autentyczne połączenia.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</h4>
                      <ul className="list-disc list-inside space-y-2" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li><strong>Krąg 5:</strong> Identyfikacja 5 najważniejszych relacji i ich audit</li>
                        <li><strong>Rozmowa autentyczna:</strong> Framework dla trudnych ale ważnych rozmów</li>
                        <li><strong>Emotion-Logic Balance:</strong> Kiedy używać logic, a kiedy pokazać emocje</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>WYZWANIE: "Truth Week"</h4>
                      <ul className="list-disc list-inside space-y-1" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li>Jedna szczera rozmowa z każdą z 3 najważniejszych osób</li>
                        <li>Powiedz coś prawdziwego, czego normalnie nie powiedziałbyś</li>
                        <li><strong style={{ color: 'hsl(45, 85%, 40%)' }}>Rezultat:</strong> Głębsze relacje, mniej energii na "udawanie"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* TYDZIEŃ 5 */}
              <GlassCard className="border-l-4 p-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', borderLeftColor: 'hsl(45, 85%, 50%)' }}>
                <div className="flex items-start gap-6">
                  <div className="rounded-full p-4" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      TYDZIEŃ 5: KOMPAS WEWNĘTRZNY
                    </h3>
                    <p className="text-lg mb-4 italic" style={{ color: 'hsl(45, 85%, 40%)' }}>
                      "Efekt: Kierunek"
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Problem do rozwiązania:</h4>
                      <p className="mb-4" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <strong>Brak długoterminowego kierunku</strong> - radzisz sobie z codziennością, 
                        ale nie masz jasnej wizji, dokąd zmierzasz za rok/5 lat.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>Narzędzia:</h4>
                      <ul className="list-disc list-inside space-y-2" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li><strong>Kompas 5-punktowy:</strong> Integration wszystkich narzędzi w jeden system</li>
                        <li><strong>Personal Operating System:</strong> Twój własny algorytm podejmowania decyzji</li>
                        <li><strong>Quarterly Reviews:</strong> System regularnej oceny i korekty kursu</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(210, 20%, 8%)' }}>WYZWANIE: "90-Day Plan"</h4>
                      <ul className="list-disc list-inside space-y-1" style={{ color: 'hsl(210, 10%, 45%)' }}>
                        <li>Stwórz konkretny plan na najbliższe 90 dni</li>
                        <li>Wykorzystaj wszystkie narzędzia z 4 poprzednich tygodni</li>
                        <li><strong style={{ color: 'hsl(45, 85%, 40%)' }}>Rezultat:</strong> Masz swój wewnętrzny GPS na życie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* STRUKTURA DOSTARCZENIA */}
            <GlassCard className="p-8 mt-16" style={{ backgroundColor: 'hsl(210, 40%, 15%)', color: 'white' }}>
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(45, 85%, 50%)' }}>
                STRUKTURA DOSTARCZENIA
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: 'hsl(45, 85%, 50%)' }}>Materiały:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>5x PDF Workbooków</strong> - konkretne ćwiczenia, nie teoria</li>
                    <li><strong>5x Audio/Video</strong> - krótkie materiały wspomagające (max 15 min)</li>
                    <li><strong>2x Live Sessions</strong> - sesja startowa + końcowy mastermind</li>
                    <li><strong>Discord Community</strong> - 10 osób, zamknięta grupa</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: 'hsl(45, 85%, 50%)' }}>Zasady pracy:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>No-bullshit approach:</strong> Tylko to, co działa w praktyce</li>
                    <li><strong>Ćwiczenia, nie teoria:</strong> Każdy tydzień = konkretne działanie</li>
                    <li><strong>Peer accountability:</strong> Raportowanie w grupie co zwiększa wykonalność</li>
                    <li><strong>Systemowe podejście:</strong> Budowanie nawyków, nie jednorazowe zmiany</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* KLUCZOWE RÓŻNICE */}
            <GlassCard className="p-8 mt-8" style={{ backgroundColor: 'hsl(0, 0%, 99%)', border: '2px solid hsl(45, 85%, 50%)' }}>
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(210, 20%, 8%)' }}>
                KLUCZOWE RÓŻNICE OD INNYCH PROGRAMÓW
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Dla analityków:",
                    description: "Logiczne, strukturalne podejście zamiast \"odkrywania siebie\""
                  },
                  {
                    number: "2", 
                    title: "Praktyczne narzędzia:",
                    description: "Gotowe frameworki do wdrożenia, nie abstrakcyjne koncepty"
                  },
                  {
                    number: "3",
                    title: "Mała grupa:",
                    description: "10 osób = jakość interakcji i feedback"
                  },
                  {
                    number: "4",
                    title: "Krótki format:",
                    description: "5 tygodni intensywnej pracy, nie miesięce ciągłego kursu"
                  },
                  {
                    number: "5",
                    title: "Przystępna cena:",
                    description: "mniej niż 500 zł za system, który raz skutecznie zaimplementowany będzie działał przez lata"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'hsl(45, 85%, 95%)' }}>
                    <div className="rounded-full p-2 flex-shrink-0" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                      <span className="font-bold">{item.number}</span>
                    </div>
                    <div>
                      <h4 className="font-bold" style={{ color: 'hsl(210, 20%, 8%)' }}>{item.title}</h4>
                      <p style={{ color: 'hsl(210, 10%, 45%)' }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8 p-6 rounded-lg" style={{ backgroundColor: 'hsl(210, 20%, 95%)' }}>
                <p className="text-lg font-medium" style={{ color: 'hsl(210, 10%, 45%)' }}>
                  Ten program to nie transformacja osobowości - to budowanie praktycznego systemu nawigacji 
                  dla mężczyzn, którzy mają dość analizy i chcą zacząć działać.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Bonus Section - 7 Technik */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 40%, 15%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: 'hsl(45, 85%, 50%)', color: 'hsl(210, 20%, 8%)' }}>
                <span className="text-lg font-bold">BONUS O WARTOŚCI 497 ZŁ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                BONUS: Otrzymasz również kurs
                <br />
                <span style={{ color: 'hsl(45, 85%, 50%)' }}>
                  "7 technik produktywności"
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Zapisując się na Męski Kompas, automatycznie otrzymujesz dostęp do pełnego kursu 
                "7 technik, które natychmiast zwiększą Twoją produktywność" - <Link to="https://buy.siadlak.com/checkout/7technik">normalnie sprzedawanego za 497 zł</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Course Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/7technik_transparent.png" 
                  alt="7 technik produktywności - kurs bonus"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Course Details */}
              <div className="order-1 lg:order-2">
                <GlassCard className="p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Co znajdziesz w bonusowym kursie:
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "7 sprawdzonych technik zwiększania produktywności",
                      "Konkretne narzędzia do natychmiastowego wdrożenia",
                      "Praktyczne ćwiczenia i case studies",
                      "Materiały video i audio w wysokiej jakości",
                      "Dostęp na zawsze - bez ograniczeń czasowych"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(45, 85%, 50%)' }} />
                        <p className="text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'hsl(45, 85%, 50%)' }}>
                    <p className="text-xl font-bold" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      Wartość bonusu: <span className="line-through">497 zł</span>
                    </p>
                    <p className="text-2xl font-bold" style={{ color: 'hsl(210, 20%, 8%)' }}>
                      Dla Ciebie: Bezpłatnie!
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(45, 85%, 50%)' }}>
                  Razem otrzymujesz pakiet o wartości 2494 zł
                </h3>
                <p className="text-xl text-white/90 mb-4">
                  Męski Kompas (1997 zł) + 7 Technik Produktywności (497 zł)
                </p>
                <p className="text-3xl font-bold text-white">
                  Twoja cena: tylko 497 zł (pilot)
                </p>
                <p className="text-lg text-white/70 mt-2">
                  To prawdziwa oferta 2 w 1 - płacisz za jeden, dostajesz dwa kursy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifehackerzy Community Bonus Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(270, 70%, 8%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: 'hsl(270, 90%, 60%)', color: 'white' }}>
                <span className="text-lg font-bold">BONUS BEZCENNY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Dożywotni dostęp do społeczności
                <br />
                <span style={{ color: 'hsl(270, 90%, 60%)' }}>
                  LIFEHACKERZY
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Ekskluzywna społeczność dostępna wyłącznie dla klientów moich programów rozwojowych. 
                Miejsce, gdzie spotkasz ludzi o podobnych wartościach, gotowych do wspólnego rozwoju.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Community Logo & Visual */}
              <div className="order-2 lg:order-1 text-center">
                <img 
                  src="/lovable-uploads/lifehackerzy-community-call.png" 
                  alt="Lifehackerzy - Codzienne spotkania społeczności"
                  className="w-full h-auto rounded-2xl shadow-2xl mb-8"
                />
                <img 
                  src="/lovable-uploads/lifehackerzy.svg" 
                  alt="Lifehackerzy - Ekskluzywna społeczność"
                  className="w-full max-w-md h-auto mx-auto mb-6"
                />
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <p className="text-2xl font-bold text-white mb-2">
                    Hackerzy łamią ograniczenia systemów.
                  </p>
                  <p className="text-xl" style={{ color: 'hsl(270, 90%, 60%)' }}>
                    Z nami złamiesz ograniczenia swojego życia.
                  </p>
                </div>
              </div>

              {/* Community Benefits */}
              <div className="order-1 lg:order-2">
                <GlassCard className="p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Co zyskujesz w społeczności Lifehackerów:
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Codzienne spotkania live z ekspertami i uczestnikami",
                      "Wymiana wiedzy i doświadczeń z profesjonalistami",
                      "Sekrety produktywności niedostępne nigdzie indziej",
                      "Eksperymentalne warsztaty i kreatywne metody pracy",
                      "Wsparcie motywacyjne i inspiracja każdego dnia",
                      "Społeczność z całego świata o podobnych wartościach",
                      "Dostęp dożywotni - bez ograniczeń czasowych"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(270, 90%, 60%)' }} />
                        <p className="text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'hsl(270, 90%, 60%)' }}>
                    <p className="text-2xl font-bold text-white mb-2">
                      Wartość społeczności: BEZCENNA
                    </p>
                    <p className="text-xl font-bold text-white">
                      Dla Ciebie: DOSTĘP LIFETIME. W cenie Kompasu.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(270, 90%, 60%)' }}>
                  Społeczność dostępna wyłącznie dla moich Klientów
                </h3>
                <p className="text-xl text-white/90 mb-4">
                  "Jesteśmy wypadkową pięciu osób, z którymi spędzamy najwięcej czasu" - Jim Rohn
                </p>
                <p className="text-lg text-white/70">
                  Otocz się ludźmi, którzy tak jak Ty chcą od życia czegoś więcej
                </p>
              </div>
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

            <Link to="https://buy.siadlak.com/checkout/meski-kompas">
              <CTAButton
                variant="primary"
                size="xl"
                className="shadow-2xl hover:shadow-3xl mb-6 font-bold !text-black border-0 px-8 py-4 !bg-yellow-500 hover:!bg-yellow-600"
                aria-label="Zapisuję się i zaczynam nawigować"
                showArrow
              >
                ZAPISUJĘ SIĘ I ZACZYNAM NAWIGOWAĆ
              </CTAButton>
            </Link>

            <div className="text-sm font-bold" style={{ color: 'hsl(0, 60%, 50%)' }}>
              W tej edycji zostały tylko 4 miejsca!
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}