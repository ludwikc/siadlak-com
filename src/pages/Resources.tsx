
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Download, BookOpen, Code } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "The Digital Command Checklist",
      description: "A straightforward assessment to identify where technology is controlling you rather than serving you, with clear action steps for each area.",
      icon: <FileText className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Download Now",
      link: "/resources/digital-command-checklist",
    },
    {
      title: "5 Minutes to Focus",
      description: "A simple system to regain mental clarity when digital overwhelm strikes, usable anytime you feel technology pulling you in too many directions.",
      icon: <BookOpen className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Get The Guide",
      link: "/resources/5-minutes-to-focus",
    },
    {
      title: "AI Command Scripts",
      description: "Ready-to-use templates that help you get exactly what you need from AI tools instead of wasting time with trial and error.",
      icon: <Code className="h-12 w-12 text-neural-violet dark:text-luminal-magenta" />,
      cta: "Access Scripts",
      link: "/resources/ai-command-scripts",
    }
  ];

  const blogPosts = [
    {
      title: "How to Make ChatGPT Work For You, Not Against You",
      excerpt: "Most people use AI tools ineffectively, turning themselves into servants rather than masters. Here's how to flip the script...",
      image: "",
      slug: "make-chatgpt-work-for-you",
      date: "2025-03-15"
    },
    {
      title: "Digital Boundaries That Actually Work",
      excerpt: "Setting boundaries with technology isn't about using it less—it's about using it on your terms. These three approaches make the difference...",
      image: "",
      slug: "digital-boundaries-that-work",
      date: "2025-02-28"
    },
    {
      title: "The Myth of Multitasking and What Works Instead",
      excerpt: "Your brain wasn't designed for constant switching. Here's how to structure your digital work for maximum focus and minimum stress...",
      image: "",
      slug: "myth-of-multitasking",
      date: "2025-02-10"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free Resources
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              These tools and articles help you start taking control of your digital life right away. Each resource offers practical steps you can implement immediately.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl flex flex-col h-full"
              >
                <div className="mb-4">
                  {resource.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  {resource.title}
                </h3>
                
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-6 flex-grow">
                  {resource.description}
                </p>
                
                <Link 
                  to={resource.link}
                  className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium hover:underline"
                >
                  {resource.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Latest Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl overflow-hidden flex flex-col h-full"
                >
                  {/* Blog post thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30"></div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-neural-violet dark:text-luminal-magenta mb-2">
                      {post.date}
                    </p>
                    
                    <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      {post.title}
                    </h3>
                    
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/resources/${post.slug}`}
                      className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Want Regular Insights Delivered to You?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Join my newsletter for weekly strategies on commanding your digital life.
            </p>
            
            <Link to="/newsletter">
              <Button className="bg-white text-neural-violet hover:bg-white/90">
                Join the Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
