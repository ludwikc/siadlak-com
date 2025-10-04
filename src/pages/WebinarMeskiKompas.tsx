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
        title="Warsztat: Męski Kompas - Przestań Analizować, Zacznij Nawigować"
        description="90-minutowy warsztat dla analitycznych profesjonalistów 30+. Wypełnij 2 praktyczne narzędzia z kursu Męski Kompas. Ludwik Siadlak + Mateusz Lizak. 16 października."
      />

      {/* HERO SECTION */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ backgroundColor: 'hsl(210, 45%, 12%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary-foreground leading-tight">
              JEŚLI JESTEŚ FACETEM KTÓRY "POWINIEN OGARNĄĆ SAM" ALE W GŁOWIE MASZ PARALIŻ
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-accent">
              TEN WARSZTAT JEST DLA CIEBIE
            </h2>

            <div className="mb-10">
              <div className="inline-block bg-card/15 rounded-xl px-5 py-4 ring-1 ring-border/40 backdrop-blur-sm text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
                <p>90 minut które pokażą ci dlaczego więcej analizy = więcej paraliżu.<br/>
                I co z tym zrobić bez kolejnego kursu rozwoju osobistego.</p>
              </div>
            </div>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 mb-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                REZERWUJ MIEJSCE - 16 PAŹDZIERNIKA, 19:00
              </Button>
            </a>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/80">
              <span className="flex items-center gap-2">📅 16 października 2025</span>
              <span className="flex items-center gap-2">🕐 19:00 CET</span>
              <span className="flex items-center gap-2">⏱️ 90 minut</span>
              <span className="flex items-center gap-2">💻 Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOZA: 3 MĘSKIE PUŁAPKI */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              DIAGNOZA: CZY TO O TOBIE?
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              Sprawdź, czy rozpoznajesz te wzorce w swoim wewnętrznym systemie operacyjnym.
            </p>

            <div className="space-y-8">
              {/* PUŁAPKA #1 */}
              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-foreground">PUŁAPKA #1: "POWINIENEM OGARNĄĆ SAM"</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Przekonanie że prawdziwy facet wszystko ogarnął.<br/>
                  W praktyce: strach przed pokazaniem że nie wiesz, co robić.<br/>
                  Efekt: udajesz kontrolę zamiast wziąć odpowiedzialność za to, co naprawdę jest twoje.
                </p>
                <div className="ml-12 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Konkretnie:</p>
                  <ul className="space-y-2">
                    <li>• Masz 20 projektów, zero decyzji którym się poświęcić</li>
                    <li>• "Nie wiem czy dam radę" - zdanie którego nie możesz powiedzieć głośno</li>
                    <li>• Paraliż zamiast działania, bo "fachowiec powinien wiedzieć"</li>
                  </ul>
                </div>
              </Card>

              {/* PUŁAPKA #2 */}
              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-foreground">PUŁAPKA #2: "ZATRZYMANY W DRZWIACH"</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Niby obecny, ale niezdolny do wejścia.<br/>
                  W relacji. W projekcie. W życiowej ścieżce.
                </p>
                <div className="ml-12 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Konkretnie:</p>
                  <ul className="space-y-2">
                    <li>• Analizujesz zamiast działać = kolejny dzień bez ruchu</li>
                    <li>• Lęk przed podjęciem złej decyzji silniejszy niż chęć ruchu do przodu</li>
                    <li>• Nieokreślona definicja męskości: "Jak mam być facetem w 2025?"</li>
                  </ul>
                </div>
              </Card>

              {/* PUŁAPKA #3 */}
              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-2xl font-bold text-foreground">PUŁAPKA #3: "ZA DUŻO MYŚLĘ, ZA MAŁO ROBIĘ"</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Przekonanie: "Muszę wszystko kontrolować żeby być facetem"<br/>
                  Efekt: nadmiar analizy dusi relacje i projekty.
                </p>
                <div className="ml-12 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Konkretnie:</p>
                  <ul className="space-y-2">
                    <li>• Mental "zawsze on" - brak resetu, brak przestrzeni na spontaniczność</li>
                    <li>• Potrzebujesz pewności zanim ruszysz = nigdy nie ruszasz</li>
                    <li>• Perfekcjonizm zamiast postępu</li>
                  </ul>
                </div>
              </Card>
            </div>

            <Card className="bg-accent/10 border-accent/30 p-8 mt-16 text-center">
              <p className="text-xl font-bold text-foreground mb-4">
                TE 3 PROBLEMY MAJĄ JEDNO ŹRÓDŁO:
              </p>
              <p className="text-2xl font-bold text-accent mb-6">
                Brak systemu do bycia facetem w 2025.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nie potrzebujesz więcej analizy.<br/>
                Potrzebujesz 2 prostych narzędzi.
              </p>
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  TAK, CHCĘ TE NARZĘDZIA
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CO WYNIESIESZ Z WARSZTATU */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              CO WYNIESIESZ Z TEGO WARSZTATU?
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              To nie będzie teoria. To 90 minut, podczas których wypełnisz<br/>
              2 konkretne narzędzia z 5-tygodniowego kursu Męski Kompas.
            </p>

            <div className="space-y-8">
              {/* DIAGNOZA */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">1</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">DIAGNOZA: 3 MĘSKIE PUŁAPKI</h3>
                    <span className="text-green-600 font-semibold">20 minut</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16">
                  Ludwik + Mateusz zestawiają perspektywy na 3 pain pointy:<br/><br/>

                  → <strong className="text-foreground">"Powinienem ogarnąć sam"</strong> (strach przed pokazaniem słabości)<br/>
                  → <strong className="text-foreground">"Zatrzymany w drzwiach"</strong> (paraliż decyzyjny)<br/>
                  → <strong className="text-foreground">"Za dużo myślę, za mało robię"</strong> (analiza vs działanie)<br/><br/>

                  <strong className="text-foreground">Zobaczysz źródło problemu, nie tylko objawy.</strong>
                </p>
              </Card>

              {/* NARZĘDZIE #1 */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">2</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">NARZĘDZIE #1: DEKLARACJA ODPOWIEDZIALNOŚCI</h3>
                    <span className="text-green-600 font-semibold">25 minut</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16 mb-6">
                  Wypełnisz szablon z Tygodnia 1 kursu Męski Kompas:<br/><br/>

                  → Za co dzisiaj biorę odpowiedzialność? (4 obszary życia)<br/>
                  → Co jest moje vs. co projektuję na innych?<br/>
                  → Jak przestać udawać że wszystko ogarniam?<br/><br/>

                  <strong className="text-foreground">Wyjdziesz z wypełnionym szablonem, nie tylko konceptem.</strong>
                </p>
                <Card className="bg-white border-green-300 p-6 ml-16">
                  <p className="font-bold text-foreground mb-3">Przykład z warsztatu:</p>
                  <div className="font-mono text-sm text-muted-foreground space-y-3">
                    <p><strong className="text-foreground">DZISIAJ BIORĘ ODPOWIEDZIALNOŚĆ ZA:</strong></p>
                    <p><strong className="text-green-600">Relacje:</strong> Za jakość czasu z partnerką.<br/>
                    <span className="ml-8">NIE za jej nastrój.</span></p>
                    <p><strong className="text-green-600">Zdrowie:</strong> Za to, czy pójdę spać przed 23:00.<br/>
                    <span className="ml-8">NIE za to, że jestem zmęczony.</span></p>
                    <p><strong className="text-green-600">Finanse:</strong> Za zaoszczędzenie 500 zł w tym miesiącu.<br/>
                    <span className="ml-8">NIE za to, że nie mam miliona.</span></p>
                    <p><strong className="text-green-600">Emocje:</strong> Za to, że powiem jak się czuję.<br/>
                    <span className="ml-8">NIE za to, że ktoś mnie zrozumie.</span></p>
                  </div>
                </Card>
              </Card>

              {/* NARZĘDZIE #2 */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">3</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">NARZĘDZIE #2: DECYZJE 3-3-3</h3>
                    <span className="text-green-600 font-semibold">25 minut</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16 mb-6">
                  Zidentyfikujesz JEDNĄ decyzję którą odkładasz:<br/><br/>

                  → W jakim obszarze zwlekam? (praca, relacje, zdrowie, rozwój)<br/>
                  → Co mnie blokuje? (strach przed pomyłką, oceną, brakiem pewności)<br/>
                  → Jaka najmniejsza decyzja mogę podjąć w tym tygodniu?<br/><br/>

                  <strong className="text-foreground">Wyjdziesz z konkretną mikrodecyzją do zrealizowania.</strong>
                </p>
                <Card className="bg-white border-green-300 p-6 ml-16 mb-4">
                  <p className="font-bold text-foreground text-center text-xl mb-3">Framework:</p>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-green-600">3 decyzje dziennie</p>
                    <p className="text-2xl font-bold text-green-600">Przez 3 dni</p>
                    <p className="text-2xl font-bold text-green-600">Każda w max 3 minuty</p>
                  </div>
                  <p className="text-center text-muted-foreground mt-4">Nie wielkie decyzje życiowe. MIKRO.</p>
                </Card>
                <div className="ml-16 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Przykłady:</p>
                  <ul className="space-y-2">
                    <li>• Odpiszę na tego emaila dziś wieczorem (nie: może jutro)</li>
                    <li>• Kupię te buty lub nie kupię (nie: pomyślę jeszcze)</li>
                    <li>• Powiem partnerce że potrzebuję wieczoru dla siebie (nie: zobaczę jak będzie)</li>
                  </ul>
                </div>
              </Card>

              {/* SYSTEM + PITCH */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">4</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">SYSTEM + PITCH DO KURSU + Q&A</h3>
                    <span className="text-green-600 font-semibold">20 minut</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16">
                  Jak 2 narzędzia łączą się w 5-tygodniowy system:<br/><br/>

                  → Preview pozostałych 4 narzędzi kursu<br/>
                  → Co dostajesz w pełnym programie Męski Kompas?<br/>
                  → Q&A - konkretne pytania, konkretne odpowiedzi<br/><br/>

                  <strong className="text-foreground">Pitch bez bullshitu. Jeśli rezonuje - zapisz się.</strong>
                </p>
              </Card>
            </div>

            <p className="text-center text-xl text-accent font-bold mt-12">
              2 narzędzia z 6. Reszta czeka w 5-tygodniowym kursie.
            </p>

            <div className="text-center mt-8">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  CHCĘ WYPEŁNIĆ TE NARZĘDZIA LIVE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KTO PROWADZI */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              KTO PROWADZI TEN WARSZTAT?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Ludwik */}
              <Card className="bg-gradient-to-br from-white via-gray-50 to-accent/5 border-accent/20 p-8">
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/ludwik-siadlak-profile.png"
                    alt="Ludwik C. Siadlak"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent"
                  />
                  <h3 className="text-2xl font-bold text-foreground text-center">LUDWIK C. SIADLAK</h3>
                  <p className="text-accent text-center font-semibold">Założyciel i wizjoner systemu Męskiego Kompasu</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MCT (Microsoft Certified Trainer), który nauczył się różnicy między byciem najlepszym a byciem prawdziwym. Od instruktora najsilniejszych armii świata po architekta mentalnych przełomów.<br/><br/>

                  <strong className="text-foreground">Co dostarcza Ludwik:</strong><br/>
                  → Perspektywę emocjonalną i mindsetową<br/>
                  → Narzędzia ze styku psychologii i męskiej świadomości<br/>
                  → Autentyczną transformację bez bullshitu
                </p>
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-lg text-accent font-semibold">
                  [ISKRA] Mindset | Emocje | Transformacja
                </div>
              </Card>

              {/* Mateusz */}
              <Card className="bg-gradient-to-br from-white via-gray-50 to-primary/5 border-primary/20 p-8">
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/mateusz-lizak-profile.png"
                    alt="Mateusz Lizak"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                  />
                  <h3 className="text-2xl font-bold text-foreground text-center">MATEUSZ LIZAK</h3>
                  <p className="text-primary text-center font-semibold">Mentor świadomych mężczyzn i mistrz pracy warsztatowej</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Praktyk, który przeszedł przez wszystkie pułapki analitycznego umysłu. Od operatora maszyn CNC po mentora świadomych mężczyzn. Mistrz konkretu i pracy warsztatowej.<br/><br/>

                  <strong className="text-foreground">Co dostarcza Mateusz:</strong><br/>
                  → Sprawdzone narzędzia z ziemi (nie z chmur)<br/>
                  → Warsztatowy podział pracy - konkret ponad teorię<br/>
                  → Praktyczne działania które zrobisz dziś, nie "kiedyś"
                </p>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-lg text-primary font-semibold">
                  [GRUNT] Konkret | Narzędzia | Działanie
                </div>
              </Card>
            </div>

            <Card className="bg-card border p-8">
              <p className="text-xl font-bold text-foreground mb-4">PODZIAŁ PRACY:</p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-accent">Ludwik:</strong> Dlaczego te 3 pułapki cię blokują (emocje + tożsamość)</p>
                <p><strong className="text-primary">Mateusz:</strong> Co z tym zrobić (narzędzia + działanie)</p>
              </div>
              <p className="text-center text-lg font-semibold text-foreground mt-6">
                Zero filozofowania. Same robocze narzędzia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              AGENDA: 90 MINUT KONKRETNEJ PRACY
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              Nie pasywne słuchanie. Wypełnisz 2 narzędzia live.<br/>
              Przygotuj notes - będziesz pracował na żywo.
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-accent bg-background p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-accent font-semibold text-lg">⏱️ 19:00 - 19:20</span>
                    <h3 className="text-2xl font-bold text-foreground">DIAGNOZA: 3 MĘSKIE PUŁAPKI</h3>
                  </div>
                  <span className="text-accent font-semibold">20 minut</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ludwik + Mateusz zestawiają dwie perspektywy:<br/><br/>

                  → "Powinienem ogarnąć sam" (lęk przed oceną)<br/>
                  → "Zatrzymany w drzwiach" (paraliż decyzyjny)<br/>
                  → "Za dużo myślę" (analiza vs działanie)<br/><br/>

                  <strong className="text-foreground">Nie teoria. Konkretna diagnoza TWOJEJ sytuacji.</strong>
                </p>
              </Card>

              <Card className="border-l-4 border-accent bg-background p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-accent font-semibold text-lg">⏱️ 19:20 - 19:45</span>
                    <h3 className="text-2xl font-bold text-foreground">NARZĘDZIE: DEKLARACJA ODPOWIEDZIALNOŚCI</h3>
                  </div>
                  <span className="text-accent font-semibold">25 minut</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mateusz prowadzi przez szablon (Tydzień 1 kursu):<br/><br/>

                  → Za co dzisiaj biorę odpowiedzialność?<br/>
                  → 4 obszary: Relacje, Zdrowie, Finanse, Emocje<br/>
                  → Co jest moje vs. co projektuję?<br/><br/>

                  <strong className="text-foreground">Live wypełnianie. Wyjdziesz z gotowym szablonem.</strong>
                </p>
              </Card>

              <Card className="border-l-4 border-accent bg-background p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-accent font-semibold text-lg">⏱️ 19:45 - 20:10</span>
                    <h3 className="text-2xl font-bold text-foreground">NARZĘDZIE: DECYZJE 3-3-3</h3>
                  </div>
                  <span className="text-accent font-semibold">25 minut</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mateusz prowadzi przez framework (Tydzień 3 kursu):<br/><br/>

                  → Zidentyfikuj obszar gdzie zwlekasz z decyzją<br/>
                  → Co Cię blokuje? (strach, brak info, perfekcjonizm)<br/>
                  → Jaka najmniejsza decyzja = ruch w następnym tygodniu?<br/><br/>

                  <strong className="text-foreground">Wyjdziesz z konkretną mikrodecyzją do wykonania.</strong>
                </p>
              </Card>

              <Card className="border-l-4 border-accent bg-background p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-accent font-semibold text-lg">⏱️ 20:10 - 20:30</span>
                    <h3 className="text-2xl font-bold text-foreground">SYSTEM + PITCH DO KURSU + Q&A</h3>
                  </div>
                  <span className="text-accent font-semibold">20 minut</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Jak 2 narzędzia łączą się w 5-tygodniowy system:<br/><br/>

                  → Preview pozostałych 4 narzędzi kursu<br/>
                  → Co dostajesz w pełnym programie Męski Kompas?<br/>
                  → Q&A - konkretne pytania, konkretne odpowiedzi<br/><br/>

                  <strong className="text-foreground">Pitch bez bullshitu. Jeśli rezonuje - zapisz się.</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DLA KOGO */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              DLA KOGO JEST TEN WARSZTAT?
            </h2>

            <div className="space-y-8">
              <Card className="bg-green-50 border-green-200 border-l-4 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">✅ WARSZTAT JEST DLA CIEBIE JEŚLI:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Jesteś analitycznym profesjonalistą 30+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Czujesz, że utknąłeś w pętli analizy i paraliżu decyzyjnego</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>"Powinienem ogarnąć sam" to zdanie które dobrze znasz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Potrzebujesz systemu, nie kolejnej motywacyjnej gadki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Cenisz konkret, strukturę i praktyczne narzędzia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Chcesz przestać udawać że wszystko ogarniam</span>
                  </li>
                </ul>
                <p className="mt-6 text-foreground font-semibold">
                  To dla developerów, team leaderów, managerów, freelancerów, którzy mają dość stania w drzwiach własnego życia.
                </p>
              </Card>

              <Card className="bg-destructive/5 border-destructive/20 border-l-4 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">❌ WARSZTAT NIE JEST DLA CIEBIE JEŚLI:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Szukasz szybkich recept na sukces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Chcesz motywacyjnych uniesień zamiast roboczych narzędzi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Nie jesteś gotowy wypełnić 2 szablonów przez 90 minut</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Wolisz filozofować niż działać</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Szukasz duchowego oświecenia, nie praktycznych rozwiązań</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTYKA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              LOGISTYKA I PLAN DZIAŁANIA
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-background border p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">DATA</h4>
                <p className="text-muted-foreground">Czwartek,<br/>16 października 2025</p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">GODZINA</h4>
                <p className="text-muted-foreground">19:00 CET<br/>(czas polski)</p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Monitor className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">FORMAT</h4>
                <p className="text-muted-foreground">Live online<br/>(Link po zapisie)</p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">CZAS TRWANIA</h4>
                <p className="text-muted-foreground">90 minut<br/>(19:00 - 20:30)</p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">CO PRZYGOTOWAĆ</h4>
                <p className="text-muted-foreground">Notes i długopis<br/>(Wypełnianie live)</p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">MIEJSCA</h4>
                <p className="text-muted-foreground">Ograniczone<br/>(Jakość {'>'} ilość)</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              PRZESTAŃ ANALIZOWAĆ.<br/>
              ZACZNIJ NAWIGOWAĆ.
            </h2>

            <div className="text-left max-w-3xl mx-auto mb-12">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Masz dwa wyjścia:
              </p>

              <Card className="bg-destructive/5 border-destructive/20 p-6 mb-4">
                <p className="font-bold text-foreground mb-2">1. Kontynuuj pętlę analizy</p>
                <p className="text-muted-foreground">
                  Kolejny kurs. Kolejna książka. Kolejne "może jak będę gotowy".<br/>
                  <strong className="text-foreground">Efekt: za rok będziesz w tym samym miejscu.</strong>
                </p>
              </Card>

              <Card className="bg-green-50 border-green-200 p-6">
                <p className="font-bold text-foreground mb-2">2. Wypełnij 2 narzędzia w 90 minut</p>
                <p className="text-muted-foreground">
                  Deklaracja Odpowiedzialności + Decyzje 3-3-3.<br/>
                  <strong className="text-foreground">Efekt: wyjdziesz z konkretnym szablonem i mikrodecyzją do wykonania.</strong>
                </p>
              </Card>
            </div>

            <Card className="bg-card border p-8 mb-8">
              <p className="text-2xl font-bold text-accent mb-4">
                Nie potrzebujesz więcej informacji.<br/>
                Potrzebujesz systemu nawigacji.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Męski Kompas to nie kurs rozwoju osobistego.<br/>
                To praktyczny framework do bycia facetem w 2025.
              </p>
              <p className="text-muted-foreground">
                Bez udawania że ogarniam.<br/>
                Bez zatrzymywania się w drzwiach.<br/>
                Bez pętli analizy.
              </p>
            </Card>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-xl px-12 py-8 mb-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                REZERWUJ SWOJE MIEJSCE - 16 PAŹDZIERNIKA, 19:00
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mb-8">
              Liczba miejsc jest ograniczona, aby zapewnić jakość sesji Q&A.
            </p>

            <Card className="bg-card border p-6 text-left">
              <p className="text-foreground font-bold mb-4">WIDZIMY SIĘ 16 PAŹDZIERNIKA.</p>
              <p className="text-muted-foreground mb-6">Ludwik + Mateusz<br/>Męski Kompas</p>

              <div className="border-t pt-4 space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">P.S.</strong><br/>
                  To nie będzie pasywny webinar. Przygotuj notes.<br/>
                  Będziesz pracował live przez 90 minut.<br/>
                  Jeśli nie jesteś gotowy na konkret - nie zapisuj się.
                </p>
                <p>
                  <strong className="text-foreground">P.P.S.</strong><br/>
                  Po warsztacie dostaniesz pitch do pełnego kursu (5 tygodni, 6 narzędzi, grupa 10 facetów).<br/>
                  Ale to na końcu. Najpierw wypełniasz 2 narzędzia i widzisz czy system działa.<br/>
                  Zero presji. Konkret ponad wszystko.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
