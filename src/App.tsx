
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CursorProvider } from "./contexts/CursorContext";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "@studio-freight/react-lenis";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Works from "./pages/Works";
import BlogPage from "./pages/BlogPage";
import YinStudio from "./pages/YinStudio";
import YangStudio from "./pages/YangStudio";
import NavasoreStudio from "./pages/NavasoraStudio";
import URLShortener from "./pages/URLShortener";
import WebsiteAnalyzer from "./pages/WebsiteAnalyzer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import { initGA, trackPageView } from "./lib/gtag";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isMacChrome } from "./utils/performance";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      initGA();
    }
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <CookieConsent onAccept={initGA} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="/studio/yin" element={<YinStudio />} /> */}
        {/* <Route path="/studio/yang" element={<YangStudio />} /> */}
        {/* <Route path="/studio/navasora" element={<NavasoreStudio />} /> */}
        {/* <Route path="/url-shortener" element={<URLShortener />} /> */}
        {/* <Route path="/website-analyzer" element={<WebsiteAnalyzer />} /> */}

        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> Soon */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [useLenis, setUseLenis] = useState(true);

  useEffect(() => {
    // Disable Lenis on Mac Chrome for better performance
    setUseLenis(!isMacChrome());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CursorProvider>
          <CustomCursor />
          {useLenis ? (
            <ReactLenis root>
              <BrowserRouter>
                <AppContent />
              </BrowserRouter>
            </ReactLenis>
          ) : (
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          )}
        </CursorProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
