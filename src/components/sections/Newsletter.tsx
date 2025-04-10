
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    
    // For now just show success state
    setSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="section bg-luminous-white dark:bg-deep-space">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full"></div>
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-ascension-pink/10 dark:bg-ascension-pink/20 rounded-full"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-deep-charcoal dark:text-silver-mist mb-4">
                Join the Newsletter
              </h2>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-8 max-w-xl mx-auto">
                Subscribe to receive insights and strategies at the intersection of technology and human potential. No spam, unsubscribe anytime.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-md border border-border bg-luminous-white dark:bg-deep-space dark:text-silver-mist focus:outline-none focus:ring-2 focus:ring-neural-violet dark:focus:ring-luminal-magenta"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <p className="text-subtle-slate/70 dark:text-silver-mist/50 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
