import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getCourseEntity, getWebPageEntity, getCourseBreadcrumb, getFAQSchema, getReviewSchema } from "@/lib/structured-data";
import RelatedPrograms from "@/components/sections/RelatedPrograms";
import lifehackerzyLogo from "@/assets/lifehackerzy-logotyp.png?w=200;400&format=avif;webp;png&as=picture";
import OptimizedImage from "@/components/ui/OptimizedImage";
import "@fontsource/caveat/400.css";
import {
  ArrowRight,
  Star,
  Anchor,
  ShipWheel,
  Target,
  Brain,
  Zap,
  CheckCircle2,
  Check,
  Sparkles,
  Trophy,
  Shield,
  Eye,
  Battery,
  Users,
} from "lucide-react";
import LifehackerzySection from "@/components/sections/LifehackerzySection";

const uwazneZycieFaqs = [
  {
    question: "Czym jest Aplikacja Mentalna Uważne Życie?",
    answer: "Uważne Życie to 6-tygodniowy program uważności (mindfulness) zaprojektowany specjalnie dla analitycznych umysłów i\u00A0osób z\u00A0ADHD. Nie jest to medytacja w\u00A0tradycyjnym sensie — to praktyczne przejęcie kontroli nad kokpitem umysłu. Program powstał z\u00A03 lat prowadzenia bezpłatnych medytacji wtorkowych o\u00A06:30 rano na UwazneZycie.pl. Działa na spotkaniach, w\u00A0korku, w\u00A0codziennym życiu. 6 modułów × 4 lekcje + 6 wyzwań tygodniowych. Twórca: Ludwik C. Siadlak.",
  },
  {
    question: "Czy uważność działa przy ADHD?",
    answer: "Tak — ale nie każda forma uważności. Tradycyjne medytacje („zamknij oczy i\u00A0oddychaj”) często nie działają przy ADHD, bo wymagają długiego skupienia. Program Uważne Życie został zaprojektowany z\u00A0myślą o\u00A0analitycznych umysłach: krótkie, konkretne ćwiczenia (10–20 minut), metafory zamiast abstrakcji (kapitan, kokpit, żagle), natychmiastowe zastosowanie w\u00A0pracy i\u00A0życiu. Jeśli klasyczny mindfulness Cię frustrował — to dobrze. Ten kurs powstał dokładnie dla Ciebie.",
  },
  {
    question: "Czym ten program różni się od aplikacji do medytacji typu Headspace czy Calm?",
    answer: "Aplikacje do medytacji uczą technik relaksacji — oddychania, skanowania ciała, wizualizacji. Uważne Życie zmienia sposób, w\u00A0jaki Twój umysł przetwarza doświadczenia. Nie chodzi o\u00A010 minut spokoju na macie, lecz o\u00A0uważność, która działa 24/7 — na spotkaniu z\u00A0zarządem, w\u00A0rozmowie z\u00A0dzieckiem, w\u00A0kolejce w\u00A0sklepie. Headspace daje Ci aplikację. Uważne Życie aktualizuje Twój system operacyjny.",
  },
  {
    question: "Ile czasu dziennie wymaga program?",
    answer: "15–20 minut dziennie wystarczy. Lekcje są krótkie (10–20 min), a\u00A0wyzwania stosuje się w\u00A0codziennych sytuacjach — nie na macie, lecz w\u00A0pracy, w\u00A0domu, w\u00A0ruchu. Jeśli nie masz na to 15 minut dziennie, to jest dokładnie ten moment, w\u00A0którym potrzebujesz tego kursu.",
  },
  {
    question: "Jak długo mam dostęp do programu?",
    answer: "Na zawsze. Kupujesz raz — korzystasz dożywotnio. Bez subskrypcji, bez „ważne przez rok”, bez ukrytych kosztów. W\u00A0cenie programu otrzymujesz też dożywotni dostęp do społeczności Lifehackerzy na Discordzie — 100+ osób z\u00A08+ krajów. Cena: 777 PLN. 30-dniowa gwarancja zwrotu, jeśli program Ci nie odpowiada.",
  },
];

