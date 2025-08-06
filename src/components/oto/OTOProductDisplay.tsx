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
              Właśnie zapisałeś się na mój webinar.
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p>
                <span className="font-semibold text-primary">Mój</span> webinar. A to oznacza, że jesteś moim gościem.
              </p>
              
              <p className="text-muted-foreground">
                To oznacza też, że traktuję Cię z należbym moim gościom szacunkiem. I zacznę od tego, że chcę Ci podziękować za to, że… jesteś.
              </p>
              
              <p className="text-2xl font-medium text-foreground">Serio.</p>
              
              <p className="text-muted-foreground">
                Bo wiem, jak to wygląda. Kolejny webinar, kolejna obietnica zmiany życia, kolejne "musisz tylko chcieć". Znamy to wszyscy.
              </p>
              
              <p className="text-foreground">
                Ale Ty mimo to kliknąłeś. Zapisałeś się. Chcesz dać sobie ten czas. Chcesz sięgnąć kawałek poza swoją strefę komfortu.
              </p>
              
              <p className="text-lg font-medium text-primary border-l-4 border-primary/30 pl-4 italic">
                I właśnie dlatego mam dla ciebie coś, co przygotowałem jako fundament do tego, o czym będziemy rozmawiać na webinarze.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <GlassCard className="mb-16" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">7 Technik Produktywności</h2>
            <p className="text-xl text-muted-foreground mb-2">Twój pierwszy krok</p>
            <p className="text-lg font-medium">77 minut materiału, który nauczy Cię siedmiu technik</p>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {[
              {
                number: "1",
                title: "Blokowanie zadań",
                description: "grupujesz podobne aktywności w bloki. Koniec z przeskakiwaniem mail-telefon-mail-spotkanie. Najpierw wszystkie maile, potem telefony. Jak jazda z punktu A do B - nie zatrzymujesz się na każdą myśl."
              },
              {
                number: "2", 
                title: "Praca głęboka",
                description: "wyłączasz powiadomienia na 25 minut. Tyle. Żaden Facebook, żaden Instagram. Czyja agenda się liczy - twoja czy ich?"
              },
              {
                number: "3",
                title: "Zatrudnij pierwszego robota", 
                description: "Zapier, IFTTT, Make. Wszystkie mają darmowe plany. Gmail z gwiazdką automatycznie staje się zadaniem w Todoist. Trzy kroki: zaloguj się, połącz aplikacje, kliknij start."
              },
              {
                number: "4",
                title: "Hack własnego maila",
                description: "ludwik@gmail.com = ludwik+facebook@gmail.com = lu.dw.ik@gmail.com. Jeden mail, różne tożsamości. Różne filtry. Różne automatyzacje."
              },
              {
                number: "5", 
                title: "Werwa do pracy",
                description: "usuń Gmaila z telefonu na weekend. Zainstaluj w poniedziałek. Zobaczysz, co się stanie. FOMW (Fear of Missing Work) zamiast prokrastynacji."
              },
              {
                number: "6",
                title: "Oszacowania +50%",
                description: "myślisz, że zadanie zajmie godzinę? Zaplanuj półtorej. Silnik na komfortowych obrotach pracuje dłużej niż na maksymalnych."
              },
              {
                number: "7",
                title: "Otaczanie się skutecznymi", 
                description: "jesteś wypadkową 5 osób, którymi się otaczasz. Silent co-working, społeczności skupione na działaniu. Konkretne miejsca, gdzie to znajdziesz."
              }
            ].map((technique, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {technique.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{technique.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{technique.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Why Now Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dlaczego ci to oferuję teraz?</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-center text-xl font-medium text-primary">
              Bo jestem pewny, że webinar będzie wartościowy. Na tyle pewny, że chcę Ci dać solidny fundament już teraz.
            </p>
            
            <p className="text-muted-foreground">
              Te techniki testowałem na sobie przez 19 lat. W Microsoft, Hewlett Packard, General Electric. W polskiej policji, norweskiej policji, Departamencie Obrony USA. Podczas 256+ dni vloga codziennie. Podczas 100+ lotów rocznie przed pandemią.
            </p>
            
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-destructive/10 to-primary/10 rounded-xl border border-primary/20">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Normalna cena</p>
                  <p className="text-2xl font-bold line-through text-muted-foreground">497 PLN</p>
                </div>
                <div className="text-3xl text-muted-foreground">→</div>
                <div>
                  <p className="text-sm text-primary font-medium mb-1">Dla mojego gościa</p>
                  <p className="text-4xl font-bold text-primary">77 PLN</p>
                </div>
              </div>
            </div>
            
            <p className="text-center font-medium">
              Dlaczego tyle? Bo to nie jest darmowy ebook, który przeczytasz (albo tylko ściągniesz) i zapomnisz. To konkretne techniki, które wdrożysz i zobaczysz różnicę.
            </p>
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