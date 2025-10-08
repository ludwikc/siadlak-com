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
            <p>
              Siedzisz w piwnicy. Dosłownie lub mentalnie. Czternasta godzina przed kodem. Twoja wiedza techniczna jest doskonała – mogłabyś uczyć tego na MIT.
            </p>

            <p>
              Ale gdy wyobrażasz sobie siebie na scenie przed pięciuset ludźmi...<br />
              <span className="block mt-2">...czujesz, jak żołądek się zaciska.</span>
            </p>

            <p>
              Impostor syndrome. Ten cichy głos, który mówi: „Kto ja jestem, żeby ich uczyć? Są lepsi ode mnie. Zobaczą, że blefuję. Spieprzę to na żywo."
            </p>

            <p>
              I więc zostajesz przy bezpiecznej opcji. Kontrakty za 800 złotych na godzinę. Projekty. Konsulting. Dobre pieniądze.
            </p>

            <p>
              Ale nie to, o czym marzyłeś.
            </p>

            <p>
              Bo widzisz innych – czasem gorszych technicznie – którzy stoją na scenach. Którzy dostają 40 tysięcy złotych za dzień szkolenia. Których zapraszają Fortune 500. Których traktują jak ekspertów, nie jak „kolejnego dewelopera".
            </p>

            <p>
              I zadajesz sobie pytanie: „Dlaczego nie ja?"
            </p>

            <p className="font-semibold">
              Odpowiedź jest prosta. I brutalna.
            </p>

            <p>
              Nie chodzi o twoją wiedzę techniczną. Nigdy nie chodziło.
            </p>

            <p>
              Chodzi o to, kim jesteś, gdy stajesz przed ludźmi.
            </p>

            <p className="text-xl font-bold text-deep-charcoal">
              I to można zmienić. W osiem tygodni.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: NIEUDANE ROZWIĄZANIA */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Próbowałeś już „naprawić się", prawda?
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p>
              Może to był <strong>Toastmasters</strong>. „Po prostu ćwicz wystąpienia publiczne!" Fajnie. Poza tym, że Toastmasters uczy, jak mówić, nie jak być kimś wartym słuchania.
            </p>

            <p>
              Może to był <strong>kurs „presentation skills"</strong>. Slajdy. Struktura. Storytelling. Świetnie. Ale nadal czułeś się jak oszust recytujący cudze skrypty.
            </p>

            <p>
              Może to było klasyczne <strong>„fake it till you make it"</strong>. Najgorszy advice wszech czasów. Bo nie możesz podrobić obecności. Ludzie czują, że to nie jest prawdziwe. A ty czujesz się jeszcze gorzej, bo teraz jesteś świadomym oszustem.
            </p>

            <p>
              Lub – mój ulubiony – <strong>„po prostu bądź pewny siebie!"</strong>
            </p>

            <p>
              Aha. Dzięki. Super pomocne. Jakbym nie wpadł na to sam.
            </p>

            <p className="font-semibold text-xl pt-6">
              Tutaj jest problem z tym wszystkim:
            </p>

            <p className="font-medium">
              Żadne z tych rozwiązań nie dotyka rzeczywistego problemu.
            </p>

            <p>
              Rzeczywisty problem nie jest w twoich umiejętnościach prezentacyjnych. Nie jest w „pewności siebie".
            </p>

            <p className="font-bold text-xl text-neural-blue">
              Rzeczywisty problem jest w twojej tożsamości.
            </p>

            <div className="my-12 p-8 bg-secondary/30 rounded-xl border-l-4 border-neural-blue">
              <p className="mb-4">
                Widzisz siebie jako <span className="italic">„technika, który czasem uczy"</span>. Nie jako <span className="italic font-semibold">„trenera światowej klasy, który zna też technologię"</span>.
              </p>
              <p className="font-medium">
                Ta różnica? To przepaść wartości kilkuset tysięcy złotych w ciągu następnej dekady.
              </p>
            </div>

            <p>
              I <strong>NIE</strong> zamkniesz tej przepaści kolejnym kursem o tym, jak robić lepsze slajdy.
            </p>

            <p className="font-semibold">
              Zamkniesz ją, przebudowując swoją tożsamość od fundamentów.
            </p>

            <p>
              A to wymaga kogoś, kto:
            </p>

            <div className="pl-6 space-y-3 my-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Zrobił to sam (19 lat, 50+ krajów, 10 000+ przeszkolonych ludzi)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Rozumie, że nauczanie to nie technika, to transformacja</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>I wie, jak przeprowadzić cię przez tę transformację bez lat terapii</p>
              </div>
            </div>

            <div className="my-12 p-8 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10 rounded-xl border border-neural-blue/30">
              <p className="text-2xl font-bold text-neural-blue mb-4">
                Witaj w Train The Trainer: Elite Academy.
              </p>
              <p className="text-xl font-medium text-deep-charcoal">
                To nie jest kurs. To jest ośmiotygodniowa rekonstrukcja twojej tożsamości.
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

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p>
              <strong>19 lat. 2000+ osób.</strong> Każdy poziom – od juniorów po dekorowanych generałów (dwóch, ale to jest top of the top).
            </p>

            <p>
              Zanim Ci powiem, <strong>jak</strong> to działa, pozwól, że Ci pokażę, <strong>że</strong> to działa.
            </p>

            <p className="font-medium">
              Ponieważ jedyną rzeczą, która bije świetny marketing, jest dowód.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mb-12 p-6 bg-luminous-white rounded-xl border border-neural-blue/20">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <span className="block text-4xl font-bold text-neural-blue">19</span>
                <span className="text-sm text-deep-charcoal/70">lat</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-neural-blue">50+</span>
                <span className="text-sm text-deep-charcoal/70">krajów</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-neural-blue">10 000+</span>
                <span className="text-sm text-deep-charcoal/70">przeszkolonych</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p className="font-medium">
              A ja mam dowody z:
            </p>

            <div className="space-y-4 pl-6">
              <p>
                <strong>US Department of Defense:</strong> „Exceptional training methodology that transformed our technical capabilities."
              </p>
              <p>
                <strong>NATO Training Program:</strong> „Very experienced and knowledgeable, adapted explanations to the knowledge level of participants."
              </p>
              <p>
                <strong>Fortune 500 (ING Bank):</strong> „Very professional and very nice, pleasant person. Helped with lab issues immediately."
              </p>
              <p>
                <strong>Norwegian Police. Equinor. Critical Manufacturing. EY Norway...</strong>
              </p>
            </div>

            <p className="text-center font-medium pt-4">
              ...i kolejne 250+ zweryfikowanych opinii klientów.
            </p>
          </div>

          <div className="my-12 p-8 bg-neural-blue/10 rounded-xl border border-neural-blue/30">
            <p className="text-xl font-semibold text-deep-charcoal mb-6">
              Zauważ coś w tych opiniach.
            </p>
            <p className="text-lg mb-4">
              Nie mówią o mojej wiedzy technicznej.
            </p>
            <p className="text-lg font-medium mb-6">
              Mówią o:
            </p>

            <div className="space-y-3 pl-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p className="italic">„Engaging way of sharing knowledge"</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p className="italic">„Enthusiasm was contagious"</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p className="italic">„Created good atmosphere for learning"</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p className="italic">„Adapted explanations to knowledge level"</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p className="italic">„Made complex concepts accessible"</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-medium">
              To nie są umiejętności techniczne. To są umiejętności obecności.
            </p>

            <p className="text-xl font-bold text-neural-blue text-center py-4">
              To jest różnica między „dobrym programistą" a „trenerem za 60 tysięcy złotych dziennie".
            </p>

            <p>
              I każda z tych organizacji zapłaciła mi – nie żeby im pokazać „jak działa SQL" – ale żeby transformować ich ludzi poprzez moją obecność.
            </p>

            <p className="text-xl font-bold text-deep-charcoal pt-4">
              Dokładnie tego Cię nauczę.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 5: VALUE EQUATION */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tradycyjne podejścia zawodzą
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-medium">
              Matematyka jest prosta. I brutalna.
            </p>

            <p>
              Alex Hormozi ma wzór zwany <strong>Value Equation</strong>. Wygląda tak:
            </p>

            {/* LaTeX-style formula */}
            <div className="my-12 p-8 bg-gradient-to-br from-neural-blue/5 to-secondary/20 rounded-xl border border-neural-blue/30">
              <div className="text-center space-y-4">
                <div className="text-2xl md:text-3xl font-serif text-deep-charcoal">
                  <div className="mb-2">WARTOŚĆ =</div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="border-b-2 border-deep-charcoal pb-3 px-4">
                        <div>(Wymarzony Rezultat × Prawdopodobieństwo Sukcesu)</div>
                      </div>
                      <div className="pt-3 px-4">
                        <div>(Opóźnienie Czasowe × Wysiłek i Poświęcenie)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-semibold text-xl pt-4">
              Zastosujmy go do tradycyjnego szkolenia z umiejętności prezentacyjnych:
            </p>

            <div className="pl-6 space-y-3 my-6">
              <div className="flex gap-3">
                <span className="text-deep-charcoal/70 font-bold">•</span>
                <p><strong>Wymarzony Rezultat:</strong> Zostać lepszym prezenterem <span className="text-deep-charcoal/60">(7/10 – mało konkretne)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-deep-charcoal/70 font-bold">•</span>
                <p><strong>Prawdopodobieństwo Sukcesu:</strong> Średnie – tysiąc ludzi zrobiło ten sam kurs <span className="text-deep-charcoal/60">(5/10)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-deep-charcoal/70 font-bold">•</span>
                <p><strong>Opóźnienie Czasowe:</strong> Sześć miesięcy minimum, zanim zobaczysz wyniki <span className="text-deep-charcoal/60">(2/10)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-deep-charcoal/70 font-bold">•</span>
                <p><strong>Wysiłek i Poświęcenie:</strong> Musisz „ćwiczyć" przez miesiące <span className="text-deep-charcoal/60">(3/10)</span></p>
              </div>
            </div>

            <div className="p-6 bg-secondary/30 rounded-xl border-l-4 border-deep-charcoal/30">
              <p className="font-mono text-xl font-bold text-deep-charcoal">
                Wynik: (7 × 5) ÷ (2 × 3) = 5,8/10 wartości
              </p>
            </div>

            <p className="font-semibold text-xl pt-8 text-neural-blue">
              Versus Train The Trainer:
            </p>

            <div className="pl-6 space-y-3 my-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p><strong>Wymarzony Rezultat:</strong> 20–60 tysięcy złotych dziennie jako trener światowej klasy + keynote stages <span className="text-neural-blue/80">(10/10)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p><strong>Prawdopodobieństwo Sukcesu:</strong> 19 lat dowodów + klienci DoD/NATO + studia przypadków transformacji tożsamości <span className="text-neural-blue/80">(9/10)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p><strong>Opóźnienie Czasowe:</strong> Osiem tygodni do pierwszych rezultatów <span className="text-neural-blue/80">(9/10 – SZYBKO)</span></p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p><strong>Wysiłek i Poświęcenie:</strong> Nie „ucz się więcej" – po prostu stań się sobą <span className="text-neural-blue/80">(8/10)</span></p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10 rounded-xl border-l-4 border-neural-blue">
              <p className="font-mono text-xl font-bold text-neural-blue">
                Wynik: (10 × 9) ÷ (9 × 8) = 1,25× tradycyjnego podejścia
              </p>
            </div>

            <p className="font-medium text-xl pt-8">
              Ale to nie opowiada pełnej historii.
            </p>

            <p>
              Bo tradycyjne podejście uczy cię, <strong>JAK</strong> mówić.
            </p>

            <p className="font-semibold">
              Moje podejście transformuje, <strong>KIM JESTEŚ</strong>, gdy mówisz.
            </p>

            <div className="my-12 p-8 bg-neural-blue/10 rounded-xl border border-neural-blue/30">
              <p className="text-xl font-bold text-deep-charcoal text-center">
                To jest różnica między technikiem, który „prowadzi szkolenia", a trenerem światowej klasy, który transformuje przestrzenie, do których wchodzi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 6: TROJAN HORSE REVEAL */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Co naprawdę dostajesz
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-semibold text-xl text-deep-charcoal">
              Powiem ci sekret, który zrujnuje mój marketing.
            </p>

            <p className="font-medium">
              Ten program nie jest naprawdę o umiejętnościach nauczania.
            </p>

            <p className="text-xl font-bold text-neural-blue">
              To jest coaching transformacyjny przebrany za Train The Trainer.
            </p>

            <p className="pt-4">
              Dlaczego?
            </p>

            <p>
              Bo gdybym ci powiedział „sprzedaję ci ośmiotygodniową transformację tożsamości, która rozwiąże twój impostor syndrome, poprawi twoje relacje i uczyni cię kimś wartym 60 tysięcy złotych dziennie"...
            </p>

            <p className="italic">
              ...powiedziałbyś „brzmi jak woo-woo bullshit" i wyszedł.
            </p>

            <p>
              Bo jesteś technikiem. Overthinkerem. Analitykiem.
            </p>

            <p>
              Potrzebujesz systemu. Frameworku. Struktury.
            </p>

            <p className="font-semibold">
              Więc daję ci Train The Trainer.
            </p>

            <p className="font-medium text-xl pt-4">
              Ale pod spodem?
            </p>

            <p className="font-semibold">
              To ta sama metodologia, którą używam w Life OS – mojej flagowej ofercie transformacyjnej.
            </p>

            <p className="font-medium text-xl pt-8">
              Dowód? Dwie studia przypadków:
            </p>

            {/* Case studies */}
            <div className="grid md:grid-cols-1 gap-8 my-12">
              <GlassCard padding="lg" className="border-2 border-neural-blue/30 bg-luminous-white">
                <h3 className="text-xl font-bold mb-6 text-neural-blue">CASE STUDY #1: Anna (CEO, przychody ośmiocyfrowe)</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <div>
                    <strong className="text-deep-charcoal">Problem:</strong> Uwięziona w narracji ofiary („niesprawiedliwość wobec kobiet w biznesie")
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Rzeczywisty problem:</strong> Tożsamość ofiary jako mechanizm bezpieczeństwa
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Metoda:</strong> Filozoficzna konfrontacja + framework wymiany energii
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Moment przełomu:</strong> <span className="italic">„Ile podatku płacisz za tę historię?"</span>
                  </div>
                  <div className="pt-2">
                    <strong className="text-neural-blue">Rezultat:</strong> Kompletna zmiana tożsamości: <strong>ofiara → sprawca</strong>. Transformacja modelu mentalnego. Opanowanie granic.
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="border-2 border-neural-blue/30 bg-luminous-white">
                <h3 className="text-xl font-bold mb-6 text-neural-blue">CASE STUDY #2: Lucja (przedsiębiorca, założycielka RevSpace)</h3>
                <div className="space-y-4 text-deep-charcoal/90">
                  <div>
                    <strong className="text-deep-charcoal">Problem:</strong> Pracowała na wakacjach w mentalnym garniturze, wypalenie, chaos
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Rzeczywisty problem:</strong> Konflikt między kobietą biznesu a duchową częścią siebie
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Metoda:</strong> Integracja yin-yang + medytacja + równoległe rzeczywistości
                  </div>
                  <div>
                    <strong className="text-deep-charcoal">Kluczowy moment:</strong> <span className="italic">„Jesteś już rybakiem na plaży"</span>
                  </div>
                  <div className="pt-2">
                    <strong className="text-neural-blue">Rezultat:</strong> Codzienna medytacja. Córka w terapii (po miesiącach oporu). Wewnętrzny spokój. Biznes rośnie <strong>SZYBCIEJ</strong>.
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="my-12 p-8 bg-neural-blue/10 rounded-xl border border-neural-blue/30">
              <p className="text-xl font-semibold text-deep-charcoal mb-4">
                Zauważ:
              </p>
              <p className="mb-4">
                Żadna z nich nie przyszła po „coaching transformacyjny".
              </p>
              <p>
                Anna przyszła, bo chciała „strategię biznesową". Lucja przyszła, bo chciała „systemy produktywności".
              </p>
              <p className="font-semibold pt-4">
                Dostały transformację tożsamości.
              </p>
            </div>

            <p className="text-xl font-bold text-deep-charcoal">
              Dokładnie jak ty.
            </p>

            <p className="text-2xl font-bold text-neural-blue py-4">
              Przychodzisz po „Train The Trainer". Dostajesz rekonstrukcję tożsamości, która przy okazji uczyni cię trenerem światowej klasy.
            </p>

            <div className="p-6 bg-gradient-to-br from-zenith-gold/10 to-neural-blue/10 rounded-xl border-l-4 border-zenith-gold">
              <p className="font-medium">
                <strong>Skutki uboczne obejmują:</strong> lepsze relacje (zawodowe i romantyczne), koniec nadmiernego myślenia, prawdziwą pewność siebie (nie udawaną).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 7: 8-TYGODNIOWY BREAKDOWN */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Co dokładnie dostajesz w osiem tygodni
          </h2>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p className="font-medium">
              Tu jest, gdzie to staje się realne.
            </p>

            <p>
              Wiem już, jaki jest twój problem (impostor syndrome maskujący się jako „brak umiejętności").
            </p>

            <p>
              Wiem już, jakie jest rozwiązanie (transformacja tożsamości poprzez mistrzostwo w nauczaniu).
            </p>

            <p className="font-semibold">
              Teraz pokażę ci, jak dokładnie to robimy w osiem tygodni.
            </p>
          </div>

          <div className="space-y-8">
            {/* Week 1-2 */}
            <GlassCard padding="lg" className="border-2 border-neural-blue/30 relative bg-gradient-to-br from-luminous-white to-secondary/10">
              <div className="absolute top-4 right-4 bg-zenith-gold/20 px-4 py-2 rounded-full border border-zenith-gold/40">
                <span className="text-sm font-bold text-deep-charcoal">Wartość: 12 000 zł</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neural-blue pr-32">TYDZIEŃ 1–2: ZMIANA MENTALNOŚCI ELITY</h3>
              <p className="text-lg mb-6 text-deep-charcoal italic">
                Rozbicie „mentalności technika". Przebudowa jako „przewodnik transformacji".
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-deep-charcoal text-lg">Co dostajesz:</h4>
                <div className="space-y-3 pl-2">
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>2 sesje mentorskie po 2 godziny (na żywo, jeden na jeden, intensywne)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Framework „Archeologia Tożsamości" (odkryj, kim NAPRAWDĘ jesteś vs. kim się udajesz)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Model Wymiany Energii zastosowany do nauczania (każda interakcja = transakcja energii)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Nagrania + transkrypcje każdej sesji (dostęp dożywotni)</span></p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neural-blue/20">
                <h4 className="font-bold text-deep-charcoal text-lg">Dlaczego to działa:</h4>
                <div className="space-y-3 text-deep-charcoal/90">
                  <p>Bo 90% problemu z impostor syndrome to brak zgodności między tym, kim jesteś, a kim próbujesz być.</p>
                  <p>Gdy stajesz na scenie jako „fałszywy ekspert" – ludzie to czują. I ty to czujesz.</p>
                  <p className="font-medium">Gdy stajesz jako „człowiek, który przeszedł drogę i teraz pokazuje ją innym" – to jest autentyczne. I nieodparte.</p>
                </div>
              </div>
            </GlassCard>

            {/* Week 3-4 */}
            <GlassCard padding="lg" className="border-2 border-neural-blue/30 relative bg-gradient-to-br from-luminous-white to-secondary/10">
              <div className="absolute top-4 right-4 bg-zenith-gold/20 px-4 py-2 rounded-full border border-zenith-gold/40">
                <span className="text-sm font-bold text-deep-charcoal">Wartość: 10 000 zł</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neural-blue pr-32">TYDZIEŃ 3–4: ARCHITEKTURA EMOCJONALNA</h3>
              <p className="text-lg mb-6 text-deep-charcoal italic">
                Projektowanie szkoleń, które fascynują od pierwszej minuty. Zastąpienie suchych wykładów transformującymi doświadczeniami.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-deep-charcoal text-lg">Co dostajesz:</h4>
                <div className="space-y-3 pl-2">
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>2 sesje mentorskie (adaptacyjne: 60 minut–2,5 godziny, w zależności od potrzebnej głębokości)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Mistrzostwo w zadawaniu pytań sokratejskich (jak używać pytań, aby ONI doszli do wniosków, nie ty)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Framework metafor (moje najlepsze: podatki, rowery, wiosłowanie, rybak, znakowanie bydła)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Struktura opowieści dla treści technicznych (jak zrobić SQL interesującym)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Dostęp do prywatnego kanału Slack (wsparcie codzienne, non-stop)</span></p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neural-blue/20">
                <h4 className="font-bold text-deep-charcoal text-lg">Dlaczego to działa:</h4>
                <div className="space-y-3 text-deep-charcoal/90">
                  <p>Bo nikt nie chce „kolejnego szkolenia SQL".</p>
                  <p>Chcą doświadczenia, które ich zmieni.</p>
                  <p>Twoja praca nie jest „nauczyć ich SQL". Twoja praca to użyć SQL jako narzędzia ich transformacji.</p>
                  <p className="font-medium">Gdy to zrozumiesz – wszystko się zmienia.</p>
                </div>
              </div>
            </GlassCard>

            {/* Week 5-6 */}
            <GlassCard padding="lg" className="border-2 border-neural-blue/30 relative bg-gradient-to-br from-luminous-white to-secondary/10">
              <div className="absolute top-4 right-4 bg-zenith-gold/20 px-4 py-2 rounded-full border border-zenith-gold/40">
                <span className="text-sm font-bold text-deep-charcoal">Wartość: 8 000 zł</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neural-blue pr-32">TYDZIEŃ 5–6: WARSZTAT MISTRZA</h3>
              <p className="text-lg mb-6 text-deep-charcoal italic">
                Radzenie sobie z trudnymi uczestnikami z wdziękiem. Przekształcanie trudnych momentów w przełomowe wglądy.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-deep-charcoal text-lg">Co dostajesz:</h4>
                <div className="space-y-3 pl-2">
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>2 sesje mentorskie (mogą trwać 2+ godziny, gdy jest taka potrzeba)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Framework „konflikt jako katalizator" (jak wykorzystać opór jako paliwo)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Mistrzostwo nieprzewidywalności (strategiczna cisza, manipulacja timingiem, kontrolowany chaos)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Umiejętności czytania sali (diagnostyczna precyzja – kto potrzebuje jakiej ścieżki)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Kontynuowany dostęp do Slacka (rozwiązywanie problemów case-by-case)</span></p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neural-blue/20">
                <h4 className="font-bold text-deep-charcoal text-lg">Dlaczego to działa:</h4>
                <div className="space-y-3 text-deep-charcoal/90">
                  <p>Bo najlepsi trenerzy nie unikają trudnych sytuacji.</p>
                  <p className="font-medium">Wykorzystują je.</p>
                  <p>Ktoś agresywny? Świetnie – ukierunkuj tę energię. Ktoś wycofany? Świetnie – stwórz bezpieczeństwo dla ekspansji. Ktoś kwestionuje twoją autorytet? Świetnie – przekształć to w naukę dla grupy.</p>
                  <p className="font-medium">Tego nie da się nauczyć z książki. Tylko przez bezpośrednie przekazanie.</p>
                </div>
              </div>
            </GlassCard>

            {/* Week 7 */}
            <GlassCard padding="lg" className="border-2 border-neural-blue/30 relative bg-gradient-to-br from-luminous-white to-secondary/10">
              <div className="absolute top-4 right-4 bg-zenith-gold/20 px-4 py-2 rounded-full border border-zenith-gold/40">
                <span className="text-sm font-bold text-deep-charcoal">Wartość: 10 000 zł</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neural-blue pr-32">TYDZIEŃ 7: SYSTEM POZYSKIWANIA KLIENTÓW</h3>
              <p className="text-lg mb-6 text-deep-charcoal italic">
                Sprawdzone metody docierania do klientów korporacyjnych i rządowych. Budowanie ofert, których nie mogą odmówić.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-deep-charcoal text-lg">Co dostajesz:</h4>
                <div className="space-y-3 pl-2">
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>1 intensywna sesja (zwykle 2–2,5 godziny)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Framework pozycjonowania Fortune 500 (jak mówić językiem przedsiębiorstw)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Psychologia cenowa (uzasadnienie 20–60 tysięcy złotych dziennie – nie sprzedajesz czasu, sprzedajesz transformację)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Szablony outreachu (sekwencje e-maili, które rzeczywiście działają)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-1" /> <span>Struktura propozycji (jak zdobyłem kontrakty z DoD, NATO, ING)</span></p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neural-blue/20">
                <h4 className="font-bold text-deep-charcoal text-lg">Dlaczego to działa:</h4>
                <div className="space-y-3 text-deep-charcoal/90">
                  <p>Bo nie jesteś już „freelance deweloperem, który uczy".</p>
                  <p className="font-medium">Jesteś elitarnym przewodnikiem transformacji, który używa technologii jako narzędzia.</p>
                  <p className="font-bold text-neural-blue">Ta różnica? To 800 złotych na godzinę versus 60 tysięcy złotych dziennie.</p>
                </div>
              </div>
            </GlassCard>

            {/* Week 8+ */}
            <GlassCard padding="lg" className="border-2 border-zenith-gold/50 relative bg-gradient-to-br from-zenith-gold/5 via-neural-blue/5 to-secondary/20">
              <div className="absolute top-4 right-4 bg-zenith-gold/30 px-4 py-2 rounded-full border border-zenith-gold/60">
                <span className="text-sm font-bold text-deep-charcoal">Wartość: 20 000 zł</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neural-blue flex items-center gap-2 pr-32">
                TYDZIEŃ 8: SIEĆ ABSOLWENTÓW DOŻYWOTNIO
                <span className="text-3xl text-zenith-gold">∞</span>
              </h3>
              <p className="text-lg mb-6 text-deep-charcoal italic">
                Dołącz do zamkniętej społeczności przewodników transformacji. Dziel się możliwościami. Buduj trwałe relacje.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-deep-charcoal text-lg">Co dostajesz:</h4>
                <div className="space-y-3 pl-2">
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-1" /> <span>Finalna sesja integracyjna (często 2 godziny+, czasem więcej – adaptacyjna)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-1" /> <span>Dostęp do Lifehackers Inner Circle (codzienny Discord 12:30, kwartalne wydarzenia w Warszawie)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-1" /> <span>Dożywotnia społeczność absolwentów (wszyscy absolwenci Life OS + kohorta Train The Trainer)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-1" /> <span>Intensywy osobiste (Warszawa, planowane kwartalnie)</span></p>
                  <p className="flex gap-3"><CheckCircle className="w-5 h-5 text-zenith-gold shrink-0 mt-1" /> <span className="font-bold">Na zawsze. Raz dołączysz, zawsze będziesz.</span></p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-zenith-gold/30">
                <h4 className="font-bold text-deep-charcoal text-lg">Dlaczego to działa:</h4>
                <div className="space-y-3 text-deep-charcoal/90">
                  <p>Bo transformacja nie kończy się po ośmiu tygodniach.</p>
                  <p className="font-medium">To początek relacji na 5–10 lat.</p>
                  <p>Niektórzy moi klienci pracują ze mną 3+ lata. Wracają do różnych wyzwań. Pogłębiają pracę.</p>
                  <p className="font-bold text-neural-blue text-lg">To nie jest transakcja. To wejście do rodziny.</p>
                </div>
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

          <div className="max-w-[700px] mx-auto">
            <div className="bg-luminous-white rounded-xl border-2 border-neural-blue/30 p-8 space-y-3">
              {[
                { name: 'Zmiana Mentalności Elity (Tydzień 1–2)', price: '12 000 zł' },
                { name: 'Architektura Emocjonalna (Tydzień 3–4)', price: '10 000 zł' },
                { name: 'Warsztat Mistrza (Tydzień 5–6)', price: '8 000 zł' },
                { name: 'Pozyskiwanie Klientów (Tydzień 7)', price: '10 000 zł' },
                { name: 'Sieć Absolwentów Dożywotnio (Tydzień 8+)', price: '20 000 zł' },
                { name: '8 sesji mentoringu jeden na jeden (50 minut–2,5 godziny każda, rynkowa stawka 2000–4000 zł/godz.)', price: '32 000 zł' },
                { name: 'Dostęp do prywatnego kanału Slack (8 tygodni intensywnego wsparcia)', price: '8 000 zł' },
                { name: 'Nagrania sesji + transkrypcje (dostęp dożywotni)', price: '8 000 zł' },
                { name: 'Metodologia International IT Trainer (19 lat destylacji)', price: '12 000 zł' },
                { name: '3 miesiące wsparcia po programie', price: '8 000 zł' }
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-6 py-3 border-b border-neural-blue/10 last:border-0">
                  <div className="flex gap-3 flex-1">
                    <CheckCircle className="w-5 h-5 text-neural-blue shrink-0 mt-0.5" />
                    <span className="text-deep-charcoal leading-snug">{item.name}</span>
                  </div>
                  <span className="font-bold text-neural-blue whitespace-nowrap text-right">{item.price}</span>
                </div>
              ))}

              <div className="pt-8 mt-8 border-t-2 border-neural-blue/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-wide text-deep-charcoal/60 mb-2">Łączna wartość</div>
                    <div className="text-3xl font-bold text-deep-charcoal">
                      <span className="text-neural-blue">128 000 zł</span>
                    </div>
                  </div>

                  <div className="relative py-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-dashed border-neural-blue/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-luminous-white px-4 text-2xl text-neural-blue">↓</span>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-zenith-gold/10 to-neural-blue/5 rounded-xl border-2 border-zenith-gold/30">
                    <div className="text-sm uppercase tracking-wide text-deep-charcoal/60 mb-2">Twoja inwestycja</div>
                    <div className="text-4xl md:text-5xl font-bold text-zenith-gold mb-4">
                      16 000 zł
                    </div>
                    <div className="text-sm text-deep-charcoal/70">
                      (Lub 2 × 6500 zł netto jeśli wolisz rozłożyć + odliczasz VAT)
                    </div>
                  </div>

                  <div className="text-center p-4 bg-neural-blue/10 rounded-xl">
                    <div className="text-2xl font-bold text-neural-blue">
                      Oszczędzasz: 112 000 zł
                    </div>
                  </div>
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
            Dlaczego 16 000 zł to właściwie za mało
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-medium text-xl">
              Alex Hormozi mówi: „Chcę pobierać haniebne kwoty pieniędzy."
            </p>

            <p>
              16 000 zł nie jest „haniebne".
            </p>

            <p className="font-semibold">
              To jest absurdalnie zaniżona cena za to, co dostajesz.
            </p>

            <p className="font-medium text-xl pt-4">
              Oto matematyka:
            </p>

            {/* Scenario cards */}
            <div className="space-y-6 my-12">
              <GlassCard padding="lg" className="border-2 border-deep-charcoal/20 bg-secondary/20">
                <h3 className="text-2xl font-bold mb-6 text-deep-charcoal">Scenariusz A: Zostajesz tam, gdzie jesteś</h3>
                <div className="space-y-4">
                  <div className="font-mono text-base bg-luminous-white p-4 rounded border-l-4 border-deep-charcoal/30">
                    <div className="space-y-1 text-deep-charcoal/90">
                      <div>Kontrakty: 800 zł/godz. × 160 godz./miesiąc = 128 000 zł/miesiąc</div>
                      <div>Rok: 1 536 000 zł</div>
                      <div className="font-bold">5 lat: 7 680 000 zł</div>
                    </div>
                  </div>
                  <div className="p-4 bg-deep-charcoal/5 rounded">
                    <p className="font-medium text-deep-charcoal/80">
                      Ale: Wciąż w piwnicy (mentalnie). Wciąż impostor syndrome. Cierpiące relacje.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="border-2 border-neural-blue/30 bg-neural-blue/5">
                <h3 className="text-2xl font-bold mb-6 text-neural-blue">Scenariusz B: Stajesz się trenerem światowej klasy</h3>
                <div className="space-y-4">
                  <div className="font-mono text-base bg-luminous-white p-4 rounded border-l-4 border-neural-blue">
                    <div className="space-y-1 text-deep-charcoal/90">
                      <div>Szkolenia: 40 000 zł/dzień × 2 dni/miesiąc = 80 000 zł/miesiąc (konserwatywnie)</div>
                      <div>Rok: 960 000 zł</div>
                      <div className="font-bold">5 lat: 4 800 000 zł</div>
                    </div>
                  </div>
                  <div className="p-4 bg-neural-blue/10 rounded">
                    <p className="font-medium text-deep-charcoal">
                      Plus: Transformacja tożsamości. Pewność siebie. Lepsze relacje. Prawdziwe spełnienie.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="p-6 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
                <p className="text-xl font-bold text-deep-charcoal">
                  Różnica: –2 880 000 zł w ciągu 5 lat.
                </p>
              </div>

              <div className="my-8 space-y-4">
                <p className="font-semibold text-xl">
                  Moment. To brzmi, jakby scenariusz A był lepszy finansowo?
                </p>
                <p className="font-bold text-2xl text-neural-blue">
                  Nie.
                </p>
                <p>
                  Bo scenariusz A zakłada, że będziesz mógł utrzymać 160 godzin kontraktowych miesięcznie przez 5 lat. Nie będziesz. Wypalenie cię dopadnie. Zdrowie się pogorszy. Relacje się rozpadną.
                </p>
              </div>

              <GlassCard padding="lg" className="border-2 border-zenith-gold/40 bg-gradient-to-br from-zenith-gold/10 to-neural-blue/10">
                <h3 className="text-2xl font-bold mb-6 text-zenith-gold">Scenariusz B? Bardziej realistyczny:</h3>
                <div className="space-y-6">
                  <div className="space-y-3 pl-6">
                    <div className="flex gap-3">
                      <span className="text-zenith-gold font-bold">•</span>
                      <p>40 000 zł/dzień to początek. Po roku to będzie 60 000 zł/dzień.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-zenith-gold font-bold">•</span>
                      <p>2 dni/miesiąc to bardzo konserwatywna liczba. Realistyczne jest 3–4 dni.</p>
                    </div>
                  </div>

                  <div className="font-mono text-base bg-luminous-white p-4 rounded border-l-4 border-zenith-gold">
                    <div className="space-y-1 text-deep-charcoal/90">
                      <div>60 000 zł × 3 dni × 12 miesięcy = 2 160 000 zł/rok</div>
                      <div className="font-bold text-lg text-zenith-gold">5 lat: 10 800 000 zł</div>
                    </div>
                  </div>

                  <div className="p-6 bg-zenith-gold/20 rounded-xl border-2 border-zenith-gold/40">
                    <p className="text-2xl font-bold text-neural-blue">
                      Różnica: +3 120 000 zł w ciągu 5 lat
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="p-8 bg-gradient-to-br from-neural-blue/10 to-zenith-gold/10 rounded-xl border-2 border-neural-blue/30 text-center">
              <div className="space-y-2">
                <div className="text-lg text-deep-charcoal/70">Inwestycja: 16 000 zł</div>
                <div className="text-5xl font-bold text-zenith-gold">
                  ROI: 195×
                </div>
              </div>
            </div>

            <p className="italic text-deep-charcoal/70">
              I to przy założeniu BARDZO konserwatywnych liczb.
            </p>

            <div className="my-8 p-6 bg-neural-blue/5 rounded-xl border-l-4 border-neural-blue">
              <p className="font-semibold text-xl mb-4 text-neural-blue">
                Rzeczywistość? Gdy już jesteś ustawiony jako elitarny trener:
              </p>
              <div className="space-y-2 pl-6">
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>60 000 zł dziennie staje się normą</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>3–4 dni miesięcznie to realna liczba</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">•</span>
                  <p>2–3 miliony rocznie to możliwe</p>
                </div>
              </div>
            </div>

            <p className="font-bold text-2xl text-deep-charcoal pt-6">
              Więc 16 000 zł?
            </p>

            <p className="font-semibold text-xl">
              To nie jest drogie. To jest okazja.
            </p>

            <p>
              Szczególnie gdy rozumiesz, że:
            </p>

            <div className="pl-6 space-y-3 my-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>To nie jest „kurs". To osobisty mentoring. Osiem tygodni pracy jeden na jeden.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>To nie są „porady prezentacyjne". To kompletna rekonstrukcja tożsamości.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Skutki uboczne (lepsze relacje, pewność siebie, eliminacja nadmiernego myślenia) same są warte tej ceny.</p>
              </div>
            </div>

            <div className="my-12 p-8 bg-gradient-to-br from-secondary/30 to-neural-blue/10 rounded-xl border border-neural-blue/30">
              <p className="font-bold text-xl mb-6 text-neural-blue">
                Hormozi nazywa to „cyklem cnotliwej ceny":
              </p>
              <p className="mb-4 font-medium">
                Gdy PODNOSISZ cenę:
              </p>
              <div className="space-y-3 pl-6">
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">1.</span>
                  <p>Klient inwestuje więcej emocjonalnie</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">2.</span>
                  <p>Postrzegana wartość ROŚNIE</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">3.</span>
                  <p>Rezultaty są LEPSZE (bo zaangażowanie wyższe)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neural-blue font-bold">4.</span>
                  <p>TY możesz dać WIĘCEJ (bo masz zasoby)</p>
                </div>
              </div>
            </div>

            <p className="font-bold text-xl text-deep-charcoal">
              Dlatego klienci za 16 000 zł dostają lepsze rezultaty, niż dostaliby za 997 zł.
            </p>

            <p>
              Nie dlatego, że program jest inny.
            </p>

            <p className="font-semibold text-xl text-neural-blue">
              Dlatego, że ICH zaangażowanie jest inne.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 10: DUAL GUARANTEE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Jak wiem, że to zadziała dla mnie?
          </h2>

          <p className="text-xl mb-12 text-deep-charcoal font-semibold">
            Dwie gwarancje. Obie bezwarunkowe.
          </p>

          <div className="space-y-8">
            {/* Guarantee 1 */}
            <GlassCard padding="lg" className="border-2 border-neural-blue/30 bg-luminous-white">
              <div className="inline-block bg-neural-blue text-white px-6 py-3 rounded-lg mb-6 font-bold text-lg">
                GWARANCJA #1: 7-DNIOWY ZWROT PIENIĘDZY
              </div>

              <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
                <p className="font-medium">
                  Po pierwszym tygodniu programu, jeśli uznasz, że to nie dla ciebie – zwrot 100% wpłaconej kwoty.
                </p>

                <p className="font-semibold text-neural-blue">
                  Zero pytań. Zero warunków. Po prostu: „To nie dla mnie" i dostajesz pieniądze z powrotem.
                </p>

                <div className="pt-4 border-t border-neural-blue/20">
                  <p className="font-semibold text-deep-charcoal mb-3">Dlaczego?</p>
                  <div className="space-y-3 pl-4">
                    <p>
                      Bo jeśli po dwóch sesjach ze mną nie czujesz, że coś fundamentalnego się zmienia – to znaczy, że nie pasujesz do programu.
                    </p>
                    <p className="font-medium">
                      I wolę zwrócić pieniądze, niż zmarnować twój czas i mój.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Guarantee 2 */}
            <GlassCard padding="lg" className="border-2 border-zenith-gold/40 bg-gradient-to-br from-zenith-gold/5 to-luminous-white">
              <div className="inline-block bg-zenith-gold text-white px-6 py-3 rounded-lg mb-6 font-bold text-lg">
                GWARANCJA #2: 12-MIESIĘCZNA GWARANCJA KONTRAKTU
              </div>

              <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
                <p className="font-medium">
                  Jeśli w ciągu 12 miesięcy od ukończenia programu nie zdobędziesz kontraktu szkoleniowego wartego minimum 10 000 złotych...
                </p>

                <p className="font-semibold text-zenith-gold text-xl">
                  ...dostajesz dodatkowe 3 miesiące mentoringu bezpłatnie.
                </p>

                <div className="pt-4 border-t border-zenith-gold/30">
                  <p className="font-semibold text-deep-charcoal mb-3">Dlaczego?</p>
                  <div className="space-y-3 pl-4">
                    <p>
                      Bo albo program nie zadziałał (mało prawdopodobne, biorąc pod uwagę historię sukcesów), albo potrzebujesz więcej wsparcia w części pozyskiwania klientów.
                    </p>
                    <p className="font-medium">
                      Tak czy inaczej – nie zostawiam cię samego.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Reality check */}
            <div className="mt-12 p-8 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
              <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
                <p className="font-bold text-xl text-deep-charcoal">
                  Ale szczerze?
                </p>

                <p>
                  Jeśli przejdziesz przez osiem tygodni ze mną i nie dostaniesz kontraktu za 40 000+ złotych w rok...
                </p>

                <p className="font-semibold text-xl text-neural-blue">
                  ...to znaczy, że nie wykonałeś pracy.
                </p>

                <p>
                  Bo transformacja wymaga twojego zaangażowania. Nie mogę tego zrobić ZA ciebie.
                </p>

                <p className="font-medium">
                  Mogę tylko przeprowadzić cię przez proces.
                </p>

                <p className="font-semibold text-lg">
                  Reszta zależy od Ciebie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 11: SCARCITY */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Dlaczego tylko pięć miejsc (i dlaczego to prawda)
          </h2>

          <div className="space-y-8 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-semibold text-xl">
              To nie jest fałszywy deficyt.
            </p>

            <p>
              Większość marketerów mówi „tylko 5 miejsc!", potem nagle „otwieramy 3 dodatkowe!".
            </p>

            <p className="font-bold text-2xl text-neural-blue">
              Bzdura.
            </p>

            <p className="font-semibold text-xl">
              U mnie: 5 miejsc = 5 miejsc. Twardy limit. Zero wyjątków.
            </p>

            <p className="font-medium pt-4">
              Dlaczego?
            </p>

            <p>
              Bo to nie jest skalowalny program grupowy.
            </p>

            <p className="font-medium">
              To intensywny mentoring jeden na jeden, gdzie każda sesja trwa 1–2,5 godziny, w zależności od potrzebnej głębokości.
            </p>

            <div className="my-8 p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30">
              <p className="font-mono text-lg font-bold text-deep-charcoal text-center">
                5 klientów × 8 tygodni × 2 godziny średnio = 80 godzin intensywnej pracy
              </p>
            </div>

            <div className="space-y-3 pl-6">
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Plus codzienne wsparcie na Slacku.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-neural-blue font-bold">•</span>
                <p>Plus przygotowanie przed sesją (myślę o twoich problemach na dni wcześniej, synchronistycznie).</p>
              </div>
            </div>

            <p className="font-semibold text-xl pt-6">
              To jest maksimum mojej pojemności przy zachowaniu jakości.
            </p>

            <p>
              Więcej? Jakość spada. Uwaga się rozmywa. Rezultaty cierpią.
            </p>

            <div className="my-8 p-6 bg-secondary/30 rounded-xl border-l-4 border-neural-blue">
              <p className="mb-3">
                Hormozi mówi: <span className="italic">„Biznes służy klientowi, nie na odwrót."</span>
              </p>
              <p className="font-semibold">
                Dokładnie.
              </p>
            </div>

            <p className="font-bold text-xl text-neural-blue">
              Wolę 5 transformowanych klientów niż 50 przeciętnych rezultatów.
            </p>

            <div className="my-12 space-y-6">
              <p className="font-semibold text-xl">
                Plus:
              </p>

              <div className="p-8 bg-gradient-to-br from-zenith-gold/20 to-neural-blue/10 rounded-xl border-2 border-zenith-gold/50 text-center">
                <p className="text-2xl font-bold text-zenith-gold mb-2">
                  Aktualnie pozostały 2 miejsca na Q4 2025
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-lg">
                  Następna rekrutacja: <span className="font-bold">Q1 2026.</span>
                </p>

                <p>
                  W każdej edycji podnoszę ceny. Ten program oryginalnie kosztował 4 900 zł. Potem 8 000. Potem 10 000 i 12 000. Wartość rośnie wraz z udoskonalaniem metodologii.
                </p>
              </div>
            </div>

            <div className="p-8 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
              <p className="text-lg mb-4">
                A jeśli poczekasz do 2027? Prawdopodobnie <span className="font-bold">32 000–38 000 zł.</span>
              </p>

              <div className="pt-4 border-t border-deep-charcoal/20">
                <p className="text-2xl font-bold text-neural-blue mb-2">
                  Dziś: 16 000 zł.
                </p>
                <p className="text-xl font-semibold text-zenith-gold">
                  Ostatnia szansa w tej cenie.
                </p>
              </div>
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

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p>
              Tu jest część, gdzie większość stron sprzedażowych mówi: „KLIKNIJ TERAZ! OGRANICZONY CZAS!"
            </p>

            <p className="font-bold text-2xl text-neural-blue">
              Pieprzyć to.
            </p>

            <p className="font-semibold text-xl">
              Nie każdy kwalifikuje się do tego programu.
            </p>

            <p className="font-medium">
              Serio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Not for */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-deep-charcoal mb-6">To nie jest dla:</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Ludzi szukających szybkiej poprawki</span>
                </div>
                <div className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Tych, którzy chcą taktyk bez pracy nad tożsamością</span>
                </div>
                <div className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Osób niegotowych na osiem tygodni intensywnej pracy (10–15 godzin tygodniowo)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Tych, którzy „może kiedyś" chcą być trenerami</span>
                </div>
                <div className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Ludzi bez pojemności finansowej na 16 000 zł (lub 2 × 6500 zł netto)</span>
                </div>
              </div>
            </div>

            {/* Is for */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neural-blue mb-6">To jest dla:</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Seniorów deweloperów/architektów/menedżerów z 5+ lat doświadczenia</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Ludzi, którzy prowadzili projekty o wartości 400 000+ zł (rozumiesz kontekst biznesowy)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Overthinkerów i analityków zmęczonych piwnicą, marzących o scenach</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Tych, którzy czują, że mają niewykorzystany potencjał</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Osób gotowych na transformację (nie tylko „porady")</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-neural-blue shrink-0 mt-1" />
                  <span className="text-deep-charcoal/90">Biegła znajomość angielskiego w mowie i piśmie (Fortune 500/NATO tego wymagają)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Discovery Session Process */}
          <div className="space-y-8 mt-16">
            <p className="text-xl font-bold text-deep-charcoal">
              Jeśli to ty – umów Sesję Discovery (30 minut).
            </p>

            <p className="text-lg text-deep-charcoal/90">
              To kwalifikacyjna rozmowa, gdzie:
            </p>

            <div className="space-y-4 pl-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                <p className="text-lg text-deep-charcoal/90 pt-1">Sprawdzam twoje doświadczenie, cele, gotowość</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">2</div>
                <p className="text-lg text-deep-charcoal/90 pt-1">TY sprawdzasz, czy jestem odpowiedni dla ciebie</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">3</div>
                <p className="text-lg text-deep-charcoal/90 pt-1">Jeśli pasujesz – dostajesz zaproszenie do programu</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-neural-blue text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">4</div>
                <p className="text-lg text-deep-charcoal/90 pt-1">Jeśli nie – powiem, dlaczego (i co zrobić, żeby się kwalifikować później)</p>
              </div>
            </div>

            <div className="p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30 text-center">
              <p className="text-2xl font-bold text-neural-blue">
                Decyzja w 24 godziny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 13: FINAL CLOSE */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
            Słowa finalne
          </h2>

          <div className="space-y-6 text-lg text-deep-charcoal/90 leading-relaxed mb-12">
            <p className="font-semibold text-xl">
              Skończę tak, jak zacząłem: brutalnie.
            </p>

            <p className="font-bold text-2xl text-deep-charcoal">
              Masz dwa wybory.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {/* Choice A */}
            <GlassCard padding="lg" className="bg-gradient-to-br from-secondary/40 to-deep-charcoal/5 border-2 border-deep-charcoal/20">
              <h3 className="text-2xl font-bold mb-6 text-deep-charcoal">Wybór A: Zostań tam, gdzie jesteś.</h3>
              <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                <p>
                  Kontynuuj życie jako „dobry technik". Kontrakty za 200 złotych na godzinę. Bezpiecznie. Stabilnie. Cholernie nudno.
                </p>
                <p>
                  Impostor syndrome wciąż tam za każdym razem, gdy myślisz o scenach. Relacje wciąż cierpią, bo nie jesteś spełniony. Nadmierne myślenie wciąż cię pożera.
                </p>
                <p className="font-medium text-deep-charcoal">
                  Pięć lat później: wciąż w tym samym miejscu. Starszy. Bardziej zgorzkniały. Zastanawiasz się: „co, jeśli?"
                </p>
              </div>
            </GlassCard>

            <div className="text-center text-5xl font-bold text-neural-blue py-6">
              LUB
            </div>

            {/* Choice B */}
            <GlassCard padding="lg" className="bg-gradient-to-br from-neural-blue/10 via-zenith-gold/10 to-luminous-white border-2 border-neural-blue/40">
              <h3 className="text-2xl font-bold mb-6 text-neural-blue">Wybór B: Transformuj się.</h3>
              <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
                <p>
                  Osiem tygodni intensywnej pracy. Niewygodne. Wymagające. Zmieniające życie.
                </p>
                <p>
                  Stajesz się kimś, kto wchodzi do sal i transformuje przestrzenie. 20 000–30 000 złotych tygodniowo staje się normą. Klienci Fortune 500 stają się regularni.
                </p>
                <p>
                  Impostor syndrome? Zniknął – bo stałeś się osobą, którą próbowałeś udawać.
                </p>
                <p>
                  Relacje? Lepsze – bo jesteś spełniony, pewny siebie, obecny.
                </p>
                <p className="font-bold text-xl text-neural-blue pt-2">
                  Pięć lat później: zupełnie inna trajektoria życia.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Social proof mini-section */}
          <div className="my-12 p-8 bg-secondary/30 rounded-xl border-l-4 border-neural-blue">
            <div className="space-y-4 text-lg text-deep-charcoal/90">
              <p>
                <strong>Anna</strong> wybrała Wybór B. Z narracji ofiary przeszła do sprawstwa. Kompletna zmiana modelu mentalnego.
              </p>
              <p>
                <strong>Lucja</strong> wybrała Wybór B. Z chaosu wypalenia przeszła do codziennej medytacji + biznes rośnie szybciej.
              </p>
              <p>
                <strong>30+ klientów Fortune 500/NATO</strong> wybrało Wybór B. Z „kolejnego szkolenia technicznego" dostali transformujące doświadczenie.
              </p>
            </div>
          </div>

          <div className="my-12 space-y-6 text-lg text-deep-charcoal/90 leading-relaxed">
            <p className="font-bold text-2xl text-deep-charcoal">
              Pytanie nie jest „czy to zadziała".
            </p>

            <p>
              30+ opinii + 19 lat historii + studia przypadków Anny i Lucji = wiesz, że działa.
            </p>

            <p className="font-bold text-2xl text-neural-blue">
              Pytanie jest: „Czy TY jesteś gotowy?"
            </p>
          </div>

          <div className="my-12 p-8 bg-deep-charcoal/5 rounded-xl border-l-4 border-deep-charcoal/30">
            <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
              <p>
                Bo jeśli nie jesteś gotowy zostawić piwnicy (dosłownie lub mentalnie)...
              </p>
              <p>
                ...jeśli nie jesteś gotowy na osiem tygodni intensywnej pracy nad tożsamością...
              </p>
              <p>
                ...jeśli wolisz „może kiedyś" zamiast „kurwa, teraz"...
              </p>
              <p className="font-bold text-xl text-deep-charcoal pt-2">
                ...to nie klikaj przycisku poniżej.
              </p>
              <p className="font-medium">
                Serio. Oszczędź swój czas i mój.
              </p>
            </div>
          </div>

          <div className="my-12 p-8 bg-gradient-to-br from-zenith-gold/20 to-neural-blue/10 rounded-xl border-2 border-zenith-gold/40">
            <div className="space-y-4 text-lg text-deep-charcoal/90 leading-relaxed">
              <p className="font-semibold text-xl">
                Ale jeśli czytasz to i czujesz w żołądku, że to jest moment...
              </p>
              <p>
                ...że masz dość tego, gdzie jesteś, i jesteś gotowy na to, gdzie możesz być...
              </p>
              <p>
                ...że masz dosyć życia w półśrodkach...
              </p>
              <p className="font-bold text-2xl text-neural-blue pt-2">
                ...to umów Sesję Discovery.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 mb-12">
            <p className="text-xl font-medium text-deep-charcoal">
              30 minut. Zoom. Sprawdzimy, czy pasujesz.
            </p>

            <div className="p-6 bg-neural-blue/10 rounded-xl border-2 border-neural-blue/30 inline-block">
              <p className="text-lg">
                Następna rekrutacja: <span className="font-bold">Q1 2026</span>
              </p>
              <p className="text-base text-deep-charcoal/70">
                (w 2027 prawdopodobnie 32 000–38 000 zł)
              </p>
            </div>

            <p className="text-2xl font-bold text-zenith-gold pt-4">
              To ostatnia szansa w cenie 16 000 zł.
            </p>
          </div>
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
                <span className="italic font-medium">P.S.</span> – Hormozi mówi: „Najlepszy czas, żeby zacząć, był 5 lat temu. Drugi najlepszy czas to teraz."
              </p>
              <p className="text-lg text-deep-charcoal/90">
                Pięć lat temu mogłeś zacząć tę transformację. Nie zacząłeś.
              </p>
              <p className="text-lg font-medium text-deep-charcoal">
                Teraz masz drugą szansę.
              </p>
              <p className="text-lg font-bold text-neural-blue">
                Nie zmarnuj jej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
