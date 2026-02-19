
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const ValueCalculator = () => {
  const bonuses = [
    { name: "5 warsztatów eksperckich", value: "5 × 1000 zł", total: 5000 },
    { name: "9 niedostępnych nigdzie webinarów", value: "9 × 100 zł", total: 900 },
    { name: "34 Wewnętrzne Protipy na temat produktywności", value: "bezcenne", total: 1000 },
    { name: "12 Sesji Live Q&A", value: "wartość 15 000 zł", total: 15000 },
    { name: "Dostęp w wersji anglojęzycznej", value: "ok. 4 000 zł", total: 4000 },
    { name: "Społeczność Hakerów - dożywotni dostęp", value: "bezcenne", total: 3000 }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => sum + bonus.total, 0);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bonuses.map((bonus, index) => (
          <Card key={index} className="bg-card border border-border border-l-4 border-l-electric">
            <CardContent className="p-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-electric mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">{bonus.name}</p>
                  <p className="text-sm text-electric font-bold">{bonus.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="p-6 bg-gradient-to-r from-electric/20 to-depth/20 rounded-md border border-electric/20">
          <p className="text-2xl font-bold text-foreground mb-2">
            Łączna wartość bonusów:
          </p>
          <p className="text-4xl font-extrabold text-electric">
            {totalValue.toLocaleString()} zł
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCalculator;
