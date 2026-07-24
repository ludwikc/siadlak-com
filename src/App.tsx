import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Suspense, lazy, useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
};

// Route-level fallback: a full-height blank that lets the page background show
// through. No spinner and no reserved boxes, so it never flashes or shifts
// layout. With future.v7_startTransition it only appears on initial deep loads.
const RouteFallback = () => <div className="min-h-[100svh]" aria-hidden="true" />;

// Eager: homepage (LCP), 404 (avoids a fallback flash on unknown URLs).
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy: every other page ships as its own chunk, loaded on demand.
const About = lazy(() => import("./pages/About"));
const Discovery = lazy(() => import("./pages/Discovery"));
const Contact = lazy(() => import("./pages/Contact"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Program = lazy(() => import("./pages/program/Program"));
const LifeHackingPodcast = lazy(() => import("./pages/LifeHackingPodcast"));
const UwazneZyciePodcast = lazy(() => import("./pages/UwazneZyciePodcast"));
const WebinarLive = lazy(() => import("./pages/webinar/WebinarLive"));
const WebinarReplay = lazy(() => import("./pages/webinar/WebinarReplay"));
const CurrentWebinar = lazy(() => import("./pages/webinar/CurrentWebinar"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ThankYouMeskiKompas = lazy(() => import("./pages/ThankYouMeskiKompas"));
const LifeOSSystemUpgrade = lazy(() => import("./pages/program/LifeOSSystemUpgrade"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Slownik = lazy(() => import("./pages/Slownik"));
const Wywiady = lazy(() => import("./pages/Wywiady"));
const SilnaGlowa = lazy(() => import("./pages/program/SilnaGlowa"));
const MeskiKompas = lazy(() => import("./pages/program/MeskiKompas"));
const UwazneZycie = lazy(() => import("./pages/program/UwazneZycie"));
const OTO = lazy(() => import("./pages/OTO"));
const Help = lazy(() => import("./pages/help/Help"));
const HelpSubpage = lazy(() => import("./pages/help/HelpSubpage"));
const HakowanieProduktywnosci = lazy(() => import("./pages/program/HakowanieProduktywnosci"));
const TrainTheTrainerAI = lazy(() => import("./pages/program/TrainTheTrainerAI"));
const WebinarMeskiKompas = lazy(() => import("./pages/webinar/WebinarMeskiKompas"));
const WebinarKodKapitana = lazy(() => import("./pages/webinar/WebinarKodKapitana"));
const WebinarDepresja = lazy(() => import("./pages/webinar/WebinarDepresja"));
const MCT = lazy(() => import("./pages/MCT"));
const Links = lazy(() => import("./pages/Links"));
const IG = lazy(() => import("./pages/IG"));
const Wspolpraca = lazy(() => import("./pages/Wspolpraca"));
const SiadlakVIP = lazy(() => import("./pages/SiadlakVIP"));
const MailingMute = lazy(() => import("./pages/MailingMute"));
const Mentoring = lazy(() => import("./pages/Mentoring"));
const Reset = lazy(() => import("./pages/Reset"));

import { Toaster } from "@/design-system/components/sonner";
import Redirect from "./components/Redirect";
import { redirects } from "./config/redirects";
import MobileWebinarBar from "./components/webinar/MobileWebinarBar";
import DesktopWebinarBar from "./components/webinar/DesktopWebinarBar";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router future={{ v7_startTransition: true }}>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/discovery" element={<Discovery />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/testimonials" element={<Testimonials />} />

                <Route path="/thank-you" element={<ThankYou />} />
                <Route
                  path="/legal"
                  element={
                    <ExternalRedirect url="https://docs.siadlak.com/legal/regulaminy" />
                  }
                />
                <Route
                  path="/legal/privacy"
                  element={
                    <ExternalRedirect url="https://docs.siadlak.com/legal/privacy" />
                  }
                />
                <Route
                  path="/legal/terms"
                  element={
                    <ExternalRedirect url="https://docs.siadlak.com/legal/regulaminy" />
                  }
                />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/slownik" element={<Slownik />} />
                <Route path="/wywiady" element={<Wywiady />} />

                {/* Privacy and Terms redirects */}
                <Route
                  path="/privacy"
                  element={
                    <ExternalRedirect url="https://docs.siadlak.com/legal/privacy" />
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <ExternalRedirect url="https://docs.siadlak.com/legal/regulaminy" />
                  }
                />

                {/* Redirect routes from config */}
                {Object.entries(redirects).map(([from, to]) => (
                  <Route key={from} path={from} element={<Redirect to={to} />} />
                ))}

                <Route path="/program" element={<Program />} />
                <Route
                  path="/program/produktywnosc"
                  element={<HakowanieProduktywnosci />}
                />
                <Route
                  path="/program/lifeos-system-upgrade"
                  element={<LifeOSSystemUpgrade />}
                />
                <Route path="/program/odpornosc" element={<SilnaGlowa />} />
                <Route path="/program/meskosc" element={<MeskiKompas />} />
                <Route path="/program/uwaznosc" element={<UwazneZycie />} />
                <Route path="/program/ttt-ai" element={<TrainTheTrainerAI />} />
                <Route
                  path="/program/:courseSlug"
                  element={<Navigate to="/program" replace />}
                />

                <Route path="/oto" element={<OTO />} />
                <Route path="/mentoring" element={<Mentoring />} />

                <Route
                  path="/podcast/life-hacking"
                  element={<LifeHackingPodcast />}
                />
                <Route
                  path="/podcast/uwazne-zycie"
                  element={<UwazneZyciePodcast />}
                />

                <Route path="/webinar" element={<CurrentWebinar />} />
                <Route
                  path="/webinar/meski-kompas"
                  element={<WebinarMeskiKompas />}
                />
                <Route
                  path="/webinar/meski-kompas/replay"
                  element={<WebinarReplay />}
                />
                <Route
                  path="/webinar/meski-kompas/dziekuje"
                  element={<ThankYouMeskiKompas />}
                />
                <Route
                  path="/webinar/kod-kapitana"
                  element={<WebinarKodKapitana />}
                />
                <Route
                  path="/webinar/depresja"
                  element={<WebinarDepresja />}
                />
                <Route
                  path="/webinar/depresja/live"
                  element={<WebinarLive />}
                />

                <Route path="/mct" element={<MCT />} />
                <Route
                  path="/stream"
                  element={
                    <ExternalRedirect url="https://deepwork.pl" />
                  }
                />
                <Route path="/links" element={<Links />} />
                <Route path="/ig" element={<IG />} />
                <Route path="/start" element={<Wspolpraca />} />
                <Route path="/siadlakvip" element={<SiadlakVIP />} />
                <Route path="/mailing/mute/:topic?" element={<MailingMute />} />
                <Route path="/reset" element={<Reset />} />

                <Route path="/help" element={<Help />} />
                <Route path="/help/:subpageSlug" element={<HelpSubpage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <MobileWebinarBar />
            <DesktopWebinarBar />
            <Toaster />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
