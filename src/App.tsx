
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
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Works from "./pages/Works";
import ScrollToTop from "./components/ScrolltoTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CursorProvider>
        <CustomCursor />
        <ReactLenis root>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/works" element={<Works />} />

              {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> Soon */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ReactLenis>
      </CursorProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
