import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  Anchor,
  Star,
  MessageSquare,
  Check,
} from "lucide-react";
import agendaTimelineBg from "@/assets/agenda-timeline-bg.png";
import kodKapitanaHero from "@/assets/kod-kapitana-hero.png";

export default function WebinarKodKapitana() {
  const ctaUrl = "https://buy.siadlak.com/checkout/kod-kapitana";

  return (
    <Layout hideHeader={true} hideFooter={true}>
      <SEO
        title="Kod Kapitana: Uważność, która naprawdę działa"
        description="Jak zapanować nad natłokiem myśli i zostać kapitanem własnego życia? Praktyczny warsztat live online 27 stycznia 2025 o 20:05."
      />

      {/* HERO SECTION - Deep Ocean Premium Theme */}
      <section
        className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 40%, hsl(205, 40%, 14%) 100%)",
        }}
      >
        {/* Subtle depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        {/* Refined ambient glow - less aggressive, more elegant */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        
        {/* Subtle gold accent glow */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[radial-gradient(circle,rgba(251,191,36,0.04),transparent_70%)] blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Event badge - more refined */}
            <div className="flex justify-center mb-8 md:mb-10 animate-fade-in">
              <div
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full border max-w-full backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(59,130,246,0.2) 100%)",
                  borderColor: "rgba(125,211,252,0.3)",
                  boxShadow:
                    "0 0 30px rgba(56, 189, 248, 0.15), 0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 flex-shrink-0" />
                <span className="font-semibold text-sky-100 text-xs sm:text-sm md:text-base tracking-wider uppercase">
                  Spotkanie na żywo • 27 stycznia • 20:05
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.15] tracking-tight">
                <span className="text-slate-100">KOD KAPITANA:</span>
                <br />
                <span
                  className="inline-block mt-2 md:mt-3 bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
                >
                  Uważność, która naprawdę działa
                </span>
              </h1>

              <div className="mb-10 md:mb-12 flex justify-center animate-scale-in">
                <div
                  className="inline-block rounded-2xl px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 border max-w-4xl backdrop-blur-md transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    borderColor: "rgba(125, 211, 252, 0.2)",
                    boxShadow:
                      "0 16px 48px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 leading-relaxed">
                    Jak zapanować nad natłokiem myśli i{" "}
                    <span className="font-semibold text-sky-300">
                      zostać kapitanem własnego życia?
                    </span>
                  </p>
                </div>
              </div>

              {/* Social Proof - subtle, refined */}
              <div className="mb-10 animate-fade-in">
                <div 
                  className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-xl backdrop-blur-sm"
                  style={{
                    background: "rgba(15, 23, 42, 0.5)",
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                  }}
                >
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div 
                      className="flex items-center justify-center w-7 h-7 rounded-full border"
                      style={{
                        background: "linear-gradient(135deg, hsl(200, 80%, 30%) 0%, hsl(180, 70%, 45%) 50%, hsl(145, 65%, 50%) 100%)",
                        borderColor: "rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm">
                      103 osoby już rozpoczęły rejs
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-slate-600"></div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/30">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                    <span className="font-medium text-sm">
                      Ocena 4.9/5
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image - with refined frame */}
              <div className="mb-10 animate-fade-in">
                <div className="relative max-w-2xl mx-auto">
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-50"
                    style={{
                      background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(251,191,36,0.1))",
                      filter: "blur(20px)",
                    }}
                  />
                  <img
                    src={kodKapitanaHero}
                    alt="Kapitan przy sterze statku podczas burzy - metafora uważnego życia"
                    loading="lazy"
                    className="relative w-full rounded-xl shadow-2xl"
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Bonus - elegant gold accent */}
              <div className="mb-8 animate-fade-in">
                <div 
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-xl backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.15) 100%)",
                    border: "1px solid rgba(251,191,36,0.25)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30">
                    <span className="text-lg">🎁</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base text-amber-200">
                      Bonus dla pierwszych 500 osób
                    </p>
                    <p className="text-xs md:text-sm text-amber-300/70">
                      PDF „Mapa Kapitana" do druku
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 animate-fade-in">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block group"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-xl md:text-2xl font-bold px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] border-0 text-center leading-tight min-h-[64px] touch-manipulation whitespace-normal h-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(217, 91%, 50%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 0 40px rgba(56, 189, 248, 0.25), 0 16px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    🚢 ZAREZERWUJ MOJE MIEJSCE – ROZPOCZNIJ REJS
                  </Button>
                </a>
              </div>

              <p className="text-slate-400 text-sm md:text-base animate-fade-in">
                Bezpłatny warsztat na żywo • 90 minut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-HEADER & OSOBISTE WPROWADZENIE */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Przestań medytować jak mnich.{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  Zacznij medytować jak Kapitan na własnym pokładzie.
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Zapraszam Cię na praktyczny warsztat, podczas którego pokażę Ci,
                jak używać uważności jako narzędzia do realnej zmiany – nawet
                jeśli masz głowę pełną myśli i ADHD.
              </p>

              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-6 md:p-8 mb-12">
                <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  To nie jest webinar o tym, jak się wyciszyć. To trening, jak
                  być świadomym nawet w chaosie. I to właśnie zmienia wszystko.
                </p>
              </Card>

              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block mb-6"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 transition-all duration-300 hover:scale-105 border-0 shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                    color: "white",
                  }}
                >
                  🚢 ZAREZERWUJ MOJE MIEJSCE - ROZPOCZNIJ REJS
                </Button>
              </a>

              <p className="text-sm text-muted-foreground">
                ⚡ <strong>Bonus:</strong> Pierwsze 500 osób otrzyma PDF z "Mapą
                Kapitana" w wersji do druku
              </p>
            </div>

            {/* Osobiste wprowadzenie */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cześć, tu Ludwik.
              </h3>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Przez lata medytacja kojarzyła mi się z siadaniem w ciszy,
                  tłamszeniem myśli i czekaniem na oświecenie. Aż zrozumiałem,
                  że to nie o to chodzi.
                </p>

                <p className="text-xl font-bold text-foreground">
                  Prawdziwa uważność to nie jest ucieczka od życia. To bycie w
                  jego centrum.
                </p>

                <p>
                  To świadomość, która działa jak diament – jest twarda,
                  przejrzysta i przybiera kolory tego, na co ją położysz.
                </p>

                <p>
                  Na tym webinarze nie będziemy gasić świeczek i liczyć
                  oddechów. Będziemy pracować nad tym, jak przejąć kontrolę nad
                  własnym sterem. Jak odróżnić swoje myśli od siebie samego. Jak
                  przestać być pasażerem, a zacząć być kierowcą własnego życia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATYCHMIASTOWA KORZYŚĆ - MP3 PLAYER PLACEHOLDER */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              ⚡ Co wyciągniesz z webinaru?
            </h2>

            <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-8 md:p-10 shadow-lg">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jedną, konkretną, działającą metaforę lub technikę, którą
                  zapamiętasz i która zmieni Twój następny trudny moment.
                </p>

                <p>
                  Może to być obraz{" "}
                  <strong className="text-foreground">
                    "myśli jako chmur"
                  </strong>{" "}
                  podczas jazdy samochodem, może to być pytanie:{" "}
                  <em className="text-sky-600 dark:text-sky-400">
                    "Gdzie jest teraz mój ster?"
                  </em>
                </p>
              </div>
            </Card>

            {/* VIDEO PLAYER */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-sky-200 dark:border-sky-800 p-4 md:p-6 shadow-lg">
                <div
                  style={{ position: "relative", paddingTop: "56.25%" }}
                  className="rounded-lg overflow-hidden"
                >
                  <iframe
                    src="https://iframe.mediadelivery.net/embed/158903/e4ac51dc-dd0c-4b0f-882d-d0ee6be6edff?autoplay=false&loop=true&muted=false&preload=true&responsive=true"
                    loading="lazy"
                    style={{
                      border: 0,
                      position: "absolute",
                      top: 0,
                      height: "100%",
                      width: "100%",
                    }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DLACZEGO BRAK SYSTEMU CIĘ SABOTUJE */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
              DLACZEGO BRAK SYSTEMU CIĘ SABOTUJE?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
              Większość ludzi nie potrzebuje więcej motywacji. Potrzebuje
              lepszego systemu, który nie wymaga walki z samym sobą.
            </p>

            <div className="space-y-8">
              <Card className="bg-muted/40 border-muted-foreground/20 p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  PRAWDA, KTÓREJ NIKT CI NIE POWIEDZIAŁ:
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Problem nie tkwi w Twojej motywacji, sile woli ani
                  disciplinie. Problem tkwi w tym, że próbujesz{" "}
                  <strong className="text-foreground">
                    sterować swoim życiem intuicyjnie
                  </strong>
                  , bez jasnego systemu. To tak, jakby kapitan próbował żeglować
                  bez mapy i kompasu – czasem coś wyjdzie, ale częściej skończy
                  się chaosem i frustracją.
                </p>
              </Card>

              <Card 
                className="border-0 p-6 md:p-8 shadow-lg text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(200, 70%, 25%) 0%, hsl(180, 60%, 35%) 50%, hsl(145, 55%, 40%) 100%)",
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.25), 0 0 60px rgba(6, 182, 212, 0.15)",
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  CO JEŚLI MOGŁOBY BYĆ INACZEJ?
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-white">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span>
                      <strong className="text-white font-bold">
                        System, który działa na autopilocie
                      </strong>{" "}
                      – zamiast codziennej walki z chaosem
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span>
                      <strong className="text-white font-bold">
                        Jasne priorytety każdego dnia
                      </strong>{" "}
                      – zamiast zastanawiania się „od czego zacząć?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span>
                      <strong className="text-white font-bold">
                        Poczucie kontroli i spokoju
                      </strong>{" "}
                      – zamiast ciągłego biegu w próżni
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO WYNIESIESZ Z TEGO WARSZTATU - Premium Benefit Cards */}
      <section 
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(210, 40%, 96%) 0%, hsl(210, 35%, 98%) 50%, hsl(210, 40%, 96%) 100%)",
        }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                CO WYNIESIESZ Z TEGO WARSZTATU?
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Cztery konkretne narzędzia, które zaczniesz stosować od razu
              </p>
            </div>

            <div className="space-y-6">
              {/* Benefit Card 1 */}
              <div 
                className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                      style={{
                        background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      METAFORA KAPITANA I ŻAGLÓWKI
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-sky-600 mb-3">
                      Twój osobisty system nawigacji życiowej
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                      To nie ładna bajka – to{" "}
                      <strong className="text-slate-900">
                        praktyczny model zarządzania codziennością
                      </strong>
                      . Kapitan (Ty), ster (decyzje), żagle (umiejętności), fale
                      (życie).
                    </p>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Jak rozpoznać, kiedy życie „steruje Tobą", a kiedy Ty
                          sterujesz życiem
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Jak wyznaczać kurs na dzień, tydzień, miesiąc – i
                          trzymać się go, nawet gdy przychodzą sztormy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefit Card 2 */}
              <div 
                className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                      style={{
                        background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      DIAMENTOWY UMYSŁ (ADHD / NATŁOK MYŚLI)
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-sky-600 mb-3">
                      Przekształć „chaos" w supersilę
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                      Dlaczego „chaotyczny" umysł to{" "}
                      <strong className="text-slate-900">supermoc</strong>, a
                      nie przeszkoda. Przestaniesz walczyć z własnymi myślami i
                      zaczniesz je obserwować.
                    </p>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Technika „Diamond Mind" – jak ogarnąć natłok myśli bez
                          walki
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Dlaczego próba „uspokojenia umysłu" działa przeciwko
                          Tobie
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefit Card 3 */}
              <div 
                className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                      style={{
                        background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      OD AUTOMATU DO ŚWIADOMEGO DZIAŁANIA
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-sky-600 mb-3">
                      Sekunda, która zmienia wszystko
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                      Jak złapać{" "}
                      <strong className="text-slate-900">mikro-pauzę</strong>,
                      w której odzyskujesz kontrolę. To klucz do wyjścia z pętli
                      stresu, reaktywności i niemocy.
                    </p>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Prosta technika „Stop–Oddech–Wybór" – zadziała nawet w
                          najbardziej stresującym momencie
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Jak rozpoznać moment, w którym „automatycznie
                          reagujesz" zamiast świadomie działać
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefit Card 4 */}
              <div 
                className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                      style={{
                        background: "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      KONIEC WEWNĘTRZNYCH WOJEN
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-sky-600 mb-3">
                      Co działa zamiast walki z samym sobą
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                      Dlaczego walka z lękiem, oporem i prokrastynacją{" "}
                      <strong className="text-slate-900">je wzmacnia</strong>.
                      Poznasz lepszy sposób – paradoksalny, ale skuteczny.
                    </p>
                    <ul className="space-y-2 text-sm md:text-base text-slate-600">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Dlaczego „zmuszanie się" jest najgorszą strategią
                          długoterminowo
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Jak przestać walczyć z prokrastynacją i zamiast tego
                          „przełamać jej kod"
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DLACZEGO TEN WARSZTAT */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
              Dlaczego ten warsztat?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16">
              Praktyczny trening mentalny, nie motywacyjny wykład
            </p>

            <div className="space-y-8">
              {/* What you'll get */}
              <Card className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border-sky-200 dark:border-sky-800 p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Co otrzymasz?
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1" />
                    <span>Gotowe ramy myślowe (model żaglówki)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1" />
                    <span>
                      Proste techniki do użycia{" "}
                      <strong className="text-foreground">
                        jeszcze tego samego dnia
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1" />
                    <span>
                      Zmiana perspektywy: z „muszę się wyciszyć" na „mogę być
                      świadomy nawet w chaosie"
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Problems it solves */}
              <Card className="bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-800 p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Jakie problemy rozwiązuje?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Natłok myśli i brak koncentracji (także ADHD)",
                    'Dni przeżywane „na autopilocie"',
                    "Wewnętrzny krytyk i presja bycia lepszym",
                    "Ciągłe życie w przeszłości lub przyszłości",
                    "Brak spójności między działaniem a wartościami",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO ZYSKUJESZ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
              Co zyskujesz?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16">
              Praktyczne narzędzia i długoterminowa transformacja
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-600 dark:bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground pt-1">
                    Natychmiast (podczas warsztatu)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Uważność jako{" "}
                      <strong className="text-foreground">aktywna siła</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Technika „zauważ i wróć do steru"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Framework pierwszej pomocy w trudnej emocji</span>
                  </li>
                </ul>
              </Card>

              <Card 
                className="border p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(180, 40%, 96%) 0%, hsl(165, 45%, 92%) 100%)",
                  borderColor: "hsl(170, 50%, 70%)",
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(200, 70%, 30%) 0%, hsl(180, 60%, 40%) 50%, hsl(145, 55%, 45%) 100%)",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground pt-1">
                    Długoterminowo (po zastosowaniu)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(165, 60%, 40%)" }} />
                    <span>Większa odporność emocjonalna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(165, 60%, 40%)" }} />
                    <span>Poczucie sprawczości i klarowność</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(165, 60%, 40%)" }} />
                    <span>Decyzje w zgodzie ze sobą</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg italic text-muted-foreground mb-3 leading-relaxed">
                    „Wyszłam ze spotkania z jasnością:{" "}
                    <span className="font-semibold text-foreground">
                      Aha… więc o TO chodzi.
                    </span>
                    "
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Kasia, uczestniczka poprzedniego webinaru
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section
        className="py-20 md:py-0 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #e8f4fc 0%, #d4e8f7 100%)",
        }}
        aria-label="Agenda dla Wybranych"
      >
        {/* Desktop/Tablet: Show full image as the section - decorative, hidden from screen readers */}
        <div className="hidden md:block" aria-hidden="true">
          <img
            src={agendaTimelineBg}
            alt=""
            className="w-full h-auto"
            role="presentation"
          />
        </div>

        {/* Screen reader accessible content for desktop (visually hidden but readable) */}
        <div className="sr-only">
          <h2>AGENDA DLA WYBRANYCH</h2>
          <div>
            <h3>KIERUNEK I START (25%)</h3>
            <p>
              Inicjowanie działań, określanie celów i przygotowanie do podróży.
              Wprowadzenie w temat i ustalenie priorytetów.
            </p>
          </div>
          <div>
            <h3>OTWARCIE MOŻLIWOŚCI (50%)</h3>
            <p>
              Identyfikacja szans, dostęp do zasobów i odblokowanie potencjału.
              Poznanie narzędzi i metod pracy.
            </p>
          </div>
          <div>
            <h3>NAWIGACJA I ROZWÓJ (75%)</h3>
            <p>
              Kierowanie procesem, dostosowanie do zmian i ciągłe doskonalenie.
              Monitorowanie postępów i korekta kursu.
            </p>
          </div>
          <div>
            <h3>OSIĄGNIĘCIE CELU (100%)</h3>
            <p>
              Finalizacja projektu, wdrożenie rozwiązań i czerpanie korzyści.
              Podsumowanie wyników i świętowanie sukcesu.
            </p>
          </div>
        </div>

        {/* Mobile: Show the original content (visible and accessible) */}
        <div className="md:hidden container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#1e5a8a]">
              AGENDA DLA WYBRANYCH
            </h2>

            {/* Timeline Container for mobile */}
            <div className="relative">
              {/* Steps container - stacked on mobile */}
              <div className="grid grid-cols-1 gap-12">
                {/* Step 1 - KIERUNEK I START */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-lg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="#2980b9"
                        stroke="#1e5a8a"
                        strokeWidth="3"
                      />
                      {/* Ship's wheel */}
                      <circle
                        cx="50"
                        cy="50"
                        r="22"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="8"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Wheel spokes */}
                      <line
                        x1="50"
                        y1="24"
                        x2="50"
                        y2="76"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="24"
                        y1="50"
                        x2="76"
                        y2="50"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="31"
                        y1="31"
                        x2="69"
                        y2="69"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="69"
                        y1="31"
                        x2="31"
                        y2="69"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      {/* Wheel handles */}
                      <circle cx="50" cy="24" r="5" fill="white" />
                      <circle cx="50" cy="76" r="5" fill="white" />
                      <circle cx="24" cy="50" r="5" fill="white" />
                      <circle cx="76" cy="50" r="5" fill="white" />
                      <circle cx="31" cy="31" r="5" fill="white" />
                      <circle cx="69" cy="69" r="5" fill="white" />
                      <circle cx="69" cy="31" r="5" fill="white" />
                      <circle cx="31" cy="69" r="5" fill="white" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    KIERUNEK I START
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Inicjowanie działań, określanie celów i przygotowanie do
                    podróży. Wprowadzenie w temat i ustalenie priorytetów.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">
                      25%
                    </span>
                    <div 
                      className="w-24 h-3 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 12px rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <div 
                        className="h-full w-1/4 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(205, 70%, 45%) 0%, hsl(190, 75%, 45%) 100%)",
                          boxShadow: "0 0 8px rgba(6, 182, 212, 0.5)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Step 2 - OTWARCIE MOŻLIWOŚCI */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-lg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="#2980b9"
                        stroke="#1e5a8a"
                        strokeWidth="3"
                      />
                      {/* Keyhole */}
                      <circle
                        cx="50"
                        cy="42"
                        r="12"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M44 50 L44 68 L56 68 L56 50"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      {/* Light rays */}
                      <line
                        x1="50"
                        y1="20"
                        x2="50"
                        y2="26"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="30"
                        y1="30"
                        x2="34"
                        y2="34"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="70"
                        y1="30"
                        x2="66"
                        y2="34"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="24"
                        y1="45"
                        x2="30"
                        y2="45"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="70"
                        y1="45"
                        x2="76"
                        y2="45"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    OTWARCIE MOŻLIWOŚCI
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Identyfikacja szans, dostęp do zasobów i odblokowanie
                    potencjału. Poznanie narzędzi i metod pracy.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">
                      50%
                    </span>
                    <div 
                      className="w-24 h-3 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 12px rgba(6, 182, 212, 0.25)",
                      }}
                    >
                      <div 
                        className="h-full w-1/2 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(205, 70%, 45%) 0%, hsl(180, 70%, 45%) 50%, hsl(165, 60%, 45%) 100%)",
                          boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Step 3 - NAWIGACJA I ROZWÓJ */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-lg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="#2980b9"
                        stroke="#1e5a8a"
                        strokeWidth="3"
                      />
                      {/* Compass outer ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Compass inner circle */}
                      <circle cx="50" cy="50" r="5" fill="white" />
                      {/* Compass needle - north (red/filled) */}
                      <polygon points="50,22 46,50 54,50" fill="white" />
                      {/* Compass needle - south (outline) */}
                      <polygon
                        points="50,78 46,50 54,50"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      {/* Direction ticks */}
                      <line
                        x1="50"
                        y1="22"
                        x2="50"
                        y2="26"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="50"
                        y1="74"
                        x2="50"
                        y2="78"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="22"
                        y1="50"
                        x2="26"
                        y2="50"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="74"
                        y1="50"
                        x2="78"
                        y2="50"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    NAWIGACJA I ROZWÓJ
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Kierowanie procesem, dostosowanie do zmian i ciągłe
                    doskonalenie. Monitorowanie postępów i korekta kursu.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">
                      75%
                    </span>
                    <div 
                      className="w-24 h-3 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 14px rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      <div 
                        className="h-full w-3/4 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(205, 70%, 40%) 0%, hsl(180, 70%, 45%) 40%, hsl(155, 60%, 48%) 100%)",
                          boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Step 4 - OSIĄGNIĘCIE CELU */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-lg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="#2980b9"
                        stroke="#1e5a8a"
                        strokeWidth="3"
                      />
                      {/* Main gear */}
                      <circle
                        cx="40"
                        cy="45"
                        r="15"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="40"
                        cy="45"
                        r="6"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Gear teeth for main gear */}
                      <rect
                        x="37"
                        y="27"
                        width="6"
                        height="6"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="37"
                        y="57"
                        width="6"
                        height="6"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="22"
                        y="42"
                        width="6"
                        height="6"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="52"
                        y="42"
                        width="6"
                        height="6"
                        fill="white"
                        rx="1"
                      />
                      {/* Secondary gear */}
                      <circle
                        cx="62"
                        cy="58"
                        r="12"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="62"
                        cy="58"
                        r="5"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Gear teeth for secondary gear */}
                      <rect
                        x="59"
                        y="44"
                        width="5"
                        height="4"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="59"
                        y="68"
                        width="5"
                        height="4"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="48"
                        y="55"
                        width="4"
                        height="5"
                        fill="white"
                        rx="1"
                      />
                      <rect
                        x="72"
                        y="55"
                        width="4"
                        height="5"
                        fill="white"
                        rx="1"
                      />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    OSIĄGNIĘCIE CELU
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Finalizacja projektu, wdrożenie rozwiązań i czerpanie
                    korzyści. Podsumowanie wyników i świętowanie sukcesu.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span style={{ color: "hsl(155, 60%, 42%)" }} className="font-bold text-sm">
                      100%
                    </span>
                    <div 
                      className="w-24 h-3 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 16px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <div 
                        className="h-full w-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(205, 70%, 35%) 0%, hsl(185, 70%, 42%) 30%, hsl(165, 65%, 48%) 60%, hsl(145, 60%, 52%) 100%)",
                          boxShadow: "0 0 14px rgba(16, 185, 129, 0.6)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REJESTRACJA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground"
              id="rejestracja"
            >
              Rejestracja
            </h2>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border-sky-200 dark:border-sky-800 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    📅 Szczegóły
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <span className="font-bold">Data:</span>
                      <span>27 stycznia 2025</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold">Godzina:</span>
                      <span>20:05 (60+ minut)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold">Format:</span>
                      <span>Live Online</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold">Dostęp:</span>
                      <span>Bezpłatny</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold">Nagranie:</span>
                      <span>48h po webinarze</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    🎁 Otrzymasz:
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(165, 60%, 40%)" }} />
                      <span>dostęp na żywo,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(165, 60%, 40%)" }} />
                      <span>PDF z kluczowymi punktami,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(165, 60%, 40%)" }} />
                      <span>„Mapę Kapitana" (pierwsze 500 osób),</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(165, 60%, 40%)" }} />
                      <span>ćwiczenie wprowadzające,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "hsl(165, 60%, 40%)" }} />
                      <span>nagranie przez 48h.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-9 transition-all duration-300 hover:scale-105 border-0 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    🚢 ZAPISUJĘ SIĘ NA BEZPŁATNY WEBINAR
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16">
              Wszystko, co musisz wiedzieć
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Czy potrzebuję specjalnego sprzętu?
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Nie. Wystarczy internet.
                </p>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Nie mogę być na żywo.
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Nagranie dostępne 48h.
                </p>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Dla początkujących?
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Tak. Startujemy od podstaw – w nowym ujęciu.
                </p>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Materiały?
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Tak, PDF + bonus.
                </p>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Czy to naprawdę bezpłatne?
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Tak. Pełnowartościowe 90 minut.
                </p>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Czy będzie interakcja?
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                  Tak, bez przymusu kamery/mikrofonu.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NA KONIEC */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Na koniec
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>Nie obiecuję oświecenia w 90 minut.</p>

              <p className="text-xl font-bold text-foreground">
                Obiecuję, że zobaczysz, jak wygląda{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  medytacja, która nie ucieka od życia
                </span>
                , tylko w nim{" "}
                <span className="text-sky-600 dark:text-sky-400">kotwiczy</span>
                .
              </p>
            </div>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto sm:inline-block mb-12"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-9 transition-all duration-300 hover:scale-105 border-0 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
              >
                🚢 DOŁĄCZ DO REJSU – ZAPISZ SIĘ TERAZ
              </Button>
            </a>

            <p className="text-xl text-foreground leading-relaxed mb-4">
              Do zobaczenia na pokładzie,
              <br />
              <strong>Ludwik C. Siadlak</strong>
            </p>

            <div className="border-t border-muted-foreground/20 pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                © 2026 Ludwik C. Siadlak
                <br />
                Spotkanie ma charakter edukacyjny i nie zastępuje terapii
                psychologicznej,
                <br className="hidden md:block" /> nie jest też związane z żadną
                religią ani wyznaniem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
