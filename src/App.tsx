import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Index from './pages/Index';
import About from './pages/About';
import Discovery from './pages/Discovery';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Community from './pages/Community';
import Podcasts from './pages/Podcasts';
import NewPodcast from './pages/NewPodcast';
import LifeHackingPodcast from './pages/LifeHackingPodcast';
import UwazneZyciePodcast from './pages/UwazneZyciePodcast';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Webinar from './pages/Webinar';
import WebinarExpired from './pages/WebinarExpired';
import WebinarLive from './pages/WebinarLive';
import WebinarReplay from './pages/WebinarReplay';
import Testimonials from './pages/Testimonials';
import Assessment from './pages/Assessment';
import ThankYou from './pages/ThankYou';
import Legal from './pages/Legal';
import MentalElevator from './pages/MentalElevator';
import Work from './pages/Work';
import Sitemap from './pages/Sitemap';
import SilnaGlowa from './pages/SilnaGlowa';
import MeskiKompas from './pages/MeskiKompas';
import TrainTheTrainer from './pages/TrainTheTrainer';
import OTO from './pages/OTO';
import Help from './pages/Help';
import HelpSubpage from './pages/HelpSubpage';

import HakowanieProduktywnosci from "./pages/HakowanieProduktywnosci";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/community" element={<Community />} />
            
            {/* Placeholder routes for footer links */}
            <Route path="/resources" element={<NotFound />} />
            <Route path="/privacy" element={<NotFound />} />
            <Route path="/terms" element={<NotFound />} />
            
            <Route path="/program" element={<Courses />} />
            <Route path="/program/hakowanie-produktywnosci" element={<HakowanieProduktywnosci />} />
            <Route path="/program/mental-elevator" element={<MentalElevator />} />
            <Route path="/program/silna-glowa" element={<SilnaGlowa />} />
            <Route path="/program/meski-kompas" element={<MeskiKompas />} />
            <Route path="/train-the-trainer" element={<TrainTheTrainer />} />
            <Route path="/program/:courseSlug" element={<CourseDetail />} />
            
            <Route path="/oto" element={<OTO />} />
            
            <Route path="/podcast" element={<Podcasts />} />
            <Route path="/new-podcast" element={<NewPodcast />} />
            <Route path="/podcast/life-hacking" element={<LifeHackingPodcast />} />
            <Route path="/program/uwazne-zycie" element={<UwazneZyciePodcast />} />
            
            <Route path="/webinar" element={<Webinar />} />
            <Route path="/webinar/live" element={<WebinarLive />} />
            <Route path="/webinar/expired" element={<WebinarExpired />} />
            <Route path="/webinar/replay" element={<WebinarReplay />} />
            
            <Route path="/help" element={<Help />} />
            <Route path="/help/:subpageSlug" element={<HelpSubpage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
