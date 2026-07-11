import { Link } from "react-router-dom";
import { ArrowRight, Diamond, Shield, Check, X, Sparkles, Brain, Zap, Compass } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DISCOVERY_LINK = "/discovery";
const PROGRAM_LINK = "/program";
const PROFILE_IMAGE = "/lovable-uploads/SIADLAK-coffee-transparent.png";

/* ─── tiny reusable bits ─── */

function DiamondDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-20">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
      <Diamond size={14} className="text-white/30" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
    </div>
  );
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <Link to={DISCOVERY_LINK}>
      <button
        className={`group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium tracking-wide transition-all duration-500 ${className}`}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--text-on-dark))] via-[hsl(var(--diamond-light))] to-[hsl(var(--text-on-dark))] opacity-90 group-hover:opacity-100 transition-opacity" />
        <span className="absolute inset-[1px] rounded-full bg-[hsl(var(--void-black))] group-hover:bg-[hsl(var(--void-black))] transition-colors" />
        <span className="relative z-10 text-[hsl(var(--text-on-dark))]">{children}</span>
        <ArrowRight size={16} className="relative z-10 text-[hsl(var(--text-on-dark))] group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[hsl(var(--text-on-dark-secondary))] mb-8">
      {children}
    </span>
  );
}

/* ─── page ─── */

