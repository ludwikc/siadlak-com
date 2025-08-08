import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Ustawienia konta",
  category: "Konto i ustawienia",
  lastUpdated: "2024-01-12",
  readTime: "6 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Ustawienia konta</h1>
      <p className="leading-relaxed">
        Personalizuj swoje doświadczenie na platformie poprzez dostosowanie ustawień konta.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Podstawowe informacje</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>Nazwa użytkownika</strong> - jak inni Cię widzą na platformie</li>
        <li><strong>Email</strong> - adres do logowania i powiadomień</li>
        <li><strong>Zdjęcie profilowe</strong> - Twoja wizytówka w społeczności</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Preferencje prywatności</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>Widoczność profilu</strong> - kto może widzieć Twój profil</li>
        <li><strong>Historia aktywności</strong> - czy pokazywać Twoją aktywność</li>
        <li><strong>Udostępnianie postępów</strong> - czy udostępniać postępy w nauce</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Powiadomienia</h2>
      <p className="leading-relaxed">Skonfiguruj, jakie powiadomienia chcesz otrzymywać:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Nowe treści w Twoich kursach</li>
        <li>Odpowiedzi na Twoje komentarze</li>
        <li>Wiadomości od innych użytkowników</li>
        <li>Newsletter z aktualnościami</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-3">Bezpieczeństwo</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>Zmiana hasła</strong> - regularna zmiana hasła zwiększa bezpieczeństwo</li>
        <li><strong>Logowanie dwuskładnikowe</strong> - dodatkowa warstwa ochrony</li>
        <li><strong>Aktywne sesje</strong> - przegląd urządzeń, na których jesteś zalogowany</li>
      </ul>
    </div>
  )
};

export default function UstawieniaKonta() {
  return <HelpPageLayout data={data} />;
}