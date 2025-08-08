import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Kontakt z supportem",
  category: "Kontakt i wsparcie",
  lastUpdated: "2024-01-12",
  readTime: "3 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Kontakt z supportem</h1>
      <p className="leading-relaxed">
        Ta strona jest w przygotowaniu. Wkrótce znajdziesz tutaj wszystkie sposoby kontaktu z naszym zespołem wsparcia.
      </p>
      
      <div className="p-6 bg-muted/30 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-3">Potrzebujesz pomocy już teraz?</h2>
        <p className="text-muted-foreground mb-4">
          Możesz już teraz skontaktować się z nami przez stronę kontaktową.
        </p>
      </div>
    </div>
  )
};

export default function KontaktSupport() {
  return <HelpPageLayout data={data} />;
}