
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen, Code } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Ludwik
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Mentor, coach, and guide at the intersection of human potential and technological advancement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                My Journey
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  With over 15 years of experience spanning technology, psychology, and 
                  leadership development, I've dedicated my career to understanding the 
                  complex relationship between human capabilities and technological systems.
                </p>
                
                <p>
                  After working with Fortune 500 companies and building several tech startups,
                  I recognized a growing need: professionals who could thrive in increasingly 
                  complex and tech-dominated environments without sacrificing their humanity.
                </p>
                
                <p>
                  Today, my work focuses on helping high-performing individuals and teams 
                  develop systems that amplify their effectiveness, while ensuring technology 
                  remains a tool for human flourishing rather than a source of overwhelm.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-neural-violet hover:bg-ascension-pink text-silver-mist">
                    Schedule a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for profile image */}
                <div className="bg-gradient-to-br from-neural-violet to-ascension-pink h-full w-full flex items-center justify-center">
                  <span className="text-white text-xl font-medium">Ludwik Siadlak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Areas of Expertise
            </h2>
            <p className="text-lg text-subtle-slate dark:text-silver-mist/80">
              My work spans multiple disciplines to create a comprehensive approach to personal and professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expertise Card 1 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                <Code className="text-neural-violet dark:text-luminal-magenta" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                Technology Integration
              </h3>
              <p className="text-subtle-slate dark:text-silver-mist/80">
                Strategies for effectively integrating technology systems into human workflows and decision processes.
              </p>
            </div>
            
            {/* Expertise Card 2 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mb-4">
                <Users className="text-ascension-pink dark:text-luminal-magenta" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                Leadership Development
              </h3>
              <p className="text-subtle-slate dark:text-silver-mist/80">
                Building resilient, adaptive leadership capabilities for complex environments and challenging times.
              </p>
            </div>
            
            {/* Expertise Card 3 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-neural-violet dark:text-luminal-magenta" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                Cognitive Enhancement
              </h3>
              <p className="text-subtle-slate dark:text-silver-mist/80">
                Evidence-based methods for improving decision-making, focus, and mental performance.
              </p>
            </div>
            
            {/* Expertise Card 4 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mb-4">
                <Award className="text-ascension-pink dark:text-luminal-magenta" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                Productivity Systems
              </h3>
              <p className="text-subtle-slate dark:text-silver-mist/80">
                Custom-designed systems that enhance output while protecting autonomy and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Work Together?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Whether you're looking to enhance your personal capabilities or transform your organization,
              I'm here to help you navigate the intersection of technology and human potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Explore Programs
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
