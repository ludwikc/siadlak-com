
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { ArrowRight } from 'lucide-react';

interface PodcastCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  schedule?: string;
}

const PodcastCard = ({ title, description, imageUrl, link, schedule }: PodcastCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col bg-luminous-white dark:bg-deep-space/80 border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-neural-violet dark:text-neural-violet-light">{title}</h3>
        {schedule && (
          <p className="text-sm text-subtle-slate dark:text-gentle-lavender">{schedule}</p>
        )}
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-deep-charcoal dark:text-silver-mist/80">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link 
          to={link}
          className="inline-flex items-center text-neural-violet hover:text-ascension-pink dark:text-neural-violet-light dark:hover:text-luminal-magenta transition-colors"
        >
          Słuchaj teraz <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PodcastCard;
