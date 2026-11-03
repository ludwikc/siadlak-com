import type { CourseSlug } from "./types";

export const copilotPathways: Array<{
  audience: string;
  title: string;
  description: string;
  courseSlug: CourseSlug;
  outcomeIndices: number[];
  cta: string;
}> = [
  {
    audience: "For leaders & transformation teams",
    title: "Make the right AI investment.",
    description: "Microsoft 365 Copilot, Copilot Studio or Foundry? Start with business value, risk and a plan your board can approve.",
    courseSlug: "ab-731",
    outcomeIndices: [1, 3, 5],
    cta: "Explore AI strategy",
  },
  {
    audience: "For IT, analysts & M365 admins",
    title: "Build your first working agent.",
    description: "Move beyond AI demos. Choose the right Microsoft platform and build an agent grounded on your own SharePoint content.",
    courseSlug: "ms-4014",
    outcomeIndices: [1, 2, 3],
    cta: "Explore agent foundations",
  },
  {
    audience: "For makers, architects & platform owners",
    title: "Connect Copilot to your business.",
    description: "A hands-on Copilot Studio programme on your systems, with testing, a security review and an operational handover.",
    courseSlug: "copilot-studio-agents",
    outcomeIndices: [1, 3, 4],
    cta: "Explore Copilot Studio",
  },
];

export const pathwayCopy = {
  eyebrow: "Microsoft Copilot & AI learning pathways",
  title: "Turn AI ambition into team capability.",
  sub: "Choose the skills your organisation needs next. Practical Microsoft training for the people who decide, build and deliver.",
  price: "Starting at {price} / seat · {days} · net",
  customTitle: "Different roles. One rollout.",
  customBody: "Combine courses into a private programme for your team. Remote or on-site, English or Polish.",
  customCta: "Plan your team's training",
  allCourses: "Browse all Microsoft courses",
};