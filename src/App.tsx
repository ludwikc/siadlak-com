
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Newsletter from "./pages/Newsletter";
import Testimonials from "./pages/Testimonials";
import ThankYou from "./pages/ThankYou";
import MentalElevator from "./pages/MentalElevator";
import Webinar from "./pages/Webinar";
import Legal from "./pages/Legal";
import WebinarRegistration from "./pages/WebinarRegistration";
import WebinarLobby from "./pages/WebinarLobby";
import WebinarLive from "./pages/WebinarLive";
import WebinarExpired from "./pages/WebinarExpired";
import WebinarReplay from "./pages/WebinarReplay";
import Assessment from "./pages/Assessment";
import Podcasts from "./pages/Podcasts";
import LifeHackingPodcast from "./pages/LifeHackingPodcast";
import UwazneZyciePodcast from "./pages/UwazneZyciePodcast";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you/contact" element={<ThankYou type="contact" />} />
          <Route path="/thank-you/newsletter" element={<ThankYou type="newsletter" />} />
          <Route path="/thank-you/discovery-call" element={<ThankYou type="discovery-call" />} />
          <Route path="/thank-you/webinar" element={<ThankYou type="webinar" />} />
          <Route path="/mental-elevator" element={<MentalElevator />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/webinar-registration" element={<WebinarRegistration />} />
          <Route path="/webinar-lobby" element={<WebinarLobby />} />
          <Route path="/webinar-live" element={<WebinarLive />} />
          <Route path="/webinar-expired" element={<WebinarExpired />} />
          <Route path="/webinar-replay" element={<WebinarReplay />} />
          <Route path="/assessment" element={<Assessment />} />
          {/* Podcast routes */}
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/podcasts/life-hacking" element={<LifeHackingPodcast />} />
          <Route path="/podcasts/uwazne-zycie" element={<UwazneZyciePodcast />} />
          {/* Community route */}
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
