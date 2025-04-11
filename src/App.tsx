
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
import Resources from "./pages/Resources";
import ResourceArticle from "./pages/ResourceArticle";
import Testimonials from "./pages/Testimonials";
import ThankYou from "./pages/ThankYou";

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
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:articleSlug" element={<ResourceArticle />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you/contact" element={<ThankYou type="contact" />} />
          <Route path="/thank-you/newsletter" element={<ThankYou type="newsletter" />} />
          <Route path="/thank-you/discovery-call" element={<ThankYou type="discovery-call" />} />
          {/* For Power Test assessment page */}
          <Route path="/assessment" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
