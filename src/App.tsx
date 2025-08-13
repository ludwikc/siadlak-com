import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import WebinarLobby from './pages/WebinarLobby';
import WebinarRegistration from './pages/WebinarRegistration';
import WebinarReplay from './pages/WebinarReplay';
import Testimonials from './pages/Testimonials';
import Assessment from './pages/Assessment';
import ThankYou from './pages/ThankYou';
import Legal from './pages/Legal';
import MentalElevator from './pages/MentalElevator';
import Work from './pages/Work';
import Sitemap from './pages/Sitemap';
import SilnaGlowa from './pages/SilnaGlowa';
import OTO from './pages/OTO';
import Help from './pages/Help';
import HelpSubpage from './pages/HelpSubpage';
import Layout from './components/layout/Layout';

import HakowanieProduktywnosci from "./pages/HakowanieProduktywnosci";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/discovery" element={<Layout><Discovery /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/work" element={<Layout><Work /></Layout>} />
          <Route path="/newsletter" element={<Layout><Newsletter /></Layout>} />
          <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/assessment" element={<Layout><Assessment /></Layout>} />
          <Route path="/thank-you" element={<Layout><ThankYou /></Layout>} />
          <Route path="/legal" element={<Layout><Legal /></Layout>} />
          <Route path="/legal/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/legal/terms" element={<Layout><Terms /></Layout>} />
          <Route path="/sitemap" element={<Layout><Sitemap /></Layout>} />
          <Route path="/community" element={<Layout><Community /></Layout>} />
          
          {/* Placeholder routes for footer links */}
          <Route path="/resources" element={<Layout><NotFound /></Layout>} />
          <Route path="/privacy" element={<Layout><NotFound /></Layout>} />
          <Route path="/terms" element={<Layout><NotFound /></Layout>} />
          
          <Route path="/program" element={<Layout><Courses /></Layout>} />
          <Route path="/program/hakowanie-produktywnosci" element={<Layout><HakowanieProduktywnosci /></Layout>} />
          <Route path="/program/mental-elevator" element={<Layout><MentalElevator /></Layout>} />
          <Route path="/program/silna-glowa" element={<Layout><SilnaGlowa /></Layout>} />
          <Route path="/program/:courseSlug" element={<Layout><CourseDetail /></Layout>} />
          
          <Route path="/oto" element={<Layout><OTO /></Layout>} />
          
          <Route path="/podcast" element={<Layout><Podcasts /></Layout>} />
          <Route path="/new-podcast" element={<Layout><NewPodcast /></Layout>} />
          <Route path="/podcast/life-hacking" element={<Layout><LifeHackingPodcast /></Layout>} />
          <Route path="/program/uwazne-zycie" element={<Layout><UwazneZyciePodcast /></Layout>} />
          
          <Route path="/webinar" element={<Layout><Webinar /></Layout>} />
          <Route path="/webinar/registration" element={<Layout><WebinarRegistration /></Layout>} />
          <Route path="/webinar/lobby" element={<Layout><WebinarLobby /></Layout>} />
          <Route path="/webinar/live" element={<Layout><WebinarLive /></Layout>} />
          <Route path="/webinar/expired" element={<Layout><WebinarExpired /></Layout>} />
          <Route path="/webinar/replay" element={<Layout><WebinarReplay /></Layout>} />
          
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/help/:subpageSlug" element={<Layout><HelpSubpage /></Layout>} />
          
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
