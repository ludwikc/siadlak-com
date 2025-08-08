import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Nawigacja po platformie",
  category: "Rozpoczęcie",
  lastUpdated: "2024-01-05",
  readTime: "4 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Nawigacja po platformie</h1>
      <p className="leading-relaxed">
        Poznaj główne sekcje platformy i dowiedz się, jak efektywnie się po niej poruszać.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Główne menu</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>Strona główna</strong> - aktualności i polecane treści</li>
        <li><strong>Programy</strong> - wszystkie dostępne kursy i szkolenia</li>
        <li><strong>Podcast</strong> - odcinki podcastów z różnych serii</li>
        <li><strong>Społeczność</strong> - forum dyskusyjne i grupy tematyczne</li>
        <li><strong>Mój profil</strong> - ustawienia konta i historia aktywności</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Skróty klawiszowe</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><code className="bg-muted px-2 py-1 rounded text-sm">Ctrl + /</code> - otwórz wyszukiwarkę</li>
        <li><code className="bg-muted px-2 py-1 rounded text-sm">Ctrl + H</code> - powrót do strony głównej</li>
        <li><code className="bg-muted px-2 py-1 rounded text-sm">Ctrl + P</code> - szybki dostęp do profilu</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Wyszukiwarka</h2>
      <p className="leading-relaxed">Użyj wyszukiwarki, aby szybko znaleźć:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Konkretne lekcje czy kursy</li>
        <li>Tematy w społeczności</li>
        <li>Odcinki podcastów</li>
        <li>Artykuły w centrum pomocy</li>
      </ul>
    </div>
  )
};

export default function Nawigacja() {
  return <HelpPageLayout data={data} />;
}