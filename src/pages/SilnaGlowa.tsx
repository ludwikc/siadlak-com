import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SILNA_GLOWA_OBJECTIONS } from "@/data/course-objections";
import {
  Shield,
  ArrowRight,
  Users,
  Star,
  Clock,
  AlertTriangle,
  Heart,
  Anchor,
  Waves,
  ShipWheel,
  XCircle,
  Target,
  Brain,
  Zap,
  CheckCircle2,
  Sparkles,
  Compass,
  Trophy,
  HelpCircle,
} from "lucide-react";

const SilnaGlowa = () => {
  return (
    <Layout>
      {/* Hero Section - Theme Locked */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-depth/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/20 to-depth/20 backdrop-blur-sm border border-electric/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  PRZEDSPRZEDAŻ
                </span>
                <span className="text-xs sm:text-sm text-locked-silver">
                  • Kończy się 10 stycznia
                </span>
              </div>
            </div>

            {/* Opening Question */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Czy zdarza ci się rano otworzyć oczy i pomyśleć:{" "}
              <span className="text-locked-white font-bold">
                "Powinienem być dalej niż jestem"?
              </span>
            </p>

            {/* Main Headline - Problem/Benefit */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              Zamień swój umysł ze zwykłej tratwy w{" "}
              <span className="text-locked-gradient">
                niezatapialny pancernik
              </span>
            </h1>

            {/* Subheadline - Specific Promise */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-10 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Taki, który nie boi się sztormu, bo wie, że sztorm to tylko wiatr i woda.
              Naucz się żeglować tak, by każde uderzenie fali zbliżało cię do celu, a nie odpychało.
            </p>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  118+ osób przejęło stery
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm sm:text-base font-semibold text-locked-white">
                  4.8/5.0
                </span>
              </div>
            </div>

            {/* Primary CTA - Prominent */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="relative group inline-block w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric via-depth to-electric rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  variant="special"
                  size="lg"
                  className="relative btn-locked-primary text-base sm:text-lg px-10 sm:px-14 py-4 sm:py-6 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform duration-200 font-bold"
                >
                  Dołączam do kursu Silna Głowa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Value Proposition */}
              <div className="text-center space-y-2">
                <p className="text-base sm:text-lg font-semibold text-locked-white">
                  <span className="text-electric line-through">
                    12,000 zł
                  </span>{" "}
                  →{" "}
                  <span className="text-electric text-xl sm:text-2xl font-bold">
                    777 zł
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-locked-silver">
                  Pełny dostęp na zawsze • 30-dni gwarancji zwrotu
                </p>
              </div>
            </div>

            {/* Video Teaser - Below CTA */}
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-locked-white/10 rounded-2xl flex items-center justify-center border border-locked-white/20 hover:border-electric/50 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-electric to-depth rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-0 h-0 border-l-[12px] sm:border-l-[16px] border-l-white border-y-[9px] sm:border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm sm:text-base text-locked-silver">
                    <span className="font-semibold text-locked-white">
                      Zobacz, jak działa kurs
                    </span>
                    <br />
                    Video wprowadzające (2 min)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-text-primary">
                Dobra, od początku bądźmy szczerzy.
              </h2>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto">
                Żyjemy w świecie, który potrafi być{" "}
                <span className="font-bold text-color-error">
                  piekielnie wymagający dla naszej głowy
                </span>
                .
              </p>
            </div>

            {/* Problem Cards - Progressive Intensity */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {[
                {
                  text: "Media społecznościowe są projektowane przez najlepszych inżynierów na świecie, byś spędzał w nich czas, a nie poza nimi.",
                  icon: XCircle,
                  intensity: 10,
                },
                {
                  text: "Sukcesy innych oglądasz jak wyciągnięte z kontekstu zwiastuny filmowe – efekt końcowy, bez tysięcy godzin montażu.",
                  icon: Users,
                  intensity: 8,
                },
                {
                  text: "Lawina informacji – każdego dnia przetwarzasz więcej danych niż twój prapradziadek przez całe życie.",
                  icon: AlertTriangle,
                  intensity: 12,
                },
                {
                  text: "Wojna o uwagę – korporacje wydają miliardy, byś kliknął, oglądnął, kupił. Twoja uwaga jest najcenniejszą walutą.",
                  icon: Target,
                  intensity: 11,
                },
                {
                  text: 'Presja "hustle" i wyścigu, który nie ma mety, tylko kolejne okrążenia zmęczenia.',
                  icon: Clock,
                  intensity: 15,
                },
                {
                  text: "Bagaż, który nosisz – rodzinne schematy, własne potknięcia, lęki, które czasem czują się jak twoja druga skóra.",
                  icon: Heart,
                  intensity: 18,
                },
              ].map((problem, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, rgba(239, 68, 68, ${0.03 + problem.intensity * 0.01}) 0%, rgba(220, 38, 38, ${0.05 + problem.intensity * 0.01}) 100%)`,
                  }}
                >
                  {/* Pain intensity indicator */}
                  <div className="absolute top-3 right-3 w-16 h-1.5 bg-red-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                      style={{ width: `${problem.intensity * 10}%` }}
                    ></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors group-hover:scale-110 duration-300">
                      <problem.icon className="h-6 w-6 text-red-600 group-hover:animate-pulse" />
                    </div>
                    <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">
                A do tego dochodzi otoczenie, które często – zupełnie nieświadomie – chce cię utrzymać w znanej sobie przystani.
              </h3>

              <div className="bg-color-error/10 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-4 text-text-primary">
                  Zastanów się przez chwilę. Czy zdarzyło ci się usłyszeć od bliskich coś w rodzaju:
                </h4>
                <ul className="space-y-2 mb-6">
                  {[
                    '"Po co ci to? I tak się nie uda, jak zawsze."',
                    '"Weź się za normalną robotę, a nie jakieś fanaberie."',
                    '"Nie nadajesz się do tego."',
                    '"Zmieniłeś się..." (wypowiedziane z wyrzutem).',
                  ].map((quote, index) => (
                    <li key={index} className="text-color-error font-medium">
                      {quote}
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary mb-4">
                  Mówią "chcę dla ciebie dobrze", ale często chcą, żebyś był… <span className="font-bold">przewidywalny</span>.
                  Bo twoja zmiana to zagrożenie dla ich komfortu.
                </p>

                <p className="text-text-secondary mb-4">
                  Nie dlatego, że są źli. Dlatego, że twój rozwój stawia im lustro, w które nie chcą patrzeć.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-text-primary">
                  Potem idziesz do pracy. Tu też loteria:
                </h4>
                <p className="text-text-secondary mb-4">
                  Albo trafisz na załogę, która wie, że burza to nie powód do buntu, tylko do wytężonej pracy;
                  albo na statek, gdzie kapitan krzyczy, a za błąd wrzuca za burtę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Metaphor Section - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-secondary relative overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header with Icon */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
                <Anchor className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-600 uppercase">
                  Metafora życia
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Wyobraź sobie, że jesteś żaglówką
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                Otoczenie, rodzinne schematy, stare lęki – to wszystko wyznaczyło ci początkowy kurs{" "}
                <strong>prosto na wzburzone wody</strong>. To nie twoja wina.
              </p>
              <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto mt-4">
                Nie twoją winą jest, że żagle się rwą, a ster drży. Nie twoją winą jest, że ocean bywa nieprzewidywalny.
              </p>
            </div>

            {/* Visual Boat Journey */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Stage 1: Broken Boat */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-200 hover:shadow-lg transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-100 px-4 py-1 rounded-full border-2 border-red-200">
                  <span className="text-xs font-bold text-red-600">TERAZ</span>
                </div>
                <div className="flex flex-col items-center text-center gap-4 pt-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Anchor className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-text-secondary">
                      łódź się chwieje
                    </p>
                    <p className="text-sm text-text-secondary">żagle rwą</p>
                    <p className="text-sm text-text-secondary">
                      kadłub przecieka
                    </p>
                  </div>
                  <Waves className="h-6 w-6 text-red-400 animate-pulse" />
                </div>
              </div>

              {/* Stage 2: Stormy Waters */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-orange-200 hover:shadow-lg transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-100 px-4 py-1 rounded-full border-2 border-orange-200">
                  <span className="text-xs font-bold text-orange-600">
                    OCEAN
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-4 pt-2">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Waves className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-base text-text-primary font-medium">
                    Ocean jest wzburzony
                  </p>
                  <p className="text-sm text-text-secondary italic">
                    (i to też nie Twoja wina)
                  </p>
                </div>
              </div>

              {/* Stage 3: Strong Ship */}
              <div className="group relative bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border-2 border-green-300 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 px-4 py-1 rounded-full border-2 border-green-400">
                  <span className="text-xs font-bold text-white">
                    ROZWIĄZANIE
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-4 pt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShipWheel className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-base text-text-primary font-bold">
                    Niezatapialny pancernik
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    ↓ Zobacz poniżej
                  </p>
                </div>
              </div>
            </div>

            {/* Key Message Card */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 border-2 border-gray-200">
                <div className="space-y-4 text-center">
                  <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
                    Są jachty, które całe życie stoją w suchym doku.
                    Są takie, które ciągną holowniki.
                  </p>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-xl sm:text-2xl font-bold text-twilight-indigo mb-2">
                      Ty nie jesteś jedną z nich.
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary">
                      I dobrze.
                      <br />
                      <strong className="text-text-primary">
                        Bo one nie poczują nigdy dumy z samodzielnego dopłynięcia do celu.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adversity Section - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              A jak TY znosisz te przeciwności?
            </h2>

            <p className="text-lg text-center mb-8 text-text-secondary">
              Zakładam, że nie jesteś robotem. Być może:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Przeżywasz je po raz setny, jak nakręconą płytę.",
                "Rozpamiętujesz, co mogłeś zrobić inaczej. Tak jakbyś jechał autem po torze i cały wieczór myślał o tym jednym kiepskim zakręcie, zapominając o siedmiu świetnych przejazdach.",
                "Obwiniasz siebie (lub innych).",
                "Marzysz o życiu równym jak tafla jeziora.",
                "Patrzysz na tych, którzy – z zewnątrz – płyną jak po maśle.",
                'Masz dość pustych pocieszań w stylu "będzie dobrze", "dasz radę".',
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-left p-4 bg-color-error/10 rounded-lg"
                >
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>

            <Card className="glass-card p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">
                  Najpierw – wiedz, że to, co czujesz, jest NORMALNE.
                </h3>
                <p className="text-text-secondary mb-6">
                  Wszyscy przez to przechodzimy. Różnica polega na tym, co z tym robimy dalej.
                </p>
                <p className="text-lg font-medium mb-6 text-text-primary">
                  Są ludzie, na których fala uderza, a oni, otrzepując się, myślą:{" "}
                  <span className="italic text-twilight-indigo">"To jest tylko myśl. Nie muszę się do niej przywiązywać."</span>{" "}
                  A potem: <span className="italic text-twilight-indigo">"OK, co teraz mogę z tym ZROBIĆ?"</span>
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  situation: "Uciekł ci pociąg?",
                  response: "Super, wreszcie przeczytam tę książkę na dworcu.",
                },
                {
                  situation: "Zwolnili cię z pracy?",
                  response: "Dobry znak. I tak nosiłem się z zamiarem zmiany. Czas na plan B.",
                },
                {
                  situation: "Zachorowałeś?",
                  response: "Ciało domaga się resetu. Zróbmy to.",
                },
                {
                  situation: "Brakuje klientów?",
                  response: "Idealny moment, żeby w końcu zaktualizować ofertę.",
                },
              ].map((example, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <p className="font-bold text-color-error mb-2">
                      {example.situation}
                    </p>
                    <p className="text-twilight-indigo font-medium">
                      "{example.response}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-bold text-text-primary">
                To nie jest naiwny optymizm. To jest <span className="text-twilight-indigo">wybór perspektywy</span>. I można się tego nauczyć.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section - Theme Adaptive */}
      <section className="py-16 bg-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Kim jestem i dlaczego wiem, jak pomóc ci przepłynąć?
            </h2>

            <Card className="glass-card p-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-6">
                    <p className="text-lg text-text-primary">
                      Nazywam się{" "}
                      <span className="font-bold text-twilight-indigo">
                        Ludwik C. Siadlak
                      </span>
                      . Od ponad 18 lat moją pracą jest{" "}
                      <strong>aktualizowanie "oprogramowania" w głowach moich klientów</strong>{" "}
                      – w firmach z listy Fortune 500, dla NATO, armii USA i organizacji w ponad 50 krajach.
                    </p>

                    <p className="text-text-secondary">
                      Pokazuję im bariery, lęki i przekonania, które często… wcale nie są ich własne.
                      To tylko nieaktualne programy, które odziedziczyli lub zainstalowali pod presją.
                      A potem pokazuję, jak je przepisać – na takie, które służą ich celom, a nie ograniczają.
                    </p>

                    <p className="text-text-secondary">
                      Latami testowałem na sobie wszystko, o czym mówię: od medytacji Diamentowej Drogi, przez autohipnozę,
                      po budowanie odporności psychicznej. Przeszedłem przez rozwód, kryzys tożsamości, jednoosobowe rodzicielstwo
                      – i każda z tych sytuacji dała mi narzędzia, które dziś przekazuję innym.
                    </p>

                    <p className="text-text-secondary">
                      Nie mówię teorii. Mówię z poziomu{" "}
                      <strong className="text-text-primary">kapitana, który sam przeszedł przez niejedną burzę.</strong>
                    </p>

                    <div className="bg-neural-blue/10 p-6 rounded-lg border-l-4 border-twilight-indigo">
                      <p className="text-text-secondary mb-4">
                        Jedna z rzeczy, której nauczyłem się w praktyce:{" "}
                        <span className="font-bold text-twilight-indigo italic">
                          "forma jest pustką, a pustka jest formą"
                        </span>
                        .
                      </p>
                      <p className="text-text-secondary mb-4">
                        Brzmi filozoficznie? Owszem. Ale w praktyce oznacza to, że nawet to, co wygląda na katastrofę,
                        jest tylko myślą – i nie musisz się do niej przywiązywać.
                      </p>
                      <p className="text-text-secondary">
                        Tak jak mój klient Maciek, który podczas pierwszej medytacji zobaczył wybuch bomby atomowej
                        w swoim idealnym świecie… i usłyszał: <em>"To jest tylko myśl."</em> I nagle okazało się,
                        że ta myśl nie ma nad nim żadnej władzy.
                      </p>
                    </div>

                    <p className="text-lg font-medium text-twilight-indigo">
                      Dzisiaj chcę być twoim <strong>nawigatorem</strong>. Pokażę ci, jak czytać mapy, ustawiać żagle
                      i sterować tak, by każdy sztorm – mały czy duży –{" "}
                      <strong>uczynił cię lepszym żeglarzem, a nie ofiarą.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 space-y-8">
              <h3 className="text-2xl font-bold text-text-primary">
                Moja praca już przynosi efekty
              </h3>
              <p className="text-twilight-indigo font-medium text-center">
                Przedsprzedaż trwa tylko do 10 stycznia!
              </p>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-text-primary">
                  Temat mentalu wraca do mnie co chwilę
                </h4>
                <p className="text-text-secondary">
                  Czy to w rozmowach z podopiecznymi na mentoringu, czy w
                  społeczności Hakerów Produktywności.
                </p>
                <p className="text-text-secondary">
                  Co chwilę czytam i słyszę o lękach, blokadach, niskiej
                  samoocenie.
                </p>
                <p className="text-lg font-bold text-text-primary">
                  Też tak masz?
                </p>

                <div className="bg-neural-blue/10 p-6 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    Brian Tracy w "Psychologii sprzedaży" pisał, że osoby z
                    biednych domów i z bogatych mają szansę na bogactwo.
                  </p>
                  <p className="text-text-secondary mb-4">
                    I taką samą szansę, by popaść w biedę.
                  </p>
                  <p className="text-xl font-bold text-twilight-indigo">
                    Różnica jest w głowie.
                  </p>
                  <p className="text-lg mt-4 text-text-primary">
                    Spokojnie, pomogę Ci z tym.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Theme Adaptive with Visual Roadmap */}
      <section className="py-16 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-color-success/20 to-twilight-indigo/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-color-success" />
                <span className="text-sm font-bold text-color-success uppercase">
                  Twoja transformacja
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Z moją pomocą zbudujesz swój własny, niezatapialny system
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary">
                Oto, co dostajesz – i dlaczego każdy element jest zaprojektowany tak, żebyś widział efekty szybko:
              </p>
            </div>

            {/* Visual Roadmap - Progressive Journey */}
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Przejmiesz stery",
                  benefit:
                    "Nauczysz się nawigować przez życie, używając metafor, które dają siłę i klarowność. Już po pierwszym module zobaczysz swoją sytuację zupełnie innymi oczami.",
                  icon: Compass,
                  gradient: "from-blue-500 to-blue-600",
                  timeframe: "Moduł 1",
                },
                {
                  step: 2,
                  title: "Opancerzysz kadłub",
                  benefit:
                    "Opanujesz ocean własnych myśli tak, że burza będzie tylko pogodą, a nie katastrofą. Nauczysz się widzieć myśli jak chmury – przychodzą i odchodzą, a ty zostaniesz.",
                  icon: ShipWheel,
                  gradient: "from-purple-500 to-purple-600",
                  timeframe: "Moduł 2",
                },
                {
                  step: 3,
                  title: "Napełnisz żagle wiatrem",
                  benefit:
                    "Odkryjesz głęboką motywację, płynącą z twoich prawdziwych wartości, a nie z zewnętrznej presji. Bo jak się okazuje, prawdziwa siła nie bierze się z kawy i \"must have\".",
                  icon: Waves,
                  gradient: "from-cyan-500 to-teal-600",
                  timeframe: "Moduł 3-4",
                },
                {
                  step: 4,
                  title: "Nauczysz się sztormowych manewrów",
                  benefit:
                    "Będziesz miał strategie na trudności, które nie polegają na walce z falą, ale na mądrym wykorzystaniu jej energii. Jak powiedział Bruce Lee: Be water, my friend.",
                  icon: Zap,
                  gradient: "from-orange-500 to-orange-600",
                  timeframe: "Moduł 5",
                },
                {
                  step: 5,
                  title: "Stworzysz swój kompas",
                  benefit:
                    "Zbudujesz personalny plan odporności, który zawsze wskaże ci kierunek, gdy zgubisz widok lądu. Nie plan na półkę. Plan, z którym wyjdziesz następnego dnia.",
                  icon: Shield,
                  gradient: "from-green-500 to-green-600",
                  timeframe: "Moduł 6",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Connecting Line */}
                  {index < 5 && (
                    <div className="absolute left-8 sm:left-10 top-20 sm:top-24 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}

                  <div className="relative flex items-start gap-4 sm:gap-6">
                    {/* Icon Circle with Progress */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-7 w-7 sm:h-9 sm:w-9 text-white drop-shadow-md" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                        <span className="text-xs sm:text-sm font-bold text-text-primary">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className="group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-gray-200 bg-white overflow-hidden">
                        <CardContent className="p-5 sm:p-6">
                          {/* Title Row */}
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                              {item.title}
                            </h3>
                            <span className="text-xs sm:text-sm font-medium text-text-secondary bg-gray-100 px-3 py-1 rounded-full">
                              {item.timeframe}
                            </span>
                          </div>

                          {/* Benefit Description */}
                          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
                            {item.benefit}
                          </p>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-500 group-hover:w-full`}
                              style={{ width: `${(item.step / 6) * 100}%` }}
                            ></div>
                          </div>

                          {/* Completion Indicator */}
                          <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <CheckCircle2 className="h-4 w-4 text-color-success" />
                            <span className="text-sm font-medium text-color-success">
                              Odblokowujesz ten etap w trakcie kursu
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Card */}
            <div className="mt-12 bg-gradient-to-br from-neural-blue/10 to-twilight-indigo/10 rounded-2xl p-8 border-2 border-neural-blue/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-text-primary">
                  Po ukończeniu kursu
                </h3>
                <p className="text-lg sm:text-xl text-text-secondary mb-6">
                  Będziesz miał Silną Głowę, gotową na każde wyzwanie życiowe
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Spokój", "Pewność", "Odporność", "Kierunek"].map(
                    (trait, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-color-success" />
                        <span className="font-medium text-text-primary">
                          {trait}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Theme Adaptive */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-color-success mb-6">
                    Ten program jest dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "męczysz się ze sobą",
                      "masz wrażenie, że brniesz przez życie z kulą u nogi",
                      "otoczenie Cię nie wspiera, przeciwnie, ciągnie cię w dół",
                      "każde trudne wydarzenie w życiu dokłada Ci cierpień i frustracji",
                      "chcesz odpocząć od ciągłej presji",
                      "boisz się o jutro",
                      "nie potrafisz sobie poradzić z własnymi myślami",
                    ].map((item, index) => (
                      <li key={index} className="text-text-secondary">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-color-error mb-6">
                    Ten program nie jest dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "masz wspierające otoczenie i pomoc na każdym kroku",
                      "otaczasz się ludźmi, którzy w Ciebie wierzą",
                      "masz wiarę w to, co robisz, i bez problemu przechodzisz do działania",
                      "masz pewność siebie i lubisz to, kim jesteś",
                      "perfekcyjnie radzisz sobie z trudnościami, a nieprzewidziane zdarzenia są dla Ciebie miłą odmianą, a nie tragedią",
                    ].map((item, index) => (
                      <li key={index} className="text-text-secondary">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Pomyśl, jak zmieni się twoje życie, gdy przestaniesz walczyć z oceanem, a zaczniesz po nim żeglować
            </h2>

            <Card className="glass-card p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">
                  Puść wodze fantazji na chwilę. Jak inni ludzie zauważą tę zmianę?
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    "Twój partner zobaczy, że nie reagujesz już złością – i zacznie cię szanować na nowym poziomie.",
                    "Twoje dzieci zobaczą ojca/matkę, która nie rozkleja się pod presją – i poczują się bezpiecznie.",
                    "Twój szef zauważy, że przejmujesz inicjatywę zamiast narzekać.",
                    "Uwolnisz się od długów lub toksycznej pracy, bo wreszcie będziesz miał głowę do podejmowania decyzji.",
                    "Obudzisz się z poczuciem spokoju, a nie niepokoju. A to jest bezcenne.",
                  ].map((dream, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-twilight-indigo rounded-full mt-2"></div>
                      <p className="text-base text-text-secondary">
                        {dream}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-bold text-text-primary mb-6">
                  To wszystko staje się możliwe, gdy przeprogramujesz swój "software" i zbudujesz Silną Głowę.
                </p>

                <div className="mt-8 bg-neural-blue/10 p-6 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    Wracając do naszej żaglówki: wyobraź sobie, że płyniesz. Czujesz wiatr, czujesz fale.{" "}
                    <strong className="text-text-primary">I nie boisz się.</strong>
                  </p>
                  <p className="text-text-secondary mb-4">
                    Bo wiesz, że nawet gdy nadejdzie sztorm, ty wiesz, jak skorygować kurs. Masz plan.
                  </p>
                  <p className="text-xl font-bold text-twilight-indigo">
                    Jesteś Kapitanem.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Modules - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 px-5 py-2 rounded-full mb-6">
                <ShipWheel className="h-5 w-5 text-twilight-indigo" />
                <span className="text-sm font-bold text-twilight-indigo uppercase">
                  Program kursu
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Co zawiera kurs?
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                6 modułów, które zmienią Twoje podejście do życiowych wyzwań
              </p>
            </div>

            {/* Modules Grid - iOS Style */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  number: 1,
                  icon: Anchor,
                  gradient: "from-blue-500 to-blue-600",
                  title: "Żeglując po morzach życia, to Ty jesteś żaglówką",
                  description:
                    "Czujesz się zagubiony? Otrzymasz potężną metaforę nawigacyjną, która uporządkuje chaos. Zobaczysz, jak twoje wartości są sterem, słabości – dziurami w kadłubie, a otoczenie – wiatrem i prądami. Zrozumiesz, kto i co tak naprawdę kieruje twoim życiem. Ten moduł zmienia percepcję – a zmiana percepcji to zmiana wszystkiego.",
                },
                {
                  number: 2,
                  icon: Brain,
                  gradient: "from-purple-500 to-purple-600",
                  title:
                    "Sterowanie umysłem: Opanowanie sztuki skupienia uwagi",
                  description:
                    "Dlaczego mózg łatwiej łapie negatywy? Bo kiedyś to było potrzebne do przetrwania. Dziś to sabotażysta. Nauczysz się przełączać jego tryb z \"wyszukiwania zagrożeń\" na \"wyszukiwanie możliwości\". Opanujesz \"kotwicę spokoju\" – bo medytacja to siłownia dla umysłu. Jak idziesz na siłkę, to dźwigasz ciężar. A później trzeba wnieść kanapę na piętro? Robisz to z luzem.",
                },
                {
                  number: 3,
                  icon: Target,
                  gradient: "from-green-500 to-green-600",
                  title: "Ujarzmianie myśli: Moc percepcji",
                  description:
                    "Twoje myśli to nie ty. To tylko chmury na niebie twojego umysłu. Nauczysz się je obserwować bez osądzania – tak jak na medytacji obserwujesz myśli, które przychodzą i odchodzą. I – co ważniejsze – zmieniać ich kształt. Przekujesz wewnętrzne \"zagrożenie\" w \"wyzwanie\", a problem w niespodziewaną szansę. Bo pamiętaj: to jest tylko myśl. Nie musisz się do niej przywiązywać.",
                },
                {
                  number: 4,
                  icon: Zap,
                  gradient: "from-orange-500 to-orange-600",
                  title:
                    "Napędzanie swojej podróży: Motywacja do ciągłego rozwoju",
                  description:
                    "Prawdziwa siła nie bierze się z kawy i \"must have\". Płynie z głębokiej zgodności z tym, co dla ciebie naprawdę ważne. Odkryjesz swoje rdzenne wartości i zbudujesz na nich silnik, który będzie napędzał cię nawet, gdy wiatr zgaśnie. To jak znalezienie tego zakrętu na torze, w który wchodzisz dokładnie tak, jak chcesz – i nikt nie siedzi na miejscu pasażera, wydzierając ci kierownicę.",
                },
                {
                  number: 5,
                  icon: Waves,
                  gradient: "from-teal-500 to-cyan-600",
                  title:
                    "Nawigacja przez burze: Skuteczne strategie radzenia sobie z przeciwnościami",
                  description:
                    "Co robić, gdy fala już nadchodzi? Będziesz miał gotowe strategie sztormowe. Nauczysz się rozróżniać, na co masz wpływ (ster, żagle), a co musisz zaakceptować (wiatr, falę). Poznasz siłę aktywnego działania i… mądrego poddania się, gdy walka jest stratą energii. Bo czasem nie chodzi o to, żeby wyciągać zbroję i miecz. Czasem chodzi o to, żeby się poddać temu, co jest – i odkryć, że to, czego się boisz, rozpuszcza się w momencie, gdy pozwolisz temu być.",
                },
                {
                  number: 6,
                  icon: Shield,
                  gradient: "from-indigo-500 to-purple-600",
                  title:
                    "Tworzenie własnego kompasu: Plan budowania odporności psychicznej",
                  description:
                    "Czas złożyć wszystko w całość. Stworzysz swój osobisty, żywy dokument – \"Instrukcję Obsługi Sztormu\". Połączysz ster, żagle, silnik i strategie w jeden spójny system. Wyjdziesz z tego kursu nie tylko z wiedzą, ale z działającym planem, który będziesz mógł stosować od zaraz.",
                },
              ].map((module) => (
                <div
                  key={module.number}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                >
                  {/* Progress Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-neural-blue/10 to-twilight-indigo/10 px-3 py-1.5 rounded-full border border-neural-blue/20">
                    <span className="text-xs font-bold text-twilight-indigo">
                      {module.number}/6
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    {/* Large Module Icon */}
                    <div className="relative">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${module.gradient} rounded-2xl sm:rounded-[22px] flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <module.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-md" />
                      </div>
                      {/* Animated progress arc */}
                      <svg
                        className="absolute -inset-1 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${(module.number / 6) * 283} 283`}
                          className="text-twilight-indigo"
                        />
                      </svg>
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 leading-tight">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Unlock Button */}
                  <button className="w-full bg-gradient-to-r from-neural-blue to-twilight-indigo text-white font-bold py-3 sm:py-3.5 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm sm:text-base">
                      ODBLOKOWUJ MODUŁ
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">
                Po kursie Silna Głowa będziesz mieć silną psychikę.
              </h3>

              <Card className="glass-card p-8 max-w-3xl mx-auto">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold mb-6 text-text-primary">
                    Kurs jest także biletem na pokład najbardziej wspierającej
                    załogi w oceanie Internetu
                  </h4>
                  <p className="text-text-secondary mb-4">Każdego dnia.</p>
                  <p className="text-lg font-medium text-twilight-indigo">
                    To jedna z niewielu społeczności totalnie pozbawionych
                    hejtu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Theme Adaptive */}
      <section className="py-16 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Inwestycja w swój najważniejszy "soft": spokój i siłę
            </h2>

            <div className="max-w-3xl mx-auto mb-8 space-y-4 text-left bg-card-bg p-6 rounded-xl">
              <p className="text-base text-text-secondary">
                Gdybym miał zsumować:
              </p>
              <ul className="space-y-2 text-base text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-twilight-indigo">•</span>
                  <span>18+ lat mówienia do ludzi i <strong>aktualizowania ich oprogramowania</strong> – od Fortune 500 po NATO,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-twilight-indigo">•</span>
                  <span>30+ lat testowania każdej metody najpierw na sobie,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-twilight-indigo">•</span>
                  <span>Psychologię i informatykę z Oxfordu, które pozwoliły mi łączyć głęboką wiedzę o umyśle z praktycznymi narzędziami,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-twilight-indigo">•</span>
                  <span>Oraz pracę z setkami klientów 1:1 w ponad 50 krajach…</span>
                </li>
              </ul>
              <p className="text-base text-text-secondary pt-4">
                … wartość tej wiedzy byłaby bardzo wysoka.
              </p>
              <p className="text-lg font-bold text-text-primary">
                Mój 1-dniowy mentoring kosztuje dziś 12 000 zł netto. I ludzie za to płacą, bo wiedzą,
                że one day ze mną zmienia więcej niż rok samotnych prób.
              </p>
              <p className="text-base text-text-secondary">
                Ale kurs <strong className="text-twilight-indigo">"Silna Głowa"</strong> możesz mieć za ułamek tej kwoty:
              </p>
            </div>

            <Card className="glass-card p-8 max-w-2xl mx-auto border-2 border-neural-blue/20">
              <CardContent className="p-0">
                <div className="space-y-6">
                  {/* Value Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {/* Regular Price */}
                    <div className="bg-gray-50 p-6 rounded-xl text-center border-2 border-gray-200">
                      <p className="text-sm text-text-secondary uppercase tracking-wide mb-2">
                        Wartość mentoringu 1:1
                      </p>
                      <p className="text-3xl font-bold text-text-secondary line-through mb-1">
                        12 000 zł
                      </p>
                      <p className="text-xs text-text-secondary">
                        (tylko 1 dzień sesji)
                      </p>
                    </div>

                    {/* Your Price */}
                    <div className="relative">
                      {/* Savings Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full shadow-lg transform rotate-12 z-10">
                        <div className="text-xs font-bold">-94%</div>
                      </div>

                      <div className="bg-gradient-to-br from-neural-blue to-twilight-indigo p-6 rounded-xl text-center shadow-xl border-4 border-white/20">
                        <p className="text-sm text-white/90 uppercase tracking-wide mb-2">
                          Twoja inwestycja
                        </p>
                        <p className="text-5xl font-extrabold text-white mb-1">
                          777 zł
                        </p>
                        <div className="flex items-center justify-center gap-1.5 text-white/90 text-sm">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Dostęp na zawsze</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Value Stack */}
                  <div className="bg-gradient-to-r from-zenith-gold/5 to-twilight-indigo/5 p-6 rounded-xl border border-neural-blue/20">
                    <h4 className="font-bold text-center mb-4 text-text-primary">
                      W pakiecie otrzymujesz:
                    </h4>
                    <div className="space-y-3">
                      {[
                        { item: "6 modułów kursu", value: "3 000 zł" },
                        { item: "Społeczność wsparcia", value: "Bezcenne" },
                        { item: "Materiały do ćwiczeń", value: "500 zł" },
                        { item: "Aktualizacje na zawsze", value: "1 000 zł" },
                        {
                          item: "Plan budowania odporności",
                          value: "2 000 zł",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-text-secondary">
                              {item.item}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-text-primary">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Daily Cost Breakdown */}
                  <div className="text-center py-4">
                    <p className="text-sm text-text-secondary mb-2">
                      Przelicz to na dzienną stawkę:
                    </p>
                    <p className="text-lg font-bold text-twilight-indigo">
                      To mniej niż 2,13 zł dziennie przez rok
                    </p>
                    <p className="text-sm text-text-secondary italic">
                      Mniej niż kawa z automatu. Za spokój w głowie i stery we własnych rękach.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="special"
                    size="lg"
                    className="btn-locked-primary w-full text-base sm:text-lg py-4 sm:py-6 group"
                  >
                    To dobra cena za ten rejs, wchodzę na pokład
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Guarantee Section */}
                  <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-text-primary">
                          Dopłyniesz, gdzie chcesz, albo odstawię cię na brzeg – masz moją gwarancję
                        </h4>
                        <p className="text-sm text-text-secondary mb-3">
                          Wierzę w to, co robię. Widziałem transformacje. Wiem, że to działa.
                        </p>
                        <p className="text-sm text-text-secondary">
                          Ale jeśli dołączysz, przerobisz kurs i w ciągu 30 dni stwierdzisz, że nic ci nie dał –{" "}
                          <strong className="text-text-primary">
                            zwrócę ci 100% pieniędzy. Bez pytań, bez problemów, bez wyciągania z ciebie powodów.
                          </strong>
                        </p>
                        <p className="text-sm text-text-secondary mt-3 font-medium">
                          Całe ryzyko jest po mojej stronie. Jedyne ryzyko po twojej – to nie spróbować i za rok znowu czuć to samo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-text-secondary bg-white p-3 rounded-lg border border-gray-200">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-text-primary">
                      30-dniowa gwarancja zwrotu pieniędzy
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objections Section - Enhanced with Accordions */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-5 py-2 rounded-full mb-6">
                <HelpCircle className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-600 uppercase">
                  Rozwiązujemy wątpliwości
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Możesz się wahać
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Wcale mnie to nie dziwi. Życie nauczyło Cię unikać ryzyka.
              </p>
              <div className="bg-card-bg p-6 rounded-xl border-2 border-neural-blue/20 max-w-2xl mx-auto">
                <p className="text-lg font-medium text-center italic text-text-primary mb-2">
                  "Ja go nie widzę, to ono też mnie nie widzi".
                </p>
                <p className="text-xl font-bold text-twilight-indigo text-center">
                  Ale życie Cię widzi.
                </p>
              </div>
            </div>

            {/* Objections Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {SILNA_GLOWA_OBJECTIONS.map((objection) => {
                const colorMap = {
                  red: {
                    gradient: "from-red-500 to-red-600",
                    bg: "bg-red-50",
                    border: "border-red-500",
                    borderLight: "border-red-200",
                    text: "text-red-600",
                    textBold: "text-red-700",
                    hover: "hover:border-red-300",
                  },
                  orange: {
                    gradient: "from-orange-500 to-orange-600",
                    bg: "bg-orange-50",
                    border: "border-orange-500",
                    borderLight: "border-orange-200",
                    text: "text-orange-600",
                    textBold: "text-orange-700",
                    hover: "hover:border-orange-300",
                  },
                  green: {
                    gradient: "from-green-500 to-green-600",
                    bg: "bg-green-50",
                    border: "border-green-500",
                    borderLight: "border-green-200",
                    text: "text-green-600",
                    textBold: "text-green-700",
                    hover: "hover:border-green-300",
                  },
                  blue: {
                    gradient: "from-blue-500 to-blue-600",
                    bg: "bg-blue-50",
                    border: "border-blue-500",
                    borderLight: "border-blue-200",
                    text: "text-blue-600",
                    textBold: "text-blue-700",
                    hover: "hover:border-blue-300",
                  },
                };
                const colors =
                  colorMap[objection.color as keyof typeof colorMap];

                return (
                  <AccordionItem
                    key={objection.value}
                    value={objection.value}
                    className={`bg-white rounded-xl border-2 border-gray-200 overflow-hidden ${colors.hover} transition-colors`}
                  >
                    <AccordionTrigger className="px-6 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <objection.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${colors.text}`}>
                            "{objection.title}"
                          </h3>
                          <p className="text-sm text-text-secondary">
                            Kliknij, aby zobaczyć odpowiedź
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div
                        className={`${colors.bg} p-6 rounded-lg border-l-4 ${colors.border} space-y-4`}
                      >
                        <p className={`text-lg font-bold ${colors.textBold}`}>
                          {objection.content.intro}
                        </p>
                        {objection.content.paragraphs.map((paragraph, idx) => (
                          <p key={idx} className="text-text-secondary">
                            {paragraph}
                          </p>
                        ))}
                        {objection.content.highlight && (
                          <div
                            className={`bg-white p-4 rounded-lg border-2 ${colors.borderLight}`}
                          >
                            <p
                              className={`text-lg font-bold ${colors.text} mb-2`}
                            >
                              {objection.content.highlight}
                            </p>
                          </div>
                        )}
                        {objection.content.conclusion && (
                          <p className="text-lg font-bold text-twilight-indigo italic">
                            {objection.content.conclusion}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button
                variant="special"
                size="lg"
                className="btn-locked-primary text-base sm:text-lg px-8 py-6 group"
              >
                Wskakuję na pokład. Zamawiam dostęp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA - Theme Locked */}
      <section className="py-16 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neural-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-locked-white">
              Chcesz wypracować swoją własną odporność psychiczną?
            </h2>
            <p className="text-xl text-locked-silver mb-8">
              Wskakuj na pokład i naucz się, jak sterować łodzią życia, by
              pokonać każdy sztorm.
            </p>

            <div className="space-y-4">
              <Button
                variant="special"
                size="lg"
                className="btn-locked-primary text-lg px-8 py-4"
              >
                Nie mam już wątpliwości, dołączam do kursu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-locked-gradient">
                Przedsprzedaż trwa tylko do 10 stycznia!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Kiedy dostanę kurs?",
                  answer:
                    "Dostęp do platformy i pierwszych modułów otrzymasz natychmiast po zakupie. Kolejne moduły będą odblokowywane co tydzień, abyś miał czas na spokojne przepracowanie materiału. Dzięki temu zobaczysz pierwsze efekty już w pierwszym tygodniu – nie musisz czekać na \"ukończenie całości\".",
                },
                {
                  question: "Jak długo będę mieć dostęp do kursu?",
                  answer:
                    "Na zawsze. Świat się zmienia, a ty wraz z nim. W przyszłości, gdy będę dodawać nowe materiały lub aktualizacje (np. warsztaty live, dodatkowe ćwiczenia) – automatycznie otrzymasz do nich dostęp bez żadnych dodatkowych opłat. Kupujesz raz – korzystasz zawsze.",
                },
                {
                  question: "Jakieś bonusy? 🎁",
                  answer:
                    "Tak! Wszyscy uczestnicy przedsprzedaży otrzymają:\n1. Dostęp do zamkniętej grupy Mastermind – miejsce na wymianę doświadczeń i wsparcie załogi. To tutaj dzieją się prawdziwe przełomy – w rozmowie z ludźmi, którzy są na tej samej drodze.\n2. Zaproszenie na live Q&A ze mną – gdzie odpowiem na twoje pytania dotyczące budowania odporności. Bez filtra, bez skryptów – jak na moich warsztatach, gdzie jeden temat potrafi zmienić całą perspektywę.\n\nTe bonusy są dostępne wyłącznie dla uczestników przedsprzedaży i nie będą oferowane później.",
                },
              ].map((faq, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-3 text-text-primary">
                      {faq.question}
                    </h3>
                    <div className="text-text-secondary whitespace-pre-line">{faq.answer}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SilnaGlowa;
