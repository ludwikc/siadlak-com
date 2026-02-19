import { Lock } from '@/lib/icons';

export function ExpiredOverlay() {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex flex-col items-center justify-center text-white text-center p-8">
      <div className="max-w-md mx-auto space-y-6">
        <Lock className="h-16 w-16 mx-auto text-white/80" />
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">
            Oferta Wygasła
          </h1>
          
          <p className="text-xl text-white/90">
            To była jednorazowa oferta, która już wygasła.
          </p>
          
          <p className="text-white/70">
            Niestety, nie można jej już aktywować. Śledź moje kanały komunikacji, 
            aby nie przegapić kolejnych ekskluzywnych okazji.
          </p>
        </div>
        
        <div className="pt-4">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded transition-all duration-300 text-white font-medium"
          >
            Powrót na stronę główną
          </a>
        </div>
      </div>
    </div>
  );
}
