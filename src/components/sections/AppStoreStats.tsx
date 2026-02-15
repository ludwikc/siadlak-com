import { Download, Star, TrendingUp } from '@/lib/icons';

export default function AppStoreStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="w-16 h-16 bg-depth/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="h-8 w-8 text-depth" />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">3</div>
        <div className="text-lg text-dim">Aplikacje dostępne</div>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-depth/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="h-8 w-8 text-depth" />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">150+</div>
        <div className="text-lg text-dim">Aktywnych użytkowników</div>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-depth/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="h-8 w-8 text-depth" />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">5.0</div>
        <div className="text-lg text-dim">Średnia ocena</div>
      </div>
    </div>
  );
}
