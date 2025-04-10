
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen, FileText, Tag } from 'lucide-react';

// Sample resources data (would typically come from a CMS or API)
const resourcesData = [
  {
    id: 'mental-models-for-tech-leaders',
    title: 'Mental Models for Technical Leaders',
    excerpt: 'A framework for making better decisions in complex technical environments.',
    category: 'Leadership',
    date: 'April 2, 2025',
    readTime: '8 min read',
    image: ''
  },
  {
    id: 'focus-in-distracted-world',
    title: 'Cultivating Deep Focus in a World of Distractions',
    excerpt: 'Practical techniques for achieving flow state and maximizing cognitive output.',
    category: 'Productivity',
    date: 'March 15, 2025',
    readTime: '12 min read',
    image: ''
  },
  {
    id: 'ai-augmented-productivity',
    title: 'AI-Augmented Productivity Systems',
    excerpt: 'How to leverage AI tools to enhance rather than replace your cognitive capabilities.',
    category: 'Technology',
    date: 'March 1, 2025',
    readTime: '10 min read',
    image: ''
  },
  {
    id: 'decision-making-framework',
    title: 'A Decision-Making Framework for Uncertainty',
    excerpt: 'A systematic approach to making better decisions when information is incomplete.',
    category: 'Decision Making',
    date: 'February 20, 2025',
    readTime: '15 min read',
    image: ''
  },
  {
    id: 'energy-management-high-performers',
    title: 'Energy Management for High Performers',
    excerpt: 'Why managing energy is more important than managing time for sustained excellence.',
    category: 'Performance',
    date: 'February 5, 2025',
    readTime: '9 min read',
    image: ''
  },
  {
    id: 'information-overload-strategies',
    title: 'Strategies for Managing Information Overload',
    excerpt: 'Practical techniques for filtering, processing, and retaining essential information.',
    category: 'Productivity',
    date: 'January 22, 2025',
    readTime: '11 min read',
    image: ''
  }
];

// Categories for filtering
const categories = ['All', 'Productivity', 'Leadership', 'Technology', 'Decision Making', 'Performance'];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredResources = selectedCategory === 'All'
    ? resourcesData
    : resourcesData.filter(resource => resource.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Practical strategies and frameworks for enhancing your capabilities in our complex world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Content */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12 overflow-x-auto">
              <div className="inline-flex space-x-2 pb-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-neural-violet dark:bg-luminal-magenta text-white'
                        : 'bg-secondary/50 dark:bg-quantum-blue/30 text-deep-charcoal dark:text-silver-mist hover:bg-secondary dark:hover:bg-quantum-blue/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.map(resource => (
                <Link 
                  key={resource.id} 
                  to={`/resources/${resource.id}`}
                  className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Resource Image */}
                  <div className="h-48 bg-gradient-to-br from-neural-violet to-ascension-pink"></div>
                  
                  {/* Resource Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-sm text-neural-violet dark:text-luminal-magenta font-medium">
                        {resource.category}
                      </span>
                      
                      <span className="mx-2 text-subtle-slate dark:text-silver-mist/50">•</span>
                      
                      <Calendar className="h-4 w-4 mr-2 text-subtle-slate dark:text-silver-mist/70" />
                      <span className="text-sm text-subtle-slate dark:text-silver-mist/70">
                        {resource.date}
                      </span>
                      
                      <span className="mx-2 text-subtle-slate dark:text-silver-mist/50">•</span>
                      
                      <BookOpen className="h-4 w-4 mr-2 text-subtle-slate dark:text-silver-mist/70" />
                      <span className="text-sm text-subtle-slate dark:text-silver-mist/70">
                        {resource.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                      {resource.title}
                    </h2>
                    
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                      {resource.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium group">
                      Read More
                      <ArrowRight size={18} className="ml-2 group-hover:ml-3 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-neural-violet dark:text-luminal-magenta" />
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              Get Resources Delivered to Your Inbox
            </h2>
            
            <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
              Join the newsletter to receive new insights, frameworks, and resources directly to your email.
            </p>
            
            <Link to="/newsletter">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
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
