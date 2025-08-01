import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';
import { CheckCircle, Users, Target, Heart } from '@/lib/icons';
import { useState, useEffect } from 'react';

export default function Discovery() {
  const [status, setStatus] = useState<'initial' | 'loading' | 'success'>('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4; // Increase by 4% every 100ms (2.5s total)
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [status]);

  const handleCheckAvailability = () => {
    setStatus('loading');
    
    // Simulate checking availability
    setTimeout(() => {
      setStatus('success');
    }, 2500);
  };

  const handleScheduleSession = () => {
    // Create a popup window for the Google Calendar booking
    const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1LW9thGbkrCT1Gm1BohgCD-zaCfgmf6QyKibe-fnnIZVHhxXs3cDk0m8JkybKyZ-hm0T8qUD1I?gv=true';
    const popup = window.open(
      calendarUrl,
      'calendar-booking',
      'width=600,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
    );
    
    if (popup) {
      popup.focus();
    } else {
      // Fallback: redirect to the calendar page
      window.open(calendarUrl, '_blank');
    }
  };

  return (
    <Layout>
      <HeroSection
        title="SESJA DISCOVERY"
        subtitle="Sprawdźmy, czy nadajemy na podobnych falach"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Content */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                30 minut autentycznej rozmowy o Twoich wyzwaniach
              </h2>
              
              <p className="text-lg mb-12 text-subtle-slate dark:text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
                Sesja Discovery to nasze pierwsze spotkanie - moment, w którym poznajemy się nawzajem i sprawdzamy, czy moja metoda pracy pasuje do tego, czego szukasz. To obustronny proces odkrywania kompatybilności.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <GlassCard className="text-center" padding="lg">
                  <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                    Indywidualna rozmowa
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">
                    30 minut 1:1, aby się poznać.
                  </p>
                </GlassCard>

                <GlassCard className="text-center" padding="lg">
                  <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                    Obustronny proces
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">
                    Sprawdzamy, czy do siebie pasujemy: rezultaty dostarczam pracując w specyficzny sposób, a Ty już trochę siebie znasz.
                  </p>
                </GlassCard>

                <GlassCard className="text-center" padding="lg">
                  <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                    Autentyczne podejście
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80">
                    Szczere rozmowy, prawdziwe rozwiązania
                  </p>
                </GlassCard>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Wybierz termin, który Ci odpowiada
              </h3>
            </div>
            
            {/* Availability Check Card */}
            <div className="max-w-4xl mx-auto">
              <GlassCard padding="xl" className="text-center relative overflow-hidden border-2 border-neural-violet/20 dark:border-luminal-magenta/20">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neural-violet/5 via-transparent to-luminal-magenta/5 dark:from-neural-violet/10 dark:to-luminal-magenta/10"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neural-violet/20 via-luminal-magenta/20 to-quantum-blue/20 opacity-60 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  {status === 'initial' && (
                    <div className="py-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <CheckCircle className="h-10 w-10 text-white animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                        Sprawdź dostępność Sesji Discovery
                      </h3>
                      <p className="text-subtle-slate dark:text-silver-mist/80 mb-8 max-w-md mx-auto">
                        Kliknij poniżej, aby sprawdzić czy mam obecnie wolne miejsca w programie mentoringowym
                      </p>
                      <button 
                        onClick={handleCheckAvailability}
                        className="bg-gradient-to-r from-neural-violet to-luminal-magenta hover:from-neural-violet/90 hover:to-luminal-magenta/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
                      >
                        Sprawdź dostępność
                      </button>
                    </div>
                  )}
                
                  {status === 'loading' && (
                    <div className="py-8 relative z-10">
                      <div className="animate-spin w-8 h-8 border-3 border-neural-violet border-t-transparent rounded-full mx-auto mb-6"></div>
                      <h3 className="text-xl font-semibold mb-6 text-deep-charcoal dark:text-silver-mist">
                        Trwa sprawdzanie dostępności...
                      </h3>
                      
                      {/* Progress Bar */}
                      <div className="w-full max-w-md mx-auto">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-neural-violet to-luminal-magenta h-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-subtle-slate dark:text-silver-mist/70 mt-2">
                          {Math.round(progress)}% zakończone
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {status === 'success' && (
                    <div className="py-4 relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                        Tak, mam obecnie miejsce w programie mentoringowym
                      </h3>
                      <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80 max-w-md mx-auto">
                        Możesz umówić Sesję Discovery już teraz
                      </p>
                      <button 
                        onClick={handleScheduleSession}
                        className="bg-gradient-to-r from-neural-violet to-luminal-magenta hover:from-neural-violet/90 hover:to-luminal-magenta/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
                      >
                        Umów Sesję Discovery
                      </button>
                    </div>
                  )}
                </div>
              </GlassCard>
            </div>
            
            {/* How it works in practice */}
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-deep-charcoal dark:text-silver-mist">
                Jak to wygląda w praktyce?
              </h2>
              
              <GlassCard padding="xl" className="mb-12">
                <p className="text-lg text-subtle-slate dark:text-silver-mist/90 mb-8 leading-relaxed">
                  Podczas naszej rozmowy wspólnie odkryjemy, z czym przychodzisz i jak mogę Ci pomóc. Autentycznie wysłucham Twojej sytuacji i szczerze powiem, czy widzę szansę na skuteczną współpracę.
                </p>
                
                <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                  Możliwe scenariusze po naszej sesji:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      Intuicja podpowiada Ci, że <em>to jest to, czego tak długo szukałeś</em> i rozpoczynamy pracę w programie Mental Elevator
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      Skieruję Cię do odpowiedniego <a href="/program" className="text-neural-violet dark:text-luminal-magenta hover:underline">Programu Fundamentalnego</a>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      Po prostu spędzimy pół godziny na sympatycznej rozmowie, podczas której dowiesz się więcej o swoich opcjach
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-quantum-blue/10 dark:bg-quantum-blue/5 rounded-lg border border-quantum-blue/20">
                  <p className="text-subtle-slate dark:text-silver-mist/90 leading-relaxed">
                    <strong className="text-deep-charcoal dark:text-silver-mist">To nie jest sprzedażowa prezentacja</strong> - to rzeczywiste odkrywanie, czy jesteśmy dla siebie odpowiedni. Czasem najlepsza pomoc to szczera informacja o tym, że drogi się rozchodzą.
                  </p>
                </div>
              </GlassCard>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}