import { CheckCircle, Star, Users, Shield, ArrowRight } from '@/lib/icons';
import { GlassCard } from '@/components/ui/glass-card';
import { OTOCountdown } from './OTOCountdown';

interface OTOProductDisplayProps {
  onExpired: () => void;
}

export function OTOProductDisplay({ onExpired }: OTOProductDisplayProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            EKSKLUZYWNA OFERTA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Pakiet Transformacji Mentalnej
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kompletny system rozwoju osobistego, który pomoże Ci osiągnąć szczyt swojego potencjału w 90 dni
          </p>
        </div>

        {/* Countdown Timer */}
        <OTOCountdown onExpired={onExpired} className="mb-12" />

        {/* Price Section */}
        <GlassCard className="text-center mb-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">Regularna cena:</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl text-muted-foreground line-through">2.997 zł</span>
              <span className="text-5xl font-bold text-primary">997 zł</span>
            </div>
            <p className="text-green-500 font-medium">Oszczędzasz 2.000 zł (67% taniej!)</p>
          </div>
        </GlassCard>

        {/* Benefits */}
        <GlassCard className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Co otrzymasz w pakiecie:</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Kurs Mental Elevator",
                description: "Kompletny system treningów mentalnych do osiągania szczytowej wydajności",
                value: "997 zł"
              },
              {
                title: "Silna Głowa - Trening Mentalny",
                description: "Praktyczne techniki budowania odporności psychicznej i pewności siebie",
                value: "697 zł"
              },
              {
                title: "Hakowanie Produktywności",
                description: "Zaawansowane strategie optymalizacji czasu i energii mentalnej",
                value: "497 zł"
              },
              {
                title: "Sesje 1-na-1 (3x 60min)",
                description: "Indywidualne konsultacje ze mną w celu spersonalizowania strategii",
                value: "1.500 zł"
              },
              {
                title: "Dostęp do społeczności VIP",
                description: "Ekskluzywna grupa uczestników z cotygodniowymi Q&A",
                value: "297 zł"
              },
              {
                title: "Materiały bonusowe",
                description: "Dodatkowe audiobooki, checklista i templates do działania",
                value: "197 zł"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                  <p className="text-sm font-medium text-primary">Wartość: {item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-6 text-center">
            <p className="text-lg font-medium">Łączna wartość: <span className="text-2xl text-primary font-bold">4.185 zł</span></p>
            <p className="text-muted-foreground">Dziś płacisz tylko 997 zł</p>
          </div>
        </GlassCard>

        {/* Social Proof */}
        <GlassCard className="mb-12">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium">Dołącz do 2,847 osób, które już zmieniły swoje życie</span>
            </div>
            
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-muted-foreground">(4.9/5 z 1,234 opinii)</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Wzrost motywacji</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">87%</div>
              <div className="text-sm text-muted-foreground">Lepsza koncentracja</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Poleca znajomym</div>
            </div>
          </div>
        </GlassCard>

        {/* CTA Section */}
        <GlassCard className="text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Gwarancja 30-dniowego zwrotu pieniędzy</h3>
          <p className="text-muted-foreground mb-8">
            Jeśli w ciągu 30 dni nie będziesz zadowolony z efektów, zwrócę Ci każdą złotówkę. 
            Bez pytań, bez problemów.
          </p>
          
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-12 py-4 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Kup teraz za 997 zł
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Bezpieczne płatności • SSL • Natychmiastowy dostęp
          </p>
        </GlassCard>
      </div>
    </div>
  );
}