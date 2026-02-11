import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import { Helmet } from "react-helmet-async";
import { Mail, Phone } from "lucide-react";

/* ── design tokens (inline, page-scoped) ────────────────────────── */
const t = {
  bg:      "#0a0a0b",
  surface: "#111113",
  border:  "#27272a",
  text:    "#fafafa",
  muted:   "#a1a1aa",
  accent:  "#3b82f6",
  green:   "#22c55e",
  mono:    "'JetBrains Mono', monospace",
  sans:    "'Inter', system-ui, sans-serif",
} as const;

/* ── tiny helpers ───────────────────────────────────────────────── */
const Tag = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded px-2 py-0.5 text-xs font-medium"
    style={{
      fontFamily: t.mono,
      background: `${t.accent}18`,
      color: t.accent,
      border: `1px solid ${t.accent}30`,
    }}
  >
    {children}
  </span>
);

const SectionHeader = ({ children }: { children: string }) => (
  <p
    className="mb-6 text-sm tracking-wider uppercase"
    style={{ fontFamily: t.mono, color: t.muted }}
  >
    {children}
  </p>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div
    className="rounded-lg px-6 py-5 text-center"
    style={{ background: t.surface, border: `1px solid ${t.border}` }}
  >
    <div
      className="text-3xl font-bold mb-1"
      style={{ fontFamily: t.mono, color: t.text }}
    >
      {value}
    </div>
    <div className="text-sm" style={{ color: t.muted }}>
      {label}
    </div>
  </div>
);

/* ── data ────────────────────────────────────────────────────────── */
const clients = {
  "Enterprise & Corporate": [
    "Unilever","Hewlett-Packard","Thomson-Reuters","General Motors",
    "General Electric","Volkswagen","Volvo","Scania","Nordea","DNB",
    "ING","Tikkurila",
  ],
  "Defense & Government": [
    "NATO","US Army Europe","US Army Africa","US Navy","US Marines",
    "Department of Defense","Army of Poland","Police of Norway",
    "Police of Poland","Ministry of Finance","Customs Service",
    "Ministry of Administration and Internal Affairs",
  ],
  "Education & Technology": [
    "Oxford University","Oslo University","Asseco","Bisnode",
    "ITmagination","Sygnity",
  ],
  "Training Partners": [
    "Glasspaper","Global Knowledge","Asseco Data Academy",
    "ABC Data","Combidata","Softronic","Action Education",
  ],
} as const;

const courses = [
  { track: "AI & Business", items: "AI-3017 AI for Business Leaders · AI-3018 Copilot Foundations" },
  { track: "Microsoft Fabric", items: "DP-600 · DP-601 · DP-602 · DP-603 · DP-604 · DP-605 — The complete Fabric & Power BI path" },
  { track: "Data Engineering", items: "DP-203 Azure Data Engineering · DP-080 T-SQL · DP-3012 Synapse" },
  { track: "Data & SQL", items: "DP-300 Administering Azure SQL · DP-3001 Migration · DP-900 Fundamentals" },
  { track: "Copilot & M365", items: "MS-4004 through MS-4012 — Adoption, Prompting, Executive Experience & Development" },
  { track: "Power BI", items: "PL-300 Power BI Data Analyst" },
];

const comparison = [
  ["Read the official courseware", "Wrote custom training programs for NATO"],
  ["Teach features", "Teaches systems that survive production"],
  ["Know the current version", "Trained every generation since SQL Server 2000"],
  ["Deliver in a lab", "Has consulted for Fortune 500 and military orgs"],
  ["Speak one language to one audience", "Switches between deep T-SQL and C-level strategy in the same day"],
];

const whyCards: { title: string; badge?: string; body: string }[] = [
  {
    title: "Oxford-Trained, Production-Hardened",
    body: "Started at University of Oxford at 21. Built the foundation in computing and psychology — which means I understand both the systems and the people using them. Full Microsoft certification stack: MCP, MCS, MS, MOS, MCSA, MCSE, MCTS, MCITP, MCT.",
  },
  {
    title: "Two Decades of Full-Stack Context",
    badge: "2004 → 2025",
    body: "SQL Server 2000 → 2005 → 2008 → 2012 → 2014 → Azure SQL → Fabric. I didn't read about the evolution of the Microsoft data stack. I trained engineers through every single generation of it. When I teach architecture decisions, I teach from scar tissue, not slide decks.",
  },
  {
    title: "Engineer ↔ Executive in the Same Day",
    body: "Debug T-SQL at 10am. Present AI transformation roadmap to the board at 2pm. Your team gets the depth. Leadership gets the clarity. Same trainer, same week, zero context lost.",
  },
  {
    title: "The Rooms I've Trained",
    body: "Most trainers have delivered for a handful of companies. I've trained engineers at Unilever, HP, General Motors, General Electric, Volkswagen, and Volvo. I've delivered classified sessions for NATO, US Army Europe, US Navy, and the US Marines. I've worked with the Norwegian Police, the Polish Department of Defense, and multiple government ministries. 50+ countries. Two languages. The rooms I've been in are my resume.",
  },
  {
    title: "Battle-Tested, Not Lab-Tested",
    body: "I'm a founder and consultant, not a professional slide reader. Every session I deliver draws from production experience. Your team learns systems that survive Monday morning, not just certification day.",
  },
  {
    title: "Global, Flexible, Ready",
    body: "Full professional fluency in English and Polish. Remote and on-site. Timezone-flexible across Europe, US, and Middle East. Currently delivering through Glasspaper, Global Knowledge, and Asseco Data Academy.",
  },
];

