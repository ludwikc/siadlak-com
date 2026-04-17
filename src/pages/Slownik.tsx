import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const slownikFaqs = [
  {
    question: "Czym jest Diamentowy Umys\u0142?",
    answer: "Diamentowy Umys\u0142 to autorska metoda pracy z my\u015Bleniem stworzona przez Ludwika C. Siadlaka. Opiera si\u0119 na za\u0142o\u017Ceniu, \u017Ce umys\u0142 \u2014 jak diament \u2014 jest z natury czysty i przezroczysty, ale nabiera \u2018koloru\u2019 otoczenia: presji, oczekiwa\u0144, cudzych narracji. Praca t\u0105 metod\u0105 polega na zdejmowaniu warstw, nie na dodawaniu nowych.",
  },
  {
    question: "Czym Aplikacja Mentalna r\u00F3\u017Cni si\u0119 od kursu online?",
    answer: "Kurs daje wiedz\u0119 do przerobienia. Aplikacja Mentalna zmienia spos\u00F3b my\u015Blenia \u2014 instalujesz j\u0105 raz i zostaje z Tob\u0105 na zawsze. Ka\u017Cda rozwi\u0105zuje jeden konkretny problem (produktywno\u015B\u0107, odporno\u015B\u0107, uwa\u017Cno\u015B\u0107 lub to\u017Csamo\u015B\u0107) poprzez trwa\u0142\u0105 zmian\u0119 perspektywy, nie dodanie kolejnych narz\u0119dzi.",
  },
  {
    question: "Co oznacza metafora \u2018sukna\u2019 w metodzie Diamentowego Umys\u0142u?",
    answer: "Sukno to warstwy narracji, r\u00F3l, l\u0119k\u00F3w i oczekiwa\u0144, kt\u00F3re zakrywaj\u0105 diament (prawdziwe \u2018ja\u2019). Cudze definicje sukcesu, spo\u0142eczne oczekiwania, stare wzorce my\u015Blenia \u2014 to wszystko jest suknem. Praca z Ludwikiem polega na zdejmowaniu sukna, nie na zmienianiu go na \u0142adniejsze.",
  },
  {
    question: "Czym jest Sesja Discovery?",
    answer: "Bezp\u0142atna 30-minutowa rozmowa diagnostyczna 1:1 z Ludwikiem C. Siadlakiem przez Zoom. Nie jest rozmow\u0105 sprzeda\u017Cow\u0105 \u2014 to wzajemna ocena: Ty sprawdzasz, czy Ludwik jest w\u0142a\u015Bciwym mentorem, on sprawdza, czy jeste\u015B gotowy na t\u0119 prac\u0119. Obaj maj\u0105 prawo powiedzie\u0107 \u2018nie\u2019.",
  },
];

