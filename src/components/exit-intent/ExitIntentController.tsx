import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useExitIntent, type ExitIntentTrigger } from "@/hooks/use-exit-intent";
import { funnels, getFunnelPhase } from "@/config/funnels";
import { track } from "@/lib/analytics";
import ExitIntentModal from "./ExitIntentModal";

const SESSION_KEY = "exit_intent_shown:v1";
const CONVERTED_KEY = "exit_intent_converted";
const SUPPRESSED_PATHS = [/^\/oto/, /dziekuje/, /thank-you/, /^\/reset/, /^\/mailing/];

const safeGet = (store: Storage, key: string): string | null => {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
};

export default function ExitIntentController() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [converted, setConverted] = useState(false);

  const funnel = funnels.find((f) => pathname.startsWith(`/webinar/${f.slug}`));
  const funnelActive =
    !!funnel &&
    funnel.registration.type === "easycart" &&
    ["upcoming", "live"].includes(getFunnelPhase(funnel, new Date()));
  const offer = funnelActive ? `funnel:${funnel!.slug}` : "lead_magnet";

  const suppressed =
    SUPPRESSED_PATHS.some((re) => re.test(pathname)) ||
    !!safeGet(sessionStorage, SESSION_KEY) ||
    !!safeGet(localStorage, "lead:submitted") ||
    !!safeGet(localStorage, CONVERTED_KEY);

  const handleTrigger = (trigger: ExitIntentTrigger) => {
    // Stand down if another dialog (e.g. the OTO welcome) is already open.
    if (document.querySelector('[role="dialog"][data-state="open"]')) return;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(true);
    track("exit_intent_shown", { trigger_type: trigger, offer, page_path: pathname });
  };

  useExitIntent({ enabled: !suppressed && !open, onTrigger: handleTrigger });

  const handleConverted = () => {
    setConverted(true);
    try {
      localStorage.setItem(CONVERTED_KEY, "1");
    } catch {
      /* ignore */
    }
    track("exit_intent_converted", { offer });
  };

  return (
    <ExitIntentModal
      open={open}
      funnel={funnelActive ? funnel : undefined}
      onConverted={handleConverted}
      onOpenChange={(next) => {
        if (!next && !converted) track("exit_intent_dismissed", { offer });
        setOpen(next);
      }}
    />
  );
}
