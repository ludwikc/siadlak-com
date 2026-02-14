import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

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
import Index from "./pages/Index";
import Index2025 from "./pages/Index2025";
import Index2601 from "./pages/Index2601";
import HomeTest from "./pages/HomeTest";
import HomeTest2 from "./pages/HomeTest2";
import HomeTest3 from "./pages/HomeTest3";
import About from "./pages/About";
import Discovery from "./pages/Discovery";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import NotFound from "./pages/NotFound";
import Program from "./pages/Program";
import CourseDetail from "./pages/CourseDetail";
import LifeHackingPodcast from "./pages/LifeHackingPodcast";
import UwazneZyciePodcast from "./pages/UwazneZyciePodcast";
import WebinarExpired from "./pages/WebinarExpired";
import WebinarLive from "./pages/WebinarLive";
import WebinarReplay from "./pages/WebinarReplay";
import Testimonials from "./pages/Testimonials";

import ThankYou from "./pages/ThankYou";
import ThankYouMeskiKompas from "./pages/ThankYouMeskiKompas";
import LifeOSSystemUpgrade from "./pages/LifeOSSystemUpgrade";

import Sitemap from "./pages/Sitemap";
import SilnaGlowa from "./pages/SilnaGlowa";
import MeskiKompas from "./pages/MeskiKompas";
import UwazneZycie from "./pages/UwazneZycie";
import OTO from "./pages/OTO";
import Help from "./pages/Help";
import HelpSubpage from "./pages/HelpSubpage";

import HakowanieProduktywnosci from "./pages/HakowanieProduktywnosci";
import SiedemTechnik from "./pages/SiedemTechnik";
import WebinarMeskiKompas from "./pages/WebinarMeskiKompas";
import WebinarKodKapitana from "./pages/WebinarKodKapitana";
import WebinarDepresja from "./pages/WebinarDepresja";
import Wyzwanie from "./pages/Wyzwanie";
import MCT from "./pages/MCT";
import { Toaster } from "@/components/ui/sonner";
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
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/index2025" element={<Index2025 />} />
              <Route path="/index2601" element={<Index2601 />} />
              <Route path="/home-test" element={<HomeTest />} />
              <Route path="/home-test2" element={<HomeTest2 />} />
              <Route path="/home-test3" element={<HomeTest3 />} />
              <Route path="/about" element={<About />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/testimonials" element={<Testimonials />} />
              
              <Route path="/thank-you" element={<ThankYou />} />
              <Route
                path="/thank-you/meski-kompas"
                element={<ThankYouMeskiKompas />}
              />
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
              

              {/* Placeholder routes for footer links */}
              <Route path="/resources" element={<NotFound />} />
              <Route path="/privacy" element={<NotFound />} />
              <Route path="/terms" element={<NotFound />} />

              {/* Redirect routes from config */}
              {Object.entries(redirects).map(([from, to]) => (
                <Route key={from} path={from} element={<Redirect to={to} />} />
              ))}

              <Route path="/program" element={<Program />} />
              <Route
                path="/program/hakowanie-produktywnosci"
                element={<HakowanieProduktywnosci />}
              />
              <Route
                path="/program/lifeos-system-upgrade"
                element={<LifeOSSystemUpgrade />}
              />
              <Route path="/program/silna-glowa" element={<SilnaGlowa />} />
              <Route path="/program/meski-kompas" element={<MeskiKompas />} />
              <Route path="/program/uwazne-zycie" element={<UwazneZycie />} />
              <Route path="/program/7-technik" element={<SiedemTechnik />} />
              <Route path="/program/:courseSlug" element={<CourseDetail />} />

              <Route path="/oto" element={<OTO />} />

              <Route
                path="/podcast/life-hacking"
                element={<LifeHackingPodcast />}
              />
              <Route
                path="/podcast/uwazne-zycie"
                element={<UwazneZyciePodcast />}
              />

              <Route path="/webinar/live" element={<WebinarLive />} />
              <Route path="/webinar/expired" element={<WebinarExpired />} />
              <Route path="/webinar/replay" element={<WebinarReplay />} />
              <Route
                path="/webinar/meski-kompas"
                element={<WebinarMeskiKompas />}
              />
              <Route
                path="/webinar/kod-kapitana"
                element={<WebinarKodKapitana />}
              />
              <Route
                path="/webinar/depresja"
                element={<WebinarDepresja />}
              />

              <Route path="/wyzwanie" element={<Wyzwanie />} />
              <Route path="/mct" element={<MCT />} />

              <Route path="/help" element={<Help />} />
              <Route path="/help/:subpageSlug" element={<HelpSubpage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
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
