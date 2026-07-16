import type { FunnelConfig, FunnelPhase } from "./types";

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;

export const getPhaseBoundaries = (config: FunnelConfig) => {
  const liveAt = new Date(config.eventStart);
  const replayAt = new Date(
    liveAt.getTime() + config.eventDurationMinutes * MINUTE_MS,
  );
  const expiredAt = config.replay
    ? new Date(replayAt.getTime() + config.replay.availableHours * HOUR_MS)
    : replayAt;
  return { liveAt, replayAt, expiredAt };
};

export const getFunnelPhase = (config: FunnelConfig, now: Date): FunnelPhase => {
  const { liveAt, replayAt, expiredAt } = getPhaseBoundaries(config);
  if (now < liveAt) return "upcoming";
  if (now < replayAt) return "live";
  if (config.replay && now < expiredAt) return "replay";
  return "expired";
};

export const getNextPhaseChange = (
  config: FunnelConfig,
  now: Date,
): Date | null => {
  const { liveAt, replayAt, expiredAt } = getPhaseBoundaries(config);
  const boundaries = [liveAt, replayAt, expiredAt];
  const next = boundaries.find((b) => b > now);
  return next ?? null;
};

export const getNextUpcomingFunnel = (
  funnels: FunnelConfig[],
  now: Date,
): FunnelConfig | null => {
  const candidates = funnels
    .filter((f) => {
      const phase = getFunnelPhase(f, now);
      return phase === "upcoming" || phase === "live";
    })
    .sort(
      (a, b) =>
        new Date(a.eventStart).getTime() - new Date(b.eventStart).getTime(),
    );
  return candidates[0] ?? null;
};
