import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/design-system/components/button';
import { Zap, ArrowRight } from 'lucide-react';
import { CTAButton } from '@/design-system/components/cta-button';

export default function ThankYou() {
  const navigate = useNavigate();
  const currentTime = new Date().toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = new Date().toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-void-glow text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4" /> Potwierdzenie
          </span>
          <p className="text-sm text-white/60 mb-10">
            {currentDate}, {currentTime}
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            Zapisano!
          </h1>
          <p className="text-lg text-white/60 mb-8">
            A to dopiero początek...
          </p>

          <p className="text-base text-white/60 leading-relaxed mb-10">
            Właśnie dołączasz do{" "}
            <span className="font-semibold text-white">elitarnego grona</span> osób, które
            zdecydowały się wziąć sprawy we własne ręce. Pierwszy email otrzymasz w ciągu 24 godzin.
          </p>

          <Button
            type="button"
            className="w-full bg-brand-gradient text-white font-semibold py-4 px-6 rounded shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
            onClick={() => navigate("/program")}
          >
            Zobacz dostępne Aplikacje Mentalne
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex justify-center mt-6">
            <CTAButton variant="tertiary" to="/discovery">
              Albo od razu umów Sesję Discovery
            </CTAButton>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white/60 hover:text-white"
            >
              Wróć do strony głównej
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
