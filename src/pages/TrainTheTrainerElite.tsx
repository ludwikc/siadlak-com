import { Helmet } from 'react-helmet-async';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';

export default function TrainTheTrainerElite() {
  return (
    <div className="min-h-screen bg-luminous-white">
      <Helmet>
        <title>Train The Trainer: Elite Academy | Ludwik C. Siadlak</title>
        <meta name="description" content="Od technika w piwnicy do trenera na scenie Fortune 500: 8 tygodni transformacji" />
      </Helmet>

      {/* SEKCJA 1: HERO */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue text-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Od Technika w Piwnicy do Trenera na Scenie Fortune 500: 8 Tygodni, 40-60 Tysięcy Złotych Dziennie
            </h1>
            
            <p className="text-xl text-silver-mist">
              Jak seniorzy techniczni transformują się w elitarnych trenerów korporacyjnych bez lat Toastmasters i bullshitu
            </p>

            <Button size="lg" className="text-lg px-8 py-6">
              Umów Bezpłatną Sesję Discovery (30 Min)
            </Button>

            {/* Trust bar */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-silver-mist mb-4">Zaufali mi:</p>
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
                <span>US DoD</span>
                <span>NATO</span>
                <span>ING Bank</span>
                <span>Equinor</span>
                <span>Norweska Policja</span>
              </div>
            </div>

            {/* Ticker */}
            <div className="inline-block bg-zenith-gold/20 border border-zenith-gold px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">2 z 8 miejsc pozostało na kohortę Q1 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 2: AGITACJA PROBLEMU */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Znasz to uczucie, prawda?
          </h2>
          
          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed">
            <p>[Problem narrative - 3-4 paragraphs about the basement metaphor, impostor syndrome, watching worse technicians on stages, 800 zł/h ceiling, frustration]</p>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: NIEUDANE ROZWIĄZANIA */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Próbowałeś już "naprawić się", prawda?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-neural-blue">Toastmasters</h3>
              <p className="text-lg text-deep-charcoal/90">[Why it fails - 2-3 paragraphs]</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-neural-blue">Kursy presentation skills</h3>
              <p className="text-lg text-deep-charcoal/90">[Why they're superficial - 2-3 paragraphs]</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-neural-blue">"Fake it till you make it"</h3>
              <p className="text-lg text-deep-charcoal/90">[Why it makes things worse - 2-3 paragraphs]</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-neural-blue">"Po prostu bądź pewny siebie!"</h3>
              <p className="text-lg text-deep-charcoal/90">[Why it's useless advice - 2-3 paragraphs]</p>
            </div>

            <div className="my-12 p-8 bg-neural-blue/10 border-l-4 border-neural-blue">
              <p className="text-xl font-medium text-deep-charcoal italic">
                "Prawdziwy problem nie jest w twoich umiejętnościach. Jest w twojej tożsamości."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: DOWÓD AUTORYTETU */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Skąd wiem, że to działa?
          </h2>

          {/* Stats bar */}
          <div className="mb-12 p-6 bg-luminous-white rounded-xl border border-neural-blue/20">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <span className="block text-3xl font-bold text-neural-blue">19</span>
                <span className="text-sm text-deep-charcoal/70">lat</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-neural-blue">50+</span>
                <span className="text-sm text-deep-charcoal/70">krajów</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-neural-blue">10 000+</span>
                <span className="text-sm text-deep-charcoal/70">przeszkolonych</span>
              </div>
            </div>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <GlassCard key={i} padding="md" className="border border-neural-blue/20">
                <div className="space-y-4">
                  <div className="font-semibold text-sm text-neural-blue">[LOGO]</div>
                  <p className="text-deep-charcoal/90">"[Testimonial quote 2-3 sentences]"</p>
                  <div className="text-sm text-deep-charcoal/70">
                    <div className="font-medium">[Name]</div>
                    <div>[Title]</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA 5: VALUE EQUATION */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tradycyjne podejścia zawodzą
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-deep-charcoal/90">
              [Formula intro - Alex Hormozi Value Equation explanation]
            </p>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neural-blue/10">
                    <th className="p-4 text-left">Kryterium</th>
                    <th className="p-4 text-center">Tradycyjny kurs</th>
                    <th className="p-4 text-center">Elite Academy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neural-blue/20">
                    <td className="p-4">Wymarzony Rezultat</td>
                    <td className="p-4 text-center">5/10</td>
                    <td className="p-4 text-center font-bold text-neural-blue">10/10</td>
                  </tr>
                  <tr className="border-t border-neural-blue/20">
                    <td className="p-4">Prawdopodobieństwo Sukcesu</td>
                    <td className="p-4 text-center">4/10</td>
                    <td className="p-4 text-center font-bold text-neural-blue">9/10</td>
                  </tr>
                  <tr className="border-t border-neural-blue/20">
                    <td className="p-4">Opóźnienie Czasowe</td>
                    <td className="p-4 text-center">3/10</td>
                    <td className="p-4 text-center font-bold text-neural-blue">8/10</td>
                  </tr>
                  <tr className="border-t border-neural-blue/20">
                    <td className="p-4">Wysiłek</td>
                    <td className="p-4 text-center">6/10</td>
                    <td className="p-4 text-center font-bold text-neural-blue">7/10</td>
                  </tr>
                  <tr className="border-t-2 border-neural-blue bg-neural-blue/5">
                    <td className="p-4 font-bold">WYNIK WARTOŚCI</td>
                    <td className="p-4 text-center font-bold">0.83</td>
                    <td className="p-4 text-center font-bold text-neural-blue text-xl">1.25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-neural-blue/10 rounded-xl">
              <p className="text-lg font-medium">
                [Pullout conclusion about 1.25× more value]
              </p>
            </div>

            <p className="text-lg text-deep-charcoal font-medium">
              Bo tradycyjne podejście uczy <strong>JAK</strong> mówić. Moje transformuje <strong>KIM JESTEŚ</strong> gdy mówisz.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 6: TROJAN HORSE REVEAL */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Co naprawdę dostajesz
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-deep-charcoal/90">
              [Hook paragraph - secret that will ruin marketing]
            </p>

            <p className="text-lg text-deep-charcoal/90">
              [Core revelation - transformational coaching disguised as Train The Trainer]
            </p>

            {/* Case studies */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <GlassCard padding="lg" className="border border-neural-blue/20">
                <h3 className="text-xl font-bold mb-4 text-neural-blue">Case Study #1: Anna</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <div>
                    <strong>Problem:</strong> [CEO, victim mindset]
                  </div>
                  <div>
                    <strong>Rzeczywisty problem:</strong> [...]
                  </div>
                  <div>
                    <strong>Metoda:</strong> [...]
                  </div>
                  <div>
                    <strong>Moment przełomu:</strong> [...]
                  </div>
                  <div>
                    <strong>Rezultat:</strong> [victim → sprawca]
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="border border-neural-blue/20">
                <h3 className="text-xl font-bold mb-4 text-neural-blue">Case Study #2: Lucja</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <div>
                    <strong>Problem:</strong> [Entrepreneur, burnout]
                  </div>
                  <div>
                    <strong>Rzeczywisty problem:</strong> [...]
                  </div>
                  <div>
                    <strong>Metoda:</strong> [...]
                  </div>
                  <div>
                    <strong>Moment przełomu:</strong> [...]
                  </div>
                  <div>
                    <strong>Rezultat:</strong> [wypalenie → spokój]
                  </div>
                </div>
              </GlassCard>
            </div>

            <p className="text-lg font-medium text-deep-charcoal">
              Zauważ: Żadna z nich nie przyszła po "coaching transformacyjny"...
            </p>

            <p className="text-xl font-bold text-neural-blue">
              Dokładnie jak ty. Przychodzisz po "Train The Trainer". Dostajesz rekonstrukcję tożsamości.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 7: 8-TYGODNIOWY BREAKDOWN */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Co dokładnie dostajesz w osiem tygodni
          </h2>

          <p className="text-lg text-deep-charcoal/90 mb-12">
            Tu jest, gdzie to staje się realne...
          </p>

          <div className="space-y-8">
            {/* Week 1-2 */}
            <GlassCard padding="lg" className="border border-neural-blue/20 relative">
              <div className="absolute top-4 right-4 bg-neural-blue/10 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-neural-blue">Wartość: 12 000 zł</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-neural-blue">TYDZIEŃ 1-2: Zmiana Mentalności Elity</h3>
              <p className="text-lg mb-4 text-deep-charcoal/90">[Intro sentence]</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-deep-charcoal">Co dostajesz:</h4>
                <div className="space-y-2">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 1]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 2]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 3]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-deep-charcoal">Dlaczego to działa:</h4>
                <p className="text-deep-charcoal/90">[Explanation 2-3 paragraphs]</p>
              </div>
            </GlassCard>

            {/* Week 3-4 */}
            <GlassCard padding="lg" className="border border-neural-blue/20 relative">
              <div className="absolute top-4 right-4 bg-neural-blue/10 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-neural-blue">Wartość: 10 000 zł</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-neural-blue">TYDZIEŃ 3-4: Architektura Emocjonalna</h3>
              <p className="text-lg mb-4 text-deep-charcoal/90">[Intro sentence]</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-deep-charcoal">Co dostajesz:</h4>
                <div className="space-y-2">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 1]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 2]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 3]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-deep-charcoal">Dlaczego to działa:</h4>
                <p className="text-deep-charcoal/90">[Explanation 2-3 paragraphs]</p>
              </div>
            </GlassCard>

            {/* Week 5-6 */}
            <GlassCard padding="lg" className="border border-neural-blue/20 relative">
              <div className="absolute top-4 right-4 bg-neural-blue/10 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-neural-blue">Wartość: 8 000 zł</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-neural-blue">TYDZIEŃ 5-6: Warsztat Mistrza</h3>
              <p className="text-lg mb-4 text-deep-charcoal/90">[Intro sentence]</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-deep-charcoal">Co dostajesz:</h4>
                <div className="space-y-2">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 1]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 2]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 3]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-deep-charcoal">Dlaczego to działa:</h4>
                <p className="text-deep-charcoal/90">[Explanation 2-3 paragraphs]</p>
              </div>
            </GlassCard>

            {/* Week 7 */}
            <GlassCard padding="lg" className="border border-neural-blue/20 relative">
              <div className="absolute top-4 right-4 bg-neural-blue/10 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-neural-blue">Wartość: 10 000 zł</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-neural-blue">TYDZIEŃ 7: System Pozyskiwania Klientów</h3>
              <p className="text-lg mb-4 text-deep-charcoal/90">[Intro sentence]</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-deep-charcoal">Co dostajesz:</h4>
                <div className="space-y-2">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 1]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 2]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 3]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-deep-charcoal">Dlaczego to działa:</h4>
                <p className="text-deep-charcoal/90">[Explanation 2-3 paragraphs]</p>
              </div>
            </GlassCard>

            {/* Week 8+ */}
            <GlassCard padding="lg" className="border border-neural-blue/20 relative bg-secondary/20">
              <div className="absolute top-4 right-4 bg-neural-blue/10 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-neural-blue">Wartość: 20 000 zł</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-neural-blue flex items-center gap-2">
                TYDZIEŃ 8+: Sieć Absolwentów Dożywotnio
                <span className="text-2xl">∞</span>
              </h3>
              <p className="text-lg mb-4 text-deep-charcoal/90">[Intro sentence]</p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-deep-charcoal">Co dostajesz:</h4>
                <div className="space-y-2">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 1]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 2]</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> [Item 3]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-deep-charcoal">Dlaczego to działa:</h4>
                <p className="text-deep-charcoal/90">[Explanation 2-3 paragraphs]</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SEKCJA 8: FULL STACK VALUE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-deep-charcoal text-center">
            Pełny stos wartości
          </h2>

          <div className="max-w-[600px] mx-auto space-y-4">
            {[
              'Tydzień 1-2: Zmiana Mentalności Elity: 12 000 zł',
              'Tydzień 3-4: Architektura Emocjonalna: 10 000 zł',
              'Tydzień 5-6: Warsztat Mistrza: 8 000 zł',
              'Tydzień 7: System Pozyskiwania Klientów: 10 000 zł',
              'Tydzień 8+: Sieć Absolwentów Dożywotnio: 20 000 zł',
              '8 sesji mentoringu 1-na-1: 24 000 zł',
              'Dostęp Slack + społeczność: 12 000 zł',
              'Nagrania wszystkich sesji: 8 000 zł',
              'Metodologia i materiały: 12 000 zł',
              '3 miesiące wsparcia post-program: 12 000 zł'
            ].map((item, i) => {
              const [name, price] = item.split(': ');
              return (
                <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-neural-blue/20">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" />
                    <span className="text-deep-charcoal">{name}</span>
                  </div>
                  <span className="font-bold text-neural-blue whitespace-nowrap">{price}</span>
                </div>
              );
            })}

            <div className="pt-6 mt-6 border-t-2 border-neural-blue">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-deep-charcoal">
                  ŁĄCZNA WARTOŚĆ: <span className="text-neural-blue">128 000 zł</span>
                </div>
                
                <div className="h-px bg-neural-blue/30 my-8"></div>

                <div className="text-3xl font-bold text-zenith-gold">
                  TWOJA INWESTYCJA: 74 000 zł
                </div>

                <div className="text-xl font-semibold text-neural-blue">
                  OSZCZĘDZASZ: 54 000 zł
                </div>

                <div className="text-sm text-deep-charcoal/70 pt-2">
                  (Lub 3 raty × 26 000 zł)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 9: PRICE JUSTIFICATION (ROI MATH) */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego 74 000 zł to właściwie za mało
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-deep-charcoal/90">
              [Hook about Hormozi and "obscene amounts of money"]
            </p>

            {/* Scenario cards */}
            <div className="space-y-6">
              <GlassCard padding="lg" className="border border-neural-blue/20">
                <h3 className="text-xl font-bold mb-4 text-deep-charcoal">Scenariusz A: Zostajesz tam gdzie jesteś</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <p className="font-mono text-sm bg-secondary/20 p-3 rounded">
                    800 zł/h × 160h = 128k/m → 1.5M/rok → 7.68M/5 lat
                  </p>
                  <p>[But: Still in basement, impostor syndrome, suffering]</p>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="border border-neural-blue/20">
                <h3 className="text-xl font-bold mb-4 text-neural-blue">Scenariusz B (konserwatywny): Stajesz się trenerem</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <p className="font-mono text-sm bg-neural-blue/5 p-3 rounded">
                    40k/dzień × 2 dni = 80k/m → 960k/rok → 4.8M/5 lat
                  </p>
                  <p>[Assumes burnout in Scenario A]</p>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="border border-zenith-gold/30 bg-zenith-gold/5">
                <h3 className="text-xl font-bold mb-4 text-zenith-gold">Scenariusz B (realistyczny):</h3>
                <div className="space-y-4">
                  <p className="font-mono text-sm bg-zenith-gold/10 p-3 rounded">
                    60k/dzień × 3 dni = 180k/m → 2.16M/rok → 10.8M/5 lat
                  </p>
                  <p className="text-2xl font-bold text-neural-blue">Różnica: +3.12M w 5 lat</p>
                </div>
              </GlassCard>
            </div>

            <div className="p-8 bg-neural-blue/10 rounded-xl text-center">
              <div className="text-3xl font-bold text-neural-blue mb-2">
                ROI: 42×
              </div>
              <div className="text-lg text-deep-charcoal/90">
                Inwestycja: 74 000 zł
              </div>
            </div>

            <div className="prose prose-lg">
              <p className="text-deep-charcoal/90">[Virtuous Cycle of Price explanation from Hormozi]</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 10: DUAL GUARANTEE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Jak wiem, że to zadziała dla mnie?
          </h2>

          <p className="text-xl mb-12 text-deep-charcoal font-medium">
            Dwie gwarancje. Obie bezwarunkowe.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlassCard padding="lg" className="border border-neural-blue/20">
              <div className="inline-block bg-neural-blue text-white px-4 py-2 rounded-lg mb-4 font-bold">
                7-DNIOWY ZWROT PIENIĘDZY
              </div>
              <p className="text-lg text-deep-charcoal/90 mb-4">
                Po pierwszym tygodniu... 100% zwrot... zero pytań.
              </p>
              <p className="text-deep-charcoal/70">
                [Dlaczego: explanation from document]
              </p>
            </GlassCard>

            <GlassCard padding="lg" className="border border-neural-blue/20">
              <div className="inline-block bg-zenith-gold text-white px-4 py-2 rounded-lg mb-4 font-bold">
                12-MIESIĘCZNA GWARANCJA KONTRAKTU
              </div>
              <p className="text-lg text-deep-charcoal/90 mb-4">
                Jeśli w 12 miesięcy nie zdobędziesz kontraktu 40k+... 3 miesiące mentoringu bezpłatnie.
              </p>
              <p className="text-deep-charcoal/70">
                [Dlaczego: explanation from document]
              </p>
            </GlassCard>
          </div>

          <p className="text-sm text-deep-charcoal/70 italic">
            Ale szczerze? Jeśli przejdziesz przez 8 tygodni i nie dostaniesz kontraktu... to znaczy że nie wykonałeś pracy.
          </p>
        </div>
      </section>

      {/* SEKCJA 11: SCARCITY */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tylko osiem miejsc (i dlaczego to prawda)
          </h2>

          <div className="space-y-6 text-lg text-deep-charcoal/90">
            <p className="font-medium">
              To nie jest fałszywy deficyt. Większość marketerów mówi "tylko 5 miejsc!", potem nagle "otwieramy 3 dodatkowe!". Bzdura.
            </p>

            <div className="p-6 bg-neural-blue/5 rounded-xl border border-neural-blue/20">
              <p className="font-mono text-sm">
                8 klientów × 8 tygodni × 2h średnio = 128h + Slack + przygotowanie
              </p>
            </div>

            <p>
              Więcej? Jakość spada. Wolę 8 transformowanych klientów niż 50 przeciętnych rezultatów.
            </p>

            <div className="p-6 bg-zenith-gold/10 rounded-xl border border-zenith-gold/30">
              <p className="font-bold text-zenith-gold mb-2">Aktualnie pozostały 2 miejsca na Q1 2025.</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Następna rekrutacja: Q3 2025.</p>
              <p>Prawdopodobnie 84 000-88 000 zł.</p>
              <p className="text-sm text-deep-charcoal/70">Historycznie podnoszę ceny o 15-20% rocznie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 12: QUALIFICATION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Kim musisz być, żeby to wziąć
          </h2>

          <p className="text-lg mb-12 text-deep-charcoal/90">
            Tu jest część gdzie większość stron mówi "KLIKNIJ TERAZ!". Pieprzyć to. Nie każdy się kwalifikuje.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Not for */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-deep-charcoal mb-6">To NIE jest dla:</h3>
              <div className="space-y-3">
                {[
                  '[Punkt 1]',
                  '[Punkt 2]',
                  '[Punkt 3]',
                  '[Punkt 4]',
                  '[Punkt 5]'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span className="text-deep-charcoal/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Is for */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neural-blue mb-6">To JEST dla:</h3>
              <div className="space-y-3">
                {[
                  '[Punkt 1]',
                  '[Punkt 2]',
                  '[Punkt 3]',
                  '[Punkt 4]',
                  '[Punkt 5]',
                  '[Punkt 6]'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" />
                    <span className="text-deep-charcoal/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Discovery Session Process */}
          <div className="space-y-6">
            <p className="text-lg font-medium text-deep-charcoal">
              Jeśli to ty – umów Sesję Discovery (30 minut):
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <p className="text-deep-charcoal/90">[Co się dzieje krok 1]</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <p className="text-deep-charcoal/90">[Co się dzieje krok 2]</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <p className="text-deep-charcoal/90">[Co się dzieje krok 3]</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <p className="text-deep-charcoal/90">[Co się dzieje krok 4]</p>
              </div>
            </div>

            <p className="text-lg font-medium text-neural-blue">
              Decyzja w 24 godziny.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 13: FINAL CLOSE */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Słowa finalne
          </h2>

          <p className="text-lg mb-12 text-deep-charcoal/90">
            Skończę tak jak zacząłem: brutalnie. Masz dwa wybory.
          </p>

          <div className="space-y-6 mb-12">
            {/* Choice A */}
            <GlassCard padding="lg" className="bg-secondary/50 border border-neural-blue/20">
              <h3 className="text-xl font-bold mb-4 text-deep-charcoal">Wybór A: Zostań tam gdzie jesteś</h3>
              <div className="space-y-4 text-deep-charcoal/80">
                <p>[3-4 paragraphs about what happens in 5 years - realistic, slightly depressive tone]</p>
              </div>
            </GlassCard>

            <div className="text-center text-4xl font-bold text-neural-blue py-4">
              LUB
            </div>

            {/* Choice B */}
            <GlassCard padding="lg" className="bg-gradient-to-br from-neural-blue/5 to-zenith-gold/5 border border-neural-blue/30">
              <h3 className="text-xl font-bold mb-4 text-neural-blue">Wybór B: Transformuj się</h3>
              <div className="space-y-4 text-deep-charcoal/90">
                <p>[3-4 paragraphs about what happens in 5 years - expansive, possibility-focused tone]</p>
              </div>
            </GlassCard>
          </div>

          {/* Social proof mini-section */}
          <div className="space-y-3 mb-12 text-deep-charcoal/90">
            <p><strong>Anna</strong> wybrała Wybór B...</p>
            <p><strong>Lucja</strong> wybrała Wybór B...</p>
            <p><strong>30+ klientów Fortune 500/NATO</strong> wybrało Wybór B...</p>
          </div>

          <div className="p-8 bg-neural-blue/10 rounded-xl mb-8">
            <p className="text-xl font-bold text-neural-blue text-center">
              Pytanie nie jest "czy to zadziała". Pytanie jest: "Czy TY jesteś gotowy?"
            </p>
          </div>

          <div className="space-y-6 text-lg text-deep-charcoal/90">
            <p>[Final filter paragraph 1 - "jeśli nie jesteś gotowy... nie klikaj"]</p>
            <p>[Final filter paragraph 2]</p>
            <p>[Final filter paragraph 3]</p>
          </div>

          <div className="p-6 bg-zenith-gold/10 rounded-xl my-8">
            <p className="text-lg font-medium text-deep-charcoal">
              Ale jeśli czytasz to i czujesz w żołądku że to jest moment...
            </p>
          </div>

          <p className="text-center text-deep-charcoal/70">
            30 minut. Zoom. Sprawdzimy czy pasujesz. Następna rekrutacja Q3 2025.
          </p>
        </div>
      </section>

      {/* SEKCJA 14: CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center space-y-8">
            <Button size="lg" className="text-xl px-12 py-8 min-h-[60px]">
              UMÓW SESJĘ DISCOVERY (30 MIN) – BEZPŁATNIE
            </Button>

            <p className="text-sm text-deep-charcoal/70">
              Tylko 2 miejsca pozostały Q1 2025
            </p>

            <div className="h-16"></div>

            {/* P.S. Section */}
            <div className="text-left space-y-4 pt-8 border-t border-neural-blue/20">
              <p className="text-lg">
                <span className="italic font-medium">P.S.</span> – Hormozi mówi: "Najlepszy czas żeby zacząć był 5 lat temu. Drugi najlepszy czas to teraz."
              </p>
              <p className="text-deep-charcoal/90">
                [2-3 paragraphs final push from document]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
