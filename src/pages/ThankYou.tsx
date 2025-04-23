import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Mail, FileText } from 'lucide-react';

const thankYouContent = {
  default: {
    title: 'Dziękuję',
    message: 'Twoje zgłoszenie zostało przyjęte.',
    icon: <CheckCircle className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękuję za kontakt. Przetworzę Twoje zgłoszenie i wkrótce się do Ciebie odezwę.',
    primaryCta: {
      text: 'Wróć do strony głównej',
      link: '/'
    },
    secondaryCta: {
      text: 'Zobacz materiały',
      link: '/resources'
    }
  },
  contact: {
    title: 'Wiadomość otrzymana',
    message: 'Dziękuję za kontakt.',
    icon: <Mail className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Otrzymałem Twoją wiadomość i odpowiem w ciągu 24-48 godzin w dni robocze.',
    primaryCta: {
      text: 'Zobacz programy',
      link: '/courses'
    },
    secondaryCta: {
      text: 'Wróć do strony głównej',
      link: '/'
    }
  },
  newsletter: {
    title: 'Witaj w newsletterze',
    message: 'Jesteś oficjalnie zapisany!',
    icon: <FileText className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękuję za dołączenie do mojego newslettera. Sprawdź swoją skrzynkę - znajdziesz tam potwierdzenie. Wkrótce zaczniesz otrzymywać spostrzeżenia na styku technologii i ludzkiego potencjału.',
    primaryCta: {
      text: 'Zobacz materiały',
      link: '/resources'
    },
    secondaryCta: {
      text: 'Odkryj programy',
      link: '/courses'
    }
  },
  'discovery-call': {
    title: 'Rozmowa umówiona',
    message: 'Twoja sesja jest potwierdzona!',
    icon: <Calendar className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękuję za umówienie rozmowy discovery. Wkrótce otrzymasz zaproszenie kalendarzowe ze szczegółami połączenia. Czekam na naszą rozmowę!',
    primaryCta: {
      text: 'Zobacz programy',
      link: '/courses'
    },
    secondaryCta: {
      text: 'Przejrzyj materiały',
      link: '/resources'
    }
  }
};

interface ThankYouProps {
  type?: 'default' | 'contact' | 'newsletter' | 'discovery-call';
}

const ThankYou = ({ type = 'default' }: ThankYouProps) => {
  const content = thankYouContent[type] || thankYouContent.default;

  return (
    <Layout>
      <section className="py-20 md:py-32 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center">
              {content.icon}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              {content.title}
            </h1>
            
            <p className="text-xl mb-8 text-neural-violet dark:text-luminal-magenta font-medium">
              {content.message}
            </p>
            
            <div className="glass-card p-6 md:p-8 rounded-xl mb-10">
              <p className="text-subtle-slate dark:text-silver-mist/80">
                {content.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={content.primaryCta.link}>
                <Button className="bg-neural-violet hover:bg-ascension-pink">
                  {content.primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to={content.secondaryCta.link}>
                <Button variant="outline">
                  {content.secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
