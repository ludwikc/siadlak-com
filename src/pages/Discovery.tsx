import Layout from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, Flame, Users, Star } from "@/lib/icons";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ContentTextSection,
  ContentGridSection,
} from "@/components/sections/content";

export default function Discovery() {
  const [status, setStatus] = useState<"initial" | "loading" | "success">(
    "initial",
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "loading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [status]);

  const handleCheckAvailability = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 2500);
  };

  const handleScheduleSession = () => {
    const calendarUrl = "https://calendar.app.google/Xj5U39t9HaVNqS1HA";
    const popup = window.open(
      calendarUrl,
      "calendar-booking",
      "width=600,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    );

    if (popup) {
      popup.focus();
    } else {
      window.open(calendarUrl, "_blank");
    }
  };

  return (
    <Layout>
      {/* Hero Section - Premium Design */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neural-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 backdrop-blur-sm border border-neural-blue/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg animate-pulse">
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  TYLKO 5 MIEJSC JEDNOCZEŚNIE
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              <span className="text-locked-gradient">Sesja Discovery</span>
              {` – 30 minut, które rozstrzygną, czy jesteśmy dla siebie`}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              To nie jest sprzedażowa rozmowa. To coś bardziej brutalnego. Dowiem się,
              czy mogę Ci pomóc. I czy w ogóle chcę.
            </p>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  Maksymalnie 5 aktywnych klientów
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
                  Transformacyjny program
                </span>
              </div>
            </div>

            {/* Primary CTA - Prominent */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="relative group inline-block w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <Button
                  variant="special"
                  size="lg"
                  className="relative btn-locked-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform duration-200"
                  onClick={() => {
                    const ctaSection = document.querySelector('#cta-section');
                    ctaSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="font-bold">
                      Sprawdź dostępność →
                    </span>
                  </span>
                </Button>
              </div>

              {/* Scarcity - Below CTA */}
              <p className="text-sm sm:text-base font-semibold text-locked-white">
                <span className="text-twilight-indigo">
                  Głęboka, intensywna praca transformacyjna
                </span>{" "}
                • Nie pracuję z każdym
              </p>
            </div>

            {/* Secondary Link - Subtle */}
            <div className="text-center">
              <a
                href="#kim-nie-jestesmy"
                className="text-sm text-locked-silver hover:text-twilight-indigo transition-colors underline"
              >
                Dowiedz się więcej, dla kogo to nie jest →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <ContentTextSection alignment="center" maxWidth="900px">
        <p>Bo oto prawda: nie pracuję z każdym. Nie mogę i nie chcę.</p>

        <p>
          Mam maksymalnie 5 miejsc jednocześnie. To nie jest skalowalny biznes.
          To jest głęboka, intensywna praca transformacyjna, która wymaga ode
          mnie wszystkiego. I jeśli nie jesteś gotów na to, co oferuję,
          marnujemy sobie nawzajem czas.
        </p>
      </ContentTextSection>

      {/* Co się dzieje Section */}
      <ContentTextSection
        title="Co się dzieje podczas sesji?"
        backgroundVariant="muted"
        maxWidth="900px"
      >
        <p>Zadam Ci kilka pytań. Nie będą miłe.</p>

        <p>
          Nie po to, żeby być dupkiem. Po to, żeby zobaczyć,{" "}
          <strong>
            ile podatku płacisz każdego dnia za historie, w których żyjesz
          </strong>
          .
        </p>

        <p className="font-bold">Będę szukał:</p>

        <div className="space-y-6 mt-8">
          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="content-h3 mb-3 text-neural-blue">
              1. Za co walczysz?
            </h3>
            <p>
              Jaki jest Twój niewidzialny wróg? Jaką sprawiedliwość próbujesz
              przywrócić? Gdzie ugrzązłeś w narracji ofiary lub sprawiedliwości,
              która Cię więzi?
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="content-h3 mb-3 text-neural-blue">
              2. Czego próbujesz uniknąć?
            </h3>
            <p>
              Bo większość ludzi nie szuka transformacji. Szukają kolejnego
              systemu, który pozwoli im uniknąć tego, czego naprawdę potrzebują:
              spojrzenia w lustro.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="content-h3 mb-3 text-neural-blue">
              3. Ile jesteś gotów zapłacić?
            </h3>
            <p>
              Nie mówię o pieniądzach. Mówię o energii. O gotowości na
              dyskomfort. Na kontrolowany chaos. Na konfrontację z tym, kim
              jesteś, a nie z tym, kim myślisz, że powinieneś być.
            </p>
          </div>
        </div>
      </ContentTextSection>

      {/* Kim NIE jesteśmy Section */}
      <ContentGridSection
        title="Kim NIE jesteśmy dla siebie"
        columns={2}
        gap="lg"
        className="scroll-mt-20"
        id="kim-nie-jestesmy"
      >
        <div className="glass-card p-8 rounded-xl border border-neural-blue/20">
          <h3 className="text-xl font-bold mb-6 text-deep-charcoal">
            ❌ To NIE jest dla Ciebie, jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-deep-charcoal/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Szukasz kolejnego systemu produktywności, który "w końcu
                zadziała"
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Chcesz, żebym powiedział Ci, że wszystko jest w porządku i
                wystarczy zmienić aplikację
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Potrzebujesz walidacji, nie transformacji</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Nie jesteś gotów zapłacić energetycznego podatku za zmianę
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Zarabiasz poniżej €100K rocznie (po prostu jeszcze nie dotarłeś
                do punktu bólu, który obsługuję)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Szukasz szybkich rozwiązań zamiast głębokiej pracy</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-xl border border-neural-blue/20 bg-neural-blue/5">
          <h3 className="text-xl font-bold mb-6 text-neural-blue">
            ✅ To może być dla Ciebie, jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-deep-charcoal/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Osiągnąłeś zewnętrzny sukces (€100K-10M+ rocznie), ale czujesz
                wewnętrzną pustkę
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Jesteś uwięziony w narracjach, które kiedyś Ci służyły, a teraz
                Cię więzą
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Testowałeś już wszystkie systemy i żaden nie działa, bo problem
                nie jest w systemach
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Potrzebujesz kogoś, kto będzie wystarczająco brutalny, żeby
                powiedzieć Ci prawdę
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Albo kogoś, kto da Ci pozwolenie na przestanie walki i przyjęcie
                tego, co już masz
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Jesteś gotów na 8 tygodni intensywnej pracy, która zmieni
                sposób, w jaki widzisz siebie i świat
              </span>
            </li>
          </ul>
        </div>
      </ContentGridSection>

      {/* Co może się wydarzyć Section */}
      <ContentGridSection
        title="Co może się wydarzyć po tej rozmowie?"
        columns={2}
        gap="md"
        backgroundVariant="muted"
      >
        <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
          <h3 className="text-lg font-bold mb-3 text-neural-blue">
            Scenariusz 1: Zaczynamy pracę
          </h3>
          <p className="text-lg text-deep-charcoal/80 leading-relaxed">
            Obaj czujemy, że to ma sens. Widzę, gdzie jesteś. Wiem, jak Ci
            pomóc. Jesteś gotów. Mówimy o Life OS i rozpoczynamy 8-tygodniową
            transformację.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
          <h3 className="text-lg font-bold mb-3 text-neural-blue">
            Scenariusz 2: Nie teraz
          </h3>
          <p className="text-lg text-deep-charcoal/80 leading-relaxed">
            Może jesteś blisko, ale jeszcze nie teraz. Być może musisz najpierw
            przepracować coś innego. Powiem Ci to szczerze i skieruję tam, gdzie
            powinieneś być teraz.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
          <h3 className="text-lg font-bold mb-3 text-neural-blue">
            Scenariusz 3: To nie dla Ciebie
          </h3>
          <p className="text-lg text-deep-charcoal/80 leading-relaxed">
            I to też jest okej. Czasem najlepszą pomocą jest szczera informacja,
            że nasze drogi się rozchodzą. Zaoszczędzę Ci czasu, pieniędzy i
            energii.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 border border-neural-blue/20 bg-neural-blue/5">
          <h3 className="text-lg font-bold mb-3 text-neural-blue">
            Scenariusz 4: Zaskoczenie
          </h3>
          <p className="text-lg text-deep-charcoal/80 leading-relaxed">
            Czasem podczas tych 30 minut dzieje się coś nieoczekiwanego. Jedno
            pytanie, jedna perspektywa, jedno przesunięcie narracji – i już
            widzisz coś, czego wcześniej nie widziałeś. Bez sprzedaży. Bez
            oferty. Po prostu zmiana.
          </p>
        </div>
      </ContentGridSection>

      {/* Transparentnie Section */}
      <ContentTextSection
        title="Transparentnie: Jak to działa"
        maxWidth="900px"
      >
        <div className="space-y-6">
          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="text-lg font-bold mb-3 text-neural-blue">
              1. Wypełniasz formularz
            </h3>
            <p>
              Zadaję kilka pytań przed rozmową, żeby nie marnować Twojego czasu,
              jeśli od razu widzę, że to nie ma sensu.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="text-lg font-bold mb-3 text-neural-blue">
              2. 30 minut 1:1
            </h3>
            <p>
              Zoom, kamera włączona. To nie jest casual chat. To jest głęboka,
              czasem niewygodna rozmowa o tym, gdzie naprawdę jesteś.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
            <h3 className="text-lg font-bold mb-3 text-neural-blue">
              3. Decyzja
            </h3>
            <p>
              Po rozmowie wiem, czy mogę Ci pomóc. I mówię Ci to wprost. Jeśli
              tak, rozmawiamy o współpracy. Jeśli nie, mówię Ci dlaczego i gdzie
              powinieneś szukać dalej.
            </p>
          </div>
        </div>
      </ContentTextSection>

      {/* CTA Section with Availability Check */}
      <ContentTextSection backgroundVariant="muted" maxWidth="900px" id="cta-section">
        <div className="text-center">
          <h2 className="content-h2 mb-8 text-deep-charcoal">Ostatnia rzecz</h2>

          <p className="mb-8">
            Nie przychodzę do Ciebie jako guru, który ma wszystkie odpowiedzi.
          </p>

          <p className="mb-8">
            Przychodzę jako ktoś, kto przeszedł przez obie ścieżki – wojownika i
            poszukiwacza. Kto zbudował systemy produktywności w wieku 16 lat,
            żeby przetrwać. Kto osiągnął sukces i odkrył pustkę. Kto stanął na
            balkonie i myślał o skoku. I kto znalazł wyjście.
          </p>

          <p className="font-bold text-neural-blue mb-12">
            Nie obiecuję, że będzie łatwo. Obiecuję, że będzie prawdziwe.
          </p>
        </div>

        {/* Availability Check Card */}
        <GlassCard
          padding="xl"
          className="text-center relative overflow-hidden border border-neural-blue/20"
        >
          <div className="relative z-10">
            {status === "initial" && (
              <div className="py-4">
                <div className="w-20 h-20 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-deep-charcoal">
                  Sprawdź dostępność Sesji Discovery
                </h3>
                <p className="text-lg text-deep-charcoal/80 mb-8 max-w-md mx-auto">
                  Kliknij poniżej, aby sprawdzić czy mam obecnie wolne miejsca w
                  programie mentoringowym
                </p>
                <button
                  onClick={handleCheckAvailability}
                  className="bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Sprawdź dostępność
                </button>
              </div>
            )}

            {status === "loading" && (
              <div className="py-8 relative z-10">
                <div className="animate-spin w-8 h-8 border-3 border-neural-blue border-t-transparent rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-6 text-deep-charcoal">
                  Trwa sprawdzanie dostępności...
                </h3>

                <div className="w-full max-w-md mx-auto">
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-neural-blue to-twilight-indigo h-full transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-lg text-deep-charcoal/80 mt-2">
                    {Math.round(progress)}% zakończone
                  </p>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="py-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-deep-charcoal">
                  Tak, mam obecnie miejsce w programie mentoringowym
                </h3>
                <p className="text-lg mb-8 text-deep-charcoal/80 max-w-md mx-auto">
                  Możesz umówić Sesję Discovery już teraz
                </p>
                <button
                  onClick={handleScheduleSession}
                  className="bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Umów Sesję Discovery
                </button>
              </div>
            )}
          </div>
        </GlassCard>

        <p className="text-lg text-center text-deep-charcoal/60 italic mt-8">
          (Liczba miejsc ograniczona – maksymalnie 5 aktywnych klientów
          jednocześnie)
        </p>
      </ContentTextSection>

      {/* P.S. Section */}
      <ContentTextSection maxWidth="800px">
        <div className="glass-card rounded-2xl p-8 border border-neural-blue/20">
          <p className="mb-6">
            <strong className="text-neural-blue">P.S.</strong> Jeśli czytasz to
            i myślisz "to brzmi strasznie" albo "to za intensywne" – to nie jest
            dla Ciebie. I to jest w porządku.
          </p>

          <p>
            Ale jeśli czytasz to i myślisz "kurwa, w końcu ktoś, kto nie próbuje
            mnie przytulić tylko powie mi prawdę" –{" "}
            <strong className="text-neural-blue">
              to jest właśnie to miejsce
            </strong>
            .
          </p>
        </div>

        <p className="font-bold text-neural-blue text-center mt-8 text-xl">
          — Ludwik
        </p>
      </ContentTextSection>
    </Layout>
  );
}
