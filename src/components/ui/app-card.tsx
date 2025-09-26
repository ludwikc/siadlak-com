import { Link } from 'react-router-dom';
import { Star, Download, Zap, Brain, Compass } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/cta-button';

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
  featured?: boolean;
  premium?: boolean;
}

const categoryConfig = {
  'Produktywność': {
    icon: Zap,
    gradient: 'from-yellow-400 to-orange-500'
  },
  'Odporność psychiczna': {
    icon: Brain,
    gradient: 'from-blue-400 to-purple-500'
  },
  'Męskość': {
    icon: Compass,
    gradient: 'from-red-400 to-pink-500'
  }
};

const statusConfig = {
  'NOWA': 'bg-green-500 text-white',
  'POLECANE': 'bg-blue-500 text-white',
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
  featured = false,
  premium = false 
}: AppCardProps) {
  const CategoryIcon = categoryConfig[category].icon;
  const gradient = categoryConfig[category].gradient;

  return (
    <div className={`glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl hover:shadow-neural-violet/10 ${featured ? 'border-2 border-ascension-pink/30 dark:border-luminal-magenta/30' : ''} ${premium ? 'bg-gradient-to-br from-deep-space/50 to-quantum-blue/50' : ''}`}>
      {/* App Icon Header */}
      <div className="relative">
        <div className={`h-20 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
          <CategoryIcon className="w-10 h-10 text-white relative z-10" />
        </div>
        
        {/* Status Badge */}
        <Badge className={`absolute top-2 right-2 text-xs ${statusConfig[status]}`}>
          {status}
        </Badge>
      </div>

      <div className="p-6">
        {/* App Title and Category */}
        <div className="mb-3">
          <h3 className={`text-lg font-bold ${premium ? 'text-white' : 'text-deep-charcoal dark:text-silver-mist'}`}>
            {title}
          </h3>
          <p className={`text-sm ${premium ? 'text-white/80' : 'text-neural-violet dark:text-luminal-magenta'}`}>
            {category}
          </p>
        </div>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className={`ml-2 text-xs ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
              {rating.toFixed(1)}
            </span>
          </div>
          
          <div className="flex items-center">
            <Download className={`h-3 w-3 mr-1 ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`} />
            <span className={`text-xs ${premium ? 'text-white/60' : 'text-subtle-slate dark:text-silver-mist/60'}`}>
              {downloads}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className={`text-sm font-medium mb-3 ${premium ? 'text-white/90' : 'text-deep-charcoal dark:text-silver-mist'}`}>
          {subtitle}
        </p>

        {/* Description */}
        <p className={`text-sm mb-4 leading-relaxed ${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/80'}`}>
          {description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <div className="space-y-1">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start text-xs">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${premium ? 'bg-white/60' : 'bg-neural-violet dark:bg-luminal-magenta'}`} />
                <span className={`${premium ? 'text-white/70' : 'text-subtle-slate dark:text-silver-mist/90'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Install Button */}
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
    </div>
  );
}