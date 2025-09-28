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

      {/* Icon Container - 64x64px with 16px border radius */}
      <div className="p-6 pb-0">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-4`}>
          <CategoryIcon className="w-8 h-8 text-white" />
        </div>

        {/* Typography Hierarchy */}
        {/* Title: Bold, 20px, primary text color */}
        <h3 className={`text-xl font-bold leading-tight mb-1 ${premium ? 'text-white' : 'text-deep-charcoal dark:text-silver-mist'}`}>
          {title}
        </h3>
        
        {/* Subtitle: Medium weight, neural-violet/luminal-magenta */}
        <p className={`text-base font-medium mb-3 ${premium ? 'text-white/90' : 'text-neural-violet dark:text-luminal-magenta'}`}>
          {subtitle}
        </p>

        {/* Description: 16px, subtle secondary text */}
        <p className={`text-base mb-4 leading-relaxed ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
          {description}
        </p>

        {/* Category Badge */}
        <Badge variant="outline" className={`mb-4 text-xs ${premium ? 'border-white/20 text-white/80' : 'border-neural-violet/20 text-neural-violet dark:border-luminal-magenta/20 dark:text-luminal-magenta'}`}>
          {category}
        </Badge>

        {/* Stats Row: Small text with clock and users icons showing duration and level */}
        {(duration || target) && (
          <div className="flex items-center gap-4 mb-4">
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

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between mb-4">
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

        {/* Features: Bulleted list (first 2 features shown) */}
        <div className="mb-6">
          <div className="space-y-2">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start text-sm">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${premium ? 'bg-ascension-pink' : 'bg-neural-violet dark:bg-luminal-magenta'}`} />
                <span className={`${premium ? 'text-white/80' : 'text-subtle-slate dark:text-silver-mist/90'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button: Full-width download button with download icon */}
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