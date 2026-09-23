import { faq } from "@/config/mct/faq";
import type { FaqItem } from "@/config/mct/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design-system/components/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";

type FaqAccordionProps = { scope: FaqItem["scope"][number] };

export default function FaqAccordion({ scope }: FaqAccordionProps) {
  const { locale, t } = useMct();
  const ref = useReveal<HTMLElement>();
  const items = faq.filter((item) => item.scope.includes(scope));

  if (items.length === 0) return null;

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Accordion type="single" collapsible className="max-w-3xl" data-reveal-child>
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-white/10">
              <AccordionTrigger className="gap-6 py-5 text-lg font-semibold text-on-dark hover:text-electric [&>svg]:text-electric">
                {item.question[locale]}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-dim">
                {item.answer[locale]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
