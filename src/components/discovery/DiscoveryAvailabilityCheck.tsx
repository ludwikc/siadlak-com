import { useState, useEffect } from "react";
import { CheckCircle } from "@/lib/icons";

export default function DiscoveryAvailabilityCheck() {
  const [status, setStatus] = useState<"initial" | "loading" | "success">(
    "initial",
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "loading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [status]);

  const handleCheckAvailability = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2500);
  };

  const handleScheduleSession = () => {
    const calendarUrl = "https://calendar.app.google/Xj5U39t9HaVNqS1HA";
    const popup = window.open(
      calendarUrl,
      "calendar-booking",
      "width=600,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    );
    if (popup) {
      popup.focus();
    } else {
      window.open(calendarUrl, "_blank");
    }
  };

  return (
    <div className="p-12 rounded-sm border border-white/10 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 text-text-on-dark">
          Sprawdź dostępność Sesji Discovery
        </h3>
        <p className="text-lg text-text-dim mb-8 max-w-md mx-auto">
          Kliknij poniżej, aby sprawdzić, czy mam obecnie wolne miejsca w
          programie mentoringowym.
        </p>

        {status === "initial" && (
          <button
            onClick={handleCheckAvailability}
            className="px-10 py-4 rounded font-bold text-lg text-white"
            style={{
              background:
                "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
              boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
            }}
          >
            Sprawdź dostępność
          </button>
        )}

        {status === "loading" && (
          <div className="py-4">
            <div className="animate-spin w-8 h-8 border-3 border-electric border-t-transparent rounded-full mx-auto mb-6" />
            <p className="text-lg font-semibold text-text-on-dark mb-4">
              Trwa sprawdzanie dostępności...
            </p>
            <div className="w-full max-w-md mx-auto">
              <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-electric h-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-lg text-text-dim mt-2">
                {Math.round(progress)}% zakończone
              </p>
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="py-4">
            <div className="w-20 h-20 bg-electric rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <p className="text-lg font-bold text-text-on-dark mb-2">
              Tak, mam obecnie miejsce w programie mentoringowym
            </p>
            <p className="text-lg mb-8 text-text-dim max-w-md mx-auto">
              Możesz umówić Sesję Discovery już teraz
            </p>
            <button
              onClick={handleScheduleSession}
              className="px-10 py-4 rounded font-bold text-lg text-white"
              style={{
                background:
                  "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
              }}
            >
              Umów Sesję Discovery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
