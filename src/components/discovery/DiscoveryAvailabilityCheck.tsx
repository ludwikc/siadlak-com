import { useState } from "react";
import { CheckCircle } from "@/lib/icons";
import { CTAButton } from "@/design-system/components/cta-button";

const discoveryQuestions = [
  "Za co walczysz?",
  "Czego próbujesz uniknąć?",
  "Ile jesteś gotów zainwestować — energii, nie pieniędzy?",
];

export default function DiscoveryAvailabilityCheck() {
  const [booked, setBooked] = useState(false);

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
    setBooked(true);
  };

  return (
    <div className="p-12 rounded-sm border border-white/10 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 text-text-on-dark">
          Umów Sesję Discovery
        </h3>
        <p className="text-lg text-text-dim mb-8 max-w-md mx-auto">
          30 minut, trzy pytania. Przyjdź z odpowiedziami — albo znajdziemy
          je razem:
        </p>

        <ul className="max-w-md mx-auto mb-10 space-y-3 text-left">
          {discoveryQuestions.map((q) => (
            <li key={q} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-electric shrink-0 mt-1" />
              <span className="text-lg text-text-on-dark">{q}</span>
            </li>
          ))}
        </ul>

        {booked ? (
          <div className="py-4">
            <div className="w-20 h-20 bg-electric rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <p className="text-lg font-bold text-text-on-dark mb-2">
              Kalendarz otwarty w nowym oknie
            </p>
            <p className="text-lg mb-8 text-text-dim max-w-md mx-auto">
              Wybierz termin, a potwierdzenie przyjdzie na Twój email. A skoro
              podjąłeś już decyzję — mam coś, co pomoże Ci zacząć od razu:
            </p>
            <CTAButton variant="primary" size="xl" to="/oto">
              Zobacz jednorazową ofertę
            </CTAButton>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
