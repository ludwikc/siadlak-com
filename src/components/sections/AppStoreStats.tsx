import { Download, Users, Star } from '@/lib/icons';

export default function AppStoreStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
      <div className="text-center">
        <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Download className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
        </div>
        <div className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">3</div>
        <div className="text-sm text-subtle-slate dark:text-silver-mist/80">dostępne aplikacje</div>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Users className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
        </div>
        <div className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">150+</div>
        <div className="text-sm text-subtle-slate dark:text-silver-mist/80">użytkowników</div>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Star className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
        </div>
        <div className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist flex items-center justify-center">
          5.0 
          <div className="flex ml-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <div className="text-sm text-subtle-slate dark:text-silver-mist/80">średnia ocena</div>
      </div>
    </div>
  );
}