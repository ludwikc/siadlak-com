import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { ArrowRight, Brain, Clock, Mic2, MapPin, Video } from "@/lib/icons";
import { Link } from "react-router-dom";
import lifehackerzyLogo from "@/assets/lifehackerzy-logo.png?w=80;160&format=avif;webp;png&as=picture";
import communityCallImage from "/lovable-uploads/lifehackerzy-community-call.png";
import keynoteImage from "/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.jpeg";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getProgramEntities } from "@/lib/structured-data";
import OptimizedImage from "@/components/ui/OptimizedImage";

const decisionTree = [
  {
    problem: "Chaos w głowie i brak czasu",
    program: "Produktywność",
    link: "/program/produktywnosc",
  },
  {
    problem: "Stres, presja, poczucie, że zaraz się złamiesz",
    program: "Odporność Psychiczna",
    link: "/program/odpornosc",
  },
  {
    problem: "Autopilot - dni lecą, a Ty nie pamiętasz, gdzie poszły",
    program: "Uważność ",
    link: "/program/uwaznosc",
  },
  {
    problem: "\u201EKim jestem, kiedy zdejm\u0119 wszystkie maski?\u201D",
    program: "Męskość",
    link: "/program/meskosc",
  },
  {
    problem: "Wszystko powyżej naraz - i czujesz, że problem jest głębiej",
    program: "LifeOS: System Upgrade",
    link: "/discovery",
  },
];

