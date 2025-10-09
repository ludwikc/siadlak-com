import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  Calendar,
  Clock,
  Monitor,
  Users,
  Headphones,
  DollarSign,
} from "lucide-react";

export default function WebinarMeskiKompas() {
  const ctaUrl = "https://buy.siadlak.com/checkout/spotkanie-online";

  return (
    <Layout hideHeader={true}>
      <SEO
        title="Warsztat: Męski Kompas - Koniec z Dryfowaniem"
        description="90-minutowy warsztat dla analitycznych mężczyzn 30+. Jak analityczny umysł sabotuje męskość i jak zamienić go w największą siłę. Ludwik Siadlak + Mateusz Lizak. 16 października."
      />

      {/* HERO SECTION */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ backgroundColor: "hsl(210, 45%, 12%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,204,0,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency badge */}
            <div className="flex justify-center mb-8">
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 animate-pulse"
                style={{
                  backgroundColor: "hsl(45, 85%, 50%)",
                  borderColor: "hsl(45, 85%, 60%)",
                  boxShadow: "0 0 30px rgba(255, 204, 0, 0.3)",
                }}
              >
                <span className="text-2xl">⚠️</span>
                <span className="font-bold text-black text-sm md:text-base">
                  DARMOWY WARSZTAT LIVE • OGRANICZONA LICZBA MIEJSC
                </span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-[1.1] tracking-tight">
                KONIEC Z DRYFOWANIEM:
                <br />
                <span
                  className="inline-block mt-2"
                  style={{ color: "hsl(45, 85%, 55%)" }}
                >
                  JAK ANALITYCZNY UMYSŁ
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl">
                  SABOTUJE TWOJĄ MĘSKOŚĆ
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl mt-2 inline-block">
                  I JAK ZAMIENIĆ GO W NAJWIĘKSZĄ SIŁĘ
                </span>
              </h1>

              <div className="mb-10 flex justify-center">
                <div
                  className="inline-block rounded-2xl px-8 py-6 border max-w-3xl backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderColor: "rgba(255, 204, 0, 0.5)",
                    boxShadow:
                      "0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 204, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <p className="text-lg md:text-2xl font-bold text-white leading-relaxed">
                    90-minutowy warsztat dla analitycznych mężczyzn 30+,
                    <br className="hidden md:block" />
                    którzy mają dość zastanawiania się, zamiast działania.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="text-base md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-0"
                    style={{
                      backgroundColor: "hsl(45, 85%, 50%)",
                      color: "hsl(210, 20%, 8%)",
                    }}
                  >
                    <span className="inline md:hidden">REZERWUJ MIEJSCE →</span>
                    <span className="hidden md:inline">
                      REZERWUJ MIEJSCE - 16 PAŹDZIERNIKA, 19:00 →
                    </span>
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span className="text-xl">📅</span>
                  <span className="text-white font-semibold text-sm md:text-base">
                    16 października 2025
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span className="text-xl">🕐</span>
                  <span className="text-white font-semibold text-sm md:text-base">
                    19:00 CET
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span className="text-xl">⏱️</span>
                  <span className="text-white font-semibold text-sm md:text-base">
                    90 minut
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <span className="text-xl">💻</span>
                  <span className="text-white font-semibold text-sm md:text-base">
                    Online (Zoom)
                  </span>
                </div>
              </div>

              <p className="text-white/60 text-sm md:text-base italic">
                Darmowy warsztat pokazowy • Bez żadnych zobowiązań • Link
                dostaniesz mailem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN AGITATION */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              CZY TO O TOBIE?
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              Sprawdź, czy rozpoznajesz te wzorce w swoim wewnętrznym systemie
              operacyjnym.
            </p>

            <div className="space-y-8">
              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      DRYFUJESZ, ZAMIAST NAWIGOWAĆ
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reagujesz na życie, zamiast je kreować. Czekasz, aż coś
                      się wyklaruje. Analizujesz opcje, zamiast podejmować
                      decyzje. W pracy, w związku, w rozwijaniu się — dryfujesz.
                      Wiesz, że to nie tak powinno być. Ale nie masz kompasu,
                      który pokazałby ci, gdzie jest twój północ.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      TWÓJ ANALITYCZNY UMYSŁ CIĘ PARALIŻUJE
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To co miało być twoją siłą — umiejętność myślenia,
                      planowania, analizy — stało się klatką. Twój umysł działa
                      na pełnych obrotach 24/7, ale to nie prowadzi do decyzji.
                      Prowadzi do paraliżu. Masz setki przemyśleń, zero działań.
                      I to cię wykańcza.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-destructive/5 border-destructive/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">❌</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      NIE MASZ SYSTEMU DO BYCIA FACETEM W 2025
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tradycyjne wzorce męskości nie działają. "Ogarnij sam",
                      "nie pokazuj słabości", "bądź silny" — to puste slogany,
                      które prowadzą do wypalenia. A nowe wzorce? Nieczytelne.
                      Nie wiesz, czym jest męskość dzisiaj. I w tej próżni...
                      dryfujesz.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-accent/10 border-accent/30 p-8 mt-16 text-center">
              <p className="text-xl font-bold text-foreground mb-4">
                TE 3 PROBLEMY MAJĄ JEDNO ŹRÓDŁO:
              </p>
              <p className="text-2xl font-bold text-accent mb-6">
                Brak systemu do nawigacji przez życie jako mężczyzna w 2025.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nie potrzebujesz więcej analizy.
                <br />
                Potrzebujesz 2 prostych narzędzi nawigacyjnych.
              </p>
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  TAK, CHCĘ TE NARZĘDZIA
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              DLACZEGO ANALITYCZNY UMYSŁ CIĘ SABOTUJE?
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              Bo używasz go nie tam, gdzie powinien działać.
            </p>

            <Card className="bg-background border p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                PRAWDA, KTÓREJ NIKT CI NIE POWIEDZIAŁ:
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Twój analityczny umysł to potężne narzędzie. Ale tylko wtedy,
                gdy wiesz, KIEDY go używać i KIEDY go wyłączyć.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Większość analitycznych mężczyzn popełnia ten sam błąd: używają
                umysłu wszędzie. W pracy, w związku, w podejmowaniu decyzji
                życiowych, w relacji z samym sobą.
              </p>
              <p className="text-lg font-bold text-foreground">
                Efekt? Paraliż analityczny. Nadmiar opcji. Zero decyzji.
                Wypalenie emocjonalne.
              </p>
            </Card>

            <Card className="bg-green-50 border-green-200 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                CO JEŚLI MOGŁOBY BYĆ INACZEJ?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Co jeśli mógłbyś:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">→</span>
                  <span>
                    <strong className="text-foreground">
                      Wykorzystać swój analityczny umysł jako siłę
                    </strong>{" "}
                    — nie jako przeszkodę.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">→</span>
                  <span>
                    <strong className="text-foreground">
                      Podejmować decyzje bez paraliżu
                    </strong>{" "}
                    — nawet wtedy, gdy nie masz wszystkich danych.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">→</span>
                  <span>
                    <strong className="text-foreground">
                      Nawigować przez życie z jasnością
                    </strong>{" "}
                    — zamiast dryfować w chaosie opcji.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              CO WYNIESIESZ Z TEGO WARSZTATU?
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-16 leading-relaxed">
              2 narzędzia nawigacyjne z kursu Męski Kompas.
              <br />
              Nie teoria. Praktyczne szablony, które wypełnisz live.
            </p>

            <div className="space-y-8">
              {/* NARZĘDZIE #1 */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">1</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      NARZĘDZIE: DEKLARACJA ODPOWIEDZIALNOŚCI
                    </h3>
                    <span className="text-green-600 font-semibold">
                      Tydzień 1 z kursu Męski Kompas
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16 mb-6">
                  Pierwsza rzecz, która kończy dryfowanie: określenie, za co TY
                  bierzesz odpowiedzialność, a czego nie.
                </p>
                <div className="ml-16 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">
                    Podczas warsztatu wypełnisz szablon:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • Za co dzisiaj biorę odpowiedzialność? (4 obszary życia:
                      Relacje, Zdrowie, Finanse, Emocje)
                    </li>
                    <li>• Co jest moje vs. co projektuję na innych?</li>
                    <li>• Jak przestać udawać, że wszystko ogarniam?</li>
                  </ul>
                  <p className="mt-4 font-bold text-foreground">
                    Wyjdziesz z wypełnionym szablonem. Nie tylko konceptem.
                  </p>
                </div>
              </Card>

              {/* NARZĘDZIE #2 */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">2</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      NARZĘDZIE: DECYZJE 3-3-3
                    </h3>
                    <span className="text-green-600 font-semibold">
                      Tydzień 3 z kursu Męski Kompas
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16 mb-6">
                  Druga rzecz, która przełamuje paraliż analityczny: system do
                  podejmowania mikrodecyzji.
                </p>
                <Card className="bg-white border-green-300 p-6 ml-16 mb-4">
                  <p className="font-bold text-foreground text-center text-xl mb-3">
                    Framework Decyzji 3-3-3:
                  </p>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-green-600">
                      3 decyzje dziennie
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      Przez 3 dni
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      Każda w max 3 minuty
                    </p>
                  </div>
                  <p className="text-center text-muted-foreground mt-4">
                    Nie wielkie decyzje życiowe. MIKRODECYZJE.
                  </p>
                </Card>
                <div className="ml-16 text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">
                    Podczas warsztatu zidentyfikujesz:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • Jedną decyzję, którą odkładasz (w pracy, związku,
                      zdrowiu, rozwoju)
                    </li>
                    <li>
                      • Co cię blokuje? (strach przed pomyłką, oceną, brakiem
                      pewności)
                    </li>
                    <li>
                      • Jaką najmniejszą decyzję możesz podjąć w tym tygodniu?
                    </li>
                  </ul>
                  <p className="mt-4 font-bold text-foreground">
                    Wyjdziesz z konkretną mikrodecyzją do zrealizowania. Nie z
                    konceptem.
                  </p>
                </div>
              </Card>

              {/* BONUS */}
              <Card className="bg-green-50 border-green-200 p-8">
                <div className="flex items-start gap-6 mb-4">
                  <span className="text-5xl font-bold text-green-600">3</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      BONUS: JAK ANALITYCZNY UMYSŁ STAJE SIĘ TWOJĄ SIŁĄ
                    </h3>
                    <span className="text-green-600 font-semibold">
                      Perspektywa Ludwika + Mateusza
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-16">
                  Ludwik + Mateusz pokażą ci, jak przestać walczyć ze swoim
                  umysłem i zacząć go używać tam, gdzie naprawdę działa.
                </p>
              </Card>
            </div>

            <p className="text-center text-xl text-accent font-bold mt-12">
              2 narzędzia z 6. Reszta czeka w 5-tygodniowym kursie Męski Kompas.
            </p>

            <div className="text-center mt-8">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  CHCĘ WYPEŁNIĆ TE NARZĘDZIA LIVE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              DLACZEGO MOŻESZ NAM ZAUFAĆ?
            </h2>

            <div className="space-y-8">
              <Card className="bg-background border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  BO SAM PRZEZ TO PRZESZLIŚMY
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ludwik i Mateusz to nie teoretycy od rozwoju osobistego. To
                  dwaj faceci, którzy sami utknęli w pętli analizy i paraliżu
                  decyzyjnego. I znaleźli wyjście.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Męski Kompas to system, który wyrosł z ich własnych
                  doświadczeń. Nie z teorii. Z praktyki. Z upadków. Z przełomów.
                </p>
              </Card>

              <Card className="bg-background border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  BO TO NIE JEST KOLEJNY KURS ROZWOJU OSOBISTEGO
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To system nawigacyjny dla analitycznych mężczyzn 30+.
                  Konkretne narzędzia. Zero filozofowania. Zero motywacyjnych
                  gadek.
                </p>
                <p className="text-lg font-bold text-foreground">
                  Wchodzisz z chaosem. Wychodzisz z kompasem.
                </p>
              </Card>
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
                  <h3 className="text-2xl font-bold text-foreground text-center">
                    LUDWIK C. SIADLAK
                  </h3>
                  <p className="text-accent text-center font-semibold">
                    Założyciel i wizjoner systemu Męskiego Kompasu
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MCT (Microsoft Certified Trainer), który nauczył się różnicy
                  między byciem najlepszym a byciem prawdziwym. Od instruktora
                  najsilniejszych armii świata po architekta mentalnych
                  przełomów.
                  <br />
                  <br />
                  <strong className="text-foreground">
                    Co dostarcza Ludwik:
                  </strong>
                  <br />
                  → Perspektywę emocjonalną i mindsetową
                  <br />
                  → Narzędzia ze styku psychologii i męskiej świadomości
                  <br />→ Autentyczną transformację bez bullshitu
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
                  <h3 className="text-2xl font-bold text-foreground text-center">
                    MATEUSZ LIZAK
                  </h3>
                  <p className="text-primary text-center font-semibold">
                    Mentor świadomych mężczyzn i mistrz pracy warsztatowej
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Praktyk, który przeszedł przez wszystkie pułapki analitycznego
                  umysłu. Od operatora maszyn CNC po mentora świadomych
                  mężczyzn. Mistrz konkretu i pracy warsztatowej.
                  <br />
                  <br />
                  <strong className="text-foreground">
                    Co dostarcza Mateusz:
                  </strong>
                  <br />
                  → Sprawdzone narzędzia z ziemi (nie z chmur)
                  <br />
                  → Warsztatowy podział pracy - konkret ponad teorię
                  <br />→ Praktyczne działania które zrobisz dziś, nie "kiedyś"
                </p>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-lg text-primary font-semibold">
                  [GRUNT] Konkret | Narzędzia | Działanie
                </div>
              </Card>
            </div>

            <Card className="bg-card border p-8">
              <p className="text-xl font-bold text-foreground mb-4">
                PODZIAŁ PRACY:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-accent">Ludwik:</strong> Dlaczego te 3
                  pułapki cię blokują (emocje + tożsamość)
                </p>
                <p>
                  <strong className="text-primary">Mateusz:</strong> Co z tym
                  zrobić (narzędzia + działanie)
                </p>
              </div>
              <p className="text-center text-lg font-semibold text-foreground mt-6">
                Zero filozofowania. Same robocze narzędzia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              DLA KOGO JEST TEN WARSZTAT?
            </h2>

            <div className="space-y-8">
              <Card className="bg-green-50 border-green-200 border-l-4 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  ✅ WARSZTAT JEST DLA CIEBIE JEŚLI:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>
                      Jesteś analitycznym profesjonalistą 30+ (developer, team
                      leader, manager, freelancer, przedsiębiorca)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>
                      Czujesz, że dryfujesz zamiast nawigować przez życie
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>
                      Twój analityczny umysł cię paraliżuje zamiast wspierać
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>
                      Potrzebujesz systemu nawigacyjnego, nie kolejnej
                      motywacyjnej gadki
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>
                      Cenisz konkret, strukturę i praktyczne narzędzia
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">→</span>
                    <span>Chcesz przestać analizować i zacząć działać</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-destructive/5 border-destructive/20 border-l-4 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  ❌ WARSZTAT NIE JEST DLA CIEBIE JEŚLI:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Szukasz szybkich recept na sukces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Chcesz motywacyjnych uniesień zamiast roboczych narzędzi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Nie jesteś gotowy wypełnić 2 szablonów przez 90 minut
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Wolisz filozofować niż działać</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>
                      Szukasz duchowego oświecenia, nie praktycznych rozwiązań
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              LOGISTYKA
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-background border p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">DATA</h4>
                <p className="text-muted-foreground">
                  Czwartek,
                  <br />
                  16 października 2025
                </p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  GODZINA
                </h4>
                <p className="text-muted-foreground">
                  19:00 CET
                  <br />
                  (czas polski)
                </p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Monitor className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  FORMAT
                </h4>
                <p className="text-muted-foreground">
                  Live online
                  <br />
                  (Link po zapisie)
                </p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  CZAS TRWANIA
                </h4>
                <p className="text-muted-foreground">
                  90 minut
                  <br />
                  (19:00 - 20:30)
                </p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  CO PRZYGOTOWAĆ
                </h4>
                <p className="text-muted-foreground">
                  Notes i długopis
                  <br />
                  (Wypełnianie live)
                </p>
              </Card>

              <Card className="bg-background border p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  MIEJSCA
                </h4>
                <p className="text-muted-foreground">
                  Ograniczone
                  <br />
                  (Jakość {">"} ilość)
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              DLACZEGO TO JEST DARMOWE?
            </h2>

            <Card className="bg-background border p-8 mb-8">
              <p className="text-xl text-foreground font-bold mb-6">
                Bo to nie jest webinar sprzedażowy. To warsztat pokazowy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dajemy ci 2 narzędzia z 5-tygodniowego kursu Męski Kompas.
                Wypełnisz je live podczas warsztatu. Zobaczysz, jak działają.
                Poczujesz, czy ten system jest dla ciebie.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Na końcu warsztatu dostaniesz pitch do pełnego kursu. Jeśli
                system rezonuje — zapisz się. Jeśli nie — nie ma presji.
              </p>
              <p className="text-lg font-bold text-foreground">
                Nie sprzedajemy obietnic. Dajemy narzędzia do ręki. Sam
                zobaczysz, czy działają.
              </p>
            </Card>

            <Card className="bg-accent/10 border-accent/30 p-8 text-center">
              <p className="text-2xl font-bold text-foreground mb-4">
                90 minut. 2 narzędzia. 0 bullshitu.
              </p>
              <p className="text-lg text-muted-foreground">
                Wypełnisz Deklarację Odpowiedzialności i Framework Decyzji
                3-3-3.
                <br />
                Wyjdziesz z konkretnym szablonem i mikrodecyzją do wykonania.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              PRZESTAŃ DRYFOWAĆ.
              <br />
              ZACZNIJ NAWIGOWAĆ.
            </h2>

            <div className="text-left max-w-3xl mx-auto mb-12">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Masz dwa wyjścia:
              </p>

              <Card className="bg-destructive/5 border-destructive/20 p-6 mb-4">
                <p className="font-bold text-foreground mb-2">
                  1. Kontynuuj dryfowanie
                </p>
                <p className="text-muted-foreground">
                  Kolejna analiza. Kolejna książka. Kolejne "może jak będę
                  gotowy".
                  <br />
                  <strong className="text-foreground">
                    Efekt: za rok będziesz w tym samym miejscu.
                  </strong>
                </p>
              </Card>

              <Card className="bg-green-50 border-green-200 p-6">
                <p className="font-bold text-foreground mb-2">
                  2. Wypełnij 2 narzędzia w 90 minut
                </p>
                <p className="text-muted-foreground">
                  Deklaracja Odpowiedzialności + Decyzje 3-3-3.
                  <br />
                  <strong className="text-foreground">
                    Efekt: wyjdziesz z kompasem nawigacyjnym i konkretną decyzją
                    do wykonania.
                  </strong>
                </p>
              </Card>
            </div>

            <Card className="bg-card border p-8 mb-8">
              <p className="text-2xl font-bold text-accent mb-4">
                Nie potrzebujesz więcej informacji.
                <br />
                Potrzebujesz systemu nawigacji.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Męski Kompas to nie kurs rozwoju osobistego.
                <br />
                To praktyczny framework do bycia facetem w 2025.
              </p>
              <p className="text-muted-foreground">
                Bez udawania że ogarniam.
                <br />
                Bez dryfowania w chaosie opcji.
                <br />
                Bez paraliżu analitycznego.
              </p>
            </Card>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-xl px-12 py-8 mb-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                REZERWUJ SWOJE MIEJSCE - 16 PAŹDZIERNIKA, 19:00
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mb-8">
              Liczba miejsc jest ograniczona, aby zapewnić jakość sesji Q&A.
            </p>

            <Card className="bg-card border p-6 text-left">
              <p className="text-foreground font-bold mb-4">
                WIDZIMY SIĘ 16 PAŹDZIERNIKA.
              </p>
              <p className="text-muted-foreground mb-6">
                Ludwik + Mateusz
                <br />
                Męski Kompas
              </p>

              <div className="border-t pt-4 space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">P.S.</strong>
                  <br />
                  To nie będzie pasywny webinar. Przygotuj notes.
                  <br />
                  Będziesz pracował live przez 90 minut.
                  <br />
                  Jeśli nie jesteś gotowy na konkret - nie zapisuj się.
                </p>
                <p>
                  <strong className="text-foreground">P.P.S.</strong>
                  <br />
                  Po warsztacie dostaniesz pitch do pełnego kursu (5 tygodni, 6
                  narzędzi, grupa 10 facetów).
                  <br />
                  Ale to na końcu. Najpierw wypełniasz 2 narzędzia i widzisz czy
                  system działa.
                  <br />
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
