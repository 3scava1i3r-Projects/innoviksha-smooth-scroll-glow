import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    lenis?: {
      scrollTo: (target: number, options?: any) => void;
      stop: () => void;
      start: () => void;
    };
  }
}

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // Method 1: Use ReactLenis instance if available
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
      
      // Method 2: Force immediate scroll with all possible methods
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Handle any custom scroll containers
      const scrollContainers = document.querySelectorAll('[data-lenis], .scroll-container');
      scrollContainers.forEach(container => {
        if (container instanceof HTMLElement) {
          container.scrollTop = 0;
        }
      });
    };

    // Execute immediately and multiple times to override ReactLenis
    scrollToTop();
    setTimeout(scrollToTop, 1);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    
    // Also use requestAnimationFrame for next frame
    requestAnimationFrame(scrollToTop);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;