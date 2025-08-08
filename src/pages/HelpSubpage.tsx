import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { helpPages } from './help';

type HelpComponent = React.ComponentType;

export default function HelpSubpage() {
  const { subpageSlug } = useParams<{ subpageSlug: string }>();
  const [HelpComponent, setHelpComponent] = useState<HelpComponent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      if (!subpageSlug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      if (helpPages[subpageSlug]) {
        try {
          const module = await helpPages[subpageSlug]();
          setHelpComponent(() => module.default);
          setNotFound(false);
        } catch (error) {
          console.error('Error loading help page:', error);
          setNotFound(true);
        }
      } else {
        setNotFound(true);
      }
      setIsLoading(false);
    };

    loadComponent();
  }, [subpageSlug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Ładowanie...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (notFound || !HelpComponent) {
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

  return <HelpComponent />;
}