const stacks = [
  {
    icon: "⚡",
    title: "AI & Microsoft Copilot",
    body: "Strategic AI transformation that drives ROI, not PowerPoint decks. Prompt engineering governance and standards. Custom Copilot plugin & connector development. Executive workshops for leadership teams who need to understand AI without the hype.",
    tags: ["Copilot Studio","Plugins","Connectors","Governance","Prompt Engineering","ROI Strategy"],
  },
  {
    icon: "◆",
    title: "Data & Analytics",
    body: "Lakehouse and Data Warehouse architecture in Microsoft Fabric. End-to-end data pipelines with Azure Synapse and Real-Time Intelligence. Predictive modeling and ML. Power BI reporting that actually changes how your org makes decisions.",
    tags: ["Microsoft Fabric","Azure Synapse","Power BI","Azure SQL","Lakehouse","Real-Time Intelligence","ML"],
  },
  {
    icon: "▣",
    title: "Modern Work & M365",
    body: "Scaling Microsoft 365 adoption across your org. System-based productivity frameworks. Workflow automation that reclaims hundreds of hours per quarter. I don't teach features — I teach systems that make teams faster.",
    tags: ["Microsoft 365","Adoption at Scale","Automation","Workflows","Productivity Systems"],
  },
];

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function MCT() {
  return (
    <>
      <Helmet>
        <title>Ludwik C. Siadlak — Microsoft Certified Trainer</title>
        <meta
          name="description"
          content="20+ years MCT. 10,000+ engineers trained across Fortune 500 and NATO. Microsoft Fabric, Copilot, Azure Data, Power BI."
        />
      </Helmet>

      <div
        className="min-h-screen"
        style={{ background: t.bg, color: t.text, fontFamily: t.sans }}
      >
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: `radial-gradient(circle, ${t.accent}, transparent 70%)` }}
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            {/* status badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-8"
              style={{
                fontFamily: t.mono,
                background: `${t.green}12`,
                border: `1px solid ${t.green}30`,
                color: t.green,
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: t.green }} />
              Available for Q2/Q3 2026
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight mb-8"
              style={{ color: t.text }}
            >
              The trainer behind 10,000+ Microsoft certifications across Fortune&nbsp;500 and&nbsp;NATO.
            </h1>

            <p
              className="max-w-3xl text-lg md:text-xl leading-relaxed mb-14"
              style={{ color: t.muted }}
            >
              I've spent 20&nbsp;years training two kinds of rooms: boardrooms at Unilever,
              HP, and General Motors — and classified briefing rooms for NATO, US&nbsp;Army
              Europe, Norwegian Police and the US&nbsp;Marines. If your team is deploying
              Fabric or Copilot in&nbsp;2026, I'll make sure they ship production, not just
              pass a&nbsp;cert.
            </p>

            {/* stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="20+" label="Years MCT" />
              <StatCard value="10K+" label="Engineers Trained" />
              <StatCard value="8+" label="Countries" />
              <StatCard value="30+" label="Microsoft Courses" />
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY (logo wall) ───────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader>// trusted by</SectionHeader>

            <div className="grid gap-12 md:gap-16">
              {Object.entries(clients).map(([category, names]) => (
                <div key={category}>
                  <p
                    className="text-xs tracking-widest uppercase mb-5"
                    style={{ color: t.muted, fontFamily: t.mono }}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {names.map((name) => (
                      <span
                        key={name}
                        className="rounded-md px-4 py-2 text-sm font-medium"
                        style={{
                          fontFamily: t.mono,
                          background: t.surface,
                          border: `1px solid ${t.border}`,
                          color: t.text,
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE STACK ───────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader>// what I train</SectionHeader>

            <div className="grid gap-8 md:gap-10">
              {stacks.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl p-6 md:p-8"
                  style={{ background: t.surface, border: `1px solid ${t.border}` }}
                >
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{ color: t.text }}
                  >
                    <span className="mr-3">{s.icon}</span>
                    {s.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: t.muted }}
                  >
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICIAL CURRICULUM ──────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader>// certified courses I deliver</SectionHeader>

            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th
                      className="text-xs uppercase tracking-widest py-3 pr-6"
                      style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}
                    >
                      Track
                    </th>
                    <th
                      className="text-xs uppercase tracking-widest py-3"
                      style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}
                    >
                      Courses
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c.track}>
                      <td
                        className="py-4 pr-6 font-medium whitespace-nowrap align-top"
                        style={{ color: t.accent, fontFamily: t.mono, borderBottom: `1px solid ${t.border}22` }}
                      >
                        {c.track}
                      </td>
                      <td
                        className="py-4 leading-relaxed"
                        style={{ color: t.muted, borderBottom: `1px solid ${t.border}22` }}
                      >
                        {c.items}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-sm" style={{ color: t.muted }}>
              Plus custom-tailored workshops built around your team's specific stack and deployment timeline.
            </p>
          </div>
        </section>

        {/* ── WHY THIS TRAINER ─────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader>// why not the other guy</SectionHeader>

            <div className="grid gap-6 md:grid-cols-2">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-6 md:p-8"
                  style={{ background: t.surface, border: `1px solid ${t.border}` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <h3 className="text-lg font-bold" style={{ color: t.text }}>
                      {card.title}
                    </h3>
                    {card.badge && (
                      <span
                        className="shrink-0 rounded px-2 py-0.5 text-xs font-medium"
                        style={{
                          fontFamily: t.mono,
                          background: `${t.green}18`,
                          color: t.green,
                          border: `1px solid ${t.green}30`,
                        }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: t.muted }}>
                    {card.body}
                  </p>

                  {/* SQL version chain for the timeline card */}
                  {card.badge && (
                    <div
                      className="mt-5 flex flex-wrap items-center gap-1 text-xs"
                      style={{ fontFamily: t.mono, color: t.accent }}
                    >
                      {["SQL 2000","2005","2008","2012","2014","Azure SQL","Fabric"].map((v, i, a) => (
                        <span key={v} className="flex items-center gap-1">
                          <span
                            className="rounded px-1.5 py-0.5"
                            style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}25` }}
                          >
                            {v}
                          </span>
                          {i < a.length - 1 && <span style={{ color: t.border }}>→</span>}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE DIFFERENCE ───────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader>// the difference</SectionHeader>

            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th
                      className="text-xs uppercase tracking-widest py-3 pr-6 w-1/2"
                      style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}
                    >
                      Most Microsoft trainers
                    </th>
                    <th
                      className="text-xs uppercase tracking-widest py-3 w-1/2"
                      style={{ color: `${t.accent}`, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}
                    >
                      Ludwik
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([them, me], i) => (
                    <tr key={i}>
                      <td
                        className="py-4 pr-6 align-top"
                        style={{ color: `${t.muted}99`, borderBottom: `1px solid ${t.border}22` }}
                      >
                        {them}
                      </td>
                      <td
                        className="py-4 align-top font-medium"
                        style={{ color: t.text, borderBottom: `1px solid ${t.border}22` }}
                      >
                        {me}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionHeader>// let's talk</SectionHeader>

            <h2
              className="text-2xl md:text-4xl font-bold mb-6"
              style={{ color: t.text }}
            >
              Your next training should actually change something.
            </h2>

            <p className="leading-relaxed mb-12" style={{ color: t.muted }}>
              Fabric deep-dive. Copilot rollout. AI&nbsp;strategy for the C-suite.
              Custom engineering workshop. Tell me what your team needs —
              I'll tell you exactly what I'd build and whether I'm the right fit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:ludwikc@siadlak.email"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:brightness-110"
                style={{ background: t.accent, color: "#fff" }}
              >
                <Mail className="w-4 h-4" />
                ludwikc@siadlak.email
              </a>
              <a
                href="tel:+48510666531"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium transition-all duration-200 hover:brightness-110"
                style={{ background: t.surface, border: `1px solid ${t.border}`, color: t.text }}
              >
                <Phone className="w-4 h-4" />
                +48 510 666 531
              </a>
            </div>

            <p className="text-xs" style={{ color: t.muted, fontFamily: t.mono }}>
              DE: +49 162 833 2261 · Response time: typically within 24 hours.
            </p>
            <p className="text-xs mt-1" style={{ color: t.muted }}>
              I'll ask about your team size, tech stack, and timeline. No sales calls. No fluff. Just scope and fit.
            </p>
          </div>
        </section>

        {/* ── footer ───────────────────────────────────────────── */}
        <footer
          className="py-8 text-center text-xs"
          style={{ borderTop: `1px solid ${t.border}`, color: t.muted }}
        >
          <p>© {new Date().getFullYear()} Ludwik C. Siadlak · Microsoft Certified Trainer</p>
        </footer>
      </div>
    </>
  );
}
