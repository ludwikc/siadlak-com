export declare const COURSE_SLUGS: readonly [
  "ab-731",
  "ms-4014",
  "pl-7008",
  "copilot-studio-agents",
  "dp-600",
  "dp-605",
  "dp-700",
  "dp-300",
  "dp-080",
  "tsql-performance",
];

export type MctPaths = {
  hub: string;
  courses: string;
  briefing: string;
  enterprise: string;
};

export declare const MCT_PATHS: Record<"en" | "pl", MctPaths>;

export declare function mctRoutes(): string[];
