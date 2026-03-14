
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Czy dostanę fakturę?",
      answer: "Tak, faktura VAT wystawiana jest automatycznie."
    },
    {
      question: "Czy można płacić w ratach?",
      answer: "Tak — szczegóły znajdziesz na stronie zamówienia."
    },
    {
      question: "Kiedy dostanę dostęp do programu?",
      answer: "Natychmiast po opłaceniu. Dosłownie — w ciągu kilku minut. Możesz zacząć \"instalację\" tego samego dnia."
    },
    {
      question: "Jak długo mam dostęp do materiałów?",
      answer: "Na zawsze. Bez limitu czasowego, bez subskrypcji."
    },
    {
      question: "Co jeśli nie będę miał czasu na społeczność?",
      answer: "Społeczność jest tam dla Ciebie, nie Ty dla społeczności. Wchodzisz, gdy chcesz i potrzebujesz."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
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
