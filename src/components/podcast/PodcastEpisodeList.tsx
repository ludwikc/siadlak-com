

import { Play, Calendar } from 'lucide-react';

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  audioUrl: string;
  imageUrl?: string;
}

interface PodcastEpisodeListProps {
  episodes: PodcastEpisode[];
  onPlayEpisode?: (episode: PodcastEpisode) => void;
}

const PodcastEpisodeList = ({
  episodes,
  onPlayEpisode,
}: PodcastEpisodeListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-deep-charcoal mb-4">
        Najnowsze odcinki
      </h2>
      <div className="divide-y divide-border">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="py-4 flex flex-col sm:flex-row gap-4"
          >
            {episode.imageUrl && (
              <div className="flex-shrink-0 w-full sm:w-32 h-32 overflow-hidden rounded-md">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-neural-violet mb-1">
                {episode.title}
              </h3>
              <div className="flex items-center text-sm text-subtle-slate mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{episode.date}</span>
                <span className="mx-2">•</span>
                <span>{episode.duration}</span>
              </div>
              <p className="text-deep-charcoal/80 mb-3 line-clamp-2 sm:line-clamp-3">
                {episode.description}
              </p>
              <button
                onClick={() => onPlayEpisode && onPlayEpisode(episode)}
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-ascension-pink hover:bg-neural-violet text-white transition-colors"
              >
                <Play className="h-4 w-4 mr-1" />
                Odtwórz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastEpisodeList;
