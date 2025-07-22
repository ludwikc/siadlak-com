

import { CheckCircle } from 'lucide-react';

interface ValuePropositionProps {
  title: string;
  items: string[];
}

const ValueProposition = ({ title, items }: ValuePropositionProps) => {
  return (
    <div className="my-10 p-6 rounded-lg bg-secondary/30 dark:bg-quantum-blue/20">
      <h3 className="text-xl font-semibold text-deep-charcoal dark:text-silver-mist mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 mr-2 text-ascension-pink dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
            <span className="text-deep-charcoal/90 dark:text-silver-mist/90">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueProposition;
