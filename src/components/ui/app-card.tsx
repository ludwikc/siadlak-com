import { Link } from 'react-router-dom';
import { Star, Download, Zap, Brain, Compass, Clock, Users } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/cta-button';

interface AppCardProps {
  title: string;
  subtitle: string;
  description: string;
  category: 'Produktywność' | 'Odporność psychiczna' | 'Męskość';
  rating: number;
  downloads: string;
  features: string[];
  link: string;
  featured?: boolean;
  premium?: boolean;
  duration?: string;
  target?: string;
}

const categoryConfig = {
  'Produktywność': {
    icon: Zap,
    gradient: 'from-neural-violet to-purple-600',
    color: 'text-neural-violet dark:text-luminal-magenta'
  },
  'Odporność psychiczna': {
    icon: Brain,
    gradient: 'from-blue-600 to-purple-600',
    color: 'text-blue-600 dark:text-blue-400'
  },
  'Męskość': {
    icon: Compass,
    gradient: 'from-red-500 to-pink-600',
    color: 'text-red-600 dark:text-red-400'
  }
};

export default function AppCard({ 
  title, 
  subtitle, 
  description, 
  category, 
  rating, 
  downloads, 
  features, 
  link, 
  featured = false,
  premium = false,
  duration = "6 tygodni",
  target = "Dla świadomych optymalizatorów"
}: AppCardProps) {
  const CategoryIcon = categoryConfig[category].icon;
  const gradient = categoryConfig[category].gradient;
  const categoryColor = categoryConfig[category].color;

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale ${featured ? 'border-2 border-ascension-pink/30 dark:border-luminal-magenta/30' : 'border border-gray-200 dark:border-gray-700'} ${premium ? 'bg-gradient-to-br from-deep-space/50 to-quantum-blue/50' : ''}`}>
      {/* App Icon */}
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mr-6`}>
          <CategoryIcon className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-1 ${premium ? 'text-white' : 'text-deep-charcoal dark:text-silver-mist'}`}>
            {title}
          </h3>
          <p className={`text-lg font-medium ${premium ? 'text-white/80' : categoryColor}`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Rating and Users */}
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className={`ml-2 text-sm font-medium ${premium ? 'text-white/80' : 'text-deep-charcoal dark:text-silver-mist'}`}>
            {rating.toFixed(1)}
          </span>
        </div>
        
        <span className={`text-sm ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/70'}`}>
          • {downloads}
        </span>
      </div>

      {/* Category Badge */}
      <div className="mb-6">
        <Badge className={`${premium ? 'bg-white/10 text-white/90 border-white/20' : `bg-${category === 'Produktywność' ? 'neural-violet' : category === 'Odporność psychiczna' ? 'blue-600' : 'red-600'}/10 ${categoryColor} border-current/20`} px-3 py-1`}>
          {category}
        </Badge>
      </div>

      {/* Description */}
      <p className={`text-base mb-6 leading-relaxed ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
        {description}
      </p>

      {/* Duration and Target Audience */}
      <div className="flex items-center mb-6 text-sm space-x-6">
        <div className="flex items-center">
          <Clock className={`h-4 w-4 mr-2 ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`} />
          <span className={`${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
            {duration}
          </span>
        </div>
        
        <div className="flex items-center">
          <Users className={`h-4 w-4 mr-2 ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`} />
          <span className={`${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
            {target}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <div className="space-y-3">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${premium ? 'bg-white/60' : 'bg-neural-violet dark:bg-luminal-magenta'}`} />
              <span className={`text-sm leading-relaxed ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/90'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Install Button */}
      <Link to={link} className="block">
        <CTAButton 
          className={`w-full ${premium ? 'bg-gradient-to-r from-ascension-pink to-luminal-magenta hover:from-ascension-pink/90 hover:to-luminal-magenta/90' : 'bg-neural-violet hover:bg-neural-violet/90 dark:bg-neural-violet dark:hover:bg-neural-violet/90'} text-white border-0 py-3`}
          size="lg"
          aria-label={`Zainstaluj aplikację ${title}`}
        >
          <Download className="w-5 h-5 mr-3" />
          Zainstaluj
        </CTAButton>
      </Link>
    </div>
  );
}