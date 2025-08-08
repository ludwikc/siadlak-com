import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, User, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import type { HelpPageData } from './types';

interface HelpPageLayoutProps {
  data: HelpPageData;
}

export default function HelpPageLayout({ data }: HelpPageLayoutProps) {
  useEffect(() => {
    document.title = `${data.title} - Centrum pomocy - Ludwik C. Siadlak`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${data.title} - centrum pomocy i baza wiedzy.`);
    }
  }, [data.title]);

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
          <span className="text-foreground">{data.category}</span>
        </nav>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {data.readTime} czytania
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Zespół Ludwika C. Siadlaka
            </div>
            <div>
              Zaktualizowano: {new Date(data.lastUpdated).toLocaleDateString('pl-PL')}
            </div>
          </div>
        </div>

        {/* Article content */}
        <GlassCard padding="xl" className="prose prose-lg max-w-none">
          {data.content}
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