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
    gradient: "from-electric to-depth",
  },
  "Odporność psychiczna": {
    icon: Brain,
    gradient: "from-electric to-depth",
  },
  Męskość: {
    icon: Compass,
    gradient: "from-electric to-depth",
  },
};

const statusConfig = {
  NOWA: "bg-electric text-white shadow-sm",
  POLECANE:
    "bg-brand-gradient text-white border-0 shadow-sm",
  NIEDOSTĘPNA: "bg-muted text-muted-foreground shadow-sm",
  DOSTĘPNA: "bg-depth text-white shadow-sm",
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
      relative bg-white rounded-md overflow-hidden
      transition-all duration-300 ease-out
      border border-muted
      ${featured ? "ring-2 ring-electric/40" : ""}
      ${premium ? "bg-void text-white" : ""}
    `}
    >
      {/* Status Badge - Top Right with refined styling */}
      <Badge
        className={`absolute top-4 right-4 text-xs font-bold z-10 ${statusConfig[status]}`}
      >
        {status}
      </Badge>

      <div className="p-6 sm:p-8">
        {/* App Icon + Title Section */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className={`
            w-20 h-20 sm:w-24 sm:h-24
            bg-gradient-to-br ${gradient}
            rounded-md
            flex items-center justify-center
            flex-shrink-0
            border border-white/20
          `}
          >
            <CategoryIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={`
              text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2
              ${premium ? "text-white" : "text-on-light"}
            `}
            >
              {title}
            </h3>
            <p
              className={`
              text-base sm:text-lg font-medium
              ${premium ? "text-white/80" : "text-dim"}
            `}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Rating + Downloads */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span
              className={`text-base font-semibold ${premium ? "text-white" : "text-on-light"}`}
            >
              {rating.toFixed(1)}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "text-electric fill-electric" : "text-muted fill-muted"}`}
                />
              ))}
            </div>
          </div>

          <span
            className={`text-sm ${premium ? "text-white/60" : "text-dim"}`}
          >
            ({ratingsCount.toLocaleString()})
          </span>

          <span
            className={`text-sm font-medium ${premium ? "text-white/70" : "text-dim"}`}
          >
            • {downloads}
          </span>
        </div>

        {/* Meta badges */}
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <Badge
            variant="outline"
            className={`text-xs font-semibold ${premium ? "border-white/30 text-white/90 bg-white/10" : "border-electric/30 text-electric bg-electric/5"}`}
          >
            {category}
          </Badge>

          {duration && (
            <Badge
              variant="outline"
              className={`text-xs font-medium flex items-center gap-1 ${premium ? "border-white/20 text-white/70" : "border-muted text-dim"}`}
            >
              <Clock className="h-3 w-3" />
              {duration}
            </Badge>
          )}

          {target && (
            <Badge
              variant="outline"
              className={`text-xs font-medium flex items-center gap-1 ${premium ? "border-white/20 text-white/70" : "border-muted text-dim"}`}
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
          ${premium ? "text-white/85" : "text-dim"}
        `}
        >
          {description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <div className="space-y-2.5">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <div
                  className={`
                  w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                  ${premium ? "bg-electric/20" : "bg-electric/10"}
                `}
                >
                  <Check
                    className={`h-3 w-3 ${premium ? "text-electric" : "text-electric"}`}
                  />
                </div>
                <span
                  className={`
                  text-sm leading-relaxed
                  ${premium ? "text-white/90" : "text-dim"}
                `}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Install Button */}
        <Link to={link} className="block group">
          <button
            className={`
            w-full py-3.5 px-6 rounded font-bold text-base
            transition-all duration-200
            flex items-center justify-center gap-2
            ${
              premium
                ? "bg-brand-gradient text-white hover:opacity-90"
                : "bg-depth text-white hover:opacity-90"
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
          ${premium ? "text-white/50" : "text-dim/70"}
        `}
        >
          Dołącz do {downloads} uczestników
        </p>
      </div>
    </div>
  );
}
