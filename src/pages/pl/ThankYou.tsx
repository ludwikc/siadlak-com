
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Mail, FileText } from 'lucide-react';

// Define the different thank you types in Polish
const thankYouContent = {
  default: {
    title: 'Dziękujemy',
    message: 'Twoje zgłoszenie zostało przyjęte.',
    icon: <CheckCircle className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękujemy za kontakt. Przetworzymy Twoje zgłoszenie i wkrótce się z Tobą skontaktujemy.',
    primaryCta: {
      text: 'Powrót do strony głównej',
      link: '/pl/'
    },
    secondaryCta: {
      text: 'Przeglądaj zasoby',
      link: '/pl/resources'
    }
  },
  contact: {
    title: 'Wiadomość otrzymana',
    message: 'Dziękuję za kontakt.',
    icon: <Mail className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Otrzymałem Twoją wiadomość i odpowiem na nią w ciągu 24-48 godzin w dni robocze.',
    primaryCta: {
      text: 'Poznaj programy',
      link: '/pl/courses'
    },
    secondaryCta: {
      text: 'Powrót do strony głównej',
      link: '/pl/'
    }
  },
  newsletter: {
    title: 'Witaj w newsletterze',
    message: 'Jesteś oficjalnie zapisany!',
    icon: <FileText className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękuję za dołączenie do mojego newslettera. Spodziewaj się wkrótce potwierdzenia w swojej skrzynce odbiorczej. Zaczniesz otrzymywać inspiracje na styku technologii i ludzkiego potencjału.',
    primaryCta: {
      text: 'Przeglądaj zasoby',
      link: '/pl/resources'
    },
    secondaryCta: {
      text: 'Odkryj programy',
      link: '/pl/courses'
    }
  },
  'discovery-call': {
    title: 'Rozmowa Discovery zaplanowana',
    message: 'Twoja sesja jest potwierdzona!',
    icon: <Calendar className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Dziękuję za zarezerwowanie rozmowy Discovery. Wkrótce otrzymasz zaproszenie do kalendarza ze szczegółami połączenia. Czekam na naszą rozmowę!',
    primaryCta: {
      text: 'Poznaj programy',
      link: '/pl/courses'
    },
    secondaryCta: {
      text: 'Przeglądaj zasoby',
      link: '/pl/resources'
    }
  }
};

interface ThankYouProps {
  type?: 'default' | 'contact' | 'newsletter' | 'discovery-call';
}

const PolishThankYou = ({ type = 'default' }: ThankYouProps) => {
  const content = thankYouContent[type] || thankYouContent.default;

  return (
    <Layout>
      <section className="py-20 md:py-32 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {content.icon}
            
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

export default PolishThankYou;
