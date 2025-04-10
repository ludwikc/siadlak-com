
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, Tag, ArrowRight } from 'lucide-react';

// Sample resources data (would typically come from a CMS or API)
const articlesData = {
  'mental-models-for-tech-leaders': {
    title: 'Mental Models for Technical Leaders',
    excerpt: 'A framework for making better decisions in complex technical environments.',
    category: 'Leadership',
    date: 'April 2, 2025',
    readTime: '8 min read',
    image: '',
    content: `
      <h2>Introduction</h2>
      <p>Leadership in technical domains presents unique challenges. Technical leaders must balance deep domain expertise with broader business understanding, manage teams of specialists, and make decisions in rapidly changing environments.</p>
      
      <p>In this article, I'll share a set of mental models that have proven valuable for technical leaders navigating this complex landscape.</p>
      
      <h2>The Map is Not the Territory</h2>
      <p>This mental model reminds us that our understanding of reality (the map) is not reality itself (the territory). Technical leaders often work with abstractions, models, and representations that simplify reality. While these are valuable, remembering their limitations is crucial.</p>
      
      <p>Application: When evaluating system architectures or technical approaches, acknowledge that your models have blind spots. Seek diverse perspectives and real-world testing to identify where your mental map diverges from the territory.</p>
      
      <h2>Second-Order Thinking</h2>
      <p>First-order thinking considers only the immediate consequences of a decision. Second-order thinking examines the subsequent effects and ripple impacts.</p>
      
      <p>Application: When making technical decisions, don't stop at "What happens if we implement this feature?" Ask, "What happens after that? How might this decision constrain or enable future choices? What behaviors might this incentivize in our team or users?"</p>
      
      <h2>Inversion</h2>
      <p>Instead of asking how to solve a problem, inversion asks how to avoid making it worse.</p>
      
      <p>Application: Rather than only asking "How do we build a reliable system?", also ask "What would make our system unreliable?" This often reveals overlooked vulnerabilities and design flaws.</p>
      
      <h2>Conclusion</h2>
      <p>These mental models provide frameworks for thinking that can enhance decision-making in complex technical environments. By incorporating them into your leadership approach, you can navigate uncertainty with greater clarity and foresight.</p>
    `
  },
  'focus-in-distracted-world': {
    title: 'Cultivating Deep Focus in a World of Distractions',
    excerpt: 'Practical techniques for achieving flow state and maximizing cognitive output.',
    category: 'Productivity',
    date: 'March 15, 2025',
    readTime: '12 min read',
    image: '',
    content: `
      <h2>The Attention Crisis</h2>
      <p>In our hyperconnected world, the ability to focus deeply has become increasingly rare and increasingly valuable. The average knowledge worker is interrupted every 3 minutes, and it takes 23 minutes to return to deep focus after each interruption.</p>
      
      <p>This article presents evidence-based strategies for cultivating the ability to focus deeply in a world designed to distract you.</p>
      
      <h2>Understanding the Focus-Distraction Spectrum</h2>
      <p>Focus isn't binary but exists on a spectrum. At one end is scattered attention, and at the other is flow state—a condition of complete absorption where performance peaks and time seems to disappear.</p>
      
      <p>The key insight is that deep focus is a skill that can be developed through deliberate practice and systems design.</p>
      
      <h2>The Focus Protocol</h2>
      <h3>1. Environment Design</h3>
      <p>Create dedicated spaces for deep work by removing potential distractions. This includes:</p>
      <ul>
        <li>Silencing notifications</li>
        <li>Using website blockers during focus sessions</li>
        <li>Creating visual cues that signal "focus mode" to others</li>
      </ul>
      
      <h3>2. Time Blocking</h3>
      <p>Schedule specific blocks for deep focus work, ideally 90-120 minutes. Protect these blocks as you would any important meeting.</p>
      
      <h3>3. Focus Transitions</h3>
      <p>Develop rituals that help your mind transition into deep focus:</p>
      <ul>
        <li>A specific playlist or sound environment</li>
        <li>A brief meditation or breathing exercise</li>
        <li>A physical cue like lighting a candle or putting on specific headphones</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Deep focus is the superpower of the 21st century. By designing your environment, managing your time, and training your attention, you can cultivate this ability and achieve remarkable cognitive output in a distracted world.</p>
    `
  },
  'ai-augmented-productivity': {
    title: 'AI-Augmented Productivity Systems',
    excerpt: 'How to leverage AI tools to enhance rather than replace your cognitive capabilities.',
    category: 'Technology',
    date: 'March 1, 2025',
    readTime: '10 min read',
    image: '',
    content: `
      <h2>The AI Augmentation Paradigm</h2>
      <p>Artificial Intelligence is often framed as either a miraculous solution to all problems or an existential threat. Both perspectives miss the most immediate opportunity: using AI as a cognitive extension that amplifies distinctly human capabilities.</p>
      
      <p>This article explores how to build AI-augmented productivity systems that enhance your effectiveness without surrendering your agency.</p>
      
      <h2>The Complementarity Principle</h2>
      <p>Effective AI augmentation begins with understanding the complementary strengths of human and artificial intelligence:</p>
      <ul>
        <li><strong>AI Strengths:</strong> Pattern recognition in large datasets, rapid information retrieval, tireless execution of defined processes</li>
        <li><strong>Human Strengths:</strong> Contextual understanding, ethical judgment, creative leaps, interpersonal connection</li>
      </ul>
      
      <p>The goal is to design systems where AI handles what it does best, freeing your human capabilities for what they do best.</p>
      
      <h2>Building Your AI-Augmented System</h2>
      <h3>1. Information Processing</h3>
      <p>Use AI to summarize, categorize, and extract key insights from information streams, but maintain human oversight of the synthesis and meaning-making.</p>
      
      <h3>2. Idea Development</h3>
      <p>Leverage AI as a thought partner by using it to:</p>
      <ul>
        <li>Generate alternative perspectives</li>
        <li>Identify potential blind spots in your thinking</li>
        <li>Expand initial ideas into fuller concepts</li>
      </ul>
      
      <h3>3. Implementation Acceleration</h3>
      <p>Offload routine aspects of execution to AI while focusing your attention on high-judgment elements:</p>
      <ul>
        <li>Use AI for initial drafts, templates, and formatting</li>
        <li>Apply your human judgment to refine, personalize, and elevate the output</li>
      </ul>
      
      <h2>The Agency Imperative</h2>
      <p>The most important principle in AI-augmented productivity is maintaining your agency. This means:</p>
      <ul>
        <li>Understanding your tools rather than being mystified by them</li>
        <li>Developing clear delegation protocols that keep you in the driver's seat</li>
        <li>Regularly auditing and refining your AI usage to ensure it's serving your goals</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI-augmented productivity represents a significant opportunity for those willing to approach these tools thoughtfully. By creating systems that leverage the complementary strengths of human and artificial intelligence, you can achieve remarkable results while maintaining your uniquely human contribution.</p>
    `
  },
  'decision-making-framework': {
    title: 'A Decision-Making Framework for Uncertainty',
    excerpt: 'A systematic approach to making better decisions when information is incomplete.',
    category: 'Decision Making',
    date: 'February 20, 2025',
    readTime: '15 min read',
    image: '',
    content: `
      <h2>The Reality of Uncertainty</h2>
      <p>We make our most consequential decisions under conditions of uncertainty. Whether in business, career, or personal life, we rarely have complete information yet must still choose a path forward.</p>
      
      <p>This article presents a decision-making framework specifically designed for navigating uncertainty with greater confidence and clarity.</p>
      
      <h2>The VISTA Decision Framework</h2>
      <p>VISTA stands for Values, Information, Scenarios, Tradeoffs, and Adaptation. Each component addresses a critical aspect of decision-making under uncertainty.</p>
      
      <h3>V - Values Clarification</h3>
      <p>Begin by clarifying what matters most in this specific decision context:</p>
      <ul>
        <li>What core values should guide this decision?</li>
        <li>What are your non-negotiables vs. areas of flexibility?</li>
        <li>What does success look like beyond the immediate outcome?</li>
      </ul>
      
      <h3>I - Information Assessment</h3>
      <p>Evaluate what you know and don't know:</p>
      <ul>
        <li>Separate facts from assumptions and clearly label each</li>
        <li>Identify the most critical knowledge gaps</li>
        <li>Determine which gaps can be narrowed before deciding and which must be accepted as unknowable</li>
      </ul>
      
      <h3>S - Scenario Development</h3>
      <p>Create multiple plausible futures to explore possibilities:</p>
      <ul>
        <li>Develop at least three scenarios (best case, worst case, and unexpected)</li>
        <li>For each option you're considering, trace its likely outcomes in each scenario</li>
        <li>Look for options that perform acceptably across all scenarios</li>
      </ul>
      
      <h3>T - Tradeoff Analysis</h3>
      <p>Make implicit tradeoffs explicit:</p>
      <ul>
        <li>Identify the key tradeoffs inherent in each option</li>
        <li>Consider both short-term vs. long-term and certain vs. potential impacts</li>
        <li>Assign relative weights based on your values clarification</li>
      </ul>
      
      <h3>A - Adaptation Planning</h3>
      <p>Prepare to adjust as new information emerges:</p>
      <ul>
        <li>Define clear triggers that would prompt reconsideration</li>
        <li>Create contingency plans for the most concerning scenarios</li>
        <li>Establish a schedule for reviewing the decision and its outcomes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The VISTA framework doesn't eliminate uncertainty, but it provides a structured approach to making decisions despite it. By clarifying values, assessing information, developing scenarios, analyzing tradeoffs, and planning for adaptation, you can navigate uncertain terrain with greater confidence and resilience.</p>
    `
  },
  'energy-management-high-performers': {
    title: 'Energy Management for High Performers',
    excerpt: 'Why managing energy is more important than managing time for sustained excellence.',
    category: 'Performance',
    date: 'February 5, 2025',
    readTime: '9 min read',
    image: '',
    content: `
      <h2>Beyond Time Management</h2>
      <p>Traditional productivity advice focuses on managing time. However, high performers understand that time is fixed while energy is variable and renewable. This article explores why energy management is the true key to sustained high performance.</p>
      
      <h2>The Four Energy Dimensions</h2>
      <p>Holistic energy management addresses four interconnected dimensions:</p>
      
      <h3>1. Physical Energy</h3>
      <p>The foundation of all other energy types, physical energy depends on:</p>
      <ul>
        <li>Sleep quality and quantity</li>
        <li>Nutrition and hydration</li>
        <li>Movement and recovery</li>
      </ul>
      
      <p>High performers design precise protocols for each of these elements, treating them not as lifestyle choices but as performance requirements.</p>
      
      <h3>2. Mental Energy</h3>
      <p>Mental energy governs focus, attention, and cognitive processing power:</p>
      <ul>
        <li>Cognitive load management</li>
        <li>Attention restoration practices</li>
        <li>Mental state transitions</li>
      </ul>
      
      <h3>3. Emotional Energy</h3>
      <p>Emotional energy affects resilience and engagement:</p>
      <ul>
        <li>Emotional regulation techniques</li>
        <li>Positive-to-negative interaction ratios</li>
        <li>Recovery from emotional expenditure</li>
      </ul>
      
      <h3>4. Purpose Energy</h3>
      <p>Purpose energy connects daily actions to deeper meaning:</p>
      <ul>
        <li>Alignment between activities and values</li>
        <li>Meaning-making practices</li>
        <li>Connection to longer-term impact</li>
      </ul>
      
      <h2>The Energy Audit and Management System</h2>
      <p>High performers implement a systematic approach to energy management:</p>
      
      <h3>Step 1: Energy Mapping</h3>
      <p>Track your energy levels across all four dimensions throughout your typical week, noting patterns and influences.</p>
      
      <h3>Step 2: Energy Alignment</h3>
      <p>Match your most demanding activities with your natural energy peaks, and schedule recovery periods to coincide with energy valleys.</p>
      
      <h3>Step 3: Energy Enhancement</h3>
      <p>Implement targeted practices to expand your capacity in each energy dimension.</p>
      
      <h3>Step 4: Energy Recovery</h3>
      <p>Design deliberate recovery protocols for sustainable performance rather than relying on crisis-driven rest.</p>
      
      <h2>Conclusion</h2>
      <p>The highest performers aren't those who work the most hours but those who bring their fullest energy to their most important work. By shifting focus from time management to energy management, you can achieve more meaningful results while enhancing rather than depleting your well-being.</p>
    `
  },
  'information-overload-strategies': {
    title: 'Strategies for Managing Information Overload',
    excerpt: 'Practical techniques for filtering, processing, and retaining essential information.',
    category: 'Productivity',
    date: 'January 22, 2025',
    readTime: '11 min read',
    image: '',
    content: `
      <h2>The Information Paradox</h2>
      <p>We live in an age of information abundance but attention scarcity. The average knowledge worker is exposed to more information in a week than someone in the 18th century might encounter in a lifetime. This article presents a comprehensive system for managing information without becoming overwhelmed.</p>
      
      <h2>The Information Processing Framework</h2>
      
      <h3>1. Intentional Consumption</h3>
      <p>Move from passive to active information intake:</p>
      <ul>
        <li>Implement information boundaries (specific times, places, and methods for information intake)</li>
        <li>Practice "just-in-time" learning rather than "just-in-case" accumulation</li>
        <li>Develop clear criteria for what deserves your attention</li>
      </ul>
      
      <h3>2. Effective Processing</h3>
      <p>Transform raw information into usable knowledge:</p>
      <ul>
        <li>Implement progressive summarization techniques</li>
        <li>Practice concept mapping to connect new information to existing knowledge</li>
        <li>Develop personal metadata systems to enhance retrievability</li>
      </ul>
      
      <h3>3. Strategic Retention</h3>
      <p>Move beyond traditional note-taking to knowledge management:</p>
      <ul>
        <li>Build a personal knowledge management system using tools like Obsidian, Roam, or Notion</li>
        <li>Implement spaced repetition for information you need to internalize</li>
        <li>Create retrieval-friendly organization systems</li>
      </ul>
      
      <h2>Information Environments</h2>
      <p>Your physical and digital environments significantly impact your information processing capabilities:</p>
      
      <h3>Digital Environment Design</h3>
      <ul>
        <li>Create separate spaces for different information modes (consumption, processing, creation)</li>
        <li>Implement friction for low-value information sources</li>
        <li>Design your notification architecture to protect attention</li>
      </ul>
      
      <h3>Physical Environment Design</h3>
      <ul>
        <li>Establish dedicated spaces for deep information processing</li>
        <li>Use physical cues to trigger different information modes</li>
        <li>Reduce cognitive load through environmental simplification</li>
      </ul>
      
      <h2>From Information to Wisdom</h2>
      <p>The ultimate goal isn't simply to manage information but to transform it into wisdom:</p>
      <ul>
        <li>Schedule regular synthesis sessions to integrate new knowledge</li>
        <li>Practice applying information in different contexts</li>
        <li>Develop reflection rituals to extract deeper insights from experiences</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Information overload isn't inevitable. With intentional consumption, effective processing, and strategic retention systems, you can transform the information deluge from a source of stress to a foundation for insight and effectiveness.</p>
    `
  }
};

