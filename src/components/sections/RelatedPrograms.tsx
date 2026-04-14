import { Link } from "react-router-dom";

interface ProgramLink {
  title: string;
  path: string;
  description: string;
}

const allPrograms: ProgramLink[] = [
  {
    title: "Produktywno\u015B\u0107",
    path: "/program/produktywnosc",
    description: "Zmiana sposobu my\u015Blenia o czasie, energii i prokrastynacji",
  },
  {
    title: "Silna G\u0142owa",
    path: "/program/odpornosc",
    description: "Firewall mentalny \u2014 presja jako paliwo, nie parali\u017C",
  },
  {
    title: "Uwa\u017Cne \u017Cycie",
    path: "/program/uwaznosc",
    description: "Uwa\u017Cno\u015B\u0107 dla analitycznych umys\u0142\u00F3w i os\u00F3b z ADHD",
  },
  {
    title: "M\u0119ski Kompas",
    path: "/program/meskosc",
    description: "System nawigacji \u017Cyciowej dla m\u0119\u017Cczyzn 30+",
  },
  {
    title: "Life OS: System Upgrade",
    path: "/program/lifeos-system-upgrade",
    description: "8-tygodniowy mentoring 1:1 \u2014 pe\u0142na reinstalacja",
  },
];

export default function RelatedPrograms({ currentPath }: { currentPath: string }) {
  const related = allPrograms.filter(p => p.path !== currentPath);

  return (
    <section className="py-12 md:py-16 bg-void-glow">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-2">
          Nie wiesz, czy to w\u0142a\u015Bciwy program?
        </h2>
        <p className="text-dim text-sm mb-8">
          Ka\u017Cda Aplikacja Mentalna rozwi\u0105zuje inny problem. Zobacz, kt\u00F3ra pasuje do Ciebie:
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
          Nie wiesz, od czego zacz\u0105\u0107?{" "}
          <Link to="/discovery" className="text-electric hover:underline">
            Um\u00F3w bezp\u0142atn\u0105 Sesj\u0119 Discovery
          </Link>{" "}
          \u2014 30 minut, w kt\u00F3rych razem ustalimy, kt\u00F3r\u0119dy i\u015B\u0107.
        </p>
      </div>
    </section>
  );
}