export default function HomeTest2() {
  return (
    <>
      <Helmet>
        <title>Diamentowy Umysł — Ludwik C. Siadlak</title>
        <meta name="description" content="Nie szlifuję ludzi. Pokazuję im, że diament, którego szukają, już tam jest." />
      </Helmet>

      {/* base layer - entire page sits on very dark blue-black */}
      <div className="min-h-screen bg-[hsl(var(--void-black))] text-[hsl(var(--text-on-dark))] antialiased selection:bg-[hsl(var(--text-on-dark))]/20 selection:text-white">

        {/* ═══════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* prismatic ambient light */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[hsl(var(--depth-purple-dark))]/40 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[hsl(var(--depth-purple-dark))]/30 blur-[100px]" />
            <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--void-black))]/30 blur-[80px]" />
            {/* subtle diamond refraction lines */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_40%,rgba(232,213,183,0.015)_50%,transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(225deg,transparent_30%,rgba(168,180,208,0.01)_45%,transparent_55%)]" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* text */}
              <div className="order-2 lg:order-1 max-w-2xl">
                <div className="flex items-center gap-2 mb-10">
                  <Diamond size={16} className="text-[hsl(var(--text-on-dark))]" />
                  <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[hsl(var(--text-on-dark-secondary))]">
                    Diamentowy Umysł
                  </span>
                </div>

                <h1 className="text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] font-light text-white mb-10 tracking-tight">
                  Diament jest najtwardszą{" "}
                  <br className="hidden md:block" />
                  substancją na Ziemi.
                  <span className="block mt-2 text-[hsl(var(--text-on-dark-secondary))]">
                    I jest kompletnie przezroczysty.
                  </span>
                </h1>

                <div className="space-y-5 text-lg md:text-xl leading-relaxed text-[hsl(var(--text-on-dark-secondary))] max-w-xl">
                  <p>
                    Połóż go na czerwonym suknie – wygląda jak rubin.
                    Na zielonym – jak szmaragd.
                  </p>
                  <p>Zmień sukno – zmieni się „kolor" diamentu.</p>
                  <p className="text-[hsl(var(--text-on-dark))]">
                    Ale diament sam w sobie? Nie ma koloru. Jest czysty.
                  </p>
                  <p className="text-[hsl(var(--text-on-dark))] font-medium">
                    Twój umysł działa dokładnie tak samo.
                  </p>
                </div>

                <div className="mt-12 space-y-4 text-[hsl(var(--text-on-dark-secondary))] text-base md:text-lg leading-relaxed max-w-xl">
                  <p>
                    Otaczasz się presją – nabiera koloru napięcia.{" "}
                    <span className="text-[hsl(var(--text-on-dark-tertiary))]">Myślisz: „jestem zestresowany".</span>
                  </p>
                  <p>
                    Wchodzisz w sprint za celem – nabiera koloru głodu.{" "}
                    <span className="text-[hsl(var(--text-on-dark-tertiary))]">Myślisz: „nigdy nie mam dość".</span>
                  </p>
                  <p>
                    Wracasz po 14 godzinach – nabiera koloru pustki.{" "}
                    <span className="text-[hsl(var(--text-on-dark-tertiary))]">Myślisz: „coś jest ze mną nie tak".</span>
                  </p>
                </div>

                <div className="mt-12 space-y-4 text-lg md:text-xl text-[hsl(var(--text-on-dark))] max-w-xl">
                  <p>Ale to nie Ty się zmieniłeś. <span className="text-white">To sukno się zmieniło.</span></p>
                  <p className="text-white font-medium">Diament jest ten sam. Był, jest i będzie.</p>
                </div>

                <div className="mt-14 space-y-3 text-lg text-[hsl(var(--text-on-dark))]">
                  <p>
                    Nazywam się{" "}
                    <span className="text-white font-medium">Ludwik&nbsp;C.&nbsp;Siadlak</span>.
                  </p>
                  <p className="text-[hsl(var(--text-on-dark-secondary))]">Nie szlifuję ludzi. Nie zmieniam ich.</p>
                  <p className="text-white">
                    Pokazuję im, że diament, którego szukają… już tam jest.
                  </p>
                </div>

                <div className="mt-14">
                  <CTA>Umów bezpłatną rozmowę</CTA>
                </div>
              </div>

              {/* image */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* glow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--depth-purple-dark))]/50 via-[hsl(var(--depth-purple-dark))]/30 to-transparent blur-[60px] scale-110" />
                  <img
                    src={PROFILE_IMAGE}
                    alt="Ludwik C. Siadlak"
                    className="relative z-10 w-72 md:w-96 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
                  />
                  {/* subtle diamond shape accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 border border-white/5 rotate-45 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            PROBLEM
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Problem</SectionLabel>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Przez lata próbowałeś zmienić diament.
            </h2>
            <p className="text-xl md:text-2xl text-[hsl(var(--text-on-dark-secondary))] mb-16">
              Nie wiedziałeś, że wystarczyło zmienić sukno.
            </p>

            <div className="space-y-5 text-lg leading-relaxed text-[hsl(var(--text-on-dark-secondary))]">
              <p>Wiem, bo sam to robiłem. I widzę to u&nbsp;każdego, kto do mnie przychodzi.</p>
              <p>
                Szlifowałeś go kursami: GTD, Todoist, Asana, Notion.
                <br />Polerowałeś terapeutami i&nbsp;coachami.
                <br />Czyściłeś Headspace'em i&nbsp;Calmem.
                <br />Kupowałeś nowe oprawki – nowe systemy, metody, narzędzia.
              </p>
              <p>
                I każde działało. Tydzień. Miesiąc.{" "}
                <span className="text-[hsl(var(--text-on-dark))]">A potem ten znajomy moment:</span>
              </p>
              <p className="text-[hsl(var(--text-on-dark))] italic pl-4 border-l-2 border-[hsl(var(--text-on-dark))]/20">
                wracasz do punktu wyjścia, z&nbsp;kolejną warstwą niespełnionych obietnic.
              </p>
              <p>
                Nie dlatego, że te narzędzia są złe.
                <br />Nie dlatego, że terapia nie działa.
                <br />Nie dlatego, że jesteś zbyt skomplikowany.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Dlatego, że pracowałeś na interfejsie. Na kolorze sukna.
                <br />A nie na tym, co leży pod spodem.
              </p>
              <p>
                Każde nowe narzędzie to kolejna oprawka.
                <br />Dla diamentu, który nie potrzebuje oprawki.
              </p>
              <p className="text-white text-xl mt-8">
                On potrzebuje kogoś, kto powie:
                <br />
                <span className="italic text-[hsl(var(--text-on-dark))]">„Zdejmij sukno i&nbsp;spójrz".</span>
              </p>
              <p className="mt-8 text-[hsl(var(--text-on-dark-secondary))]">
                To jest moment, którego nie da się osiągnąć kursem.
                <br />Bo problem nie leży w&nbsp;tym, czego <em>nie wiesz</em>.
                <br />Leży w&nbsp;tym, czego <em>nie widzisz</em> – bo patrzysz w&nbsp;niewłaściwą stronę.
              </p>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            AUTHORITY
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Autorytet</SectionLabel>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-16 leading-tight">
              Nie liczby. Przełom.
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-[hsl(var(--text-on-dark-secondary))]">
              <p>
                Mógłbym Ci teraz wrzucić CV: 19 lat jako trener Microsoft. 10&nbsp;000+ profesjonalistów.
                8&nbsp;krajów. Fortune&nbsp;500. NATO. Jednostki specjalne. Psychologia i&nbsp;informatyka – Oxford.
              </p>
              <p>
                Mógłbym. <span className="text-[hsl(var(--text-on-dark))]">Ale to nie to przekonuje ludzi, z&nbsp;którymi pracuję.</span>
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Przekonuje ich to, co czują po pierwszych 15 minutach rozmowy.
              </p>
              <p>I fakt, że wiem, jak to jest leżeć na wszystkich kolorach sukna naraz.</p>

              <div className="my-10 pl-5 border-l-2 border-[hsl(var(--depth-purple-dark))]/60 space-y-4">
                <p className="text-[hsl(var(--text-on-dark))]">
                  W 2014 roku stałem na stacji metra „Dworzec Gdański"
                  i&nbsp;poważnie rozważałem zrobienie kroku pod nadjeżdżający pociąg.
                </p>
                <p>
                  Miałem wszystko, na co ludzie patrzą z&nbsp;podziwem.
                  Najpiękniejszy diament w&nbsp;najdroższej oprawce, na jedwabnym suknie.
                </p>
                <p className="text-[hsl(var(--text-on-dark))]">I kompletną pustkę w&nbsp;środku.</p>
              </div>

              <p className="text-[hsl(var(--text-on-dark))]">
                Tamtego dnia zrozumiałem coś, co potem zmieniło życie setek ludzi:
              </p>
              <p className="text-white text-xl font-medium">
                żeby zmienić grę, musiałem zobaczyć, że nie jestem graczem.
              </p>
              <p className="text-white">Jestem tym, kto patrzy.</p>
              <p className="text-[hsl(var(--text-on-dark-secondary))]">
                Nie diamentem. Nie kolorem sukna.
                <br />Obserwatorem, który może <em className="text-[hsl(var(--text-on-dark))]">wybrać</em> – na czym ten diament położyć.
              </p>

              <p className="mt-8">
                Od 19 lat tę mapę doskonalę. Z&nbsp;każdym człowiekiem, z&nbsp;którym pracuję.
              </p>
              <p>Nie dlatego, że znam Twoje odpowiedzi.</p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Dlatego, że wiem, jak zapytać Cię tak, żebyś sam je znalazł.
              </p>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            MECHANISM
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Metoda</SectionLabel>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
              Diamentowy Umysł.
            </h2>
            <p className="text-xl text-[hsl(var(--text-on-dark-secondary))] mb-16">Nie metafora – metoda.</p>

            <div className="space-y-5 text-lg leading-relaxed text-[hsl(var(--text-on-dark-secondary))]">
              <p>
                Większość metod pracuje na powierzchni: nawyki, czas, emocje.
                <br />To szlifowanie diamentu, który nie potrzebuje szlifu.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Ja pracuję głębiej. Na poziomie, na którym Ty – świadomie lub nie – decydujesz, na jakim suknie leżysz.
              </p>
              <p>
                Nie daję Ci odpowiedzi.
                <br />Nie mówię Ci, co masz robić.
                <br />Nie prowadzę Cię przez 12 kroków.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Zadaję Ci pytania. I buduję z&nbsp;Tobą metaforę, która jest <em>Twoja</em>.
              </p>
              <p>
                Bo jeden człowiek potrzebuje metafory samochodu na torze.
                Inny – żaglówki na morzu.
                Jeszcze inny – ciemnego pokoju pełnego pająków.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">Metafora działa tam, gdzie logika się zatrzymuje.</p>
              <p>
                A kiedy Twoja metafora odsłoni to, czego do tej pory nie widziałeś – wydarzy się coś, czego nie da się opisać słowami.
              </p>
            </div>

            {/* inline testimonial */}
            <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--void-black))]/80 to-[hsl(var(--void-black))]/80 border border-white/[0.04]">
              <p className="text-[hsl(var(--text-on-dark-secondary))] text-sm mb-4 tracking-wide uppercase font-medium">
                Łukasz — informatyk, ADHD, sceptyk
              </p>
              <blockquote className="text-[hsl(var(--text-on-dark))] text-lg leading-relaxed italic">
                „Jestem w szoku. Mam totalną pustkę w głowie. Jak rzadko.
                Nie do końca wiem, co się wydarzyło... I&nbsp;chcę więcej."
              </blockquote>
              <p className="text-[hsl(var(--text-on-dark-tertiary))] text-base mt-4">
                Nie uczył się medytacji. Rozmawialiśmy o&nbsp;samochodach.
                <br />A on zobaczył swój diament.
              </p>
            </div>

            <div className="mt-10 space-y-3 text-lg text-[hsl(var(--text-on-dark-secondary))]">
              <p className="text-[hsl(var(--text-on-dark))]">To nie jest coaching, który widziałeś u&nbsp;innych.</p>
              <p>To praca na poziomie systemu operacyjnego.</p>
              <p className="text-[hsl(var(--text-on-dark))]">Prowadzona z&nbsp;troską. Ale bez anestezji.</p>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            OFFER #1 - Life OS
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          {/* subtle elevated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Oferta</SectionLabel>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--text-on-dark))]/20 to-[hsl(var(--text-on-dark))]/5 flex items-center justify-center">
                <Sparkles size={18} className="text-[hsl(var(--text-on-dark))]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Life OS: System Upgrade
              </h2>
            </div>

            <p className="text-xl text-[hsl(var(--text-on-dark-secondary))] mb-10">
              8 tygodni. Maksymalnie 5 osób. Pełne zobaczenie diamentu pod suknem.
            </p>

            <div className="space-y-5 text-lg leading-relaxed text-[hsl(var(--text-on-dark-secondary))] mb-14">
              <p>
                Nie poprawiamy jednego koloru. Nie zmieniamy sukna na ładniejsze.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">
                Zdejmujesz <em>wszystkie</em> warstwy.
              </p>
              <p>
                I po raz pierwszy widzisz, co jest pod nimi.
                <span className="text-white"> Czyste. Twarde. Przezroczyste. Twoje.</span>
              </p>
              <p>
                To praca 1:1. Ze mną. Nie z nagraniem. Nie z kursem.
                <br />Z człowiekiem, który siada naprzeciwko Ciebie i zadaje pytanie, o którym nie wiedziałeś, że potrzebujesz je usłyszeć.
              </p>
            </div>

            {/* value items */}
            <h3 className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--text-on-dark-secondary))] font-semibold mb-8">Co dostajesz</h3>
            <div className="space-y-6 mb-14">
              {[
                { text: "Pełna diagnostyka + mapa transformacji. Nie moja mapa. Twoja. Zbudowana z Twoich doświadczeń, Twoich metafor, Twoich warstw sukna", value: "5 000 PLN" },
                { text: "8 tygodni sesji 1:1. Intensywna praca filozoficzna. Bez gadania o tygodniu. Tylko odsłanianie", value: "16 000 PLN" },
                { text: "Bezpośredni dostęp między sesjami. Bo przełomy nie zdarzają się według kalendarza", value: "8 000 PLN" },
                { text: "Dostęp VIP do społeczności Lifehackerzy + codzienne sesje o 12:34. Ludzie, którzy też zdejmują sukna", value: "3 000 PLN" },
                { text: "Framework „Diamentowy Umysł\u201D. Nie po to, żebyś był ode mnie zależny. Po to, żebyś nie potrzebował nikogo", value: "5 000 PLN" },
                { text: "BONUS: Sesja follow-up 30 dni po programie. Bo jak mówił Gampopa: „Dobrze. Medytuj dalej\u201D", value: "2 000 PLN" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-[hsl(var(--text-on-dark))]/30 flex items-center justify-center flex-shrink-0">
                    <Diamond size={10} className="text-[hsl(var(--text-on-dark))]/60" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[hsl(var(--text-on-dark))] text-base leading-relaxed">{item.text}</p>
                    <p className="text-[hsl(var(--text-on-dark-tertiary))] text-sm mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-10">
              <p className="text-[hsl(var(--text-on-dark-secondary))] text-base mb-1">Łączna wartość</p>
              <p className="text-white text-3xl font-light">39 000 PLN</p>
            </div>

            <p className="text-[hsl(var(--text-on-dark-secondary))] text-lg mb-10">
              To nie jest dla każdego. To dla garści ludzi, którzy są gotowi zobaczyć, co leży pod kolorem.
              <br />I zaakceptować, że to, co znajdą, zmieni wszystko.
            </p>

            <CTA>Sprawdź dostępność</CTA>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            PROOF
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Głosy</SectionLabel>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
              Nie powiem Ci, że jestem dobry.
            </h2>
            <p className="text-xl text-[hsl(var(--text-on-dark-secondary))] mb-16">
              Pozwolę ludziom, z&nbsp;którymi pracowałem, powiedzieć to, co chcą.
            </p>

            <div className="space-y-10">
              {[
                {
                  name: "Łukasz",
                  label: "IT, ADHD, sceptyk",
                  quote: "Próbowałem medytować przez 180 dni. Headspace, Calm, wszystko. Zasypywałem. Albo kręciłem młynka myślami. Ludwik zapytał mnie, czy lubię jeździć samochodem sportowym. Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat. Nie wiem, co się wydarzyło. Ale chcę więcej.",
                },
                {
                  name: "Artur",
                  label: "ojciec, przedsiębiorca",
                  quote: "Chodziłem na terapię. Myślałem, że mam przepracowane rzeczy z dzieciństwa. A tu na jednym spotkaniu poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają – bo w końcu dotarłem do czegoś, czego terapeuta ze mną nie wydobył. Nie dlatego, że Ludwik jest lepszy. Dlatego, że zadaje inne pytania.",
                },
                {
                  name: "Anna",
                  label: "CEO, 6-cyfrowe przychody",
                  quote: "Przyszłam z przekonaniem, że świat jest niesprawiedliwy wobec kobiet w biznesie. Ludwik zapytał: \u201EIle podatku płacisz każdego dnia za tę historię?\u201D To pytanie rozwaliło mi głowę. W 8 tygodni przeszłam od narracji ofiary do agenta zmiany. To nie był komfortowy proces. Ale był prawdziwy.",
                },
                {
                  name: "Łucja",
                  label: "Founder Refspace",
                  quote: "Sukces w biznesie, chaos w głowie. Pracowałam na wakacjach w mentalnym garniturze. Ludwik pokazał mi, że to nie jest konflikt do rozwiązania – to integracja do przyjęcia. Powiedział: \u201ENic nie jest dla Ciebie zbyt dobre.\u201D I uwierzyłam.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--void-black))]/60 to-[hsl(var(--void-black))]/60 border border-white/[0.04]"
                >
                  <p className="text-[hsl(var(--text-on-dark))] text-sm font-semibold tracking-wide mb-1">{t.name}</p>
                  <p className="text-[hsl(var(--text-on-dark-tertiary))] text-sm mb-5">{t.label}</p>
                  <blockquote className="text-[hsl(var(--text-on-dark))] text-lg leading-relaxed italic">
                    „{t.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            QUALIFICATION
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Kwalifikacja</SectionLabel>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-16 leading-tight">
              Nie każdy jest gotowy. I to jest w&nbsp;porządku.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* not for you */}
              <div className="p-8 rounded-2xl bg-[hsl(var(--void-black))]/60 border border-white/[0.04]">
                <p className="text-[hsl(var(--text-on-dark-tertiary))] text-sm font-semibold tracking-wide uppercase mb-6">To nie dla Ciebie, jeśli</p>
                <ul className="space-y-4">
                  {[
                    "szukasz kolejnego systemu produktywności",
                    "potrzebujesz kogoś, kto powie Ci, że wszystko jest okej",
                    "chcesz gotową receptę z pudełka",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[hsl(var(--text-on-dark-secondary))]">
                      <X size={16} className="text-[hsl(var(--depth-purple-dark))] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* for you */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--void-black))]/80 to-[hsl(var(--void-black))]/80 border border-[hsl(var(--text-on-dark))]/10">
                <p className="text-[hsl(var(--text-on-dark))] text-sm font-semibold tracking-wide uppercase mb-6">To jest dla Ciebie, jeśli</p>
                <ul className="space-y-4">
                  {[
                    "osiągnąłeś sukces, który nie smakuje tak, jak miał smakować",
                    "testowałeś narzędzia i wiesz, że problem leży głębiej niż kalendarz",
                    "jesteś gotów na rozmowę, po której wychodzisz z czymś, co jest Twoje",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[hsl(var(--text-on-dark))]">
                      <Check size={16} className="text-[hsl(var(--text-on-dark))] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            GUARANTEE
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Gwarancja</SectionLabel>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-10 leading-tight">
              Moja obietnica jest prosta.
            </h2>

            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[hsl(var(--void-black))]/60 to-[hsl(var(--void-black))]/60 border border-[hsl(var(--text-on-dark))]/10 space-y-5 text-lg text-[hsl(var(--text-on-dark))] leading-relaxed">
              <p>
                Jeśli po pierwszych 2 tygodniach nie poczujesz, że ta rozmowa jest fundamentalnie inna niż cokolwiek, co próbowałeś do tej pory – powiemy sobie „do widzenia".
              </p>
              <p className="text-white">Nie zapłacisz ani złotówki więcej.</p>
              <p className="text-[hsl(var(--text-on-dark-secondary))]">
                Mogę to zaoferować, bo wiem, co dostarczam.
                <br />Nie godziny. Nie porady.
              </p>
              <p className="text-[hsl(var(--text-on-dark))] italic">
                Momenty, w których mówisz: „Nie wiem, co się wydarzyło."
              </p>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            SCARCITY + CTA
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          {/* subtle prismatic glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] rounded-full bg-[hsl(var(--depth-purple-dark))]/20 blur-[100px]" />

          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl text-center">
            <p className="text-[hsl(var(--text-on-dark-secondary))] text-lg mb-6">
              Mam miejsce dla maksymalnie <span className="text-white font-medium">5 osób</span> jednocześnie.
            </p>
            <p className="text-[hsl(var(--text-on-dark-secondary))] text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Nie dlatego, że taki mam marketing.
              Dlatego, że taka jest natura tej pracy.
              Nie da się prowadzić kogoś przez zobaczenie własnego diamentu w&nbsp;grupie 50 osób.
            </p>
            <p className="text-[hsl(var(--text-on-dark))] text-lg mb-4">
              Jeśli to, co przeczytałeś, wywołało w&nbsp;Tobie jakiekolwiek poruszenie – to dobry znak.
            </p>
            <p className="text-white text-xl mb-10">
              Nie potrzebujesz więcej tekstu. Potrzebujesz rozmowy.
            </p>
            <p className="text-[hsl(var(--text-on-dark-tertiary))] text-sm mb-10">
              30 minut · Bez sprzedaży · Sprawdzimy, czy jesteśmy sobie potrzebni
            </p>
            <CTA>Umów bezpłatną rozmowę</CTA>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            SEPARATOR - Oferta #2
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <div className="space-y-4 text-lg text-[hsl(var(--text-on-dark-secondary))] leading-relaxed">
              <p className="text-[hsl(var(--text-on-dark))] text-xl">Jeszcze nie teraz? Rozumiem.</p>
              <p>
                Nie każdy jest gotowy na pełne zdejmowanie sukna.
                <br />Czasem najpierw chcesz zobaczyć, jak pracuję. Wyczuć, czy ten język do Ciebie trafia.
                <br />Sprawdzić, czy to nie kolejny guru z&nbsp;Instagrama.
              </p>
              <p className="text-[hsl(var(--text-on-dark))]">Mam na to coś.</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            OFFER #2 - Aplikacje Mentalne
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--void-black))] via-[hsl(var(--void-black))] to-[hsl(var(--void-black))]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
            <SectionLabel>Aplikacje Mentalne</SectionLabel>

            <div className="flex items-center gap-3 mb-4">
              <Brain size={22} className="text-[hsl(var(--text-on-dark-secondary))]" />
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Aplikacje Mentalne
              </h2>
            </div>
            <p className="text-xl text-[hsl(var(--text-on-dark-secondary))] mb-6">
              Konkretne narzędzia na konkretne problemy.
            </p>
            <p className="text-[hsl(var(--text-on-dark-secondary))] text-lg mb-14 leading-relaxed">
              Twój umysł to system operacyjny. Aplikacje Mentalne to programy, które instalujesz w tym systemie.
              Każda pracuje na jednym fundamencie. 6–8 tygodni materiału. Dostęp do społeczności Lifehackerzy.
              Cena, która nie wymaga podejmowania życiowej decyzji.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <Zap size={18} />,
                  title: "Hakowanie Produktywności",
                  desc: "Przetestowałeś każdy system GTD, a kalendarz nadal wygląda jak pole bitwy? Zamiast zarządzać zadaniami – zarządzasz energią. Zamiast walczyć z prokrastynacją – rozumiesz, czemu Twój diament nabiera koloru „za dużo\u201D i co z tym zrobić.",
                },
                {
                  icon: <Shield size={18} />,
                  title: "Silna Głowa",
                  desc: "Firewall dla Twojego umysłu. Presja przestaje paraliżować – zaczyna skupiać. Krytyka przestaje ranić – zaczyna informować. Dla tych, którzy w stresie dolewają benzyny do ognia własnych myśli.",
                },
                {
                  icon: <Diamond size={18} />,
                  title: "Uważne Życie",
                  desc: "Medytacja, ale nie ta, w której walczysz z myślami przed pustą ścianą. Ta, w której Łukasz – informatyk z ADHD – po jednej rozmowie o samochodach doświadczył totalnej pustki umysłu. Przejmujesz kontrolę nad kokpitem.",
                },
                {
                  icon: <Compass size={18} />,
                  title: "Męski Kompas",
                  desc: "Dla mężczyzn, którzy grali według cudzych reguł w grę, której nie chcą wygrywać. Reinstalacja systemu tożsamości. Siła przestaje być maską – staje się przezroczystą obecnością. Jak diament.",
                },
              ].map((app, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-2xl bg-[hsl(var(--void-black))]/60 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[hsl(var(--text-on-dark-secondary))]">{app.icon}</span>
                    <h3 className="text-xl font-medium text-white">{app.title}</h3>
                  </div>
                  <p className="text-[hsl(var(--text-on-dark-secondary))] leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[hsl(var(--text-on-dark-secondary))] text-base mt-10 leading-relaxed">
              Każda Aplikacja Mentalna daje Ci dostęp do społeczności Lifehackerów:
              cotygodniowe medytacje (wtorki, 6:30), codzienne sesje o&nbsp;12:34,
              i&nbsp;ludzie, którzy myślą jak Ty.
            </p>

            <div className="mt-10">
              <Link
                to={PROGRAM_LINK}
                className="inline-flex items-center gap-2 text-[hsl(var(--text-on-dark))] hover:text-white transition-colors text-base font-medium"
              >
                Zobacz wszystkie Aplikacje Mentalne
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ═══════════════════════════════════════════════════
            CLOSING
        ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl text-center">
            <p className="text-[hsl(var(--text-on-dark))] text-xl mb-2">Diamentowy umysł. Otwarta przyłbica.</p>
            <p className="text-[hsl(var(--text-on-dark-tertiary))] text-base">— Ludwik C. Siadlak</p>
          </div>
        </section>

        {/* bottom breathing room */}
        <div className="h-16" />
      </div>
    </>
  );
}
