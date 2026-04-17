import { Link } from "react-router-dom";

interface ProgramLink {
  title: string;
  path: string;
  description: string;
}

const allPrograms: ProgramLink[] = [
  {
    title: "Produktywność",
    path: "/program/produktywnosc",
    description: "Zmiana sposobu myślenia o czasie, energii i prokrastynacji",
  },
  {
    title: "Silna Głowa",
    path: "/program/odpornosc",
    description: "Firewall mentalny — presja jako paliwo, nie paraliż",
  },
  {
    title: "Uważne Życie",
    path: "/program/uwaznosc",
    description: "Uważność dla analitycznych umysłów i osób z ADHD",
  },
  {
    title: "Męski Kompas",
    path: "/program/meskosc",
    description: "System nawigacji życiowej dla mężczyzn 30+",
  },
  {
    title: "Life OS: System Upgrade",
    path: "/program/lifeos-system-upgrade",
    description: "8-tygodniowy mentoring 1:1 — pełna reinstalacja",
  },
];

export default function RelatedPrograms({ currentPath }: { currentPath: string }) {
  const related = allPrograms.filter(p => p.path !== currentPath);

  return (
    <section className="py-12 md:py-16 bg-void-glow">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-2">
          Nie wiesz, czy to właściwy program?
        </h2>
        <p className="text-dim text-sm mb-8">
          Każda Aplikacja Mentalna rozwiązuje inny problem. Zobacz, która pasuje do Ciebie:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {related.map(p => (
            <Link
              key={p.path}
              to={p.path}
              className="group block p-5 rounded-md border border-white/10 hover:border-electric/40 transition-colors"
            >
              <p className="text-white font-bold group-hover:text-electric transition-colors mb-1">
                {p.title}
              </p>
              <p className="text-dim text-sm">{p.description}</p>
            </Link>
          ))}
        </div>
        <p className="text-dim text-xs mt-6">
          Nie wiesz, od czego zacząć?{" "}
          <Link to="/discovery" className="text-electric hover:underline">
            Umów bezpłatną Sesję Discovery
          </Link>{" "}
          — 30 minut, w których razem ustalimy, którędy iść.
        </p>
      </div>
    </section>
  );
}
