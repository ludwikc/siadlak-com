import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";
import { Link } from "react-router-dom";
import portalHakprod from "@/assets/portal-hakprod.png";
import portalSilnaglowa from "@/assets/portal-silnaglowa.png";
import compassHero from "@/assets/compass-hero-bg.png";

/* ─── tiny reusable pieces ─── */
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-on-light/40 mb-6">
    {children}
  </p>
);

const TheDivider = () => (
  <div className="w-full max-w-5xl mx-auto">
    <div className="h-[1px] bg-gray-200/50" />
  </div>
);

const Quote = ({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role?: string;
}) => (
  <blockquote className="border-l-2 border-text-on-light/10 pl-6 py-2">
    <p className="text-lg italic leading-relaxed text-text-on-light/80 mb-4">
      {text}
    </p>
    <footer className="not-italic">
      <p className="font-semibold text-sm uppercase tracking-wider text-text-on-light">
        {author}
      </p>
      {role && (
        <p className="text-xs text-text-on-light/50 mt-1">{role}</p>
      )}
    </footer>
  </blockquote>
);

const SmallQuote = ({
  text,
  author,
}: {
  text: string;
  author: string;
}) => (
  <div className="text-center">
    <blockquote className="text-sm italic text-text-on-light/60 leading-relaxed mb-2">
      {text}
    </blockquote>
    <footer className="text-xs font-medium text-text-on-light/40">
      — {author}
    </footer>
  </div>
);

