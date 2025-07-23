

import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CommunityCallToActionProps {
  minimal?: boolean;
  className?: string;
}

export default function CommunityCallToAction({
  minimal = false,
  className = "",
}: CommunityCallToActionProps) {
  if (minimal) {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <Link to="/community" onClick={() => window.scrollTo(0, 0)}>
          <Button variant="secondary">
            <Users size={18} />
            <span>Dołącz do Społeczności Lifehackerów</span>
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`bg-secondary/30 dark:bg-quantum-blue/20 p-6 rounded-xl ${className}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-2">
          <Users className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
        </div>

        <h3 className="text-xl font-semibold text-deep-charcoal dark:text-silver-mist">
          Dołącz do Społeczności Lifehackerów
        </h3>

        <p className="text-subtle-slate dark:text-silver-mist/80 max-w-md mx-auto">
          Otoczenie wpływa na nas bardziej niż zdajemy sobie sprawę. Dołącz do
          społeczności ludzi, którzy wspólnie dążą do rozwoju i pomagają sobie
          nawzajem osiągać cele.
        </p>

        <Link to="/community" onClick={() => window.scrollTo(0, 0)}>
          <Button variant="secondary">
            <Users size={18} />
            <span>Odkryj nasze cyfrowe miasto</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
