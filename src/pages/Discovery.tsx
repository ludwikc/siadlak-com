import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';
import { Calendar, Clock, CheckCircle } from '@/lib/icons';

export default function Discovery() {
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
            
            {/* Calendar Embed */}
            <div className="max-w-4xl mx-auto">
              <GlassCard padding="lg" className="overflow-hidden">
                <h3 className="text-xl font-bold mb-6 text-center text-deep-charcoal dark:text-silver-mist">
                  Wybierz termin, który Ci odpowiada
                </h3>
                
                <div className="relative w-full" style={{ minHeight: '600px' }}>
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1LW9thGbkrCT1Gm1BohgCD-zaCfgmf6QyKibe-fnnIZVHhxXs3cDk0m8JkybKyZ-hm0T8qUD1I?gv=true" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="600" 
                    frameBorder="0"
                    title="Kalendarz Discovery Session"
                    className="rounded-lg"
                  />
                </div>
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