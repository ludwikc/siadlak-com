
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
      navigate('/thank-you/contact');
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              I value straight talk and respond personally to messages. Whether you have questions about working together or thoughts about taking control of your digital life, I welcome your message.
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
                  Book a Discovery Call
                </h2>
              </div>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Schedule a 30-minute consultation to discuss how you can take back control of your digital life.
              </p>
              
              {/* Calendly embed placeholder */}
              <div className="bg-white dark:bg-quantum-blue/50 border border-border rounded-lg p-4 h-96 mb-6">
                <div className="h-full flex flex-col items-center justify-center">
                  <p className="text-center text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Calendly embed would appear here
                  </p>
                  <Button 
                    onClick={() => navigate('/thank-you/discovery-call')}
                    className="bg-neural-violet hover:bg-ascension-pink"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-subtle-slate dark:text-silver-mist/80">
                <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  All calls are conducted via Zoom. You'll receive connection details after booking.
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
                  Send a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Name
                  </label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Subject (optional)
                  </label>
                  <Input 
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-charcoal dark:text-silver-mist mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you?"
                    required
                    className="w-full h-32"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-ascension-pink hover:bg-luminal-magenta"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                <p className="text-center text-sm text-subtle-slate dark:text-silver-mist/70">
                  I respond within 24-48 hours on business days.
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
              Prefer another way to reach me?
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
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
