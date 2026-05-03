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
  Video,
  MessageSquare,
  PlayCircle,
  Heart,
  Globe,
} from "lucide-react";

const uwazneZycieFaqs = [
  {
    question: "Czym jest Aplikacja Mentalna Uwa\u017Cne \u017Cycie?",
    answer: "Uwa\u017Cne \u017Cycie to 4\u20136-tygodniowy program uwa\u017Cno\u015Bci (mindfulness) zaprojektowany specjalnie dla analitycznych umys\u0142\u00F3w i os\u00F3b z ADHD. Nie jest to medytacja w tradycyjnym sensie \u2014 to praktyczne przej\u0119cie kontroli nad kokpitem umys\u0142u. Dzia\u0142a na spotkaniach, w korku, w codziennym \u017Cyciu. 500+ kapitan\u00F3w w spo\u0142eczno\u015Bci, ocena 4.9/5.0. Tw\u00F3rca: Ludwik C. Siadlak.",
  },
  {
    question: "Czy uwa\u017Cno\u015B\u0107 dzia\u0142a przy ADHD?",
    answer: "Tak \u2014 ale nie ka\u017Cda forma uwa\u017Cno\u015Bci. Tradycyjne medytacje (\u2018zamknij oczy i oddychaj\u2019) cz\u0119sto nie dzia\u0142aj\u0105 przy ADHD, bo wymagaj\u0105 d\u0142ugiego skupienia. Program Uwa\u017Cne \u017Cycie zosta\u0142 zaprojektowany z my\u015Bl\u0105 o analitycznych umys\u0142ach: kr\u00F3tkie, konkretne \u0107wiczenia, metafory zamiast abstrakcji (kapitan, kokpit, \u017Cagle), natychmiastowe zastosowanie w pracy i \u017Cyciu.",
  },
  {
    question: "Czym ten program r\u00F3\u017Cni si\u0119 od aplikacji do medytacji typu Headspace czy Calm?",
    answer: "Aplikacje do medytacji ucz\u0105 technik relaksacji \u2014 oddychania, skanowania cia\u0142a, wizualizacji. Uwa\u017Cne \u017Cycie zmienia spos\u00F3b, w jaki Tw\u00F3j umys\u0142 przetwarza do\u015Bwiadczenia. Nie chodzi o 10 minut spok\u00F3ju na macie, lecz o uwa\u017Cno\u015B\u0107, kt\u00F3ra dzia\u0142a 24/7 \u2014 na spotkaniu z zarz\u0105dem, w rozmowie z dzieckiem, w kolejce w sklepie. Efekt jest trwa\u0142y, nie wymaga codziennego \u0107wiczenia.",
  },
  {
    question: "Ile czasu dziennie wymaga program?",
    answer: "Program jest zaprojektowany tak, by wpasowa\u0107 si\u0119 w \u017Cycie zaj\u0119tych profesjonalist\u00F3w. Nie wymaga godzinnych sesji medytacji. Modu\u0142y s\u0105 kr\u00F3tkie i konkretne, a \u0107wiczenia stosuje si\u0119 w codziennych sytuacjach \u2014 nie na macie, lecz w pracy, w domu, w ruchu.",
  },
  {
    question: "Jak d\u0142ugo mam dost\u0119p do programu?",
    answer: "Na zawsze. Kupujesz raz \u2014 korzystasz do\u017Cywotnie. W cenie programu otrzymujesz te\u017C dost\u0119p do spo\u0142eczno\u015Bci Lifehackerzy na Discordzie \u2014 500+ kapitan\u00F3w z 8+ kraj\u00F3w. Cena: 777 PLN. 30-dniowa gwarancja zwrotu.",
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
        {/* Subtle depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

        {/* Refined ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>

        {/* Subtle gold accent glow */}
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
                      500+ kapitanów w społeczności
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
                      Ocena 4.9/5
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
            Ostatnia aktualizacja: <time dateTime="2026-03-28">28 marca 2026</time>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Czym jest program Uważne Życie?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Aplikacja Mentalna Uważne Życie to 4–6-tygodniowy program uważności (mindfulness) zaprojektowany dla analitycznych umysłów i osób z ADHD. Nie jest medytacją w tradycyjnym sensie — to przejęcie kontroli nad kokpitem umysłu. Zamiast walczyć z myślami, uczysz się być ich kapitanem. Działa na spotkaniach, w korku, w codziennym życiu — nie tylko na macie do medytacji.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">Twórca:</strong> Ludwik C. Siadlak</span>
            <span><strong className="text-foreground">Czas trwania:</strong> 4–6 tygodni</span>
            <span><strong className="text-foreground">Cena:</strong> 777 PLN</span>
            <span><strong className="text-foreground">Ocena:</strong> 4.9/5.0 (500+ kapitanów)</span>
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
                  A co, jeśli problemem NIE JEST Twój "rozbiegany umysł"?
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
                turecku i&nbsp;powtarzaniem "om". To{" "}
                <strong className="text-sky-600 dark:text-sky-400">
                  mentalny system operacyjny dla ludzi, którzy chcą WYGRYWAĆ w&nbsp;prawdziwym świecie.
                </strong>
              </p>

              <p className="text-xl font-semibold text-sky-600 dark:text-sky-400">
                To program <strong>"Uważne Życie"</strong>. Ale nie nazywaj go
                kursem mindfulness. Nazwij go{" "}
                <strong>"Przejęciem kontroli nad własną psychiką".</strong>
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

      {/* TESTIMONIAL VIDEO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                Testimonial, który wyjaśnia wszystko
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Handwritten annotation */}
              <div
                className="absolute -top-8 -right-4 md:-right-12 z-10 pointer-events-none"
                style={{
                  fontFamily: "Caveat, cursive",
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  color: "#dc2626",
                  transform: "rotate(2deg)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Odsłuchaj koniecznie! →
              </div>

              <Card className="overflow-hidden shadow-2xl border-2 border-slate-200">
                <CardContent className="p-0">
                  <div className="relative pt-[56.25%]">
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
                </CardContent>
              </Card>
            </div>
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
        {/* Subtle warm/red ambient glow */}
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
                  quote: '"Zawsze się spieszę, ale nigdzie nie dochodzę."',
                  desc: 'Czujesz chroniczny pośpiech, ale Twoje najważniejsze cele stoją w\u00A0miejscu.',
                  icon: ShipWheel,
                },
                {
                  quote: '"Moja głowa to radio, które nie da się wyłączyć."',
                  desc: 'Natłok myśli, zamartwianie się przyszłością, rozpamiętywanie przeszłości.',
                  icon: Brain,
                },
                {
                  quote: '"Reaguję, zamiast odpowiadać."',
                  desc: 'Wysyłasz ostry mail, mówisz coś, czego żałujesz, sięgasz po niezdrową przekąskę – wszystko automatycznie.',
                  icon: Zap,
                },
                {
                  quote: '"Gubię się w\u00A0swoich myślach."',
                  desc: 'Utożsamiasz się z\u00A0każdą krytyczną myślą ("Jestem nie dość dobry") jakby to była prawda objawiona.',
                  icon: Eye,
                },
                {
                  quote: '"Wypalam się."',
                  desc: 'Twoja energia wycieka jak z\u00A0dziurawego wiadra przez drobne stresy, rozproszenia i\u00A0wewnętrzny opór.',
                  icon: Battery,
                },
                {
                  quote: '"Wiem, co jest dla mnie ważne, ale…"',
                  desc: 'Zawsze jest jakieś "ale". Brakuje Ci wewnętrznej dyscypliny, by działać w\u00A0zgodzie ze swoimi wartościami.',
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
                  {/* Subtle red accent line on left */}
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
                PRZEDSTAWIAM CI: „UWAŻNE ŻYCIE"
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-4">
                System, który zamieni Cię z&nbsp;reaktywnego pasażera w&nbsp;proaktywnego kapitana.
              </p>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
                <p>
                  To nie jest kolejny „kurs o&nbsp;medytacji". To <strong className="text-foreground">6-tygodniowy trening mentalny w&nbsp;formie intensywnego bootcampu</strong>, który przeprojektuje Twój związek z&nbsp;własnym umysłem.
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
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 1.1: Przebudzenie Kapitana.", desc: "Przestań być ofiarą okoliczności. Uważna uwaga to Twój supermoc – tu nauczysz się jej używać jako podstawowego narzędzia nawigacji." },
                    { title: "Lekcja 1.2: Oczy Kapitana.", desc: "Jak patrzeć na świat (i\u00A0na siebie) bez krytycyzmu, z\u00A0życzliwością i\u00A0ciekawością. To nie czułostkowość – to taktyczna przewaga." },
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
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 2.1: Bunt Maszyn.", desc: "Demaskujemy Twoje automatyczne wzorce – dlaczego wpadłeś w\u00A0te pułapki i\u00A0ile Cię to kosztuje (czas, energię, relacje)." },
                    { title: "Lekcja 2.2: Przerwanie Pętli.", desc: 'Moment "Aha!". Nauczysz się wyłapywać ten ułamek sekundy, zanim automatyczna reakcja przejmie kontrolę.' },
                    { title: "Lekcja 2.3: Świadoma Nawigacja.", desc: "Zamiast reagować – odpowiadasz. Wprowadzasz strategiczną pauzę, która daje Ci wolność wyboru." },
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
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 3.1: Czysty Horyzont.", desc: "Nauczysz się dystansować od własnych emocji i\u00A0myśli. To jak wyjście na wieżę widokową – widzisz burzę, ale nią nie jesteś." },
                    { title: "Lekcja 3.2: Poza Narracją.", desc: "Twoje myśli to nie rozkazy, tylko chmury na niebie. Przestaniesz wierzyć w\u00A0każdą dramatyczną historię, którą opowie Ci głowa." },
                    { title: "Lekcja 3.3: Pułapka Tożsamości.", desc: '"Jestem nieśmiały", "Jestem nerwusem" – rozbroimy te tożsamościowe bomby, które blokują Twój rozwój.' },
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
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 5.1: Północna Gwiazda.", desc: 'Odkryjesz, co naprawdę nadaje sens Twojej podróży (to nie są cele typu "więcej pieniędzy").' },
                    { title: "Lekcja 5.2: Pułapka Horyzontu.", desc: 'Przestaniesz żyć w\u00A0ciągłej "pogoni za" i\u00A0zaczniesz żyć w\u00A0"podróży do". Różnica jest kolosalna.' },
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
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {[
                    { title: "Lekcja 6.1: Pełne Żagle.", desc: "Zarządzanie energią, a\u00A0nie czasem. Jak ładować baterie i\u00A0jak rozkładać siły, by nie wypalić się na półmetku." },
                    { title: "Lekcja 6.2: Łatanie Pokładu.", desc: 'Systematyczny audyt Twoich słabości i\u00A0"przecieków" energetycznych. Zamiast wypierać – naprawiasz.' },
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
                  <span className="hidden sm:inline">🚢 TAK, CHCĘ PRZEJĄĆ KONTROLĘ</span>
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
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header with gradient text */}
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

            {/* Main pricing card with glass effect */}
            <div
              className="rounded-3xl p-8 md:p-12 backdrop-blur-md border relative overflow-hidden mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(6, 182, 212, 0.25)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 80px rgba(6, 182, 212, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Decorative gradient corner */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.3), transparent 70%)",
                }}
              ></div>

              <div className="text-center mb-8 relative z-10">
                <p className="text-slate-300 text-lg mb-4">
                  Cenię swój czas i&nbsp;Twój. Ten program to esencja lat badań, testów i&nbsp;praktyki.
                </p>
                <p className="text-2xl md:text-3xl text-white mb-2">
                  Inwestycja w&nbsp;program "Uważne Życie":
                </p>
                <p className="text-xl md:text-2xl text-slate-400 line-through mb-2">1997 zł</p>
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
                  "6 modułów kursu (30+ lekcji)",
                  "Społeczność wsparcia",
                  "Materiały do ćwiczeń",
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
                      Jeśli w&nbsp;ciągu 30 dni od rozpoczęcia nie poczujesz, że odzyskałeś minimum 10% więcej kontroli nad swoim wewnętrznym dialogiem i&nbsp;reakcjami – napisz do mojego zespołu, a&nbsp;oddamy Ci każdą złotówkę. Bez pytań.
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

      {/* LIFEHACKERZY BONUS SECTION */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(165deg, hsl(270, 50%, 8%) 0%, hsl(265, 45%, 12%) 50%, hsl(260, 40%, 16%) 100%)",
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,92,246,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(167,139,250,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(167,139,250,0.3) 100%)",
                  borderColor: "rgba(167,139,250,0.4)",
                }}
              >
                <Sparkles className="w-5 h-5 text-violet-300" />
                <span className="font-semibold text-violet-200 text-sm uppercase tracking-wider">Bonus</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(270, 70%, 80%) 50%, hsl(280, 60%, 70%) 100%)",
                  }}
                >
                  NIE BĘDZIESZ SAM NA TEJ WYPRAWIE
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-violet-100 mb-4">
                Dołączając do "Uważnego Życia" automatycznie stajesz się <strong className="text-violet-300">LIFEHACKEREM</strong>
              </p>
              <p className="text-lg text-violet-200/80 max-w-3xl mx-auto">
                To nie jest tylko społeczność. To codzienny system wsparcia, którego nie znajdziesz nigdzie indziej na świecie.
              </p>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-12">
              <OptimizedImage
                src={lifehackerzyLogo}
                alt="Lifehackerzy"
                width={500}
                height={150}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-20 md:h-28 w-auto"
              />
            </div>

            {/* Section: CO DOKŁADNIE DOSTAJESZ */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white">CO DOKŁADNIE DOSTAJESZ:</h3>
            </div>

            {/* Feature 1: 1234 Daily Coaching */}
            <div
              className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.1) 100%)",
                borderColor: "rgba(167,139,250,0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(270, 70%, 50%) 0%, hsl(280, 60%, 45%) 100%)",
                    boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    1234 DAILY COACHING – CODZIENNE SPOTKANIA O&nbsp;12:34. BEZ WYJĄTKÓW.
                  </h4>
                  <p className="text-xl text-violet-200 mb-6">
                    Tak, dobrze czytasz. <strong className="text-white">Każdego. Pojedynczego. Dnia.</strong>
                  </p>
                  <p className="text-lg text-violet-200/80 mb-6">
                    Codziennie o&nbsp;12:34 spotykamy się na live. To nie nagrania. To nie automaty. To bezpośredni dostęp do mnie i&nbsp;całej społeczności Lifehackerów.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Live Q&A + Mastermind w&nbsp;jednym</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Zadajesz pytanie – dostajesz odpowiedź od kogoś, kto przeszedł przez to samo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Bez teorii. Bez ogólników. Tylko konkretne wsparcie w&nbsp;konkretnych sytuacjach</span>
                    </li>
                  </ul>
                  <div
                    className="p-4 rounded-xl mb-4"
                    style={{
                      background: "rgba(139, 92, 246, 0.2)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                    }}
                  >
                    <p className="text-violet-200 italic">
                      To nie istnieje nigdzie indziej. Żadna społeczność na świecie nie oferuje codziennego, bezpośredniego dostępu do mentora.
                    </p>
                  </div>
                  <p className="text-lg text-violet-300">
                    <strong className="text-white">Wartość?</strong> Gdybyś miał płacić za codzienne sesje 1-na-1, to byłoby <strong className="text-violet-200">30&nbsp;000+ zł miesięcznie</strong>.
                  </p>
                  <p className="text-xl font-bold text-violet-300 mt-2">
                    Dostajesz to za darmo. Na zawsze.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: DeepWork.pl */}
            <div
              className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.1) 100%)",
                borderColor: "rgba(167,139,250,0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(265, 70%, 50%) 0%, hsl(270, 60%, 45%) 100%)",
                    boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    DEEPWORK.PL – TWÓJ CICHY ODDZIAŁ WSPARCIA
                  </h4>
                  <p className="text-lg text-violet-200/80 mb-6">
                    Znasz to uczucie, kiedy siedzisz sam przed komputerem i&nbsp;zwyczajnie nie możesz się zabrać do roboty?
                  </p>
                  <p className="text-lg text-violet-200/80 mb-6">
                    Ta niewidzialna ściana między tobą a&nbsp;zadaniem. Lista rzeczy do zrobienia, która tylko rośnie. Telefon, który wygrywa każdą walkę o&nbsp;twoją uwagę.
                  </p>
                  <p className="text-lg text-violet-100 font-semibold mb-4">
                    DeepWork.pl to bezpłatna przestrzeń na Discordzie, gdzie:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Wchodzisz, włączasz kamerkę</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Pracujesz w&nbsp;ciszy z&nbsp;innymi Lifehackerami</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Zero rozmów. Zero rozpraszania. Czysta, skoncentrowana energia grupy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Widok innych osób, które właśnie teraz robią swoje – to jak psychologiczny "dopalacz" do działania</span>
                    </li>
                  </ul>
                  <p className="text-lg text-violet-200/80 mb-4">
                    To nie jest kolejny kurs produktywności. To wirtualny pokój skupienia, gdzie cisza i&nbsp;obecność innych motywuje cię do odhaczania zadań, które odkładałeś od tygodni.
                  </p>
                  <div className="flex flex-wrap gap-4 text-violet-300 font-semibold">
                    <span>Efekt? <span className="text-white">Skupienie.</span></span>
                    <span><span className="text-white">Momentum.</span></span>
                    <span><span className="text-white">Mierzalne rezultaty.</span></span>
                  </div>
                  <p className="text-xl font-bold text-violet-300 mt-4">
                    Przestajesz odkładać. Zaczynasz odhaczać.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Forum */}
            <div
              className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.1) 100%)",
                borderColor: "rgba(167,139,250,0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(275, 70%, 50%) 0%, hsl(280, 60%, 45%) 100%)",
                    boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    180+ AKTYWNYCH WĄTKÓW NA FORUM
                  </h4>
                  <p className="text-xl text-violet-200 mb-4">
                    Każdy problem, przez który przechodzisz – ktoś już przez to przeszedł.
                  </p>
                  <p className="text-lg text-violet-300 font-semibold mb-6">I&nbsp;zostawił mapę.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Tysiące wartościowych konwersacji</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Ludzie z&nbsp;8+ krajów</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Od freelancerów po CEO-sów spółek kapitałowych</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Od programistów po chirurgów i&nbsp;lekarzy</span>
                    </li>
                  </ul>
                  <p className="text-lg text-violet-100 font-semibold mb-4">To miejsce, gdzie:</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Wymieniasz się doświadczeniami z&nbsp;ludźmi, którzy rozumieją twoje wyzwania</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Uczysz się od tych, którzy są krok przed tobą</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">Pomagasz tym, którzy są krok za tobą</span>
                    </li>
                  </ul>
                  <p className="text-xl font-bold text-violet-300">
                    Nie jesteś sam. I&nbsp;nie musisz wymyślać koła na nowo.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4: ProTipy */}
            <div
              className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.1) 100%)",
                borderColor: "rgba(167,139,250,0.3)",
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(268, 70%, 50%) 0%, hsl(275, 60%, 45%) 100%)",
                    boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    50+ PROTIPÓW (NAGRAŃ NIEDOSTĘPNYCH NIGDZIE INDZIEJ)
                  </h4>
                  <p className="text-lg text-violet-200/80 mb-6">
                    Krótkie, konkretne nagrania – esencja lat praktyki skondensowana do 10-20 minut.
                  </p>
                  <p className="text-lg text-violet-100 font-semibold mb-4">O&nbsp;czym?</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;mindsecie – jak przeprogramować swoje myślenie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;komunikacji – od podstaw po mistrzostwo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;spokoju w&nbsp;głowie – kiedy myśli nie chcą ucichnąć</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;wychodzeniu z&nbsp;"sytuacji bez wyjścia" – kiedy czujesz, że utknąłeś</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;produktywności – ale nie tej z&nbsp;poradników, tylko tej, która DZIAŁA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-violet-100">O&nbsp;odporności psychicznej – jak nie poddawać się, gdy jest ciężko</span>
                    </li>
                  </ul>
                  <p className="text-lg text-violet-300 italic">
                    To nie są godzinne webinary z&nbsp;laniem wody. To skondensowana wiedza, którą wdrożysz w&nbsp;15 minut i&nbsp;użyjesz tego samego dnia.
                  </p>
                </div>
              </div>
            </div>

            {/* KTO TO JEST "LIFEHACKER"? */}
            <div
              className="rounded-3xl p-8 md:p-12 mb-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(139,92,246,0.15) 100%)",
                borderColor: "rgba(167,139,250,0.4)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                KTO TO JEST "LIFEHACKER"?
              </h3>
              <p className="text-lg text-violet-200/80 mb-6 text-center">
                Nazwa może zwieść. To nie jest grupa dla "informatyków" ani "technicznych ludzi".
              </p>
              <p className="text-xl text-violet-300 font-semibold mb-8 text-center">
                Hackujemy mindset, silną wolę i&nbsp;odporność psychiczną – nie kod.
              </p>
              <p className="text-lg text-violet-100 font-semibold mb-4 text-center">Lifehacker to ktoś, kto:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                  <Heart className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-violet-100">Wziął odpowiedzialność za swoje życie zamiast czekać na "lepszy moment"</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                  <Zap className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-violet-100">Łamie ograniczenia – własne i&nbsp;narzucone przez system</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                  <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-violet-100">Wspiera innych bez fałszywej motywacji i&nbsp;pustych haseł</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                  <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-violet-100">Dzieli się porażkami równie otwarcie jak sukcesami, bo wie, że w&nbsp;porażkach jest nauka</span>
                </div>
              </div>
              <div
                className="p-6 rounded-xl mb-6"
                style={{
                  background: "rgba(139, 92, 246, 0.25)",
                  border: "1px solid rgba(167, 139, 250, 0.4)",
                }}
              >
                <p className="text-violet-200 italic text-center text-lg">
                  Jim Rohn powiedział kiedyś: "Jesteś wypadkową pięciu osób, z&nbsp;którymi spędzasz najwięcej czasu."
                </p>
              </div>
              <p className="text-lg text-violet-200/80 text-center">
                Jeśli otaczasz się ludźmi narzekającymi, ograniczającymi się, tkwiącymi w&nbsp;starych schematach – twoje "wewnętrzne oprogramowanie" również będzie cię ciągnąć w&nbsp;dół.
              </p>
              <p className="text-xl font-bold text-violet-300 mt-4 text-center">
                Wśród Lifehackerów ta średnia idzie drastycznie w&nbsp;górę.
              </p>
            </div>

            {/* DLACZEGO TO MA ZNACZENIE? */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                DLACZEGO TO MA ZNACZENIE?
              </h3>
              <div className="text-center mb-8">
                <p className="text-xl text-violet-200 mb-4">
                  Bo transformacja w&nbsp;samotności to klaskanie jedną ręką.
                </p>
                <p className="text-lg text-violet-300/80">Da się.</p>
                <p className="text-lg text-violet-300/80">Ale... po co?</p>
              </div>
              <p className="text-lg text-violet-200/80 mb-6 text-center max-w-3xl mx-auto">
                Możesz przejść przez "Uważne Życie" sam. Wykonać wszystkie lekcje. Wszystkie wyzwania. Walczyć ze swoim wewnętrznym krytykiem w&nbsp;pojedynkę.
              </p>
              <p className="text-xl font-bold text-white text-center mb-6">ALE...</p>
              <div className="space-y-4 max-w-3xl mx-auto mb-8">
                <p className="text-lg text-violet-200">
                  Kiedy w&nbsp;tygodniu 3 poczujesz, że to za trudne...
                </p>
                <p className="text-lg text-violet-200">
                  Kiedy twój umysł zacznie szeptać "to nie dla ciebie, poddaj się"...
                </p>
                <p className="text-lg text-violet-200">
                  Kiedy staniesz przed wyborem: kontynuować czy wrócić do autopilota...
                </p>
              </div>
              <div
                className="p-6 md:p-8 rounded-2xl max-w-3xl mx-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(167, 139, 250, 0.2) 100%)",
                  border: "2px solid rgba(167, 139, 250, 0.4)",
                }}
              >
                <p className="text-lg text-violet-100 text-center">
                  Będziesz miał obok siebie ludzi, którzy powiedzą:
                </p>
                <p className="text-xl md:text-2xl font-bold text-white text-center mt-4 italic">
                  "Też przez to przechodziłem. Wiem, jak to jest. Trzymaj się. Jestem tu, jeśli potrzebujesz pomocy."
                </p>
                <p className="text-lg text-violet-300 text-center mt-6">
                  I&nbsp;każdego dnia o&nbsp;12:34 będziesz miał bezpośredni dostęp do mnie i&nbsp;całej społeczności.
                </p>
                <p className="text-lg text-violet-200/80 text-center mt-2">
                  To nie jest teoria. To praktyczne wsparcie w&nbsp;czasie rzeczywistym.
                </p>
              </div>
            </div>

            {/* Statystyki */}
            <div
              className="rounded-3xl p-8 md:p-10 mb-8 border"
              style={{
                background: "linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(185,28,28,0.1) 100%)",
                borderColor: "rgba(248, 113, 113, 0.3)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                TO NIE JEST "NICE TO HAVE". TO JEST RÓŻNICA MIĘDZY UKOŃCZENIEM A&nbsp;PORAŻKĄ.
              </h3>
              <p className="text-lg text-red-200/80 mb-4 text-center">Statystyki są brutalne:</p>
              <p className="text-3xl md:text-4xl font-bold text-red-300 text-center mb-4">
                95% ludzi, którzy kupują kursy online, nigdy ich nie kończy.
              </p>
              <p className="text-lg text-red-200/80 mb-6 text-center">Dlaczego?</p>
              <ul className="space-y-2 mb-8 max-w-2xl mx-auto">
                <li className="text-lg text-red-200/80 text-center">Bo walczą sami.</li>
                <li className="text-lg text-red-200/80 text-center">Bo brakuje im wsparcia w&nbsp;kluczowych momentach.</li>
                <li className="text-lg text-red-200/80 text-center">Bo nikt nie trzyma ich na kursie, gdy chcą się poddać.</li>
              </ul>
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)",
                  border: "2px solid rgba(16, 185, 129, 0.4)",
                }}
              >
                <p className="text-3xl md:text-4xl font-bold text-emerald-300 text-center mb-2">
                  Lifehackerzy mają ponad 60% wskaźnik ukończenia programów.
                </p>
                <p className="text-lg text-emerald-200/80 text-center">Dlaczego taka różnica?</p>
                <p className="text-xl font-bold text-white text-center mt-2">Bo nie jesteś sam.</p>
              </div>
              <div className="space-y-4 mt-6 max-w-3xl mx-auto">
                <p className="text-lg text-violet-200">
                  Bo kiedy czujesz, że słabniesz – wchodzisz na DeepWork.pl i&nbsp;widzisz 10 osób, które właśnie teraz robią swoje.
                </p>
                <p className="text-lg text-violet-200">
                  Bo kiedy masz pytanie – zadajesz je na Daily Coaching i&nbsp;dostajesz odpowiedź.
                </p>
                <p className="text-lg text-violet-200">
                  Bo kiedy potrzebujesz przypomnienia, dlaczego zacząłeś – masz forum pełne ludzi na tej samej ścieżce.
                </p>
              </div>
            </div>

            {/* PODSUMOWANIE */}
            <div
              className="rounded-3xl p-8 md:p-12 mb-8 border"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(167,139,250,0.15) 100%)",
                borderColor: "rgba(167,139,250,0.5)",
                boxShadow: "0 25px 60px rgba(139, 92, 246, 0.2)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                PODSUMOWANIE: CO DOSTAJESZ JAKO LIFEHACKER
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">1234 Daily Coaching</span>
                    <span className="text-violet-200"> – codzienne live Q&A + Mastermind o&nbsp;12:34 </span>
                    <span className="text-violet-400 text-sm">(wartość: 30&nbsp;000+ zł rocznie)</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">DeepWork.pl</span>
                    <span className="text-violet-200"> – bezpłatna przestrzeń cichej, skupionej pracy z&nbsp;innymi Lifehackerami</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">50+ Protipów</span>
                    <span className="text-violet-200"> – ekskluzywne nagrania niedostępne nigdzie poza społecznością</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">180+ aktywnych wątków na forum</span>
                    <span className="text-violet-200"> – tysiące praktycznych odpowiedzi na realne problemy</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Społeczność z&nbsp;8+ krajów</span>
                    <span className="text-violet-200"> – wsparcie od ludzi, którzy rozumieją twoje wyzwania</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Dostęp dożywotni</span>
                    <span className="text-violet-200"> – nie płacisz subskrypcji miesięcznych, dostajesz to raz na zawsze</span>
                  </div>
                </div>
              </div>
              <div className="text-center border-t border-violet-400/30 pt-8">
                <p className="text-lg text-violet-300 mb-2">Całkowita wartość samej społeczności:</p>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">ponad 30&nbsp;000 zł rocznie</p>
                <p className="text-lg text-violet-300 mb-4">Twoja dodatkowa inwestycja:</p>
                <p className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-6">0 zł</p>
                <p className="text-xl text-violet-200">
                  Dostajesz to automatycznie, dołączając do programu "Uważne Życie".
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nie jesteś sam na tej wyprawie.
              </p>
              <p className="text-xl text-violet-200 mb-4">
                Jesteś Kapitanem swojego życia – ale żaden kapitan nie płynie sam.
              </p>
              <p className="text-xl text-violet-200 mb-4">
                Każdy kapitan potrzebuje załogi, na której może polegać.
              </p>
              <p className="text-2xl font-bold text-violet-300 mb-8">
                Lifehackerzy to twoja załoga.
              </p>
              <p className="text-xl text-violet-100 font-semibold">
                Do zobaczenia na pokładzie.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    <h3 className="text-2xl font-bold text-foreground">Program "Uważne Życie"</h3>
                    <p className="text-sm text-muted-foreground">6 tygodni transformacji mentalnej</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">6 Modułów Szkoleniowych</p>
                      <p className="text-sm text-muted-foreground">Ponad 30 lekcji wideo + tekstowe</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 1: Architektura Uwagi</p>
                      <p className="text-sm text-muted-foreground">Odzyskaj ster nad swoją uwagą</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 2: Deautomatyzacja</p>
                      <p className="text-sm text-muted-foreground">Wyłącz automat, włącz świadomość</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 3: Dystans Strategiczny</p>
                      <p className="text-sm text-muted-foreground">Uwolnij się od tyranii myśli</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 4: Nawigacja Emocjonalna</p>
                      <p className="text-sm text-muted-foreground">Nawiguj wśród burzy emocji</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 5: Kompas Wartości</p>
                      <p className="text-sm text-muted-foreground">Płyń tam, gdzie chcesz dotrzeć</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Moduł 6: Optymalizacja Zasobów</p>
                      <p className="text-sm text-muted-foreground">Zarządzaj energią, nie czasem</p>
                    </div>
                  </div>

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

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Zamknięta Grupa Wsparcia</p>
                      <p className="text-sm text-muted-foreground">500+ kapitanów na tej samej ścieżce</p>
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
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Społeczność Discord</p>
                      <p className="text-sm text-muted-foreground">Dostęp do kanałów dla uczestników programu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Platforma Lifehackerzy</p>
                      <p className="text-sm text-muted-foreground">Centralne miejsce na wszystkie materiały</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Comiesięczne Sesje Live</p>
                      <p className="text-sm text-muted-foreground">Q&A z&nbsp;Ludwikiem i&nbsp;społecznością</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Biblioteka Zasobów</p>
                      <p className="text-sm text-muted-foreground">Szablony, checklisty, dodatkowe materiały</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Dostęp do Pozostałych Programów</p>
                      <p className="text-sm text-muted-foreground">Nagrania z&nbsp;poprzednich edycji innych kursów</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Networking</p>
                      <p className="text-sm text-muted-foreground">Poznaj ludzi z&nbsp;podobnymi celami</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">System Accountability</p>
                      <p className="text-sm text-muted-foreground">Wzajemne wsparcie i&nbsp;raportowanie postępów</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Wszystkie Aktualizacje</p>
                      <p className="text-sm text-muted-foreground">Nowe materiały i&nbsp;ulepszenia na zawsze</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Value Summary */}
            <div className="text-center">
              <Card className="inline-block p-8 md:p-10 bg-white dark:bg-slate-900 border-2 border-emerald-500 dark:border-emerald-600 shadow-xl">
                <div className="space-y-5">
                  <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
                    Łączna wartość: <span className="text-slate-900 dark:text-white font-bold">ponad 3000 zł</span>
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
              Program "Uważne Życie" czeka. Twoja podróż do kontroli, spokoju i&nbsp;jasności umysłu zaczyna się teraz.
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
