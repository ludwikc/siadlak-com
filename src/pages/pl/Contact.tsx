
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PolishContact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      navigate('/pl/thank-you/contact');
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Cenię prostą komunikację i odpowiadam osobiście na wiadomości. Niezależnie od tego, czy masz pytania dotyczące współpracy, czy przemyślenia na temat odzyskania kontroli nad cyfrowym życiem, chętnie poznam Twoją wiadomość.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Options Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly Section */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Umów rozmowę
                </h2>
              </div>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Zarezerwuj 30-minutową konsultację, aby omówić, jak możesz odzyskać kontrolę nad swoim cyfrowym życiem.
              </p>
              
              {/* Calendly embed placeholder */}
              <div className="bg-white dark:bg-quantum-blue/50 border border-border rounded-lg p-4 h-96 mb-6">
                <div className="h-full flex flex-col items-center justify-center">
                  <p className="text-center text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Tutaj pojawi się kalendarz Calendly
                  </p>
                  <Button 
                    onClick={() => navigate('/pl/thank-you/discovery-call')}
                    className="bg-neural-violet hover:bg-ascension-pink"
                  >
                    Zarezerwuj rozmowę
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-subtle-slate dark:text-silver-mist/80">
                <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  Wszystkie rozmowy odbywają się przez Zoom. Otrzymasz szczegóły połączenia po dokonaniu rezerwacji.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-ascension-pink dark:text-luminal-magenta" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Wyślij wiadomość
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Imię i nazwisko *
                  </label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Twoje imię i nazwisko"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Email *
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj.email@przyklad.pl"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Temat (opcjonalnie)
                  </label>
                  <Input 
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Czego dotyczy wiadomość?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Wiadomość *
                  </label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="W czym mogę Ci pomóc?"
                    required
                    className="w-full h-32"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-ascension-pink hover:bg-luminal-magenta"
                  disabled={submitting}
                >
                  {submitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </Button>
                
                <p className="text-center text-sm text-subtle-slate dark:text-silver-mist/70">
                  Odpowiadam w ciągu 24-48 godzin w dni robocze.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alternative Contact Section */}
      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              Wolisz inny sposób kontaktu?
            </h3>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <a 
                href="mailto:contact@ludwiksiadlak.com" 
                className="flex items-center justify-center text-subtle-slate dark:text-silver-mist/80 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@ludwiksiadlak.com
              </a>
              
              <a 
                href="https://linkedin.com/in/ludwiksiadlak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center text-subtle-slate dark:text-silver-mist/80 hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Połącz się na LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishContact;
