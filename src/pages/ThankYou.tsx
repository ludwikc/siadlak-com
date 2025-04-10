
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Mail, FileText } from 'lucide-react';

// Define the different thank you types
const thankYouContent = {
  default: {
    title: 'Thank You',
    message: 'Your submission has been received.',
    icon: <CheckCircle className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Thank you for reaching out. We will process your request and get back to you soon.',
    primaryCta: {
      text: 'Return to Homepage',
      link: '/'
    },
    secondaryCta: {
      text: 'Explore Resources',
      link: '/resources'
    }
  },
  contact: {
    title: 'Message Received',
    message: 'Thank you for contacting me.',
    icon: <Mail className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'I\'ve received your message and will respond to you within 24-48 hours during business days.',
    primaryCta: {
      text: 'Explore Programs',
      link: '/courses'
    },
    secondaryCta: {
      text: 'Return to Homepage',
      link: '/'
    }
  },
  newsletter: {
    title: 'Welcome to the Newsletter',
    message: 'You\'re officially subscribed!',
    icon: <FileText className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Thank you for joining my newsletter. Look for an email confirmation in your inbox shortly. You\'ll start receiving insights at the intersection of technology and human potential.',
    primaryCta: {
      text: 'Explore Resources',
      link: '/resources'
    },
    secondaryCta: {
      text: 'Discover Programs',
      link: '/courses'
    }
  },
  'discovery-call': {
    title: 'Discovery Call Scheduled',
    message: 'Your session is confirmed!',
    icon: <Calendar className="w-16 h-16 text-neural-violet dark:text-luminal-magenta mb-6" />,
    description: 'Thank you for scheduling a discovery call. You should receive a calendar invitation with connection details shortly. I look forward to our conversation!',
    primaryCta: {
      text: 'Explore Programs',
      link: '/courses'
    },
    secondaryCta: {
      text: 'Browse Resources',
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

export default ThankYou;
