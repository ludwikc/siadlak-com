import Layout from "@/components/layout/Layout";
import { CheckCircle, Flame, Users, Star } from "@/lib/icons";
import { useState, useEffect } from "react";

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
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-4 sm:px-6 py-2 sm:py-3">
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-xs sm:text-sm font-bold text-text-on-dark">
                  TYLKO 5 MIEJSC JEDNOCZEŚNIE
                </span>
              </div>
            </div>

            <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight text-text-on-dark text-center">
              <span className="text-electric">Sesja Discovery</span>
              {` – 30 minut, które rozstrzygną, czy jesteśmy dla siebie`}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-text-dim leading-relaxed text-center max-w-4xl mx-auto">
              To nie jest sprzedażowa rozmowa. To coś bardziej brutalnego. Dowiem się,
              czy mogę Ci pomóc. I czy w ogóle chcę.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-3 sm:px-4 py-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-sm sm:text-base font-semibold text-text-on-dark">
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
                <span className="ml-2 text-sm sm:text-base font-semibold text-text-on-dark">
                  Transformacyjny program
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <button
                className="inline-flex items-center justify-center px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm"
                style={{
                  background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
                onClick={() => {
                  const ctaSection = document.querySelector('#cta-section');
                  ctaSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Sprawdź dostępność →
              </button>

              <p className="text-sm sm:text-base font-semibold text-text-on-dark">
                <span className="text-electric">
                  Głęboka, intensywna praca transformacyjna
                </span>{" "}
                • Nie pracuję z każdym
              </p>
            </div>

            <div className="text-center">
              <a
                href="#kim-nie-jestesmy"
                className="text-sm text-text-dim hover:text-electric transition-colors underline"
              >
                Dowiedz się więcej, dla kogo to nie jest →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* Intro Section */}
      <ContentTextSection alignment="center" maxWidth="900px" backgroundVariant="light">
        <p>Bo oto prawda: nie pracuję z każdym. Nie mogę i nie chcę.</p>

        <p>
          Mam maksymalnie 5 miejsc jednocześnie. To nie jest skalowalny biznes.
          To jest głęboka, intensywna praca transformacyjna, która wymaga ode
          mnie wszystkiego. I jeśli nie jesteś gotów na to, co oferuję,
          marnujemy sobie nawzajem czas.
        </p>
      </ContentTextSection>

      <div className="the-cut" />

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
          {[
            { num: "1. Za co walczysz?", desc: "Jaki jest Twój niewidzialny wróg? Jaką sprawiedliwość próbujesz przywrócić? Gdzie ugrzązłeś w narracji ofiary lub sprawiedliwości, która Cię więzi?" },
            { num: "2. Czego próbujesz uniknąć?", desc: "Bo większość ludzi nie szuka transformacji. Szukają kolejnego systemu, który pozwoli im uniknąć tego, czego naprawdę potrzebują: spojrzenia w lustro." },
            { num: "3. Ile jesteś gotów zapłacić?", desc: "Nie mówię o pieniądzach. Mówię o energii. O gotowości na dyskomfort. Na kontrolowany chaos. Na konfrontację z tym, kim jesteś, a nie z tym, kim myślisz, że powinieneś być." },
          ].map((item) => (
            <div key={item.num} className="rounded-sm p-8 border border-white/10">
              <h3 className="font-heading text-lg font-semibold mb-3 text-electric">
                {item.num}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Kim NIE jesteśmy Section */}
      <ContentGridSection
        title="Kim NIE jesteśmy dla siebie"
        columns={2}
        gap="lg"
        className="scroll-mt-20"
        id="kim-nie-jestesmy"
        backgroundVariant="light"
      >
        <div className="p-8 rounded-sm border border-text-on-light/10">
          <h3 className="text-xl font-bold mb-6 text-text-on-light">
            ❌ To NIE jest dla Ciebie, jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-text-on-light/80">
            {[
              "Szukasz kolejnego systemu produktywności, który \"w końcu zadziała\"",
              "Chcesz, żebym powiedział Ci, że wszystko jest w porządku i wystarczy zmienić aplikację",
              "Potrzebujesz walidacji, nie transformacji",
              "Nie jesteś gotów zapłacić energetycznego podatku za zmianę",
              "Zarabiasz poniżej 100K PLN rocznie (po prostu jeszcze nie dotarłeś do punktu bólu, który obsługuję)",
              "Szukasz szybkich rozwiązań zamiast głębokiej pracy",
            ].map((text) => (
              <li key={text} className="flex items-start">
                <span className="mr-3">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-sm border border-electric/20 bg-electric/5">
          <h3 className="text-xl font-bold mb-6 text-electric">
            ✅ To może być dla Ciebie, jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-text-on-light/80">
            {[
              "Osiągnąłeś zewnętrzny sukces (100K-10M+ rocznie), ale czujesz wewnętrzną pustkę",
              "Jesteś uwięziony w narracjach, które kiedyś Ci służyły, a teraz Cię więzą",
              "Testowałeś już wszystkie systemy i żaden nie działa, bo problem nie jest w systemach",
              "Potrzebujesz kogoś, kto będzie wystarczająco brutalny, żeby powiedzieć Ci prawdę",
              "Albo kogoś, kto da Ci pozwolenie na przestanie walki i przyjęcie tego, co już masz",
              "Jesteś gotów na 8 tygodni intensywnej pracy, która zmieni sposób, w jaki widzisz siebie i świat",
            ].map((text) => (
              <li key={text} className="flex items-start">
                <span className="mr-3">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentGridSection>

      <div className="the-cut" />

      {/* Co może się wydarzyć Section */}
      <ContentGridSection
        title="Co może się wydarzyć po tej rozmowie?"
        columns={2}
        gap="md"
        backgroundVariant="muted"
      >
        {[
          { title: "Scenariusz 1: Zaczynamy pracę", desc: "Obaj czujemy, że to ma sens. Widzę, gdzie jesteś. Wiem, jak Ci pomóc. Jesteś gotów. Mówimy o Life OS i rozpoczynamy 8-tygodniową transformację." },
          { title: "Scenariusz 2: Nie teraz", desc: "Może jesteś blisko, ale jeszcze nie teraz. Być może musisz najpierw przepracować coś innego. Powiem Ci to szczerze i skieruję tam, gdzie powinieneś być teraz." },
          { title: "Scenariusz 3: To nie dla Ciebie", desc: "I to też jest okej. Czasem najlepszą pomocą jest szczera informacja, że nasze drogi się rozchodzą. Zaoszczędzę Ci czasu, pieniędzy i energii." },
          { title: "Scenariusz 4: Zaskoczenie", desc: "Czasem podczas tych 30 minut dzieje się coś nieoczekiwanego. Jedno pytanie, jedna perspektywa, jedno przesunięcie narracji – i już widzisz coś, czego wcześniej nie widziałeś. Bez sprzedaży. Bez oferty. Po prostu zmiana." },
        ].map((item) => (
          <div key={item.title} className="rounded-sm p-8 border border-white/10">
            <h3 className="text-lg font-bold mb-3 text-electric">
              {item.title}
            </h3>
            <p className="text-lg text-text-dim leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </ContentGridSection>

      <div className="the-cut" />

      {/* Transparentnie Section */}
      <ContentTextSection
        title="Transparentnie: Jak to działa"
        maxWidth="900px"
        backgroundVariant="light"
      >
        <div className="space-y-6">
          {[
            { num: "1. Wypełniasz formularz", desc: "Zadaję kilka pytań przed rozmową, żeby nie marnować Twojego czasu, jeśli od razu widzę, że to nie ma sensu." },
            { num: "2. 30 minut 1:1", desc: "Zoom, kamera włączona. To nie jest casual chat. To jest głęboka, czasem niewygodna rozmowa o tym, gdzie naprawdę jesteś." },
            { num: "3. Decyzja", desc: "Po rozmowie wiem, czy mogę Ci pomóc. I mówię Ci to wprost. Jeśli tak, rozmawiamy o współpracy. Jeśli nie, mówię Ci dlaczego i gdzie powinieneś szukać dalej." },
          ].map((item) => (
            <div key={item.num} className="rounded-sm p-8 border border-text-on-light/10">
              <h3 className="text-lg font-bold mb-3 text-electric">
                {item.num}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* CTA Section with Availability Check */}
      <ContentTextSection backgroundVariant="muted" maxWidth="900px" id="cta-section">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8 text-text-on-dark">Ostatnia rzecz</h2>

          <p className="mb-8">
            Nie przychodzę do Ciebie jako guru, który ma wszystkie odpowiedzi.
          </p>

          <p className="mb-8">
            Przychodzę jako ktoś, kto przeszedł przez obie ścieżki – wojownika i
            poszukiwacza. Kto zbudował systemy produktywności w wieku 16 lat,
            żeby przetrwać. Kto osiągnął sukces i odkrył pustkę. Kto stanął na
            balkonie i myślał o skoku. I kto znalazł wyjście.
          </p>

          <p className="font-bold text-electric mb-12">
            Nie obiecuję, że będzie łatwo. Obiecuję, że będzie prawdziwe.
          </p>
        </div>

        {/* Availability Check Card */}
        <div className="p-12 rounded-sm border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10">
            {status === "initial" && (
              <div className="py-4">
                <div className="w-20 h-20 bg-depth rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-text-on-dark">
                  Sprawdź dostępność Sesji Discovery
                </h3>
                <p className="text-lg text-text-dim mb-8 max-w-md mx-auto">
                  Kliknij poniżej, aby sprawdzić czy mam obecnie wolne miejsca w
                  programie mentoringowym
                </p>
                <button
                  onClick={handleCheckAvailability}
                  className="px-10 py-4 rounded font-bold text-lg text-white"
                  style={{
                    background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                    boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                  }}
                >
                  Sprawdź dostępność
                </button>
              </div>
            )}

            {status === "loading" && (
              <div className="py-8 relative z-10">
                <div className="animate-spin w-8 h-8 border-3 border-electric border-t-transparent rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-6 text-text-on-dark">
                  Trwa sprawdzanie dostępności...
                </h3>

                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-electric h-full transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-lg text-text-dim mt-2">
                    {Math.round(progress)}% zakończone
                  </p>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="py-4 relative z-10">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-on-dark">
                  Tak, mam obecnie miejsce w programie mentoringowym
                </h3>
                <p className="text-lg mb-8 text-text-dim max-w-md mx-auto">
                  Możesz umówić Sesję Discovery już teraz
                </p>
                <button
                  onClick={handleScheduleSession}
                  className="px-10 py-4 rounded font-bold text-lg text-white"
                  style={{
                    background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                    boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                  }}
                >
                  Umów Sesję Discovery
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="text-lg text-center text-text-dim italic mt-8">
          (Liczba miejsc ograniczona – maksymalnie 5 aktywnych klientów
          jednocześnie)
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* P.S. Section */}
      <ContentTextSection maxWidth="800px" backgroundVariant="light">
        <div className="rounded-sm p-8 border border-text-on-light/10">
          <p className="mb-6">
            <strong className="text-electric">P.S.</strong> Jeśli czytasz to
            i myślisz "to brzmi strasznie" albo "to za intensywne" – to nie jest
            dla Ciebie. I to jest w porządku.
          </p>

          <p>
            Ale jeśli czytasz to i myślisz "kurwa, w końcu ktoś, kto nie próbuje
            mnie przytulić tylko powie mi prawdę" –{" "}
            <strong className="text-electric">
              to jest właśnie to miejsce
            </strong>
            .
          </p>
        </div>

        <p className="font-bold text-electric text-center mt-8 text-xl">
          — Ludwik
        </p>
      </ContentTextSection>
    </Layout>
  );
}
