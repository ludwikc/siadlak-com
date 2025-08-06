import { ArrowRight } from '@/lib/icons';
import { GlassCard } from '@/components/ui/glass-card';
import { OTOCountdown } from './OTOCountdown';

interface OTOProductDisplayProps {
  onExpired: () => void;
}

export function OTOProductDisplay({ onExpired }: OTOProductDisplayProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Opening Message */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Właśnie zapisałeś się na mój webinar.
          </h1>
          
          <p className="text-lg mb-4">
            <strong>Mój</strong> webinar. A to oznacza, że jesteś moim gościem.
          </p>
          
          <p className="mb-4">
            To oznacza też, że traktuję Cię z należbym moim gościom szacunkiem. I zacznę od tego, że chcę Ci podziękować za to, że… jesteś.
          </p>
          
          <p className="mb-4">Serio.</p>
          
          <p className="mb-4">
            Bo wiem, jak to wygląda. Kolejny webinar, kolejna obietnica zmiany życia, kolejne "musisz tylko chcieć". Znamy to wszyscy.
          </p>
          
          <p className="mb-4">
            Ale Ty mimo to kliknąłeś. Zapisałeś się. Chcesz dać sobie ten czas. Chcesz sięgnąć kawałek poza swoją strefę komfortu.
          </p>
          
          <p className="mb-8">
            I właśnie dlatego mam dla ciebie coś, co przygotowałem jako fundament do tego, o czym będziemy rozmawiać na webinarze.
          </p>
          
          <hr className="border-border/50 mb-8" />
        </div>

        {/* Product Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">7 Technik Produktywności - Twój pierwszy krok</h2>
          
          <p className="text-lg mb-6">77 minut materiału, który nauczy Cię siedmiu technik:</p>
          
          <div className="space-y-4 mb-8">
            <div>
              <p><strong>1. Blokowanie zadań</strong> - grupujesz podobne aktywności w bloki. Koniec z przeskakiwaniem mail-telefon-mail-spotkanie. Najpierw wszystkie maile, potem telefony. Jak jazda z punktu A do B - nie zatrzymujesz się na każdą myśl.</p>
            </div>
            
            <div>
              <p><strong>2. Praca głęboka</strong> - wyłączasz powiadomienia na 25 minut. Tyle. Żaden Facebook, żaden Instagram. Czyja agenda się liczy - twoja czy ich?</p>
            </div>
            
            <div>
              <p><strong>3. Zatrudnij pierwszego robota</strong> - Zapier, IFTTT, Make. Wszystkie mają darmowe plany. Gmail z gwiazdką automatycznie staje się zadaniem w Todoist. Trzy kroki: zaloguj się, połącz aplikacje, kliknij start.</p>
            </div>
            
            <div>
              <p><strong>4. Hack własnego maila</strong> - ludwik@gmail.com = ludwik+facebook@gmail.com = lu.dw.ik@gmail.com. Jeden mail, różne tożsamości. Różne filtry. Różne automatyzacje.</p>
            </div>
            
            <div>
              <p><strong>5. Werwa do pracy</strong> - usuń Gmaila z telefonu na weekend. Zainstaluj w poniedziałek. Zobaczysz, co się stanie. FOMW (Fear of Missing Work) zamiast prokrastynacji.</p>
            </div>
            
            <div>
              <p><strong>6. Oszacowania +50%</strong> - myślisz, że zadanie zajmie godzinę? Zaplanuj półtorej. Silnik na komfortowych obrotach pracuje dłużej niż na maksymalnych.</p>
            </div>
            
            <div>
              <p><strong>7. Otaczanie się skutecznymi</strong> - jesteś wypadkową 5 osób, którymi się otaczasz. Silent co-working, społeczności skupione na działaniu. Konkretne miejsca, gdzie to znajdziesz.</p>
            </div>
          </div>
          
          <hr className="border-border/50 mb-8" />
        </div>

        {/* Why Now Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Dlaczego ci to oferuję teraz?</h2>
          
          <p className="mb-4">
            Bo jestem pewny, że webinar będzie wartościowy. Na tyle pewny, że chcę Ci dać solidny fundament już teraz.
          </p>
          
          <p className="mb-4">
            Te techniki testowałem na sobie przez 19 lat. W Microsoft, Hewlett Packard, General Electric. W polskiej policji, norweskiej policji, Departamencie Obrony USA. Podczas 256+ dni vloga codziennie. Podczas 100+ lotów rocznie przed pandemią.
          </p>
          
          <p className="mb-4">Normalnie ten kurs kosztuje 497 PLN.</p>
          
          <p className="mb-4">
            Dla Ciebie, jako <strong>mojego gościa</strong> na webinarze - 77 PLN.
          </p>
          
          <p className="mb-8">
            Dlaczego tyle? Bo to nie jest darmowy ebook, który przeczytasz (albo tylko ściągniesz) i zapomnisz. To konkretne techniki, które wdrożysz i zobaczysz różnicę.
          </p>
          
          <hr className="border-border/50 mb-8" />
        </div>

        {/* Urgency Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ważne: masz 7 minut</h2>
          
          <p className="mb-4">
            To nie jest sztuczka marketingowa. System automatycznie wyłączy tę ofertę za 7 minut od otwarcia tej strony.
          </p>
          
          <p className="mb-4">
            Dlaczego? Bo albo widzisz w tym wartość, albo nie. Nie potrzebujesz godziny na zastanawianie się.
          </p>
          
          <p className="mb-4">
            Jeśli 77 PLN za techniki, które mogą zmienić sposób, w jaki pracujesz, to dla Ciebie za dużo - okej, spotkamy się na webinarze.
          </p>
          
          <p className="mb-8">
            Jeśli widzisz sens w tym, żeby mieć ten fundament już teraz - kliknij poniżej.
          </p>
        </div>

        {/* Countdown Timer */}
        <OTOCountdown onExpired={onExpired} className="mb-8" />

        {/* CTA Section */}
        <GlassCard className="text-center mb-8">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-12 py-4 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
            Tak, chcę 7 Technik Produktywności za 77 PLN
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-xs text-muted-foreground">
            Bezpieczne płatności • SSL • Natychmiastowy dostęp
          </p>
        </GlassCard>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <strong>PS.</strong> Nie będzie przypominających maili. Nie będzie "ostatniej szansy". To jest jedyna okazja, żeby dostać ten kurs w tej cenie. Decyzja należy do Ciebie.
          </p>
        </div>
      </div>
    </div>
  );
}