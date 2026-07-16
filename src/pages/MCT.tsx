import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ChevronDown, Mail, Phone, X } from "lucide-react";
import MCTSocialProof from "@/components/mct/MCTSocialProof";
import consultantPhoto from "@/assets/Ludwik C. Siadlak-bw-consultant.webp?w=400;800&format=avif;webp&as=picture";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import unileverLogo from "@/assets/logos/unilever.svg";
import hpLogo from "@/assets/logos/hp.svg";
import gmLogo from "@/assets/logos/gm.svg";
import geLogo from "@/assets/logos/ge.svg";
import volkswagenLogo from "@/assets/logos/volkswagen.svg";
import volvoLogo from "@/assets/logos/volvo.svg";
import scaniaLogo from "@/assets/logos/scania.svg";

/* ── conversion funnel: page → scoping form → book-a-call ───────── */
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScgmwMxhOcy0QyXyXeyjLH4NneRFgJhO3FKyrJNiqNafHfXzA/viewform";
const CALL_URL = "https://calendar.app.google/HfZb2pjWRUt5tRxV8";
const EMAIL = "ludwikc@siadlak.email";
const PHONE_PL = "+48510666531";
const PHONE_DE = "+49 162 833 2261";

/* Scarcity. `cap` is the real per-quarter limit — when set, it renders a
   sharper, honest scarcity line. Until then only the soft badge shows. */
const availability = {
  badge: "Available for Q2/Q3 2026",
  cap: "", // e.g. "Only 4 corporate engagements per quarter"
};

/* ── design tokens (inline, page-scoped) ────────────────────────── */
const t = {
  bg:      "hsl(240 5% 4%)",
  surface: "hsl(240 6% 7%)",
  border:  "hsl(240 4% 16%)",
  text:    "hsl(0 0% 98%)",
  muted:   "hsl(240 5% 65%)",
  accent:  "hsl(217 91% 60%)",
  green:   "hsl(142 71% 45%)",
  red:     "hsl(0 91% 71%)",
  mono:    "'JetBrains Mono', monospace",
  sans:    "'Inter', system-ui, sans-serif",
} as const;

/* ── data ────────────────────────────────────────────────────────── */
const brandLogos = [
  { name: "Unilever", src: unileverLogo },
  { name: "Hewlett-Packard", src: hpLogo },
  { name: "General Motors", src: gmLogo },
  { name: "General Electric", src: geLogo },
  { name: "Volkswagen", src: volkswagenLogo },
  { name: "Volvo", src: volvoLogo },
  { name: "Scania", src: scaniaLogo },
];

const stats = [
  { value: "20+", label: "Years MCT" },
  { value: "10K+", label: "Engineers Trained" },
  { value: "8+",  label: "Countries" },
  { value: "30+", label: "Microsoft Courses" },
];

const problems = [
  "Your team passes the exam - then can't apply any of it in production.",
  "The \"trainer\" reads the official slides aloud. Your team could've done that alone.",
  "Six months later the new tool is shelfware, and the training budget is gone.",
  "Generic courseware ignores your actual stack, your actual rollout, your actual deadline.",
];

const stacks = [
  {
    icon: "⚡",
    title: "AI & Microsoft Copilot",
    outcome: "Leadership stops guessing about AI - and your team ships Copilot people actually use.",
    body: "Strategic AI transformation that drives ROI, not slide decks. Prompt-engineering governance. Custom Copilot plugin & connector development. Executive workshops without the hype.",
    tags: ["Copilot Studio", "Plugins", "Connectors", "Governance", "Prompt Engineering", "ROI Strategy"],
  },
  {
    icon: "◆",
    title: "Data & Analytics",
    outcome: "Your data team ships lakehouses and reports that change decisions - not dashboards nobody opens.",
    body: "Lakehouse and warehouse architecture in Microsoft Fabric. End-to-end pipelines with Azure Synapse and Real-Time Intelligence. Predictive modeling. Power BI that actually moves the org.",
    tags: ["Microsoft Fabric", "Azure Synapse", "Power BI", "Azure SQL", "Lakehouse", "Real-Time Intelligence", "ML"],
  },
  {
    icon: "▣",
    title: "Modern Work & M365",
    outcome: "Your org adopts M365 at scale and reclaims hundreds of hours a quarter in automation.",
    body: "Microsoft 365 adoption across the org. System-based productivity frameworks. Workflow automation that gives time back. I don't teach features - I teach systems that make teams faster.",
    tags: ["Microsoft 365", "Adoption at Scale", "Automation", "Workflows", "Productivity Systems"],
  },
];