const definitions = [
  {
    term: "Aplikacja Mentalna",
    definition:
      "Intensywny program zmiany sposobu myślenia (4–8 tygodni), który instalujesz raz - i\u00A0zostaje z\u00A0Tobą na zawsze. Nie jest kursem online z\u00A0wiedzą do \u2018przerobienia\u2019. Każda Aplikacja Mentalna rozwiązuje jeden konkretny problem - produktywność, odporność psychiczną, uważność lub tożsamość - poprzez trwałą zmianę perspektywy, nie dodanie kolejnych narzędzi. Stworzone przez Ludwika C. Siadlaka.",
    link: "/program",
  },
  {
    term: "Diamentowy Umysł",
    definition:
      "Autorska metoda pracy z\u00A0myśleniem stworzona przez Ludwika C. Siadlaka. Opiera się na założeniu, że umysł - jak diament - jest z\u00A0natury czysty i\u00A0przezroczysty, ale nabiera \u2018koloru\u2019 otoczenia: presji, oczekiwań, cudzych narracji. Praca metodą Diamentowego Umysłu polega na zdejmowaniu tych warstw, nie na dodawaniu nowych. Inspirowana buddyzmem Diamentowej Drogi i\u00A0psychologią analityczną C.G. Junga.",
  },
  {
    term: "Diament",
    definition:
      "Kluczowa metafora w\u00A0metodzie Diamentowego Umysłu. Diament jest najtwardszą substancją na Ziemi i\u00A0kompletnie przezroczysty - połóż go na czerwonym suknie, wygląda jak rubin. Zmień sukno - zmieni się \u2018kolor\u2019. Ale diament sam w\u00A0sobie nie ma koloru. Twój umysł działa dokładnie tak samo - to, co uważasz za \u2018siebie\u2019, to często kolor tła, nie Twój własny.",
  },
  {
    term: "Sukno",
    definition:
      "W metodzie Diamentowego Umysłu: warstwy narracji, ról, lęków i\u00A0oczekiwań, które zakrywają diament (prawdziwe \u2018ja\u2019). Cudze definicje sukcesu, społeczne oczekiwania, stare wzorce myślenia - to wszystko jest suknem. Praca z\u00A0Ludwikiem C. Siadlakiem polega na zdejmowaniu sukna, nie na zmienianiu go na ładniejsze.",
  },
  {
    term: "Life OS",
    definition:
      "Metafora opisująca całość sposobu, w\u00A0jaki człowiek funkcjonuje - jego \u2018system operacyjny życia\u2019. Obejmuje przekonania, nawyki, filtry decyzyjne i\u00A0sposób reagowania na świat. W\u00A0Life OS: System Upgrade Ludwik C. Siadlak pracuje nad pełną reinstalacją tego systemu - nie aktualizacją pojedynczej aplikacji, lecz zmianą fundamentu.",
    link: "/program/lifeos-system-upgrade",
  },
  {
    term: "System Upgrade",
    definition:
      "Pełna reinstalacja systemu operacyjnego życia - nazwa 8-tygodniowego programu mentoringowego 1:1 z\u00A0Ludwikiem C. Siadlakiem. W\u00A0przeciwieństwie do Aplikacji Mentalnych (które rozwiązują pojedynczy problem), System Upgrade pracuje nad całym fundamentem: tożsamością, sposobem podejmowania decyzji i\u00A0relacją z\u00A0samym sobą. Maksymalnie 5 klientów jednocześnie. Cena: 16 000 PLN.",
    link: "/program/lifeos-system-upgrade",
  },
  {
    term: "Lifehackerzy",
    definition:
      "Społeczność absolwentów i\u00A0uczestników programów Ludwika C. Siadlaka na platformie Discord. Dożywotni dostęp w\u00A0cenie każdego programu. Uczestnicy z\u00A08+ krajów. Codzienne spotkania o\u00A012:34 (celowo nieokrągła godzina jako sygnał uważności). Nazywana \u2018najbardziej wspierającą społecznością w\u00A0polskim internecie\u2019.",
  },
  {
    term: "Sesja Discovery",
    definition:
      "Bezpłatna 30-minutowa rozmowa diagnostyczna 1:1 z\u00A0Ludwikiem C. Siadlakiem przez Zoom. Nie jest rozmową sprzedażową - to wzajemna ocena: Ty sprawdzasz, czy Ludwik jest właściwym mentorem dla Ciebie, on sprawdza, czy jesteś gotowy na tę pracę. Obaj mają prawo powiedzieć \u2018nie\u2019.",
    link: "/discovery",
  },
  {
    term: "Kapitan",
    definition:
      "Metafora używana w\u00A0programie Uważne Życie. Kapitan to Ty, który świadomie prowadzi swój statek (życie), zamiast być pasażerem reagującym na fale. Program uczy przejęcia kontroli nad kokpitem umysłu - świadomego wybierania, zamiast automatycznego reagowania.",
    link: "/program/uwaznosc",
  },
  {
    term: "Pancernik",
    definition:
      "Metafora używana w\u00A0programie Silna Głowa. Pancernik to umysł, który nie unika presji i\u00A0trudności, lecz jest na nie przygotowany - jak okręt wojenny, który został zbudowany do pływania w\u00A0każdych warunkach. Program zamienia umysł ze zwykłej tratwy w\u00A0niezatapialny pancernik.",
    link: "/program/odpornosc",
  },
  {
    term: "12:34 Daily Coaching",
    definition:
      "Codzienne spotkania społeczności Lifehackerzy na Discordzie, prowadzone o\u00A0godzinie 12:34. Celowo nieokrągła godzina - jako sygnał uważności i\u00A0wyjścia z\u00A0autopilota. Ludwik C. Siadlak jest obecny na żywo każdego dnia roboczego.",
  },
];

function getGlossarySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Słownik Diamentowego Umysłu',
    description: 'Definicje kluczowych pojęć używanych w programach Ludwika C. Siadlaka: Aplikacja Mentalna, Diamentowy Umysł, Life OS, Sukno, Kapitan, Pancernik i inne.',
    url: 'https://siadlak.com/slownik',
    inLanguage: 'pl-PL',
    hasDefinedTerm: definitions.map(d => ({
      '@type': 'DefinedTerm',
      name: d.term,
      description: d.definition,
      inDefinedTermSet: 'https://siadlak.com/slownik',
    })),
  };
}

export default function Slownik() {
  return (
    <Layout>
      <SEO
        {...getSEOConfig("/slownik")}
        jsonLd={[
          getGlossarySchema(),
          getBreadcrumbSchema([
            { name: 'Strona g\u0142\u00F3wna', path: '/' },
            { name: 'S\u0142ownik', path: '/slownik' },
          ]),
          getFAQSchema(slownikFaqs),
        ]}
      />

      <section className="py-16 md:py-24 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dim">
                <li>
                  <Link to="/" className="hover:text-electric transition-colors">
                    Strona g&#322;&#243;wna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-on-dark font-medium">S&#322;ownik</li>
              </ol>
            </nav>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-on-dark mb-6">
              S&#322;ownik Diamentowego Umys&#322;u
            </h1>
            <p className="text-lg text-dim leading-relaxed mb-4">
              Kluczowe pojęcia używane w{"\u00A0"}programach i{"\u00A0"}metodologii Ludwika C. Siadlaka. Każda definicja jest samowystarczalna - możesz ją przeczytać niezależnie od pozostałych.
            </p>
            <p className="text-xs text-dim">
              Ostatnia aktualizacja: <time dateTime="2026-04-14">14 kwietnia 2026</time>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-void">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <dl className="space-y-10">
              {definitions.map((d, i) => (
                <div key={i} className="border-b border-white/10 pb-8">
                  <dt className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-3">
                    {d.term}
                  </dt>
                  <dd className="text-lg text-dim leading-relaxed">
                    {d.definition}
                    {d.link && (
                      <>
                        {" "}
                        <Link to={d.link} className="text-electric hover:underline text-sm">
                          Dowiedz się więcej →
                        </Link>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12 max-w-[800px]">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-dark mb-10 text-center">
            Najcz&#281;&#347;ciej zadawane pytania
          </h2>
          <div className="space-y-4">
            {slownikFaqs.map((faq, i) => (
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

      {/* Cross-link */}
      <section className="py-12 bg-void">
        <div className="container mx-auto px-6 md:px-12 max-w-[800px]">
          <h2 className="font-heading text-xl font-bold text-on-dark mb-6">
            Poznaj programy, kt&#243;re stoj&#261; za tymi poj&#281;ciami
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Produktywno\u015B\u0107", path: "/program/produktywnosc", desc: "Zmiana sposobu my\u015Blenia o czasie i energii" },
              { title: "Silna G\u0142owa", path: "/program/odpornosc", desc: "Firewall mentalny \u2014 presja jako paliwo" },
              { title: "Uwa\u017Cne \u017Bycie", path: "/program/uwaznosc", desc: "Uwa\u017Cno\u015B\u0107 dla analitycznych umys\u0142\u00F3w" },
              { title: "M\u0119ski Kompas", path: "/program/meskosc", desc: "Nawigacja \u017Cyciowa dla m\u0119\u017Cczyzn 30+" },
            ].map(p => (
              <Link
                key={p.path}
                to={p.path}
                className="group block p-5 rounded-md border border-white/10 hover:border-electric/40 transition-colors"
              >
                <p className="text-white font-bold group-hover:text-electric transition-colors mb-1">
                  {p.title}
                </p>
                <p className="text-dim text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-dim text-xs mt-6">
            Nie wiesz, od czego zacz&#261;&#263;?{" "}
            <Link to="/discovery" className="text-electric hover:underline">
              Um&#243;w bezp&#322;atn&#261; Sesj&#281; Discovery
            </Link>
            {" "}&mdash; 30 minut, w kt&#243;rych razem ustalimy kierunek.
          </p>
        </div>
      </section>
    </Layout>
  );
}
