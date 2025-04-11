
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "After 15 years in tech leadership, I was burning out from constant digital demands. Ludwik's approach completely changed how I interact with technology. I now accomplish more meaningful work in less time, and I've regained the mental space for strategic thinking.",
    name: "Marcin K.",
    title: "CTO",
    company: "Financial Technology",
    program: "Mental Elevator",
    results: "Reduced digital interruptions by 60%, improved team productivity by 35%, and launched two major initiatives that had been stalled for months.",
    featured: true,
    image: ""
  },
  {
    quote: "I was drowning in AI tools, analytics, and platforms—all supposedly making me more efficient but actually stealing my time and creativity. Working with Ludwik showed me how to make these tools truly serve my vision instead of dictating my day.",
    name: "Anna W.",
    title: "Marketing Director",
    company: "Creative Agency",
    program: "Mental Elevator",
    results: "Created a streamlined workflow that cut 12 hours of busywork weekly, doubled creative output, and improved campaign performance by 28%.",
    featured: true,
    image: ""
  },
  {
    quote: "As a solo professional, I was trapped in a cycle of constantly checking emails, messages, and updates. Ludwik's systems helped me establish command over my digital environment while actually improving my client responsiveness.",
    name: "Tomasz B.",
    title: "Independent Consultant",
    company: "Business Strategy",
    program: "Hakowanie Produktywności",
    results: "Reclaimed 2 hours daily, increased client satisfaction scores, and finally completed a long-delayed certification that increased my rates by 40%.",
    featured: true,
    image: ""
  },
  {
    quote: "The techniques Ludwik teaches aren't just productivity hacks—they're about reclaiming your agency in a world designed to capture your attention. This is about power, focus, and intentionality in digital spaces.",
    name: "Kasia L.",
    title: "CTO",
    company: "Tech Startup",
    program: "Tech Leadership Mastery",
    results: "Transformed team culture around technology use, implemented focused work blocks, and eliminated the 'always on' mentality that was burning everyone out.",
    featured: false,
    image: ""
  },
  {
    quote: "What sets Ludwik apart is his understanding of both technical systems and human psychology. Most trainers focus on one or the other—he integrates them perfectly.",
    name: "Jan B.",
    title: "Director",
    company: "Media Company",
    program: "Hakowanie Produktywności",
    results: "Established boundaries that seemed impossible before, created systems that support focused creative work, and stopped letting digital tools dictate my priorities.",
    featured: false,
    image: ""
  },
  {
    quote: "This isn't just about productivity—it's about reclaiming your life from digital colonization. Ludwik's methods helped me establish healthy boundaries without sacrificing professional effectiveness.",
    name: "Maria J.",
    title: "Engineering Manager",
    company: "Software Development",
    program: "Tech Leadership Mastery",
    results: "Cut meeting time by 50%, established sustainable communication protocols, and created space for deep work that produced our most innovative features yet.",
    featured: false,
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
              Success Stories
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              These professionals took back control of their digital lives and transformed their relationship with technology. Their stories show what's possible when you stop serving technology and start commanding it.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonials */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
            Transformation Stories
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
                  
                  <div className="flex items-center mb-4">
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
                  
                  <div className="bg-neural-violet/5 dark:bg-luminal-magenta/10 p-4 rounded-lg">
                    <p className="text-sm text-deep-charcoal dark:text-silver-mist">
                      <strong>Results:</strong> {testimonial.results}
                    </p>
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
                  
                  <div className="flex items-center mb-4">
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
                  
                  <div className="bg-neural-violet/5 dark:bg-luminal-magenta/10 p-3 rounded-lg">
                    <p className="text-xs text-deep-charcoal dark:text-silver-mist">
                      <strong>Results:</strong> {testimonial.results}
                    </p>
                  </div>
                </div>
              ))}
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
              Take the first step toward commanding your digital life.
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