const whyCards: { title: string; badge?: string; body: string }[] = [
  {
    title: "Two Decades of Full-Stack Context",
    badge: "2004 → 2025",
    body: "SQL Server 2000 → Azure SQL → Fabric. I didn't read about the evolution of the Microsoft data stack - I trained engineers through every generation of it. Oxford-trained at 21 in computing and psychology, so I teach the systems and the people using them.",
  },
  {
    title: "The Rooms I've Trained",
    body: "Unilever, HP, General Motors, GE, Volkswagen, Volvo. Classified sessions for NATO, US Army Europe, the US Navy and the Marines. The Norwegian Police, the Polish Department of Defense, government ministries. 8+ countries, two languages. The rooms I've been in are my resume.",
  },
  {
    title: "Engineer ↔ Executive in the Same Day",
    body: "Debug T-SQL at 10am. Present an AI transformation roadmap to the board at 2pm. Your team gets the depth. Leadership gets the clarity. Same week, zero context lost.",
  },
  {
    title: "Battle-Tested, Not Lab-Tested",
    body: "I'm a founder and consultant, not a professional slide-reader. Every session draws from production experience. Your team learns systems that survive Monday morning - not just certification day.",
  },
];

const comparison = [
  ["Read the official courseware", "Wrote custom training programs for NATO"],
  ["Teach features", "Teaches systems that survive production"],
  ["Know the current version", "Trained every generation since SQL Server 2000"],
  ["Deliver in a lab", "Has consulted for Fortune 500 and military orgs"],
  ["Speak one language to one audience", "Switches between deep T-SQL and C-level strategy in the same day"],
];

const clients = {
  "Defense & Government": [
    "NATO","US Army Europe","US Army Africa","US Navy","US Marines",
    "Department of Defense","Army of Poland","Police of Norway",
    "Police of Poland","Ministry of Finance","Customs Service",
    "Ministry of Administration and Internal Affairs",
  ],
  "Enterprise & Corporate": [
    "Unilever","Hewlett-Packard","Thomson-Reuters","General Motors",
    "General Electric","Volkswagen","Volvo","Scania","Nordea","DNB",
    "ING","Tikkurila",
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

const processSteps = [
  {
    step: "01",
    title: "Tell me your stack & timeline",
    body: "A two-minute form. Team size, the tools you run, what you're deploying, and when.",
  },
  {
    step: "02",
    title: "20-minute scope call",
    body: "We pin down exactly what your team needs. No sales pitch - if I'm not the right fit, I'll tell you.",
  },
  {
    step: "03",
    title: "A program built around you",
    body: "Custom-built for your tools and your rollout - not off-the-shelf courseware.",
  },
  {
    step: "04",
    title: "Delivery that sticks",
    body: "Remote or on-site. English or Polish. Across EU, US & the Middle East. Your team ships production - not just certs.",
  },
];

const courses = [
  { track: "AI & Business", items: "AI-3017 AI for Business Leaders · AI-3018 Copilot Foundations" },
  { track: "Microsoft Fabric", items: "DP-600 · DP-601 · DP-602 · DP-603 · DP-604 · DP-605 - The complete Fabric & Power BI path" },
  { track: "Data Engineering", items: "DP-203 Azure Data Engineering · DP-080 T-SQL · DP-3012 Synapse" },
  { track: "Data & SQL", items: "DP-300 Administering Azure SQL · DP-3001 Migration · DP-900 Fundamentals" },
  { track: "Copilot & M365", items: "MS-4004 through MS-4012 - Adoption, Prompting, Executive Experience & Development" },
  { track: "Power BI", items: "PL-300 Power BI Data Analyst" },
];

/* ── reusable bits ──────────────────────────────────────────────── */
const Tag = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded px-2 py-0.5 text-xs font-medium"
    style={{ fontFamily: t.mono, background: `${t.accent}18`, color: t.accent, border: `1px solid ${t.accent}30` }}
  >
    {children}
  </span>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-lg px-6 py-5 text-center" style={{ background: t.surface, border: `1px solid ${t.border}` }}>
    <div className="text-3xl font-bold mb-1" style={{ fontFamily: t.mono, color: t.text }}>{value}</div>
    <div className="text-sm" style={{ color: t.muted }}>{label}</div>
  </div>
);

const SectionHead = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div className="mb-12 max-w-3xl">
    <p className="mb-3 text-sm tracking-wider uppercase" style={{ fontFamily: t.mono, color: t.accent }}>{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: t.text }}>{title}</h2>
    {sub && <p className="mt-4 text-lg leading-relaxed" style={{ color: t.muted }}>{sub}</p>}
  </div>
);

