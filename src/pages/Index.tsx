
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CoursePreview from '../components/sections/CoursePreview';
import Newsletter from '../components/sections/Newsletter';
import CTASection from '../components/sections/CTASection';
import { Brain, Rocket, Cog, Dumbbell, Lightbulb, Heart } from 'lucide-react';

const Index = () => {
  // Sample data for features
  const features = [
    {
      title: 'Productivity Enhancement',
      description: 'Develop systems that amplify your effectiveness without sacrificing your humanity.',
      icon: <Rocket size={32} />,
    },
    {
      title: 'Technical Mastery',
      description: 'Transform your relationship with technology from overwhelming to empowering.',
      icon: <Cog size={32} />,
    },
    {
      title: 'Mental Performance',
      description: 'Optimize your cognitive capabilities through proven neuroscience-backed methods.',
      icon: <Brain size={32} />,
    },
    {
      title: 'Leadership Development',
      description: 'Build the mental models and skills to lead effectively in complex environments.',
      icon: <Dumbbell size={32} />,
    },
    {
      title: 'Strategic Thinking',
      description: 'Develop clarity and foresight for making high-impact decisions.',
      icon: <Lightbulb size={32} />,
    },
    {
      title: 'Holistic Wellbeing',
      description: 'Balance technological integration with human connection and fulfillment.',
      icon: <Heart size={32} />,
    },
  ];
  
  // Sample data for testimonials
  const testimonials = [
    {
      quote: "Working with Ludwik transformed how I approach technology in my business. Instead of feeling overwhelmed, I now use these tools to amplify my unique human capabilities.",
      name: "Tomasz K.",
      title: "Senior Developer & Team Lead",
    },
    {
      quote: "The Mental Elevator program gave me frameworks that completely changed my approach to leadership. I'm now more effective while working fewer hours.",
      name: "Maja W.",
      title: "Marketing Director",
    },
    {
      quote: "Ludwik has a rare ability to translate complex concepts into actionable strategies. His guidance helped me reclaim my agency in both my professional and personal life.",
      name: "Piotr S.",
      title: "Startup Founder",
    },
  ];
  
  // Sample data for courses
  const courses = [
    {
      title: "Mental Elevator",
      description: "A premium 8-week mentoring program to elevate your mental performance and leadership capabilities.",
      link: "/courses/mental-elevator",
      featured: true,
    },
    {
      title: "Hakowanie Produktywności",
      description: "Master advanced productivity systems that leverage your unique cognitive strengths.",
      link: "/courses/hakowanie-produktywnosci",
    },
  ];

  return (
    <Layout>
      <Hero 
        title="Where AI Meets Human Potential"
        subtitle="Reclaim your agency in a technology-driven world through personalized coaching at the intersection of human development and technological advancement."
        ctaText="Book a Discovery Call"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />
      
      <AboutSection />
      
      <FeatureGrid 
        title="Transform Your Capabilities"
        subtitle="Comprehensive programs designed to enhance performance across multiple dimensions"
        features={features}
      />
      
      <TestimonialCarousel testimonials={testimonials} />
      
      <CoursePreview 
        title="Featured Programs"
        subtitle="Structured pathways to elevate your performance and potential"
        courses={courses}
      />
      
      <Newsletter />
      
      <CTASection 
        title="Ready to Reclaim Your Agency?"
        description="Book a discovery call to explore how we can work together to enhance your capabilities."
        buttonText="Schedule Now"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
