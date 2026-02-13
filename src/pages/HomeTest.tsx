import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import {
  ArrowRight,
  AlertTriangle,
  Brain,
  Sparkles,
  // Target,
  Users,
  CheckCircle,
  X,
  Zap,
  Crown,
  Shield,
} from "../lib/icons";
import { Link } from "react-router-dom";

const HomeTest = () => {
  return (
    <Layout>
      <SEO
        title="Ludwik C. Siadlak — Diamentowy Umysł"
        description="Pomagam ludziom, którzy zbudowali imponujące życie, ale gdzieś po drodze stracili kontakt z tym, co leży pod kolorami — zobaczyć własny diament."
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO — The Diamond Hook
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-40 pb-0 bg-gradient-to-br from-deep-space via-deep-charcoal to-deep-space overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-blue rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zenith-gold rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Headline */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto px-4">
                Diament jest najtwardszą substancją na&nbsp;Ziemi.{" "}
                <span className="bg-gradient-to-r from-zenith-gold to-orange-500 bg-clip-text text-transparent">
                  I&nbsp;jest kompletnie przezroczysty.
                </span>
              </h1>
            </div>

            {/* Asymmetric Split */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
              {/* Body Copy — 2 cols */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-4 text-xl text-white/90 leading-relaxed mb-12">
                  <p>
                    Połóż go na czerwonym suknie — wygląda jak rubin. Na zielonym
                    — jak szmaragd. Na niebieskim — jak szafir. Zmień sukno —
                    zmieni się „kolor" diamentu.
                  </p>
                  <p>
                    Ale diament sam w&nbsp;sobie?{" "}
                    <span className="text-zenith-gold font-bold">
                      Nie ma koloru. Jest czysty.
                    </span>
                  </p>
                  <p className="text-white/70">
                    Twój umysł działa dokładnie tak samo.
                  </p>
                  <p>
                    Otaczasz się presją — nabiera koloru napięcia. Wchodzisz
                    w&nbsp;sprint za kolejnym celem — nabiera koloru głodu.
                    Wracasz do domu po 14&nbsp;godzinach — nabiera koloru pustki.
                  </p>
                  <p className="text-white/70">
                    Ale to nie Ty się zmieniłeś. To sukno się zmieniło.
                  </p>
                  <p className="text-2xl font-bold text-white mt-8">
                    Jestem Ludwik C. Siadlak.
                  </p>
                  <p>
                    Pomagam ludziom takim jak Ty — ludziom, którzy zbudowali
                    imponujące życie, ale gdzieś po drodze stracili kontakt
                    z&nbsp;tym, co leży pod kolorami —{" "}
                    <span className="text-zenith-gold font-semibold">
                      zobaczyć własny diament
                    </span>
                    .
                  </p>
                  <p className="text-white/70">
                    Nie szlifuję go. Nie zmieniam. Pokazuję Ci, że już tam jest.
                  </p>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-start">
                  <Link to="/discovery">
                    <CTAButton variant="premium" size="xl" className="shadow-xl">
                      Umów bezpłatną rozmowę
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </CTAButton>
                  </Link>
                  <Link
                    to="#problem"
                    className="text-white/70 hover:text-white text-lg transition-colors"
                  >
                    Czytaj dalej ↓
                  </Link>
                </div>
              </div>

              {/* Image — 3 cols */}
              <div className="md:col-span-3 relative flex items-end">
                <img
                  src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                  alt="Ludwik C. Siadlak"
                  className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain object-bottom drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    filter: "saturate(1.1) brightness(1.05)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: PROBLEM — Diagnoza
      ═══════════════════════════════════════════════════════════ */}
      <section id="problem" className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-lg px-6 py-3 mb-6">
                <AlertTriangle className="inline h-5 w-5 mr-2" />
                Diagnoza, nie agitacja
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Przez lata próbowałeś{" "}
                <span className="text-neural-blue">zmienić diament</span>.
              </h2>
              <p className="text-2xl text-deep-charcoal/80">
                Nie wiedziałeś, że wystarczyło zmienić sukno.
              </p>
            </div>

            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-50 to-orange-50 mb-8">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-deep-charcoal mb-6 font-semibold">
                  Wiem, bo sam to robiłem. I&nbsp;widzę to u&nbsp;każdego, kto do
                  mnie przychodzi.
                </p>
                <ul className="space-y-4 text-lg text-deep-charcoal/80 mb-8">
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>
                      Szlifowałeś go kursami — Todoist, Asana, Notion, GTD, Deep
                      Work.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>Polerował terapeutami i&nbsp;coachami.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>Czyściłeś Headspace'em i&nbsp;Calmem.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>
                      Kupowałeś nowe oprawki — nowe systemy, nowe metody, nowe
                      narzędzia.
                    </span>
                  </li>
                </ul>

                <p className="text-2xl text-deep-charcoal mb-4 font-bold">
                  I&nbsp;każde z&nbsp;nich działało. Tydzień. Może miesiąc.
                </p>
                <p className="text-xl text-deep-charcoal mb-8">
                  A&nbsp;potem ten znajomy moment — kiedy wracasz do punktu wyjścia
                  z&nbsp;kolejną warstwą niespełnionych obietnic.
                </p>

                <div className="bg-white p-6 rounded-xl border-2 border-neural-blue/20 mb-6">
                  <p className="text-2xl font-bold text-neural-blue mb-3">
                    Każde nowe narzędzie to kolejna oprawka dla diamentu, który nie
                    potrzebuje oprawki.
                  </p>
                  <p className="text-xl text-deep-charcoal">
                    Potrzebuje kogoś, kto powie:{" "}
                    <strong>zdejmij sukno i&nbsp;spójrz</strong>.
                  </p>
                </div>

                <p className="text-lg text-deep-charcoal/80">
                  To jest moment, którego nie da się osiągnąć kolejnym kursem. Bo
                  problem nie leży w&nbsp;tym, czego nie wiesz. Leży w&nbsp;tym,
                  czego nie widzisz — bo patrzysz w&nbsp;niewłaściwą stronę.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: AUTORYTET — Historia jako most
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Wiem, jak to wygląda{" "}
                <span className="text-zenith-gold">od środka</span>.
              </h2>
              <p className="text-xl text-white/80">
                Przez lata leżałem na wszystkich kolorach sukna naraz.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                  <p>
                    W&nbsp;wieku 16 lat byłem uzależniony od kodeiny. Codzienne
                    migreny. Systemy produktywności budowałem nie po to, żeby się
                    rozwijać — po to, żeby przeżyć kolejny dzień.
                  </p>

                  <p className="text-xl text-white/90 mt-8">
                    Potem przyszedł sukces. Certyfikowany trener Microsoft.
                    Szkolenia dla Fortune 500, NATO, jednostek specjalnych.
                    10&nbsp;000 profesjonalistów w&nbsp;50 krajach. Psychologia
                    i&nbsp;informatyka z&nbsp;Oxfordu.
                  </p>

                  <p className="text-2xl text-zenith-gold font-bold mt-8">
                    W&nbsp;2014 roku stałem na balkonie i&nbsp;poważnie rozważałem
                    skok.
                  </p>

                  <p className="text-xl">
                    Miałem wszystko, na co ludzie patrzą z&nbsp;podziwem.
                    Najpiękniejszy diament w&nbsp;najdroższej oprawce, leżący na
                    jedwabnym suknie. I&nbsp;kompletną pustkę w&nbsp;środku.
                  </p>

                  <div className="bg-zenith-gold/10 p-6 rounded-xl border-2 border-zenith-gold/30 my-8">
                    <p className="text-2xl font-bold text-zenith-gold mb-4">
                      Zrozumiałem coś, co zmieniło nie tylko moje życie:
                    </p>
                    <p className="text-xl text-white">
                      Żeby zmienić grę, musiałem zobaczyć, że nie jestem graczem.
                      Jestem tym, kto patrzy.
                    </p>
                    <p className="text-lg text-white/80 mt-3">
                      Nie diamentem. Nie kolorem sukna. Obserwatorem, który może
                      wybrać — na czym ten diament położyć.
                    </p>
                  </div>

                  <p className="text-xl">
                    Od 19 lat tę mapę doskonalę. Z&nbsp;każdym człowiekiem,
                    z&nbsp;którym pracuję. Nie dlatego, że znam Twoje odpowiedzi.
                    Dlatego, że wiem, jak zapytać Cię tak, żebyś sam je znalazł.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: MECHANIZM — Diamentowy Umysł
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-lg px-6 py-3 mb-6">
                <Brain className="inline h-5 w-5 mr-2" />
                Jak to działa
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6">
                Diamentowy Umysł.{" "}
                <span className="text-neural-blue">Nie metafora — metoda.</span>
              </h2>
              <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto">
                Większość metod pracowała na powierzchni: zmiana nawyków,
                zarządzanie czasem, regulacja emocji. To jest szlifowanie
                diamentu, który nie potrzebuje szlifu.
              </p>
              <p className="text-xl text-deep-charcoal font-semibold mt-4">
                Ja pracuję głębiej. Na poziomie, na którym Ty — świadomie lub nie
                — decydujesz, na jakim suknie leżysz.
              </p>
            </div>

            <Card className="border-2 border-neural-blue/20 mb-8">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-deep-charcoal mb-6">
                  Jak to wygląda w&nbsp;praktyce?
                </h3>
                <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                  <p>
                    Na sesjach nie daję Ci odpowiedzi. Nie mówię Ci, co masz
                    robić. Nie prowadzę Cię przez 12 kroków i&nbsp;nie daję
                    workbooków do wypełnienia.
                  </p>
                  <p className="text-xl font-semibold text-deep-charcoal">
                    Zadaję Ci pytania. I&nbsp;buduję z&nbsp;Tobą metaforę, która
                    jest Twoja — tylko Twoja.
                  </p>
                  <p>
                    Bo jeden człowiek potrzebuje metafory samochodu sportowego na
                    torze. Inny — żaglówki na otwartym morzu. Jeszcze inny —
                    ciemnego pokoju pełnego pająków.
                  </p>
                  <p className="font-semibold text-deep-charcoal">
                    Metafora działa tam, gdzie logika się zatrzymuje.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Inline testimonial — Łukasz */}
            <Card className="border-2 border-zenith-gold/30 bg-zenith-gold/5">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-deep-charcoal/80 italic leading-relaxed mb-4">
                  „Jestem w&nbsp;szoku. Mam totalną pustkę w&nbsp;głowie. Jak
                  rzadko. Nie do końca wiem, co się wydarzyło... I&nbsp;chcę
                  więcej."
                </p>
                <p className="text-deep-charcoal font-bold">
                  — Łukasz, informatyk z&nbsp;ADHD
                </p>
                <p className="text-deep-charcoal/60 text-sm mt-2">
                  Nie uczył się medytacji. Rozmawialiśmy o&nbsp;samochodach
                  sportowych. A&nbsp;on zobaczył swój diament.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: OFERTA #1 — Life OS: System Upgrade
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-deep-space via-deep-charcoal to-deep-space text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">⚙️</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                LIFE OS:{" "}
                <span className="text-zenith-gold">System Upgrade</span>
              </h2>
              <p className="text-2xl text-white/80">
                8&nbsp;tygodni. Maksymalnie 5&nbsp;osób. Pełne zobaczenie
                diamentu pod suknem.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-2 border-zenith-gold/30 mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-4 text-lg text-white/90 leading-relaxed mb-8">
                  <p>
                    Nie poprawiamy jednego koloru. Nie zmieniamy sukna na
                    ładniejsze. Zdejmujesz wszystkie warstwy — i&nbsp;po raz
                    pierwszy widzisz, co jest pod nimi. Czyste. Twarde.
                    Przezroczyste. Twoje.
                  </p>
                  <p>
                    To jest praca 1:1. Ze mną. Nie z&nbsp;nagraniem. Nie
                    z&nbsp;kursem. Z&nbsp;człowiekiem, który siada naprzeciwko
                    Ciebie i&nbsp;zadaje pytanie, o&nbsp;którym nie wiedziałeś, że
                    potrzebujesz je usłyszeć.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-zenith-gold mb-6">
                  Co dostajesz:
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Pełna diagnostyka + mapa transformacji",
                      desc: "nie moja mapa. Twoja. Zbudowana z\u00A0Twoich doświadczeń, Twoich metafor, Twoich warstw sukna.",
                      value: "5 000 PLN",
                    },
                    {
                      title: "8 tygodni sesji 1:1",
                      desc: "intensywna praca filozoficzna. Nie będziesz mi opowiadał o\u00A0swoim tygodniu. Będziemy razem odsłaniali to, czego jeszcze nie widzisz — z\u00A0troską, ale bez znieczulenia.",
                      value: "16 000 PLN",
                    },
                    {
                      title: "Bezpośredni dostęp do mnie między sesjami",
                      desc: "bo przełomy nie zdarzają się według kalendarza. Kiedy stary kolor zacznie walczyć o\u00A0przetrwanie, chcę, żebyś wiedział, że nie jesteś z\u00A0tym sam.",
                      value: "8 000 PLN",
                    },
                    {
                      title: "Dostęp VIP do społeczności Lifehackerzy",
                      desc: "codzienne sesje o\u00A012:34. Prawdziwe rozmowy z\u00A0ludźmi, którzy myślą jak Ty. Ludzie, którzy też zdejmują sukna.",
                      value: "3 000 PLN",
                    },
                    {
                      title: 'Framework „Diamentowy Umysł"',
                      desc: "autorski model, który stosujesz po zakończeniu programu. Nie po to, żebyś był ode mnie zależny. Po to, żebyś nie potrzebował nikogo.",
                      value: "5 000 PLN",
                    },
                    {
                      title: "BONUS: Sesja follow-up 30 dni po programie",
                      desc: 'bo jak Gampopa mówił Milarepie, kiedy ten przychodził z\u00A0kolejnym oświeceniem: \u201EDobrze. Medytuj dalej.\u201D',
                      value: "2 000 PLN",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 bg-white/5 rounded-xl p-5 border border-white/10"
                    >
                      <div className="flex-1">
                        <p className="text-white font-bold text-lg">
                          {item.title}
                        </p>
                        <p className="text-white/70 mt-1">{item.desc}</p>
                      </div>
                      <p className="text-zenith-gold font-semibold whitespace-nowrap text-sm md:text-base">
                        wartość: {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-3xl font-bold text-zenith-gold mb-2">
                    Łączna wartość: 39&nbsp;000 PLN
                  </p>
                  <p className="text-white/70">
                    To nie jest dla każdego. To jest dla garści ludzi, którzy są
                    gotowi zobaczyć, co leży pod kolorem.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/discovery">
                <CTAButton variant="premium" size="xl" className="shadow-2xl">
                  Sprawdź dostępność
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: PROOF — Testimoniale
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-twilight-indigo/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-zenith-gold to-orange-500 text-white border-0 text-lg px-6 py-3 mb-6">
                <Users className="inline h-5 w-5 mr-2" />
                Prawdziwe transformacje
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
                Nie powiem Ci, że jestem dobry.{" "}
                <span className="text-neural-blue">
                  Pozwolę ludziom powiedzieć to za mnie.
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* ŁUKASZ */}
              <Card className="relative overflow-hidden border-2 border-zenith-gold/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl" />
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zenith-gold">
                        ŁUKASZ
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        Manager IT, ADHD, sceptyk
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed italic">
                    <p>
                      „Próbowałem medytować przez 180 dni. Headspace, Calm,
                      wszystko. Zasypywałem. Albo kręciłem młynka myślami.
                    </p>
                    <p>
                      Ludwik zapytał mnie, czy lubię jeździć samochodem
                      sportowym. Po godzinie rozmowy o&nbsp;torach, zakrętach
                      i&nbsp;hamulcach miałem totalną pustkę w&nbsp;głowie.
                      Pierwszy raz od lat.
                    </p>
                    <p className="font-bold not-italic text-deep-charcoal">
                      Nie wiem, co się wydarzyło. Ale chcę więcej."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* ARTUR */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl" />
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neural-blue">
                        ARTUR
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        Ojciec, przedsiębiorca
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed italic">
                    <p>
                      „Chodziłem na terapię. Myślałem, że mam przepracowane
                      rzeczy z&nbsp;dzieciństwa. A&nbsp;tu na jednym spotkaniu
                      z&nbsp;Ludwikiem poczułem, jak mięśnie w&nbsp;moim brzuchu
                      się fizycznie rozluźniają — bo w&nbsp;końcu dotarłem do
                      czegoś, czego terapeuta ze mną nie wydobył.
                    </p>
                    <p className="font-bold not-italic text-deep-charcoal">
                      Nie dlatego, że Ludwik jest lepszy od terapeuty. Dlatego,
                      że zadaje inne pytania."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* ANNA */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl" />
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neural-blue">
                        ANNA
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        CEO, 6-cyfrowe przychody roczne
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed italic">
                    <p>
                      „Przyszłam z&nbsp;przekonaniem, że świat jest
                      niesprawiedliwy wobec kobiet w&nbsp;biznesie. Ludwik nie
                      powiedział mi, że mam rację ani że nie mam. Zapytał:{" "}
                      <span className="font-bold text-neural-blue not-italic">
                        'Ile podatku płacisz każdego dnia za tę historię?'
                      </span>
                    </p>
                    <p className="font-bold not-italic text-deep-charcoal">
                      To pytanie rozwaliło mi głowę.
                    </p>
                    <p>
                      W&nbsp;8 tygodni przeszłam od narracji ofiary do agenta
                      zmiany. To nie był komfortowy proces. Ale był prawdziwy."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LUCJA */}
              <Card className="relative overflow-hidden border-2 border-twilight-indigo/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-twilight-indigo/10 rounded-full blur-3xl" />
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-twilight-indigo">
                        LUCJA
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        Founder Refspace
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed italic">
                    <p>
                      „Sukces w&nbsp;biznesie, chaos w&nbsp;głowie. Pracowałam na
                      wakacjach w&nbsp;mentalnym garniturze.
                    </p>
                    <p>
                      Ludwik pokazał mi, że to nie jest konflikt do rozwiązania —
                      to integracja do przyjęcia. Powiedział mi:{" "}
                      <span className="font-bold text-twilight-indigo not-italic">
                        'Nic nie jest dla Ciebie zbyt dobre.'
                      </span>
                    </p>
                    <p className="font-bold not-italic text-deep-charcoal">
                      I&nbsp;uwierzyłam."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: KWALIFIKACJA — Dla kogo / nie dla kogo
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Nie każdy jest gotowy.{" "}
                <span className="text-zenith-gold">I&nbsp;to jest w&nbsp;porządku.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NOT FOR YOU */}
              <Card className="bg-red-500/10 border-2 border-red-500/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-6">
                    To NIE jest dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-4 text-lg text-white/90">
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Szukasz kolejnego systemu produktywności
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Potrzebujesz kogoś, kto powie Ci, że wszystko jest okej
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>Chcesz gotową receptę z&nbsp;pudełka</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* FOR YOU */}
              <Card className="bg-zenith-gold/10 border-2 border-zenith-gold/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-zenith-gold mb-6">
                    To JEST dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-4 text-lg text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Osiągnąłeś sukces, który nie smakuje tak, jak miał
                        smakować
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Testowałeś już narzędzia i&nbsp;wiesz, że problem leży
                        głębiej niż kalendarz
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Jesteś gotów na rozmowę, po której wychodzisz
                        z&nbsp;czymś, co jest Twoje
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: AUTORYTET — Twarde fakty
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-deep-charcoal/60 mb-8">
              Gdybyś potrzebował potwierdzenia:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: "19", label: "lat jako MCT" },
                { value: "10K+", label: "profesjonalistów" },
                { value: "50+", label: "krajów" },
                { value: "Oxford", label: "University" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-deep-charcoal/10 shadow-sm"
                >
                  <p className="text-3xl md:text-4xl font-bold text-neural-blue">
                    {s.value}
                  </p>
                  <p className="text-deep-charcoal/60 text-sm mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg text-deep-charcoal/60">
              Fortune 500 · NATO · jednostki specjalne · Fundacja HACKERZY.PL od
              2010
            </p>
            <p className="text-xl text-deep-charcoal mt-4 font-semibold">
              Ale szczerze? To nie te liczby przekonują. Przekonuje to, co
              czujesz po pierwszych 15&nbsp;minutach rozmowy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: GWARANCJA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-zenith-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-neural-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Moja obietnica jest prosta.
            </h2>
            <p className="text-xl text-deep-charcoal/80 leading-relaxed mb-6">
              Jeśli po pierwszych 2&nbsp;tygodniach pracy razem nie poczujesz, że
              ta rozmowa jest fundamentalnie inna niż cokolwiek, co próbowałeś
              do tej pory — powiemy sobie „do&nbsp;widzenia" i&nbsp;nie zapłacisz
              ani złotówki więcej.
            </p>
            <p className="text-lg text-deep-charcoal/60">
              Mogę to zaoferować, bo wiem, co dostarczam. Nie godziny. Nie
              porady. Momenty, w&nbsp;których mówisz: „Nie wiem, co się
              wydarzyło."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: SCARCITY + CTA — Life OS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-deep-space via-deep-charcoal to-deep-space text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mam miejsce dla maksymalnie{" "}
              <span className="text-zenith-gold">5 osób</span> jednocześnie.
            </h2>
            <p className="text-xl text-white/80 mb-4">
              Nie dlatego, że taki mam marketing. Dlatego, że taka jest natura
              tej pracy.
            </p>
            <p className="text-lg text-white/60 mb-12">
              Nie da się prowadzić kogoś przez zobaczenie własnego diamentu
              w&nbsp;grupie 50 osób. Nie da się tego zrobić na webinarze.
            </p>

            <div className="bg-zenith-gold/10 rounded-2xl p-8 border border-zenith-gold/30 mb-12 max-w-xl mx-auto">
              <p className="text-6xl font-bold text-zenith-gold mb-2">5</p>
              <p className="text-white/80 text-lg">miejsc dostępnych</p>
            </div>

            <p className="text-xl text-white/80 mb-4">
              Jeśli to, co przeczytałeś, wywołało w&nbsp;Tobie jakiekolwiek
              poruszenie — to jest dobry znak.
            </p>
            <p className="text-2xl font-bold text-white mb-8">
              Nie potrzebujesz więcej tekstu. Potrzebujesz rozmowy.
            </p>

            <p className="text-white/60 mb-8">
              30&nbsp;minut. Bez sprzedaży. Bez obietnic, które nie są moje do
              złożenia. Sprawdzimy, czy jesteśmy sobie potrzebni.
            </p>

            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-2xl blur-xl opacity-50 animate-pulse" />
              <Link to="/discovery">
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="relative shadow-2xl"
                >
                  Umów bezpłatną rozmowę
                  <ArrowRight className="ml-2 h-6 w-6" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11: TRANSITION — Separator
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Jeszcze nie teraz? Rozumiem.
            </h2>
            <p className="text-xl text-deep-charcoal/80 leading-relaxed">
              Nie każdy jest gotowy na pełne zdejmowanie sukna. Czasem najpierw
              chcesz zobaczyć, jak pracuję. Wyczuć, czy ten język do Ciebie
              trafia. Sprawdzić, czy to nie kolejny guru z&nbsp;Instagrama.
            </p>
            <p className="text-xl text-deep-charcoal font-semibold mt-4">
              Mam na to coś.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12: OFERTA #2 — Aplikacje Mentalne
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-twilight-indigo/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl mb-4">🧠</div>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6">
                Aplikacje Mentalne
              </h2>
              <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto">
                Konkretne narzędzia na konkretne problemy. Twoje pierwsze
                doświadczenie z&nbsp;diamentowym podejściem.
              </p>
              <p className="text-lg text-deep-charcoal/60 mt-4 max-w-2xl mx-auto">
                6–8 tygodni materiału. Dostęp do społeczności Lifehackerzy. Cena,
                która nie wymaga podejmowania życiowej decyzji.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Hakowanie Produktywności */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neural-blue">
                      Hakowanie Produktywności
                    </h3>
                  </div>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Przetestowałeś każdy system GTD, a&nbsp;kalendarz nadal
                    wygląda jak pole bitwy? Zamiast zarządzać zadaniami —
                    zarządzasz energią. Zamiast walczyć z&nbsp;prokrastynacją —
                    zrozumiesz, czemu Twój diament nabiera koloru „za dużo".
                  </p>
                </CardContent>
              </Card>

              {/* Silna Głowa */}
              <Card className="relative overflow-hidden border-2 border-red-500/30 hover:border-red-500/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">
                      Silna Głowa
                    </h3>
                  </div>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Firewall dla Twojego umysłu. Presja przestaje paraliżować —
                    zaczyna skupiać. Krytyka przestaje ranić — zaczyna informować.
                    Dla tych, którzy w&nbsp;stresie dolewają benzyny do ognia
                    własnych myśli.
                  </p>
                </CardContent>
              </Card>

              {/* Uważne Życie */}
              <Card className="relative overflow-hidden border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-twilight-indigo/10 rounded-full blur-3xl" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-twilight-indigo">
                      Uważne Życie
                    </h3>
                  </div>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Medytacja, ale nie ta, w&nbsp;której walczysz z&nbsp;myślami
                    przed pustą ścianą. Ta, w&nbsp;której Łukasz — informatyk
                    z&nbsp;ADHD — po jednej rozmowie o&nbsp;samochodach
                    doświadczył totalnej pustki umysłu. Przejmujesz kontrolę nad
                    kokpitem.
                  </p>
                </CardContent>
              </Card>

              {/* Męski Kompas */}
              <Card className="relative overflow-hidden border-2 border-zenith-gold/30 hover:border-zenith-gold/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl" />
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-zenith-gold">
                      Męski Kompas
                    </h3>
                  </div>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Dla mężczyzn, którzy grali według cudzych reguł w&nbsp;grę,
                    której nie chcą wygrywać. Reinstalacja systemu tożsamości.
                    Siła przestaje być maską — staje się przezroczystą obecnością.
                    Jak diament.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-deep-charcoal/60 max-w-2xl mx-auto">
                Każda Aplikacja Mentalna daje Ci dostęp do społeczności
                Lifehackerów — cotygodniowe medytacje prowadzone (wtorki, 6:30),
                codzienne sesje coachingowe o&nbsp;12:34, i&nbsp;ludzie, którzy
                myślą jak Ty.
              </p>
            </div>

            <div className="text-center">
              <Link to="/program">
                <CTAButton className="shadow-xl">
                  Zobacz wszystkie Aplikacje Mentalne
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 13: CLOSING
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="border-t-2 border-neural-blue/20 pt-12">
              <p className="text-2xl font-bold text-deep-charcoal mb-2">
                — Ludwik C. Siadlak
              </p>
              <p className="text-lg italic text-deep-charcoal/70">
                Diamentowy umysł. Otwarta przyłbica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeTest;
