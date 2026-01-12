import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Anchor, Compass, Ship, Star, Target, Shield } from "lucide-react";

export default function WebinarKodKapitana() {
  const ctaUrl = "https://lifehackerzy.pl/kod-kapitana";

  return (
    <Layout hideHeader={true}>
      <SEO
        title="Kod Kapitana: Twój Protokół Radykalnej Wolności"
        description="Przestań być zakładnikiem własnych reakcji. Zacznij być Architektem swojej rzeczywistości. Spotkanie na żywo 27 stycznia 2025 o 20:05."
      />

      {/* HERO SECTION */}
      <section
        className="relative py-24 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(200, 60%, 8%) 0%, hsl(210, 50%, 12%) 50%, hsl(220, 45%, 10%) 100%)",
        }}
      >
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 animate-fade-in"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.1),transparent_50%)]"></div>

        {/* Nautical glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Event badge */}
            <div className="flex justify-center mb-10 animate-fade-in">
              <div
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  borderColor: "hsl(200, 90%, 60%)",
                  boxShadow:
                    "0 0 40px rgba(59, 130, 246, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
              >
                <Anchor className="w-6 h-6 text-white animate-pulse" />
                <span className="font-bold text-white text-sm md:text-base tracking-wide">
                  SPOTKANIE NA ŻYWO • 27 STYCZNIA • 20:05
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-white leading-[1.15] tracking-tight drop-shadow-lg">
                KOD KAPITANA:
                <br />
                <span
                  className="inline-block mt-3 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  Twój Protokół
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl text-white/95 mt-2 inline-block">
                  RADYKALNEJ WOLNOŚCI
                </span>
              </h1>

              <div className="mb-12 flex justify-center animate-scale-in">
                <div
                  className="inline-block rounded-3xl px-10 py-8 border-2 max-w-3xl backdrop-blur-md transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)",
                    borderColor: "rgba(59, 130, 246, 0.6)",
                    boxShadow:
                      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                    Przestań być zakładnikiem własnych reakcji.
                    <br className="hidden md:block" />
                    <span className="font-bold text-sky-300">Zacznij być Architektem swojej rzeczywistości.</span>
                  </p>
                </div>
              </div>

              <div className="mb-10 animate-fade-in">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto sm:inline-block">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)]"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →
                  </Button>
                </a>
              </div>

              <p className="text-white/70 text-base md:text-lg italic font-light animate-fade-in">
                Wejście jest bezpłatne. Cena to Twoja pełna uwaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONFRONTACJA Z PRAWDĄ */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
              KONFRONTACJA Z PRAWDĄ
            </h2>

            <Card className="bg-destructive/5 border-destructive/30 p-8 md:p-12 mb-8">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-relaxed">
                Prawda jest prosta: dopóki nie posiadasz Kodu Kapitana, Twój wewnętrzny system operacyjny wykonuje skrypty, których nigdy świadomie nie zatwierdziłeś.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Możesz budować najbardziej zaawansowane automatyzacje w biznesie, ale jeśli Twoja uwaga działa na <strong className="text-foreground">starym oprogramowaniu</strong> – lęku, reaktywności i cudzych oczekiwaniach – to wciąż jesteś tylko pasażerem we własnej głowie. Obserwujesz, jak wadliwe pętle decyzyjne przepalają Twoją energię i czas, a Twoja łódź dryfuje tam, gdzie pcha ją algorytm otoczenia.
              </p>
              <p className="text-xl font-bold text-destructive mb-6">
                To nie jest pech. To Błąd Architektury Świadomości.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jeśli czujesz, że Twój potencjał przecieka, a Ty jedynie gasisz pożary wywołane przez błędy w Twoim własnym systemie – pora na wprowadzenie <strong className="text-foreground">nowych ustawień</strong>. Tylko Ty masz dostęp Administratora do swojej głowy. Czas wgrać Kod Kapitana.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* O CZYM BĘDZIEMY ROZMAWIAĆ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              O CZYM BĘDZIEMY ROZMAWIAĆ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              (BEZ OWIJANIA W BAWEŁNĘ)
            </p>

            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                27 stycznia nie będziemy „rozmawiać o uważności". <strong className="text-foreground">Będziemy kalibrować Twoją technologię wewnętrzną.</strong> Pokażę Ci precyzyjny system nawigacji, który odmienił moje życie i życie moich najbardziej skutecznych klientów:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900">
                    <Ship className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">ANATOMIA STATKU</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Zidentyfikujesz swoje <strong className="text-foreground">Przecieki</strong> (słabości), które wysysają Twoją energię, zanim w ogóle postawisz żagle.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
                    <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">KALIBRACJA KOMPASU</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dowiesz się, jak przestać walczyć z emocjami i zacząć traktować je jak dane GPS. <strong className="text-foreground">Strach? To tylko informacja o wietrze.</strong>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900">
                    <Anchor className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">SUWERENNOŚĆ STERNIKA</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nauczysz się techniki <strong className="text-foreground">„Zrzucenia Kotwicy"</strong> – momentalnego powrotu do stanu absolutnej jasności, niezależnie od tego, jak bardzo trzęsie pokładem.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                    <Star className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">PÓŁNOCNA GWIAZDA</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Przestaniemy gonić za „celami" i znajdziemy Twój fundament. <strong className="text-foreground">Jeśli wiesz, dokąd płyniesz, żadna fala nie jest w stanie Cię zatrzymać.</strong>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO ZYSKUJESZ */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              CO ZYSKUJESZ?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              (TWÓJ NOWY STATUS)
            </p>

            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground">Po 60 minutach ze mną:</p>
            </div>

            <div className="space-y-6">
              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Odzyskasz 100% odpowiedzialności.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A odpowiedzialność to jedyna droga do wolności.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <Compass className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Przestaniesz dryfować.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Każdy ruch Twoim sterem będzie świadomy i celowy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Zbudujesz pancerz psychiczny.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pogoda (świat zewnętrzny) przestanie mieć wpływ na Twoje samopoczucie. <strong className="text-foreground">Ty jesteś Kapitanem. Ty decydujesz o kursie.</strong>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              AGENDA DLA WYBRANYCH
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              4 etapy transformacji
            </p>

            <div className="space-y-6">
              <Card className="bg-background border-2 border-sky-200 dark:border-sky-800 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ETAP 1: Przebudzenie Kapitana</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wyjście z transu automatycznych reakcji.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background border-2 border-blue-200 dark:border-blue-800 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ETAP 2: Audyt Zasobów</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Twoje Żagle vs Twoje Przecieki. Gdzie marnujesz swój kapitał?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background border-2 border-cyan-200 dark:border-cyan-800 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ETAP 3: Taniec z Burzą</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jak wykorzystać opór jako siłę napędową do wzrostu.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background border-2 border-indigo-200 dark:border-indigo-800 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ETAP 4: Manifest Suwerenności</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Twój plan rejsu na najbliższy rok.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* KWALIFIKACJA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
              KWALIFIKACJA
            </h2>

            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 p-8 md:p-12">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                <strong>Ten warsztat nie jest dla każdego.</strong> Jeśli szukasz wymówek, dlaczego „się nie da" – zamknij tę stronę.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jeśli boisz się spojrzeć prawdzie w oczy i przyznać, że do tej pory pozwalałeś innym sterować Twoim życiem – to spotkanie Cię zaboli.
              </p>
              <p className="text-xl font-bold text-foreground">
                Ale jeśli jesteś gotowy przestać być ofiarą okoliczności i chcesz zostać <span className="text-sky-600 dark:text-sky-400">Panem Własnej Rzeczywistości</span> – zapraszam na pokład.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(200, 60%, 8%) 0%, hsl(210, 50%, 12%) 50%, hsl(220, 45%, 10%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto sm:inline-block mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →
              </Button>
            </a>

            <p className="text-white/70 text-lg mb-16">
              Wejście jest bezpłatne. Cena to Twoja pełna uwaga.
            </p>

            <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed max-w-3xl mx-auto">
              „Twoje życie to nie jest coś, co Ci się przydarza. To Twoje największe dzieło sztuki. <span className="text-sky-300 font-semibold">Czas zacząć je tworzyć z intencją.</span>"
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
}
