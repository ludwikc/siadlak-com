type SectionHeadProps = { eyebrow: string; title: string; sub?: string; note?: string };

export default function SectionHead({ eyebrow, title, sub, note }: SectionHeadProps) {
  return (
    <div className="mb-12 max-w-3xl" data-reveal-child>
      <p className="mct-eyebrow mt-0 mb-3 text-electric">{eyebrow}</p>
      <h2 className="m-0 text-3xl font-bold leading-tight text-on-dark md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 mb-0 text-lg leading-relaxed text-dim">{sub}</p>}
      {note && <p className="mt-4 mb-0 text-sm text-on-dark-tertiary">{note}</p>}
    </div>
  );
}
