import { depresja } from "./depresja";
import { kodKapitana } from "./kod-kapitana";
import { meskiKompas } from "./meski-kompas";
import type { FunnelConfig } from "./types";

export const funnels: FunnelConfig[] = [meskiKompas, kodKapitana, depresja];

export const getFunnelBySlug = (slug: string): FunnelConfig | undefined =>
  funnels.find((f) => f.slug === slug);

export type { FunnelConfig, FunnelPhase } from "./types";
export {
  getFunnelPhase,
  getNextPhaseChange,
  getNextUpcomingFunnel,
  getPhaseBoundaries,
} from "./phase";