const Index = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("home")} />

      {/* ═══════════ HERO: PERSPEKTYWA ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
            {/* Left column */}
            <div className="lg:col-span-5">
              <SectionLabel>PERSPEKTYWA</SectionLabel>

              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.1] text-text-on-light mb-8">
                Diament jest najtwardszą substancją na Ziemi.
                <br />
                <span className="font-normal text-text-on-light/60">
                  I jest kompletnie przezroczysty.
                </span>
              </h1>

              <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80 mb-10">
                <p>
                  Połóż go na czerwonym suknie – wygląda jak rubin. Na zielonym –
                  jak szmaragd.
                  <br />
                  Zmień sukno – zmieni się „kolor" diamentu.
                </p>
                <p>
                  Ale diament sam w sobie?{" "}
                  <strong className="text-text-on-light">
                    Nie ma koloru. Jest czysty.
                  </strong>
                  <br />
                  Twój umysł działa dokładnie tak samo.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-text-on-light/30">●</span>
                  <p className="text-text-on-light/70">
                    Otaczasz się presją – nabiera koloru napięcia. Myślisz:
                    „jestem zestresowany".
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-text-on-light/30">●</span>
                  <p className="text-text-on-light/70">
                    Wchodzisz w sprint za kolejnym celem – nabiera koloru głodu.
                    Myślisz: „nigdy nie mam dość".
                  </p>
                </div>
              </div>

              <p className="text-lg text-text-on-light/70 mb-2">
                Ale to nie Ty się zmieniłeś.
              </p>
              <p className="text-2xl font-bold text-text-on-light">
                To sukno się zmieniło.
              </p>

              <div className="mt-12">
                <Link
                  to="/discovery"
                  className="inline-block font-semibold text-sm uppercase tracking-[0.2em] text-text-on-light border-b border-text-on-light/30 pb-1 hover:opacity-70 transition-opacity"
                >
                  LUDWIK C. SIADLAK
                </Link>
              </div>
            </div>

            {/* Right column — photo */}
            <div className="lg:col-span-7 relative flex items-end">
              <img
                src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                alt="Ludwik C. Siadlak"
                className="w-full h-auto max-h-[600px] object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS STRIP #1 ═══════════ */}
      <section className="bg-diamond-light py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <SmallQuote
              text="Ludwik is the best instructor I have ever met. His knowledge and teaching skills made this course incredibly interesting even for person who is quite familiar with this software."
              author="Paweł Cerkaski"
            />
            <SmallQuote
              text="Excellent instructor. Extremely knowledgeable, articulate and personable. Best instructor I've had in many years."
              author="Betty M. Greenberg"
            />
            <SmallQuote
              text="Bardzo fajny gość. Ma wiedzę ale przede wszystkim osobowość. Z pełnym przeświadczeniem właściwa osoba na właściwym miejscu. Nie dajcie mu odejść."
              author="Adam Anioła"
            />
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ DIAGNOZA ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>DIAGNOZA</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-8">
              To nie Ty jesteś zepsuty
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80 mb-12">
              <p>
                Przez lata próbowałeś zmienić diament. Nie wiedziałeś, że
                wystarczyło zmienić sukno. Wiem, bo sam to robiłem. I widzę to u
                każdego, kto do mnie przychodzi.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {[
                "Szlifowałeś go kursami: GTD, Todoist, Asana.",
                "Polerowałeś terapeutami i coachami.",
                "Czyściłeś Headspace'em i Calmem.",
                "Kupowałeś nowe systemy i metody.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">
                    ✕
                  </span>
                  <p className="text-text-on-light/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80">
              <p>
                I każde działało. Tydzień. Miesiąc. A potem ten znajomy moment:
                wracasz do punktu wyjścia, z kolejną warstwą niespełnionych
                obietnic.
              </p>
              <p>
                Diament nie potrzebuje kolejnej oprawki.
                <br />
                On potrzebuje kogoś, kto powie:
                <br />
                <strong className="text-text-on-light">
                  „Zdejmij sukno i spójrz".
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote: Łukasz */}
      <section className="bg-diamond-light py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Quote
            text="Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat."
            author="ŁUKASZ"
            role="IT, ADHD, sceptyk"
          />
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ AUTORYTET ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>AUTORYTET</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-12">
              Nie liczby. Przełom.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="border-r-0 lg:border-r border-gray-200/50 lg:pr-12">
                <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80">
                  <p>
                    Mógłbym Ci teraz wrzucić CV: 19 lat jako trener Microsoft.
                    10 000 profesjonalistów. Fortune 500. NATO. Jednostki
                    specjalne. Psychologia i informatyka – Oxford.
                  </p>
                  <p>
                    Mógłbym. Ale to nie to przekonuje ludzi. Przekonuje ich to, że
                    wiem, jak to jest leżeć na wszystkich kolorach sukna naraz.
                  </p>
                </div>

                <blockquote className="mt-8 text-xl italic leading-relaxed text-text-on-light/70 border-l-4 border-text-on-light/10 pl-6">
                  "W 2014 roku stałem na balkonie i poważnie rozważałem skok.
                  Miałem wszystko. Najpiękniejszy diament w najdroższej oprawce,
                  na jedwabnym suknie. I kompletną pustkę w środku."
                </blockquote>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80">
                <p>
                  Tamtego dnia zrozumiałem coś, co potem zmieniło życie setek
                  ludzi:{" "}
                  <strong className="text-text-on-light">
                    żeby zmienić grę, musiałem zobaczyć, że nie jestem graczem.
                  </strong>
                </p>
                <p className="text-text-on-light text-center text-xl font-medium">
                  Jestem tym, kto patrzy.
                </p>
                <p>
                  Od 19 lat tę mapę doskonalę. Nie dlatego, że znam Twoje
                  odpowiedzi. Dlatego, że wiem, jak zapytać Cię tak, żebyś sam
                  je znalazł.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International testimonials strip */}
      <section className="bg-diamond-light py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <SmallQuote
              text="🇬🇧 Great instructor! Would easily recommend Ludwik to anyone wanting to learn Transact-SQL, or any other Microsoft product for that matter, as he's energetic, knowledgeable, competent and great at teaching. 10/10."
              author="Uczestnik szkolenia w Londynie"
            />
            <SmallQuote
              text="🇳🇴 Ludwik was very professional, polite, to the point and also funny. Easy to talk to and could answer any question regarding any subject of SQL Server. I would highly recommend him."
              author="Johnny, Norwegia"
            />
            <SmallQuote
              text="🇵🇱 Brak uwag. Bardzo dobry kontakt, sposób przekazywania informacji, kultura osobista."
              author="Uczestnik szkolenia w Warszawie"
            />
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ MECHANIZM ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>MECHANIZM</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-2">
              Diamentowy Umysł
            </h2>
            <p className="text-sm uppercase tracking-wider text-text-on-light/50 mb-12">
              NIE METAFORA – METODA
            </p>

            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80 mb-16">
              <p>
                Większość metod pracuje na powierzchni: nawyki, czas, emocje. To
                szlifowanie diamentu, który nie potrzebuje szlifu. Ja pracuję
                głębiej. Na poziomie jądra systemu.
              </p>
              <p>
                Nie daję Ci odpowiedzi. Nie prowadzę Cię przez 12 kroków.
              </p>
              <p>
                Zadaję Ci pytania. I buduję z Tobą metaforę, która jest{" "}
                <em>Twoja</em>.
              </p>
              <p>Metafora działa tam, gdzie logika się zatrzymuje.</p>
            </div>

            <div className="bg-gray-50 rounded p-8 mb-12">
              <p className="text-sm uppercase tracking-wider text-text-on-light/50 mb-4">
                CASE STUDY: ŁUKASZ
              </p>
              <blockquote className="text-xl italic leading-relaxed text-text-on-light/80 mb-4">
                „Jestem w szoku. Mam totalną pustkę w głowie. Jak rzadko. Nie do
                końca wiem, co się wydarzyło... I chcę więcej."
              </blockquote>
              <p className="text-text-on-light/60">
                Nie uczył się medytacji. Rozmawialiśmy o samochodach. A on
                zobaczył swój diament.
              </p>
            </div>

            <Quote
              text="Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Nie dlatego, że Ludwik jest lepszy. Dlatego, że zadaje inne pytania."
              author="ARTUR"
              role="Ojciec, programista, przedsiębiorca"
            />
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ OFERTA #1: LIFE OS ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>OFERTA #1</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-2">
              Life OS:
              <br />
              System Upgrade
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80 mt-8 mb-12">
              <p>
                Nie poprawiamy jednego koloru. Nie zmieniamy sukna na ładniejsze.
                Zdejmujesz <em>wszystkie</em> warstwy. I po raz pierwszy
                widzisz, co jest pod nimi.
              </p>
              <p>
                To praca 1:1. Ze mną. Nie z nagraniem. Z człowiekiem, który
                zadaje pytanie, o którym nie wiedziałeś, że potrzebujesz je
                usłyszeć.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-text-on-light mb-6">
              CO OBEJMUJE PROCES:
            </h3>
            <ul className="space-y-4 text-text-on-light/80 mb-12">
              {[
                "Pełna diagnostyka + mapa transformacji (wartość 5 000 PLN)",
                "8 tygodni sesji 1:1. Intensywna praca filozoficzna (wartość 16 000 PLN)",
                "Bezpośredni dostęp między sesjami (wartość 8 000 PLN)",
                "Dostęp VIP do społeczności Lifehackerzy (wartość 3 000 PLN)",
                'Framework „Diamentowy Umysł" (wartość 5 000 PLN)',
                "BONUS: Sesja follow-up 30 dni po programie (wartość 2 000 PLN)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-text-on-light/30 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200/50 pt-8 mb-12">
              <p className="text-text-on-light/60 mb-6">
                To nie jest dla każdego. To dla garści ludzi, którzy są gotowi
                zaakceptować, że to, co znajdą pod spodem, zmieni wszystko.
              </p>
            </div>

            {/* Price block */}
            <div className="flex flex-col md:flex-row items-baseline gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-on-light/40 mb-1">
                  PEŁEN PROCES
                </p>
                <p className="text-xs uppercase tracking-wider text-text-on-light/40">
                  INWESTYCJA
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-5xl md:text-7xl font-bold text-text-on-light tracking-tighter">
                  39 000
                </span>
                <span className="text-xl text-text-on-light/60">PLN</span>
              </div>
            </div>

            <Link
              to="/discovery"
              className="inline-block px-10 py-4 rounded-sm font-semibold text-white uppercase tracking-wide text-sm bg-text-on-light hover:opacity-90 transition-opacity"
            >
              ZAREZERWUJ ROZMOWĘ KWALIFIKACYJNĄ
            </Link>

            <div className="mt-8 space-y-2 text-sm text-text-on-light/50">
              <p>Maksymalnie 5 osób w procesie jednocześnie.</p>
              <p>Wymagana krótka rozmowa kwalifikacyjna.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: Anna + Bergen */}
      <section className="bg-diamond-light py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <Quote
              text="Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do agenta zmiany."
              author="ANNA"
              role="CEO Agencji Marketingowej"
            />
            <SmallQuote
              text="🇳🇴 I am impressed of all the clear examples that he made during the course! He made very useful drawings on the whiteboard. By changing between presentation-slides, SQL-code examples and the whiteboard, it was easy to keep a full concentration throughout the whole course! He is the absolute best instructor I have ever had!!"
              author="Uczestnik szkolenia w Bergen, Norwegia"
            />
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ GŁOSY ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-16 text-center">
              Głosy tych, którzy zdjęli sukno
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Quote
                text="Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem totalną pustkę w głowie. Pierwszy raz od lat."
                author="ŁUKASZ"
                role="IT, ADHD, sceptyk"
              />
              <Quote
                text="Poczułem, jak mięśnie w moim brzuchu się fizycznie rozluźniają. Nie dlatego, że Ludwik jest lepszy. Dlatego, że zadaje inne pytania."
                author="ARTUR"
                role="Ojciec, przedsiębiorca"
              />
              <Quote
                text="Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do agenta zmiany."
                author="ANNA"
                role="CEO"
              />
              <Quote
                text="Pracowałam na wakacjach w mentalnym garniturze. Ludwik powiedział: 'Nic nie jest dla Ciebie zbyt dobre.' I uwierzyłam."
                author="ŁUCJA"
                role="Founder RevSpace"
              />
            </div>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ TO NIE DLA CIEBIE / TO JEST DLA CIEBIE ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="font-semibold text-sm uppercase tracking-wider text-text-on-light/60 mb-6">
                TO NIE DLA CIEBIE, JEŚLI:
              </p>
              <ul className="space-y-4 text-text-on-light/80">
                {[
                  "Szukasz kolejnego systemu produktywności",
                  "Potrzebujesz kogoś, kto powie Ci, że wszystko jest okej",
                  "Chcesz gotową receptę z pudełka",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm uppercase tracking-wider text-text-on-light/60 mb-6">
                TO JEST DLA CIEBIE, JEŚLI:
              </p>
              <ul className="space-y-4 text-text-on-light/80">
                {[
                  "Osiągnąłeś sukces, który nie smakuje tak, jak miał smakować",
                  "Testowałeś narzędzia i wiesz, że problem leży głębiej",
                  "Jesteś gotów na rozmowę bez klepania po plecach",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-text-on-light shrink-0 mt-0.5">
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ GWARANCJA ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-text-on-light/30 mb-6">★</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-on-light mb-8">
              Gwarancja Satysfakcji
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80">
              <p>
                Jeśli po pierwszych 2 tygodniach nie poczujesz, że ta rozmowa
                jest fundamentalnie inna niż cokolwiek, co próbowałeś do tej
                pory – powiemy sobie „do widzenia". Nie zapłacisz ani złotówki
                więcej.
              </p>
              <p>
                Mogę to zaoferować, bo dostarczam momenty, w których mówisz:
                <br />
                <em className="text-text-on-light">
                  „Nie wiem, co się wydarzyło."
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helge quote */}
      <section className="bg-diamond-light py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Quote
            text="His knowledge and ability to teach is outstanding, but he talks a bit too much and could be showing more practical examples of tool usage a bit slower."
            author="Helge Vestoyl, Norwegia 🇳🇴"
          />
          <p className="text-sm text-text-on-light/50 mt-4 pl-6">
            Helge ma rację. Dużo mówię. Ale kiedy pytam — milknę. I to w tej
            ciszy dzieją się rzeczy. —{" "}
            <span className="font-medium text-text-on-light/70">Ludwik</span>
          </p>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ TYLKO 5 MIEJSC ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-8">
              Tylko 5 miejsc jednocześnie.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-text-on-light/80 mb-10">
              <p>
                Nie da się prowadzić kogoś przez zobaczenie własnego diamentu w
                grupie 50 osób. Nie da się tego zrobić na webinarze. Taka jest
                natura tej pracy.
              </p>
              <p className="text-sm uppercase tracking-wider text-text-on-light/40">
                STATUS: Ostatnie wolne miejsca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Łucja full-width quote */}
      <section className="bg-diamond-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-4xl italic leading-relaxed text-text-on-light mb-8">
              Pracowałam na wakacjach w mentalnym garniturze. Ludwik powiedział:
              'Nic nie jest dla Ciebie zbyt dobre.' I uwierzyłam.
            </blockquote>
            <footer className="text-sm uppercase tracking-widest text-text-on-light/50">
              — ŁUCJA — FOUNDER REFSPACE
            </footer>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-text-on-light/80 mb-10">
              Jeśli to, co przeczytałeś, wywołało w Tobie poruszenie – to dobry
              znak. Nie potrzebujesz więcej tekstu. Potrzebujesz rozmowy.
            </p>

            <Link
              to="/discovery"
              className="inline-block px-10 py-4 rounded-sm font-semibold text-white uppercase tracking-wide text-sm bg-text-on-light hover:opacity-90 transition-opacity mb-6"
            >
              ZAREZERWUJ BEZPŁATNĄ ROZMOWĘ
            </Link>

            <p className="text-xs uppercase tracking-wider text-text-on-light/40">
              30 MINUT • BEZ SPRZEDAŻY • BEZ OBIETNIC
            </p>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ JESZCZE NIE TERAZ? ═══════════ */}
      <section className="bg-diamond-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-on-light mb-4">
              JESZCZE NIE TERAZ?
            </h2>
            <p className="text-lg text-text-on-light/70 leading-relaxed">
              Rozumiem. Czasem najpierw chcesz zobaczyć, jak pracuję.
              <br />
              Wyczuć, czy ten język do Ciebie trafia.
            </p>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ MODUŁY SYSTEMOWE ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionLabel>MODUŁY SYSTEMOWE</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-4">
              Aplikacje Mentalne
            </h2>
            <p className="text-lg text-text-on-light/60 mb-16">
              Programy, które instalujesz w swoim systemie, aby rozwiązać
              konkretny problem bez reinstalacji całego OS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Uważne Życie */}
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/lovable-uploads/e615021d-1367-4c9b-a003-5ceae847d2e8.png"
                    alt="Uważne Życie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text-on-light mb-2">
                    Uważne Życie
                  </h3>
                  <p className="text-text-on-light/70 mb-4">
                    Medytacja dla ludzi z ADHD i analitycznym umysłem. Nie
                    walczysz z myślami. Przejmujesz kontrolę nad kokpitem. To
                    nie jest siedzenie w ciszy. To jest aktywny trening uwagi.
                  </p>
                  <Link
                    to="/program/uwazne-zycie"
                    className="text-sm font-semibold uppercase tracking-wider text-text-on-light hover:opacity-70 transition-opacity"
                  >
                    POZNAJ PROGRAM →
                  </Link>
                </div>
              </div>

              {/* Hakowanie Produktywności */}
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={portalHakprod}
                    alt="Hakowanie Produktywności"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text-on-light mb-2">
                    Hakowanie Produktywności
                  </h3>
                  <p className="text-text-on-light/70 mb-4">
                    Zamiast zarządzać zadaniami – zarządzasz energią. Zrozum,
                    czemu Twój diament nabiera koloru „za dużo" i co z tym
                    zrobić.
                  </p>
                  <Link
                    to="/program/hakowanie-produktywnosci"
                    className="text-sm font-semibold uppercase tracking-wider text-text-on-light hover:opacity-70 transition-opacity"
                  >
                    POZNAJ PROGRAM →
                  </Link>
                </div>
              </div>

              {/* Silna Głowa */}
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={portalSilnaglowa}
                    alt="Silna Głowa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text-on-light mb-2">
                    Silna Głowa
                  </h3>
                  <p className="text-text-on-light/70 mb-4">
                    Firewall dla Twojego umysłu. Presja przestaje paraliżować –
                    zaczyna skupiać. Krytyka przestaje ranić – zaczyna
                    informować.
                  </p>
                  <Link
                    to="/program/silna-glowa"
                    className="text-sm font-semibold uppercase tracking-wider text-text-on-light hover:opacity-70 transition-opacity"
                  >
                    POZNAJ PROGRAM →
                  </Link>
                </div>
              </div>

              {/* Męski Kompas */}
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={compassHero}
                    alt="Męski Kompas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text-on-light mb-2">
                    Męski Kompas
                  </h3>
                  <p className="text-text-on-light/70 mb-4">
                    Reinstalacja systemu tożsamości. Siła przestaje być maską –
                    staje się przezroczystą obecnością. Jak diament.
                  </p>
                  <Link
                    to="/program/meski-kompas"
                    className="text-sm font-semibold uppercase tracking-wider text-text-on-light hover:opacity-70 transition-opacity"
                  >
                    POZNAJ PROGRAM →
                  </Link>
                </div>
              </div>
            </div>

            {/* More testimonials */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SmallQuote
                text="🇳🇴 Easy to understand, clear explanations and a nice teaching personality."
                author="Yasith Navoda"
              />
              <SmallQuote
                text="🇳🇴 Good pace and really good at explaining."
                author="Hilde Mykland Pihl"
              />
              <SmallQuote
                text="🇵🇱 Trener super. Ma bardzo dobre czytelne przykłady. Świetny gość. Dobre obiady."
                author="Uczestnik szkolenia w Warszawie"
              />
              <SmallQuote
                text="🇳🇴 Very energic and knowledgeable teacher. Fun guy as well. He truly do know what he is talking about."
                author="Uczestnik szkolenia w Oslo"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/program"
                className="inline-block px-10 py-4 rounded-sm font-semibold uppercase tracking-wide text-sm text-text-on-light border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                PRZEGLĄDAJ WSZYSTKIE MODUŁY
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TheDivider />

      {/* ═══════════ FOOTER SECTION ═══════════ */}
      <section className="bg-diamond-light py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-on-light mb-4">
              Diamentowy umysł.
            </h2>
            <p className="text-sm uppercase tracking-widest text-text-on-light/40 mb-8">
              OTWARTA PRZYŁBICA.
            </p>
            <p className="text-lg text-text-on-light/70">
              Ludwik C. Siadlak
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
