
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Download, BookOpen, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Resources = () => {
  const { language } = useLanguage();
  
  // Translation content
  const content = {
    en: {
      title: "Free Resources",
      intro: "These tools and articles help you start taking control of your digital life right away. Each resource offers practical steps you can implement immediately.",
      resources: [
        {
          title: "The Digital Command Checklist",
          description: "A straightforward assessment to identify where technology is controlling you rather than serving you, with clear action steps for each area.",
          icon: <FileText className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Download Now",
          link: "/resources/digital-command-checklist",
        },
        {
          title: "5 Minutes to Focus",
          description: "A simple system to regain mental clarity when digital overwhelm strikes, usable anytime you feel technology pulling you in too many directions.",
          icon: <BookOpen className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Get The Guide",
          link: "/resources/5-minutes-to-focus",
        },
        {
          title: "AI Command Scripts",
          description: "Ready-to-use templates that help you get exactly what you need from AI tools instead of wasting time with trial and error.",
          icon: <Code className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Access Scripts",
          link: "/resources/ai-command-scripts",
        }
      ],
      blogPosts: [
        {
          title: "How to Make ChatGPT Work For You, Not Against You",
          excerpt: "Most people use AI tools ineffectively, turning themselves into servants rather than masters. Here's how to flip the script...",
          image: "",
          slug: "make-chatgpt-work-for-you",
          date: "2025-03-15"
        },
        {
          title: "Digital Boundaries That Actually Work",
          excerpt: "Setting boundaries with technology isn't about using it less—it's about using it on your terms. These three approaches make the difference...",
          image: "",
          slug: "digital-boundaries-that-work",
          date: "2025-02-28"
        },
        {
          title: "The Myth of Multitasking and What Works Instead",
          excerpt: "Your brain wasn't designed for constant switching. Here's how to structure your digital work for maximum focus and minimum stress...",
          image: "",
          slug: "myth-of-multitasking",
          date: "2025-02-10"
        }
      ],
      insights: "Latest Insights",
      readMore: "Read More",
      viewAll: "View All Resources",
      ctaTitle: "Want Regular Insights Delivered to You?",
      ctaText: "Join my newsletter for weekly strategies on commanding your digital life.",
      ctaButton: "Join the Newsletter"
    },
    pl: {
      title: "Zasoby",
      intro: "Te narzędzia i artykuły pomogą Ci natychmiast rozpocząć przejmowanie kontroli nad Twoim cyfrowym życiem. Każdy zasób oferuje praktyczne kroki, które możesz wdrożyć od razu.",
      resources: [
        {
          title: "Lista Kontrolna Cyfrowego Dowodzenia",
          description: "Prosta ocena pomagająca zidentyfikować, gdzie technologia kontroluje Ciebie zamiast Ci służyć, wraz z konkretnymi krokami dla każdego obszaru.",
          icon: <FileText className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Pobierz teraz",
          link: "/pl/resources/lista-kontrolna-cyfrowego-dowodzenia",
        },
        {
          title: "5 Minut do Koncentracji",
          description: "Prosty system odzyskiwania mentalnej jasności, gdy dopada Cię cyfrowe przytłoczenie. Możesz go użyć zawsze, gdy czujesz, że technologia ciągnie Cię w zbyt wielu kierunkach.",
          icon: <BookOpen className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Pobierz poradnik",
          link: "/pl/resources/5-minut-do-koncentracji",
        },
        {
          title: "Skrypty Dowodzenia AI",
          description: "Gotowe do użycia szablony, które pomogą Ci uzyskać dokładnie to, czego potrzebujesz od narzędzi AI, zamiast tracić czas na metodę prób i błędów.",
          icon: <Code className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
          cta: "Pobierz skrypty",
          link: "/pl/resources/skrypty-dowodzenia-ai",
        }
      ],
      blogPosts: [
        {
          title: "Jak sprawić, by ChatGPT pracował dla Ciebie, a nie przeciwko Tobie",
          excerpt: "Większość osób używa narzędzi AI nieefektywnie, zamieniając się w sługi zamiast panów. Oto jak odwrócić ten scenariusz...",
          image: "",
          slug: "jak-sprawic-by-chatgpt-pracowal-dla-ciebie",
          date: "2025-03-15"
        },
        {
          title: "Cyfrowe granice, które naprawdę działają",
          excerpt: "Wyznaczanie granic z technologią nie polega na używaniu jej mniej – chodzi o używanie jej na Twoich warunkach. Te trzy podejścia robią różnicę...",
          image: "",
          slug: "cyfrowe-granice-ktore-naprawde-dzialaja",
          date: "2025-02-28"
        },
        {
          title: "Mit wielozadaniowości i co działa zamiast tego",
          excerpt: "Twój mózg nie został zaprojektowany do ciągłego przełączania się. Oto jak uporządkować cyfrową pracę dla maksymalnej koncentracji i minimalnego stresu...",
          image: "",
          slug: "mit-wielozadaniowosci",
          date: "2025-02-10"
        }
      ],
      insights: "Najnowsze artykuły",
      readMore: "Czytaj więcej",
      viewAll: "Zobacz wszystkie zasoby",
      ctaTitle: "Chcesz otrzymywać regularne inspiracje?",
      ctaText: "Dołącz do mojego newslettera, aby otrzymywać cotygodniowe strategie dowodzenia swoim cyfrowym życiem.",
      ctaButton: "Zapisz się do newslettera"
    }
  };
  
  // Select the appropriate language content
  const txt = language === 'en' ? content.en : content.pl;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {txt.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {txt.intro}
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {txt.resources.map((resource, index) => (
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
      
      {/* Blog Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              {txt.insights}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {txt.blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl overflow-hidden flex flex-col h-full"
                >
                  {/* Blog post thumbnail */}
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
                      to={language === 'en' ? `/resources/${post.slug}` : `/pl/resources/blog/${post.slug}`}
                      className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium hover:underline"
                    >
                      {txt.readMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                {txt.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {txt.ctaTitle}
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              {txt.ctaText}
            </p>
            
            <Link to={language === 'en' ? '/newsletter' : '/pl/newsletter'}>
              <Button className="bg-white text-neural-violet hover:bg-white/90">
                {txt.ctaButton}
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