export default function Program() {
  return (
    <Layout>
      <SEO {...getSEOConfig("/program")} jsonLd={getProgramEntities()} />
      {(() => { const t = getTopicalConfig("/program"); return t ? <TopicalMeta {...t} /> : null; })()}
      {/* 1. HERO - bg-void-glow (DARK) */}
      <section className="relative py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1] tracking-[-0.02em]">
              Aplikacje Mentalne
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-10 max-w-3xl mx-auto leading-[1.2]">
              Programy, które instalujesz raz - a&nbsp;zostają z&nbsp;Tobą na zawsze.
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-dim leading-relaxed text-left">
              <p>
                Przez lata zbierałeś narzędzia, metody, techniki. Niektóre pomogły. Większość - dodała kolejną warstwę
                na to, co już było skomplikowane.
              </p>
              <p>
                Te programy działają inaczej. Nie dodają - zdejmują. Zdejmują sukno, pod którym Twój diament był cały
                czas.
              </p>
              <p>
                Każdy z&nbsp;nich to 4–6 tygodni pracy z&nbsp;konkretnym problemem. Nie musisz do nich „wracać", bo nie
                są kursami do „przerobienia". Są zmianami w&nbsp;sposobie, w&nbsp;jaki myślisz. A&nbsp;te - raz
                zainstalowane - zostają.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DECISION TREE - bg-void (DARK) */}
      <section className="py-16 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">Nie wiesz, od czego zacząć?</h3>
            <p className="text-lg text-dim mb-10 text-center">
              Odpowiedz sobie na jedno pytanie:{" "}
              <strong className="text-white/90">co najbardziej przeszkadza Ci dzisiaj?</strong>
            </p>

            <div className="space-y-4">
              {decisionTree.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="group flex items-center justify-between gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5 md:p-6 transition-colors hover:border-electric/30 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-electric"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg text-dim group-hover:text-white/90 transition-colors leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-electric font-bold text-sm md:text-base">{item.program}</span>
                    <ArrowRight className="w-4 h-4 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-sm text-dim mt-6 text-center">
              A&nbsp;jeśli nadal nie wiesz - przescrolluj niżej. Opisy pomogą.
            </p>
          </div>
        </div>
      </section>

      {/* THE CUT - dark → dark (visual separator before apps) */}

      {/* 3-6. APP CARDS - bg-void-glow (DARK) */}
      <section className="py-16 bg-void-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* APP #1: Produktywność */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  🧠
                </span>
                <Badge
                  variant="outline"
                  className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  APLIKACJA #1
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Produktywność</h3>
              <p className="text-sm text-dim mb-6">
                4–6 tygodni · Instalacja na zawsze ·{" "}
                <Link to="/testimonials" className="text-electric hover:underline">
                  100+ uczestników · 4.9/5.0
                </Link>
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla tych, którzy testowali każdy system, kalendarz
                i&nbsp;aplikację - a&nbsp;ich lista zadań i&nbsp;tak wygląda jak pole bitwy z&nbsp;samym sobą.
              </p>

              <p className="text-base md:text-lg text-dim mb-6 leading-relaxed">
                To nie jest kolejne narzędzie. To jest zmiana tego, jak podchodzisz do pracy, czasu i&nbsp;energii. Raz
                zainstalowana - zostaje z&nbsp;Tobą na zawsze. Nie musisz do niej wracać. Nie musisz „odświeżać
                motywacji". Ona działa w&nbsp;tle - jak system operacyjny.
              </p>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10 mb-6">
                <p className="text-base md:text-lg text-white/90 font-medium mb-3">Co się zmienia po instalacji:</p>
                <div className="space-y-2 text-base text-dim">
                  <p>Zamiast zarządzać zadaniami - zarządzasz energią.</p>
                  <p>
                    Zamiast walczyć z&nbsp;prokrastynacją - rozumiesz, skąd się bierze, i&nbsp;przestaje być problemem.
                  </p>
                  <p>Zamiast „być zajętym" - tworzysz przestrzeń na to, co naprawdę ważne.</p>
                </div>
              </div>

              <p className="text-base md:text-lg text-electric font-bold mb-6">
                Jedyna aplikacja mentalna, po której nigdy więcej nie potrzebujesz kolejnego kursu produktywności.
              </p>

              <Link
                to="/program/produktywnosc"
                className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block"
              >
                <CTAButton className="bg-brand-gradient hover:opacity-90 text-white border-0 rounded">
                  INSTALUJ PROGRAM →
                </CTAButton>
              </Link>
            </div>

            {/* APP #2: Silna Głowa */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  🛡️
                </span>
                <Badge
                  variant="outline"
                  className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  APLIKACJA #2
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Silna Głowa</h3>
              <p className="text-sm text-dim mb-6">6 tygodni · Instalacja na zawsze</p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla tych, którzy wiedzą, że ich głowa jest ich
                największym sojusznikiem - i&nbsp;jednocześnie ich największym przeciwnikiem.
              </p>

              <p className="text-base md:text-lg text-dim mb-6 leading-relaxed">
                Firewall dla Twojego umysłu. Nie uczę „jak radzić sobie ze stresem" (masz już 15 artykułów
                o&nbsp;oddychaniu). Instaluję sposób myślenia, w&nbsp;którym presja przestaje być wrogiem - i&nbsp;staje
                się paliwem.
              </p>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10 mb-6">
                <p className="text-base md:text-lg text-white/90 font-medium mb-3">Co się zmienia po instalacji:</p>
                <div className="space-y-2 text-base text-dim">
                  <p>Presja zewnętrzna przestaje paraliżować - zaczyna skupiać.</p>
                  <p>Krytyka przestaje ranić - zaczyna informować.</p>
                  <p>Niepewność przestaje przerażać - zaczyna być sygnałem, że robisz coś ważnego.</p>
                </div>
              </div>

              <Link
                to="/program/odpornosc"
                className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block"
              >
                <CTAButton className="bg-brand-gradient hover:opacity-90 text-white border-0 rounded">
                  INSTALUJ PROGRAM →
                </CTAButton>
              </Link>
            </div>

            {/* APP #3: Uważne Życie */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  🧘
                </span>
                <Badge
                  variant="outline"
                  className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  APLIKACJA #3
                </Badge>
                <Badge className="bg-depth text-white border-0 text-xs font-bold uppercase tracking-[0.2em]">
                  PROGRAM FLAGOWY
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Uważne Życie</h3>
              <p className="text-sm text-dim mb-6">4–6 tygodni · Instalacja na zawsze</p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla tych, którzy odkryli, że autopilot prowadzi
                donikąd - i&nbsp;chcą przejąć stery.
              </p>

              <p className="text-base md:text-lg text-dim mb-6 leading-relaxed">
                Medytacja dla ludzi z&nbsp;ADHD i&nbsp;analitycznym umysłem. Nie walczysz z&nbsp;myślami - przejmujesz
                kontrolę nad kokpitem. To nie jest „zamknij oczy i&nbsp;oddychaj". To jest praktyka, która działa nawet
                gdy siedzisz w&nbsp;korku, na spotkaniu z&nbsp;zarządem albo w&nbsp;kolejce po kawę.
              </p>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10 mb-6">
                <p className="text-base md:text-lg text-white/90 font-medium mb-3">Co się zmienia po instalacji:</p>
                <div className="space-y-2 text-base text-dim">
                  <p>Życie przestaje Ci się „przydarzać" - zaczynasz je świadomie nawigować.</p>
                  <p>Emocje przestają Tobą miotać - zaczynają Cię informować o&nbsp;tym, co ważne.</p>
                  <p>Każda chwila przestaje uciekać - zaczyna być Twoim świadomym wyborem.</p>
                </div>
              </div>

              <Link
                to="/program/uwaznosc"
                className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block"
              >
                <CTAButton className="bg-brand-gradient hover:opacity-90 text-white border-0 rounded">
                  INSTALUJ PROGRAM →
                </CTAButton>
              </Link>
            </div>

            {/* APP #4: Męski Kompas */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  🧭
                </span>
                <Badge
                  variant="outline"
                  className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  APLIKACJA #4
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Męski Kompas</h3>
              <p className="text-sm text-dim mb-6">5 tygodni · Instalacja na zawsze</p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla mężczyzn, którzy czują, że grali według cudzych
                reguł w&nbsp;grę, której nie chcieli wygrywać.
              </p>

              <p className="text-base md:text-lg text-dim mb-6 leading-relaxed">
                Reinstalacja systemu tożsamości. Nie mówię Ci, „jak być mężczyzną" - bo definicję męskości, którą
                nosiłeś, napisał ktoś inny. Ten program pomaga Ci napisać własną. Od zera. Na Twoich warunkach.
              </p>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10 mb-6">
                <p className="text-base md:text-lg text-white/90 font-medium mb-3">Co się zmienia po instalacji:</p>
                <div className="space-y-2 text-base text-dim">
                  <p>Siła przestaje być maską - staje się przezroczystą obecnością. Jak diament.</p>
                  <p>Wrażliwość przestaje być słabością - staje się supermocą.</p>
                  <p>Relacje przestają być polem walki - stają się przestrzenią współtworzenia.</p>
                </div>
              </div>

              <Link
                to="/program/meskosc"
                className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block"
              >
                <CTAButton className="bg-brand-gradient hover:opacity-90 text-white border-0 rounded">
                  INSTALUJ PROGRAM →
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT */}
      <div className="the-cut" />

      {/* 7. NIE DLA / DLA - bg-void (DARK) */}
      <section className="py-16 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Keynote image */}
            <div className="relative rounded-sm overflow-hidden border border-white/10">
              <OptimizedImage
                src={keynoteImage}
                alt="Ludwik C. Siadlak presenting 'Hacker Umysłów' keynote at CAMPUS conference"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, 672px"
                className="w-full h-auto"
              />
            </div>

            {/* Not for / For */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">To nie jest dla każdego</h3>

              <div className="space-y-6 text-base md:text-lg text-dim leading-relaxed">
                <p>
                  <strong className="text-white/90">Nie dla:</strong> osób szukających motywacyjnego kopa, szybkich
                  trików i&nbsp;magicznych formuł. Jeśli potrzebujesz, żeby ktoś Ci powiedział „dasz radę" przez 6
                  tygodni - to nie tu. (Ale masz do tego pełne prawo - po prostu to nie jest moja robota.)
                </p>

                <p>
                  <strong className="text-electric">Dla:</strong> osób, które testowały już narzędzia i&nbsp;wiedzą, że
                  problem leży głębiej. Które są gotowe zmienić sposób myślenia, a&nbsp;nie tylko technikę zarządzania
                  czasem.
                </p>

                <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10 mt-4">
                  <p className="font-bold text-white text-base md:text-lg">
                    Wybierz aplikację, której teraz potrzebujesz. Zostanie z&nbsp;Tobą na zawsze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT */}
      <div className="the-cut" />

      {/* 8. LIFEHACKERZY - bg-lifehacker-purple-dark (visual exception) */}
      <section className="py-16 sm:py-20 bg-lifehacker-purple-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-white border-0 px-6 py-2 text-sm font-bold bg-lifehacker-purple">
              💎 BONUS DO KAŻDEJ APLIKACJI
            </Badge>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <OptimizedImage src={lifehackerzyLogo} alt="Lifehackerzy" width={80} height={80} sizes="80px" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-center sm:text-left">
                Społeczność <span className="text-lifehacker-purple">Lifehackerzy</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-left space-y-4 text-base sm:text-lg text-white/80 leading-relaxed mb-10">
              <p>
                Instalując dowolną aplikację, dostajesz dożywotni dostęp do społeczności ludzi, którzy przeszli tę samą
                drogę.
              </p>
              <p>
                To jedyny sposób, żeby dołączyć do Lifehackerów. Nie ma osobnego wejścia. Nie ma subskrypcji. Jest
                decyzja o&nbsp;zmianie - i&nbsp;ludzie, którzy ją podjęli razem z&nbsp;Tobą.
              </p>
            </div>

            {/* 5 key benefits */}
            <div className="max-w-3xl mx-auto text-left mb-10">
              <h4 className="text-lg font-bold text-white mb-4">Co znajdziesz w&nbsp;środku:</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "12:34 Daily Coaching",
                    desc: "Codzienne spotkania o stałej porze (tak, o 12:34 - bo kto potrafi zapamiętać 12:34, ten zwraca uwagę na szczegóły)",
                  },
                  {
                    icon: Mic2,
                    title: "Wsparcie na żywo",
                    desc: "Ludzie, do których możesz się odezwać, kiedy chcesz to wszystko rzucić w kąt",
                  },
                  {
                    icon: Brain,
                    title: "Warsztaty eksperckie",
                    desc: "Sesje o GTD, Notion, AI, automatyzacji i wszystkim, co pomaga pracować mądrzej",
                  },
                  {
                    icon: Video,
                    title: "50+ Protipów",
                    desc: "Wewnętrzne nagrania niedostępne nigdzie publicznie",
                  },
                  {
                    icon: MapPin,
                    title: "Lifehackerzy z 8+ krajów",
                    desc: "Bo dobre pytania nie mają narodowości",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-lifehacker-purple/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-lifehacker-purple" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{item.title}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Call Image */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-sm overflow-hidden border border-lifehacker-purple/30">
                <OptimizedImage
                  src={communityCallImage}
                  alt="Lifehackerzy community video call - daily coaching sessions"
                  width={1920}
                  height={984}
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Jim Rohn Quote */}
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-sm bg-white/5 border border-lifehacker-purple-border-light">
                <p className="text-xl text-white/90 mb-3 italic">
                  „Jesteśmy wypadkową pięciu osób, z&nbsp;którymi spędzamy najwięcej czasu."
                </p>
                <p className="text-base text-white/60 mb-4">- Jim Rohn</p>
                <p className="text-base text-white/80">
                  Otocz się ludźmi, którzy - tak jak Ty - chcą od życia czegoś więcej. I&nbsp;którzy wiedzą, że „więcej"
                  nie znaczy „szybciej".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT */}
      <div className="the-cut" />

      {/* 9. LIFE OS: System Upgrade - bg-diamond (LIGHT) */}
      <section className="py-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 rounded-sm border border-depth/20 bg-depth/5 text-depth border-0 px-6 py-2 text-sm font-bold">
                💎 PEŁEN UPGRADE
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-on-light leading-[1.1] tracking-[-0.02em]">
                Life OS: System Upgrade
              </h2>

              <p className="text-lg md:text-xl text-on-light-dim max-w-3xl mx-auto leading-relaxed">
                Nie aplikacja - cały nowy system operacyjny.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-on-light-dim leading-relaxed mb-12">
              <p>
                Jeśli przeglądasz tę stronę i&nbsp;czujesz, że żadna pojedyncza aplikacja nie trafia w&nbsp;sedno - bo
                problem leży głębiej, na poziomie tego, kim jesteś, a&nbsp;nie tego, co robisz - to jest Twoje miejsce.
              </p>
              <p>
                8 tygodni intensywnej pracy 1:1 ze mną. Maksymalnie 5 osób jednocześnie. Diagnostyka, dekonstrukcja,
                integracja i&nbsp;nowy standard działania.
              </p>
            </div>

            {/* Features list */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="space-y-3">
                {[
                  "8 sesji mentoringowych 1:1",
                  "Diagnostyka Life OS (pe\u0142ny skan \u201Esystemu operacyjnego\u201D)",
                  "Dostęp VIP 24/7 przez cały program",
                  "Nagrania wszystkich sesji",
                  "Dożywotni dostęp do społeczności absolwentów",
                  "Gwarancja zwrotu po 2 tygodniach",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-on-light-dim text-base md:text-lg">
                    <div className="w-2.5 h-2.5 bg-depth rounded-full shrink-0 mt-2" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="rounded-sm border border-black/10 bg-paper p-8 md:p-12">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth mb-3">16 000 PLN</div>
                <p className="text-on-light-dim text-base md:text-lg mb-2">
                  Faktura VAT · Możliwość rozłożenia na 2 raty
                </p>
                <p className="text-sm text-on-light-dim/70 mb-8">Dostępne: max 5 aktywnych klientów jednocześnie</p>

                <Link
                  to="/discovery"
                  className="inline-block focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded"
                >
                  <CTAButton size="lg" className="bg-brand-gradient hover:opacity-90 text-white border-0 text-lg px-10">
                    Sprawdź dostępność - Sesja Discovery →
                  </CTAButton>
                </Link>

                <p className="text-sm text-on-light-dim mt-4">30 minut · Bez zobowiązań · Żebyśmy obaj wiedzieli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ZAMKNIĘCIE - bg-paper (LIGHT) */}
      <section className="py-16 bg-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-on-light leading-[1.1] tracking-[-0.02em]">
              Ostatnia rzecz
            </h3>

            <div className="space-y-6 text-base md:text-lg text-on-light-dim leading-relaxed">
              <p>Wiesz, co jest najdziwniejsze w&nbsp;tych programach?</p>
              <p>
                Że po ich zainstalowaniu ludzie nie mówią „nauczyłem się czegoś nowego". Mówią:{" "}
                <strong className="text-on-light">„w&nbsp;końcu widzę to, co miałem w&nbsp;sobie od zawsze."</strong>
              </p>
              <p>Bo tak działa diament. Nie trzeba go tworzyć. Trzeba odsłonić.</p>
              <p>
                Wybierz aplikację, od której chcesz zacząć. Albo - jeśli czujesz, że to jest głębsze -{" "}
                <Link to="/discovery" className="text-electric hover:underline font-medium">
                  umów się na rozmowę
                </Link>
                .
              </p>
              <p>
                Tak czy inaczej - <strong className="text-on-light">dziękuję, że jesteś.</strong> Samo to, że doczytałeś
                do tego miejsca, mówi mi coś ważnego o&nbsp;Tobie.
              </p>
              <p className="text-on-light font-medium mt-8">- Ludwik</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
