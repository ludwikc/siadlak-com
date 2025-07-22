
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Czy dostanę fakturę?",
      answer: "Tak, oczywiście! Wystawiamy faktury VAT dla wszystkich uczestników. Możesz rozliczyć kurs jako koszt uzyskania przychodu lub szkolenie pracownika."
    },
    {
      question: "Czy można płacić w ratach?",
      answer: "Tak, oferujemy możliwość płatności ratalnych. Szczegóły znajdziesz po kliknięciu w przycisk zamówienia. Dostępne są raty 3x, 6x i 12x."
    },
    {
      question: "Kiedy dostanę dostęp do kursu?",
      answer: "Dostęp do platformy otrzymasz automatycznie po zaksięgowaniu płatności - zwykle w ciągu kilku minut. Na maila dostaniesz dane logowania i instrukcje pierwszych kroków."
    },
    {
      question: "Jak długo mam dostęp do materiałów?",
      answer: "Dostęp do kursu i społeczności masz dożywotni! Możesz wracać do materiałów kiedy chcesz, a społeczność Hakerów będzie wspierać Cię przez lata."
    },
    {
      question: "Co jeśli nie będę miał czasu na społeczność?",
      answer: "Społeczność to dodatek, nie obowiązek! Możesz korzystać z kursu samodzielnie. Ale doświadczenie pokazuje, że uczestnicy społeczności osiągają lepsze rezultaty."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">FAQ</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="glass-card">
            <CardContent className="p-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-background-secondary/50 transition-colors"
              >
                <h4 className="font-bold text-text-primary">{faq.question}</h4>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-text-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-text-secondary" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
