

import { ExternalLink } from 'lucide-react';

interface PlatformLink {
  name: string;
  url: string;
  icon: string;
}

interface PodcastPlatformLinksProps {
  platforms: PlatformLink[];
}

const PodcastPlatformLinks = ({ platforms }: PodcastPlatformLinksProps) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-medium text-deep-charcoal mb-4">
        Dostępne na twoich ulubionych platformach:
      </h3>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-secondary/50 hover:bg-secondary text-deep-charcoal transition-colors"
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="h-5 w-5 mr-2"
            />
            {platform.name}
            <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PodcastPlatformLinks;
