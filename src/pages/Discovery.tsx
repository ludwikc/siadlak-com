import Layout from "@/components/layout/Layout";
import { CheckCircle, Flame, Users, Star } from "@/lib/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ContentTextSection,
  ContentGridSection,
} from "@/components/sections/content";
import DiscoveryHero from "@/components/discovery/DiscoveryHero";
import DiscoveryAvailabilityCheck from "@/components/discovery/DiscoveryAvailabilityCheck";
import DiscoveryLifeOSOffer from "@/components/discovery/DiscoveryLifeOSOffer";

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
          kwalifikacyjnej — raczej takich, na które sam nie wpadłbyś, że
          potrzebujesz na nie odpowiedzieć.
        </p>

        <p className="font-bold">Będę szukał trzech rzeczy:</p>

        <div className="space-y-6 mt-8">
          {[
            {
              num: "1. Za co walczysz?",
              desc: "Każdy z nas nosi jakąś walkę — czasem z lat, czasem z pokoleń. Nie chodzi o to, żeby ją wygrać. Chodzi o to, żeby zobaczyć, ile podatku płacisz każdego dnia za historię, w której żyjesz. Bo niektóre walki dawno się skończyły — a my wciąż stoimy w okopach.",
            },
            {
              num: "2. Czego próbujesz uniknąć?",
              desc: "Większość ludzi, którzy do mnie przychodzą, nie szuka transformacji. Szukają kolejnego systemu, który pozwoli im uniknąć tego, czego naprawdę potrzebują: spojrzenia na diament bez sukna. Bez dekoracji. Bez oprawki. I to jest w porządku — ale trzeba to najpierw zobaczyć.",
            },
            {
              num: "3. Ile jesteś gotów zainwestować?",
              desc: "Nie mówię o pieniądzach (o nich porozmawiamy osobno, w pełni transparentnie). Mówię o energii. O gotowości na dyskomfort. O odwadze, żeby zobaczyć, kim jesteś — a nie kim myślisz, że powinieneś być.",
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

      {/* Rozpoznajesz ten stan? */}
      <ContentTextSection
        title="Rozpoznajesz ten stan?"
        backgroundVariant="light"
        maxWidth="900px"
      >
        <p>
          Twoje cele są zrealizowane. Twoje projekty działają. Twoje życie
          wygląda dobrze z zewnątrz.
        </p>

        <p>
          A w środku? Konflikt, który zżera gigawaty energii:
        </p>

        <div className="space-y-4 mt-6 mb-6">
          {[
            ["Część Ciebie chce budować dalej", "Część Ciebie chce wreszcie odpocząć"],
            ["Część Ciebie potrzebuje kontroli", "Część Ciebie wie, że kontrola to iluzja"],
            ["Część Ciebie goni kolejny cel", 'Część Ciebie pyta "po co?"'],
          ].map(([left, right]) => (
            <div
              key={left}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-lg"
            >
              <span className="font-semibold">{left}</span>
              <span className="text-electric">→</span>
              <span className="font-semibold">{right}</span>
            </div>
          ))}
        </div>

        <p>
          Te części walczą ze sobą każdego dnia. A Ty stoisz pośrodku, próbując
          je pogodzić — i zużywasz na to więcej energii niż na samą pracę.
        </p>

        <p className="font-bold mt-8">Próbowałeś to rozwiązać:</p>

        <div className="space-y-3 mt-4">
          {[
            ['Mówisz o tym znajomym', '"Musisz więcej odpoczywać"'],
            ['Próbujesz z coachingiem', '"Ustaw nowe cele SMART"'],
            ['Idziesz na terapię', '"Opowiedz mi o swoich rodzicach"'],
            ['Kupujesz kurs', '"Oto 7 kroków do lepszego Ciebie"'],
          ].map(([action, response]) => (
            <div key={action} className="flex items-start gap-3 text-lg">
              <span>{action}</span>
              <span className="text-electric">→</span>
              <span className="italic">{response}</span>
            </div>
          ))}
        </div>

        <p className="mt-8">
          Żadne z tych rozwiązań nie trafia w sedno. Bo problem nie leży w
          strategii, celach ani przeszłości.{" "}
          <strong className="text-electric">
            Problem leży na poziomie tożsamości.
          </strong>{" "}
          Na suknie, które nałożyłeś na diament lata temu — i które od tamtego
          czasu zdążyło wrosnąć.
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Kim NIE jesteśmy dla siebie */}
      <ContentGridSection
        title="Kim NIE jesteśmy dla siebie"
        columns={2}
        gap="lg"
        className="scroll-mt-20"
        id="nie"
        backgroundVariant="muted"
      >
        <div className="p-8 rounded-sm border border-white/10">
          <h3 className="text-xl font-bold mb-6 text-text-on-dark">
            ❌ To NIE jest dla Ciebie, jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-text-dim">
            {[
              <>Szukasz kolejnego systemu produktywności, który &quot;w końcu zadziała&quot; (mam na to <Link to="/program/produktywnosc" className="text-electric underline hover:no-underline">osobny program</Link>)</>,
              "Chcesz, żebym powiedział Ci, że wszystko jest okej i wystarczy zmienić aplikację",
              "Potrzebujesz walidacji, nie zmiany perspektywy",
              "Nie jesteś gotów na to, żeby się zaskoczyć — bo zaskoczenie bywa niewygodne",
              "Szukasz szybkich rozwiązań zamiast głębokiej pracy",
              "Jesteś na etapie, w którym potrzebujesz najpierw stabilizacji — finansowej, zdrowotnej, emocjonalnej. To nie jest słabość, to jest priorytet. Możesz wrócić, kiedy będziesz gotów",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
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
          <ul className="space-y-4 text-lg text-text-dim">
            {[
              "Osiągnąłeś sukces, który nie smakuje tak, jak miał smakować",
              "Jesteś uwięziony w narracjach, które kiedyś Ci służyły, a teraz Cię więzą — i zaczynasz to widzieć",
              "Testowałeś już systemy, metody, kursy — i wiesz, że problem leży głębiej niż to, co jest na powierzchni",
              "Potrzebujesz kogoś, kto powie Ci prawdę z szacunkiem — a nie klepania po plecach ani brutalnych konfrontacji",
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

      {/* Co może się wydarzyć po rozmowie */}
      <ContentGridSection
        title="Co może się wydarzyć po tej rozmowie?"
        subtitle="Transparentnie — jest kilka możliwych scenariuszy. I każdy z nich jest dobry."
        columns={2}
        gap="md"
        backgroundVariant="light"
      >
        {[
          {
            title: "Scenariusz 1: Zaczynamy pracę",
            desc: "Obaj czujemy, że to ma sens. Widzę, gdzie jesteś. Wiem, jakie pytania zadać. Ty jesteś gotów. Rozmawiamy o Life OS: System Upgrade i zaczynamy 8-tygodniową pracę.",
          },
          {
            title: "Scenariusz 2: Nie teraz",
            desc: "Może jesteś blisko, ale nie teraz. Może najpierw musisz przepracować coś innego — albo po prostu potrzebujesz czasu, żeby to, co usłyszałeś, mogło się ułożyć. Powiem Ci to wprost i skieruję tam, gdzie powinieneś być na tym etapie.",
          },
          {
            title: "Scenariusz 3: To nie dla Ciebie",
            desc: 'I to jest absolutnie w porządku. Czasem najlepsza pomoc to szczera informacja, że nasze drogi się rozchodzą. Zaoszczędzę Ci czasu, pieniędzy i energii — a Ty nie stracisz pół roku na coś, co od początku nie pasowało.',
          },
          {
            title: "Scenariusz 4: Zaskoczenie",
            desc: 'To jest mój ulubiony. Czasem podczas tych 30 minut dzieje się coś nieoczekiwanego. Jedno pytanie, jedna zmiana perspektywy, jedno przesunięcie narracji — i nagle widzisz coś, czego wcześniej nie widziałeś. Bez sprzedaży. Bez oferty. Po prostu — zmiana. Wiem, że brzmi to jak filmowa scena, ale zdarza się częściej, niż byś myślał.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-sm p-8 border border-text-on-light/10"
          >
            <h3 className="text-lg font-bold mb-3 text-electric">
              {item.title}
            </h3>
            <p className="text-lg text-text-on-light/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </ContentGridSection>

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
              desc: 'Zadaję kilka pytań przed rozmową. Nie dlatego, że lubię formularze (nikt nie lubi formularzy) — ale żebyśmy nie marnowali Twoich 30 minut na rzeczy, które mogę sprawdzić wcześniej. Czasem już na tym etapie widzę, że mogę Ci pomóc lepiej inaczej — i napiszę Ci o tym szczerze.',
            },
            {
              num: "2. 30 minut 1:1 na Zoom",
              desc: "Kamera włączona. To nie jest szybki chat — to uczciwa rozmowa o tym, gdzie naprawdę jesteś. Nie o tym, gdzie byś chciał być. Nie o tym, co mówisz na LinkedInie. O tym, co widzisz, kiedy zdejmiesz sukno.",
            },
            {
              num: "3. Jasna odpowiedź",
              desc: 'Po rozmowie wiem, czy mogę Ci pomóc — i mówię Ci to wprost. Jeśli tak, rozmawiamy o współpracy. Jeśli nie, powiem dlaczego i gdzie szukać dalej. Żadnej "szarej strefy", żadnego "zastanowię się i wrócę".',
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

      {/* Life OS: System Upgrade — co instalujesz */}
      <DiscoveryLifeOSOffer />

      <div className="the-cut" />

      {/* Dlaczego 16 000 zł? */}
      <ContentTextSection
        title="Dlaczego 16 000 zł?"
        maxWidth="900px"
        backgroundVariant="muted"
      >
        <p>
          Bo to nie jest kurs. Nie jest coaching w grupie. Nie jest &quot;program
          online z dostępem do społeczności&quot;.
        </p>

        <p>
          To jest 8 tygodni mojego pełnego zaangażowania. Maksymalnie 5 osób
          jednocześnie — bo inaczej nie da się zrobić tej pracy dobrze. Nie da
          się zadać właściwego pytania, jeśli nie pamiętasz odpowiedzi na
          poprzednie. I nie da się prowadzić kogoś przez zobaczenie własnego
          diamentu, jednocześnie prowadząc grupę 50 osób na webinarze.
        </p>

        <p className="font-bold mt-4">
          Porównaj to z tym, co prawdopodobnie już próbowałeś:
        </p>

        <div className="space-y-6 mt-6">
          {[
            {
              title: "Standardowy coaching",
              price: "2-5 tys. PLN/miesiąc",
              desc: "Daje Ci nowe strategie, więcej narzędzi, kolejne frameworki. Instalujesz nowe aplikacje na starym, skonfliktowanym systemie. Efekt jest chwilowy, a potem wracasz do starych wzorców.",
            },
            {
              title: "Terapia",
              price: "200-400 zł/sesja × rok = 10 000-20 000 zł",
              desc: "Pomaga zrozumieć przeszłość. Rozumiesz już skąd. Ale nadal nie wiesz, jak podjąć odważną decyzję w poniedziałek o 9 rano. Insight bez zmiany perspektywy to ciekawa historyjka.",
            },
            {
              title: "Kursy online i książki",
              price: "2-5 tys. PLN",
              desc: "Dostarczają wiedzę. Ale prawdziwa zmiana nie zachodzi na poziomie intelektualnym. Możesz przeczytać 100 książek o pływaniu — i nadal nie popłyniesz, dopóki nie wejdziesz do wody.",
            },
            {
              title: "Kolejny rok szukania na własną rękę",
              price: "",
              desc: "Kosztuje nie tylko pieniądze. Kosztuje czas. A czas, jak już wiesz, jest jednym z tych dwóch zasobów, o które walczą wszyscy.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-sm p-6 border border-white/10"
            >
              <h3 className="font-heading text-base font-bold text-electric mb-1">
                {item.title}
                {item.price && (
                  <span className="font-normal text-text-dim">
                    {" "}
                    ({item.price})
                  </span>
                )}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8">
          Life OS łączy to, co najlepsze z każdego podejścia — głębię terapii,
          precyzję coachingu, mądrość filozofii — w 8-tygodniowy proces celujący
          w konkretny przełom. Nie w otwarty proces bez końca.
        </p>

        <p className="font-bold text-electric mt-4">
          Nie mówię, że to tania inwestycja. Mówię, że to może być ostatnia
          inwestycja tego typu, jakiej potrzebujesz.
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Czego możesz się spodziewać? */}
      <ContentTextSection
        title="Czego możesz się spodziewać?"
        maxWidth="900px"
        backgroundVariant="light"
      >
        <p>
          Nie obiecuję cudów. Obiecuję pracę, po której zobaczysz wymierne
          zmiany:
        </p>

        <div className="space-y-8 mt-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Koniec z wewnętrzną wojną.
            </h3>
            <p>
              Przestajesz zużywać 80% energii na konflikt między częściami
              siebie. Nagle masz zasób mocy, o którym zapomniałeś.
            </p>
            <blockquote className="mt-4 pl-4 border-l-2 border-electric italic">
              &quot;Nie zdawałem sobie sprawy, ile energii szło na walkę z samym
              sobą.&quot;
              <span className="block text-sm mt-1 not-italic text-electric">
                — Klient Life OS
              </span>
            </blockquote>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Decyzyjność bez paraliżu.
            </h3>
            <p>
              Intuicja + dane = szybkie, pewne decyzje. Bez trzech tygodni
              bezsennych nocy nad każdym wyborem.
            </p>
            <blockquote className="mt-4 pl-4 border-l-2 border-electric italic">
              &quot;Wcześniej decyzja o zatrudnieniu kosztowała mnie 3 tygodnie
              snu. Teraz wiem w 20 minut.&quot;
              <span className="block text-sm mt-1 not-italic text-electric">
                — Klientka Life OS
              </span>
            </blockquote>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Prawdziwy spokój — nie tylko przerwa w pracy.
            </h3>
            <p>
              Weekend staje się regeneracją, nie poczuciem winy.
            </p>
            <blockquote className="mt-4 pl-4 border-l-2 border-electric italic">
              &quot;Pierwszy raz od 14 lat spędziłem sobotę z rodziną i nie
              myślałem o firmie. I firma nie spłonęła.&quot;
              <span className="block text-sm mt-1 not-italic text-electric">
                — Klient Life OS
              </span>
            </blockquote>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">
              Ambicja bez lęku.
            </h3>
            <p>
              Przestajesz potrzebować sukcesu jako potwierdzenia wartości. Ale
              nadal go budujesz — tyle że z radości, nie ze strachu. To nie jest
              rezygnacja z ambicji. To uwolnienie jej z lęku.
            </p>
          </div>
        </div>
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
            Przychodzę jako ktoś, kto przeszedł swoją własną drogę — od systemów
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
            po tych 30 minutach — niezależnie od scenariusza — będziesz wiedział
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
            &quot;przeciw&quot; — to jest dokładnie jeden ze wzorców, z którym
            będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie 100%
            pewności przed podjęciem decyzji. Sesja Discovery to bezpieczny
            sposób, żeby zbadać tę niepewność — bez pełnego zobowiązania.
          </p>

          <p className="mb-6">
            <strong className="text-electric">P.P.S.</strong> Jeśli nie jesteś
            gotów na pracę 1:1, ale chcesz zobaczyć, jak pracuję — zacznij od{" "}
            <Link
              to="/program/produktywnosc"
              className="text-electric underline hover:no-underline"
            >
              Programu Produktywność
            </Link>
            . To aplikacja mentalna, którą instalujesz samodzielnie, w swoim
            tempie. I wiele osób stamtąd trafia tutaj — kiedy są gotowe na coś
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
          — Ludwik
        </p>
      </ContentTextSection>
    </Layout>
  );
}
