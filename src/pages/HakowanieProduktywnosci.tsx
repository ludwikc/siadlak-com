import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Heart,
  TrendingUp,
  ListChecks,
  HelpCircle,
} from "lucide-react";

import CountdownTimer from "@/components/sales/CountdownTimer";
import FAQAccordion from "@/components/sales/FAQAccordion";
import ValueCalculator from "@/components/sales/ValueCalculator";
import { HAKOWANIE_OBJECTIONS } from "@/data/course-objections";

export default function HakowanieProduktywnosci() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-12 md:py-20 bg-void relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/20 to-depth/20 backdrop-blur-sm border border-electric/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg animate-pulse">
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  OSTATNIE MIEJSCA
                </span>
                <span className="text-xs sm:text-sm text-locked-silver">
                  • Grupa zamyka się za 3 dni
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              Twój mózg nie jest zepsuty.{" "}
              <span className="bg-gradient-text-brand-dark">Jest jak telefon z 47 apkami w tle</span>{" "}
              — potrzebujesz zamknąć te, które Ci nie służą
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Program, który nie doda Ci kolejnego systemu produktywności. Pomoże Ci znaleźć Twój własny.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  100+ uczestników
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-electric fill-electric"
                  />
                ))}
                <span className="ml-2 text-sm sm:text-base font-semibold text-locked-white">
                  4.9/5.0
                </span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="relative group inline-block w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric via-depth to-electric rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
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
                      Sprawdź, jak działasz pod presją →
                    </span>
                  </span>
                </Button>
              </div>

              {/* Scarcity */}
              <p className="text-sm sm:text-base font-semibold text-locked-white">
                <span className="text-electric">
                  Grupa ograniczona do 50 osób
                </span>{" "}
                • Zostało{" "}
                <span className="text-electric font-bold text-lg sm:text-xl">
                  16 miejsc
                </span>
              </p>
            </div>

            {/* Secondary Link */}
            <div className="text-center">
              <a 
                href="https://buy.siadlak.com/checkout/program-produktywnosc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-locked-silver hover:text-depth transition-colors underline"
              >
                Instaluję Program Produktywność →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROZPOZNANIE PROBLEMU */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Znasz ten dzień?
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Siadasz do pracy. Otwierasz laptopa. Mija godzina — i jedyne, co udało Ci się zrobić, to sprawdzić trzy razy pocztę i przestawić ikonki na pulpicie. Wszyscy to znamy. Pytanie brzmi — co z tym robisz?
              </p>
              <p className="text-lg text-muted-foreground mt-6">
                Sprawdź, ile z tych sytuacji jest Twoich:
              </p>
            </div>

            {/* Problem Categories */}
            <div className="space-y-12 mb-12">
              {/* Category 1: Focus Problems */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                    <Focus className="h-6 w-6 text-electric" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    Problemy z koncentracją
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: 'ciągle się rozpraszasz na telefon, social media i inne "pilne" sprawy?',
                      icon: MousePointer,
                    },
                    {
                      text: "czujesz się przytłoczony ilością zadań i nie wiesz, od czego zacząć?",
                      icon: Target,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-md p-5 sm:p-6 border border-muted transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                          <problem.icon className="h-6 w-6 text-dim" />
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
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
                  <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-electric" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    Problemy z działaniem
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: "prokrastynujesz i przekładasz, choć terminy gonią?",
                      icon: Clock,
                    },
                    {
                      text: 'odkładasz ważne rzeczy "na potem", a potem nigdy nie nadchodzi?',
                      icon: Repeat,
                    },
                    {
                      text: "zaczynasz mnóstwo projektów, ale kończysz niewiele?",
                      icon: Target,
                    },
                    {
                      text: "chcesz wprowadzić nowe nawyki, ale po tygodniu wracasz do starych?",
                      icon: CheckCircle2,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-md p-5 sm:p-6 border border-muted transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                          <problem.icon className="h-6 w-6 text-dim" />
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
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
                  <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                    <Battery className="h-6 w-6 text-electric" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    Problemy z energią
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      text: 'kończy Ci się paliwo w połowie dnia i dalej jedziesz "na oparach"?',
                      icon: Battery,
                    },
                    {
                      text: "masz wrażenie, że pracujesz non-stop, ale efektów nie widać?",
                      icon: Brain,
                    },
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-md p-5 sm:p-6 border border-muted transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                          <problem.icon className="h-6 w-6 text-dim" />
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed pt-1.5 text-sm sm:text-base">
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
              <div className="relative text-center p-8 sm:p-10 bg-white rounded-md border border-muted">
                <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-depth/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-electric" />
                </div>
                <p className="text-lg sm:text-xl text-foreground font-medium mb-4">
                  Jeśli zaznaczyłeś więcej niż trzy — nie martw się. Większość ludzi zaznacza wszystkie.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground">
                  I to nie jest Twoja wina. A już na pewno nie jest kwestia "braku dyscypliny" — to zdanie powinno zostać wymazane z historii rozwoju osobistego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTEKST — DLACZEGO TAK JEST */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Dwa zasoby, o które walczą największe korporacje świata
              </h2>
               <div className="flex justify-center items-center gap-8 text-4xl font-bold text-electric">
                <span>Twój czas ⏱️</span>
                <span className="text-muted-foreground text-2xl">i</span>
                <span>Twoja uwaga 👀</span>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Każda aplikacja na Twoim telefonie ma zespół inżynierów, których jedynym zadaniem jest sprawić, żebyś w nią zaglądał częściej. Każdy notification to mały haczyk — i nie mówię tego metaforycznie. Dosłownie zatrudniają psychologów behawioralnych, żeby te haczyki były skuteczniejsze.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-foreground">
                    Kilka liczb, które warto znać:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      • Dzisiaj w ciągu jednej doby dostajemy więcej informacji
                      niż człowiek średniowiecza przez całe życie
                    </li>
                    <li>
                      • Dr Gloria Mark z UC Irvine zmierzyła, że średni czas
                      skupienia spadł do 8 sekund. Złota rybka — o ile wierzysz w ten mit — podobno ma 9.
                    </li>
                    <li>
                      • Każde przerwanie w pracy kosztuje 23 minuty powrotu do
                      pełnej koncentracji. Policz, ile razy dziennie ktoś Ci pisze na Slacku.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-foreground">
                    Moja filozofia:
                  </h4>
                  <blockquote className="text-lg italic text-electric font-medium mb-4">
                    "Często mówię, że skupienie będzie superumiejętnością
                    nadchodzących lat."
                  </blockquote>
                  <p className="text-muted-foreground">
                    Nie mówię tego, żeby brzmiało mądrze. Mówię to, bo naprawdę tak uważam — i widzę to codziennie u ludzi, z którymi pracuję.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-depth/10 to-electric/10 rounded-xl">
               <p className="text-2xl font-bold text-foreground">
                Ale mam na to sposób 🫡.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBIETNICA / FILOZOFIA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Produktywność to mięsień.{" "}
              <span className="text-electric">Ale nikt Ci nie powiedział, że siłownia jest otwarta</span>
            </h2>

            <div className="glass-card p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Im częściej go ćwiczysz, tym silniejszy się staje. Ale tak jak w
                treningu — musisz wiedzieć, <strong>jak</strong> ćwiczyć,
                żeby nie zrobić sobie krzywdy.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wiesz, co robi większość kursów produktywności? Mówi Ci, żebyś wstawał o 5 rano, robił cold plunge, medytował 40 minut i pisał dziennik wdzięczności. A potem, gdy to nie działa, mówi: "Nie starasz się wystarczająco."
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                To jest jak sprzedawanie butów w jednym rozmiarze i obwinianie ludzi, że mają złe stopy.
              </p>
            </div>

            <Card className="glass-card border-l-4 border-l-depth mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Tim Cook może wstawać o 4:30, bo ma armię asystentów i nie
                  musi sam robić zakupów.{" "}
                  <strong className="text-foreground font-bold">
                    Liczy się to, co robisz — nie to, o której to robisz.
                  </strong>
                </p>
                <p className="text-muted-foreground">
                  Czy to brzmi jak herezja w świecie rozwoju osobistego? Z pewnością. Czy to jest prawda? Absolutnie. Czy to oznacza, że rutyny poranne nie mają sensu? Zupełnie nie — oznacza to, że Twoja rutyna musi być <strong className="text-foreground">Twoja</strong>.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-electric/20 to-depth/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Nie kopia rutyn miliarderów. Nie podrabianie czyjegoś systemu.
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Twój unikalny sposób na maksymalizację wydajności — przy
                zachowaniu zdrowia psychicznego.
              </p>
              <p className="text-lg text-electric font-bold">
                I to jest dokładnie to, co robimy w Programie Produktywność.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WIZJA PRZYSZŁOŚCI */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Future Vision Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/20 to-depth/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-electric" />
                <span className="text-sm font-bold text-electric uppercase">
                  Twoja przyszłość
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Jak wyglądałoby Twoje życie, gdybyś...
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Nie poniedziałek — bo w poniedziałek wszyscy mają motywację. Wyobraź sobie zwykły wtorek:
              </p>
            </div>

            {/* Dream Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
              {[
                {
                  text: "...opierał się rozpraszaczom i kończył to, co zacząłeś?",
                  icon: ShieldCheck,
                },
                {
                  text: "...miał pełną kontrolę nad swoim czasem i uwagą?",
                  icon: Target,
                },
                {
                  text: '...kończył każdy dzień z poczuciem "dobra robota" zamiast "znowu nic"?',
                  icon: CheckCircle2,
                },
                {
                  text: "...realizował swoje najważniejsze cele bez wypalenia?",
                  icon: Flame,
                },
                {
                  text: "...cieszył się wolnym czasem bez poczucia winy, że powinieneś coś robić?",
                  icon: Heart,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-md p-6 border border-muted hover:border-electric/30 transition-colors"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-electric/20 to-depth/20 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-7 w-7 text-electric" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed text-sm sm:text-base">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-4">
              <p className="text-xl text-foreground font-bold">
                To nie jest fantazja. To jest umiejętność. I da się jej nauczyć.
              </p>
            </div>

            {/* Konkretne rezultaty */}
            <div className="text-center mb-12 mt-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/10 to-depth/10 px-5 py-2 rounded-full mb-6">
                <TrendingUp className="h-5 w-5 text-electric" />
                <span className="text-sm font-bold text-electric uppercase">
                  Konkretne rezultaty
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Mam dla Ciebie program, który:
              </h3>
              <p className="text-lg text-muted-foreground mb-12">
                Każda umiejętność z konkretnym terminem realizacji:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    benefit:
                      "pokaże Ci, jak utrzymać skupienie przez dłuższy czas (nawet w open space — tak, da się)",
                    timeframe: "W 3 tygodnie",
                    icon: Brain,
                  },
                  {
                    benefit:
                      "nauczy Cię rozpoznawać i eliminować największe pożeracze czasu",
                    timeframe: "W 2 tygodnie",
                    icon: Clock,
                  },
                  {
                    benefit:
                      "pomoże Ci zbudować system priorytetów, który faktycznie działa",
                    timeframe: "W 3 tygodnie",
                    icon: Target,
                  },
                  {
                    benefit:
                      "da Ci narzędzia do organizacji pracy i życia bez stresu",
                    timeframe: "W 2 tygodnie",
                    icon: ListChecks,
                  },
                  {
                    benefit:
                      "wytrenuje w Tobie nawyki, które się utrzymają (bez siłowania się z sobą)",
                    timeframe: "W 4 tygodnie",
                    icon: TrendingUp,
                  },
                  {
                    benefit:
                      "pokaże, jak wykorzystać AI do zwiększenia wydajności (bez buzzwordów, praktycznie)",
                    timeframe: "W 2 tygodnie",
                    icon: Sparkles,
                  },
                  {
                    benefit:
                      "wzmocni Twoją siłę mentalną i odporność na presję",
                    timeframe: "W 3 tygodnie",
                    icon: ShieldCheck,
                  },
                  {
                    benefit:
                      "nauczy Cię odpoczywać tak, żeby faktycznie się zregenerować",
                    timeframe: "W 2 tygodnie",
                    icon: Battery,
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group glass-card border-0 bg-card transition-colors"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-electric/10 rounded-xl flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-electric" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-electric bg-electric/10 px-2.5 py-1 rounded-full">
                              <Clock className="h-3 w-3" />
                              {item.timeframe}
                            </span>
                          </div>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                            {item.benefit}
                          </p>
                        </div>

                        <div className="flex-shrink-0 w-6 h-6 bg-electric/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-electric" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-electric/10 to-depth/10 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-6 text-foreground">
                A przy okazji:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "odzyskasz radość życia i poczucie sensu",
                  "poprawisz relacje z rodziną i przyjaciółmi",
                  "zwiększysz swoje zarobki dzięki większej efektywności",
                  "będziesz miał więcej energii na hobby i pasje",
                  'poczujesz dumę ze swoich osiągnięć (a nie ulgę, że "jakoś się udało")',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-electric mr-3 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO ZAWIERA PROGRAM — MODUŁY */}
      <section className="py-16 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Co zawiera Program Produktywność?
              </h2>
              <p className="text-lg text-electric font-medium mb-4">
                6 modułów gotowych do "zainstalowania" w Twoim życiu
              </p>
              <p className="text-dim mb-8">
                Nie musisz zmieniać wszystkiego naraz — instalujesz moduł po module, w swoim tempie.
              </p>
            </div>

            {/* Course Portal Preview */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Zajrzyj do środka
                </h3>
                <p className="text-dim">
                  Zobacz, jak wygląda platforma i jak działa system kursu
                </p>
              </div>
              <div className="relative rounded-md overflow-hidden border border-muted">
                <img
                  src="/src/assets/portal-hakprod.png"
                  alt="Platforma Programu Produktywność - widok modułu z video"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Focus",
                  subtitle: "Moduł 1",
                  icon: Brain,
                  gradient: "from-electric to-depth",
                  description:
                    "Jak trenować koncentrację i radzić sobie z rozproszeniami w świecie, który jest zaprojektowany, żebyś się nie skupił. Tak — da się medytować nawet na koncercie Metalliki. Prawie.",
                  duration: "2 tygodnie",
                  lessons: 8,
                },
                {
                  title: "Priorytety",
                  subtitle: "Moduł 2",
                  icon: Target,
                  gradient: "from-electric to-depth",
                  description:
                    'Słowo "priorytet" istnieje w liczbie pojedynczej nie bez powodu. "Lista priorytetów" to oksymoron. W tym module zbudujesz system wybierania tego, co najważniejsze — i odrzucania reszty bez poczucia winy.',
                  duration: "2 tygodnie",
                  lessons: 7,
                },
                {
                  title: "Organizacja",
                  subtitle: "Moduł 3",
                  icon: Clock,
                  gradient: "from-electric to-depth",
                  description:
                    "Nie kolejna apka z akronimem w nazwie. System zarządzania zadaniami, który nie zawali się pod presją — bo życie regularnie rzuca kłody pod nogi i nie zamierza przestać.",
                  duration: "2 tygodnie",
                  lessons: 9,
                },
                {
                  title: "Nawyki",
                  subtitle: "Moduł 4",
                  icon: Sparkles,
                  gradient: "from-electric to-depth",
                  description:
                    "Większość ludzi próbuje zmienić nawyki siłą woli. To jest jak ręczne zbieranie piasku na plaży — fala i tak przyniesie nowy bałagan. Ten moduł uczy Cię zmieniać kierunek fali.",
                  duration: "3 tygodnie",
                  lessons: 10,
                },
                {
                  title: "Narzędzia (z AI)",
                  subtitle: "Moduł 5",
                  icon: Zap,
                  gradient: "from-electric to-depth",
                  description:
                    "AI nie zastąpi Twojego myślenia. Ale może przejąć te 40% pracy, której i tak nie lubisz. Pokażę Ci jak — praktycznie, bez hype'u.",
                  duration: "2 tygodnie",
                  lessons: 6,
                },
                {
                  title: "Siła mentalna",
                  subtitle: "Moduł 6",
                  icon: ShieldCheck,
                  gradient: "from-electric to-depth",
                  description:
                    "Bo najlepszy system produktywności nie pomoże, jeśli Twoja głowa nie jest w tym z Tobą. A bywa, że nie jest — i to też jest w porządku. Ale da się z tym pracować.",
                  duration: "2 tygodnie",
                  lessons: 8,
                },
              ].map((module, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-md p-6 sm:p-8 border border-muted"
                >
                  {/* Progress Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-depth/10 to-electric/10 px-3 py-1.5 rounded-full border border-depth/20">
                    <span className="text-xs font-bold text-electric">
                      {index + 1}/6
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-5">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${module.gradient} rounded-md flex items-center justify-center border border-white/20`}
                      >
                        <module.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-md" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1 leading-tight">
                        {module.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground font-medium">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 bg-muted rounded-lg px-3 py-1.5">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {module.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-muted rounded-lg px-3 py-1.5">
                      <Brain className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {module.lessons} lekcji
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Install Button */}
                  <button className="w-full bg-brand-gradient text-white font-bold py-3 sm:py-3.5 px-6 rounded-[4px] flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm sm:text-base">ODBLOKOWUJ</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPOŁECZNOŚĆ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Sam kurs to dopiero początek
            </h2>

            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Serce Programu Produktywność to społeczność — ludzie, którzy postanowili wziąć swoje życie w swoje ręce. I robią to razem.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Wiem, że "społeczność" brzmi jak kolejne słowo z bingo marketingowego. Ale tutaj chodzi o coś prostszego — o ludzi, do których możesz się odezwać, kiedy chcesz to wszystko rzucić w kąt. Bo takie momenty przyjdą. I lepiej mieć wtedy kogoś, kto powie "wiem, jak to jest" niż kolejny motywacyjny post na Instagramie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4 text-foreground">
                      W społeczności znajdziesz:
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-left">
                      <li>• Codzienne spotkania o 12:34 (tak, o tej porze — bo kto potrafi zapamiętać 12:34, ten zwraca uwagę na szczegóły)</li>
                      <li>• Ekspertów z wielu dziedzin gotowych pomóc</li>
                      <li>• Ludzi, którzy przeszli dokładnie tę samą drogę</li>
                      <li>• Wsparcie w trudnych momentach</li>
                      <li>• Celebrację sukcesów — bo sukcesy trzeba świętować, nawet te małe</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      [zdjęcia ze środka społeczności]
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      [zdjęcie społeczności]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
              W społeczności jest największa wartość, ale to nadal nie jest
              wszystko
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Przez lata dobudowałem do programu tyle materiałów, że sam się czasem gubię. Więc podsumowuję — dla nas obydwu:
            </p>

            <ValueCalculator />
          </div>
        </div>
      </section>

      {/* CENNIK / PODSUMOWANIE */}
      <section className="py-20 bg-void relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-locked-white">
              Podsumowując — oto co dostajesz:
            </h2>

            <Card className="card-locked mb-12">
              <CardContent className="p-6 sm:p-8">
                {/* Value Stack */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-6 text-locked-white text-center">
                    Otrzymujesz:
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        item: "Program Produktywność (6 modułów)",
                        value: 3000,
                        color: "from-purple-500 to-purple-600",
                      },
                      {
                        item: "Społeczność",
                        value: 0,
                        special: "bezcenne",
                        color: "from-pink-500 to-rose-600",
                      },
                      {
                        item: "5 warsztatów eksperckich",
                        value: 5000,
                        color: "from-blue-500 to-blue-600",
                      },
                      {
                        item: "9 webinarów",
                        value: 900,
                        color: "from-green-500 to-green-600",
                      },
                      {
                        item: "34 Protipy",
                        value: 1000,
                        color: "from-yellow-500 to-orange-500",
                      },
                      {
                        item: "12 Sesji Live Q&A",
                        value: 15000,
                        color: "from-red-500 to-pink-600",
                      },
                      {
                        item: "Wersja anglojęzyczna",
                        value: 4000,
                        color: "from-indigo-500 to-purple-600",
                      },
                    ].map((valueItem, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm sm:text-base text-locked-silver font-medium">
                            {valueItem.item}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-locked-white">
                            {valueItem.special ||
                              `${valueItem.value.toLocaleString("pl-PL")} zł`}
                          </span>
                        </div>
                        <div className="relative h-2 bg-locked-gray/30 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${valueItem.color} rounded-full transition-all duration-1000 group-hover:opacity-90`}
                            style={{
                              width: valueItem.special
                                ? "100%"
                                : `${Math.min((valueItem.value / 15000) * 100, 100)}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment vs Value */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="text-center bg-locked-gray/20 p-6 rounded-xl border-2 border-locked-gray/30">
                    <p className="text-sm text-locked-silver uppercase tracking-wide mb-2">
                      Łączna wartość
                    </p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-locked-white mb-2">
                      28 900 zł
                    </p>
                    <div className="flex items-center justify-center gap-2 text-locked-silver text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span>Wartość rynkowa</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 z-10">
                      <div className="text-center">
                        <div className="text-xs font-bold uppercase">
                          Oszczędzasz
                        </div>
                        <div className="text-lg font-extrabold">96%</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-electric to-depth p-6 sm:p-8 rounded-2xl shadow-2xl border-4 border-white/10">
                      <p className="text-sm text-white/90 uppercase tracking-wide mb-2 text-center">
                        Twoja inwestycja
                      </p>
                      <p className="text-5xl sm:text-6xl font-extrabold text-white mb-2 text-center">
                        1 197 zł
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Dostęp na zawsze</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ludwik's comment */}
                <div className="mt-8 text-left">
                  <p className="text-sm text-locked-silver leading-relaxed">
                    Wiem, że widzisz tę kalkulację i myślisz "no tak, każdy tak pisze." I masz rację — każdy tak pisze. Różnica jest taka, że ja naprawdę policzyłem, ile czasu i pieniędzy włożyłem w te materiały, i ta liczba jest prawdziwa. Ale przekonać Cię może tylko jedno — Twoje własne doświadczenie. Dlatego jest gwarancja zwrotu (o tym za chwilę).
                  </p>
                </div>

                {/* ROI */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-locked-gray/20 px-4 py-2 rounded-full border border-locked-gray/30">
                    <Sparkles className="h-4 w-4 text-electric" />
                    <span className="text-sm text-locked-silver">
                      Zwrot z inwestycji:{" "}
                      <strong className="text-locked-white">
                        już w pierwszym miesiącu
                      </strong>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PERSPEKTYWA CENOWA */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-locked-white">
                Ile to jest 1 197 zł?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-locked-silver mb-8">
                <div>3 obiady w restauracji</div>
                <div>1 para dobrych butów (które za pół roku i tak przestaną być modne)</div>
                <div>2 tankowania auta</div>
                <div>1 weekend w hotelu</div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-locked-white">
                A ile kosztuje Cię brak produktywności?
              </h3>
              <p className="text-locked-silver mb-6 max-w-2xl mx-auto">
                Nie pytam, żeby straszyć. Pytam, żebyś policzył. Średnio 2-4 godziny dziennie tracone na prokrastynację × 365 dni × Twoja stawka godzinowa. Nawet przy 50 zł/h to 18 250 zł rocznie. Inwestycja 1 197 zł zwróci się szybciej niż myślisz.
              </p>
            </div>

            <a
              href="https://buy.siadlak.com/checkout/program-produktywnosc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="special"
                size="lg"
                className="btn-locked-primary text-xl px-12 py-6 mb-8 shadow-2xl focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
              >
                Chcę przestać zwlekać. Zamawiam
                <ArrowRight className="ml-2 h-6 w-6 text-depth" />
              </Button>
            </a>

            {/* COUNTDOWN / URGENCY */}
            <CountdownTimer />

            <div className="mt-8">
              <p className="text-lg text-locked-silver max-w-2xl mx-auto">
                Wiesz, jaki jest najdroższy dzień w roku? Jutro. Bo "jutro" nigdy nie nadchodzi — zawsze jest "dziś". A dziś masz przed sobą decyzję, którą za miesiąc albo będziesz świętować, albo będziesz znowu przeglądać tę stronę.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / OPINIE */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/10 to-depth/10 px-5 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 text-electric" />
                <span className="text-sm font-bold text-electric uppercase">
                  Sprawdzone przez setki osób
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Czy warto? Sprawdź opinie
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Zobacz, jak program zmienił sposób działania innych uczestników.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {[
                {
                  quote:
                    "Dzięki programowi w końcu opanowałem chaos w mojej głowie. Mam system, który działa nawet w najbardziej stresujących momentach. I co najważniejsze — nie muszę o nim pamiętać, bo on sam mi przypomina, co teraz.",
                  name: "Anna K.",
                  title: "Marketing Manager",
                  role: "Marketing",
                  rating: 5,
                  verified: true,
                  beforeEmotion: "Przytłoczona",
                  afterEmotion: "Zorganizowana",
                  avatar: "AK",
                },
                {
                  quote:
                    "Jako programista spędzałem godziny na pseudo-pracy. Przeglądarka, Slack, Stack Overflow, kawa, znowu Slack. Teraz kończę rzeczy dwa razy szybciej i mam czas na życie, które nie jest monitorem.",
                  name: "Piotr M.",
                  title: "Software Developer",
                  role: "IT",
                  rating: 5,
                  verified: true,
                  beforeEmotion: "Rozproszony",
                  afterEmotion: "Skupiony",
                  avatar: "PM",
                },
                {
                  quote:
                    'Nigdy nie byłam "osobą produktywną". Teraz wiem, że po prostu używałam złych narzędzi. To jak odkrycie, że przez lata próbowałaś wbijać gwoździe śrubokrętem.',
                  name: "Maria S.",
                  title: "Freelancer",
                  role: "Biznes",
                  rating: 5,
                  verified: true,
                  beforeEmotion: "Zagubiona",
                  afterEmotion: "Pewna siebie",
                  avatar: "MS",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-md p-6 border border-muted"
                >
                  {/* Star Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-electric fill-electric"
                          />
                        ),
                      )}
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1.5 bg-electric/10 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="h-3.5 w-3.5 text-electric" />
                        <span className="text-xs font-bold text-electric">
                          Zweryfikowany
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative mb-6">
                    <div className="absolute -top-2 -left-2 text-6xl text-depth/20 font-serif leading-none">
                      "
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed relative z-10 italic">
                      {testimonial.quote}
                    </p>
                  </blockquote>

                  {/* Before/After */}
                  <div className="flex items-center gap-3 mb-5 p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-2 h-2 bg-dim rounded-full"></div>
                      <span className="text-xs text-dim">
                        {testimonial.beforeEmotion}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-2 h-2 bg-electric rounded-full"></div>
                      <span className="text-xs font-bold text-electric">
                        {testimonial.afterEmotion}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                    <div className="bg-electric/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-electric">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="text-center mb-8">
              <div className="bg-white p-8 rounded-xl border border-muted">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-electric" />
                    <span className="font-bold text-foreground">1 240+</span>
                    uczestników
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-5 w-5 text-electric" />
                    <span className="font-bold text-foreground">4.9/5</span>
                    średnia ocena
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-electric" />
                    <span className="font-bold text-foreground">95%</span>
                    poleca program
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://buy.siadlak.com/checkout/program-produktywnosc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
                >
                  Dołączam
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GWARANCJA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-8 border-4 border-electric">
              <ShieldCheck className="h-16 w-16 text-electric mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Gwarancja
              </h2>
              <p className="text-xl text-foreground font-bold mb-4">
                30 dni. Bez pytań. Bez tłumaczenia się. Bez maili z "czy na pewno chcesz zrezygnować?"
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Jeśli cokolwiek Ci się nie spodoba — piszesz, zwracam pieniądze. Koniec historii.
              </p>
              <p className="text-base text-muted-foreground">
                Dlaczego daję taką gwarancję? Bo wiem, że ten program działa. 1 240+ osób to potwierdziło. Ale rozumiem, że Ty tego jeszcze nie wiesz — i nie oczekuję, że mi zaufasz na podstawie jednej strony w internecie. Dlatego ryzyko biorę na siebie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBIEKCJE & FAQ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/10 to-depth/10 px-5 py-2 rounded-full mb-6">
                <HelpCircle className="h-5 w-5 text-electric" />
                <span className="text-sm font-bold text-electric uppercase">
                  Rozwiewamy wątpliwości
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Co Cię powstrzymuje?
              </h2>
            </div>

            {/* Myth vs Reality Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {HAKOWANIE_OBJECTIONS.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-md overflow-hidden border border-muted hover:border-electric/30 transition-colors"
                >
                  <div className="bg-muted p-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="relative bg-muted p-4 rounded-lg border-l-4 border-dim">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-dim flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-dim uppercase mb-1">
                            Mit
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {item.myth}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                    </div>

                    <div className="relative bg-electric/5 p-4 rounded-lg border-l-4 border-electric">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-electric uppercase mb-1">
                            Rzeczywistość
                          </p>
                          <p className="text-sm text-foreground">
                            {item.reality}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                  Najczęściej zadawane pytania
                </h3>
              </div>
              <FAQAccordion />
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://buy.siadlak.com/checkout/program-produktywnosc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="text-base sm:text-lg px-8 py-6 group focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
                >
                  Rozwiałeś moje wątpliwości. Zamawiam
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ZAMKNIĘCIE + P.S. */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Ostatnie słowo
              </h2>
              <div className="text-left space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Wiesz, co odkryłem po latach pracy z ludźmi?</p>
                <p>
                  Że produktywność nie polega na robieniu więcej. Polega na robieniu tego, co ważne — i odpuszczaniu reszty bez poczucia winy.
                </p>
                <p>To brzmi prosto. I jest proste. Ale proste nie znaczy łatwe.</p>
                <p>
                  Jeśli czujesz, że to jest to — dołącz. Jeśli jeszcze się wahasz — spróbuj darmowego wyzwania i sam zdecyduj. Tak czy inaczej — dziękuję, że jesteś. Samo to, że doczytałeś do tego miejsca, mówi mi coś ważnego o Tobie.
                </p>
                <p className="text-foreground font-medium">-- Ludwik</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <a
                href="https://buy.siadlak.com/checkout/program-produktywnosc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="special"
                  size="lg"
                  className="text-base sm:text-lg px-8 py-4 sm:py-6 group"
                >
                  Dołączam do Programu Produktywność
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                variant="secondary"
                size="lg"
                className="text-base px-6 py-3"
              >
                Najpierw sprawdzam darmowe 4-dniowe wyzwanie →
              </Button>
            </div>

            {/* P.S. Ladder */}
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed border-t border-muted pt-8">
              <p>
                <strong className="text-foreground">P.S.</strong> Grupa jest ograniczona do 50 osób. Nie dlatego, żeby tworzyć sztuczny pośpiech — dlatego, że chcę mieć czas dla każdego uczestnika. Kiedy grupa się zapełni, otwieram następną. Ale ta konkretna zamyka się za kilka dni.
              </p>
              <p>
                <strong className="text-foreground">P.P.S.</strong> Jeśli masz pytania, na które nie znalazłeś odpowiedzi na tej stronie — napisz do mnie. Odpowiadam osobiście.
              </p>
              <p>
                <strong className="text-foreground">P.P.P.S.</strong> A jeśli czytasz ten trzeci dopisek, to znaczy, że chcesz to zrobić, ale jeszcze czegoś Ci brakuje. Może tego: masz 30 dni na zwrot. Jedyne ryzyko to ryzyko, że zadziała.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
