import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Rozwiązywanie problemów",
  category: "Kontakt i wsparcie",
  lastUpdated: "2024-01-12",
  readTime: "7 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Rozwiązywanie problemów</h1>
      <p className="leading-relaxed">
        Jeśli napotkasz problemy podczas korzystania z platformy, ten przewodnik pomoże Ci je rozwiązać.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Najczęstsze problemy</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">🔐 Nie mogę się zalogować</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>Sprawdź, czy wpisujesz prawidłowy email i hasło</li>
            <li>Upewnij się, że Caps Lock nie jest włączony</li>
            <li>Spróbuj zresetować hasło</li>
            <li>Wyczyść pamięć podręczną przeglądarki</li>
          </ul>
        </div>
        
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">🎥 Problemy z odtwarzaniem wideo</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>Sprawdź połączenie internetowe</li>
            <li>Odśwież stronę (F5)</li>
            <li>Spróbuj innej przeglądarki</li>
            <li>Wyłącz blokery reklam</li>
          </ul>
        </div>
        
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">💳 Problemy z płatnościami</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>Sprawdź dane karty płatniczej</li>
            <li>Upewnij się, że karta ma wystarczające środki</li>
            <li>Sprawdź, czy karta nie jest zablokowana</li>
            <li>Skontaktuj się z bankiem</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Problemy techniczne</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Strona się nie ładuje</strong> — Sprawdź połączenie internetowe i spróbuj odświeżyć</li>
        <li><strong>Powiadomienia nie działają</strong> — Sprawdź ustawienia przeglądarki i pozwolenia</li>
        <li><strong>Nie mogę pobrać materiałów</strong> — Sprawdź blokery popup i ustawienia pobierania</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Wsparcie techniczne</h2>
      <p className="leading-relaxed">
        Jeśli powyższe rozwiązania nie pomogoły, skontaktuj się z naszym zespołem wsparcia:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Email: support@siadlak.com</li>
        <li>Formularz kontaktowy na stronie</li>
        <li>Chat na żywo (dostępny w godzinach 9-17)</li>
      </ul>
      
      <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 mt-6">
        <h3 className="font-semibold mb-2">💡 Wskazówka</h3>
        <p className="text-sm">
          Zanim skontaktujesz się z pomocą techniczną, przygotuj opis problemu, 
          informacje o przeglądarce i systemie operacyjnym oraz screenshoty jeśli to możliwe.
        </p>
      </div>
    </div>
  )
};

export default function RozwiazywanieProblemow() {
  return <HelpPageLayout data={data} />;
}