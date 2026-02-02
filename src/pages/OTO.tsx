import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { ReferrerGuard } from "@/components/oto/ReferrerGuard";
import { OTOProductDisplay } from "@/components/oto/OTOProductDisplay";
import { OTOWelcomeDialog } from "@/components/oto/OTOWelcomeDialog";
import { OTOMinimizedTimer } from "@/components/oto/OTOMinimizedTimer";
import { getOTOCookie, setOTOCookie, isOfferExpired } from "@/lib/oto-utils";

enum OTOState {
  LOADING = "loading",
  ACTIVE = "active",
  EXPIRED = "expired",
}

function OTOContent() {
  const [state, setState] = useState<OTOState>(OTOState.LOADING);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [showMinimizedTimer, setShowMinimizedTimer] = useState(false);

  useEffect(() => {
    const checkOTOStatus = () => {
      const existingCookie = getOTOCookie();
      const hasSeenWelcome = localStorage.getItem("oto_welcome_seen");

      if (existingCookie) {
        // User has visited before
        if (isOfferExpired()) {
          setState(OTOState.EXPIRED);
        } else {
          // Still within time limit
          setState(OTOState.ACTIVE);

          // Show welcome dialog only if not seen before
          if (!hasSeenWelcome) {
            setShowWelcomeDialog(true);
          } else {
            setShowMinimizedTimer(true);
          }
        }
      } else {
        // First-time visitor - set cookie and start timer
        setOTOCookie({});
        setState(OTOState.ACTIVE);

        // Show welcome dialog only if not seen before
        if (!hasSeenWelcome) {
          setShowWelcomeDialog(true);
        } else {
          setShowMinimizedTimer(true);
        }
      }
    };

    // Small delay to prevent flash
    const timer = setTimeout(checkOTOStatus, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleExpired = () => {
    setState(OTOState.EXPIRED);
    setShowMinimizedTimer(false);
  };

  const handleWelcomeContinue = () => {
    localStorage.setItem("oto_welcome_seen", "true");
    setShowWelcomeDialog(false);
    setShowMinimizedTimer(true);
  };

  // Loading state
  if (state === OTOState.LOADING) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Trwa sprawdzanie dostępności...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <OTOWelcomeDialog
        open={showWelcomeDialog}
        onContinue={handleWelcomeContinue}
        onExpired={handleExpired}
      />
      {showMinimizedTimer && <OTOMinimizedTimer onExpired={handleExpired} />}
      <OTOProductDisplay onExpired={handleExpired} />
    </div>
  );
}

export default function OTO() {
  return (
    <Layout>
      <ReferrerGuard>
        <OTOContent />
      </ReferrerGuard>
    </Layout>
  );
}
