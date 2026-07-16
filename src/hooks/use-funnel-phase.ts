import { useEffect, useState } from "react";
import { getFunnelPhase, getNextPhaseChange, getPhaseBoundaries } from "@/config/funnels";
import type { FunnelConfig, FunnelPhase } from "@/config/funnels";

const MAX_TIMEOUT_MS = 2 ** 31 - 1;

export const useFunnelPhase = (config: FunnelConfig) => {
  const [phase, setPhase] = useState<FunnelPhase>(() =>
    getFunnelPhase(config, new Date()),
  );

  useEffect(() => {
    const now = new Date();
    setPhase(getFunnelPhase(config, now));
    const next = getNextPhaseChange(config, now);
    if (!next) return;
    const delay = Math.min(next.getTime() - now.getTime() + 1000, MAX_TIMEOUT_MS);
    const timer = setTimeout(() => {
      setPhase(getFunnelPhase(config, new Date()));
    }, delay);
    return () => clearTimeout(timer);
  }, [config, phase]);

  const { liveAt, expiredAt } = getPhaseBoundaries(config);
  return {
    phase,
    eventStart: liveAt,
    replayDeadline: config.replay ? expiredAt : null,
  };
};
