
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import ConsentManager from "./components/consent/ConsentManager";
import StructuredData from "./components/seo/JsonLd";

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
import Sitemap from "./pages/Sitemap";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsNewsletter from "./pages/legal/TermsNewsletter";
import TermsSales from "./pages/legal/TermsSales";
import TermsCommunity from "./pages/legal/TermsCommunity";

// Polish pages
import PolishIndex from "./pages/pl/Index";
import PolishNotFound from "./pages/pl/NotFound";
import PolishAbout from "./pages/pl/About";
import PolishContact from "./pages/pl/Contact";
import PolishCourses from "./pages/pl/Courses";
import PolishNewsletter from "./pages/pl/Newsletter";
import PolishTestimonials from "./pages/pl/Testimonials";
import PolishThankYou from "./pages/pl/ThankYou";
import PolishSitemap from "./pages/pl/Sitemap";
import PolishLegal from "./pages/pl/Legal";
import PolishPrivacyPolicy from "./pages/pl/legal/PrivacyPolicy";
import PolishTermsNewsletter from "./pages/pl/legal/TermsNewsletter";
import PolishTermsSales from "./pages/pl/legal/TermsSales";
import PolishTermsCommunity from "./pages/pl/legal/TermsCommunity";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ConsentManager>
            <StructuredData />
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

                {/* All English course detail routes */}
                <Route path="/courses/:courseSlug" element={<CourseDetail />} />
                <Route path="/courses/mental-elevator" element={<CourseDetail />} />
                <Route path="/courses/hakowanie-produktywnosci" element={<CourseDetail />} />
                <Route path="/courses/silna-glowa" element={<CourseDetail />} />
                <Route path="/courses/7-technik" element={<CourseDetail />} />
                <Route path="/courses/train-the-trainer" element={<CourseDetail />} />
                <Route path="/courses/total-immersion" element={<CourseDetail />} />

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
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Legal Routes */}
                <Route path="/legal" element={<Legal />} />
                <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/legal/terms-newsletter" element={<TermsNewsletter />} />
                <Route path="/legal/terms-sales" element={<TermsSales />} />
                <Route path="/legal/terms-community" element={<TermsCommunity />} />
                
                {/* Polish Routes */}
                <Route path="/pl" element={<PolishIndex />} />
                <Route path="/pl/about" element={<PolishAbout />} />
                <Route path="/pl/contact" element={<PolishContact />} />
                <Route path="/pl/newsletter" element={<PolishNewsletter />} />
                <Route path="/pl/courses" element={<PolishCourses />} />
                
                {/* All Polish course detail routes */}
                <Route path="/pl/courses/:courseSlug" element={<CourseDetail />} />
                <Route path="/pl/courses/mental-elevator" element={<CourseDetail />} />
                <Route path="/pl/courses/hakowanie-produktywnosci" element={<CourseDetail />} />
                <Route path="/pl/courses/silna-glowa" element={<CourseDetail />} />
                <Route path="/pl/courses/7-technik" element={<CourseDetail />} />
                <Route path="/pl/courses/train-the-trainer" element={<CourseDetail />} />
                <Route path="/pl/courses/total-immersion" element={<CourseDetail />} />
                
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
                <Route path="/pl/sitemap" element={<PolishSitemap />} />
                
                {/* Polish Legal Routes */}
                <Route path="/pl/legal" element={<PolishLegal />} />
                <Route path="/pl/legal/privacy-policy" element={<PolishPrivacyPolicy />} />
                <Route path="/pl/legal/terms-newsletter" element={<PolishTermsNewsletter />} />
                <Route path="/pl/legal/terms-sales" element={<PolishTermsSales />} />
                <Route path="/pl/legal/terms-community" element={<PolishTermsCommunity />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ConsentManager>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
