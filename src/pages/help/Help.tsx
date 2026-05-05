import { Link } from 'react-router-dom';
import { ChevronRight, Book, MessageCircle, Settings, Shield, CreditCard, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/glass-card';
import SEO from '@/components/SEO';
import { getSEOConfig } from '@/lib/seo-config';

const helpSections = [
  {
    title: "Rozpoczęcie",
    description: "Podstawowe informacje o platformie i pierwszych krokach",
    icon: Book,
    articles: [
      { title: "Jak zacząć", slug: "jak-zaczac" },
      { title: "Pierwsze kroki", slug: "pierwsze-kroki" },
      { title: "Nawigacja po platformie", slug: "nawigacja" }
    ]
  },
  {
    title: "Konto i ustawienia",
    description: "Zarządzanie kontem, profilem i preferencjami",
    icon: Settings,
    articles: [
      { title: "Ustawienia konta", slug: "ustawienia-konta" },
      { title: "Zmiana hasła", slug: "zmiana-hasla" },
      { title: "Preferencje powiadomień", slug: "powiadomienia" }
    ]
  },
  {
    title: "Discord",
    description: "Informacje o platformie społecznościowej Discord",
    icon: CreditCard,
    articles: [
      { title: "Pierwsze kroki z Discordem", slug: "pierwsze-kroki-z-discordem" },
      { title: "Rozwiązywanie problemów", slug: "historia-platnosci" },
      { title: "Anulowanie subskrypcji", slug: "anulowanie-subskrypcji" }
    ]
  },
  {
    title: "Wspólnota",
    description: "Jak korzystać ze społeczności i uczestniczyć w dyskusjach",
    icon: Users,
    articles: [
      { title: "Dołączenie do społeczności", slug: "dolaczenie-spolecznosc" },
      { title: "Zasady społeczności", slug: "zasady-spolecznosci" },
      { title: "Moderacja treści", slug: "moderacja-tresci" }
    ]
  },
  {
    title: "Prywatność i bezpieczeństwo",
    description: "Ochrona danych i zasady bezpieczeństwa",
    icon: Shield,
    articles: [
      { title: "Polityka prywatności", slug: "polityka-prywatnosci" },
      { title: "Bezpieczeństwo danych", slug: "bezpieczenstwo-danych" },
      { title: "Zgłaszanie problemów", slug: "zglaszanie-problemow" }
    ]
  },
  {
    title: "Kontakt i wsparcie",
    description: "Sposoby kontaktu i uzyskania pomocy",
    icon: MessageCircle,
    articles: [
      { title: "Kontakt z supportem", slug: "kontakt-support" },
      { title: "Najczęściej zadawane pytania", slug: "faq" },
      { title: "Zgłaszanie błędów", slug: "zglaszanie-bledow" }
    ]
  }
];

export default function Help() {
  return (
    <Layout>
      <SEO {...getSEOConfig("/help")} />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Centrum pomocy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania i dowiedz się, jak najlepiej wykorzystać naszą platformę.
          </p>
        </div>

        {/* Help sections grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <GlassCard 
                key={section.title} 
                className="group hover:shadow-xl transition-all duration-300"
                padding="lg"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {section.articles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/help/${article.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors group/article"
                    >
                      <span className="text-sm font-medium group-hover/article:text-primary transition-colors">
                        {article.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover/article:text-primary group-hover/article:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Quick contact section */}
        <div className="mt-16 text-center">
          <GlassCard className="max-w-2xl mx-auto" padding="xl">
            <h2 className="text-2xl font-bold mb-4">Nie znalazłeś odpowiedzi?</h2>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z naszym zespołem wsparcia, a my pomożemy Ci rozwiązać problem.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Skontaktuj się z nami
            </Link>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}