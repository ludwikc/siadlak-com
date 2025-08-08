import { ArrowRight } from '@/lib/icons';
import { GlassCard } from '@/components/ui/glass-card';
import { OTOCountdown } from './OTOCountdown';
import HeroSection from '@/components/sections/HeroSection';
import { useState, useEffect } from 'react';

interface OTOProductDisplayV2Props {
  onExpired: () => void;
}

export function OTOProductDisplayV2({ onExpired }: OTOProductDisplayV2Props) {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const monthNames = [
      'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
      'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
    ];
    
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    setCurrentDateTime(`${day} ${month} (dzisiaj), ${hours}:${minutes}`);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Gmail-style email */}
      <section aria-label="Email z mojego biurka" className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Gmail header */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/3e37de9f-9414-4fdb-b6b8-927ece65c2ca.png" 
                    alt="Ludwik C. Siadlak"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Ludwik C. Siadlak</div>
                    <div className="text-sm text-gray-500">ludwik@siadlak.email</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{currentDateTime}</div>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Do:</span> Ciebie &lt;****@gmail.com&gt;
              </div>
            </div>
            
            {/* Email content */}
            <div className="p-6 bg-white">
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>Właśnie zapisałeś się na mój webinar.</p>
                <p><strong>Mój</strong> webinar.</p>
                <p>A to oznacza, że jesteś <strong>moim gościem</strong>. A to oznacza, że traktuję Cię szacunkiem, należnym moim Gościom. I zaczniemy od tego, że chcę Ci podziękować za to, że… jesteś.</p>
                <p>I mam już pomysł, jak zrobić to najlepiej.</p> <p>Mam coś dla Ciebie:</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Logo Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="relative max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/e615021d-1367-4c9b-a003-5ceae847d2e8.png"
                alt="7 Technik Produktywności - Logo kursu"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Witaj w świecie efektywności
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                77 minut, które zmienią sposób, w jaki organizujesz swój dzień
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <HeroSection 
        title="7 NAJSKUTECZNIEJSZYCH Technik Produktywności" 
        subtitle="czyli 77 minut, które ustawią Ci (każdy!) dzień"
      />

      {/* Oferta Section */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <GlassCard className="mb-16" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">[OFERTA] – Ukłon w Twoją stronę</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Przygotowałem dla Ciebie coś, co jest fundamentem każdego mojego webinaru – niezależnie, czy będziemy rozmawiać o produktywności, odporności psychicznej, czy mindfulness.
              </p>
              <p>
                To jest kurs <strong>"7 Technik Produktywności"</strong> – 77 minut konkretów, zero lania wody, same narzędzia, które możesz wdrożyć od razu.
              </p>
              <p className="text-xl font-semibold text-primary">
                To jest ten moment, w którym produktywność przestaje być teorią, a zaczyna być Twoim codziennym standardem.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Szybki przegląd technik */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GlassCard padding="xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">[SZYBKI PRZEGLĄD TECHNIK]</h2>
              <p className="text-xl text-foreground mb-8">Oto, co dostaniesz:</p>
            </div>
            
            <div className="grid gap-6 md:gap-8">
              {[
                { number: "1", title: "Blokowanie zadań", description: "jak grupować obowiązki, żeby odzyskać kontrolę nad dniem." },
                { number: "2", title: "Technika Pomodoro 2.0", description: "ulepszona metoda pracy w rytmie skupienia." },
                { number: "3", title: "Reguła 2 minut", description: "błyskawiczne eliminowanie drobnych zadań." },
                { number: "4", title: "Mapowanie energii", description: "praca w zgodzie z naturalnymi szczytami Twojej wydajności." },
                { number: "5", title: "Zasada jednej rzeczy", description: "koncentracja na tym, co naprawdę przesuwa Cię do przodu." },
                { number: "6", title: "Metoda \"zamkniętej pętli\"", description: "jak kończyć to, co zaczynasz." },
                { number: "7", title: "Technika resetu mentalnego", description: "szybkie czyszczenie głowy z chaosu." }
              ].map((t, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {t.number}
                  </div>
                  <div className="text-foreground">
                    <p className="leading-relaxed"><strong>{t.title}</strong> – {t.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground italic">
                (Każdą z tych metod pokażę Ci krok po kroku – bez teoretyzowania, od razu w praktyce.)
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Wartość vs. cena */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <GlassCard padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">[WARTOŚĆ vs CENA]</h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
              <div className="inline-flex items-center gap-6 p-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Normalnie</p>
                  <p className="text-2xl font-bold line-through text-muted-foreground">497 PLN</p>
                </div>
                <div className="text-3xl text-muted-foreground">→</div>
                <div>
                  <p className="text-sm text-primary font-medium mb-1">Dziś, jako mój gość</p>
                  <p className="text-4xl font-bold text-primary">77 PLN</p>
                </div>
              </div>
              
              <div className="space-y-4 text-foreground">
                <p>
                  To nie jest przecena "z kosmosu". To jest autentyczny ukłon w Twoją stronę.
                </p>
                <p>
                  Bo wiem, że jeśli poznasz i wdrożysz te techniki, to każdy mój webinar będzie dla Ciebie jeszcze bardziej wartościowy.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Limit czasowy */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-destructive">[LIMIT CZASOWY]</h2>
            
            <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Ta oferta jest dostępna tylko przez <strong>7 minut</strong> od teraz.
              </p>
              <p>
                Po tym czasie znika – nawet jeśli odświeżysz stronę lub wejdziesz z innej przeglądarki.
              </p>
              <p className="text-xl font-bold text-destructive">
                Zegar już tyka.
              </p>
            </div>
            
            <div className="mt-8 max-w-md mx-auto">
              <OTOCountdown onExpired={onExpired} />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">[CALL TO ACTION]</h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-foreground mb-8">
              Kliknij poniżej, odbierz kurs i zacznij wprowadzać te techniki w życie jeszcze przed webinarem.
            </p>
          </div>

          <GlassCard className="max-w-md mx-auto" padding="lg">
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-6 rounded-xl text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6 flex items-center justify-center gap-3">
              Tak, chcę kurs "7 Technik Produktywności" za 77 PLN
              <ArrowRight className="h-6 w-6" />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Bezpieczne płatności</span>
              <span>•</span>
              <span>SSL</span>
              <span>•</span>
              <span>Natychmiastowy dostęp</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}