const PrimaryCTA = ({ label = "Get your team's training plan", className = "" }: { label?: string; className?: string }) => (
  <a
    href={FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 text-base font-semibold transition-all duration-200 hover:brightness-110 ${className}`}
    style={{ background: t.accent, color: "#fff" }}
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </a>
);

const CallLink = ({ className = "" }: { className?: string }) => (
  <a
    href={CALL_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-sm underline-offset-4 hover:underline ${className}`}
    style={{ color: t.muted }}
  >
    or book a 20-min call</a>
);

/* Slim CTA bar that slides in after the hero and hides near the final CTA. */
function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.offsetHeight - 900;
      setShow(window.scrollY > 600 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        style={{ background: `${t.surface}f2`, borderTop: `1px solid ${t.border}`, backdropFilter: "blur(8px)" }}
      >
        <p className="hidden text-sm sm:block" style={{ color: t.text }}>
          Deploying Fabric or Copilot in 2026?{" "}
          <span style={{ color: t.accent }}>Let's scope it.</span>
        </p>
        <div className="flex flex-1 items-center justify-end gap-3">
          <PrimaryCTA label="Get a training plan" className="!px-5 !py-2.5 !text-sm flex-1 sm:flex-none" />
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="shrink-0 rounded p-1.5 transition-colors hover:brightness-150"
            style={{ color: t.muted }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Full Microsoft course list — collapsed so it never breaks the skim. */
function CourseList() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 hover:brightness-125"
        style={{ background: t.surface, border: `1px solid ${t.border}`, color: t.text, fontFamily: t.mono }}
      >
        {open ? "Hide the full course list" : "See the full certified course list (30+ courses)"}
        <ChevronDown
          className="h-4 w-4 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      {open && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="py-3 pr-6 text-xs uppercase tracking-widest" style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}>Track</th>
                <th className="py-3 text-xs uppercase tracking-widest" style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}>Courses</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.track}>
                  <td className="py-4 pr-6 align-top font-medium whitespace-nowrap" style={{ color: t.accent, fontFamily: t.mono, borderBottom: `1px solid ${t.border}22` }}>{c.track}</td>
                  <td className="py-4 leading-relaxed" style={{ color: t.muted, borderBottom: `1px solid ${t.border}22` }}>{c.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-sm" style={{ color: t.muted }}>
            Plus custom workshops built around your team's specific stack and deployment timeline.
          </p>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function MCT() {
  return (
    <>
      <Helmet>
        <title>Microsoft Certified Trainer for Fabric, Copilot & AI - Ludwik C. Siadlak</title>
        <meta
          name="description"
          content="20+ years MCT. 10,000+ engineers trained across Fortune 500 and NATO. Custom Microsoft Fabric, Copilot, Azure Data & Power BI training that ships production - not just certs."
        />
      </Helmet>

      <div className="min-h-screen" style={{ background: t.bg, color: t.text, fontFamily: t.sans }}>
        <StickyCTA />

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.07]"
            style={{ background: `radial-gradient(circle, ${t.accent}, transparent 70%)` }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-12">
              {/* text */}
              <div className="flex-1">
                <div
                  className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
                  style={{ fontFamily: t.mono, background: `${t.green}12`, border: `1px solid ${t.green}30`, color: t.green }}
                >
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: t.green }} />
                  {availability.badge}
                </div>

                <h1
                  className="mb-8 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]"
                  style={{ color: t.text }}
                >
                  The trainer behind 10,000+ Microsoft certifications across Fortune&nbsp;500 and&nbsp;NATO.
                </h1>

                <p className="mb-10 max-w-3xl text-lg leading-relaxed md:text-xl" style={{ color: t.muted }}>
                  20&nbsp;years. Two kinds of rooms - boardrooms at Unilever, HP and General&nbsp;Motors,
                  and classified briefings for NATO, the US&nbsp;Navy and the Marines. If your team is
                  deploying Fabric or Copilot in&nbsp;2026,{" "}
                  <span className="font-semibold" style={{ color: t.text }}>
                    I'll make sure they ship production, not just pass a&nbsp;cert.
                  </span>
                </p>

                <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <PrimaryCTA />
                  <CallLink />
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {stats.map((s) => (
                    <StatCard key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>
              </div>

              {/* photo */}
              <div className="hidden w-[320px] shrink-0 items-end justify-end md:flex lg:w-[380px]">
                <OptimizedImage
                  src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                  alt="Ludwik C. Siadlak"
                  width={1000}
                  height={1600}
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto max-h-[600px] w-full object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAND ───────────────────────────────────────── */}
        <section style={{ borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, background: t.surface }}>
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-7 md:flex-row md:items-center md:gap-10">
            <p className="text-xs uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: t.mono, color: t.muted }}>
              Trusted to train teams at
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:gap-x-10">
              {brandLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="h-6 w-auto opacity-50 transition-opacity duration-200 hover:opacity-90 md:h-7"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM (agitate) ────────────────────────────────── */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHead
              eyebrow="// the problem"
              title="Most Microsoft training is forgotten by Monday."
              sub="You're not buying slides. You're buying a team that can actually run the thing you just bought. Here's where it usually goes wrong:"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {problems.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-xl p-5"
                  style={{ background: t.surface, border: `1px solid ${t.border}` }}
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0" style={{ color: t.red }} />
                  <p className="leading-relaxed" style={{ color: t.muted }}>{p}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xl font-semibold md:text-2xl" style={{ color: t.text }}>
              I've spent 20 years building the opposite of that.
            </p>
          </div>
        </section>

        {/* ── WHAT YOUR TEAM GETS ──────────────────────────────── */}
        <section className="py-20" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHead
              eyebrow="// what your team gets"
              title="Three stacks. One outcome: your team ships."
              sub="Pick the track your rollout needs - or combine them. Every engagement is built around your tools and your timeline."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {stacks.map((s) => (
                <div key={s.title} className="flex flex-col rounded-xl p-6 md:p-8" style={{ background: t.surface, border: `1px solid ${t.border}` }}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: t.text }}>{s.title}</h3>
                  </div>
                  <p className="mb-4 text-lg font-semibold leading-snug" style={{ color: t.text }}>{s.outcome}</p>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: t.muted }}>{s.body}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {s.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <PrimaryCTA label="Tell me what your team needs" />
              <CallLink />
            </div>
          </div>
        </section>

        {/* ── WHY ME ───────────────────────────────────────────── */}
        <section className="py-20" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHead
              eyebrow="// why me"
              title="Most trainers read the courseware. I wrote it for NATO."
            />

            <div className="flex flex-col gap-10 lg:flex-row">
              {/* portrait */}
              <div className="lg:w-[34%] lg:shrink-0">
                <div className="sticky top-8">
                  <div className="relative overflow-hidden rounded-2xl" style={{ border: `1px solid ${t.border}` }}>
                    <div className="absolute -inset-2 rounded-3xl opacity-20 blur-3xl" style={{ background: `linear-gradient(135deg, ${t.accent}, transparent 70%)` }} />
                    <OptimizedImage
                      src={consultantPhoto}
                      alt="Ludwik C. Siadlak — Microsoft Certified Trainer"
                      width={3388}
                      height={4940}
                      sizes="(max-width: 768px) 100vw, 34vw"
                      className="relative h-auto w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6" style={{ background: `linear-gradient(to top, ${t.bg}ee, transparent)` }}>
                      <p className="text-xs font-medium uppercase tracking-widest" style={{ fontFamily: t.mono, color: t.accent }}>20+ years in tech</p>
                      <p className="mt-1 text-lg font-bold" style={{ color: t.text }}>Floor-to-ceiling expertise.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* differentiators */}
              <div className="grid flex-1 gap-6">
                {whyCards.map((card) => (
                  <div key={card.title} className="rounded-xl p-6 md:p-7" style={{ background: t.surface, border: `1px solid ${t.border}` }}>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold" style={{ color: t.text }}>{card.title}</h3>
                      {card.badge && (
                        <span className="shrink-0 rounded px-2 py-0.5 text-xs font-medium" style={{ fontFamily: t.mono, background: `${t.green}18`, color: t.green, border: `1px solid ${t.green}30` }}>
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed md:text-base" style={{ color: t.muted }}>{card.body}</p>
                    {card.badge && (
                      <div className="mt-5 flex flex-wrap items-center gap-1 text-xs" style={{ fontFamily: t.mono, color: t.accent }}>
                        {["SQL 2000","2005","2008","2012","2014","Azure SQL","Fabric"].map((v, i, a) => (
                          <span key={v} className="flex items-center gap-1">
                            <span className="rounded px-1.5 py-0.5" style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}25` }}>{v}</span>
                            {i < a.length - 1 && <span style={{ color: t.border }}></span>}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* the difference */}
            <div className="mt-16">
              <p className="mb-6 text-sm uppercase tracking-wider" style={{ fontFamily: t.mono, color: t.accent }}>// the difference</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                  <thead>
                    <tr>
                      <th className="w-1/2 py-3 pr-6 text-xs uppercase tracking-widest" style={{ color: t.muted, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}>Most Microsoft trainers</th>
                      <th className="w-1/2 py-3 text-xs uppercase tracking-widest" style={{ color: t.accent, fontFamily: t.mono, borderBottom: `1px solid ${t.border}` }}>Ludwik</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(([them, me], i) => (
                      <tr key={i}>
                        <td className="py-4 pr-6 align-top" style={{ color: `${t.muted}99`, borderBottom: `1px solid ${t.border}22` }}>{them}</td>
                        <td className="py-4 align-top font-medium" style={{ color: t.text, borderBottom: `1px solid ${t.border}22` }}>
                          <span className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: t.green }} />
                            {me}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY (full wall) ───────────────────────────── */}
        <section className="py-20" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHead
              eyebrow="// trusted by"
              title="The highest-stakes rooms there are."
              sub="Fortune 500 boardrooms and classified military briefings. The list below is the unedited record."
            />

            <div className="grid gap-10 md:gap-12">
              {Object.entries(clients).map(([category, names]) => (
                <div key={category}>
                  <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: t.muted, fontFamily: t.mono }}>{category}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {names.map((name) => (
                      <span
                        key={name}
                        className="rounded-md px-3.5 py-1.5 text-sm font-medium"
                        style={{ fontFamily: t.mono, background: t.surface, border: `1px solid ${t.border}`, color: t.text }}
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

        {/* ── SOCIAL PROOF ─────────────────────────────────────── */}
        <MCTSocialProof />

        {/* ── MID CTA ──────────────────────────────────────────── */}
        <section className="py-20" style={{ borderTop: `1px solid ${t.border}`, background: t.surface }}>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl" style={{ color: t.text }}>
              Ready to see what this looks like for your team?
            </h2>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <PrimaryCTA />
              <CallLink />
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ──────────────────────────────────────── */}
        <section className="py-20" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHead
              eyebrow="// how we work together"
              title="From first form to team shipping - four steps."
              sub="No drawn-out procurement dance. Here's exactly what happens after you click below."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s) => (
                <div key={s.step} className="rounded-xl p-6" style={{ background: t.surface, border: `1px solid ${t.border}` }}>
                  <div className="mb-3 text-2xl font-bold" style={{ fontFamily: t.mono, color: t.accent }}>{s.step}</div>
                  <h3 className="mb-2 font-bold" style={{ color: t.text }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: t.muted }}>{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <CourseList />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="py-24 md:py-32" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: t.mono, color: t.accent }}>// let's talk</p>

            {availability.cap ? (
              <p className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium" style={{ fontFamily: t.mono, background: `${t.green}12`, border: `1px solid ${t.green}30`, color: t.green }}>
                {availability.cap} · {availability.badge}
              </p>
            ) : (
              <p className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium" style={{ fontFamily: t.mono, background: `${t.green}12`, border: `1px solid ${t.green}30`, color: t.green }}>
                {availability.badge}
              </p>
            )}

            <h2 className="mb-6 text-2xl font-bold md:text-4xl" style={{ color: t.text }}>
              Your next training should actually change something.
            </h2>

            <p className="mb-10 text-lg leading-relaxed" style={{ color: t.muted }}>
              Fabric deep-dive. Copilot rollout. AI&nbsp;strategy for the C-suite. A custom engineering
              workshop. Tell me what your team needs - I'll tell you exactly what I'd build and whether
              I'm the right fit.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-4">
              <PrimaryCTA label="Get your team's training plan" className="w-full sm:w-auto" />
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="text-sm underline-offset-4 hover:underline" style={{ color: t.muted }}>
                Prefer to skip ahead? Book a 20-min scope call</a>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm transition-colors hover:brightness-125" style={{ color: t.muted }}>
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a href={`tel:${PHONE_PL}`} className="inline-flex items-center gap-2 text-sm transition-colors hover:brightness-125" style={{ color: t.muted }}>
                <Phone className="h-4 w-4" /> {PHONE_PL.replace("+48", "+48 ")}
              </a>
            </div>

            <p className="mt-8 text-xs" style={{ color: t.muted, fontFamily: t.mono }}>
              DE: {PHONE_DE} · Response time: typically within 24 hours.
            </p>
            <p className="mt-2 text-xs" style={{ color: t.muted }}>
              No sales calls. No fluff. Just scope and fit.
            </p>
          </div>
        </section>

        {/* ── footer ───────────────────────────────────────────── */}
        <footer className="py-8 text-center text-xs" style={{ borderTop: `1px solid ${t.border}`, color: t.muted }}>
          <p>© {new Date().getFullYear()} Ludwik C. Siadlak · Microsoft Certified Trainer</p>
        </footer>
      </div>
    </>
  );
}