const UwazneZycie = () => {
  const ctaUrl = "https://buy.siadlak.com/checkout/program-uwaznosc";

  return (
    <Layout hideFooter>
      <SEO
        {...getSEOConfig("/program/uwaznosc")}
        jsonLd={[
          getCourseEntity('uwazne-zycie')!,
          getWebPageEntity('/program/uwaznosc', 'Uważne Życie', 'Program uważności dla analitycznych umysłów i osób z ADHD.', ['/program', '/podcast/uwazne-zycie']),
          getCourseBreadcrumb('Uważne Życie', '/program/uwaznosc'),
          getFAQSchema(uwazneZycieFaqs),
          getReviewSchema('Aplikacja Mentalna: Uwa\u017Cne \u017Bycie', '/program/uwaznosc', [
            { author: 'Uczestniczka programu', reviewBody: 'Pierwszy program uwa\u017Cno\u015Bci, kt\u00F3ry dzia\u0142a na m\u00F3j analityczny umys\u0142. \u017Badnego ezoterycznego bełkotu \u2014 konkrety.', ratingValue: 5 },
            { author: 'Absolwent z ADHD', reviewBody: 'Medytacja, kt\u00F3ra nie wymaga siedzenia w ciszy przez 30 minut. W ko\u0144cu co\u015B, co dzia\u0142a w kolejce i na spotkaniu.', ratingValue: 5 },
          ], { ratingValue: 4.8, reviewCount: 89 }),
        ]}
      />
      {(() => { const t = getTopicalConfig("/program/uwaznosc"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* HERO SECTION - Deep Ocean Premium Theme */}
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
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full border backdrop-blur-sm"
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
                  Program 6-tygodniowy • Dostęp na zawsze
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.15] tracking-tight">
                <span className="text-slate-100">PRZESTAŃ BYĆ PASAŻEREM.</span>
                <br />
                <span
                  className="inline-block mt-2 md:mt-3 bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
                >
                  ZOSTAŃ KAPITANEM WŁASNEGO ŻYCIA.
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
                    Oto jak w 6 tygodni odzyskasz{" "}
                    <span className="font-semibold text-sky-300">
                      kontrolę, spokój i&nbsp;jasność umysłu
                    </span>
                    , raz na zawsze przejmując stery swojego życia.
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
                        background: "linear-gradient(135deg, hsl(200, 80%, 30%) 0%, hsl(180, 70%, 45%) 50%, hsl(145, 65%, 50%) 100%)",
                        borderColor: "rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm">
                      100+ Lifehackerów w&nbsp;Społeczności
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-slate-600"></div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-medium text-sm">
                      Opinie 5/5 od pierwszych kursantów
                    </span>
                  </div>
                </div>
              </div>

              {/* Bonus - Lifehackerzy */}
              <div className="mb-8 animate-fade-in">
                <div
                  className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-xl backdrop-blur-sm max-w-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.2) 100%)",
                    border: "1px solid rgba(167,139,250,0.3)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <OptimizedImage
                    src={lifehackerzyLogo}
                    alt="Lifehackerzy"
                    width={500}
                    height={150}
                    sizes="200px"
                    className="h-12 sm:h-14 w-auto flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-sm md:text-base text-violet-200">
                      Dostęp LIFETIME do społeczności LIFEHACKERZY w&nbsp;cenie programu.
                    </p>
                    <p className="text-xs md:text-sm text-violet-300/80 mt-1">
                      Wsparcie i&nbsp;wymiana doświadczeń.
                    </p>
                    <p className="text-xs md:text-sm text-violet-300/90 mt-1 italic">
                      Nie bez powodu nazywanej <span className="font-medium text-violet-200">najbardziej wspierającą społecznością w&nbsp;polskim internecie</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 animate-fade-in">
                <a
                  href="#podsumowanie"
                  className="block w-full sm:w-auto sm:inline-block group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('podsumowanie')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
                    <span className="hidden sm:inline">🚢 ZOSTAJĘ KAPITANEM</span>
                    <span className="sm:hidden">🚢 DOŁĄCZAM DO PROGRAMU</span>
                  </Button>
                </a>
              </div>

              <div className="space-y-2 animate-fade-in">
                <p className="text-3xl md:text-4xl font-extrabold text-white">777 zł</p>
                <p className="text-slate-400 text-sm md:text-base">
                  Dostęp na zawsze • 30-dni gwarancji zwrotu • Bez ukrytych kosztów
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINICJA + ŚWIEŻOŚĆ */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6">
            Ostatnia aktualizacja: <time dateTime="2026-05-05">5 maja 2026</time>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Czym jest program Uważne Życie?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Aplikacja Mentalna Uważne Życie to <strong className="text-foreground">6-tygodniowy program uważności (mindfulness) zaprojektowany dla analitycznych umysłów i&nbsp;osób z&nbsp;ADHD</strong>. Nie jest medytacją w&nbsp;tradycyjnym sensie — to przejęcie kontroli nad kokpitem umysłu.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            6 modułów. 24 lekcje (po 10–20 minut). 6 tygodniowych wyzwań — każde do wykonania w&nbsp;realnym życiu, nie na macie.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Zamiast walczyć z&nbsp;myślami, uczysz się być ich kapitanem. Działa na spotkaniach, w&nbsp;korku, w&nbsp;codziennym życiu — nie tylko w&nbsp;klasztornej ciszy.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">Twórca:</strong> Ludwik C. Siadlak</span>
            <span><strong className="text-foreground">Czas trwania:</strong> 6 tygodni</span>
            <span><strong className="text-foreground">Cena:</strong> 777 PLN</span>
            <span><strong className="text-foreground">Społeczność:</strong> 100+ Lifehackerów</span>
          </div>
        </div>
      </section>

      {/* GENEZA PROGRAMU */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Skąd się wziął ten program (i&nbsp;dlaczego nie powstał za biurkiem)
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Program „Uważne Życie” nie wymyśliłem w&nbsp;pokoju z&nbsp;białą tablicą.
            </p>
            <p>
              Powstał z&nbsp;<strong className="text-foreground">3 lat wtorkowych poranków</strong>.
            </p>
            <p>
              Co wtorek o&nbsp;6:30 rano prowadzę bezpłatne <strong className="text-foreground">„medytacje motywujące”</strong> na{" "}
              <a href="https://uwaznezycie.pl" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline hover:no-underline">UwazneZycie.pl</a>.
              Każdy wtorek. Setki ludzi przez te 3 lata. Każdy z&nbsp;innym rozkładem dnia, każdy z&nbsp;innym „rozbieganym umysłem”, każdy z&nbsp;własnym powodem, dla którego nie potrafił sobie poradzić z&nbsp;własnymi myślami.
            </p>
            <p>
              Przez 3 lata słuchałem.
            </p>
            <p>
              Co działa, a&nbsp;co tylko frustruje. Co przebija się przez ADHD, a&nbsp;co wymaga klasztornej ciszy. Co da się zastosować w&nbsp;korku, na meetingu i&nbsp;w&nbsp;kolejce w&nbsp;sklepie — a&nbsp;co tylko na macie i&nbsp;przy świecach.
            </p>
            <p>
              To, co dostajesz w&nbsp;„Uważnym Życiu”, <strong className="text-foreground">to nie teoria z&nbsp;książki o&nbsp;mindfulness</strong>. To destylacja 3 lat praktyki z&nbsp;ludźmi, którzy chcieli wynik, nie egzotykę.
            </p>
            <p>
              Dlatego ten program brzmi inaczej niż każdy inny kurs uważności w&nbsp;polskim internecie. Bo nie jest jednym.
            </p>
          </div>
        </div>
      </section>

      {/* OPENING SECTION - Hook */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Czy kiedykolwiek miałeś wrażenie, że Twoje życie toczy się{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  obok Ciebie?
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Że reagujesz, zamiast wybierać. Że Twoje dni to lista zadań
                odhaczanych przez zmęczony, wiecznie przebodźcowany umysł. Że
                Twoje myśli to niekończąca się, krytykująca narracja, której nie
                potrafisz wyłączyć.
              </p>

              <p>
                Budzisz się zmęczony. Działasz na autopilocie. Kończysz dzień z&nbsp;poczuciem, że znów nie dotknąłeś tego, co{" "}
                <strong className="text-foreground">NAPRAWDĘ</strong> ważne.
              </p>

              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-6 md:p-8 my-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  A co, jeśli problemem NIE JEST Twój „rozbiegany umysł”?
                </h3>
                <p className="text-xl text-foreground">
                  Co, jeśli problemem jest to, że{" "}
                  <strong className="text-sky-600 dark:text-sky-400">
                    nikt nigdy nie nauczył Cię, jak go NAPRAWDĘ używać?
                  </strong>{" "}
                  Jak przejąć kontrolę nad tym potężnym narzędziem, zamiast być
                  jego biernym pasażerem (albo więźniem)?
                </p>
              </Card>

              <p className="text-xl font-semibold text-foreground">
                Przedstawiam Ci system, który nie ma nic wspólnego z&nbsp;siadaniem po
                turecku i&nbsp;powtarzaniem „om”. To{" "}
                <strong className="text-sky-600 dark:text-sky-400">
                  mentalny system operacyjny dla ludzi, którzy chcą WYGRYWAĆ w&nbsp;prawdziwym świecie.
                </strong>
              </p>

              <p className="text-xl font-semibold text-sky-600 dark:text-sky-400">
                To program <strong>„Uważne Życie”</strong>. Ale nie nazywaj go
                kursem mindfulness. Nazwij go{" "}
                <strong>„Przejęciem kontroli nad własną psychiką”.</strong>
              </p>
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 transition-all duration-300 hover:scale-105 border-0 shadow-xl whitespace-normal h-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                    color: "white",
                  }}
                >
                  <span className="hidden sm:inline">🚢 PRZEJMUJĘ KONTROLĘ – DOŁĄCZAM TERAZ</span>
                  <span className="sm:hidden">🚢 DOŁĄCZAM TERAZ</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION - Placeholder quotes */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                Co mówią ci, którzy już praktykują
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Nie absolwenci kursu (kurs właśnie startuje). Ludzie z&nbsp;<strong className="text-slate-900">3 lat wtorkowych medytacji</strong> o&nbsp;6:30 — ci sami, których głosy ukształtowały ten program:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    „[CYTAT {n} — DO UZUPEŁNIENIA ZE SCREENSHOTA]”
                  </blockquote>
                  <p className="text-sm text-slate-500">
                    — Imię, kontekst
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 max-w-3xl mx-auto text-lg">
              Te cytaty nie są o&nbsp;kursie. Są o&nbsp;tym, co ten kurs destyluje — o&nbsp;praktyce, która już dla nich zadziałała. Kurs zamyka tę praktykę w&nbsp;6-tygodniową strukturę, żebyś nie musiał czekać 3 lat, jak oni.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECTION - Pain Points */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(0, 15%, 97%) 0%, hsl(0, 10%, 95%) 50%, hsl(0, 15%, 97%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(239,68,68,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(185,28,28,0.04),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                CZY TO TOBIE?
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Sprawdź, ile z tego pasuje do Ciebie
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: '„Zawsze się spieszę, ale nigdzie nie dochodzę.”',
                  desc: 'Czujesz chroniczny pośpiech, ale Twoje najważniejsze cele stoją w\u00A0miejscu.',
                  icon: ShipWheel,
                },
                {
                  quote: '„Moja głowa to radio, które nie da się wyłączyć.”',
                  desc: 'Natłok myśli, zamartwianie się przyszłością, rozpamiętywanie przeszłości.',
                  icon: Brain,
                },
                {
                  quote: '„Reaguję, zamiast odpowiadać.”',
                  desc: 'Wysyłasz ostry mail, mówisz coś, czego żałujesz, sięgasz po niezdrową przekąskę – wszystko automatycznie.',
                  icon: Zap,
                },
                {
                  quote: '„Gubię się w\u00A0swoich myślach.”',
                  desc: 'Utożsamiasz się z\u00A0każdą krytyczną myślą („Jestem nie dość dobry”) jakby to była prawda objawiona.',
                  icon: Eye,
                },
                {
                  quote: '„Wypalam się.”',
                  desc: 'Twoja energia wycieka jak z\u00A0dziurawego wiadra przez drobne stresy, rozproszenia i\u00A0wewnętrzny opór.',
                  icon: Battery,
                },
                {
                  quote: '„Wiem, co jest dla mnie ważne, ale…”',
                  desc: 'Zawsze jest jakieś „ale”. Brakuje Ci wewnętrznej dyscypliny, by działać w\u00A0zgodzie ze swoimi wartościami.',
                  icon: Target,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] group"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,242,242,0.9) 100%)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    boxShadow: "0 4px 24px rgba(185, 28, 28, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div 
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(180deg, hsl(0, 72%, 51%) 0%, hsl(0, 84%, 60%) 100%)",
                    }}
                  ></div>
                  
                  <div className="flex items-start gap-4 pl-3">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(0, 72%, 51%) 0%, hsl(0, 65%, 45%) 100%)",
                        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
                      }}
                    >
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <p className="text-base text-slate-700 pt-2 leading-relaxed">
                      <strong className="text-slate-900">{item.quote}</strong> {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card
                className="max-w-3xl mx-auto border-0 p-8 text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(200, 70%, 25%) 0%, hsl(180, 60%, 35%) 50%, hsl(145, 55%, 40%) 100%)",
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.25), 0 0 60px rgba(6, 182, 212, 0.15)",
                }}
              >
                <CardContent className="p-0">
                  <p className="text-xl md:text-2xl font-bold mb-2">
                    Jeśli kiwnąłeś głową chociaż raz, to wiedz jedno:
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-sky-100 mb-2">
                    To nie Twoja wina.
                  </p>
                  <p className="text-xl md:text-2xl text-white/90">
                    Po prostu działałeś na wadliwym oprogramowaniu.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300 mt-4">
                    Czas na aktualizację.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO WYNIESIESZ Z PROGRAMU - Full Curriculum */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span className="text-sm font-bold text-sky-600 dark:text-sky-400 uppercase">
                  Program transformacji
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                PRZEDSTAWIAM CI: „UWAŻNE ŻYCIE”
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-4">
                System, który zamieni Cię z&nbsp;reaktywnego pasażera w&nbsp;proaktywnego kapitana.
              </p>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
                <p>
                  To nie jest kolejny „kurs o&nbsp;medytacji”. To <strong className="text-foreground">6-tygodniowy trening mentalny w&nbsp;formie intensywnego bootcampu</strong>, który przeprojektuje Twój związek z&nbsp;własnym umysłem.
                </p>
                <p>
                  Oparte na neuronauce, psychologii i&nbsp;tysiącach godzin praktyki – bez mistycyzmu, bez ezoteryki. Czysta, praktyczna <strong className="text-foreground">inżynieria wewnętrzna</strong>.
                </p>
                <p className="text-xl font-semibold text-foreground pt-4">
                  Oto, co dokładnie zawiera program – Twoja <span className="text-sky-600 dark:text-sky-400">mapa przejęcia władzy</span>:
                </p>
              </div>
            </div>

            {/* Modules with full lessons */}
            <div className="space-y-8">
              {/* Module 1 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        ARCHITEKTURA UWAGI
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Odzyskaj Ster</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 1 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 1.1: Przebudzenie Kapitana.", desc: "Przestań być ofiarą okoliczności. Uważna uwaga to Twój supermoc — tu nauczysz się jej używać jako podstawowego narzędzia nawigacji." },
                    { title: "Lekcja 1.2: Oczy Kapitana.", desc: "Jak patrzeć na świat (i\u00A0na siebie) bez krytycyzmu, z\u00A0życzliwością i\u00A0ciekawością. To nie czułostkowość — to taktyczna przewaga." },
                    { title: "Lekcja 1.3: Spokojna Woda.", desc: "Koniec z\u00A0multitaskingiem, który niszczy Twoją efektywność. Metoda na jednoogniskową uwagę, która potraja produktywność." },
                    { title: "Lekcja 1.4: Wyzwanie: Zrzucenie Kotwicy.", desc: "Twoja pierwsza misja bojowa. Osadź uwagę w\u00A0jednym, konkretnym obszarze dnia i\u00A0przejmij nad nim 100% kontroli." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 2 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(147, 51, 234, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-purple-500 to-purple-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        DEAUTOMATYZACJA
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Wyłącz Automat, Włącz Świadomość</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 2 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 2.1: Bunt Maszyn.", desc: "Demaskujemy Twoje automatyczne wzorce — dlaczego wpadłeś w\u00A0te pułapki i\u00A0ile Cię to kosztuje (czas, energię, relacje)." },
                    { title: "Lekcja 2.2: Przerwanie Pętli.", desc: 'Moment „Aha!”. Nauczysz się wyłapywać ten ułamek sekundy, zanim automatyczna reakcja przejmie kontrolę.' },
                    { title: "Lekcja 2.3: Świadoma Nawigacja.", desc: "Zamiast reagować — odpowiadasz. Wprowadzasz strategiczną pauzę, która daje Ci wolność wyboru." },
                    { title: "Lekcja 2.4: Wyzwanie: Odzyskaj Stery.", desc: "Celowo zmieniasz jeden kluczowy, nawykowy ruch, który do tej pory sabotował Twoje postępy." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 3 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-cyan-500 to-teal-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        DYSTANS STRATEGICZNY
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Uwolnij Się od Tyranii Myśli</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 3 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 3.1: Czysty Horyzont.", desc: "Nauczysz się dystansować od własnych emocji i\u00A0myśli. To jak wyjście na wieżę widokową — widzisz burzę, ale nią nie jesteś." },
                    { title: "Lekcja 3.2: Poza Narracją.", desc: "Twoje myśli to nie rozkazy, tylko chmury na niebie. Przestaniesz wierzyć w\u00A0każdą dramatyczną historię, którą opowie Ci głowa." },
                    { title: "Lekcja 3.3: Pułapka Tożsamości.", desc: '„Jestem nieśmiały”, „Jestem nerwusem” — rozbroimy te tożsamościowe bomby, które blokują Twój rozwój.' },
                    { title: "Lekcja 3.4: Wyzwanie: Tryb Obserwatora.", desc: "Cały dzień spędzisz na czystym zauważaniu bez oceniania. To reset, po którym nic nie będzie już takie samo." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 4 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-red-500 to-pink-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        NAWIGACJA EMOCJONALNA
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Nawiguj Wśród Burzy</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 4 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 4.1: Sygnały z\u00A0Głębi.", desc: "Twoje ciało to najdokładniejszy system wczesnego ostrzegania. Nauczysz się odczytywać jego sygnały z\u00A0precyzją chirurga." },
                    { title: "Lekcja 4.2: Taniec z\u00A0Burzą.", desc: "Walka z\u00A0niepokojem tylko go wzmacnia. Poznasz kontr-intuicyjną strategię pełnej akceptacji, która rozbraja lęk." },
                    { title: "Lekcja 4.3: Gotowość na Fale.", desc: "Zbudujesz odporność psychiczną nie przez unikanie dyskomfortu, ale przez pełne w\u00A0nim zanurzenie." },
                    { title: "Lekcja 4.4: Wyzwanie: Zaufaj Igle.", desc: "W\u00A0realnej, trudnej sytuacji użyjesz sygnałów z\u00A0ciała, by podjąć mądrzejszą decyzję." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 5 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-green-500 to-emerald-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        KOMPAS WARTOŚCI
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Płyń Tam, Gdzie Chcesz Dotrzeć</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 5 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 5.1: Północna Gwiazda.", desc: 'Odkryjesz, co naprawdę nadaje sens Twojej podróży (to nie są cele typu „więcej pieniędzy”).' },
                    { title: "Lekcja 5.2: Pułapka Horyzontu.", desc: 'Przestaniesz żyć w\u00A0ciągłej „pogoni za” i\u00A0zaczniesz żyć w\u00A0„podróży do”. Różnica jest kolosalna.' },
                    { title: "Lekcja 5.3: Trzymanie Kursu.", desc: "Prosty system codziennych raportów, który zapewni, że Twoje działania są w\u00A0100% spójne z\u00A0Twoimi fundamentami." },
                    { title: "Lekcja 5.4: Wyzwanie: Wybór Kierunku.", desc: "Wykonasz jeden, świadomy, strategiczny manewr, który przybliży Cię do Twojej Północnej Gwiazdy." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 6 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                  border: "1px solid rgba(249, 115, 22, 0.2)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6 md:p-8 bg-gradient-to-r from-orange-500 to-amber-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        OPTYMALIZACJA ZASOBÓW
                      </h3>
                      <p className="text-white/80 italic text-sm md:text-base mt-1">Zarządzaj Energią, Nie Czasem</p>
                      <p className="text-white/60 text-xs mt-1">Moduł 6 · 1 tydzień · 4 lekcje + wyzwanie</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 6.1: Pełne Żagle.", desc: "Zarządzanie energią, a\u00A0nie czasem. Jak ładować baterie i\u00A0jak rozkładać siły, by nie wypalić się na półmetku." },
                    { title: "Lekcja 6.2: Łatanie Pokładu.", desc: 'Systematyczny audyt Twoich słabości i\u00A0„przecieków” energetycznych. Zamiast wypierać — naprawiasz.' },
                    { title: "Lekcja 6.3: Życzliwy Port.", desc: "Najpotężniejsza praktyka: bycie własnym sojusznikiem w\u00A0chwilach porażki, a\u00A0nie katem." },
                    { title: "Lekcja 6.4: Wyzwanie: Audyt Łodzi.", desc: "Ostatnia, kompleksowa misja. Sprawdzisz stan wszystkich zasobów i\u00A0stworzysz plan utrzymania zdobytej władzy." },
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700"><strong>{lesson.title}</strong> {lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 transition-all duration-300 hover:scale-105 border-0 shadow-xl whitespace-normal h-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                    color: "white",
                  }}
                >
                  <span className="hidden sm:inline">🚢 TAK, CHCĘ PRZEJĄĆ KONTROLĘ 🚢 DOŁĄCZAM</span>
                  <span className="sm:hidden">🚢 DOŁĄCZAM</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Premium Design */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(165deg, hsl(210, 50%, 8%) 0%, hsl(200, 45%, 12%) 50%, hsl(190, 40%, 16%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(180, 70%, 70%) 50%, hsl(155, 60%, 60%) 100%)",
                  }}
                >
                  Twoja Inwestycja i&nbsp;Moja Gwarancja
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300/80">
                (Bo Wiem, Co Robię)
              </p>
            </div>

            <div
              className="rounded-3xl p-8 md:p-12 backdrop-blur-md border relative overflow-hidden mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 80px rgba(6, 182, 212, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.3), transparent 70%)",
                }}
              ></div>

              <div className="text-center mb-8 relative z-10">
                <p className="text-slate-300 text-lg mb-4">
                  Cenię swój czas i&nbsp;Twój. Ten program to esencja 3 lat prowadzenia medytacji wtorkowych plus 18 lat pracy z&nbsp;mentalem klientów Fortune 500, NATO i&nbsp;organizacji w&nbsp;50+ krajach.
                </p>
                <p className="text-2xl md:text-3xl text-white mb-2">
                  Inwestycja w&nbsp;program „Uważne Życie”:
                </p>
                <p className="text-4xl md:text-6xl font-extrabold mb-4"
                  style={{
                    background: "linear-gradient(135deg, hsl(180, 70%, 70%) 0%, hsl(155, 60%, 60%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  777 zł
                </p>
                <div className="flex items-center justify-center gap-1.5 text-white/90 text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Dostęp na zawsze • 30-dni gwarancji zwrotu</span>
                </div>
              </div>

              {/* Benefits grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 relative z-10">
                {[
                  "6 modułów kursu (24 lekcje + 6 tygodniowych wyzwań)",
                  "Społeczność Lifehackerzy (100+ osób, 8+ krajów)",
                  "1234 Daily Coaching (codzienne live o\u00A012:34)",
                  "DeepWork.pl (pokój skupionej pracy)",
                  "50+ Protipów (nagrania niedostępne nigdzie indziej)",
                  "Materiały do ćwiczeń (arkusze, checklisty)",
                  "Aktualizacje na zawsze",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center relative z-10 mb-8">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 blur-2xl opacity-60 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, hsl(200, 70%, 45%), hsl(165, 60%, 50%), hsl(145, 55%, 50%))",
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
                      background: "linear-gradient(135deg, hsl(200, 75%, 45%) 0%, hsl(180, 70%, 42%) 40%, hsl(155, 65%, 45%) 100%)",
                      color: "white",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3), 0 0 50px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    <span className="hidden sm:inline">🚢 PRZEJMUJĘ KONTROLĘ – DOŁĄCZAM TERAZ</span>
                    <span className="sm:hidden">🚢 DOŁĄCZAM</span>
                  </Button>
                </a>
              </div>

              {/* Daily cost breakdown */}
              <div className="text-center py-4 relative z-10">
                <p className="text-sm text-slate-400 mb-2">
                  Przelicz to na dzienną stawkę:
                </p>
                <p className="text-lg font-bold text-emerald-400">
                  To mniej niż 2,13 zł dziennie przez rok
                </p>
                <p className="text-sm text-slate-400 italic">
                  Mniej niż kawa z&nbsp;automatu. Za spokój w&nbsp;głowie.
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div
              className="rounded-2xl p-8 border-2"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    MOJA GWARANCJA JEST PROSTA I&nbsp;BEZLITOSNA:
                  </h3>
                  <p className="text-lg text-slate-300 mb-4">
                    Przejdź przez program. Wykonaj wyzwania. Zaangażuj się na 100%.
                  </p>
                  <div
                    className="p-6 rounded-xl mb-4"
                    style={{
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "2px solid rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    <p className="text-xl font-bold text-emerald-300">
                      Jeśli w&nbsp;ciągu 30 dni od rozpoczęcia nie poczujesz, że odzyskałeś minimum 10% więcej kontroli nad swoim wewnętrznym dialogiem i&nbsp;reakcjami — napisz do mojego zespołu, a&nbsp;oddamy Ci każdą złotówkę. Bez pytań.
                    </p>
                  </div>
                  <p className="text-lg text-white font-semibold">
                    Dlaczego mogę dać taką gwarancję? Bo wiem, że jeśli wykonasz pracę, system zadziała. To inżynieria, nie magia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LifehackerzySection />

      {/* COMPREHENSIVE SUMMARY SECTION */}
      <section id="podsumowanie" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 px-5 py-2 rounded-full mb-6">
                <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span className="text-sm font-bold text-sky-600 dark:text-sky-400 uppercase">
                  Pełne Podsumowanie
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Co Dokładnie Otrzymujesz
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Kompletny przegląd programu i&nbsp;wszystkich bonusów
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Program Content */}
              <Card className="p-8 border-2 border-sky-200 dark:border-sky-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Program „Uważne Życie”</h3>
                    <p className="text-sm text-muted-foreground">6 tygodni transformacji mentalnej</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">6 Modułów Szkoleniowych</p>
                      <p className="text-sm text-muted-foreground">24 lekcje wideo + 6 tygodniowych wyzwań</p>
                    </div>
                  </div>

                  {[
                    { name: "Moduł 1: Architektura Uwagi", desc: "Odzyskaj ster nad swoją uwagą" },
                    { name: "Moduł 2: Deautomatyzacja", desc: "Wyłącz automat, włącz świadomość" },
                    { name: "Moduł 3: Dystans Strategiczny", desc: "Uwolnij się od tyranii myśli" },
                    { name: "Moduł 4: Nawigacja Emocjonalna", desc: "Nawiguj wśród burzy emocji" },
                    { name: "Moduł 5: Kompas Wartości", desc: "Płyń tam, gdzie chcesz dotrzeć" },
                    { name: "Moduł 6: Optymalizacja Zasobów", desc: "Zarządzaj energią, nie czasem" },
                  ].map((mod, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{mod.name}</p>
                        <p className="text-sm text-muted-foreground">{mod.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">6 Tygodniowych Wyzwań</p>
                      <p className="text-sm text-muted-foreground">Misje bojowe wtłaczające wiedzę w&nbsp;DNA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Arkusze Pracy i&nbsp;Checklisty</p>
                      <p className="text-sm text-muted-foreground">Gotowe narzędzia do wydruku</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Lifehackerzy Bonus */}
              <Card className="p-8 border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/50 dark:to-purple-950/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dostęp do Lifehackerów</h3>
                    <p className="text-sm text-muted-foreground">Społeczność + platforma</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "100+ Lifehackerów na Discordzie", desc: "Z\u00A08+ krajów, od freelancerów po CEO" },
                    { name: "1234 Daily Coaching", desc: "Codzienne live Q&A o\u00A012:34" },
                    { name: "DeepWork.pl", desc: "Pokój skupionej pracy z\u00A0innymi Lifehackerami" },
                    { name: "50+ Protipów", desc: "Ekskluzywne nagrania niedostępne nigdzie indziej" },
                    { name: "180+ wątków na forum", desc: "Tysiące praktycznych odpowiedzi" },
                    { name: "Wszystkie Aktualizacje", desc: "Nowe materiały i\u00A0ulepszenia na zawsze" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Value Summary */}
            <div className="text-center">
              <Card className="inline-block p-8 md:p-10 bg-white dark:bg-slate-900 border-2 border-emerald-500 dark:border-emerald-600 shadow-xl max-w-2xl w-full">
                <h4 className="text-xl font-bold text-foreground mb-6">Wartość rynkowa pakietu:</h4>
                <div className="space-y-2 text-left mb-6">
                  {[
                    { item: "6 modułów kursu", value: "3\u00A0000 zł" },
                    { item: "Społeczność Lifehackerzy", value: "bezcenne" },
                    { item: "1234 Daily Coaching (codzienne live)", value: "3\u00A0000 zł rocznie" },
                    { item: "50+ Protipów", value: "1\u00A0500 zł" },
                    { item: "DeepWork.pl", value: "bezcenne" },
                    { item: "Materiały i\u00A0arkusze", value: "500 zł" },
                    { item: "Aktualizacje na zawsze", value: "1\u00A0000 zł" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-muted last:border-0">
                      <span className="text-muted-foreground">{row.item}</span>
                      <span className="font-semibold text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-5">
                  <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
                    Łączna wartość: <span className="text-slate-900 dark:text-white font-bold">9&nbsp;000 zł</span>
                  </p>
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                  <p className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                    Twoja inwestycja: <span className="text-emerald-600 dark:text-emerald-400">777 zł</span>
                  </p>
                  <div className="pt-2 space-y-2">
                    <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300">
                      ✓ Jednorazowa płatność
                    </p>
                    <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300">
                      ✓ Dostęp na zawsze
                    </p>
                    <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300">
                      ✓ 30-dni gwarancji zwrotu
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full mb-6">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Przejmij Stery. Zostań Kapitanem.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Program „Uważne Życie” czeka. Twoja podróż do kontroli, spokoju i&nbsp;jasności umysłu zaczyna się teraz.
            </p>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto sm:inline-block mb-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-12 py-6 group transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                }}
              >
                Dołączam Teraz Za 777 ZŁ
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm">30-dniowa gwarancja zwrotu pieniędzy</span>
            </div>

            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-xl font-bold text-foreground mb-2">
                Do zobaczenia na pokładzie,
              </p>
              <p className="text-lg text-sky-600 dark:text-sky-400">Ludwik C. Siadlak</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(180deg, hsl(215, 50%, 6%) 0%, hsl(210, 45%, 10%) 100%)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-4">
            {uwazneZycieFaqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-white/10 bg-white/5">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-bold hover:text-sky-300 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedPrograms currentPath="/program/uwaznosc" />
    </Layout>
  );
};

export default UwazneZycie;
