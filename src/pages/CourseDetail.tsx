

import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, Calendar, Star, BarChart } from 'lucide-react';

// Course data (would typically come from API/backend)
const coursesData = {
  "mental-elevator": {
    title: "Mental Elevator",
    subtitle: "Premium 8-Week Mentoring Program",
    description:
      "A comprehensive program designed to elevate your mental performance, decision-making capabilities, and leadership presence.",
    longDescription:
      "Mental Elevator is a transformative 8-week journey designed for professionals seeking to enhance their cognitive capabilities in our complex, technology-driven world. This isn't just another productivity course—it's a personalized system for elevating your mental performance, decision-making framework, and overall effectiveness.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Customized productivity system",
      "Mental models toolkit",
      "Lifetime access to program materials",
      "Private community access",
    ],
    curriculum: [
      {
        week: 1,
        title: "Foundations & Assessment",
        description:
          "Establish baseline capabilities and identify key enhancement areas.",
      },
      {
        week: 2,
        title: "Cognitive Framework Development",
        description: "Build your personalized mental models toolkit.",
      },
      {
        week: 3,
        title: "Information Processing Mastery",
        description: "Develop systems for managing information overload.",
      },
      {
        week: 4,
        title: "Decision-Making Protocols",
        description:
          "Create frameworks for making better decisions under uncertainty.",
      },
      {
        week: 5,
        title: "Focus & Deep Work Implementation",
        description:
          "Establish practices for sustained concentration in a distracted world.",
      },
      {
        week: 6,
        title: "Strategic Thinking Enhancement",
        description:
          "Develop long-term thinking capabilities and scenario planning.",
      },
      {
        week: 7,
        title: "Systems Integration",
        description:
          "Connect cognitive frameworks with practical workflows and tools.",
      },
      {
        week: 8,
        title: "Sustainability & Continuous Improvement",
        description:
          "Create mechanisms for ongoing enhancement and adaptation.",
      },
    ],
    outcomes: [
      "Enhanced decision-making under complexity and uncertainty",
      "Improved focus and concentration capabilities",
      "Personalized productivity system aligned with your cognitive style",
      "Strategic thinking frameworks for complex problems",
      "Reduced overwhelm and increased sense of control",
      "Practical tools for managing information overload",
    ],
    duration: "8 weeks",
    format: "Hybrid (Online + Live Sessions)",
    level: "Intermediate to Advanced",
    startDate: "Flexible Start Dates",
    price: "€2,500",
    featured: true,
    image: "",
    testimonials: [
      {
        quote:
          "The Mental Elevator program transformed how I approach complex decisions. I now have a framework that lets me stay clear-headed under pressure.",
        name: "Marta K.",
        title: "CEO & Founder",
      },
      {
        quote:
          "Worth every penny. The personalized systems Ludwik helped me develop have given me back hours each week while improving my output quality.",
        name: "Thomas W.",
        title: "Engineering Director",
      },
    ],
  },
  "hakowanie-produktywnosci": {
    title: "Hakowanie Produktywności",
    subtitle: "Productivity Mastery Program",
    description:
      "Master advanced productivity systems that leverage your unique cognitive strengths and create sustainable high performance.",
    longDescription:
      "Hakowanie Produktywności (Productivity Hacking) is a comprehensive system for professionals seeking to dramatically improve their effectiveness without burning out. This program combines cutting-edge productivity methodologies with personalized cognitive assessments to create systems that work with your unique mental strengths rather than against them.",
    features: [
      "Personalized productivity assessment",
      "Custom task management setup",
      "Focus and deep work protocols",
      "Energy management framework",
      "Technology integration blueprint",
    ],
    curriculum: [
      {
        week: 1,
        title: "Productivity Baseline & Assessment",
        description:
          "Evaluate current systems and identify cognitive strengths.",
      },
      {
        week: 2,
        title: "Task & Project Management Architecture",
        description:
          "Design personalized systems for managing work across time horizons.",
      },
      {
        week: 3,
        title: "Deep Work Implementation",
        description:
          "Create protocols for achieving flow state and maximum concentration.",
      },
      {
        week: 4,
        title: "Energy Management & Sustainability",
        description:
          "Develop frameworks for maintaining performance without burnout.",
      },
      {
        week: 5,
        title: "Technology Integration & Automation",
        description:
          "Connect digital tools to amplify rather than disrupt productivity.",
      },
      {
        week: 6,
        title: "Performance Maintenance System",
        description:
          "Establish ongoing practices for maintaining and evolving your system.",
      },
    ],
    outcomes: [
      "A complete, personalized productivity system",
      "Increased output with reduced effort",
      "Enhanced focus and concentration capabilities",
      "Better work-life balance and reduced stress",
      "Improved task and project completion rates",
      "Sustainable performance without burnout",
    ],
    duration: "6 weeks",
    format: "Online Self-Paced + Group Calls",
    level: "All Levels",
    startDate: "Enrollment opens quarterly",
    price: "€1,200",
    featured: false,
    image: "",
    testimonials: [
      {
        quote:
          "I've tried dozens of productivity systems, but none stuck until this program. The difference is how Ludwik tailors everything to your individual cognitive style.",
        name: "Jan B.",
        title: "Marketing Director",
      },
      {
        quote:
          "My output has increased by 30% while my work hours have actually decreased. The energy management framework alone was worth the investment.",
        name: "Anna S.",
        title: "Senior Project Manager",
      },
    ],
  },
  "tech-leadership": {
    title: "Tech Leadership Mastery",
    subtitle: "For Technical Leaders and Managers",
    description:
      "Develop the unique skill set required to lead technical teams effectively while navigating rapidly changing technology landscapes.",
    longDescription:
      "Tech Leadership Mastery is designed specifically for technical professionals moving into leadership roles or experienced managers looking to enhance their effectiveness with technical teams. This program bridges the gap between technical expertise and leadership capabilities, creating a comprehensive toolkit for thriving in complex technical environments.",
    features: [
      "Technical leadership framework",
      "Team communication protocols",
      "Decision-making under uncertainty",
      "Managing technical debt",
      "Strategic planning for tech teams",
    ],
    curriculum: [
      {
        week: 1,
        title: "Leadership Foundations for Technical Leaders",
        description:
          "Establish baseline leadership capabilities and identify growth areas.",
      },
      {
        week: 2,
        title: "Technical Team Dynamics",
        description:
          "Understand and optimize the unique aspects of leading technical professionals.",
      },
      {
        week: 3,
        title: "Communication Frameworks",
        description:
          "Develop protocols for effective communication across technical and non-technical stakeholders.",
      },
      {
        week: 4,
        title: "Decision-Making for Technical Leaders",
        description:
          "Create systems for making better technical decisions under uncertainty.",
      },
      {
        week: 5,
        title: "Managing Technical Debt Strategically",
        description:
          "Develop frameworks for balancing technical excellence with business needs.",
      },
      {
        week: 6,
        title: "Technical Vision & Strategy",
        description:
          "Learn to develop and communicate compelling technical vision.",
      },
      {
        week: 7,
        title: "Innovation Management",
        description:
          "Create systems for fostering innovation within technical constraints.",
      },
      {
        week: 8,
        title: "Technical Leadership Sustainability",
        description:
          "Establish practices for ongoing leadership growth and team development.",
      },
      {
        week: 9,
        title: "Cross-Functional Collaboration",
        description:
          "Master working across departments while representing technical perspectives.",
      },
      {
        week: 10,
        title: "Career Development for Technical Teams",
        description: "Learn to mentor and grow technical talent effectively.",
      },
    ],
    outcomes: [
      "Enhanced technical leadership presence and influence",
      "Improved team communication and collaboration",
      "Better technical decision-making processes",
      "Strategic approach to technical debt and system evolution",
      "Increased team engagement and reduced turnover",
      "Balanced approach to technical excellence and business needs",
    ],
    duration: "10 weeks",
    format: "Online Cohort-Based",
    level: "Advanced",
    startDate: "Next cohort: September 2025",
    price: "€3,500",
    featured: false,
    image: "",
    testimonials: [
      {
        quote:
          "After 15 years as a developer, I struggled with the transition to leadership. This program gave me the frameworks I needed to lead effectively while staying connected to the technical aspects I love.",
        name: "Piotr K.",
        title: "CTO & Co-founder",
      },
      {
        quote:
          "The ROI on this program was immediate. Within weeks, my team's velocity improved and conflicts that had been brewing for months were effectively resolved.",
        name: "Maria J.",
        title: "Engineering Manager",
      },
    ],
  },
  "7-technik": {
    title: "7 Technik",
    subtitle: "Master 7 Essential Techniques for Peak Performance",
    description:
      "Learn the 7 fundamental techniques that separate high performers from the rest. A comprehensive system for optimizing your cognitive and physical capabilities.",
    longDescription:
      "7 Technik is a concentrated program that distills years of research and practical application into seven essential techniques that form the foundation of peak performance. Each technique is designed to work synergistically with the others, creating a comprehensive system for optimizing both cognitive and physical capabilities in high-pressure environments.",
    features: [
      "7 core performance techniques",
      "Daily practice protocols",
      "Progress tracking system",
      "Implementation worksheets",
      "Video demonstrations",
    ],
    curriculum: [
      {
        week: 1,
        title: "Technika 1: Cognitive Anchoring",
        description:
          "Master the art of maintaining mental clarity under pressure through cognitive anchoring techniques.",
      },
      {
        week: 2,
        title: "Technika 2: Energy Cycling",
        description: "Learn to optimize your energy cycles for sustained peak performance throughout the day.",
      },
      {
        week: 3,
        title: "Technika 3: Decision Filtering",
        description:
          "Develop rapid decision-making frameworks that maintain quality while increasing speed.",
      },
      {
        week: 4,
        title: "Technika 4: Focus Stacking",
        description:
          "Master the technique of layering different types of focus for maximum concentration depth.",
      },
      {
        week: 5,
        title: "Technika 5: Stress Inoculation",
        description:
          "Build resistance to stress and pressure through controlled exposure and recovery protocols.",
      },
      {
        week: 6,
        title: "Technika 6: Pattern Recognition",
        description:
          "Enhance your ability to quickly identify and respond to complex patterns and trends.",
      },
      {
        week: 7,
        title: "Technika 7: System Integration",
        description:
          "Learn to seamlessly integrate all techniques into a unified performance system.",
      },
    ],
    outcomes: [
      "Mastery of 7 fundamental performance techniques",
      "Improved performance under pressure",
      "Enhanced decision-making speed and quality",
      "Better stress management and resilience",
      "Increased focus and concentration abilities",
      "Sustainable high-performance habits",
    ],
    duration: "7 weeks",
    format: "Online Self-Paced",
    level: "All Levels",
    startDate: "Available Now",
    price: "€890",
    featured: false,
    image: "",
    testimonials: [
      {
        quote:
          "The 7 techniques completely transformed my approach to high-pressure situations. I now feel confident and clear even in the most demanding scenarios.",
        name: "Katarzyna M.",
        title: "Business Development Director",
      },
      {
        quote:
          "Simple, practical, and incredibly effective. These techniques have become part of my daily routine and the results speak for themselves.",
        name: "Marcin L.",
        title: "Senior Software Engineer",
      },
    ],
  },
};

