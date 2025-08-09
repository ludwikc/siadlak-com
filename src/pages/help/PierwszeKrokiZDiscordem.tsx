import HelpPageLayout from './HelpPageLayout';
import type { HelpPageData } from './types';

const data: HelpPageData = {
  title: "Pierwsze kroki z Discordem",
  category: "Discord",
  lastUpdated: "2025-08-08",
  readTime: "5 min",
  content: (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mt-8 mb-4">Absolutne podstawy</h1>
      <p className="leading-relaxed">
       <div style={{ position: "relative", paddingBottom: "56.648308418568064%", height: 0 }}>
  <iframe
    src="https://www.loom.com/embed/1afc7e8a9c6b4a60a501cbe7f2b7742e?sid=d3b41a9a-a295-4347-abda-27e475736afe"
    allowFullScreen
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
  />
</div>
      </p>
      
      <div className="p-6 bg-muted/30 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-3">Masz kłopot z Discordem?</h2>
        <p className="text-muted-foreground mb-4">
          Jeśli nie możesz skontaktować się z nami na Discordzie, przejdź na stronę <a href='/kontakt'>Kontakt</a>.
        </p>
      </div>
    </div>
  )
};

export default function PierwszeKrokiZDiscordem() {
  return <HelpPageLayout data={data} />;
}