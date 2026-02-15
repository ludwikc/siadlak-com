

import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

interface PodcastCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  schedule?: string;
}

const PodcastCard = ({
  title,
  description,
  imageUrl,
  link,
  schedule,
}: PodcastCardProps) => {
  return (
    <Link to={link} className="block h-full">
      <div className="glass-card rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-foreground text-xl mb-2 font-semibold">
            {title}
          </h3>

          {schedule && (
            <p className="text-sm text-dim mb-3">
              {schedule}
            </p>
          )}

          <p className="text-dim mb-6 flex-grow">
            {description}
          </p>

          <div className="inline-flex items-center text-depth font-medium group">
            Słuchaj teraz{" "}
            <ArrowRight
              size={18}
              className="ml-2 group-hover:ml-3 transition-all"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
