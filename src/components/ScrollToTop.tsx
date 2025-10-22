import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";
import { isMacChrome } from "@/utils/performance";

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Use native scroll on Mac Chrome, Lenis on other platforms
    if (isMacChrome()) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  return null;
};

export default ScrollToTop;
