import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Pierwsze kroki na platformie",
  category: "Rozpoczęcie",
  lastUpdated: "2024-01-10",
  readTime: "5 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Pierwsze kroki na platformie</h1>
      <p className="leading-relaxed">
        Po zarejestrowaniu się na platformie, oto najważniejsze rzeczy, które powinieneś zrobić.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Uzupełnij swój profil</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Dodaj zdjęcie profilowe</li>
        <li>Wypełnij informacje o sobie</li>
        <li>Ustaw swoje cele rozwojowe</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Eksploruj dostępne treści</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Przejrzyj katalog kursów</li>
        <li>Sprawdź najnowsze odcinki podcastów</li>
        <li>Zobacz nadchodzące webinary</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Dołącz do społeczności</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Przedstaw się w sekcji "Nowi członkowie"</li>
        <li>Znajdź osoby o podobnych zainteresowaniach</li>
        <li>Weź udział w dyskusjach</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Skonfiguruj powiadomienia</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Wybierz, o czym chcesz być informowany</li>
        <li>Ustaw częstotliwość powiadomień email</li>
        <li>Włącz powiadomienia push (opcjonalne)</li>
      </ul>
    </div>
  )
};

export default function PierwszeKroki() {
  return <HelpPageLayout data={data} />;
}