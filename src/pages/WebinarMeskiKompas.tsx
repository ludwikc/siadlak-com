import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Calendar, Clock, Monitor, Users, Headphones, DollarSign } from 'lucide-react';

export default function WebinarMeskiKompas() {
  const ctaUrl = "https://buy.siadlak.com/checkout/spotkanie-online";

  return (
    <Layout>
      <SEO 
        title="Warsztat: Upgrade Systemu dla Analityków 30+"
        description="90-minutowy warsztat dla facetów, którzy mają chaos w priorytetach. Bez teorii - konkretny plan na poniedziałek. Ludwik Siadlak + Mateusz Lizak."
      />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              "POWINIENEM TO OGARNĄĆ SAM."
            </h1>
            
            <div className="text-xl md:text-2xl text-silver-mist mb-8 leading-relaxed space-y-4">
              <p>Jako facet. Jako senior. Jako ten, który "ma głowę na karku".</p>
              <p>Ale w środku? Chaos. 20 projektów. Zero priorytetu.<br/>
              I nie możesz przyznać, że nie wiesz, od czego zacząć.</p>
              <p>Bo "prawdziwy facet wie, co robić", prawda?</p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-ascension-pink to-transparent my-12"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              WARSZTAT: PRZESTRZEŃ BEZ OCENY
            </h2>

            <p className="text-lg md:text-xl text-silver-mist mb-10 leading-relaxed">
              90 minut z Ludwikiem i Mateuszem:<br/>
              Szczera diagnoza + prosty framework + konkretny plan.<br/><br/>
              
              Bez udawania że wszystko ogarniam.<br/>
              Bez terapii i odkrywania siebie.<br/>
              Konkretny system dla analitycznego umysłu.
            </p>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 mb-8">
                REZERWUJĘ MIEJSCE - BEZPŁATNIE
              </Button>
            </a>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-silver-mist">
              <span className="flex items-center gap-2">📅 16 października 2025</span>
              <span className="flex items-center gap-2">🕐 19:00 CET</span>
              <span className="flex items-center gap-2">💻 Online (Zoom)</span>
              <span className="flex items-center gap-2">👥 Dla facetów 30+</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
              ROZPOZNAJESZ TEN PATTERN?
            </h2>
            
            <p className="text-xl text-center text-silver-mist mb-16 leading-relaxed">
              Jesteś senior developerem, team leaderem, product managerem.<br/>
              Twój analityczny umysł to twoja siła.<br/>
              Ale czasem też twoje więzienie.
            </p>

            <div className="space-y-8">
              {/* Pain Point 1 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-white">PĘTLA ANALIZY BEZ DZIAŁANIA</h3>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Masz 20 otwartych zakładek. 10 side projectów.<br/>
                  Wszystko "ważne", więc nic nie jest priorytetem.<br/><br/>
                  
                  Gromadzisz kursy, książki, narzędzia - ale brakuje systemu do ich wdrożenia.<br/><br/>
                  
                  <strong className="text-white">Efekt? Paraliż decyzyjny.</strong>
                </p>
              </Card>

              {/* Pain Point 2 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-white">MENTAL "ZAWSZE ON" - BRAK RESETU</h3>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Twój mózg nie wyłącza się po pracy.<br/>
                  Ciągle optymalizuje, analizuje, planuje.<br/><br/>
                  
                  Nie potrafisz znaleźć balansu między intensywną pracą a regeneracją.<br/><br/>
                  
                  <strong className="text-white">Efekt? Chroniczny stres bez głębokiego odpoczynku.</strong>
                </p>
              </Card>

              {/* Pain Point 3 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-white">"POWINIENEM OGARNĄĆ TO SAM"</h3>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Jako facet z dobrą karierą nie możesz powiedzieć: "Nie wiem, co dalej."<br/>
                  Nie ma przestrzeni na wątpliwości.<br/><br/>
                  
                  "Prawdziwy mężczyzna wie, co robić" - więc udajesz że wiesz.<br/>
                  Efekt? Siedzisz w ciemności o 22:00 i myślisz: "Czy to ma sens?"<br/><br/>
                  
                  <strong className="text-white">I nie ma z kim o tym pogadać. Bo faceci nie mówią o wątpliwościach.</strong>
                </p>
              </Card>
            </div>

            <p className="text-center text-lg md:text-xl text-silver-mist mt-16 leading-relaxed">
              Nie szukasz kolejnej motywacyjnej gadki.<br/>
              Nie potrzebujesz inspiracji do działania.<br/><br/>
              
              <strong className="text-white">Potrzebujesz systemu, który zadziała dla twojego analitycznego umysłu - nie przeciwko niemu.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-quantum-blue to-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
              CO WYNIESIESZ Z TEGO WARSZTATU?
            </h2>
            
            <p className="text-xl text-center text-silver-mist mb-16 leading-relaxed">
              To nie będzie teoria. To 90 minut konkretnej pracy,<br/>
              podczas której przeprowadzimy cię przez framework,<br/>
              który zmienia chaos w klarowność.
            </p>

            <div className="space-y-8">
              {/* Outcome 1 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-ascension-pink">1</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">KLAROWNA DIAGNOZA</h3>
                    <span className="text-luminal-magenta">20 minut</span>
                  </div>
                </div>
                <p className="text-silver-mist leading-relaxed ml-16">
                  Zobaczysz na żywo, gdzie leży konflikt między twoimi wartościami (wizja)<br/>
                  a brakiem codziennej struktury (plan).<br/><br/>
                  
                  Ludwik pokaże źródło problemu. Mateusz przełoży to na konkret.<br/>
                  To sedno webinaru - dwie perspektywy, jeden system.<br/><br/>
                  
                  <strong className="text-white">Nie teoria. Diagnoza twojej sytuacji w 20 minut.</strong>
                </p>
              </Card>

              {/* Outcome 2 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-ascension-pink">2</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">FRAMEWORK DO NATYCHMIASTOWEGO UŻYCIA</h3>
                    <span className="text-luminal-magenta">45 minut</span>
                  </div>
                </div>
                <p className="text-silver-mist leading-relaxed ml-16">
                  Otrzymasz prostą matrycę 4 obszarów życia:<br/>
                  <strong className="text-white">Work | Health | Relations | Growth</strong><br/><br/>
                  
                  W 5 minut zmapujesz, gdzie naprawdę jesteś.<br/>
                  To narzędzie od Mateusza. Konkret, który da ci jasność<br/>
                  i pozwoli "zamknąć otwarte pętle" w głowie.<br/><br/>
                  
                  <strong className="text-white">Nie teoria. Praktyka, którą wdrożysz jeszcze podczas webinaru.</strong>
                </p>
              </Card>

              {/* Outcome 3 */}
              <Card className="glass-card p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-ascension-pink">3</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">KONKRETNY PLAN NA NASTĘPNY TYDZIEŃ</h3>
                    <span className="text-luminal-magenta">25 minut</span>
                  </div>
                </div>
                <p className="text-silver-mist leading-relaxed ml-16">
                  Zrozumiesz, dlaczego sam plan to pusta checklista,<br/>
                  a sama wizja to marzycielstwo.<br/><br/>
                  
                  Połączymy te dwa światy: twoje wartości + struktura działania.<br/>
                  Wyjdziesz z konkretem, nie z kolejną listą "do przemyślenia".<br/><br/>
                  
                  <strong className="text-white">Bonus: Q&A - zadasz konkretne pytania, dostaniesz konkretne odpowiedzi.</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section className="py-20 bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
              AGENDA: 90 MINUT, ZERO FLUFFU
            </h2>
            
            <p className="text-xl text-center text-silver-mist mb-16 leading-relaxed">
              To nie pasywne słuchanie. To interaktywna sesja z konkretnymi deliverables.<br/>
              Przygotuj notes - będziesz pracował na żywo.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="glass-card p-8 border-l-4 border-ascension-pink">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-ascension-pink">1</span>
                    <h3 className="text-2xl font-bold text-white">DIAGNOZA: GDZIE STOISZ?</h3>
                  </div>
                  <span className="text-luminal-magenta font-semibold mt-2 md:mt-0">20 minut</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Ludwik i Mateusz zestawiają dwie perspektywy:<br/><br/>
                  
                  → Wartości vs. Działania (gdzie jest rozjazd?)<br/>
                  → Wizja vs. Struktura (co cię blokuje?)<br/>
                  → Analiza vs. Wykonanie (jak wyjść z pętli?)<br/><br/>
                  
                  <strong className="text-white">Zobaczysz źródło swojego problemu w 20 minut.</strong>
                </p>
              </Card>

              {/* Step 2 */}
              <Card className="glass-card p-8 border-l-4 border-ascension-pink">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-ascension-pink">2</span>
                    <h3 className="text-2xl font-bold text-white">NARZĘDZIE: TWÓJ KOMPAS W 5 MINUT</h3>
                  </div>
                  <span className="text-luminal-magenta font-semibold mt-2 md:mt-0">45 minut</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Mateusz prowadzi praktyczną mini-lekcję:<br/><br/>
                  
                  → Matryca 4 obszarów: Work | Health | Relations | Growth<br/>
                  → Mapowanie punktu "tu i teraz" (nie w głowie, NA PAPIERZE)<br/>
                  → Identyfikacja JEDNEGO głównego konfliktu<br/><br/>
                  
                  Otrzymasz prosty szablon do wypełnienia.<br/>
                  <strong className="text-white">Wyjdziesz z jasnością, od czego zacząć.</strong>
                </p>
              </Card>

              {/* Step 3 */}
              <Card className="glass-card p-8 border-l-4 border-ascension-pink">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-ascension-pink">3</span>
                    <h3 className="text-2xl font-bold text-white">SYSTEM: PLAN + WARTOŚCI = KIERUNEK</h3>
                  </div>
                  <span className="text-luminal-magenta font-semibold mt-2 md:mt-0">25 minut</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Łączymy kropki. Ludwik + Mateusz pokazują:<br/><br/>
                  
                  → Dlaczego wizja bez planu = marzycielstwo<br/>
                  → Dlaczego plan bez wartości = pusta lista zadań<br/>
                  → Jak połączyć te dwa elementy w spójny system nawigacji<br/><br/>
                  
                  <strong className="text-white">Bonus: Q&A - zadasz konkretne pytania, dostaniesz konkretne odpowiedzi.</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section className="py-20 bg-gradient-to-br from-neural-violet to-quantum-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              DWÓCH LIDERÓW. DWIE PERSPEKTYWY. JEDEN SYSTEM.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Ludwik */}
              <Card className="glass-card p-8">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/ludwik-siadlak-profile.png" 
                    alt="Ludwik C. Siadlak" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-ascension-pink"
                  />
                  <h3 className="text-2xl font-bold text-white text-center">LUDWIK C. SIADLAK</h3>
                  <p className="text-luminal-magenta text-center font-semibold">Założyciel | Lifehacker | MCT</p>
                </div>
                <p className="text-silver-mist leading-relaxed mb-6">
                  Od instruktora najsilniejszych armii świata po architekta mentalnych przełomów.<br/><br/>
                  
                  Ludwik pomaga dostrzec pułapki umysłu i dostarcza narzędzi ze styku mindset/mental.<br/><br/>
                  
                  <strong className="text-white">Jego zadanie na webinarze:</strong><br/>
                  → Pokazać źródło problemu (wartości vs. działania)<br/>
                  → Zainspirować do głębszej pracy<br/>
                  → Otworzyć drzwi do Męskiego Kompasu
                </p>
                <div className="inline-block px-4 py-2 bg-ascension-pink/20 border border-ascension-pink rounded-lg text-ascension-pink font-semibold">
                  [ISKRA] Mindset | Wartości | Transformacja
                </div>
              </Card>

              {/* Mateusz */}
              <Card className="glass-card p-8">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/mateusz-lizak-profile.png" 
                    alt="Mateusz Lizak" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-luminal-magenta"
                  />
                  <h3 className="text-2xl font-bold text-white text-center">MATEUSZ LIZAK</h3>
                  <p className="text-luminal-magenta text-center font-semibold">Mentor Świadomych Mężczyzn</p>
                </div>
                <p className="text-silver-mist leading-relaxed mb-6">
                  Od operatora maszyn CNC po mentora świadomych mężczyzn. Przeszedł przez wszystkie pułapki analitycznego umysłu.<br/><br/>
                  
                  Mateusz twardo stąpa po ziemi i dostarcza sprawdzonych narzędzi.<br/><br/>
                  
                  <strong className="text-white">Jego zadanie na webinarze:</strong><br/>
                  → Dać konkretny framework (matryca 4 obszarów)<br/>
                  → Przełożyć teorię na praktyczne działanie<br/>
                  → Pokazać, jak wdrażać system krok po kroku
                </p>
                <div className="inline-block px-4 py-2 bg-luminal-magenta/20 border border-luminal-magenta rounded-lg text-luminal-magenta font-semibold">
                  [GRUNT] Konkret | Narzędzia | Działanie
                </div>
              </Card>
            </div>

            <p className="text-center text-xl text-white font-semibold">
              Razem tworzymy przestrzeń, gdzie wielkie wizje spotykają się z realnym działaniem.
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHO SECTION */}
      <section className="py-20 bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              DLA KOGO JEST TEN WARSZTAT?
            </h2>

            <div className="space-y-8">
              {/* FOR WHO - YES */}
              <Card className="glass-card p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-white mb-6">✓ TO JEST DLA CIEBIE, JEŚLI:</h3>
                <ul className="space-y-3 text-silver-mist">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Masz 30+ lat i analityczny, systematyczny umysł</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Pracujesz w IT jako team leader, inżynier lub architekt, jesteś konsultantem, freelancerem lub właścicielem biznesu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Masz stabilną sytuację, ale brakuje ci klarownego kierunku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Gubisz się w natłoku opcji i projektów (wszystko ważne = nic ważne)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Masz dość teorii i szukasz praktycznych narzędzi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Cenisz konkret i strukturę ponad niekończące się dyskusje</span>
                  </li>
                </ul>
              </Card>

              {/* WHY MALE */}
              <Card className="glass-card p-8 border-l-4 border-ascension-pink">
                <h3 className="text-2xl font-bold text-white mb-6">DLACZEGO "MĘSKA" PERSPEKTYWA?</h3>
                <p className="text-silver-mist leading-relaxed mb-4">
                  To przestrzeń dla mężczyzn. Nie przeciw kobietom. Po prostu inna.<br/><br/>
                  
                  → Mówimy wprost, bez owijania w bawełnę<br/>
                  → Działamy konkretnie, bez duchowego tłumaczenia<br/>
                  → Budujemy systemy, bez emotionalnego processingu<br/><br/>
                  
                  Jeśli jesteś kobietą, która ceni ten styl - welcome.<br/><br/>
                  
                  <strong className="text-white">Nasz core: Analityczni profesjonaliści 30+, którzy mają dość coachingowego bullshitu i chcą konkretnych narzędzi.</strong>
                </p>
              </Card>

              {/* NOT FOR WHO */}
              <Card className="glass-card p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-white mb-6">⚠️ TO NIE JEST DLA CIEBIE, JEŚLI:</h3>
                <ul className="space-y-3 text-silver-mist">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Szukasz szybkich rozwiązań bez pracy nad sobą</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Chcesz inspiracji zamiast konkretnego systemu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Nie jesteś gotów na szczerą diagnozę swojej sytuacji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Preferujesz duchowe poszukiwania nad praktyczne frameworki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Nie masz 90 minut na pełne zaangażowanie w sesję</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS SECTION */}
      <section className="py-20 bg-gradient-to-br from-quantum-blue to-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              LOGISTYKA: SIMPLE & CLEAR
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">DATA</h4>
                <p className="text-silver-mist">Czwartek,<br/>16 października 2025</p>
              </Card>

              <Card className="glass-card p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">GODZINA</h4>
                <p className="text-silver-mist">19:00 - 20:30 CET<br/>(czas polski)</p>
              </Card>

              <Card className="glass-card p-6 text-center">
                <Monitor className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">FORMAT</h4>
                <p className="text-silver-mist">Live online via Zoom<br/>(Link po zapisie)</p>
              </Card>

              <Card className="glass-card p-6 text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">NAGRANIE</h4>
                <p className="text-silver-mist">TAK - dostęp 48h<br/>(tylko audio)</p>
              </Card>

              <Card className="glass-card p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">CENA</h4>
                <p className="text-silver-mist">Bezpłatnie (0 PLN)<br/>(Pilotaż)</p>
              </Card>

              <Card className="glass-card p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-ascension-pink" />
                <h4 className="text-xl font-bold text-white mb-2">MIEJSCA</h4>
                <p className="text-silver-mist">Ograniczone<br/>(Jakość {'>'}  ilość)</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              PRZESTAŃ UDAWAĆ, ŻE WSZYSTKO OGARNIASZ.<br/>
              ZACZNIJ DZIAŁAĆ Z SYSTEMEM.
            </h2>

            <p className="text-xl text-silver-mist mb-10 leading-relaxed">
              Ten warsztat to nie kolejna teoria do przemyślenia.<br/>
              To konkretny framework, który wdrożysz jeszcze podczas sesji.<br/><br/>
              
              90 minut, które mogą zmienić sposób, w jaki podejmujesz decyzje<br/>
              przez następne 90 dni.<br/><br/>
              
              <strong className="text-white">Bezpłatnie. Live. Z możliwością zadawania pytań.</strong>
            </p>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-xl px-12 py-8 mb-8 bg-white text-neural-violet hover:bg-silver-mist">
                REZERWUJĘ BEZPŁATNE (0 PLN) MIEJSCE
              </Button>
            </a>

            <Card className="glass-card p-8 text-left">
              <p className="text-white font-bold mb-4">📧 Po zapisie otrzymasz:</p>
              <ul className="text-silver-mist space-y-2 mb-6">
                <li>• Link do webinaru (Zoom)</li>
                <li>• Szablon matrycy 4 obszarów (Markdown / PDF)</li>
                <li>• Reminder 24h i 1h przed startem</li>
              </ul>
              <p className="text-center text-luminal-magenta font-semibold">
                16 października | 19:00 CET | ~90 minut
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
