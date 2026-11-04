import { independentLogos, trustGroups } from "@/config/mct/clients";
import { useReveal } from "@/hooks/use-reveal";
import { useMct } from "./MctContext";
import { chipClass } from "./mct-styles";

export default function TrustBand() {
  const { t, locale } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-trust mct-reveal border-y border-white/10 bg-mct-navy-elevated py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <p className="mct-eyebrow m-0 text-electric" data-reveal-child>
          {t.trust.eyebrow}
        </p>
        {[...trustGroups, { id: "independent", label: null, logos: independentLogos, names: [] }].map((group) => (
        <div key={group.id} className="border-t border-white/10 pt-8" data-reveal-child>
          {group.label && <h3 className="mb-6 text-base font-semibold text-on-dark">{group.label[locale]}</h3>}
        <ul className="mct-client-logos m-0 flex list-none flex-wrap items-center gap-x-10 gap-y-6 p-0">
          {group.logos.map((logo) => (
            <li key={logo.name} className="mct-client-logo">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`${logo.original ? "mct-client-original" : "opacity-60"} ${logo.reverse ? "mct-client-reverse" : ""} ${logo.muted ? "mct-client-muted" : ""} h-6 w-auto transition-opacity hover:opacity-90 md:h-7`}
              />
            </li>
          ))}
        </ul>
        {group.names.length > 0 && <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
          {group.names.map((name) => (
            <li key={name} className={`mct-client-name ${chipClass}`}>
              {name}
            </li>
          ))}
        </ul>}
        </div>
        ))}
      </div>
    </section>
  );
}
