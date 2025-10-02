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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-quantum-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neural-violet/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-quantum-blue/20 to-neural-violet/20 backdrop-blur-sm border border-quantum-blue/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-neural-violet" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  PRZEDSPRZEDAŻ
                </span>
                <span className="text-xs sm:text-sm text-locked-silver">
                  • Kończy się 10 stycznia
                </span>
              </div>
            </div>

            {/* Main Headline - Problem/Benefit */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              Zamień swój umysł w{" "}
              <span className="text-locked-gradient">
                niezatapialny pancernik
              </span>
              , któremu niestraszne życiowe sztormy
            </h1>

            {/* Subheadline - Specific Promise */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-10 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Naucz się radzić sobie z trudnościami i realizuj swoje cele –
              pomimo przeciwności losu
            </p>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-neural-violet" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  520+ absolwentów
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
                <div className="absolute -inset-1 bg-gradient-to-r from-quantum-blue via-neural-violet to-quantum-blue rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
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
                  <span className="text-neural-violet line-through">
                    12,000 zł
                  </span>{" "}
                  →{" "}
                  <span className="text-neural-violet text-xl sm:text-2xl font-bold">
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
              <div className="aspect-video bg-locked-white/10 rounded-2xl flex items-center justify-center border border-locked-white/20 hover:border-ascension-pink/50 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-quantum-blue to-neural-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-bold text-red-600 uppercase">
                  Twarda prawda
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Od początku bądźmy ze sobą szczerzy:
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-color-error">
                żyjemy w piekielnie trudnym świecie
              </p>
            </div>

            {/* Problem Cards - Progressive Intensity */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {[
                {
                  text: "otaczają nas media społecznościowe, których właściciele wydają grube pieniądze, by nas od tych platform uzależnić",
                  icon: XCircle,
                  intensity: 10,
                },
                {
                  text: "obserwujemy sukcesy innych w mediach społecznościowych, gdzie w rzeczywistości to jest tylko ułamek prawdy",
                  icon: Users,
                  intensity: 8,
                },
                {
                  text: "każdego dnia przyswajamy więcej danych, niż kilka wieków temu nasi przodkowie przyswajali przez całe życie",
                  icon: AlertTriangle,
                  intensity: 12,
                },
                {
                  text: "korporacje wydają miliardy na specjalistów i reklamy, żeby tylko zdobyć naszą uwagę",
                  icon: Target,
                  intensity: 11,
                },
                {
                  text: 'presja wyścigu szczurów, osiągnięć i "hustlowania" jest nie do zniesienia',
                  icon: Clock,
                  intensity: 15,
                },
                {
                  text: "dodatkowo nosimy w sobie traumy międzypokoleniowe i własne",
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
                Dodaj do tego uwarunkowania rodzinne i presję otoczenia
              </h3>
              <p className="text-text-secondary mb-6">
                Bardzo często nasi rodzice, krewni i znajomi przenoszą na nas
                swoje braki i kompleksy. I to nawet nie z własnej winy! Oni po
                prostu nie wiedzą, że można inaczej. Nawet czasem nie chcą
                wiedzieć.
              </p>

              <div className="bg-color-error/10 p-6 rounded-lg">
                <h4 className="font-bold mb-4 text-text-primary">
                  Zrób sobie test
                </h4>
                <p className="mb-4 text-text-secondary">
                  Czy zdarzyło Ci się od nich słyszeć coś w rodzaju:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    '"I tak Ci się nie uda, jak zwykle"',
                    '"Po co to robisz? Tylko się napracujesz i nic z tego nie będzie"',
                    '"Nie nadajesz się do tego"',
                    '"Weź się do roboty, bo co z Ciebie będzie?"',
                    '"Wymyślasz"',
                    '"Daj sobie spokój, wracaj do domu"',
                  ].map((quote, index) => (
                    <li key={index} className="text-color-error font-medium">
                      {quote}
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary mb-4">
                  Doradzają nam według własnego uznania, według swojej
                  najlepszej wiedzy, dodając na koniec: "Chcę dla Ciebie jak
                  najlepiej".
                </p>

                <p className="font-bold text-text-primary">
                  Ale prawda jest taka, że najczęściej chcą jak najlepiej dla
                  siebie.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-text-primary">
                  Wiesz, kiedy ludzie najczęściej mówią: "Zmieniłeś się"?
                </h4>
                <p className="text-lg font-medium text-neural-violet mb-4">
                  Alex Hormozi powiedział: "Ludzie nie chcą widzieć najlepszej
                  wersji Ciebie, tylko wersję, która najlepiej im służy".
                </p>
                <p className="text-text-secondary">
                  Mało tego! Potrafią się obrazić, bo nie robisz tego, czego od
                  Ciebie oczekują. Wzbudzić poczucie winy, nagiąć do swojej
                  woli.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-text-primary">
                  Potem idziesz do pracy i tu znowu jest loteria
                </h4>
                <p className="text-text-secondary mb-4">
                  Albo trafisz w dobre miejsce, które szanuje człowieka, dba o
                  rozwój, a błąd to okazja do poprawy, a nie przestępstwo.
                </p>
                <p className="text-text-secondary">
                  Albo trafisz do mordoru, gdzie mobbing jest na porządku
                  dziennym, a jak Ci się nie podoba, to szef ma 10 osób na Twoje
                  miejsce.
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
                Wyobraź sobie, że jesteś łodzią
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                Osoby z Twojego otoczenia i środowisko wytyczyły Ci kurs na
                niespokojne wody. <strong>To nie jest Twoja wina.</strong>
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
                    Owszem, są łodzie które pływają po spokojnych morzach.
                    <br />
                    Ba! Są takie, które nie pływają - ciągną je{" "}
                    <span className="line-through text-gray-400">
                      holowniki
                    </span>{" "}
                    <span className="font-semibold">(np. bogaci rodzice)</span>.
                  </p>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-xl sm:text-2xl font-bold text-neural-violet mb-2">
                      Ty nie jesteś jedną z nich i nie będziesz
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary">
                      W ogóle nie powinieneś się na nich oglądać.
                      <br />
                      <strong className="text-text-primary">
                        Oni nie przepłyną za Ciebie Twojego kursu.
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
              A jak znosisz przeciwności losu?
            </h2>

            <p className="text-lg text-center mb-8 text-text-secondary">
              Zakładam, że to nie jest "bułka z masłem" i że:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "przeżywasz",
                "rozpamiętujesz",
                "wyrzucasz sobie",
                "obwiniasz siebie",
                "marzysz o życiu, w którym dana sytuacja nie miała miejsca",
                "patrzysz na innych, którzy nie mają takich problemów",
                'masz dość słuchania: "Będzie dobrze", "Poradzisz sobie" itd.',
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-color-error/10 rounded-lg"
                >
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>

            <Card className="glass-card p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">
                  Najpierw wiedz, że to, co się z Tobą dzieje jest normalne
                </h3>
                <p className="text-text-secondary mb-6">
                  Wszyscy to przechodzimy, tylko jedni znoszą to lepiej, inni
                  gorzej.
                </p>
                <p className="text-lg font-medium mb-6 text-text-primary">
                  Są ludzie, którzy porażki przyjmują na klatę, widzą to jako
                  szansę i myślą: "Jak mogę to przekuć na swoją korzyść?".
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  situation: "Uciekł mi pociąg?",
                  response: "Wrócę do domu, pomogę rodzicom przy pracy.",
                },
                {
                  situation: "zwolnili mnie z pracy?",
                  response: "Znajdę lepszą, i tak miałem się zwolnić.",
                },
                {
                  situation: "odmówili mi kredytu?",
                  response: "Nie zadłużę się na lata, jakoś uzbieram.",
                },
                {
                  situation: "zachorowałem?",
                  response:
                    "W końcu sobie poleżę i dam ciału to, na co zasługuje.",
                },
                {
                  situation: "nie mam zleceń?",
                  response: "Wykorzystam czas wolny i popracuję nad firmą.",
                },
              ].map((example, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <p className="font-bold text-color-error mb-2">
                      {example.situation}
                    </p>
                    <p className="text-neural-violet font-medium">
                      {example.response}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section - Theme Adaptive */}
      <section className="py-16 bg-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Kim jestem i jakie rezultaty ode mnie otrzymasz?
            </h2>

            <Card className="glass-card p-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-6">
                    <p className="text-lg text-text-primary">
                      Nazywam się{" "}
                      <span className="font-bold text-neural-violet">
                        Ludwik C. Siadlak
                      </span>{" "}
                      i od ponad 18 lat żyję z aktualizowania oprogramowania w
                      głowach moich Klientów.
                    </p>

                    <p className="text-text-secondary">
                      Mówię im także o ich barierach, lękach, przekonaniach i
                      schematach, które często nie są ich własne. I mówię, jak z
                      nimi zerwać, by osiągnąć swój pełny potencjał i żyć w
                      zgodzie ze sobą.
                    </p>

                    <p className="text-text-secondary">
                      Latami uczyłem się różnych technik autohipnozy, medytacji,
                      afirmacji, prowadzenia dialogu wewnętrznego i radzenia
                      sobie z trudnościami. Wszystko najpierw sprawdziłem na
                      sobie, a gdy zobaczyłem, że działa, sprawdziłem na
                      podopiecznych.
                    </p>

                    <p className="text-lg font-medium text-neural-violet">
                      Dzisiaj pokażę Ci, jak żeglować po oceanie życia, by
                      przetrwać każdy sztorm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 space-y-8">
              <h3 className="text-2xl font-bold text-text-primary">
                Moja praca już przynosi efekty
              </h3>
              <p className="text-neural-violet font-medium text-center">
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

                <div className="bg-quantum-blue/10 p-6 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    Brian Tracy w "Psychologii sprzedaży" pisał, że osoby z
                    biednych domów i z bogatych mają szansę na bogactwo.
                  </p>
                  <p className="text-text-secondary mb-4">
                    I taką samą szansę, by popaść w biedę.
                  </p>
                  <p className="text-xl font-bold text-neural-violet">
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-color-success/20 to-neural-violet/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-color-success" />
                <span className="text-sm font-bold text-color-success uppercase">
                  Twoja transformacja
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Z moją pomocą stworzysz swój własny plan wytrwałości
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary">
                Krok po kroku przejdziesz transformację od chaosu do spokoju
              </p>
            </div>

            {/* Visual Roadmap - Progressive Journey */}
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Nawigacja",
                  benefit:
                    "Nauczysz się nawigowania po oceanie życia i odporności na zmienną pogodę.",
                  icon: Compass,
                  gradient: "from-blue-500 to-blue-600",
                  timeframe: "Tydzień 1-2",
                },
                {
                  step: 2,
                  title: "Sterowanie",
                  benefit:
                    "Przejmiesz stery nad swoim umysłem, by prowadzić go na spokojne wody życia.",
                  icon: ShipWheel,
                  gradient: "from-purple-500 to-purple-600",
                  timeframe: "Tydzień 3-4",
                },
                {
                  step: 3,
                  title: "Spokój",
                  benefit:
                    "Opanujesz ocean myśli i uciszysz go, tak że burza to będzie wyjątek.",
                  icon: Waves,
                  gradient: "from-cyan-500 to-teal-600",
                  timeframe: "Tydzień 5-6",
                },
                {
                  step: 4,
                  title: "Motywacja",
                  benefit:
                    "Wiatr motywacji wypełni Twoje żagle, dzięki czemu będziesz przeć cała naprzód, w zgodzie ze swoimi wartościami.",
                  icon: Zap,
                  gradient: "from-orange-500 to-orange-600",
                  timeframe: "Tydzień 7-8",
                },
                {
                  step: 5,
                  title: "Odporność",
                  benefit:
                    "Posiądziesz strategie radzenia sobie w trudnych sytuacjach, żeby wyjść z nich jeszcze silniejszym.",
                  icon: Shield,
                  gradient: "from-green-500 to-green-600",
                  timeframe: "Tydzień 9-10",
                },
                {
                  step: 6,
                  title: "Kompas",
                  benefit:
                    "Stworzysz własny kompas, który zawsze będzie wskazywał właściwy kierunek.",
                  icon: Target,
                  gradient: "from-quantum-blue to-neural-violet",
                  timeframe: "Tydzień 11-12",
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
            <div className="mt-12 bg-gradient-to-br from-quantum-blue/10 to-neural-violet/10 rounded-2xl p-8 border-2 border-quantum-blue/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-quantum-blue to-neural-violet rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-text-primary">
                  W 12 tygodni od teraz
                </h3>
                <p className="text-lg sm:text-xl text-text-secondary mb-6">
                  Będziesz miał silną głowę, gotową na każde wyzwanie życiowe
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
              Pomyśl, że już niedługo Twoje problemy przestaną Cię przytłaczać
            </h2>

            <Card className="glass-card p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">
                  Jak będzie wtedy wyglądało Twoje życie?
                </h3>
                <p className="text-lg mb-6 text-text-secondary">
                  Teraz możesz puścić wodze fantazji.
                </p>
                <p className="text-lg mb-8 text-text-secondary">
                  Przypomnij sobie swoje najśmielsze sny. O czym marzysz?
                </p>

                <div className="space-y-4">
                  {[
                    "→ Pozbędziesz się długów?",
                    "→ Rzucisz mobbingującą pracę i znajdziesz lepszą?",
                    "→ Przestaniesz brać do siebie ciężkie słowa swoich bliskich?",
                    "→ Osiągniesz wymarzony sukces w pracy lub w biznesie?",
                    "→ Odpoczniesz finansowo?",
                    "→ Zapewnisz byt sobie i swojej rodzinie?",
                  ].map((dream, index) => (
                    <p
                      key={index}
                      className="text-lg font-medium text-neural-violet"
                    >
                      {dream}
                    </p>
                  ))}
                </div>

                <p className="text-lg mt-8 font-bold text-text-primary">
                  Wszystko to stanie się możliwe, kiedy pokonasz swoje bariery
                  mentalne.
                </p>

                <div className="mt-8 bg-quantum-blue/10 p-6 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    Wracając do metafory łodzi – wyobraź sobie, że płyniesz, i
                    nie boisz się niczego.
                  </p>
                  <p className="text-text-secondary mb-4">
                    I wiesz, że nawet jak przyjdzie sztorm, zacznie padać deszcz
                    albo wielka fala znienacka uderzy w burtę, to przyjmiesz to
                    z godnością i będziesz płynąć dalej.
                  </p>
                  <p className="font-bold text-text-primary">
                    Bo wiesz, co robić.
                  </p>
                  <p className="text-text-secondary mt-4">
                    Wiesz, jak sterować, jak ustawić żagle, jaki obrać kurs i
                    jakie rozkazy wydać załodze.
                  </p>
                  <p className="text-lg font-bold text-neural-violet mt-4">
                    Masz zbudowaną strategię odporności psychicznej.
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-quantum-blue/20 to-neural-violet/20 px-5 py-2 rounded-full mb-6">
                <ShipWheel className="h-5 w-5 text-neural-violet" />
                <span className="text-sm font-bold text-neural-violet uppercase">
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
                    "Jeśli czujesz się zagubiony w życiowych burzach, pokażę Ci potężną metaforę żaglówki, która pomoże Ci zrozumieć siebie i swoje otoczenie.",
                },
                {
                  number: 2,
                  icon: Brain,
                  gradient: "from-purple-500 to-purple-600",
                  title:
                    "Sterowanie umysłem: Opanowanie sztuki skupienia uwagi",
                  description:
                    "Czy zdarza Ci się, że negatywne myśli przejmują nad Tobą kontrolę? Już za chwilę poznasz techniki, które pomogą Ci wyrwać się z błędnego koła pesymizmu.",
                },
                {
                  number: 3,
                  icon: Target,
                  gradient: "from-green-500 to-green-600",
                  title: "Ujarzmianie myśli: Moc percepcji",
                  description:
                    "Czy zauważyłeś, że Twoje myśli czasem sabotują Twój sukces? W tym module odkryjesz, jak przekształcić zagrożenia w wyzwania.",
                },
                {
                  number: 4,
                  icon: Zap,
                  gradient: "from-orange-500 to-orange-600",
                  title:
                    "Napędzanie swojej podróży: Motywacja do ciągłego rozwoju",
                  description:
                    "Czujesz, że brakuje Ci motywacji do działania? Wspólnie odkryjemy Twoje prawdziwe wartości i nauczysz się żyć w zgodzie z nimi na co dzień.",
                },
                {
                  number: 5,
                  icon: Waves,
                  gradient: "from-teal-500 to-cyan-600",
                  title:
                    "Nawigacja przez burze: Skuteczne strategie radzenia sobie",
                  description:
                    "Czy czasem czujesz się bezradny w obliczu życiowych wyzwań? Poznasz naprawdę skuteczne strategie radzenia sobie ze stresem i przeciwnościami.",
                },
                {
                  number: 6,
                  icon: Shield,
                  gradient: "from-indigo-500 to-purple-600",
                  title:
                    "Tworzenie własnego kompasu: Plan budowania odporności",
                  description:
                    "Chcesz być odporny na życiowe zawirowania? Stworzysz swój personalny plan budowania odporności psychicznej.",
                },
              ].map((module) => (
                <div
                  key={module.number}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                >
                  {/* Progress Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-quantum-blue/10 to-neural-violet/10 px-3 py-1.5 rounded-full border border-quantum-blue/20">
                    <span className="text-xs font-bold text-neural-violet">
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
                          className="text-neural-violet"
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
                  <button className="w-full bg-gradient-to-r from-quantum-blue to-neural-violet text-white font-bold py-3 sm:py-3.5 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
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
                  <p className="text-lg font-medium text-neural-violet">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
              Ile za ten rejs ku spokojowi ducha?
            </h2>

            <Card className="glass-card p-8 max-w-2xl mx-auto border-2 border-quantum-blue/20">
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

                      <div className="bg-gradient-to-br from-quantum-blue to-neural-violet p-6 rounded-xl text-center shadow-xl border-4 border-white/20">
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
                  <div className="bg-gradient-to-r from-ascension-pink/5 to-neural-violet/5 p-6 rounded-xl border border-quantum-blue/20">
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
                          Dopłyniesz, gdzie chcesz, albo odstawię Cię na brzeg
                        </h4>
                        <p className="text-sm text-text-secondary mb-3">
                          Wierzę w to, co robię. Widziałem ludzi, którym
                          pomogłem. Wiem, że mogę pomóc także Tobie. I wiem, że
                          się boisz. To też rozwiąże kurs Silna Głowa.
                        </p>
                        <p className="text-sm text-text-secondary">
                          Ale jeśli dołączysz do kursu, przerobisz go i
                          stwierdzisz, że Ci się nie podoba,{" "}
                          <strong className="text-text-primary">
                            zwrócę Ci środki w ciągu 30 dni bez żadnego
                            problemu.
                          </strong>
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
              <div className="bg-card-bg p-6 rounded-xl border-2 border-quantum-blue/20 max-w-2xl mx-auto">
                <p className="text-lg font-medium text-center italic text-text-primary mb-2">
                  "Ja go nie widzę, to ono też mnie nie widzi".
                </p>
                <p className="text-xl font-bold text-neural-violet text-center">
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
                          <p className="text-lg font-bold text-neural-violet italic">
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-quantum-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neural-violet/20 rounded-full blur-3xl"></div>

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
                    "Dostęp otrzymasz natychmiast po zakupie. Wszystkie materiały są już gotowe i czekają na Ciebie.",
                },
                {
                  question: "Jak długo będę mieć dostęp do kursu?",
                  answer:
                    "Na zawsze. Świat się zmienia i chcąc zostać on top of the game musimy dostosowywać się do nowych wyzwań. Kiedy będę nagrywał dodatkowe materiały - zawsze będziesz otrzymywać do nich dostęp. Od razu, bez czekania.",
                },
              ].map((faq, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-3 text-text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary">{faq.answer}</p>
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
