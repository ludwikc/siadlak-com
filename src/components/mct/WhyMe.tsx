import { Check } from "lucide-react";
import consultantPhoto from "@/assets/Ludwik C. Siadlak-bw-consultant.webp?w=400;800&format=avif;webp&as=picture";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design-system/components/table";
import { useReveal } from "@/hooks/use-reveal";
import { useMct } from "./MctContext";
import SectionHead from "./SectionHead";

export default function WhyMe() {
  const { t } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={t.whyMe.eyebrow} title={t.whyMe.title} />
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-white/10" data-reveal-child>
            <OptimizedImage
              src={consultantPhoto}
              alt={t.course.trainer.name}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="h-auto w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <div className="lg:col-span-2" data-reveal-child>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="mct-eyebrow h-auto w-1/2 px-0 py-3 pr-6 text-on-dark-tertiary">
                    {t.whyMe.headers.them}
                  </TableHead>
                  <TableHead className="mct-eyebrow h-auto w-1/2 px-0 py-3 text-electric">
                    {t.whyMe.headers.me}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {t.whyMe.rows.map((row) => (
                  <TableRow key={row.me} className="border-white/10 hover:bg-transparent">
                    <TableCell className="px-0 py-4 pr-6 align-top text-base text-dim">{row.them}</TableCell>
                    <TableCell className="px-0 py-4 align-top text-base font-medium text-on-dark">
                      <span className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                        {row.me}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
