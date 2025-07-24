import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  return null;
};

export default ScrollToTop;
