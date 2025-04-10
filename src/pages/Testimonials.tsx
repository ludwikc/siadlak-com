
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Ludwik transformed how I approach technology in my business. Instead of feeling overwhelmed, I now use these tools to amplify my unique human capabilities.",
    name: "Tomasz K.",
    title: "Senior Developer & Team Lead",
    company: "TechVision",
    program: "Mental Elevator",
    featured: true,
    image: ""
  },
  {
    quote: "The Mental Elevator program gave me frameworks that completely changed my approach to leadership. I'm now more effective while working fewer hours.",
    name: "Maja W.",
    title: "Marketing Director",
    company: "Creative Solutions",
    program: "Mental Elevator",
    featured: false,
    image: ""
  },
  {
    quote: "Ludwik has a rare ability to translate complex concepts into actionable strategies. His guidance helped me reclaim my agency in both my professional and personal life.",
    name: "Piotr S.",
    title: "Startup Founder",
    company: "InnoTech",
    program: "Hakowanie Produktywności",
    featured: true,
    image: ""
  },
  {
    quote: "After 15 years as a developer, I struggled with the transition to leadership. This program gave me the frameworks I needed to lead effectively while staying connected to the technical aspects I love.",
    name: "Kasia L.",
    title: "CTO",
    company: "DevForward",
    program: "Tech Leadership Mastery",
    featured: false,
    image: ""
  },
  {
    quote: "I've tried dozens of productivity systems, but none stuck until this program. The difference is how Ludwik tailors everything to your individual cognitive style.",
    name: "Jan B.",
    title: "Marketing Director",
    company: "Global Media",
    program: "Hakowanie Produktywności",
    featured: false,
    image: ""
  },
  {
    quote: "The ROI on this program was immediate. Within weeks, my team's velocity improved and conflicts that had been brewing for months were effectively resolved.",
    name: "Maria J.",
    title: "Engineering Manager",
    company: "TechSolutions",
    program: "Tech Leadership Mastery",
    featured: true,
    image: ""
  }
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              See how others have transformed their capabilities and reclaimed their agency.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonials */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
            Featured Experiences
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials
              .filter(t => t.featured)
              .map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-xl border-2 border-ascension-pink dark:border-luminal-magenta relative"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-neural-violet/20 dark:text-luminal-magenta/20" />
                  </div>
                  
                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink mr-4"></div>
                    <div>
                      <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-subtle-slate dark:text-silver-mist/70">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-sm text-neural-violet dark:text-luminal-magenta">
                        {testimonial.program} Program
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* All Testimonials */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
            More Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials
              .filter(t => !t.featured)
              .map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl relative"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-neural-violet/20 dark:text-luminal-magenta/20" />
                  </div>
                  
                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink mr-3"></div>
                    <div>
                      <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-subtle-slate dark:text-silver-mist/70">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-xs text-neural-violet dark:text-luminal-magenta">
                        {testimonial.program} Program
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Programs Showcase */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Experience Results Like These
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Explore my signature programs designed to enhance your capabilities and transform your relationship with technology.
            </p>
            
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  Mental Elevator
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                  A premium 8-week mentoring program to elevate your mental performance and leadership capabilities.
                </p>
                <div className="flex items-center text-neural-violet dark:text-luminal-magenta">
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  Hakowanie Produktywności
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                  Master advanced productivity systems that leverage your unique cognitive strengths.
                </p>
                <div className="flex items-center text-neural-violet dark:text-luminal-magenta">
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <Link to="/courses">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Ready to Write Your Own Success Story?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Take the first step toward transforming your capabilities and reclaiming your agency.
            </p>
            
            <Link to="/contact">
              <Button className="bg-white text-neural-violet hover:bg-white/90">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