const ResourceArticle = () => {
  const { articleSlug } = useParams();
  
  // If article doesn't exist, redirect to resources page
  if (!articleSlug || !articlesData[articleSlug]) {
    return <Navigate to="/resources" />;
  }
  
  const article = articlesData[articleSlug];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/resources"
              className="inline-flex items-center text-silver-mist hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 mr-2 text-luminal-magenta" />
              <span className="text-luminal-magenta font-medium">
                {article.category}
              </span>
              
              <span className="mx-3 text-silver-mist/50">•</span>
              
              <Calendar className="h-5 w-5 mr-2 text-silver-mist/80" />
              <span className="text-silver-mist/80">
                {article.date}
              </span>
              
              <span className="mx-3 text-silver-mist/50">•</span>
              
              <BookOpen className="h-5 w-5 mr-2 text-silver-mist/80" />
              <span className="text-silver-mist/80">
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-silver-mist/90">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Author Section */}
            <div className="glass-card p-6 rounded-xl flex items-center mb-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink flex-shrink-0 mr-6"></div>
              <div>
                <h3 className="text-lg font-bold text-deep-charcoal dark:text-silver-mist">
                  Ludwik Siadlak
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-2">
                  Mentor & Coach at the Intersection of Technology and Human Potential
                </p>
                <Link 
                  to="/about"
                  className="text-neural-violet dark:text-luminal-magenta hover:underline"
                >
                  More about Ludwik
                </Link>
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Want to Dive Deeper?
              </h3>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6 max-w-lg mx-auto">
                Explore how we can work together to enhance your capabilities at the intersection of technology and human potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-neural-violet hover:bg-ascension-pink">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/courses">
                  <Button variant="outline">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourceArticle;
