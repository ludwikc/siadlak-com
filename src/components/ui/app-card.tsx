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

      {/* Mobile-optimized layout */}
      <div className="p-4 sm:p-6 pb-0">
        {/* Header Section - Icon + Title/Subtitle */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Icon Container - Smaller on mobile */}
          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <CategoryIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>

          {/* Title + Subtitle */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-lg sm:text-xl font-bold leading-tight mb-1 ${premium ? 'text-white' : 'text-deep-charcoal dark:text-silver-mist'}`}>
              {title}
            </h3>
            
            <p className={`text-sm sm:text-base font-medium mb-2 sm:mb-3 ${premium ? 'text-white/90' : 'text-neural-violet dark:text-luminal-magenta'}`}>
              {subtitle}
            </p>

            {/* Category Badge - Mobile inline */}
            <Badge variant="outline" className={`text-xs ${premium ? 'border-white/20 text-white/80' : 'border-neural-violet/20 text-neural-violet dark:border-luminal-magenta/20 dark:text-luminal-magenta'}`}>
              {category}
            </Badge>
          </div>
        </div>

        {/* Description - Hidden on mobile, shown on larger screens */}
        <p className={`hidden sm:block text-sm sm:text-base mb-4 leading-relaxed ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
          {description}
        </p>

        {/* Stats Row - Hidden on mobile */}
        {(duration || target) && (
          <div className="hidden sm:flex items-center gap-4 mb-4">
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
        )}

        {/* Rating and Downloads - Hidden on mobile */}
        <div className="hidden sm:flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className={`ml-2 text-xs font-medium ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
              {rating.toFixed(1)}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className={`text-xs ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
              {downloads}
            </span>
          </div>
        </div>

        {/* Features: Simplified for mobile */}
        <div className="mb-4 sm:mb-6">
          <div className="space-y-2">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start text-sm">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${premium ? 'bg-ascension-pink' : 'bg-neural-violet dark:bg-luminal-magenta'}`} />
                <span className={`leading-relaxed ${premium ? 'text-white/80' : 'text-subtle-slate dark:text-silver-mist/90'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button: Slightly smaller on mobile */}
        <Link to={link} className="block">
          <CTAButton 
            className={`w-full ${premium ? 'bg-gradient-to-r from-ascension-pink to-luminal-magenta hover:from-ascension-pink/90 hover:to-luminal-magenta/90' : ''}`}
            size="default"
            aria-label={`Zainstaluj aplikację ${title}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Zainstaluj
          </CTAButton>
        </Link>
      </div>
    </GlassCard>
  );
}