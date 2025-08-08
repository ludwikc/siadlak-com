import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Jak zacząć",
  category: "Rozpoczęcie",
  lastUpdated: "2024-01-15",
  readTime: "3 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Jak zacząć z platformą</h1>
      <p className="leading-relaxed">
        Witaj na platformie Ludwika C. Siadlaka! Ten przewodnik pomoże Ci zrobić pierwsze kroki.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Rejestracja i logowanie</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li><strong>Utwórz konto</strong> - kliknij przycisk "Zarejestruj się" i wypełnij formularz</li>
        <li><strong>Potwierdź email</strong> - sprawdź swoją skrzynkę pocztową i kliknij link aktywacyjny</li>
        <li><strong>Zaloguj się</strong> - użyj swoich danych do pierwszego logowania</li>
      </ol>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Pierwsze kroki</h2>
      <p className="leading-relaxed">Po zalogowaniu zalecamy:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Uzupełnij swój profil w ustawieniach konta</li>
        <li>Przejrzyj dostępne kursy i programy</li>
        <li>Dołącz do społeczności</li>
        <li>Skonfiguruj powiadomienia według swoich preferencji</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Dostęp do treści</h2>
      <p className="leading-relaxed">
        Wszystkie wykupione kursy znajdziesz w sekcji "Moje programy". Możesz:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Oglądać lekcje w dowolnej kolejności</li>
        <li>Śledzić swoje postępy</li>
        <li>Zadawać pytania w komentarzach</li>
        <li>Pobierać materiały dodatkowe</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Potrzebujesz pomocy?</h2>
      <p className="leading-relaxed">Jeśli masz pytania, zawsze możesz:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Sprawdzić to centrum pomocy</li>
        <li>Skontaktować się z naszym zespołem wsparcia</li>
        <li>Dołączyć do dyskusji w społeczności</li>
      </ul>
    </div>
  )
};

export default function JakZaczac() {
  return <HelpPageLayout data={data} />;
}