const CourseDetail = () => {
  const { courseSlug } = useParams();

  // If course doesn't exist, redirect to courses page
  if (!courseSlug || !coursesData[courseSlug as keyof typeof coursesData]) {
    return <Navigate to="/program" />;
  }
  
  const course = coursesData[courseSlug as keyof typeof coursesData];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {course.featured && (
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white mb-6">
                <Star className="h-5 w-5 inline mr-2" />
                Featured Program
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-xl md:text-2xl font-medium mb-6 text-silver-mist">
              {course.subtitle}
            </p>

            <p className="text-lg md:text-xl mb-8 text-silver-mist/90 max-w-3xl">
              {course.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="special">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-[rgba(255,255,255,0.1)]"
                >
                  Request More Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Program Overview
              </h2>

              <p className="text-subtle-slate dark:text-silver-mist/90 mb-8">
                {course.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Clock className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    Duration
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/90">
                    {course.duration}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Users className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    Format
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/90">
                    {course.format}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <BarChart className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    Level
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/90">
                    {course.level}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-card rounded-lg">
                  <Calendar className="h-8 w-8 mb-3 text-neural-violet dark:text-luminal-magenta" />
                  <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-1">
                    Start Date
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/90">
                    {course.startDate}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="px-6 py-3 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-lg">
                  <span className="text-neural-violet dark:text-luminal-magenta font-bold text-xl">
                    Investment: {course.price}
                  </span>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                What You'll Get
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start p-4 glass-card rounded-lg">
                    <CheckCircle className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Curriculum */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Program Curriculum
              </h2>

              <div className="space-y-4">
                {course.curriculum.map((week: any, index: number) => (
                  <div key={index} className="p-4 glass-card rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-neural-violet dark:bg-luminal-magenta text-white flex items-center justify-center mr-3">
                        {week.week}
                      </div>
                      <h3 className="text-lg font-bold text-deep-charcoal dark:text-silver-mist">
                        {week.title}
                      </h3>
                    </div>
                    <p className="text-subtle-slate dark:text-silver-mist/90 ml-11">
                      {week.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Expected Outcomes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start p-4 glass-card rounded-lg">
                    <CheckCircle className="h-6 w-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <span className="text-subtle-slate dark:text-silver-mist/90">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              What Participants Are Saying
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-4 italic">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-subtle-slate dark:text-silver-mist/90">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  How is this program delivered?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  This program combines live sessions (via Zoom) with self-paced
                  materials and exercises. All materials are accessible through
                  a private online platform, and recordings of live sessions are
                  available if you can't attend in real-time.
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  What happens after I apply?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  After applying, you'll receive an invitation for a 30-minute
                  fit assessment call. This helps ensure the program aligns with
                  your goals and that you'll benefit from the experience. If
                  it's a good match, you'll receive enrollment details.
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  What's your refund policy?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  The program comes with a 14-day satisfaction guarantee. If
                  after the first two sessions you feel this isn't right for
                  you, you'll receive a full refund.
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                  How much time will I need to commit?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  Plan for 3-5 hours weekly, including live sessions and
                  implementation work. The program is designed for busy
                  professionals, with flexibility in how you schedule the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Capabilities?
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Take the first step toward enhancing your performance and
              reclaiming your agency in our complex world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="bg-white text-neural-violet hover:bg-white/90 border-neural-violet"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-[rgba(255,255,255,0.1)]"
                >
                  Request More Information
                </Button>
              </Link>
            </div>
            
            {/* Hidden OTO access button - only for 7-technik course */}
            {courseSlug === '7-technik' && (
              <div className="mt-8 opacity-30 hover:opacity-100 transition-opacity duration-300">
                <Link to="/oto">
                  <Button
                    variant="ghost"
                    className="text-white/60 hover:text-white text-xs px-2 py-1 h-auto"
                  >
                    •••
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
