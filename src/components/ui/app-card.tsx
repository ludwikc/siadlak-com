import { Link } from 'react-router-dom';
import { Star, Download, Zap, Brain, Compass, Clock, Users } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';

interface AppCardProps {
  title: string;
  subtitle: string;
  description: string;
  category: 'Produktywność' | 'Odporność psychiczna' | 'Męskość';
  rating: number;
  downloads: string;
  status: 'NOWA' | 'POLECANE' | 'NIEDOSTĘPNA' | 'DOSTĘPNA';
  features: string[];
  link: string;
  duration?: string;
  target?: string;
  featured?: boolean;
  premium?: boolean;
}

const categoryConfig = {
  'Produktywność': {
    icon: Zap,
    gradient: 'from-neural-violet to-ascension-pink'
  },
  'Odporność psychiczna': {
    icon: Brain,
    gradient: 'from-neural-violet to-luminal-magenta'
  },
  'Męskość': {
    icon: Compass,
    gradient: 'from-ascension-pink to-luminal-magenta'
  }
};

const statusConfig = {
  'NOWA': 'bg-green-500 text-white',
  'POLECANE': 'bg-gradient-to-r from-neural-violet to-ascension-pink text-white border-0',
  'NIEDOSTĘPNA': 'bg-gray-500 text-white',
  'DOSTĘPNA': 'bg-neural-violet text-white'
};

export default function AppCard({ 
  title, 
  subtitle, 
  description, 
  category, 
  rating, 
  downloads, 
  status, 
  features, 
  link,
  duration,
  target,
  featured = false,
  premium = false 
}: AppCardProps) {
  const CategoryIcon = categoryConfig[category].icon;
  const gradient = categoryConfig[category].gradient;

  return (
    <GlassCard className={`rounded-xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl hover:shadow-neural-violet/10 relative ${featured ? 'border-2 border-ascension-pink/30 dark:border-luminal-magenta/30' : ''} ${premium ? 'bg-gradient-to-br from-deep-space/50 to-quantum-blue/50' : ''}`}>
      {/* Status Badge - Top Right */}
      <Badge className={`absolute top-3 right-3 text-xs z-10 ${statusConfig[status]}`}>
        {status}
      </Badge>

      <div className="p-4 sm:p-6">
        {/* Mobile-optimized Header Section */}
        <div className="mb-3">
          {/* Icon + Title Row - Better mobile alignment */}
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br ${gradient} rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <CategoryIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className={`text-base sm:text-xl font-bold leading-tight ${premium ? 'text-white' : 'text-deep-charcoal dark:text-silver-mist'}`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Subtitle - Full width on mobile */}
          <p className={`text-sm sm:text-base font-medium mb-3 ${premium ? 'text-white/90' : 'text-neural-violet dark:text-luminal-magenta'}`}>
            {subtitle}
          </p>

          {/* Social Proof Row - Left aligned */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className={`ml-1 text-xs font-medium ${premium ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  {rating.toFixed(1)}
                </span>
              </div>
              <span className={`text-xs ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/70'}`}>
                {downloads}
              </span>
            </div>
          </div>

          {/* Category + Key Stats - Better mobile flow */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <Badge variant="outline" className={`text-xs ${premium ? 'border-white/20 text-white/80' : 'border-neural-violet/20 text-neural-violet dark:border-luminal-magenta/20 dark:text-luminal-magenta'}`}>
              {category}
            </Badge>
            
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className={`h-3 w-3 ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`} />
                <span className={`text-xs ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
                  {duration}
                </span>
              </div>
            )}
            
            {target && (
              <div className="flex items-center gap-1">
                <Users className={`h-3 w-3 ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`} />
                <span className={`text-xs ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
                  {target}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Value Proposition - Left aligned */}
        <p className={`text-sm sm:text-base mb-4 leading-relaxed text-left ${premium ? 'text-white/80' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
          {description}
        </p>

        {/* Key Benefits - Clean left alignment */}
        <div className="mb-4">
          <div className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${premium ? 'bg-ascension-pink' : 'bg-neural-violet dark:bg-luminal-magenta'}`} />
                <span className={`text-sm leading-relaxed text-left ${premium ? 'text-white/85' : 'text-subtle-slate dark:text-silver-mist/90'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link to={link} className="block mb-2">
          <CTAButton 
            className={`w-full font-semibold ${premium ? 'bg-gradient-to-r from-ascension-pink to-luminal-magenta hover:from-ascension-pink/90 hover:to-luminal-magenta/90' : ''}`}
            size="default"
            aria-label={`Rozpocznij kurs ${title}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Rozpocznij kurs
          </CTAButton>
        </Link>
        
        {/* Trust signal - Left aligned on mobile */}
        <p className={`text-left sm:text-center text-xs ${premium ? 'text-white/50' : 'text-subtle-slate/60 dark:text-silver-mist/50'}`}>
          Dołącz do {downloads} uczestników
        </p>
      </div>
    </GlassCard>
  );
}