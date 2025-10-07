import Layout from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle } from "@/lib/icons";
import { useState, useEffect } from "react";

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
          return prev + 4; // Increase by 4% every 100ms (2.5s total)
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [status]);

  const handleCheckAvailability = () => {
    setStatus("loading");

    // Simulate checking availability
    setTimeout(() => {
      setStatus("success");
    }, 2500);
  };

  const handleScheduleSession = () => {
    // Create a popup window for the Google Calendar booking
    const calendarUrl = "https://calendar.app.google/Xj5U39t9HaVNqS1HA";
    const popup = window.open(
      calendarUrl,
      "calendar-booking",
      "width=600,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    );

    if (popup) {
      popup.focus();
    } else {
      // Fallback: redirect to the calendar page
      window.open(calendarUrl, "_blank");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-deep-space via-neural-blue to-twilight-indigo text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              SESJA DISCOVERY
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              To nie jest sprzedażowa rozmowa. To coś bardziej brutalnego.
            </p>
            <p className="text-xl font-bold text-zenith-gold">
              30 minut, podczas których dowiem się, czy mogę Ci pomóc. I czy w
              ogóle chcę.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-deep-charcoal/80 leading-relaxed">
              Bo oto prawda: nie pracuję z każdym. Nie mogę i nie chcę.
            </p>

            <p className="text-xl text-deep-charcoal/80 leading-relaxed">
              Mam maksymalnie 5 miejsc jednocześnie. To nie jest skalowalny
              biznes. To jest głęboka, intensywna praca transformacyjna, która
              wymaga ode mnie wszystkiego. I jeśli nie jesteś gotów na to, co
              oferuję, marnujemy sobie nawzajem czas.
            </p>
          </div>
        </div>
      </section>

      {/* Co się dzieje Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
              Co się dzieje podczas sesji?
            </h2>

            <p className="text-xl text-deep-charcoal/80 leading-relaxed">
              Zadam Ci kilka pytań. Nie będą miłe.
            </p>

            <p className="text-xl text-deep-charcoal/80 leading-relaxed">
              Nie po to, żeby być dupkiem. Po to, żeby zobaczyć,{" "}
              <strong>
                ile podatku płacisz każdego dnia za historie, w których żyjesz
              </strong>
              .
            </p>

            <p className="text-xl text-deep-charcoal/80 font-bold">
              Będę szukał:
            </p>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  1. Za co walczysz?
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Jaki jest Twój niewidzialny wróg? Jaką sprawiedliwość
                  próbujesz przywrócić? Gdzie ugrzązłeś w narracji ofiary lub
                  sprawiedliwości, która Cię więzi?
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  2. Czego próbujesz uniknąć?
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Bo większość ludzi nie szuka transformacji. Szukają kolejnego
                  systemu, który pozwoli im uniknąć tego, czego naprawdę
                  potrzebują: spojrzenia w lustro.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  3. Ile jesteś gotów zapłacić?
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Nie mówię o pieniądzach. Mówię o energii. O gotowości na
                  dyskomfort. Na kontrolowany chaos. Na konfrontację z tym, kim
                  jesteś, a nie z tym, kim myślisz, że powinieneś być.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kim NIE jesteśmy Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
              Kim NIE jesteśmy dla siebie
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
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
                      Zarabiasz poniżej €100K rocznie (po prostu jeszcze nie
                      dotarłeś do punktu bólu, który obsługuję)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>
                      Szukasz szybkich rozwiązań zamiast głębokiej pracy
                    </span>
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
                      Osiągnąłeś zewnętrzny sukces (€100K-10M+ rocznie), ale
                      czujesz wewnętrzną pustkę
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>
                      Jesteś uwięziony w narracjach, które kiedyś Ci służyły, a
                      teraz Cię więzą
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>
                      Testowałeś już wszystkie systemy i żaden nie działa, bo
                      problem nie jest w systemach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>
                      Potrzebujesz kogoś, kto będzie wystarczająco brutalny,
                      żeby powiedzieć Ci prawdę
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>
                      Albo kogoś, kto da Ci pozwolenie na przestanie walki i
                      przyjęcie tego, co już masz
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
            </div>
          </div>
        </div>
      </section>

      {/* Co może się wydarzyć Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
              Co może się wydarzyć po tej rozmowie?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  Scenariusz 1: Zaczynamy pracę
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Obaj czujemy, że to ma sens. Widzę, gdzie jesteś. Wiem, jak Ci
                  pomóc. Jesteś gotów. Mówimy o Life OS i rozpoczynamy
                  8-tygodniową transformację.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  Scenariusz 2: Nie teraz
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Może jesteś blisko, ale jeszcze nie teraz. Być może musisz
                  najpierw przepracować coś innego. Powiem Ci to szczerze i
                  skieruję tam, gdzie powinieneś być teraz.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  Scenariusz 3: To nie dla Ciebie
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  I to też jest okej. Czasem najlepszą pomocą jest szczera
                  informacja, że nasze drogi się rozchodzą. Zaoszczędzę Ci
                  czasu, pieniędzy i energii.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20 bg-neural-blue/5">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  Scenariusz 4: Zaskoczenie
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Czasem podczas tych 30 minut dzieje się coś nieoczekiwanego.
                  Jedno pytanie, jedna perspektywa, jedno przesunięcie narracji
                  – i już widzisz coś, czego wcześniej nie widziałeś. Bez
                  sprzedaży. Bez oferty. Po prostu zmiana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparentnie Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
              Transparentnie: Jak to działa
            </h2>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  1. Wypełniasz formularz
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Zadaję kilka pytań przed rozmową, żeby nie marnować Twojego
                  czasu, jeśli od razu widzę, że to nie ma sensu.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  2. 30 minut 1:1
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Zoom, kamera włączona. To nie jest casual chat. To jest
                  głęboka, czasem niewygodna rozmowa o tym, gdzie naprawdę
                  jesteś.
                </p>
              </div>

              <div className="glass-card rounded-xl p-8 border border-neural-blue/20">
                <h3 className="text-lg font-bold mb-3 text-neural-blue">
                  3. Decyzja
                </h3>
                <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                  Po rozmowie wiem, czy mogę Ci pomóc. I mówię Ci to wprost.
                  Jeśli tak, rozmawiamy o współpracy. Jeśli nie, mówię Ci
                  dlaczego i gdzie powinieneś szukać dalej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Availability Check */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
                Ostatnia rzecz
              </h2>

              <p className="text-xl text-deep-charcoal/80 mb-8 leading-relaxed">
                Nie przychodzę do Ciebie jako guru, który ma wszystkie
                odpowiedzi.
              </p>

              <p className="text-xl text-deep-charcoal/80 mb-8 leading-relaxed">
                Przychodzę jako ktoś, kto przeszedł przez obie ścieżki –
                wojownika i poszukiwacza. Kto zbudował systemy produktywności w
                wieku 16 lat, żeby przetrwać. Kto osiągnął sukces i odkrył
                pustkę. Kto stanął na balkonie i myślał o skoku. I kto znalazł
                wyjście.
              </p>

              <p className="text-xl font-bold text-neural-blue mb-12">
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
                      Kliknij poniżej, aby sprawdzić czy mam obecnie wolne
                      miejsca w programie mentoringowym
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

                    {/* Progress Bar */}
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

            <p className="text-lg text-center text-deep-charcoal/60 italic">
              (Liczba miejsc ograniczona – maksymalnie 5 aktywnych klientów
              jednocześnie)
            </p>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border border-neural-blue/20">
              <p className="text-xl text-deep-charcoal/80 mb-6 leading-relaxed">
                <strong className="text-neural-blue">P.S.</strong> Jeśli czytasz
                to i myślisz "to brzmi strasznie" albo "to za intensywne" – to
                nie jest dla Ciebie. I to jest w porządku.
              </p>

              <p className="text-xl text-deep-charcoal/80 leading-relaxed">
                Ale jeśli czytasz to i myślisz "kurwa, w końcu ktoś, kto nie
                próbuje mnie przytulić tylko powie mi prawdę" –{" "}
                <strong className="text-neural-blue">
                  to jest właśnie to miejsce
                </strong>
                .
              </p>
            </div>

            <p className="text-xl font-bold text-neural-blue text-center mt-8">
              — Ludwik
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
