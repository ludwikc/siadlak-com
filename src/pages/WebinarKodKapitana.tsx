import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Anchor, Star, MessageSquare, Check } from "lucide-react";
import kodKapitanaHero from "@/assets/kod-kapitana-hero.png?w=400;800&format=avif;webp;png&as=picture";
import OptimizedImage from "@/components/ui/OptimizedImage";
import "@fontsource/caveat/400.css";

export default function WebinarKodKapitana() {
  const ctaUrl = "https://buy.siadlak.com/checkout/kod-kapitana";

  return (
    <Layout hideHeader={true} hideFooter={true}>
      <SEO
        title="Kod Kapitana: Uważność, która naprawdę działa"
        description="Jak w 90 minut zmienić sposób, w jaki reagujesz na stres, natłok myśli i chaos — bez siadania po turecku. Bezpłatne spotkanie online, 27 kwietnia, 19:05."
      />

      {/* HERO SECTION */}
      <section
        className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 40%, hsl(205, 40%, 14%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[radial-gradient(circle,rgba(251,191,36,0.04),transparent_70%)] blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Event badge */}
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
                  Spotkanie na żywo · 90 minut · Bezpłatne
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.15] tracking-tight">
                <span className="text-slate-100">KOD KAPITANA:</span>
                <br />
                <span className="inline-block mt-2 md:mt-3 bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Uważność, która naprawdę działa
                </span>
              </h1>

              <div className="mb-10 md:mb-12 flex justify-center animate-scale-in">
                <div
                  className="inline-block rounded-2xl px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 border max-w-4xl backdrop-blur-md"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    borderColor: "rgba(125, 211, 252, 0.2)",
                    boxShadow:
                      "0 16px 48px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 leading-relaxed">
                    Jak w 90 minut zmienić sposób, w jaki reagujesz na stres,
                    natłok myśli i chaos —{" "}
                    <span className="font-semibold text-sky-300">
                      bez siadania po turecku
                    </span>{" "}
                    i udawania, że Twój umysł się wyłączył.
                  </p>
                </div>
              </div>

              {/* Social Proof */}
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
                        background:
                          "linear-gradient(135deg, hsl(200, 80%, 30%) 0%, hsl(180, 70%, 45%) 50%, hsl(145, 65%, 50%) 100%)",
                        borderColor: "rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm">
                      103+ osoby już na pokładzie
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-slate-600"></div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/30">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                    <span className="font-medium text-sm">Ocena 4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-10 animate-fade-in">
                <div className="relative max-w-2xl mx-auto">
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-50"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(251,191,36,0.1))",
                      filter: "blur(20px)",
                    }}
                  />
                  <OptimizedImage
                    src={kodKapitanaHero}
                    alt="Kapitan przy sterze statku podczas burzy — metafora uważnego życia"
                    width={1920}
                    height={1071}
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="relative w-full rounded-xl shadow-2xl"
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Primary CTA */}
              <div className="mb-6 animate-fade-in">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block group"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-14 py-5 sm:py-7 md:py-9 transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] border-0 text-center leading-tight min-h-[56px] touch-manipulation whitespace-normal h-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(217, 91%, 50%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 0 40px rgba(56, 189, 248, 0.25), 0 16px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    🚢 ZAREZERWUJ MOJE MIEJSCE
                  </Button>
                </a>
              </div>

              {/* Bonus */}
              <div className="mb-2 animate-fade-in flex justify-center">
                <div
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-xl backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.15) 100%)",
                    border: "1px solid rgba(251,191,36,0.25)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30">
                    <span className="text-lg">🎁</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base text-amber-200">
                      Bonus: pierwsze 500 osób
                    </p>
                    <p className="text-xs md:text-sm text-amber-300/70">
                      Otrzyma PDF „Mapa Kapitana" do druku
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING NARRATIVE — Piątek 22:30 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10 leading-tight text-center">
              Piątek, 22:30.{" "}
              <span className="text-sky-600 dark:text-sky-400">
                Głowa pracuje na nocną zmianę.
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>Leżysz w łóżku. Ciało zmęczone. Umysł — na pełnych obrotach.</p>

              <p>
                Przelatuje niedokończona rozmowa z szefem. Mail, na który
                zapomniałeś odpisać. Jutrzejsze spotkanie. Przedwczorajsza
                kłótnia. Co powiedziałeś. Co mogłeś powiedzieć. Co powinieneś
                był powiedzieć.
              </p>

              <p>
                Próbujesz oddychać. Próbujesz „nie myśleć". Im bardziej
                próbujesz — tym głośniej się robi.
              </p>

              <p>
                I rano jest tak samo. I w pracy. I w domu. Reagujesz zanim
                pomyślisz. Mówisz zanim usłyszysz. Sięgasz po telefon zanim
                zauważysz, że Twoja ręka się ruszyła.
              </p>

              <p className="text-xl font-bold text-foreground">
                To nie jest „rozbiegany umysł". To jest umysł bez kapitana na
                mostku.
              </p>

              <p>
                I nie jest to kwestia dyscypliny, silnej woli ani „wyciszenia
                się". To jest kwestia jednej umiejętności, której nikt Cię nie
                nauczył:{" "}
                <strong className="text-foreground">
                  jak być świadomym w chaosie, nie zamiast niego.
                </strong>
              </p>

              <p className="text-lg italic text-sky-600 dark:text-sky-400">
                Na tym spotkaniu pokażę Ci dokładnie, jak to działa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CZEGO NIE BĘDZIEMY ROBIĆ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
              Czego <span className="text-sky-600 dark:text-sky-400">NIE</span>{" "}
              będziemy robić
            </h2>

            <Card className="bg-muted/40 border-muted-foreground/20 p-6 md:p-8 shadow-lg mb-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Nie będziemy gasić świeczek. Nie będziemy liczyć oddechów do
                dziesięciu. Nie będziemy udawać, że da się „wyciszyć umysł" —
                bo to nieprawda i każdy, kto próbował, wie, że to nie działa.
              </p>
            </Card>

            <Card
              className="border-0 p-6 md:p-8 shadow-lg text-white"
              style={{
                background:
                  "linear-gradient(135deg, hsl(200, 70%, 25%) 0%, hsl(180, 60%, 35%) 50%, hsl(145, 55%, 40%) 100%)",
                boxShadow:
                  "0 8px 32px rgba(16, 185, 129, 0.25), 0 0 60px rgba(6, 182, 212, 0.15)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Będziemy pracować nad czymś innym:
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-white">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>
                    Jak{" "}
                    <strong className="text-white font-bold">
                      przejąć kontrolę nad sterem
                    </strong>{" "}
                    — nawet gdy fale są wysokie.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>
                    Jak{" "}
                    <strong className="text-white font-bold">
                      odróżnić swoje myśli od siebie samego
                    </strong>{" "}
                    — bo to zmienia wszystko.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span>
                    Jak złapać{" "}
                    <strong className="text-white font-bold">
                      ten jeden ułamek sekundy
                    </strong>{" "}
                    między bodźcem a reakcją — i w tym ułamku odzyskać wolność.
                  </span>
                </li>
              </ul>
            </Card>

            <p className="text-center text-xl md:text-2xl font-bold text-foreground mt-10">
              Jedno narzędzie. Jedna metafora. Jeden wieczór.
            </p>
            <p className="text-center text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
              Jeśli po 90 minutach nie zmienisz sposobu, w jaki przeżyjesz swój
              następny trudny moment — nic nie tracisz. Ale jeśli zmienisz — to
              będzie wieczór, który zapamiętasz.
            </p>
          </div>
        </div>
      </section>

      {/* 4 RZECZY, KTÓRE WYCIĄGNIESZ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, hsl(210, 40%, 96%) 0%, hsl(210, 35%, 98%) 50%, hsl(210, 40%, 96%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                4 rzeczy, które wyciągniesz z tego spotkania
              </h2>
            </div>

            <div className="space-y-6">
              {/* Card 1 */}
              <BenefitCard
                number={1}
                title="METAFORA KAPITANA I ŻAGLÓWKI"
                subtitle="Twój osobisty system nawigacji"
                body={
                  <>
                    Nie ładna bajka, lecz{" "}
                    <strong className="text-slate-900">praktyczny model</strong>
                    . Kapitan (Ty), ster (decyzje), żagle (umiejętności), fale
                    (życie). Po tym module zobaczysz swoją codzienność
                    zupełnie innymi oczami.
                  </>
                }
                bullets={[
                  "Ludzie mówią, że ta jedna metafora daje im więcej jasności niż miesiące czytania o mindfulness",
                  "Praktyczny obraz, który wraca do Ciebie w trudnym momencie — bez wysiłku",
                ]}
              />

              {/* Card 2 */}
              <BenefitCard
                number={2}
                title="DIAMENTOWY UMYSŁ"
                subtitle="Dlaczego „chaotyczny" umysł to supermoc"
                body={
                  <>
                    Zwłaszcza przy ADHD. Przestaniesz walczyć z natłokiem myśli
                    i zobaczysz,{" "}
                    <strong className="text-slate-900">jak go użyć</strong>.
                  </>
                }
                bullets={[
                  "Technika Diamond Mind: ogarnięcie chaosu bez walki",
                  "Dlaczego próba „uspokojenia umysłu" działa przeciwko Tobie",
                ]}
              />

              {/* Card 3 */}
              <BenefitCard
                number={3}
                title="SEKUNDA, KTÓRA ZMIENIA WSZYSTKO"
                subtitle="Mikro-pauza między bodźcem a reakcją"
                body={
                  <>
                    Klucz do wyjścia z pętli stresu i reaktywności. Prosta
                    technika{" "}
                    <strong className="text-slate-900">
                      „Stop — Oddech — Wybór"
                    </strong>
                    , która zadziała w najbardziej stresującym momencie.
                  </>
                }
                bullets={[
                  "Nie jutro. Dziś wieczorem",
                  "Działa nawet gdy emocje są na maksimum",
                ]}
              />

              {/* Card 4 */}
              <BenefitCard
                number={4}
                title="KONIEC WEWNĘTRZNYCH WOJEN"
                subtitle="Co działa zamiast walki ze sobą"
                body={
                  <>
                    Dlaczego walka z lękiem, oporem i prokrastynacją{" "}
                    <strong className="text-slate-900">je wzmacnia</strong>.
                    Poznasz paradoksalny sposób, który działa lepiej niż
                    „zmuszanie się".
                  </>
                }
                bullets={[
                  "Nie dlatego, że jest „duchowy" — dlatego, że jest logiczny",
                  "Twój analityczny umysł to zrozumie",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DLA KOGO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
              Dla kogo jest to spotkanie
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Dla Ciebie</strong>, jeśli
                masz głowę, która nie chce się wyłączyć. Jeśli próbowałeś
                medytacji i stwierdziłeś, że „to nie dla mnie". Jeśli masz ADHD
                (lub podejrzewasz). Jeśli jesteś analitykiem, programistą,
                managerem, przedsiębiorcą — kimś, kto potrzebuje{" "}
                <em>zrozumieć</em>, zanim zacznie robić.
              </p>

              <p>
                Jeśli lubisz Headspace, ale czujesz, że 10 minut spokoju to za
                mało — bo reszta dnia i tak wygląda tak samo.
              </p>

              <p>
                Jeśli wiesz, że coś musi się zmienić — ale „siadanie w ciszy"
                nie jest odpowiedzią.
              </p>

              <p className="text-xl font-bold text-foreground text-center pt-4">
                To spotkanie jest odpowiedzią.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KTO PROWADZI + VIDEO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
              Kto prowadzi
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Nazywam się{" "}
                <strong className="text-foreground">
                  Ludwik C. Siadlak
                </strong>
                . Od 19 lat uczę ludzi systemów — od Microsoft i NATO po
                codzienne życie. Przez lata medytacja kojarzyła mi się z
                siadaniem w ciszy i tłamszeniem myśli. Aż zrozumiałem, że to
                nie o to chodzi.
              </p>

              <p className="text-xl font-bold text-foreground">
                Prawdziwa uważność to nie ucieczka od życia. To bycie w jego
                centrum — ze świadomością, która działa jak diament: twarda,
                przejrzysta i przybiera kolory tego, na co ją położysz.
              </p>

              <p>
                100+ osób przeszło przez moje programy rozwojowe. Ocena 4.9/5.
                Ale nie musisz mi ufać na słowo — przyjdź i sam zdecyduj.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 p-6 md:p-8 shadow-lg mb-12">
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
                    — Kasia, uczestniczka poprzedniego spotkania
                  </p>
                </div>
              </div>
            </Card>

            {/* VIDEO PLAYER */}
            <div className="relative">
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

              <div className="flex items-center justify-center mt-4 md:mt-6 animate-fade-in">
                <span
                  className="text-xl sm:text-2xl md:text-3xl transform -rotate-2"
                  style={{
                    fontFamily: "Caveat, cursive",
                    color: "hsl(0, 72%, 51%)",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    fontWeight: 400,
                  }}
                >
                  Odsłuchaj koniecznie!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SZCZEGÓŁY + REJESTRACJA */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, hsl(210, 50%, 8%) 0%, hsl(200, 45%, 12%) 50%, hsl(190, 40%, 16%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                id="rejestracja"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(180, 70%, 70%) 50%, hsl(155, 60%, 60%) 100%)",
                  }}
                >
                  Szczegóły
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300/80">
                Zarezerwuj swoje miejsce — bezpłatnie
              </p>
            </div>

            <div
              className="rounded-3xl p-8 md:p-12 backdrop-blur-md border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 80px rgba(6, 182, 212, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(16, 185, 129, 0.3), transparent 70%)",
                }}
              ></div>

              <div className="grid md:grid-cols-2 gap-10 mb-12 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(200, 70%, 35%) 0%, hsl(180, 60%, 40%) 100%)",
                        boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
                      }}
                    >
                      <span className="text-xl">📅</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Szczegóły
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Data", value: "27.04 (poniedziałek)" },
                      { label: "Godzina", value: "19:05 (90 minut)" },
                      { label: "Format", value: "Live online" },
                      { label: "Cena", value: "Bezpłatne", highlight: true },
                      { label: "Nagranie", value: "Dostępne 48h po spotkaniu" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-white/5"
                        style={{
                          borderLeft: item.highlight
                            ? "3px solid hsl(165, 60%, 50%)"
                            : "3px solid transparent",
                        }}
                      >
                        <span className="font-semibold text-slate-300 min-w-[80px]">
                          {item.label}:
                        </span>
                        <span
                          className={`${item.highlight ? "font-bold" : ""}`}
                          style={{
                            color: item.highlight
                              ? "hsl(165, 60%, 55%)"
                              : "rgba(255,255,255,0.9)",
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(165, 60%, 35%) 0%, hsl(145, 55%, 40%) 100%)",
                        boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      <span className="text-xl">🎁</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Otrzymasz
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Dostęp na żywo do warsztatu",
                      "PDF z kluczowymi punktami",
                      "Mapę Kapitana do druku (pierwsze 500 osób)",
                      "Ćwiczenie wprowadzające — zrobisz je tego samego wieczoru",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/5 group"
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(200, 70%, 35%) 0%, hsl(165, 60%, 45%) 100%)",
                            boxShadow: "0 2px 8px rgba(16, 185, 129, 0.4)",
                          }}
                        >
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center relative z-10">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 blur-2xl opacity-60 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(200, 70%, 45%), hsl(165, 60%, 50%), hsl(145, 55%, 50%))",
                  }}
                ></div>

                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block relative"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base md:text-lg font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-9 transition-all duration-300 hover:scale-105 border-0 shadow-2xl whitespace-normal h-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200, 75%, 45%) 0%, hsl(180, 70%, 42%) 40%, hsl(155, 65%, 45%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 15px 40px rgba(0, 0, 0, 0.3), 0 0 50px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    🚢 ZAPISUJĘ SIĘ NA SPOTKANIE
                  </Button>
                </a>

                <p className="mt-6 text-sm text-slate-400">
                  Dołączyło już{" "}
                  <span className="font-semibold text-cyan-400">103+ osób</span>{" "}
                  · Ocena 4.9/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
              Najczęściej zadawane pytania
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <FAQCard
                q="Nie mogę być na żywo."
                a="Nagranie dostępne 48h. Ale na żywo jest lepiej — bo będziesz mógł ćwiczyć w czasie rzeczywistym."
              />
              <FAQCard
                q='Nigdy nie medytowałem / medytacja „nie działa na mnie".'
                a="Idealnie. To spotkanie jest zaprojektowane dla ludzi, którym tradycyjna medytacja nie pasuje. Nie będziemy siedzieć w ciszy. Będziemy pracować z tym, co masz — włącznie z chaosem w głowie."
              />
              <FAQCard
                q="Mam ADHD. Wytrzymam 90 minut?"
                a="Program jest zaprojektowany z myślą o umysłach, które nie siedzą spokojnie. Zmieniamy format co kilkanaście minut. Będziesz bardziej zaangażowany niż na spotkaniu w pracy."
              />
              <FAQCard
                q="Czy to naprawdę bezpłatne?"
                a="Tak. 90 minut pełnowartościowego treningu. Na koniec pokażę Ci, jak iść dalej — ale to Twoja decyzja. Żadnego nacisku."
              />
            </div>
          </div>
        </div>
      </section>

      {/* NA KONIEC */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
              Na koniec
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12 text-left">
              <p className="text-center">
                Nie obiecuję oświecenia w 90 minut.
              </p>

              <p className="text-xl font-bold text-foreground text-center">
                Obiecuję jedną rzecz: zobaczysz, jak wygląda{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  uważność, która nie ucieka od życia
                </span>{" "}
                — tylko w nim{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  kotwiczy
                </span>
                .
              </p>

              <p className="text-center">
                I wyjdziesz z jednym konkretnym narzędziem, które zmieni Twój
                następny trudny moment.
              </p>

              <p className="text-center italic">
                Reszta jest Twoim wyborem. Ale ten wieczór — ten jest na mnie.
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
                className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-9 transition-all duration-300 hover:scale-105 border-0 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] whitespace-normal h-auto"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
              >
                🚢 DOŁĄCZ DO REJSU — ZAPISZ SIĘ TERAZ
              </Button>
            </a>

            <p className="text-xl text-foreground leading-relaxed mb-8">
              Do zobaczenia na pokładzie,
              <br />
              <strong>Ludwik C. Siadlak</strong>
            </p>

            {/* P.S. */}
            <Card className="bg-muted/40 border-muted-foreground/20 p-6 md:p-8 text-left shadow-md mb-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">P.S.</strong> Jeśli wahasz
                się, czy to dla Ciebie — zauważ, co robi Twój umysł. Szuka
                powodów, żeby nie iść. Analizuje. Porównuje. Odwleka. To jest
                dokładnie ten wzorzec, o którym będziemy mówić w punkcie 3{" "}
                <em>(Sekunda, która zmienia wszystko)</em>. Przyjdź i złap tę
                sekundę.
              </p>
            </Card>

            <div className="border-t border-muted-foreground/20 pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                © 2026 Ludwik C. Siadlak
                <br />
                Spotkanie ma charakter edukacyjny i nie zastępuje terapii
                psychologicznej,
                <br className="hidden md:block" /> nie jest też związane z
                żadną religią ani wyznaniem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* -------- Local helper components -------- */

type BenefitCardProps = {
  number: number;
  title: string;
  subtitle: string;
  body: React.ReactNode;
  bullets: string[];
};

function BenefitCard({ number, title, subtitle, body, bullets }: BenefitCardProps) {
  return (
    <div
      className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)",
        border: "1px solid rgba(56, 189, 248, 0.15)",
        boxShadow:
          "0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex items-start gap-5 md:gap-6">
        <div className="flex-shrink-0">
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(199, 89%, 48%) 0%, hsl(210, 78%, 55%) 100%)",
              boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
            }}
          >
            {number}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-base md:text-lg font-semibold text-sky-600 mb-3">
            {subtitle}
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
            {body}
          </p>
          <ul className="space-y-2 text-sm md:text-base text-slate-600">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FAQCard({ q, a }: { q: string; a: string }) {
  return (
    <Card className="bg-white dark:bg-slate-800 border-sky-200 dark:border-sky-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
        {q}
      </h3>
      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
        {a}
      </p>
    </Card>
  );
}
