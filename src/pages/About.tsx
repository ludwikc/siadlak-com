import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle } from "@/lib/icons";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getAboutEntities, getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const aboutFaqs = [
  {
    question: "Czym jest metoda Diamentowego Umys\u0142u?",
    answer: "Metoda Diamentowego Umys\u0142u to autorskie podej\u015Bcie do pracy z my\u015Bleniem. Opiera si\u0119 na za\u0142o\u017Ceniu, \u017Ce umys\u0142 \u2014 jak diament \u2014 jest z natury czysty i przezroczysty, ale nabiera koloru otoczenia: presji, oczekiwa\u0144, cudzych narracji. Praca metod\u0105 Diamentowego Umys\u0142u polega na zdejmowaniu tych warstw, nie na dodawaniu nowych.",
  },
  {
    question: "Jak wygl\u0105da wsp\u00F3\u0142praca z Ludwikiem?",
    answer: "S\u0105 dwie \u015Bcie\u017Cki: samodzielne Aplikacje Mentalne (4\u20138 tygodni, dost\u0119p do\u017Cywotni) lub mentoring 1:1 Life OS: System Upgrade (8 tygodni, 16 000 PLN). Ka\u017Cda wsp\u00F3\u0142praca zaczyna si\u0119 od bezp\u0142atnej 30-minutowej Sesji Discovery.",
  },
  {
    question: "Czym Aplikacje Mentalne r\u00F3\u017Cni\u0105 si\u0119 od kurs\u00F3w online?",
    answer: "Kurs daje wiedz\u0119 do przerobienia. Aplikacja Mentalna zmienia spos\u00F3b my\u015Blenia \u2014 instalujesz j\u0105 raz i zostaje z Tob\u0105 na zawsze. Nie ma materia\u0142\u00F3w do \u2018nadrobienia\u2019. Ka\u017Cda rozwi\u0105zuje jeden konkretny problem: produktywno\u015B\u0107, odporno\u015B\u0107, uwa\u017Cno\u015B\u0107 lub to\u017Csamo\u015B\u0107.",
  },
  {
    question: "Dla kogo s\u0105 programy?",
    answer: "Dla profesjonalist\u00F3w, przedsi\u0119biorc\u00F3w i lider\u00F3w, kt\u00F3rzy osi\u0105gaj\u0105 cele, ale czuj\u0105, \u017Ce co\u015B nie gra \u2014 na poziomie g\u0142\u0119bszym ni\u017C techniki i narz\u0119dzia. Szczeg\u00F3lnie IT, finanse i zarz\u0105dzanie. Uczestnicy z 8+ kraj\u00F3w.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/about")} jsonLd={[
        ...getAboutEntities(),
        getBreadcrumbSchema([
          { name: 'Strona g\u0142\u00F3wna', path: '/' },
          { name: 'O mnie', path: '/about' },
        ]),
        getFAQSchema(aboutFaqs),
      ]} />
      {(() => { const t = getTopicalConfig("/about"); return t ? <TopicalMeta {...t} /> : null; })()}

      {/* 1. HERO */}
      <section className="py-16 md:py-28 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-5 py-2.5 mb-8">
              <CheckCircle className="h-4 w-4 text-electric" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-dark">
                19 LAT DOŚWIADCZENIA
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-on-dark mb-6">
              W 2014 roku stałem na peronie metra Dworzec Gdański i&nbsp;chciałem zrobić krok.
            </h1>

            <p className="text-lg md:text-xl text-dim leading-relaxed max-w-2xl mx-auto">
              Miałem wszystko, o czym kiedykolwiek marzyłem. Certyfikaty, Fortune&nbsp;500, setki szkoleń, pieniądze, uznanie.
            </p>
            <p className="text-lg md:text-xl text-on-dark font-bold mt-4">
              I absolutnie nic, czego naprawdę potrzebowałem.
            </p>
          </div>
        </div>
      </section>

      {/* 1B. KIM JEST LUDWIK C. SIADLAK — blok definicyjny dla AI */}
      <section className="py-16 md:py-20 bg-void">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-6">
              Kim jest Ludwik C. Siadlak?
            </h2>
            <p className="text-lg md:text-xl text-dim leading-relaxed mb-6">
              Ludwik C. Siadlak jest coachem produktywności i uważności, mentorem liderów oraz twórcą metody Diamentowego Umysłu. Od 19 lat pracuje z profesjonalistami, przedsiębiorcami i liderami technologicznymi — pomagając im zmienić nie techniki, ale sposób myślenia o sobie, pracy i życiu.
            </p>
            <p className="text-lg md:text-xl text-dim leading-relaxed mb-6">
              Jest Certyfikowanym Trenerem Microsoft (MCT) ze specjalizacją w SQL Server, Power BI i Microsoft Copilot. Absolwent Oxford Brookes University (IT) i SWPS (psychologia). Przeszkolił ponad 10 000 profesjonalistów w firmach Fortune 500 i jednostkach wojskowych NATO w kilkunastu krajach na trzech kontynentach.
            </p>

            <p className="text-xs text-dim mt-6">
              Aktualizacja: <time dateTime="2026-04-14">kwiecie&#324; 2026</time>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border border-white/10 rounded-sm p-5">
                <p className="text-electric font-bold text-2xl mb-1">1 240+</p>
                <p className="text-sm text-dim">absolwent&#243;w programu Produktywno&#347;&#263;, ocena 4.9/5.0</p>
              </div>
              <div className="border border-white/10 rounded-sm p-5">
                <p className="text-electric font-bold text-2xl mb-1">500+</p>
                <p className="text-sm text-dim">kapitanów w społeczności Uważne Życie</p>
              </div>
              <div className="border border-white/10 rounded-sm p-5">
                <p className="text-electric font-bold text-2xl mb-1">8+</p>
                <p className="text-sm text-dim">krajów w społeczności Lifehackerzy</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-dim leading-relaxed mt-8">
              Założyciel Fundacji Hackerzy.pl (edukacja technologiczna młodzieży), twórca programu DeepWork.pl (głęboka praca w firmach) oraz UwazneZycie.pl (uważność dla analitycznych umysłów). Autor programów mentalnych: Produktywność, Silna Głowa, Uważne Życie i Męski Kompas, oraz programu premium Life OS: System Upgrade — 8-tygodniowego mentoringu 1:1 dla maksymalnie 5 osób jednocześnie. Regularnie zapraszany jako gość podcastów i{" "}
              <Link to="/wywiady" className="text-electric hover:underline">wywiadów</Link>{" "}
              o produktywności, life hackingu i przedsiębiorczości.
            </p>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 2. DROGA */}
      <section className="section-content bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-dark mb-8">
              Historia, której nie planowałem opowiedzieć
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed">
              <p>
                Mam szesnaście lat. Migreny, które nie pozwalają mi wstać z łóżka. Kodeina, która pozwala - ale w zamian zabiera wszystko inne. I stary, zawiasowy zeszyt, w którym zapisuję systemy: jak przetrwać dzień, jak nie oszaleć z bólu, jak ogarnąć jutro.
              </p>
              <p>
                To nie było "budowanie produktywności". To był mechanizm przetrwania chłopaka, który nie wiedział, że istnieją lepsze opcje.
              </p>
              <p>
                Potem przyszły lepsze opcje. Dużo lepszych opcji. Oxford. Certyfikowany Trener Microsoft - SQL, Power&nbsp;BI, Copilot. Dziewiętnaście lat w branży. Fortune&nbsp;500. Jednostki wojskowe. Setki szkoleń na trzech kontynentach. Systemy, które działały. Klienci, którzy wracali. Pieniądze, które rosły.
              </p>
              <p>
                I pewnego dnia - ten peron metra w 2014 roku.
              </p>
              <p>
                Stoisz tam i widzisz, jak całe Twoje życie jest perfekcyjnie ułożone. Certyfikaty w ramkach, rekomendacje na LinkedInie, konto, które nie wymaga sprawdzania. I myślisz sobie coś, co mówi Ci więcej o kondycji świata niż o Tobie samym:
              </p>

              <div className="rounded-sm border border-white/10 p-8 my-8">
                <p className="text-on-dark font-bold text-xl md:text-2xl text-center">
                  "Miałem wszystkie narzędzia - i żadne z nich nie było przeznaczone do tego, czego naprawdę potrzebowałem."
                </p>
              </div>

              <p>
                Próbowałem rozwiązać ludzki problem technologicznymi metodami. To tak, jakbyś próbował naprawić pęknięte serce lepszym algorytmem. Jak ściszanie alarmu pożarowego zamiast gaszenia ognia. Jak zmiana sukna na stole - zamiast przyjrzenia się diamentowi, który na nim leży.
              </p>
              <p className="text-dim/70 italic">
                (Jeśli ta metafora z diamentem i suknem brzmi znajomo - to dobrze. Przewija się przez wszystko, co robię. Bo to nie jest metafora. To jest sposób, w jaki rozumiem ludzi od czasu, gdy trafiłem na buddyzm Diamentowej Drogi.)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 3. DWIE ŚCIEŻKI */}
      <section className="section-content bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-light mb-4">
              Dwie ścieżki, jeden cel
            </h2>
            <p className="text-lg md:text-xl text-on-light-dim leading-relaxed mb-10">
              Pracuję na dwóch ścieżkach, bo sam przeszedłem obie.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-sm border border-on-light/10 p-8">
                <h3 className="text-lg font-bold text-electric mb-4">Ścieżka Wojownika</h3>
                <div className="space-y-4 text-on-light-dim leading-relaxed">
                  <p>
                    Dla tych, którzy utknęli w narracjach - o sobie, o świecie, o tym, jak "powinno być". Którzy walczą z niewidzialnymi wrogami i płacą za tę walkę podatek, którego nawet nie widzą. Każdego dnia. Za narrację sprzed lat, która dawno przestała im służyć.
                  </p>
                  <p>
                    To praca konfrontacyjna. Używam Junga, Fausta, <em>Mistrza i Małgorzaty</em> - bo w literaturze jest więcej prawdy o człowieku niż w większości podręczników psychologii. Nie dlatego, że jestem humanistą (jestem czarną owcą w rodzinie artystów - ja poszedłem w IT). Dlatego, że pewne pytania nie mają odpowiedzi w&nbsp;Excelu.
                  </p>
                </div>
              </div>

              <div className="rounded-sm border border-electric/20 bg-electric/5 p-8">
                <h3 className="text-lg font-bold text-electric mb-4">Ścieżka Poszukiwacza</h3>
                <div className="space-y-4 text-on-light-dim leading-relaxed">
                  <p>
                    Dla tych, którzy osiągnęli już wszystko - i czują, że to za mało. Którzy potrzebują <em>pozwolenia na przestanie osiągania</em>. Na bycie. Na integrację tego, kim są naprawdę, z tym, co robią zawodowo.
                  </p>
                  <p>
                    To praca delikatniejsza, wspierająca, otwierająca przestrzeń. Bo czasem najtrudniejsza rzecz na świecie to usiąść i nie robić absolutnie nic - i pozwolić, żeby to, co jest pod spodem, wreszcie się odezwało.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-on-light font-bold leading-relaxed">
              Większość ludzi, z którymi pracuję, potrzebuje obu ścieżek. W różnych momentach. I po dziewiętnastu latach wiem, kiedy której użyć. Nie dlatego, że mam certyfikat z "dobierania ścieżek" - ale dlatego, że sam na obu stałem boso.
            </p>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 4. DLACZEGO ZAUFAĆ */}
      <section className="section-content bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:w-5/12">
              <OptimizedImage
                src="/lovable-uploads/SIADLAK-ig.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-sm"
                priority
                width={1000}
                height={1600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="lg:w-7/12 space-y-6 text-lg md:text-xl text-dim leading-relaxed">
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-dark">
                Dlaczego możesz mi zaufać
              </h2>

              <p>
                Chyba powinienem teraz napisać akapit o swoich osiągnięciach, żebyś poczuł się pewnie.
              </p>
              <p>
                Więc dobrze: jestem Certyfikowanym Trenerem Microsoft od dziewiętnastu lat. SQL, Power&nbsp;BI, Copilot - w tych tematach szkoliłem zespoły Fortune&nbsp;500 i jednostki wojskowe w kilkunastu krajach. Mam dyplom z IT z Oxford Brookes. Prowadzę{" "}
                <a href="https://fundacja.hackerzy.pl/" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">Fundację Hackerzy.pl</a>, która uczy młodych ludzi, jak korzystać z technologii, zamiast pozwolić, by technologia korzystała z nich. Mój program{" "}
                <a href="https://deepwork.pl/" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">DeepWork.pl</a>{" "}pomaga firmom budować kulturę głębokiej pracy. A{" "}
                <a href="https://uwaznezycie.pl/" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">UwazneZycie.pl</a>{" "}łączy uważność z codziennym działaniem.
              </p>

              <p className="text-on-dark font-bold">
                Ale to jest ta część, która naprawdę mówi o mnie coś interesującego:
              </p>

              <p>
                Mam tatuaż Profesora Wołanda z <em>Mistrza i Małgorzaty</em> - zrobiony w Wielki Piątek, zupełnie przypadkowo. Odkryłem buddyzm Diamentowej Drogi i zamiast konwersji przeżyłem rozpoznanie: "to jest dokładnie to, czego szukałem, tylko nie miałem na to słów". Jestem w trakcie rozwodu i wciąż życzę mojej ex-żonie, żeby znalazła miłość i spokój. Czytam Machiavellego i Sun Tzu, żeby nauczyć się walczyć - bo współczucie przychodzi mi naturalnie, a stawianie granic nie.
              </p>

              <p>
                I codziennie o 12:30 (tak, w samo południe plus pół godziny) jestem na żywo na Discordzie ze społecznością Lifehackerów. Nie jako odległy guru za paywallem - jako facet, który pokazuje się każdego dnia. Bo gdybym tego nie robił, nie miałbym prawa oczekiwać tego od nikogo innego.
              </p>

              <p className="text-on-dark font-bold">
                Nie jestem teoretykiem. Nie jestem kolejnym guru produktywności w nowym opakowaniu. Jestem praktykiem, który przeszedł przez ogień - i teraz pomaga innym zobaczyć, że ten ogień nie był ich wrogiem. Był ich nauczycielem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 5. DLA KOGO / NIE DLA KOGO */}
      <section className="section-content bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-light mb-8">
              Dla kogo to nie jest (i dlaczego to dobrze)
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-on-light-dim leading-relaxed">
              <p>
                Jeśli szukasz kolejnego systemu, który pozwoli Ci robić więcej w mniej czasu - mam dla Ciebie złe wieści: to nie jest to miejsce. Jeśli szukasz kogoś, kto Cię przytuli, powie "jesteś wspaniały" i nigdy nie zada niewygodnego pytania - też nie tutaj.
              </p>
              <p>
                Ale jeśli osiągnąłeś coś, co z zewnątrz wygląda jak sukces - a od wewnątrz czujesz, że to za mało? Jeśli przetestowałeś już wystarczająco dużo narzędzi, metod i konferencji, żeby wiedzieć, że problem nie jest w narzędziach? Jeśli gdzieś w głębi masz przeczucie, że potrzebujesz nie kolejnego systemu, ale kogoś, kto pomoże Ci zobaczyć system, w którym już operujesz?
              </p>
              <p>
                Wtedy mamy o czym rozmawiać.
              </p>
              <p>
                Bo prawda jest prosta - i właśnie dlatego taka trudna do przyjęcia:
              </p>

              <div className="rounded-sm border border-electric/20 bg-electric/5 p-8 my-4">
                <p className="text-on-light font-bold text-xl md:text-2xl text-center">
                  Nie potrzebujesz więcej. Potrzebujesz mniej. Mniej warstw. Mniej sukna. Mniej tego, co ktoś kiedyś Ci powiedział, że "tak powinno być".
                </p>
              </div>

              <p className="font-bold text-on-light">
                To, czego szukasz, masz w sobie od zawsze. Trzeba to tylko zobaczyć.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 6. METODA */}
      <section className="section-content bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-dark mb-8">
              Jak to wygląda w praktyce
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-dim leading-relaxed">
              <p>
                Większość ludzi przychodzi do mnie z pytaniem o produktywność. Kalendarz w chaosie, prokrastynacja, za dużo na głowie. To są drzwi, przez które wchodzisz.
              </p>
              <p>
                Ale dość szybko odkrywamy razem, że problem nie jest w tym, <em>jak</em> robisz rzeczy. Problem jest w tym, <em>dlaczego</em> je robisz - albo dlaczego przestałeś czuć, że mają sens.
              </p>
              <p>
                I wtedy zaczynamy prawdziwą pracę.
              </p>
              <p>
                Nazywam to <strong className="text-on-dark">Life OS</strong> - bo Twój umysł naprawdę działa jak system operacyjny. Tyle że przez lata instalowałeś w nim cudze oprogramowanie: czyjeś oczekiwania, czyjeś definicje sukcesu, czyjeś kryteria "wystarczająco dobry". I teraz się dziwisz, że system się zacina.
              </p>
              <p>
                Nie dodaję Ci kolejnych aplikacji. Pomagam Ci <em>odinstalować</em> to, czego nigdy nie zamawiałeś.
              </p>
              <p>
                A to, co zostaje po odinstalowaniu? Jest czyste. Jasne. Twoje.
              </p>
              <p className="text-on-dark font-bold">
                Jak diament, który cały czas był pod suknem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 7. CTA */}
      <section className="section-content bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-2/5">
                <OptimizedImage
                  src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                  alt="Ludwik Siadlak"
                  className="w-full h-auto rounded-sm"
                  width={1283}
                  height={1920}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="lg:w-3/5 space-y-6">
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-on-dark">
                  Jesteś gotów?
                </h2>

                <p className="text-lg md:text-xl text-dim leading-relaxed">
                  Jeśli to, co przeczytałeś, rezonuje - nawet jeśli nie potrafisz jeszcze dokładnie powiedzieć, <em>co</em> z tego rezonuje - mamy dobry punkt wyjścia.
                </p>
                <p className="text-lg md:text-xl text-dim leading-relaxed">
                  Nie obiecuję, że będzie łatwo. Obiecuję, że będzie uczciwie.
                </p>
                <p className="text-lg md:text-xl text-on-dark font-bold leading-relaxed">
                  I obiecuję, że nie będę kolejną osobą, która powie Ci, kim powinieneś się stać. Pomogę Ci zobaczyć, kim już jesteś.
                </p>

                <div>
                  <Link to="/discovery" onClick={() => window.scrollTo(0, 0)}>
                    <button
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm"
                      style={{
                        background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                        boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                      }}
                    >
                      Umów bezpłatną 30-minutową Sesję Discovery
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </Link>
                </div>

                <p className="text-sm text-dim">
                  (Pracuję maksymalnie z 5 klientami jednocześnie, bo ta praca wymaga pełnej obecności. Nie dlatego, że chcę brzmieć ekskluzywnie - dlatego, że nie da się być w pełni obecnym dla dwudziestu osób naraz.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* 8. PODPIS */}
      <section className="section-content bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="space-y-4 text-lg md:text-xl text-on-light-dim leading-relaxed">
              <p>
                Kiedyś myślałem, że pomagam ludziom być bardziej produktywnymi.
              </p>
              <p>
                Teraz wiem, że pomagam im zobaczyć to, co mieli w sobie od zawsze.
              </p>
              <p className="text-on-light font-bold">
                Różnica? Ogromna.
              </p>
            </div>
            <p className="text-xl font-bold text-electric mt-8">- Ludwik</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-void">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-10 text-center">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-4">
            {aboutFaqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 rounded-md">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-on-dark font-medium hover:text-electric transition-colors">
                  {faq.question}
                  <span className="ml-4 text-dim group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-dim leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
