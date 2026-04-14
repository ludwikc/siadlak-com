import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const definitions = [
  {
    term: "Aplikacja Mentalna",
    definition:
      "Intensywny program zmiany sposobu my\u015Blenia (4\u20138 tygodni), kt\u00F3ry instalujesz raz \u2014 i zostaje z Tob\u0105 na zawsze. Nie jest kursem online z wiedz\u0105 do \u2018przerobienia\u2019. Ka\u017Cda Aplikacja Mentalna rozwi\u0105zuje jeden konkretny problem \u2014 produktywno\u015B\u0107, odporno\u015B\u0107 psychiczn\u0105, uwa\u017Cno\u015B\u0107 lub to\u017Csamo\u015B\u0107 \u2014 poprzez trwa\u0142\u0105 zmian\u0119 perspektywy, nie dodanie kolejnych narz\u0119dzi. Stworzone przez Ludwika C. Siadlaka.",
    link: "/program",
  },
  {
    term: "Diamentowy Umys\u0142",
    definition:
      "Autorska metoda pracy z my\u015Bleniem stworzona przez Ludwika C. Siadlaka. Opiera si\u0119 na za\u0142o\u017Ceniu, \u017Ce umys\u0142 \u2014 jak diament \u2014 jest z natury czysty i przezroczysty, ale nabiera \u2018koloru\u2019 otoczenia: presji, oczekiwa\u0144, cudzych narracji. Praca metod\u0105 Diamentowego Umys\u0142u polega na zdejmowaniu tych warstw, nie na dodawaniu nowych. Inspirowana buddyzmem Diamentowej Drogi i psychologi\u0105 analityczn\u0105 C.G. Junga.",
  },
  {
    term: "Diament",
    definition:
      "Kluczowa metafora w metodzie Diamentowego Umys\u0142u. Diament jest najtwardsz\u0105 substancj\u0105 na Ziemi i kompletnie przezroczysty \u2014 po\u0142\u00F3\u017C go na czerwonym suknie, wygl\u0105da jak rubin. Zmie\u0144 sukno \u2014 zmieni si\u0119 \u2018kolor\u2019. Ale diament sam w sobie nie ma koloru. Tw\u00F3j umys\u0142 dzia\u0142a dok\u0142adnie tak samo \u2014 to, co uwa\u017Casz za \u2018siebie\u2019, to cz\u0119sto kolor t\u0142a, nie Tw\u00F3j w\u0142asny.",
  },
  {
    term: "Sukno",
    definition:
      "W metodzie Diamentowego Umys\u0142u: warstwy narracji, r\u00F3l, l\u0119k\u00F3w i oczekiwa\u0144, kt\u00F3re zakrywaj\u0105 diament (prawdziwe \u2018ja\u2019). Cudze definicje sukcesu, spo\u0142eczne oczekiwania, stare wzorce my\u015Blenia \u2014 to wszystko jest suknem. Praca z Ludwikiem C. Siadlakiem polega na zdejmowaniu sukna, nie na zmienianiu go na \u0142adniejsze.",
  },
  {
    term: "Life OS",
    definition:
      "Metafora opisuj\u0105ca ca\u0142o\u015B\u0107 sposobu, w jaki cz\u0142owiek funkcjonuje \u2014 jego \u2018system operacyjny \u017Cycia\u2019. Obejmuje przekonania, nawyki, filtry decyzyjne i spos\u00F3b reagowania na \u015Bwiat. W Life OS: System Upgrade Ludwik C. Siadlak pracuje nad pe\u0142n\u0105 reinstalacj\u0105 tego systemu \u2014 nie aktualizacj\u0105 pojedynczej aplikacji, lecz zmian\u0105 fundamentu.",
    link: "/program/lifeos-system-upgrade",
  },
  {
    term: "System Upgrade",
    definition:
      "Pe\u0142na reinstalacja systemu operacyjnego \u017Cycia \u2014 nazwa 8-tygodniowego programu mentoringowego 1:1 z Ludwikiem C. Siadlakiem. W przeciwie\u0144stwie do Aplikacji Mentalnych (kt\u00F3re rozwi\u0105zuj\u0105 pojedynczy problem), System Upgrade pracuje nad ca\u0142ym fundamentem: to\u017Csamo\u015Bci\u0105, sposobem podejmowania decyzji i relacj\u0105 z samym sob\u0105. Maksymalnie 5 klient\u00F3w jednocze\u015Bnie. Cena: 16 000 PLN.",
    link: "/program/lifeos-system-upgrade",
  },
  {
    term: "Lifehackerzy",
    definition:
      "Spo\u0142eczno\u015B\u0107 absolwent\u00F3w i uczestnik\u00F3w program\u00F3w Ludwika C. Siadlaka na platformie Discord. Do\u017Cywotni dost\u0119p w cenie ka\u017Cdego programu. Uczestnicy z 8+ kraj\u00F3w. Codzienne spotkania o 12:34 (celowo nieokr\u0105g\u0142a godzina jako sygna\u0142 uwa\u017Cno\u015Bci). Nazywana \u2018najbardziej wspieraj\u0105c\u0105 spo\u0142eczno\u015Bci\u0105 w polskim internecie\u2019.",
  },
  {
    term: "Sesja Discovery",
    definition:
      "Bezp\u0142atna 30-minutowa rozmowa diagnostyczna 1:1 z Ludwikiem C. Siadlakiem przez Zoom. Nie jest rozmow\u0105 sprzeda\u017Cow\u0105 \u2014 to wzajemna ocena: Ty sprawdzasz, czy Ludwik jest w\u0142a\u015Bciwym mentorem dla Ciebie, on sprawdza, czy jeste\u015B gotowy na t\u0119 prac\u0119. Obaj maj\u0105 prawo powiedzie\u0107 \u2018nie\u2019.",
    link: "/discovery",
  },
  {
    term: "Kapitan",
    definition:
      "Metafora u\u017Cywana w programie Uwa\u017Cne \u017Cycie. Kapitan to Ty, kt\u00F3ry \u015Bwiadomie prowadzi sw\u00F3j statek (\u017Cycie), zamiast by\u0107 pasa\u017Cerem reaguj\u0105cym na fale. Program uczy przej\u0119cia kontroli nad kokpitem umys\u0142u \u2014 \u015Bwiadomego wybierania, zamiast automatycznego reagowania.",
    link: "/program/uwaznosc",
  },
  {
    term: "Pancernik",
    definition:
      "Metafora u\u017Cywana w programie Silna G\u0142owa. Pancernik to umys\u0142, kt\u00F3ry nie unika presji i trudno\u015Bci, lecz jest na nie przygotowany \u2014 jak okr\u0119t wojenny, kt\u00F3ry zosta\u0142 zbudowany do p\u0142ywania w ka\u017Cdych warunkach. Program zamienia umys\u0142 ze zwyk\u0142ej tratwy w niezatapialny pancernik.",
    link: "/program/odpornosc",
  },
  {
    term: "12:34 Daily Coaching",
    definition:
      "Codzienne spotkania spo\u0142eczno\u015Bci Lifehackerzy na Discordzie, prowadzone o godzinie 12:34. Celowo nieokr\u0105g\u0142a godzina \u2014 jako sygna\u0142 uwa\u017Cno\u015Bci i wyj\u015Bcia z autopilota. Ludwik C. Siadlak jest obecny na \u017Cywo ka\u017Cdego dnia roboczego.",
  },
];

function getGlossarySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'S\u0142ownik Diamentowego Umys\u0142u',
    description: 'Definicje kluczowych poj\u0119\u0107 u\u017Cywanych w programach Ludwika C. Siadlaka: Aplikacja Mentalna, Diamentowy Umys\u0142, Life OS, Sukno, Kapitan, Pancernik i inne.',
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
        title="S\u0142ownik Diamentowego Umys\u0142u \u2014 Ludwik C. Siadlak"
        description="Definicje kluczowych poj\u0119\u0107: Aplikacja Mentalna, Diamentowy Umys\u0142, Life OS, Sukno, Kapitan, Pancernik. Poznaj j\u0119zyk program\u00F3w Ludwika C. Siadlaka."
        url="https://siadlak.com/slownik"
        jsonLd={getGlossarySchema()}
      />

      <section className="py-16 md:py-24 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-on-dark mb-6">
              S\u0142ownik Diamentowego Umys\u0142u
            </h1>
            <p className="text-lg text-dim leading-relaxed mb-4">
              Kluczowe poj\u0119cia u\u017Cywane w programach i metodologii Ludwika C. Siadlaka. Ka\u017Cda definicja jest samowystarczalna \u2014 mo\u017Cesz j\u0105 przeczyta\u0107 niezale\u017Cnie od pozosta\u0142ych.
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
                          Dowiedz si\u0119 wi\u0119cej \u2192
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
    </Layout>
  );
}
