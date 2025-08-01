import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';
import { CheckCircle, Users, Target, Heart } from '@/lib/icons';
import { useState } from 'react';

export default function Discovery() {
  const [status, setStatus] = useState<'initial' | 'loading' | 'success'>('initial');

  const handleCheckAvailability = () => {
    setStatus('loading');
    
    // Simulate checking availability
    setTimeout(() => {
      setStatus('success');
    }, 2500);
  };

  const handleScheduleSession = () => {
    // Load Google Calendar script if not already loaded
    if (!document.querySelector('[src*="calendar.google.com/calendar/scheduling-button-script.js"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      document.head.appendChild(link);
      
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1LW9thGbkrCT1Gm1BohgCD-zaCfgmf6QyKibe-fnnIZVHhxXs3cDk0m8JkybKyZ-hm0T8qUD1I?gv=true',
          color: '#8E24AA',
          label: 'Umów Sesję Discovery',
          target: document.body,
        });
      };
      document.head.appendChild(script);
    } else {
      // @ts-ignore
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1LW9thGbkrCT1Gm1BohgCD-zaCfgmf6QyKibe-fnnIZVHhxXs3cDk0m8JkybKyZ-hm0T8qUD1I?gv=true',
        color: '#8E24AA',
        label: 'Umów Sesję Discovery',
        target: document.body,
      });
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
              <GlassCard padding="xl" className="text-center">
                {status === 'initial' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                      Sprawdź dostępność Sesji Discovery
                    </h3>
                    <button 
                      onClick={handleCheckAvailability}
                      className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      Sprawdź dostępność
                    </button>
                  </div>
                )}
                
                {status === 'loading' && (
                  <div className="py-8">
                    <div className="animate-spin w-8 h-8 border-3 border-neural-violet border-t-transparent rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-deep-charcoal dark:text-silver-mist">
                      Trwa sprawdzanie dostępności...
                    </h3>
                  </div>
                )}
                
                {status === 'success' && (
                  <div>
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                      Tak, mam obecnie miejsce w programie mentoringowym
                    </h3>
                    <p className="text-lg mb-6 text-subtle-slate dark:text-silver-mist/80">
                      Możesz umówić Sesję Discovery
                    </p>
                    <button 
                      onClick={handleScheduleSession}
                      className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      Umów Sesję Discovery
                    </button>
                  </div>
                )}
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