
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

// English pages
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

// Polish pages
import PolishIndex from "./pages/pl/Index";
import PolishNotFound from "./pages/pl/NotFound";
import PolishAbout from "./pages/pl/About";
import PolishContact from "./pages/pl/Contact";
import PolishCourses from "./pages/pl/Courses";
import PolishNewsletter from "./pages/pl/Newsletter";
import PolishTestimonials from "./pages/pl/Testimonials";
import PolishThankYou from "./pages/pl/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* English Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseSlug" element={<CourseDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:articleSlug" element={<ResourceArticle />} />
            <Route path="/resources/digital-command-checklist" element={<ResourceArticle />} />
            <Route path="/resources/5-minutes-to-focus" element={<ResourceArticle />} />
            <Route path="/resources/ai-command-scripts" element={<ResourceArticle />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/thank-you/contact" element={<ThankYou type="contact" />} />
            <Route path="/thank-you/newsletter" element={<ThankYou type="newsletter" />} />
            <Route path="/thank-you/discovery-call" element={<ThankYou type="discovery-call" />} />
            <Route path="/assessment" element={<Index />} />
            
            {/* Polish Routes */}
            <Route path="/pl" element={<PolishIndex />} />
            <Route path="/pl/about" element={<PolishAbout />} />
            <Route path="/pl/contact" element={<PolishContact />} />
            <Route path="/pl/newsletter" element={<PolishNewsletter />} />
            <Route path="/pl/courses" element={<PolishCourses />} />
            <Route path="/pl/courses/:courseSlug" element={<CourseDetail />} />
            <Route path="/pl/resources" element={<Resources />} />
            <Route path="/pl/resources/:articleSlug" element={<ResourceArticle />} />
            <Route path="/pl/resources/lista-kontrolna-cyfrowego-dowodzenia" element={<ResourceArticle />} />
            <Route path="/pl/resources/5-minut-do-koncentracji" element={<ResourceArticle />} />
            <Route path="/pl/resources/skrypty-dowodzenia-ai" element={<ResourceArticle />} />
            <Route path="/pl/resources/blog/:articleSlug" element={<ResourceArticle />} />
            <Route path="/pl/testimonials" element={<PolishTestimonials />} />
            <Route path="/pl/thank-you" element={<PolishThankYou />} />
            <Route path="/pl/thank-you/contact" element={<PolishThankYou type="contact" />} />
            <Route path="/pl/thank-you/newsletter" element={<PolishThankYou type="newsletter" />} />
            <Route path="/pl/thank-you/discovery-call" element={<PolishThankYou type="discovery-call" />} />
            <Route path="/pl/assessment" element={<PolishIndex />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
