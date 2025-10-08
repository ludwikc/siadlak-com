/**
 * Centralized icon exports for optimal tree-shaking and consistency.
 * Only includes icons actually used in the codebase.
 * Import from this file instead of directly from lucide-react.
 */

// Most frequently used icons (in order of usage frequency)
export {
  ArrowRight, // Used in 15+ files - primary CTA icon
  CheckCircle, // Used in 10+ files - validation/success
  Check, // Used in app cards - simple checkmark
  Calendar, // Used in 8+ files - scheduling/dates
  Clock, // Used in 6+ files - time/duration
  Users, // Used in 6+ files - community/team
  Star, // Used in 5+ files - ratings/premium
  Mail, // Used in 4+ files - contact/newsletter
  ArrowDown, // Used in animations and flows
  Zap, // Used for energy/premium features
  Shield, // Used for trust/security
  Brain, // Used for mental/cognitive features
  Target, // Used for goals/precision
  Crown, // Used for premium/elite features
  CheckCircle2, // Alternative checkmark style
  Flame, // Used for urgency/scarcity indicators
} from "lucide-react";

// Interface/Navigation icons
export {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  ExternalLink,
  Download,
} from "lucide-react";

// Media/Content icons
export {
  Play,
  Volume2,
  Headphones,
  Video,
  Book,
  BookOpen,
  FileText,
  Quote,
  Mic2,
} from "lucide-react";

// Feature/Category icons
export {
  Diamond,
  Award,
  Compass,
  Heart,
  MapPin,
  Bell,
  GraduationCap,
  MessageSquare,
  Timer,
  TrendingUp,
  GitMerge,
  AlertCircle,
  HelpCircle,
  BarChart,
  Ribbon,
  Package,
  Rocket,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Trophy,
  TrendingDown,
} from "lucide-react";

// Special icons (used only once or twice)
export { User, MailIcon, CheckCheck, Lock } from "lucide-react";
