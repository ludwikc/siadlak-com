import { Link } from "react-router-dom";
import {
  Star,
  Download,
  Zap,
  Brain,
  Compass,
  Clock,
  Users,
  Check,
} from "@/lib/icons";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  title: string;
  subtitle: string;
  description: string;
  category: "Produktywność" | "Odporność psychiczna" | "Męskość";
  rating: number;
  downloads: string;
  status: "NOWA" | "POLECANE" | "NIEDOSTĘPNA" | "DOSTĘPNA";
  features: string[];
  link: string;
  duration?: string;
  target?: string;
  featured?: boolean;
  premium?: boolean;
}

const categoryConfig = {
  Produktywność: {
    icon: Zap,
    gradient: "from-twilight-indigo to-zenith-gold",
  },
  "Odporność psychiczna": {
    icon: Brain,
    gradient: "from-neural-blue to-twilight-indigo",
  },
  Męskość: {
    icon: Compass,
    gradient: "from-zenith-gold to-twilight-indigo",
  },
};

const statusConfig = {
  NOWA: "bg-green-500 text-white shadow-sm",
  POLECANE:
    "bg-gradient-to-r from-twilight-indigo to-zenith-gold text-white border-0 shadow-sm",
  NIEDOSTĘPNA: "bg-gray-400 text-white shadow-sm",
  DOSTĘPNA: "bg-twilight-indigo text-white shadow-sm",
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
  premium = false,
}: AppCardProps) {
  const CategoryIcon = categoryConfig[category].icon;
  const gradient = categoryConfig[category].gradient;

  // Calculate number of ratings (simulated from downloads)
  const downloadNum = parseInt(downloads.replace(/[^\d]/g, ""));
  const ratingsCount = Math.floor(downloadNum * 0.6); // 60% of downloads left ratings

  return (
    <div
      className={`
      relative bg-white rounded-3xl overflow-hidden
      transition-all duration-300 ease-out
      hover:-translate-y-2 hover:shadow-2xl
      shadow-lg
      ${featured ? "ring-2 ring-zenith-gold/40" : ""}
      ${premium ? "bg-gradient-to-br from-deep-charcoal/95 to-twilight-indigo/90" : ""}
    `}
    >
      {/* Status Badge - Top Right with refined styling */}
      <Badge
        className={`absolute top-4 right-4 text-xs font-bold z-10 ${statusConfig[status]}`}
      >
        {status}
      </Badge>

      <div className="p-6 sm:p-8">
        {/* App Icon + Title Section - iOS App Store style */}
        <div className="flex items-start gap-4 mb-5">
          {/* Large App Icon with shadow */}
          <div
            className={`
            w-20 h-20 sm:w-24 sm:h-24
            bg-gradient-to-br ${gradient}
            rounded-2xl sm:rounded-[22px]
            flex items-center justify-center
            flex-shrink-0
            shadow-lg
            border border-white/20
            transition-transform duration-300
            group-hover:scale-105
          `}
          >
            <CategoryIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-sm" />
          </div>

          {/* Title + Subtitle */}
          <div className="flex-1 min-w-0">
            <h3
              className={`
              text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2
              ${premium ? "text-white" : "text-deep-charcoal"}
            `}
            >
              {title}
            </h3>
            <p
              className={`
              text-base sm:text-lg font-medium
              ${premium ? "text-white/80" : "text-subtle-slate"}
            `}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Rating + Downloads - iOS style inline */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span
              className={`text-base font-semibold ${premium ? "text-white" : "text-deep-charcoal"}`}
            >
              {rating.toFixed(1)}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                />
              ))}
            </div>
          </div>

          <span
            className={`text-sm ${premium ? "text-white/60" : "text-subtle-slate"}`}
          >
            ({ratingsCount.toLocaleString()})
          </span>

          <span
            className={`text-sm font-medium ${premium ? "text-white/70" : "text-subtle-slate"}`}
          >
            • {downloads}
          </span>
        </div>

        {/* Meta badges - Category + Stats */}
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <Badge
            variant="outline"
            className={`text-xs font-semibold ${premium ? "border-white/30 text-white/90 bg-white/10" : "border-twilight-indigo/30 text-twilight-indigo bg-twilight-indigo/5"}`}
          >
            {category}
          </Badge>

          {duration && (
            <Badge
              variant="outline"
              className={`text-xs font-medium flex items-center gap-1 ${premium ? "border-white/20 text-white/70" : "border-gray-300 text-subtle-slate"}`}
            >
              <Clock className="h-3 w-3" />
              {duration}
            </Badge>
          )}

          {target && (
            <Badge
              variant="outline"
              className={`text-xs font-medium flex items-center gap-1 ${premium ? "border-white/20 text-white/70" : "border-gray-300 text-subtle-slate"}`}
            >
              <Users className="h-3 w-3" />
              {target}
            </Badge>
          )}
        </div>

        {/* Description */}
        <p
          className={`
          text-sm sm:text-base leading-relaxed mb-5
          ${premium ? "text-white/85" : "text-subtle-slate"}
        `}
        >
          {description}
        </p>

        {/* Key Features - Checkmark style */}
        <div className="mb-6">
          <div className="space-y-2.5">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <div
                  className={`
                  w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                  ${premium ? "bg-zenith-gold/20" : "bg-twilight-indigo/10"}
                `}
                >
                  <Check
                    className={`h-3 w-3 ${premium ? "text-zenith-gold" : "text-twilight-indigo"}`}
                  />
                </div>
                <span
                  className={`
                  text-sm leading-relaxed
                  ${premium ? "text-white/90" : "text-subtle-slate"}
                `}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* iOS-style Install Button */}
        <Link to={link} className="block group">
          <button
            className={`
            w-full py-3.5 px-6 rounded-xl font-bold text-base
            transition-all duration-200
            flex items-center justify-center gap-2
            ${
              premium
                ? "bg-gradient-to-r from-zenith-gold to-twilight-indigo text-white shadow-lg shadow-zenith-gold/30 hover:shadow-xl hover:shadow-zenith-gold/40 hover:scale-[1.02]"
                : "bg-twilight-indigo text-white shadow-md shadow-twilight-indigo/20 hover:bg-twilight-indigo/90 hover:shadow-lg hover:scale-[1.02]"
            }
          `}
          >
            <Download className="w-5 h-5" />
            <span>ZAINSTALUJ</span>
          </button>
        </Link>

        {/* Small text below button */}
        <p
          className={`
          text-center text-xs mt-3
          ${premium ? "text-white/50" : "text-subtle-slate/70"}
        `}
        >
          Dołącz do {downloads} uczestników
        </p>
      </div>
    </div>
  );
}
