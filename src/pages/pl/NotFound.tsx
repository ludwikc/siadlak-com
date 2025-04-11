
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Home, ArrowLeft } from 'lucide-react';

const PolishNotFound = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-neural-violet/30 dark:text-luminal-magenta/30 mb-4">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Strona nie znaleziona
            </h2>
            
            <div className="glass-card p-6 md:p-8 rounded-xl mb-10">
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
              </p>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 font-medium mb-4">
                Może to być wynikiem:
              </p>
              
              <ul className="text-left list-disc list-inside mb-6 text-subtle-slate dark:text-silver-mist/80">
                <li>Nieprawidłowego adresu URL</li>
                <li>Przestarzałego odnośnika</li>
                <li>Strony, która została przeniesiona lub usunięta</li>
              </ul>
              
              <div className="mt-8">
                <p className="text-subtle-slate dark:text-silver-mist/80 font-medium mb-4">
                  Możesz:
                </p>
                <ul className="text-left list-disc list-inside text-subtle-slate dark:text-silver-mist/80">
                  <li>Wrócić do <Link to="/pl/" className="text-neural-violet dark:text-luminal-magenta hover:underline">strony głównej</Link></li>
                  <li>Sprawdzić nasze <Link to="/pl/resources" className="text-neural-violet dark:text-luminal-magenta hover:underline">zasoby</Link></li>
                  <li><Link to="/pl/contact" className="text-neural-violet dark:text-luminal-magenta hover:underline">Skontaktować się z nami</Link> jeśli szukasz czegoś konkretnego</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pl/">
                <Button className="bg-neural-violet hover:bg-ascension-pink">
                  <Home className="mr-2 h-4 w-4" />
                  Strona główna
                </Button>
              </Link>
              
              <button onClick={() => window.history.back()} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishNotFound;
