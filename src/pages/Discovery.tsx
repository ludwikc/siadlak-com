import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';
import { Calendar, Clock, CheckCircle } from '@/lib/icons';
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
        subtitle="Zarezerwuj bezpłatną konsultację i odkryj swój potencjał transformacji"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Twoja podróż zaczyna się od rozmowy
              </h2>
              
              <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80 max-w-3xl mx-auto">
                Sesja Discovery to bezpłatna, 30-minutowa konsultacja, podczas której wspólnie określimy, 
                który program najlepiej odpowiada Twoim potrzebom i celom.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Calendar,
                    title: 'Bezpłatna konsultacja',
                    description: '30 minut dedykowane Twoim celom'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Personalne podejście',
                    description: 'Dobieramy program do Twoich potrzeb'
                  },
                  {
                    icon: Clock,
                    title: 'Szybki start',
                    description: 'Konkretny plan działania od razu'
                  }
                ].map((benefit, index) => (
                  <GlassCard key={index} className="text-center" padding="md">
                    <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                    </div>
                    <h3 className="font-semibold mb-2 text-deep-charcoal dark:text-silver-mist">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-subtle-slate dark:text-silver-mist/80">
                      {benefit.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
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
            
            {/* What to Expect */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <h3 className="text-xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Czego możesz się spodziewać?
              </h3>
              
              <div className="space-y-3 text-left">
                {[
                  'Szczegółowa analiza Twoich aktualnych wyzwań i celów',
                  'Prezentacja dopasowanego programu transformacji',
                  'Konkretny plan pierwszych kroków',
                  'Odpowiedzi na wszystkie Twoje pytania'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}