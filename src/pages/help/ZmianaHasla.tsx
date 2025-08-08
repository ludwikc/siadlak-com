import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Zmiana hasła",
  category: "Konto i ustawienia",
  lastUpdated: "2024-01-12",
  readTime: "3 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Zmiana hasła</h1>
      <p className="leading-relaxed">
        Ta strona jest w przygotowaniu. Wkrótce znajdziesz tutaj szczegółowe instrukcje dotyczące zmiany hasła do Twojego konta.
      </p>
      
      <div className="p-6 bg-muted/30 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-3">Potrzebujesz pomocy już teraz?</h2>
        <p className="text-muted-foreground mb-4">
          Jeśli potrzebujesz pilnej pomocy ze zmianą hasła, skontaktuj się z naszym zespołem wsparcia.
        </p>
      </div>
    </div>
  )
};

export default function ZmianaHasla() {
  return <HelpPageLayout data={data} />;
}