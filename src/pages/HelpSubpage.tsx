import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, User, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';

// Sample help content - in a real app, this would come from a CMS or API
const helpContent: Record<string, {
  title: string;
  content: React.ReactNode;
  lastUpdated: string;
  readTime: string;
  category: string;
}> = {
  "jak-zaczac": {
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
  },
  "pierwsze-kroki": {
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
  },
  "nawigacja": {
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
  },
  "ustawienia-konta": {
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
  }
};

export default function HelpSubpage() {
  const { subpageSlug } = useParams<{ subpageSlug: string }>();
  const [content, setContent] = useState<typeof helpContent[string] | null>(null);

  useEffect(() => {
    if (subpageSlug && helpContent[subpageSlug]) {
      setContent(helpContent[subpageSlug]);
    }
  }, [subpageSlug]);

  useEffect(() => {
    if (content) {
      document.title = `${content.title} - Centrum pomocy - Ludwik C. Siadlak`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${content.title} - centrum pomocy i baza wiedzy.`);
      }
    }
  }, [content]);

  if (!content) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Strona nie została znaleziona</h1>
            <p className="text-muted-foreground mb-6">
              Przepraszamy, ale nie możemy znaleźć strony, której szukasz.
            </p>
            <Link 
              to="/help" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Powrót do centrum pomocy
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb navigation */}
        <nav className="mb-8">
          <Link 
            to="/help" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Centrum pomocy
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{content.category}</span>
        </nav>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {content.readTime} czytania
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Zespół Ludwika C. Siadlaka
            </div>
            <div>
              Zaktualizowano: {new Date(content.lastUpdated).toLocaleDateString('pl-PL')}
            </div>
          </div>
        </div>

        {/* Article content */}
        <GlassCard padding="xl" className="prose prose-lg max-w-none">
          {content.content}
        </GlassCard>

        {/* Help footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <GlassCard padding="lg">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Czy ten artykuł był pomocny?</h3>
              <p className="text-muted-foreground mb-4">
                Jeśli masz dodatkowe pytania, skontaktuj się z naszym zespołem wsparcia.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Skontaktuj się z nami
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}