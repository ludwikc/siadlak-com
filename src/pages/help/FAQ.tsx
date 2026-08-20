import { Link } from 'react-router-dom';
import HelpPageLayout from './HelpPageLayout';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import type { HelpPageData } from './types';

type FAQItem = {
  question: string;
  answer: string;
  link?: { to: string; label: string };
};

const faqItems: FAQItem[] = [
  {
    question: 'Czym są Aplikacje Mentalne?',
    answer:
      'Aplikacje Mentalne to programy zmiany sposobu myślenia stworzone przez Ludwika C. Siadlaka. Analogia jest komputerowa: zamiast dokładać kolejne narzędzia, instalujesz w umyśle nowy sposób patrzenia na czas, presję, uważność albo tożsamość. Raz zainstalowana aplikacja zostaje z Tobą — bez wracania do kursu co pół roku.',
    link: { to: '/program', label: 'Zobacz wszystkie programy' },
  },
  {
    question: 'Czym Aplikacja Mentalna różni się od zwykłego kursu online?',
    answer:
      'Kurs dostarcza wiedzę, a wiedza sama niczego nie zmienia — możesz przeczytać sto książek o pływaniu i nadal nie popłyniesz. Aplikacja Mentalna pracuje na poziomie sposobu myślenia: przez metafory i codzienną praktykę zmienia to, jak podejmujesz decyzje, a nie tylko ile wiesz.',
  },
  {
    question: 'Który program wybrać na początek?',
    answer:
      'Chaos i prokrastynacja → Produktywność. Stres i presja → Silna Głowa (Odporność Psychiczna). Życie na autopilocie → Uważne Życie (Mindfulness). Pytania o kierunek i tożsamość → Męski Kompas. A jeśli czujesz, że problem leży głębiej niż jeden obszar — umów bezpłatną Sesję Discovery i porozmawiajmy o Life OS.',
    link: { to: '/program', label: 'Drzewo decyzyjne programów' },
  },
  {
    question: 'Jak wygląda zakup i płatność?',
    answer:
      'Zakup odbywa się online przez buy.siadlak.com — płacisz raz, bez subskrypcji i ukrytych opłat. Ceny programów samodzielnych są cenami brutto. Po zakupie otrzymujesz e-mail z dostępem do materiałów oraz zaproszeniem do społeczności Lifehackerzy.',
  },
  {
    question: 'Czy dostanę fakturę?',
    answer:
      'Tak, do każdego zakupu wystawiana jest faktura. Life OS i Train The Trainer: AI można rozliczyć na firmę — Life OS również w dwóch ratach po 6 500 PLN netto. Jeśli potrzebujesz nietypowych danych na fakturze, napisz przez stronę kontaktową przed zakupem.',
    link: { to: '/contact', label: 'Kontakt' },
  },
  {
    question: 'Jak długo mam dostęp do programu?',
    answer:
      'Dożywotnio. Kupujesz raz i wracasz do materiałów, kiedy chcesz — razem z późniejszymi aktualizacjami programu. Nie ma subskrypcji ani odnawiania dostępu. Dożywotni jest też dostęp do społeczności Lifehackerzy, który dostajesz w cenie każdego programu.',
  },
  {
    question: 'Jaka jest gwarancja zwrotu?',
    answer:
      'Rezultatów nie gwarantuję — uciekaj od każdego, kto gwarantuje. Gwarantuję za to bezpieczeństwo decyzji: programy samodzielne mają 30 dni gwarancji zwrotu, a mentoring Life OS — dwa tygodnie. Jeśli w tym czasie nie poczujesz różnicy, oddaję pieniądze. Bez pytań i bez drobnego druczku.',
  },
  {
    question: 'Jak dołączyć do społeczności Lifehackerzy na Discordzie?',
    answer:
      'Dostęp do Discorda Lifehackerzy to dożywotni bonus przy zakupie dowolnego programu. Po zakupie otrzymasz e-mail z linkiem-zaproszeniem. Społeczność to ponad 500 osób z 8+ krajów. Konfigurację krok po kroku znajdziesz w artykule „Pierwsze kroki z Discordem”.',
    link: { to: '/help/pierwsze-kroki-z-discordem', label: 'Pierwsze kroki z Discordem' },
  },
  {
    question: 'Czym jest daily coaching o 12:34?',
    answer:
      'To codzienne spotkanie społeczności Lifehackerzy na Discordzie — krótki wspólny reset i coaching na żywo. Godzina jest celowo nieokrągła: samo zauważenie 12:34 to mały trening uważności. Nie musisz być codziennie; wpadasz wtedy, kiedy tego potrzebujesz.',
  },
  {
    question: 'Ile czasu tygodniowo wymaga program?',
    answer:
      'Programy samodzielne trwają 4–6 tygodni i są podzielone na moduły — realnie kilka godzin tygodniowo, w Twoim tempie. Life OS to jedna sesja 1:1 tygodniowo (od 50 minut do 2,5 godziny) przez 8 tygodni. To nie wymaga porzucenia życia — wymaga obecności.',
  },
  {
    question: 'Czym Life OS: System Upgrade różni się od programów samodzielnych?',
    answer:
      'Programy samodzielne to praca własna według gotowej struktury. Life OS to 8 tygodni mentoringu 1:1: pełna diagnostyka, spersonalizowana mapa transformacji, nagrania sesji i kontakt między sesjami. Prowadzę maksymalnie 5 osób jednocześnie, dlatego wejście poprzedza Sesja Discovery.',
    link: { to: '/program/lifeos-system-upgrade', label: 'Więcej o Life OS' },
  },
  {
    question: 'Czym jest Sesja Discovery i czy do czegoś zobowiązuje?',
    answer:
      'To bezpłatna, 30-minutowa rozmowa 1:1 przez Zoom przed Life OS. Nie jest to rozmowa sprzedażowa, tylko wzajemna kwalifikacja — sprawdzamy, czy ta praca ma sens dla Ciebie i czy ja jestem właściwą osobą do niej. Do niczego nie zobowiązuje.',
    link: { to: '/discovery', label: 'Umów Sesję Discovery' },
  },
  {
    question: 'Czy to jest terapia albo klasyczny coaching?',
    answer:
      'Ani jedno, ani drugie w klasycznym sensie. Terapia pomaga zrozumieć przeszłość; coaching daje narzędzia i strategie. Ta praca zmienia sposób, w jaki podejmujesz decyzje w teraźniejszości — nie dostajesz gotowych odpowiedzi, tylko pytania, na które sam znajdujesz odpowiedzi. One już w Tobie są.',
  },
  {
    question: 'Dla kogo te programy NIE są?',
    answer:
      'Dla szukających motywacyjnego kopa, szybkich trików i magicznych formuł. Jeśli potrzebujesz, żeby ktoś mówił Ci „dasz radę” przez sześć tygodni — to nie tu. Te programy są dla ludzi, którzy znają już wszystkie narzędzia i wiedzą, że problem leży głębiej.',
  },
  {
    question: 'Mam problem techniczny z dostępem — co zrobić?',
    answer:
      'Napisz przez stronę kontaktową i podaj adres e-mail użyty przy zakupie — to znacząco przyspieszy sprawę. Najczęstsze problemy (logowanie, brak e-maila z dostępem, Discord) opisuje też artykuł „Rozwiązywanie problemów”. Odpowiadam osobiście.',
    link: { to: '/help/rozwiazywanie-problemow', label: 'Rozwiązywanie problemów' },
  },
];

