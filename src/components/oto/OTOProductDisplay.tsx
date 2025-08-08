import { ArrowRight } from '@/lib/icons';
import { GlassCard } from '@/components/ui/glass-card';
import { OTOCountdown } from './OTOCountdown';

interface OTOProductDisplayProps {
  onExpired: () => void;
}

export function OTOProductDisplay({ onExpired }: OTOProductDisplayProps) {
  return (
    <div className="min-h-screen">
      {/* Hero gradient background */}
      <div className="relative bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div className="container mx-auto px-4 max-w-4xl py-16">
          {/* Opening Message */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              7 Technik Produktywności — 77 minut, które ustawiają Ci dzień
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-foreground font-medium">Dziękuję. Serio.</p>
              <p>Zapisałeś się na mój webinar — to dla mnie sygnał, że inwestujesz w siebie.</p>
              <p>
                Skoro jesteś <strong>moim gościem</strong>, chcę się odwdzięczyć.
              </p>
              <p className="text-foreground">
                Dam Ci dostęp do krótkiego, konkretnego kursu — esencji mojej pracy nad skutecznością.
              </p>
              <p className="text-muted-foreground">
                Nie chodzi mi o sprzedaż. <strong>Chcę, żebyś to miał</strong>. Dlatego schodzę z ceną tak nisko, jak potrafię.
              </p>
              <p className="text-foreground">
                Weź to ode mnie i użyj dziś — jutro poczujesz różnicę.
              </p>
            </div>
          </div>
        </div>
      </div>

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
              { number: "4", title: "Hack własnego maila", description: "plusy i kropki (ludwik+fb@… / lu.dw.ik@…) = porządek, filtry i automaty." },
              { number: "5", title: "Werwa do pracy", description: "zrób „próżnię”: usuń Gmail z telefonu na weekend, zainstaluj w poniedziałek." },
              { number: "6", title: "Oszacowania +50%", description: "doliczasz połowę czasu i pracujesz spokojnie, bez czerwonego pola." },
              { number: "7", title: "Otaczanie się skutecznymi", description: "silent co-working i społeczność siadlak.wip (PL kanał) trzymają Cię w działaniu." }
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
      </div>

      {/* Wartość vs. cena */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wartość vs. cena (gest gospodarza)</h2>
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
                  <p className="text-sm text-primary font-medium mb-1">Dla gości webinaru — teraz</p>
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
              <p className="mt-3 text-sm text-muted-foreground">Po czasie wraca cena 497 PLN.</p>
              <div className="mt-6">
                <button className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-6 rounded-xl text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
                  Dodaj kurs za 77 PLN
                  <ArrowRight className="h-6 w-6" />
                </button>
                <p className="mt-2 text-sm text-muted-foreground">Dostęp natychmiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Urgency Section */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-destructive">Ważne: masz 7 minut</h2>
          
          <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="font-medium">
              To nie jest sztuczka marketingowa. System automatycznie wyłączy tę ofertę za 7 minut od otwarcia tej strony.
            </p>
            
            <p className="text-muted-foreground">
              Dlaczego? Bo albo widzisz w tym wartość, albo nie. Nie potrzebujesz godziny na zastanawianie się.
            </p>
            
            <p className="text-muted-foreground">
              Jeśli 77 PLN za techniki, które mogą zmienić sposób, w jaki pracujesz, to dla Ciebie za dużo - okej, spotkamy się na webinarze.
            </p>
            
            <p className="text-lg font-medium text-primary">
              Jeśli widzisz sens w tym, żeby mieć ten fundament już teraz - kliknij poniżej.
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <OTOCountdown onExpired={onExpired} />
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <GlassCard className="max-w-md mx-auto" padding="lg">
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-6 rounded-xl text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6 flex items-center justify-center gap-3">
              Tak, chcę 7 Technik Produktywności za 77 PLN
              <ArrowRight className="h-6 w-6" />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Bezpieczne płatności</span>
              <span>•</span>
              <span>SSL</span>
              <span>•</span>
              <span>Natychmiastowy dostęp</span>
            </div>
          </GlassCard>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <GlassCard variant="subtle" className="max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              <strong>PS.</strong> Nie będzie przypominających maili. Nie będzie "ostatniej szansy". To jest jedyna okazja, żeby dostać ten kurs w tej cenie. Decyzja należy do Ciebie.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}