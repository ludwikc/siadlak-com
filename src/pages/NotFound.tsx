
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-neural-violet/10 dark:bg-neural-violet/20 inline-block rounded-full p-6 mb-6">
            <span className="text-neural-violet dark:text-luminal-magenta text-4xl">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
            Nie znaleziono strony
          </h1>
          
          <p className="text-subtle-slate dark:text-silver-mist/80 mb-8 max-w-lg mx-auto">
            Strona została przeniesiona, zmieniono jej nazwę lub jest tymczasowo niedostępna. Zacznij od nowa i wróć na stronę główną.
          </p>
          
          <Link to="/">
            <Button variant="default">
              <Home size={18} />
              Strona główna
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
