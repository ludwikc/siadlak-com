import React from "react";
import { Volume2, Play, Headphones } from "lucide-react";

interface PodcastPlayerProps {
  title: string;
  embedUrl: string;
  coverArt?: string;
}

const PodcastPlayer = ({ title, embedUrl, coverArt }: PodcastPlayerProps) => {
  return (
    <div className="podcast-player my-6 overflow-hidden rounded-lg border border-border bg-luminous-white dark:bg-deep-space/40 shadow-sm">
      <div className="flex items-center p-4 border-b border-border">
        {coverArt && (
          <div className="mr-4 w-12 h-12 overflow-hidden rounded">
            <img
              src={coverArt}
              alt={`${title} cover art`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-deep-charcoal dark:text-silver-mist flex items-center">
            <Headphones className="mr-2 h-5 w-5 text-ascension-pink" />
            {title}
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-neural-violet dark:text-neural-violet-light">
          <button
            className="p-2 rounded-full hover:bg-neural-violet/10 dark:hover:bg-neural-violet-light/10 transition-colors"
            aria-label="Play"
          >
            <Play className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-neural-violet/10 dark:hover:bg-neural-violet-light/10 transition-colors"
            aria-label="Adjust volume"
          >
            <Volume2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="podcast-embed h-[180px] sm:h-[200px] w-full">
        <iframe
          src={embedUrl}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          title={title}
          className="w-full h-full"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default PodcastPlayer;
