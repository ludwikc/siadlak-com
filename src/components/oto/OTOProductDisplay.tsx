import { ArrowRight } from '@/lib/icons';
import { GlassCard } from '@/components/ui/glass-card';
import { OTOCountdown } from './OTOCountdown';
import HeroSection from '@/components/sections/HeroSection';
import { useState, useEffect } from 'react';

interface OTOProductDisplayProps {
  onExpired: () => void;
}

export function OTOProductDisplay({ onExpired }: OTOProductDisplayProps) {
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
      <section aria-label="Email z mojego biurka" className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl border border-border/70 shadow-2xl overflow-hidden">
            {/* macOS window title bar */}
            <div className="bg-muted/40 dark:bg-muted/30 border-b border-border px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-black/10"></span>
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10"></span>
                <span className="h-3 w-3 rounded-full bg-[#28c840] border border-black/10"></span>
              </div>
              <div className="text-xs text-muted-foreground select-none">Email z mojego biurka</div>
              <div className="w-14" />
            </div>
            {/* Gmail header */}
            <div className="bg-card border-b border-border p-4">
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
            <div className="p-6 bg-card">
              <div className="space-y-4 text-base leading-relaxed">
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


      {/* Product Section */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <GlassCard className="mb-16" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Co dostajesz w 77 minut</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-lg leading-relaxed">
              <li className="text-foreground">• <strong>7 sprawdzonych technik</strong> w prostych punktach — zero „teorii dla teorii”.</li>
              <li className="text-foreground">• <strong>Po każdej technice jedno zadanie</strong>, które wdrażasz od razu.</li>
              <li className="text-foreground">• <strong>Zero aplikacji</strong> — wystarczy zwykły timer.</li>
              <li className="text-foreground">• <strong>Dostęp natychmiast</strong> po zakupie.</li>
            </ul>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Szybkie przypomnienie technik (po jednym zdaniu)</h3>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {[
              { number: "1", title: "Blokowanie zadań", description: "grupujesz podobne rzeczy w jednym bloku; jedziesz A→B bez postojów." },
              { number: "2", title: "Praca głęboka", description: "25 minut w trybie „samolot”: powiadomienia OFF, Ty ON." },
              { number: "3", title: "Zatrudnij pierwszego robota", description: "Zapier/IFTTT/Make: zaloguj → połącz → start; ⭐ w Gmailu = zadanie w Todoist." },
              { number: "4", title: "Hackowanie własnego maila", description: "plusy i kropki (ludwik+fb@… / lu.dw.ik@…) = porządek, filtry i automaty." },
              { number: "5", title: "Werwa do pracy", description: "zrób „próżnię”: usuń Gmail z telefonu na weekend, zainstaluj w poniedziałek." },
              { number: "6", title: "Estymowanie czasochłonności", description: "doliczasz połowę czasu i pracujesz spokojnie, bez czerwonego pola." },
              { number: "7", title: "Otaczanie się skutecznymi Ludźmi", description: "silent co-working i społeczność siadlak.wip (PL kanał) trzymają Cię w działaniu." }
            ].map((t, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {t.number}
                </div>
                <div className="text-foreground">
                  <p className="leading-relaxed"><strong>{t.title}</strong> — {t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
        
        {/* Course Preview Visual */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center px-4 md:px-8">
            <img 
              src="/lovable-uploads/d08df776-7e4c-49e0-aa5a-b43910072e53.png"
              alt="7 Technik Produktywności - Podgląd kursu na różnych urządzeniach"
              className="max-h-full w-auto max-w-full object-contain object-center mx-auto"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </div>


      {/* Wartość vs. cena */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wartość vs. cena</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-6 p-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Regularnie</p>
                  <p className="text-2xl font-bold line-through text-muted-foreground">497 PLN</p>
                </div>
                <div className="text-3xl text-muted-foreground">→</div>
                <div>
                  <p className="text-sm text-primary font-medium mb-1">Dla Ciebie - mojego Gościa — i <s>tylko teraz</s></p>
                  <p className="text-4xl font-bold text-primary">77 PLN</p>
                </div>
              </div>
            </div>
            
            <p className="text-center">
              To <strong>jednorazowa oferta</strong> aktywna <strong>przez 7 minut</strong> od kliknięcia.
            </p>
            
            <div className="text-center">
              <p className="mb-3 text-muted-foreground"><strong>Zegar tyka:</strong></p>
              <div className="max-w-md mx-auto">
                <OTOCountdown onExpired={onExpired} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Po czasie wraca katalogowa cena 497 PLN.</p>
              <div className="mt-6">
                <a href="https://cart.easy.tools/checkout/siadlak/7technik?plan=price_1QY7IaLDgmse4Mm3CGLkB7VI&lang=pl" className="w-full md:w-auto bg-gradient-locked-cta text-locked-white px-8 py-6 rounded-xl text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Dodaj kurs 7 Technik Produktywności za 77 PLN">
                  Dodaj kurs za 77 PLN
                  <ArrowRight className="h-6 w-6" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground">Dostęp natychmiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Urgency Section */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-destructive">Ważne: masz 7 minut</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="font-medium">
                 Cenię sobie ludzi decyzyjnych. I mówiąc wprost: to jest świetna oferta. Nie potrzebujesz więcej informacji. Dlatego system automatycznie wyłączy tę ofertę za 7 minut od otwarcia tej strony.
                </p>
                
                <p className="text-muted-foreground">
                  Dlaczego? Bo albo widzisz w tym wartość, albo nie. Nie potrzebujesz godziny na zastanawianie się.
                </p>
                
                <p className="text-muted-foreground">
                  Jeśli 77 PLN za techniki, które mogą zmienić sposób, w jaki pracujesz, to dla Ciebie za dużo - okej, spotkamy się na webinarze i pokażę Ci jak pracuję. 
                </p>
                
                <p className="text-lg font-medium text-primary">
                  Jeśli jednak (tak jak ja) widzisz sens w tym, żeby mieć ten fundament już teraz - kliknij poniżej.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/7e50788e-1ddd-4b3c-900f-62fd313d17e5.png"
                alt="7 Technik Produktywności – podgląd kursu na telewizorze"
                className="w-full h-auto rounded-xl shadow-2xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <OTOCountdown onExpired={onExpired} />
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <GlassCard className="max-w-md mx-auto" padding="lg">
             <a href="https://cart.easy.tools/checkout/siadlak/7technik?plan=price_1QY7IaLDgmse4Mm3CGLkB7VI&lang=pl" className="w-full bg-gradient-locked-cta text-locked-white px-8 py-6 rounded-xl text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6 flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Tak, chcę 7 Technik Produktywności za 77 PLN">
               Tak, chcę 7 Technik Produktywności za 77 PLN
               <ArrowRight className="h-6 w-6" />
             </a>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <div className="flex flex-col items-center">
                <span>Bezpieczne płatności</span>
              </div>
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Dostęp NATYCHMIAST</span>
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Dostęp LIFETIME</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="/lovable-uploads/payment-processors.png"
                alt="Dostępne metody płatności: Apple Pay, Google Pay, BLIK, Przelewy24, Visa, Mastercard"
                className="h-8 w-auto object-contain opacity-80"
                loading="lazy"
              />
            </div>
          </GlassCard>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <GlassCard variant="subtle" className="max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              <strong>PS.</strong> Nie będzie przypominających maili. Nie będzie "ostatniej szansy". To jest jedyna okazja, żeby dostać ten kurs w tej (tak, wiem, że nieprzyzwoicie niskiej) cenie. Decyzja należy do Ciebie.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}