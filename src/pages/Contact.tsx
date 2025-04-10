
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
              Schedule a discovery call or send a message to explore how we can work together.
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
                Schedule a 30-minute consultation to discuss your goals and how we might work together.
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
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Have a question or inquiry? Fill out the form below and I'll get back to you soon.
              </p>
              
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
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Direct Contact Section */}
      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="flex items-center p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <div>
                  <p className="text-sm text-subtle-slate dark:text-silver-mist/80">Email</p>
                  <a href="mailto:contact@siadlak.com" className="text-deep-charcoal dark:text-silver-mist font-medium hover:text-neural-violet dark:hover:text-luminal-magenta">
                    contact@siadlak.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center p-6 glass-card rounded-lg">
                <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-ascension-pink dark:text-luminal-magenta" />
                </div>
                <div>
                  <p className="text-sm text-subtle-slate dark:text-silver-mist/80">Phone</p>
                  <a href="tel:+48123456789" className="text-deep-charcoal dark:text-silver-mist font-medium hover:text-neural-violet dark:hover:text-luminal-magenta">
                    +48 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  What happens during a discovery call?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  During our 30-minute call, we'll discuss your goals, challenges, and determine if we're a good fit to work together. There's no obligation, and I'll be happy to recommend other resources if I'm not the right person to help you.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  I typically respond to all messages within 24-48 hours during business days. For urgent matters, please indicate this in your message subject.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  Do you offer corporate training?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Yes, I work with organizations of all sizes to develop customized training programs. Please reach out directly to discuss your specific needs and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
