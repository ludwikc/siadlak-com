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
    const calendarUrl = 'https://calendar.app.google/Xj5U39t9HaVNqS1HA';
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-luminal-magenta rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-quantum-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neural-violet rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">
                Bezpłatna 30-minutowa rozmowa
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              SESJA DISCOVERY
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
              Sprawdźmy, czy nadajemy na podobnych falach
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-gradient-to-b from-luminous-white to-background overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-20 w-32 h-32 bg-neural-violet rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-luminal-magenta rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">

            {/* Main Content */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-2 bg-neural-violet/10 rounded-full border border-neural-violet/20">
                <span className="text-sm font-semibold text-neural-violet uppercase tracking-wide">
                  Autentyczna rozmowa
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                30 minut autentycznej rozmowy o Twoich wyzwaniach
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-neural-violet via-luminal-magenta to-neural-violet mx-auto rounded-full shadow-lg mb-8"></div>

              <p className="text-xl mb-12 text-deep-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                Sesja Discovery to nasze pierwsze spotkanie - moment, w którym poznajemy się nawzajem i sprawdzamy, czy moja metoda pracy pasuje do tego, czego szukasz. To obustronny proces odkrywania kompatybilności.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 border-2 border-neural-violet/20 hover:border-neural-violet/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal group-hover:text-neural-violet transition-colors">
                    Indywidualna rozmowa
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed">
                    30 minut 1:1, aby się poznać.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-luminal-magenta/20 hover:border-luminal-magenta/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-luminal-magenta to-quantum-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal group-hover:text-luminal-magenta transition-colors">
                    Obustronny proces
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed">
                    Sprawdzamy, czy do siebie pasujemy: rezultaty dostarczam pracując w specyficzny sposób, a Ty już trochę siebie znasz.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-quantum-blue/20 hover:border-quantum-blue/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-charcoal group-hover:text-quantum-blue transition-colors">
                    Autentyczne podejście
                  </h3>
                  <p className="text-deep-charcoal/80 leading-relaxed">
                    Szczere rozmowy, prawdziwe rozwiązania
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal">
                Wybierz termin, który Ci odpowiada
              </h3>
            </div>
            
            {/* Availability Check Card */}
            <div className="max-w-4xl mx-auto">
              <GlassCard padding="xl" className="text-center relative overflow-hidden border-2 border-neural-violet/20">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neural-violet/5 via-transparent to-luminal-magenta/5"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neural-violet/20 via-luminal-magenta/20 to-quantum-blue/20 opacity-60 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  {status === 'initial' && (
                    <div className="py-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <CheckCircle className="h-10 w-10 text-white animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-deep-charcoal">
                        Sprawdź dostępność Sesji Discovery
                      </h3>
                      <p className="text-subtle-slate mb-8 max-w-md mx-auto">
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
                      <h3 className="text-xl font-semibold mb-6 text-deep-charcoal">
                        Trwa sprawdzanie dostępności...
                      </h3>
                      
                      {/* Progress Bar */}
                      <div className="w-full max-w-md mx-auto">
                        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-neural-violet to-luminal-magenta h-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-subtle-slate mt-2">
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
                      <h3 className="text-2xl font-bold mb-4 text-deep-charcoal">
                        Tak, mam obecnie miejsce w programie mentoringowym
                      </h3>
                      <p className="text-lg mb-8 text-subtle-slate max-w-md mx-auto">
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
            <div className="max-w-5xl mx-auto mt-16">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-5 py-2 bg-quantum-blue/10 rounded-full border border-quantum-blue/20">
                  <span className="text-sm font-semibold text-quantum-blue uppercase tracking-wide">
                    Transparentny proces
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal">
                  Jak to wygląda w praktyce?
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-quantum-blue via-neural-violet to-luminal-magenta mx-auto rounded-full shadow-lg"></div>
              </div>

              <div className="bg-white rounded-2xl p-10 md:p-12 border-2 border-neural-violet/20 shadow-xl mb-12">
                <p className="text-xl text-deep-charcoal/80 mb-10 leading-relaxed text-center">
                  Podczas naszej rozmowy wspólnie odkryjemy, z czym przychodzisz i jak mogę Ci pomóc. Autentycznie wysłucham Twojej sytuacji i szczerze powiem, czy widzę szansę na skuteczną współpracę.
                </p>

                <h3 className="text-2xl font-bold mb-8 text-deep-charcoal text-center">
                  Możliwe scenariusze po naszej sesji:
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border-2 border-green-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-deep-charcoal leading-relaxed">
                      Intuicja podpowiada Ci, że <em className="font-semibold">to jest to, czego tak długo szukałeś</em> i rozpoczynamy plan wdrożenia Life OS Upgrade.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border-2 border-quantum-blue/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-deep-charcoal leading-relaxed">
                      Skieruję Cię do odpowiedniego <a href="/program" className="text-neural-violet hover:underline font-semibold">Programu Fundamentalnego</a>
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border-2 border-neural-violet/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-violet to-luminal-magenta rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-deep-charcoal leading-relaxed">
                      Po prostu spędzimy pół godziny na sympatycznej rozmowie, podczas której dowiesz się więcej o swoich opcjach
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-quantum-blue/10 to-neural-violet/10 rounded-2xl p-8 border-2 border-quantum-blue/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-deep-charcoal leading-relaxed text-lg">
                      <strong className="text-xl">To nie jest sprzedażowa prezentacja</strong> - to rzeczywiste odkrywanie, czy jesteśmy dla siebie odpowiedni. Czasem najlepsza pomoc to szczera informacja o tym, że drogi się rozchodzą.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}