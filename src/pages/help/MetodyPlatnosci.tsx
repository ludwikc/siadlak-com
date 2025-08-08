import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Metody płatności",
  category: "Płatności i subskrypcje",
  lastUpdated: "2024-01-12",
  readTime: "5 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Metody płatności</h1>
      <p className="leading-relaxed">
        Ta strona jest w przygotowaniu. Wkrótce znajdziesz tutaj informacje o dostępnych metodach płatności.
      </p>
      
      <div className="p-6 bg-muted/30 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-3">Potrzebujesz pomocy już teraz?</h2>
        <p className="text-muted-foreground mb-4">
          Jeśli masz pytania dotyczące płatności, skontaktuj się z naszym zespołem wsparcia.
        </p>
      </div>
    </div>
  )
};

export default function MetodyPlatnosci() {
  return <HelpPageLayout data={data} />;
}