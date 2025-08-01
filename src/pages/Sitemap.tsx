import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import { Link } from 'react-router-dom';
import { ExternalLink, Book, Mic2, Video, FileText, Mail } from '@/lib/icons';

const Sitemap = () => {
  const siteStructure = [
    {
      category: 'Główne strony',
      icon: <FileText className="h-5 w-5" />,
      pages: [
        { name: 'Strona główna', path: '/', description: 'Główna strona siadlak.com' },
        { name: 'O mnie', path: '/about', description: 'Poznaj moją historię i podejście' },
        { name: 'Kontakt', path: '/contact', description: 'Umów rozmowę lub zadaj pytanie' },
        { name: 'Moja praca', path: '/work', description: 'Zobacz przykłady mojej pracy' },
        { name: 'Newsletter', path: '/newsletter', description: 'Zapisz się na cotygodniowe przemyślenia' },
        { name: 'Testimoniale', path: '/testimonials', description: 'Co mówią moi klienci' },
        { name: 'Ocena', path: '/assessment', description: 'Oceń swój poziom produktywności' },
        { name: 'Społeczność', path: '/community', description: 'Dołącz do społeczności Hackerzy' },
        { name: 'Podziękowania', path: '/thank-you', description: 'Strona potwierdzenia' },
        { name: 'Regulamin', path: '/legal', description: 'Warunki użytkowania i polityka prywatności' },
      ]
    },
    {
      category: 'Programy szkoleniowe',
      icon: <Book className="h-5 w-5" />,
      pages: [
        { name: 'Przegląd programów', path: '/program', description: 'Wszystkie dostępne kursy i programy' },
        { name: 'Hakowanie Produktywności', path: '/program/hakowanie-produktywnosci', description: 'Kompleksowy program produktywności' },
        { name: 'Mental Elevator', path: '/program/mental-elevator', description: 'Program rozwoju mentalnego' },
        { name: 'Szczegóły kursu', path: '/program/:courseSlug', description: 'Dynamiczne strony szczegółów kursów' },
      ]
    },
    {
      category: 'Podcasty',
      icon: <Mic2 className="h-5 w-5" />,
      pages: [
        { name: 'Wszystkie podcasty', path: '/podcast', description: 'Przegląd wszystkich podcastów' },
        { name: 'Nowy podcast', path: '/new-podcast', description: 'Najnowsze odcinki podcastu' },
        { name: 'Life Hacking', path: '/podcast/life-hacking', description: 'Podcast o hakach życiowych' },
        { name: 'Uważne Życie', path: '/podcast/uwazne-zycie', description: 'Podcast o świadomym życiu' },
      ]
    },
    {
      category: 'Webinarium',
      icon: <Video className="h-5 w-5" />,
      pages: [
        { name: 'Webinarium', path: '/webinar', description: 'Główna strona webinarium' },
        { name: 'Rejestracja', path: '/webinar/registration', description: 'Zarejestruj się na webinarium' },
        { name: 'Poczekalnia', path: '/webinar/lobby', description: 'Poczekaj na rozpoczęcie webinarium' },
        { name: 'Na żywo', path: '/webinar/live', description: 'Webinarium na żywo' },
        { name: 'Powtórka', path: '/webinar/replay', description: 'Obejrzyj powtórkę webinarium' },
        { name: 'Wygasłe', path: '/webinar/expired', description: 'Webinarium już się zakończyło' },
      ]
    },
    {
      category: 'Strony w przygotowaniu',
      icon: <ExternalLink className="h-5 w-5" />,
      pages: [
        { name: 'Zasoby', path: '/resources', description: 'Przydatne materiały i narzędzia (w przygotowaniu)' },
        { name: 'Polityka prywatności', path: '/privacy', description: 'Szczegóły polityki prywatności (w przygotowaniu)' },
        { name: 'Warunki użytkowania', path: '/terms', description: 'Warunki korzystania z serwisu (w przygotowaniu)' },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Mapa strony
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Przegląd wszystkich dostępnych stron i sekcji siadlak.com
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mr-4">
                    <div className="text-neural-violet dark:text-luminal-magenta">
                      {section.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                    {section.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <GlassCard key={pageIndex} className="p-6 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist">
                            {page.name}
                          </h3>
                          {page.path.includes(':') || section.category === 'Strony w przygotowaniu' ? (
                            <span className="text-gray-400 dark:text-gray-500 text-sm">
                              {section.category === 'Strony w przygotowaniu' ? 'Wkrótce' : 'Dynamiczne'}
                            </span>
                          ) : (
                            <ExternalLink className="h-4 w-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                          )}
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                          {page.description}
                        </p>
                        
                        <div className="mt-auto">
                          {page.path.includes(':') || section.category === 'Strony w przygotowaniu' ? (
                            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                              {page.path}
                            </code>
                          ) : (
                            <Link 
                              to={page.path} 
                              onClick={() => window.scrollTo(0, 0)}
                              className="inline-flex items-center text-neural-violet dark:text-luminal-magenta hover:text-neural-violet/80 dark:hover:text-luminal-magenta/80 transition-colors text-sm font-medium"
                            >
                              Przejdź do strony
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Nie możesz znaleźć tego, czego szukasz?
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Skontaktuj się ze mną bezpośrednio - chętnie pomogę Ci znaleźć odpowiednie rozwiązanie.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="inline-flex items-center px-6 py-3 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-lg font-medium transition-colors">
                Skontaktuj się ze mną
                <Mail className="h-4 w-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;