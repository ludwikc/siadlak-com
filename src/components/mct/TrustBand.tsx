import { brandLogos, textChips } from "@/config/mct/clients";
import { useReveal } from "@/hooks/use-reveal";
import { useMct } from "./MctContext";
import { chipClass } from "./mct-styles";

export default function TrustBand() {
  const { t } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-reveal border-y border-white/10 bg-mct-navy-elevated py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <p className="mct-eyebrow m-0 text-electric" data-reveal-child>
          {t.trust.eyebrow}
        </p>
        <ul className="m-0 flex list-none flex-wrap items-center gap-x-10 gap-y-6 p-0" data-reveal-child>
          {brandLogos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-6 w-auto opacity-60 transition-opacity hover:opacity-90 md:h-7"
              />
            </li>
          ))}
        </ul>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0" data-reveal-child>
          {textChips.map((name) => (
            <li key={name} className={chipClass}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
