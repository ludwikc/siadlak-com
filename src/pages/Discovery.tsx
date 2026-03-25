import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ContentTextSection } from "@/components/sections/content";
import DiscoveryHero from "@/components/discovery/DiscoveryHero";
import DiscoveryAvailabilityCheck from "@/components/discovery/DiscoveryAvailabilityCheck";

export default function Discovery() {
  return (
    <Layout>
      {/* Hero */}
      <DiscoveryHero />

      <div className="the-cut" />

      {/* Co się dzieje podczas sesji */}
      <ContentTextSection
        title="Co się dzieje podczas tych 30 minut?"
        backgroundVariant="muted"
        maxWidth="900px"
      >
        <p>
          Zadam Ci kilka pytań. Nie takich, jakie zadają na rozmowie
          kwalifikacyjnej - raczej takich, na które sam nie wpadłbyś, że
          potrzebujesz na nie odpowiedzieć.
        </p>

        <p className="font-bold">Będę szukał trzech rzeczy:</p>

        <div className="space-y-6 mt-8">
          {[
            {
              num: "1. Za co walczysz?",
              desc: "Każdy z nas nosi jakąś walkę - czasem z lat, czasem z pokoleń. Nie chodzi o to, żeby ją wygrać. Chodzi o to, żeby zobaczyć, ile podatku płacisz każdego dnia za historię, w której żyjesz. Bo niektóre walki dawno się skończyły - a my wciąż stoimy w okopach.",
            },
            {
              num: "2. Czego próbujesz uniknąć?",
              desc: "Większość ludzi, którzy do mnie przychodzą, nie szuka transformacji. Szukają kolejnego systemu, który pozwoli im uniknąć tego, czego naprawdę potrzebują: spojrzenia na diament bez sukna. Bez dekoracji. Bez oprawki. I to jest w porządku - ale trzeba to najpierw zobaczyć.",
            },
            {
              num: "3. Ile jesteś gotów zainwestować?",
              desc: "Nie mówię o pieniądzach (o nich porozmawiamy osobno, w pełni transparentnie). Mówię o energii. O gotowości na dyskomfort. O odwadze, żeby zobaczyć, kim jesteś - a nie kim myślisz, że powinieneś być.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-sm p-8 border border-white/10"
            >
              <h3 className="font-heading text-lg font-semibold mb-3 text-electric">
                {item.num}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Skąd przychodzisz? */}
      <ContentTextSection
        title="Skąd przychodzisz?"
        backgroundVariant="light"
        maxWidth="900px"
      >
        <p>
          Może właśnie przeczytałeś o{" "}
          <Link
            to="/program/lifeos-system-upgrade"
            className="text-electric underline hover:no-underline"
          >
            Life OS: System Upgrade
          </Link>{" "}
          i chcesz sprawdzić, czy to dla Ciebie. Może ktoś Cię tu skierował.
          Może szukasz czegoś, na co jeszcze nie masz nazwy.
        </p>

        <p>
          Niezależnie od ścieżki - trafiłeś tutaj, bo coś nie gra. Nie na
          zewnątrz. Na zewnątrz jest dobrze - może nawet za dobrze. To wewnątrz
          jest ten dźwięk, który słyszysz tylko o trzeciej w nocy. Ten, który
          mówi &quot;jest coś jeszcze&quot;, ale nie precyzuje co.
        </p>

        <p>Nie musisz wiedzieć, co to jest. Na to jest ta sesja.</p>

        <p>
          Muszę Ci tylko powiedzieć jedną rzecz, zanim się umówisz: ta rozmowa
          nie jest kolejnym &quot;bezpłatnym konsultingiem&quot;, który istnieje
          po to, żebyś kupił coś na końcu. To jest prawdziwa diagnostyka. Czasem
          ludzie wychodzą z niej z taką zmianą perspektywy, że program staje się
          opcjonalny. (Nie powiem, że mi to nie boli biznesowo. Ale powiem, że
          wolę tak niż odwrotnie.)
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Kim NIE jesteśmy dla siebie */}
      <ContentTextSection
        title="Kim NIE jesteśmy dla siebie"
        backgroundVariant="muted"
        maxWidth="900px"
        id="nie"
      >
        <p>
          Szanuję Twój czas, więc zanim się umówisz - zerknij, czy pasujesz do
          tego, z czym pracuję.
        </p>

        <p>
          <strong>Ta sesja nie ma sensu</strong>, jeśli szukasz kolejnego systemu
          produktywności (mam na to{" "}
          <Link
            to="/program/produktywnosc"
            className="text-electric underline hover:no-underline"
          >
            osobny program
          </Link>
          ), oczekujesz potwierdzenia, że &quot;jest okej, po prostu zmień
          aplikację&quot;, potrzebujesz motywacyjnego kopa i cheerleadera, albo
          szukasz szybkich rozwiązań zamiast głębokiej pracy.
        </p>

        <p>
          Jest jeszcze jeden scenariusz, o którym ważne jest, żebym powiedział
          wprost: jeśli jesteś na etapie, w którym potrzebujesz najpierw
          stabilizacji - finansowej, zdrowotnej, emocjonalnej - to nie jest
          słabość. To jest priorytet. Możesz wrócić, kiedy będziesz gotów. Nikt
          tu nikogo nie goni.
        </p>

        <p>
          <strong>Ta sesja może mieć sens</strong>, jeśli osiągnąłeś sukces,
          który nie smakuje tak, jak miał smakować. Jeśli jesteś uwięziony w
          narracjach, które kiedyś Ci służyły, a teraz Cię więzą - i zaczynasz
          to widzieć. Jeśli testowałeś już systemy, metody, kursy - i wiesz, że
          problem leży głębiej niż to, co jest na powierzchni.
        </p>

        <p>
          Albo jeśli po prostu potrzebujesz kogoś, kto powie Ci prawdę z
          szacunkiem - nie klepania po plecach, nie brutalnej konfrontacji.
          Kogoś, kto da Ci pozwolenie na przestanie walki i przyjęcie tego, co
          już masz. Bez &quot;uzdrawiania&quot;. Bez &quot;naprawiania&quot;. Z
          założeniem, że diament jest cały.
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Co może się wydarzyć po rozmowie */}
      <ContentTextSection
        title="Co może się wydarzyć po tej rozmowie?"
        backgroundVariant="light"
        maxWidth="900px"
      >
        <p>
          Transparentnie - jest kilka możliwych scenariuszy. I każdy z nich jest
          dobry.
        </p>

        <div className="space-y-8 mt-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Scenariusz 1: Zaczynamy pracę
            </h3>
            <p>
              Obaj czujemy, że to ma sens. Widzę, gdzie jesteś. Wiem, jakie
              pytania zadać. Ty jesteś gotów. Rozmawiamy o{" "}
              <Link
                to="/program/lifeos-system-upgrade"
                className="text-electric underline hover:no-underline"
              >
                Life OS: System Upgrade
              </Link>{" "}
              i zaczynamy 8-tygodniową pracę.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Scenariusz 2: Nie teraz
            </h3>
            <p>
              Może jesteś blisko, ale nie teraz. Może najpierw musisz
              przepracować coś innego - albo po prostu potrzebujesz czasu, żeby
              to, co usłyszałeś, mogło się ułożyć. Powiem Ci to wprost i
              skieruję tam, gdzie powinieneś być na tym etapie.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Scenariusz 3: To nie dla Ciebie
            </h3>
            <p>
              I to jest absolutnie w porządku. Czasem najlepsza pomoc to szczera
              informacja, że nasze drogi się rozchodzą. Zaoszczędzę Ci czasu,
              pieniędzy i energii - a Ty nie stracisz pół roku na coś, co od
              początku nie pasowało.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Scenariusz 4: Zaskoczenie
            </h3>
            <p>
              To jest mój ulubiony. Czasem podczas tych 30 minut dzieje się coś
              nieoczekiwanego. Jedno pytanie, jedna zmiana perspektywy, jedno
              przesunięcie narracji - i nagle widzisz coś, czego wcześniej nie
              widziałeś. Bez sprzedaży. Bez oferty. Po prostu - zmiana.
            </p>
            <p className="mt-4">
              Wiem, że brzmi to jak filmowa scena, ale zdarza się częściej, niż
              byś myślał. (Akurat w filmach takie sceny trwają trzy sekundy i
              mają podkład z Hansa Zimmera. U mnie trwają siedemnaście minut i
              podkładem jest cisza. Ale efekt jest podobny.)
            </p>
          </div>
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Transparentnie: jak to działa */}
      <ContentTextSection
        title="Transparentnie: jak to działa"
        maxWidth="900px"
        backgroundVariant="muted"
      >
        <div className="space-y-6">
          {[
            {
              num: "1. Wypełniasz formularz",
              desc: "Zadaję kilka pytań przed rozmową. Nie dlatego, że lubię formularze (nikt nie lubi formularzy) - ale żebyśmy nie marnowali Twoich 30 minut na rzeczy, które mogę sprawdzić wcześniej. Czasem już na tym etapie widzę, że mogę Ci pomóc lepiej inaczej - i napiszę Ci o tym szczerze.",
            },
            {
              num: "2. 30 minut 1:1 na Zoom",
              desc: "Kamera włączona. To nie jest szybki chat - to uczciwa rozmowa o tym, gdzie naprawdę jesteś. Nie o tym, gdzie byś chciał być. Nie o tym, co mówisz na LinkedInie. O tym, co widzisz, kiedy zdejmiesz sukno.",
            },
            {
              num: "3. Jasna odpowiedź",
              desc: 'Po rozmowie wiem, czy mogę Ci pomóc - i mówię Ci to wprost. Jeśli tak, rozmawiamy o współpracy. Jeśli nie, powiem dlaczego i gdzie szukać dalej. Żadnej "szarej strefy", żadnego "zastanowię się i wrócę".',
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-sm p-8 border border-white/10"
            >
              <h3 className="text-lg font-bold mb-3 text-electric">
                {item.num}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* A co z Life OS? - compressed bridge */}
      <ContentTextSection
        title="A co z Life OS?"
        maxWidth="900px"
        backgroundVariant="light"
      >
        <p>
          Jeśli po sesji Discovery obaj zdecydujemy, że to ma sens - oto co Cię
          czeka w skrócie:
        </p>

        <p>
          8 tygodni intensywnej pracy 1:1 ze mną. Sesje od 50 minut do 2,5
          godziny (bez sztucznego limitu), dostęp do mnie między sesjami przez
          Signal, pełna diagnostyka Twojego &quot;systemu operacyjnego&quot;,
          spersonalizowana mapa transformacji, nagrania wszystkich sesji i
          dożywotni dostęp do społeczności absolwentów - codziennie o 12:34 na
          Discordzie Lifehackerów.
        </p>

        <p>
          Inwestycja: 16 000 PLN (lub 2 × 6 500 PLN netto na fakturę).
          Gwarancja zwrotu po 2 tygodniach - jeśli nie poczujesz, że to
          fundamentalnie inna praca, powiemy sobie &quot;do widzenia&quot; i nie
          zapłacisz ani złotówki więcej.
        </p>

        <p>
          Pełny opis programu, metodologii i odpowiedzi na pytania znajdziesz na{" "}
          <Link
            to="/program/lifeos-system-upgrade"
            className="text-electric underline hover:no-underline"
          >
            stronie Life OS: System Upgrade
          </Link>
          .
        </p>

        <p className="font-bold">
          Ale najpierw - sesja. Bo bez niej żadna decyzja nie ma sensu.
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Ostatnia rzecz + CTA */}
      <ContentTextSection
        backgroundVariant="muted"
        maxWidth="900px"
        id="formularz"
      >
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8 text-text-on-dark">
            Ostatnia rzecz
          </h2>

          <p className="mb-6">
            Nie przychodzę do Ciebie jako ktoś, kto ma wszystkie odpowiedzi.
            Przychodzę jako ktoś, kto przeszedł swoją własną drogę - od systemów
            produktywności w wieku 16 lat, przez sukces, który smakował jak
            pustka, aż po odkrycie, że diament był tam cały czas.
          </p>

          <p className="mb-6">
            Przychodzę jako ktoś, kto od 19 lat pomaga innym zadać sobie
            właściwe pytanie. Nie to pytanie, na które chcesz odpowiedzieć. To
            pytanie, po którym cisza mówi więcej niż następna godzina rozmowy.
          </p>

          <p className="font-bold text-electric mb-12">
            Nie obiecuję, że będzie łatwo. Obiecuję, że będzie prawdziwe. I że
            po tych 30 minutach - niezależnie od scenariusza - będziesz wiedział
            więcej niż przed nimi.
          </p>
        </div>

        <DiscoveryAvailabilityCheck />

        <p className="text-lg text-center text-text-dim italic mt-8">
          (Maksymalnie 5 aktywnych klientów jednocześnie)
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* P.S. Section */}
      <ContentTextSection maxWidth="800px" backgroundVariant="light">
        <div className="rounded-sm p-8 border border-text-on-light/10">
          <p className="mb-6">
            <strong className="text-electric">P.S.</strong> Jeśli dotarłeś do
            tego miejsca i wciąż analizujesz wszystkie &quot;za&quot; i
            &quot;przeciw&quot; - to jest dokładnie jeden ze wzorców, z którym
            będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie 100%
            pewności przed podjęciem decyzji. Sesja Discovery to bezpieczny
            sposób, żeby zbadać tę niepewność - bez pełnego zobowiązania.
          </p>

          <p className="mb-6">
            <strong className="text-electric">P.P.S.</strong> Jeśli nie jesteś
            gotów na pracę 1:1, ale chcesz zobaczyć, jak pracuję - zacznij od{" "}
            <Link
              to="/program/produktywnosc"
              className="text-electric underline hover:no-underline"
            >
              Programu Produktywność
            </Link>
            . To aplikacja mentalna, którą instalujesz samodzielnie, w swoim
            tempie. I wiele osób stamtąd trafia tutaj - kiedy są gotowe na coś
            głębszego.
          </p>

          <p>
            <strong className="text-electric">P.P.P.S.</strong> A jeśli czytasz
            trzeci dopisek... to pewnie nie potrzebujesz programu, żeby wiedzieć,
            że coś trzeba zmienić. Potrzebujesz rozmowy, która pomoże Ci zobaczyć{" "}
            <em>co</em>. Na to właśnie jest ta sesja. 30 minut. Bez zobowiązań. I
            jedno pytanie, które może zmienić wszystko.
          </p>
        </div>

        <p className="font-bold text-electric text-center mt-8 text-xl">
          - Ludwik
        </p>
      </ContentTextSection>
    </Layout>
  );
}