const data: HelpPageData = {
  title: 'Najczęściej zadawane pytania',
  category: 'Kontakt i wsparcie',
  slug: 'faq',
  lastUpdated: '2026-08-20',
  readTime: '7 min',
  jsonLd: [
    getFAQSchema(faqItems.map(({ question, answer }) => ({ question, answer }))),
    getBreadcrumbSchema([
      { name: 'Strona główna', path: '/' },
      { name: 'Centrum pomocy', path: '/help' },
      { name: 'Najczęściej zadawane pytania', path: '/help/faq' },
    ]),
  ],
  content: (
    <div className="space-y-8">
      <p className="leading-relaxed">
        Zebrane w jednym miejscu odpowiedzi na pytania, które dostaję najczęściej — o programy,
        płatności, gwarancję zwrotu i społeczność Lifehackerzy. Jeśli nie znajdziesz tu swojej
        odpowiedzi, po prostu <Link to="/contact" className="text-primary hover:underline">napisz do mnie</Link>.
      </p>

      {faqItems.map((item) => (
        <section key={item.question}>
          <h2 className="text-xl font-semibold mb-3">{item.question}</h2>
          <p className="leading-relaxed">{item.answer}</p>
          {item.link && (
            <p className="mt-2">
              <Link to={item.link.to} className="text-primary hover:underline">
                {item.link.label}
              </Link>
            </p>
          )}
        </section>
      ))}
    </div>
  ),
};

export default function FAQ() {
  return <HelpPageLayout data={data} />;
}
