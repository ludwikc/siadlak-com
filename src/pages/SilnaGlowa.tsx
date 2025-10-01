import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

const SilnaGlowa = () => {
  return (
    <Layout>
      {/* Hero Section - Theme Locked */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 backdrop-blur-sm border border-ascension-pink/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-ascension-pink" />
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
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-ascension-pink" />
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
                <div className="absolute -inset-1 bg-gradient-to-r from-ascension-pink via-luminal-magenta to-ascension-pink rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
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
                  <span className="text-ascension-pink line-through">
                    12,000 zł
                  </span>{" "}
                  →{" "}
                  <span className="text-ascension-pink text-xl sm:text-2xl font-bold">
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-ascension-pink to-luminal-magenta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
                <p className="text-lg font-medium text-ascension-pink mb-4">
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
                    <p className="text-sm text-text-secondary">łódź się chwieje</p>
                    <p className="text-sm text-text-secondary">żagle rwą</p>
                    <p className="text-sm text-text-secondary">kadłub przecieka</p>
                  </div>
                  <Waves className="h-6 w-6 text-red-400 animate-pulse" />
                </div>
              </div>

              {/* Stage 2: Stormy Waters */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-orange-200 hover:shadow-lg transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-100 px-4 py-1 rounded-full border-2 border-orange-200">
                  <span className="text-xs font-bold text-orange-600">OCEAN</span>
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
                  <span className="text-xs font-bold text-white">ROZWIĄZANIE</span>
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
                    Owszem, są łodzie które pływają po spokojnych morzach.<br />
                    Ba! Są takie, które nie pływają - ciągną je <span className="line-through text-gray-400">holowniki</span> <span className="font-semibold">(np. bogaci rodzice)</span>.
                  </p>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-xl sm:text-2xl font-bold text-ascension-pink mb-2">
                      Ty nie jesteś jedną z nich i nie będziesz
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary">
                      W ogóle nie powinieneś się na nich oglądać.<br />
                      <strong className="text-text-primary">Oni nie przepłyną za Ciebie Twojego kursu.</strong>
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
                    <p className="text-ascension-pink font-medium">
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
                      <span className="font-bold text-ascension-pink">
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

                    <p className="text-lg font-medium text-ascension-pink">
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
              <p className="text-ascension-pink font-medium text-center">
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

                <div className="bg-ascension-pink/10 p-6 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    Brian Tracy w "Psychologii sprzedaży" pisał, że osoby z
                    biednych domów i z bogatych mają szansę na bogactwo.
                  </p>
                  <p className="text-text-secondary mb-4">
                    I taką samą szansę, by popaść w biedę.
                  </p>
                  <p className="text-xl font-bold text-ascension-pink">
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

      {/* Benefits Section - Theme Adaptive */}
      <section className="py-16 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Z moją pomocą stworzysz swój własny plan wytrwałości
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Nauczysz się nawigowania po oceanie życia i odporności na zmienną pogodę.",
                "Przejmiesz stery nad swoim umysłem, by prowadzić go na spokojne wody życia.",
                "Opanujesz ocean myśli i uciszysz go, tak że burza to będzie wyjątek.",
                "Wiatr motywacji wypełni Twoje żagle, dzięki czemu będziesz przeć cała naprzód, w zgodzie ze swoimi wartościami.",
                "Posiądziesz strategie radzenia sobie w trudnych sytuacjach, żeby wyjść z nich jeszcze silniejszym.",
                "Stworzysz własny kompas, który zawsze będzie wskazywał właściwy kierunek.",
              ].map((benefit, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <p className="text-text-secondary">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
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
                      className="text-lg font-medium text-ascension-pink"
                    >
                      {dream}
                    </p>
                  ))}
                </div>

                <p className="text-lg mt-8 font-bold text-text-primary">
                  Wszystko to stanie się możliwe, kiedy pokonasz swoje bariery
                  mentalne.
                </p>

                <div className="mt-8 bg-ascension-pink/10 p-6 rounded-lg">
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
                  <p className="text-lg font-bold text-ascension-pink mt-4">
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 px-5 py-2 rounded-full mb-6">
                <ShipWheel className="h-5 w-5 text-ascension-pink" />
                <span className="text-sm font-bold text-ascension-pink uppercase">
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
                  title: "Sterowanie umysłem: Opanowanie sztuki skupienia uwagi",
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
                  title: "Napędzanie swojej podróży: Motywacja do ciągłego rozwoju",
                  description:
                    "Czujesz, że brakuje Ci motywacji do działania? Wspólnie odkryjemy Twoje prawdziwe wartości i nauczysz się żyć w zgodzie z nimi na co dzień.",
                },
                {
                  number: 5,
                  icon: Waves,
                  gradient: "from-teal-500 to-cyan-600",
                  title: "Nawigacja przez burze: Skuteczne strategie radzenia sobie",
                  description:
                    "Czy czasem czujesz się bezradny w obliczu życiowych wyzwań? Poznasz naprawdę skuteczne strategie radzenia sobie ze stresem i przeciwnościami.",
                },
                {
                  number: 6,
                  icon: Shield,
                  gradient: "from-indigo-500 to-purple-600",
                  title: "Tworzenie własnego kompasu: Plan budowania odporności",
                  description:
                    "Chcesz być odporny na życiowe zawirowania? Stworzysz swój personalny plan budowania odporności psychicznej.",
                },
              ].map((module) => (
                <div
                  key={module.number}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                >
                  {/* Progress Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-ascension-pink/10 to-luminal-magenta/10 px-3 py-1.5 rounded-full border border-ascension-pink/20">
                    <span className="text-xs font-bold text-ascension-pink">
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
                          className="text-ascension-pink"
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
                  <button className="w-full bg-gradient-to-r from-ascension-pink to-luminal-magenta text-white font-bold py-3 sm:py-3.5 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm sm:text-base">ODBLOKOWUJ MODUŁ</span>
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
                  <p className="text-lg font-medium text-ascension-pink">
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

            <Card className="glass-card p-8 max-w-lg mx-auto">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div>
                    <p className="text-text-secondary line-through text-xl">
                      12 000 zł
                    </p>
                    <p className="text-sm text-text-secondary">
                      (tyle kosztuje 1 dzień mentoringu 1:1)
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-bold text-ascension-pink">
                      777 zł
                    </p>
                    <p className="text-text-secondary">
                      za pełny dostęp na zawsze
                    </p>
                  </div>

                  <Button
                    variant="special"
                    size="lg"
                    className="btn-locked-primary w-full text-lg py-4"
                  >
                    To dobra cena za ten rejs, wchodzę na pokład
                  </Button>

                  <div className="mt-8 bg-ascension-pink/10 p-6 rounded-lg">
                    <h4 className="font-bold mb-4 text-text-primary">
                      Dopłyniesz, gdzie chcesz, albo odstawię Cię na brzeg
                    </h4>
                    <p className="text-text-secondary mb-4">
                      Wierzę w to, co robię. Widziałem ludzi, którym pomogłem.
                      Wiem, że mogę pomóc także Tobie. I wiem, że się boisz. To
                      też rozwiąże kurs Silna Głowa.
                    </p>
                    <p className="text-text-secondary">
                      Ale jeśli dołączysz do kursu, przerobisz go i stwierdzisz,
                      że Ci się nie podoba, zwrócę Ci środki w ciągu 30 dni bez
                      żadnego problemu.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                    <Shield className="w-4 h-4" />
                    <span>30-dniowa gwarancja zwrotu pieniędzy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objections Section - Theme Adaptive */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                Możesz się wahać
              </h2>

              <Card className="glass-card p-8 max-w-3xl mx-auto border-l-4 border-l-ascension-pink">
                <CardContent className="p-0">
                  <p className="text-lg mb-4 text-text-secondary">
                    Wcale mnie to nie dziwi.
                  </p>
                  <p className="text-text-secondary mb-4">
                    Życie nauczyło Cię nie podejmować ryzyka, unikać wystawiania
                    się na krytykę, omijać okazje.
                  </p>
                  <div className="bg-card-bg p-4 rounded-lg mb-4">
                    <p className="text-lg font-medium text-center italic text-text-primary">
                      "Ja go nie widzę, to ono też mnie nie widzi".
                    </p>
                  </div>
                  <p className="text-xl font-bold text-ascension-pink text-center">
                    Ale życie Cię widzi.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-1 gap-12">
              {/* Money Objection */}
              <div className="group">
                <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-2xl font-bold text-color-error">
                        Nie mam teraz pieniędzy
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="bg-ascension-pink/10 p-6 rounded-lg border-l-4 border-l-ascension-pink">
                        <p className="text-lg font-bold text-ascension-pink mb-3">
                          W tym cały problem.
                        </p>
                        <p className="text-text-secondary mb-4">
                          Twój mental blokuje Cię przed zarobieniem dobrych
                          pieniędzy. I będzie Cię blokował przez całe życie,
                          jeśli tak to zostawisz.
                        </p>

                        <p className="text-text-secondary mb-4">
                          Otoczenie nauczyło Cię myśleć źle o pieniądzach. Że są
                          domeną chciwych i chytrych ludzi. Że można je stracić.
                          Że można z ich powodu cierpieć albo dostać w dziób na
                          ulicy.
                        </p>

                        <p className="text-lg font-bold text-ascension-pink mb-4">
                          Twój umysł broni Cię przed dużymi pieniędzmi!
                        </p>

                        <p className="text-text-secondary mb-4">
                          Weźmy znowu tę łódź – boisz się wypłynąć na szerokie
                          wody, bo Ci ktoś naopowiadał, że tam pływają tylko
                          piraci. I że można łatwo zatonąć.
                        </p>

                        <p className="text-lg font-bold text-ascension-pink mb-4">
                          To nieprawda!
                        </p>

                        <p className="text-text-secondary mb-4">
                          Na pewno masz marzenia. Bez pieniędzy ich nie
                          zrealizujesz. Musisz coś zrobić. Musisz przełamać ten
                          schemat. To może być kurs Silna Głowa, może być
                          mentoring, coaching, YouTube, terapia. Ale coś musi
                          być.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-ascension-pink/10 to-ascension-pink/5 p-6 rounded-lg">
                        <p className="text-lg font-bold text-ascension-pink mb-4">
                          Gdyby Twój umysł był zaprogramowany na dobrą kasę, to
                          już byś ją miał.
                        </p>
                        <p className="text-text-secondary">
                          Osobiście wolę sam decydować o tym, ile zarabiam 🙂
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Time Objection */}
              <div className="group">
                <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <h3 className="text-2xl font-bold text-color-error">
                        Nie mam czasu na kursy
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="text-text-secondary mb-4">
                        Oczywiście. Świat pędzi, nie czeka, presja, hustlowanie,
                        wyścig szczurów.
                      </p>

                      <p className="text-text-secondary mb-4">
                        Gnasz ze spotkania na spotkanie. Gdzie tu jeszcze
                        wcisnąć kurs?
                      </p>

                      <div className="bg-ascension-pink/10 p-6 rounded-lg">
                        <p className="text-text-secondary mb-4">
                          Ale pomyśl o tych wszystkich momentach, kiedy się
                          martwisz. Kiedy nie możesz zasnąć. Kiedy łapiesz się
                          na rozpamiętywaniu stresujących sytuacji.
                        </p>

                        <p className="text-text-secondary mb-4">
                          Kiedy utrudnia Ci to pracę, powoduje prokrastynację,
                          niewytłumaczalny strach.
                        </p>

                        <div className="text-center space-y-3">
                          <p className="text-xl font-bold text-ascension-pink">
                            Ile czasu na to tracisz?
                          </p>
                          <p className="text-xl font-bold text-ascension-pink">
                            Ile czasu możesz odzyskać?
                          </p>
                        </div>

                        <p className="text-text-secondary mt-4">
                          Pomyśl o tym, jak kolejne trudne wydarzenia z życia
                          powstrzymują Cię przed działaniem.
                        </p>

                        <p className="text-text-secondary">
                          Ile masz takich złych dni? Ile są warte w przeliczeniu
                          na pieniądze? Ile kursów możesz za to kupić?
                        </p>
                      </div>

                      <div className="text-center">
                        <Button
                          variant="special"
                          size="lg"
                          className="btn-locked-primary"
                        >
                          Wskakuję na pokład. Zamawiam dostęp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Investment Section */}
              <div className="group">
                <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-color-success/10 to-color-success/5 p-6 border-b">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-color-success/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📈</span>
                      </div>
                      <h3 className="text-2xl font-bold text-color-success">
                        Czy to mi się zwróci?
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="bg-ascension-pink/10 p-6 rounded-lg">
                        <p className="text-text-secondary mb-4">
                          Warren Buffett powiedział, że najlepszą inwestycją
                          jest inwestycja w siebie. Jeśli tak mówi
                          najwybitniejszy inwestor wszech czasów, to widocznie
                          musi tak być.
                        </p>

                        <p className="text-text-secondary mb-4">
                          Cokolwiek robisz w życiu, czymkolwiek się zajmujesz,
                          Twój mental pozwoli Ci osiągać cele, ale też przed
                          nimi powstrzyma.
                        </p>

                        <p className="text-text-secondary mb-4">
                          Spójrz na ludzi, którzy osiągają sukces. Przebojowi,
                          może nieco aroganccy, ale przede wszystkim wierzą w
                          siebie.
                        </p>

                        <div className="bg-card-bg p-4 rounded-lg mb-4">
                          <p className="text-lg font-medium text-ascension-pink italic">
                            "Nie trafiłem ponad 9000 rzutów w moim życiu.
                            Przegrałem ponad 300 meczów. 26 razu zaufano mi, gdy
                            miałem oddać rzut na miarę zwycięstwa i spudłowałem.
                            Przegrywałem w moim życiu ciągle. Dlatego właśnie
                            osiągnąłem sukces." - Michael Jordan
                          </p>
                        </div>

                        <p className="text-lg font-bold text-ascension-pink text-center">
                          A kiedy będziesz mieć Silną Głowę, osiągniesz
                          wszystko, co chcesz. Przede wszystkim spokój.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mindset Objection */}
              <div className="group">
                <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-2xl font-bold text-color-error">
                        Z moim mentalem już nic nie da się zrobić
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center bg-ascension-pink/10 p-6 rounded-lg">
                        <p className="text-2xl font-bold text-ascension-pink mb-4">
                          Z każdym mentalem się da.
                        </p>
                        <p className="text-text-secondary mb-4">
                          Spotykałem w swojej pracy ludzi, którzy mieli,
                          nazwijmy to, łatwe życie. I spotykałem też takich,
                          których życie nie rozpieszczało od najmłodszych lat.
                          Większość z nich wyszła z tego. Dzisiaj są w innym, o
                          wiele lepszym miejscu.
                        </p>
                        <p className="text-lg text-ascension-pink">
                          Nigdy nie jest za późno na zmiany.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-ascension-pink/10 to-ascension-pink/5 p-6 rounded-lg border border-ascension-pink/20">
                        <p className="text-text-secondary mb-4">
                          Zwłaszcza na zmiany na lepsze. Umysł to dość giętkie
                          narzędzie. Tak jak mięśnie można rozciągać, żeby
                          zrobić szpagat, tak samo można gimnastykować umysł.
                        </p>

                        <p className="text-lg font-bold text-center mb-4 text-text-primary">
                          To jest biologia, a biologii nie oszukasz.
                        </p>

                        <p className="text-text-secondary mb-4">
                          Jedyny sposób, żeby celu nie osiągnąć, to nie podjąć
                          działania, czyli zrobić to, co właśnie teraz chcesz
                          zrobić.
                        </p>

                        <div className="text-center space-y-3">
                          <p className="text-lg font-bold text-ascension-pink">
                            Ale wierzę, że jesteś na tej stronie, bo chcesz
                            czegoś więcej. Chcesz przełamać schemat.
                          </p>
                          <p className="text-lg text-text-primary">
                            Jeśli tak, zapraszam na pokład 🙂
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button
                variant="special"
                size="lg"
                className="btn-locked-primary text-lg px-8 py-4"
              >
                Nie mam już wątpliwości, dołączam do kursu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Theme Locked */}
      <section className="py-16 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>

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
