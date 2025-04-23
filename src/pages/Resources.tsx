
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, BookOpen, Code } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Cyfrowa Lista Kontrolna",
      description: "Prosty przewodnik do identyfikacji, gdzie technologia tobą steruje zamiast tobie służyć, wraz z jasnymi krokami działania dla każdego obszaru.",
      icon: <FileText className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Pobierz teraz",
      link: "/resources/digital-command-checklist",
    },
    {
      title: "5 Minut do Skupienia",
      description: "Prosty system odzyskiwania jasności umysłu, gdy cyfrowy chaos Cię przytłacza, możliwy do użycia w każdej chwili.",
      icon: <BookOpen className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Pobierz Przewodnik",
      link: "/resources/5-minutes-to-focus",
    },
    {
      title: "Skrypty Poleceń AI",
      description: "Gotowe do użycia szablony, które pomogą Ci dokładnie uzyskać to, czego potrzebujesz od narzędzi AI, zamiast tracić czas na próby i błędy.",
      icon: <Code className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Dostęp do Skryptów",
      link: "/resources/ai-command-scripts",
    }
  ];

  const blogPosts = [
    {
      title: "Jak Sprawić, by ChatGPT Pracował Dla Ciebie, a Nie Przeciwko Tobie",
      excerpt: "Większość osób używa narzędzi AI nieefektywnie, stając się ich sługami zamiast mistrzami. Oto jak odwrócić sytuację...",
      image: "",
      slug: "make-chatgpt-work-for-you",
      date: "2025-03-15"
    },
    {
      title: "Granice Cyfrowe, Które Naprawdę Działają",
      excerpt: "Ustanawianie granic z technologią to nie kwestia używania jej mniej, ale używania jej na Twoich warunkach. Te trzy podejścia robią różnicę...",
      image: "",
      slug: "digital-boundaries-that-work",
      date: "2025-02-28"
    },
    {
      title: "Mit Wielozadaniowości i To, Co Działa Zamiast Tego",
      excerpt: "Twój mózg nie został zaprojektowany do ciągłego przełączania się. Oto jak zorganizować cyfrową pracę dla maksymalnej koncentracji i minimalnego stresu...",
      image: "",
      slug: "myth-of-multitasking",
      date: "2025-02-10"
    }
  ];

  return (
    <Layout>
      {/* Sekcja Główna */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Darmowe Materiały
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Te narzędzia i artykuły pomogą Ci natychmiast przejąć kontrolę nad Twoim cyfrowym życiem. Każdy zasób oferuje praktyczne kroki, które możesz natychmiast wdrożyć.
            </p>
          </div>
        </div>
      </section>
      
      {/* Siatka Zasobów */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl flex flex-col h-full"
              >
                <div className="mb-4">
                  {resource.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  {resource.title}
                </h3>
                
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-6 flex-grow">
                  {resource.description}
                </p>
                
                <Link 
                  to={resource.link}
                  className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium hover:underline"
                >
                  {resource.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sekcja Bloga */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Najnowsze Spostrzeżenia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl overflow-hidden flex flex-col h-full"
                >
                  {/* Miniatura wpisu na blogu */}
                  <div className="h-48 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30"></div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-neural-violet dark:text-luminal-magenta mb-2">
                      {post.date}
                    </p>
                    
                    <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      {post.title}
                    </h3>
                    
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/resources/${post.slug}`}
                      className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium hover:underline"
                    >
                      Czytaj dalej
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Wszystkie materiały
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sekcja CTA */}
      <section className="py-12 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Chcesz Regularnie Otrzymywać Spostrzeżenia?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Dołącz do mojego newslettera, aby co tydzień otrzymywać strategie panowania nad Twoim cyfrowym życiem.
            </p>
            
            <Link to="/newsletter">
              <Button className="bg-white text-neural-violet hover:bg-white/90">
                Dołącz do newslettera
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
