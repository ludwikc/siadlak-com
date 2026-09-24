import { clientWall } from "@/config/mct/clients";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import { chipClass } from "./mct-styles";

const names = Object.values(clientWall).flat();

export default function ClientMarquee() {
  const { t } = useMct();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mct-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="mct-marquee-track flex w-max">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              aria-label={duplicate ? undefined : t.trust.eyebrow}
              aria-hidden={duplicate || undefined}
              className="m-0 flex list-none gap-8 p-0 pr-8"
            >
              {names.map((name) => (
                <li key={name} className={cn(chipClass, "whitespace-nowrap")}>
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
