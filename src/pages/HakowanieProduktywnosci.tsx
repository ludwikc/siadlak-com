import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  XCircle,
  CheckCircle2,
  ThumbsUp,
  Flame,
  Clock,
  Users,
  Brain,
  Sparkles,
  ShieldCheck,
  Star,
  Focus,
  Zap,
  Battery,
  Target,
  MousePointer,
  Repeat,
} from "lucide-react";

import CountdownTimer from "@/components/sales/CountdownTimer";
import FAQAccordion from "@/components/sales/FAQAccordion";
import ValueCalculator from "@/components/sales/ValueCalculator";

export default function HakowanieProduktywnosci() {
  return (
    <Layout>
      {/* 2.2. Hero Section - Theme Locked */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 backdrop-blur-sm border border-ascension-pink/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg animate-pulse">
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-ascension-pink" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  OSTATNIE MIEJSCA
                </span>
                <span className="text-xs sm:text-sm text-locked-silver">
                  • Grupa zamyka się za 3 dni
                </span>
              </div>
            </div>

            {/* Main Headline - Benefit-Focused */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              Zbuduj{" "}
              <span className="text-locked-gradient">żelazną dyscyplinę</span> i
              przestań odkładać ważne sprawy na później
            </h1>

            {/* Subheadline - Problem/Solution */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Nawet gdy masz gorszy dzień, życie prywatne wywala Ci plan, a
              rozpraszacze atakują z każdej strony
            </p>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-ascension-pink" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  1,240+ uczestników
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
                  4.9/5.0
                </span>
              </div>
            </div>

            {/* Primary CTA - Prominent */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="relative group inline-block w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-ascension-pink via-luminal-magenta to-ascension-pink rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <Button
                  variant="special"
                  size="lg"
                  className="relative btn-locked-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform duration-200"
                >
                  <span className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="text-xs sm:text-sm uppercase tracking-wider opacity-90">
                      Darmowe 4-dniowe wyzwanie
                    </span>
                    <span className="sm:mx-2 hidden sm:inline">•</span>
                    <span className="font-bold">
                      Sprawdzam, w którym lesie stoję →
                    </span>
                  </span>
                </Button>
              </div>

              {/* Scarcity - Below CTA */}
              <p className="text-sm sm:text-base font-semibold text-locked-white">
                <span className="text-ascension-pink">
                  Grupa ograniczona do 50 osób
                </span>{" "}
                • Zostało{" "}
                <span className="text-ascension-pink font-bold text-lg sm:text-xl">
                  16 miejsc
                </span>
              </p>
            </div>

            {/* Secondary Link - Subtle */}
            <div className="text-center">
              <button className="text-sm text-locked-silver hover:text-ascension-pink transition-colors underline">
                Wiem, o co chodzi. Zamawiam od razu →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3. Problem Agitation Section - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Czy Ty też zmagasz się z tymi wyzwaniami?
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary">
                Sprawdź, ile z tych problemów Cię dotyczy
              </p>
            </div>

            {/* Problem Categories */}
            <div className="space-y-12 mb-12">
              {/* Category 1: Focus Problems */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <Focus className="h-6 w-6 text-red-500" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Problemy z koncentracją
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: 'ciągle się rozpraszasz na telefon, media społecznościowe, wiadomości i inne "pilne" sprawy?',
                      icon: MousePointer,
                      intensity: 5,
                    },
                    {
                      text: "czujesz się przytłoczony ilością zadań i nie wiesz, od czego zacząć?",
                      icon: Target,
                      intensity: 10,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{
                        background: `linear-gradient(135deg, rgba(239, 68, 68, ${0.03 + problem.intensity * 0.01}) 0%, rgba(220, 38, 38, ${0.05 + problem.intensity * 0.01}) 100%)`,
                      }}
                    >
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
              </div>

              {/* Category 2: Action Problems */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Problemy z działaniem
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: "prokrastynujesz, przekładasz i nie możesz się zabrać za robotę, choć terminy gonią?",
                      icon: Clock,
                      intensity: 15,
                    },
                    {
                      text: 'odkładasz ważne rzeczy "na potem", a potem nigdy nie nadchodzi?',
                      icon: Repeat,
                      intensity: 12,
                    },
                    {
                      text: "zaczynasz mnóstwo projektów, ale kończysz niewiele?",
                      icon: Target,
                      intensity: 10,
                    },
                    {
                      text: "masz problemy z utrzymaniem rutyn i nawyków, które chcesz wprowadzić?",
                      icon: CheckCircle2,
                      intensity: 8,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{
                        background: `linear-gradient(135deg, rgba(249, 115, 22, ${0.03 + problem.intensity * 0.01}) 0%, rgba(234, 88, 12, ${0.05 + problem.intensity * 0.01}) 100%)`,
                      }}
                    >
                      <div className="absolute top-3 right-3 w-16 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                          style={{ width: `${problem.intensity * 10}%` }}
                        ></div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors group-hover:scale-110 duration-300">
                          <problem.icon className="h-6 w-6 text-orange-600 group-hover:animate-pulse" />
                        </div>
                        <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: Energy Problems */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600/20 to-red-700/20 flex items-center justify-center">
                    <Battery className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Problemy z energią
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: 'kończy Ci się energia w połowie dnia i dalej pracujesz "na oparach"?',
                      icon: Battery,
                      intensity: 18,
                    },
                    {
                      text: "masz wrażenie, że pracujesz non-stop, ale efektów nie widać?",
                      icon: Brain,
                      intensity: 15,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl p-5 sm:p-6 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{
                        background: `linear-gradient(135deg, rgba(220, 38, 38, ${0.03 + problem.intensity * 0.01}) 0%, rgba(185, 28, 28, ${0.05 + problem.intensity * 0.01}) 100%)`,
                      }}
                    >
                      <div className="absolute top-3 right-3 w-16 h-1.5 bg-red-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                          style={{ width: `${problem.intensity * 10}%` }}
                        ></div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center group-hover:bg-red-300 transition-colors group-hover:scale-110 duration-300">
                          <problem.icon className="h-6 w-6 text-red-700 group-hover:animate-pulse" />
                        </div>
                        <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Empathy Statement */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-ascension-pink via-luminal-magenta to-ascension-pink rounded-2xl blur opacity-20"></div>
              <div className="relative text-center p-8 sm:p-10 bg-white rounded-2xl border-2 border-ascension-pink/20">
                <div className="w-16 h-16 bg-gradient-to-br from-ascension-pink/20 to-luminal-magenta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-ascension-pink" />
                </div>
                <p className="text-lg sm:text-xl text-text-primary font-medium mb-4">
                  <strong>Doskonale Cię rozumiem. To nie Twoja wina.</strong>
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-ascension-pink mb-2">
                  Jesteś ofiarą manipulacji.
                </p>
                <p className="text-base sm:text-lg text-text-secondary">
                  I zaraz Ci pokażę, kto za tym stoi →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.4. Enemy/Context Section - Theme Adaptive */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                To nie jest teoria spiskowa. Wiesz doskonale, że są dwa dobra, o
                które walczą największe korporacje tego świata
              </h2>
              <div className="flex justify-center items-center gap-8 text-4xl font-bold text-ascension-pink">
                <span>⌚️ czas</span>
                <span>👀 uwaga</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-text-primary">
                    Fakty, które musisz znać:
                  </h4>
                  <ul className="space-y-3 text-text-secondary">
                    <li>
                      • Dzisiaj w ciągu jednej doby dostajemy więcej informacji
                      niż człowiek średniowiecza przez całe życie
                    </li>
                    <li>
                      • World Happiness Report pokazuje, że mimo postępu
                      technologicznego, jesteśmy coraz mniej szczęśliwi
                    </li>
                    <li>
                      • Dr Gloria Mark z UC Irvine udowodniła, że średni czas
                      skupienia spadł z 12 sekund do 8 sekund
                    </li>
                    <li>
                      • Każde przerwanie w pracy kosztuje nas 23 minuty, żeby
                      wrócić do pełnego skupienia
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-text-primary">
                    Moja filozofia:
                  </h4>
                  <blockquote className="text-lg italic text-ascension-pink font-medium mb-4">
                    "Często mówię, że: Skupienie będzie superumiejętnością w
                    nadchodzących latach"
                  </blockquote>
                  <p className="text-text-secondary">
                    W świecie, gdzie wszystko walczy o twoją uwagę, umiejętność
                    skupienia się na tym, co ważne, stanie się twoją największą
                    przewagą konkurencyjną.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 rounded-xl">
              <p className="text-2xl font-bold text-text-primary">
                Ale mam na to hak. 🎯
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Solution Introduction - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
              Produktywność da się wypracować. Każdy może ją osiągnąć.{" "}
              <span className="text-ascension-pink">Ty Też</span>
            </h2>

            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                Produktywność jest jak mięsień.
              </h3>
              <p className="text-lg text-text-secondary mb-6">
                Im częściej go ćwiczysz, tym silniejszy się staje. Ale tak jak w
                treningu siłowym, musisz wiedzieć, <strong>jak</strong> ćwiczyć,
                żeby nie zrobić sobie krzywdy.
              </p>
            </div>

            <Card className="glass-card border-l-4 border-l-color-warning mb-8">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 text-text-primary">
                  Problem z większością kursów produktywności:
                </h4>
                <p className="text-text-secondary">
                  Gdy system nie działa, mówią: "Nie starasz się wystarczająco",
                  "Nie masz dyscypliny", "Musisz więcej chcieć".{" "}
                  <strong className="text-color-error">
                    To przerzucanie winy na Ciebie.
                  </strong>
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                Właśnie o to w tym chodzi – żeby znaleźć{" "}
                <span className="text-ascension-pink">SWOJĄ</span> produktywność
              </h3>
              <p className="text-lg text-text-secondary">
                Nie kopię rutyn miliarderów. Nie podrabianie czyjegoś systemu.
                Twój unikalny sposób na maksymalizację wydajności przy
                zachowaniu zdrowia psychicznego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.6. Benefits/Future Vision - Theme Adaptive */}
      <section className="py-16 md:py-20 bg-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Future Vision Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-ascension-pink" />
                <span className="text-sm font-bold text-ascension-pink uppercase">
                  Twoja przyszłość
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                Jak wyglądałoby Twoje życie, gdybyś:
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary">
                Wyobraź sobie te scenariusze jako swoją rzeczywistość
              </p>
            </div>

            {/* Dream Benefits Grid - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
              {[
                {
                  text: "opierał się rozpraszaczom i korporacjom, atakującym Cię reklamami?",
                  icon: ShieldCheck,
                  gradient: "from-purple-500/10 to-purple-600/10",
                },
                {
                  text: "miał pełną kontrolę nad swoim czasem i uwagą?",
                  icon: Target,
                  gradient: "from-blue-500/10 to-blue-600/10",
                },
                {
                  text: "kończył każdy dzień z poczuciem spełnienia i postępu?",
                  icon: CheckCircle2,
                  gradient: "from-green-500/10 to-green-600/10",
                },
                {
                  text: "realizował swoje najważniejsze cele bez wypalenia?",
                  icon: Flame,
                  gradient: "from-orange-500/10 to-orange-600/10",
                },
                {
                  text: "cieszył się wolnym czasem bez poczucia winy?",
                  icon: Heart,
                  gradient: "from-pink-500/10 to-pink-600/10",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-ascension-pink/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${benefit.gradient}`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-ascension-pink/20 to-luminal-magenta/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-7 w-7 text-ascension-pink" />
                    </div>
                    <p className="text-text-primary font-medium leading-relaxed text-sm sm:text-base">
                      {benefit.text}
                    </p>
                    {/* Sparkle effect on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="h-4 w-4 text-ascension-pink animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-8 text-text-primary">
                Mam dla Ciebie program, który:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "pokaże Ci, jak utrzymać skupienie przez dłuższy czas (nawet w open space!)",
                  "nauczy Cię rozpoznawać i eliminować największe pożeracze czasu",
                  "pomoże Ci zbudować system priorytetów, który faktycznie działa",
                  "da Ci narzędzia do organizacji pracy i życia bez stresu",
                  "wytrenuje w Tobie nawyki, które się utrzymają (bez siłowania się)",
                  "pokaże, jak wykorzystać AI i nowoczesne narzędzia do zwiększenia wydajności",
                  "wzmocni Twoją siłę mentalną i odporność na presję",
                  "nauczy Cię, jak odpoczywać tak, żeby faktycznie się zregenerować",
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className="group glass-card border-0 bg-gradient-to-br from-color-success/5 to-color-success/10 hover:from-color-success/10 hover:to-color-success/15 hover:shadow-xl hover:shadow-color-success/10 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-color-success/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-4 relative z-10">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-color-success/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-color-success/20 transition-colors duration-300">
                          <CheckCircle2 className="h-4 w-4 text-color-success group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300 leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-color-success/10 to-color-info/10 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-6 text-text-primary">
                Dodatkowo zyskasz:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "odzyskasz radość życia i poczucie sensu",
                  "poprawisz relacje z rodziną i przyjaciółmi",
                  "zwiększysz swoje zarobki dzięki większej efektywności",
                  "będziesz miał więcej energii na hobby i pasje",
                  "poczujesz dumę ze swoich osiągnięć",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-color-info mr-3 flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7. Program Modules - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                Poznaj Hakowanie Produktywności
              </h2>
              <p className="text-lg text-ascension-pink font-medium mb-4">
                Właśnie to odróżnia Hakowanie Produktywności od innych kursów
              </p>
              <p className="text-text-secondary mb-8">
                Nie dostaniesz ogólnych porad typu "wstawaj o 5 rano".
                Dostaniesz spersonalizowany system dostosowany do Twojego trybu
                życia, osobowości i celów.
              </p>
            </div>

            <Card className="glass-card mb-12 border-l-4 border-l-color-warning">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-text-primary">
                  Czy wiesz, że wiele rutyn bogatych ludzi to zwykła ściema?
                </h3>
                <p className="text-text-secondary">
                  Tim Cook może wstawać o 4:30, bo ma armię asystentów i nie
                  musi samemu robić zakupów.
                  <strong>
                    {" "}
                    Liczy się to, co robisz, nie to, o której to robisz.
                  </strong>
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-text-primary">
              Co zawiera program Hakowanie Produktywności?
            </h3>
            <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
              6 modułów gotowych do "zainstalowania" w Twoim umyśle
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Focus",
                  subtitle: "Moduł 1",
                  icon: Brain,
                  gradient: "from-purple-500 to-purple-600",
                  description:
                    "Jak trenować koncentrację i radzić sobie z rozproszeniami w hałaśliwym świecie",
                  duration: "2 tygodnie",
                  lessons: 8,
                },
                {
                  title: "Priorytety",
                  subtitle: "Moduł 2",
                  icon: Target,
                  gradient: "from-blue-500 to-blue-600",
                  description:
                    "System wybierania tego, co najważniejsze (i odrzucania reszty bez poczucia winy)",
                  duration: "2 tygodnie",
                  lessons: 7,
                },
                {
                  title: "Organizacja",
                  subtitle: "Moduł 3",
                  icon: Clock,
                  gradient: "from-green-500 to-green-600",
                  description:
                    "Jak zbudować system zarządzania zadaniami, który nie zawali się pod presją",
                  duration: "2 tygodnie",
                  lessons: 9,
                },
                {
                  title: "Nawyki",
                  subtitle: "Moduł 4",
                  icon: Sparkles,
                  gradient: "from-yellow-500 to-orange-500",
                  description:
                    "Jak wprowadzać zmiany, które się utrzymają (bez heroicznych wysiłków)",
                  duration: "3 tygodnie",
                  lessons: 10,
                },
                {
                  title: "Narzędzia (z AI)",
                  subtitle: "Moduł 5",
                  icon: Zap,
                  gradient: "from-pink-500 to-rose-600",
                  description:
                    "Nowoczesne narzędzia i AI, które zrobią za Ciebie nudną robotę",
                  duration: "2 tygodnie",
                  lessons: 6,
                },
                {
                  title: "Siła mentalna",
                  subtitle: "Moduł 6",
                  icon: ShieldCheck,
                  gradient: "from-indigo-500 to-purple-600",
                  description:
                    "Jak budować odporność psychiczną i radzić sobie ze stresem",
                  duration: "2 tygodnie",
                  lessons: 8,
                },
              ].map((module, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                >
                  {/* Progress Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 px-3 py-1.5 rounded-full border border-neural-violet/20">
                    <span className="text-xs font-bold text-neural-violet">
                      {index + 1}/6
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-5">
                    {/* Large App Icon */}
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
                          strokeDasharray={`${((index + 1) / 6) * 283} 283`}
                          className="text-neural-violet"
                        />
                      </svg>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-text-primary mb-1 leading-tight">
                        {module.title}
                      </h4>
                      <p className="text-sm sm:text-base text-text-secondary font-medium">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {module.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5">
                      <Brain className="h-4 w-4 text-gray-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {module.lessons} lekcji
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Install Button */}
                  <button className="w-full bg-gradient-to-r from-neural-violet to-ascension-pink text-white font-bold py-3 sm:py-3.5 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm sm:text-base">ODBLOKOWUJ</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.8. Community & Bonuses - Theme Adaptive */}
      <section className="py-16 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-primary">
              Sam kurs to dopiero początek!
            </h2>

            <div className="text-center mb-12">
              <p className="text-xl text-text-secondary mb-6">
                <strong className="text-ascension-pink">
                  Serce Hakowania Produktywności to społeczność Hakerów
                </strong>{" "}
                - ludzi, którzy postanowili wziąć swoje życie w swoje ręce.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4 text-text-primary">
                      W społeczności znajdziesz:
                    </h4>
                    <ul className="space-y-2 text-text-secondary text-left">
                      <li>• Codzienne spotkania o 12:34 (tak, o tej porze!)</li>
                      <li>• Ekspertów z wielu dziedzin gotowych pomóc</li>
                      <li>• Ludzi, którzy przeszli podobną drogę</li>
                      <li>• Wsparcie w trudnych momentach</li>
                      <li>• Celebrację sukcesów</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <div className="bg-background-secondary p-4 rounded-lg text-center">
                    <p className="text-sm text-text-secondary">
                      [zdjęcia ze środka]
                    </p>
                  </div>
                  <div className="bg-background-secondary p-4 rounded-lg text-center">
                    <p className="text-sm text-text-secondary">
                      [zdjęcie społeczności, jeśli masz]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
              W społeczności jest największa wartość, ale to nadal nie jest
              wszystko
            </h3>

            <ValueCalculator />
          </div>
        </div>
      </section>

      {/* 2.9. Pricing Section - Theme Locked */}
      <section className="py-20 bg-gradient-locked-pricing section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-locked-white">
              Podsumowując:
            </h2>

            <Card className="card-locked mb-12">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-locked-white">
                      Otrzymujesz:
                    </h4>
                    <ul className="space-y-2 text-sm text-locked-silver">
                      <li>• Kurs Hakowanie Produktywności – 3 000 zł</li>
                      <li>• Społeczność Hakerów – bezcenne</li>
                      <li>• 5 warsztatów eksperckich – 5 000 zł</li>
                      <li>• 9 webinarów – 900 zł</li>
                      <li>• 34 Protipsy – 1 000 zł</li>
                      <li>• 12 Sesji Live Q&A – 15 000 zł</li>
                      <li>• Wersja anglojęzyczna – 4 000 zł</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-4 text-locked-white">
                      Razem: 28 900 zł
                    </p>
                    <div className="bg-gradient-to-r from-ascension-pink to-luminal-magenta p-6 rounded-xl">
                      <p className="text-3xl font-extrabold mb-2 text-locked-white">
                        Twoja cena:
                      </p>
                      <p className="text-5xl font-extrabold text-locked-white">
                        1197 zł
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-locked-white">
                Ile kosztowało mnie zdobycie tej wiedzy?
              </h3>
              <p className="text-lg text-locked-silver mb-6">
                XXXXX zł na kursy, XXXXX zł na książki, XXXXX godzin penelowania
                badań, XXXXX lat doświadczenia w pracy z ludźmi. Ty otrzymujesz
                to wszystko w 6 tygodni.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-locked-white">
                Ile to jest warte dla Ciebie?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="card-locked-transparent p-4 rounded-lg">
                  <p className="font-bold mb-2 text-locked-white">
                    Ile tracisz rocznie przez prokrastynację?
                  </p>
                  <p className="text-locked-silver">
                    Średnio 2-4 godziny dziennie × 365 dni × Twoja stawka
                    godzinowa
                  </p>
                </div>
                <div className="card-locked-transparent p-4 rounded-lg">
                  <p className="font-bold mb-2 text-locked-white">
                    Ile kosztuje Cię stres?
                  </p>
                  <p className="text-locked-silver">
                    Wizyty u lekarzy, leki, wypoczynki "na nerwy"
                  </p>
                </div>
                <div className="card-locked-transparent p-4 rounded-lg">
                  <p className="font-bold mb-2 text-locked-white">
                    Ile tracisz na nieefektywności?
                  </p>
                  <p className="text-locked-silver">
                    Przegapione okazje, niedokończone projekty, chaos w życiu
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="special"
              size="lg"
              className="btn-locked-primary text-xl px-12 py-6 mb-8 shadow-2xl hover:shadow-ascension-pink/25"
            >
              Chcę przestać zwlekać! Zamawiam
              <ArrowRight className="ml-2 h-6 w-6 text-neural-violet" />
            </Button>

            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4 text-locked-white">
                Ile to jest 1197 zł?
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-locked-silver">
                <div>3 obiady w restauracji</div>
                <div>1 para dobrych butów</div>
                <div>2 tankownia auta</div>
                <div>1 weekend w hotelu</div>
              </div>
            </div>

            <CountdownTimer />

            <div className="mt-8">
              <p className="text-lg font-bold text-ascension-pink mb-4">
                Podejmij akcję już teraz...
              </p>
              <p className="text-locked-silver">
                Bo jutro będziesz tego samego miejsca co dziś. A za rok? Nadal
                będziesz mówić "kiedyś to zrobię".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.10. Testimonials - Theme Adaptive */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Czy warto? Sprawdź opinie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  quote: "[Wstawić opinie klientów]",
                  name: "Anna K.",
                  title: "Marketing Manager",
                },
                {
                  quote: "[Kolejna opinia]",
                  name: "Piotr M.",
                  title: "Software Developer",
                },
                {
                  quote: "[Trzecia opinia]",
                  name: "Maria S.",
                  title: "Freelancer",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-text-secondary italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-bold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-4 text-text-primary">
                Zaufali mi nie tylko ludzie, ale i wielkie firmy i
                międzynarodowe instytucje
              </h3>
              <div className="bg-background-primary p-8 rounded-lg">
                <p className="text-text-secondary">[image4 - loga firm]</p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                Ufam Ci, Ludwik. Chcę ruszyć z miejsca. Zamawiam
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2.11. Guarantee - Theme Adaptive */}
      <section className="py-16 bg-gradient-to-r from-color-success/10 to-color-info/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-8 border-4 border-color-success">
              <ShieldCheck className="h-16 w-16 text-color-success mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-text-primary">
                Gwarancja
              </h2>
              <p className="text-lg text-text-secondary">
                Jeśli cokolwiek Ci się nie spodoba - masz{" "}
                <strong>30 dni na zwrot, bez zadawania pytań.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.12. Objections & FAQ - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Co Cię powstrzymuje?
            </h2>

            <div className="space-y-8 mb-16">
              {[
                {
                  title: "Mam już kursy produktywności i nie zadziałały",
                  content:
                    "To dlatego, że były ogólne. Hakowanie Produktywności jest spersonalizowane pod Ciebie. Nie ma jednego uniwersalnego systemu - jest Twój system, który faktycznie będzie działał w Twoim życiu.",
                },
                {
                  title: "Nie będę mieć czasu, żeby przerabiać kurs",
                  content:
                    "Jeśli nie masz czasu na naukę produktywności, to tym bardziej jej potrzebujesz! Program jest zaprojektowany dla zapracowanych ludzi - 15-20 minut dziennie wystarczy.",
                },
                {
                  title: "Nie umiem utrzymać dyscypliny",
                  content:
                    "Właśnie dlatego potrzebujesz tego kursu! Nie liczymy na Twoją dyscyplinę - budujemy systemy, które działają nawet gdy nie masz ochoty.",
                },
                {
                  title: "Czy to mi się zwróci?",
                  content:
                    "Jeśli zaoszczędzisz 1 godzinę dziennie przez rok, to 365 godzin × Twoja stawka godzinowa. Nawet przy 50 zł/h to 18 250 zł rocznie. Inwestycja 1197 zł zwróci się w pierwszy miesiąc.",
                },
                {
                  title: "Nie ufam guru z Internetu",
                  content:
                    "Słusznie! Nie jestem guru, jestem praktykiem. XXXXX lat doświadczenia, XXXXX klientów, współpraca z największymi firmami w Polsce. Sprawdź moje referencje.",
                },
                {
                  title: "Wiedza jest za darmo w Internecie",
                  content:
                    "Tak, ale nie masz czasu przebrnąć przez tysiące godzin materiałów, żeby znaleźć te 5% wartościowych treści. Ja już to zrobiłem za Ciebie.",
                },
                {
                  title: "Nie jestem hakerem",
                  content:
                    "Hakowanie to myślenie poza schematami i znajdowanie lepszych rozwiązań. Każdy może być hakerem produktywności - to kwestia podejścia, nie umiejętności technicznych.",
                },
              ].map((objection, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-text-primary">
                      {objection.title}
                    </h3>
                    <p className="text-text-secondary">{objection.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <FAQAccordion />

            <div className="text-center mt-12">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                Rozwiałeś moje wątpliwości. Chcę ruszyć z miejsca. Zamawiam
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
