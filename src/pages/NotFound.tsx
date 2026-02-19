

import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-electric/10 inline-block rounded-full p-6 mb-6">
            <span className="text-electric text-4xl">
              404
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-on-light">
            Nie znaleziono strony
          </h1>

          <p className="text-dim mb-8 max-w-lg mx-auto">
            Strona została przeniesiona, zmieniono jej nazwę lub jest tymczasowo
            niedostępna. Zacznij od nowa i wróć na stronę główną.
          </p>

          <Link to="/">
            <Button variant="secondary">
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
