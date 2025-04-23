
import React from 'react';
import Layout from '@/components/layout/Layout';
import Newsletter from '@/components/sections/Newsletter';
import { ArrowRight, Mail, BookOpen, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join the Newsletter
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Insights at the intersection of technology and human potential, delivered to your inbox.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Features */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Bell className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Stay Updated
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Be the first to know about new programs, resources, and exclusive events.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="text-ascension-pink dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Practical Insights
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Receive practical strategies and frameworks you can implement immediately.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Curated Content
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Get carefully selected resources without the noise and information overload.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist text-center">
                What Subscribers Receive
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                        Weekly Insights
                      </h3>
                      <p className="text-subtle-slate dark:text-silver-mist/80">
                        Concise, actionable ideas to enhance your capabilities and perspective.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                        Resource Recommendations
                      </h3>
                      <p className="text-subtle-slate dark:text-silver-mist/80">
                        Books, articles, tools, and techniques personally vetted for effectiveness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                        Early Access
                      </h3>
                      <p className="text-subtle-slate dark:text-silver-mist/80">
                        Priority access and special rates for new programs and limited-enrollment workshops.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                        Exclusive Content
                      </h3>
                      <p className="text-subtle-slate dark:text-silver-mist/80">
                        Periodic deep dives into specific topics, frameworks, and methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                Zero Spam Promise
              </h2>
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Your inbox deserves respect. I send only valuable content, and you can unsubscribe anytime.
              </p>
              
              <div className="flex justify-center">
                <ul className="text-left inline-block space-y-2 text-subtle-slate dark:text-silver-mist/80">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                    No daily emails or overwhelming volume
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                    No sharing of your information with third parties
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                    Easy one-click unsubscribe in every email
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <Newsletter />
            
            <div className="mt-16 text-center">
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Looking for more personalized guidance?
              </p>
              
              <Link to="/contact" className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium">
                Schedule a discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
