export const COURSE_SLUGS = ["ab-731","ms-4014","build-agents-copilot-studio","copilot-studio-agents","dp-600","dp-605","dp-700","dp-300","dp-080","tsql-performance"];
export const MCT_PATHS = {
  en: { hub: "/mct", courses: "/mct/courses", briefing: "/mct/executive-briefing", enterprise: "/mct/enterprise" },
  pl: { hub: "/szkolenia", courses: "/szkolenia/kursy", briefing: "/szkolenia/briefing-dla-zarzadu", enterprise: "/szkolenia/enterprise" },
};
export const mctRoutes = () =>
  Object.values(MCT_PATHS).flatMap((p) => [p.hub, p.briefing, p.enterprise, ...COURSE_SLUGS.map((s) => `${p.courses}/${s}`)]);
