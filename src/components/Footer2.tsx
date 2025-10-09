import React, { useEffect, useRef } from 'react';

// Type declarations for GSAP loaded from CDN
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const Footer2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const textGridRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GSAP from CDN
    const loadGSAP = async () => {
      if (window.gsap && window.ScrollTrigger) {
        return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger };
      }

      const script1 = document.createElement('script');
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      document.head.appendChild(script1);

      await new Promise(resolve => script1.onload = resolve);

      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      document.head.appendChild(script2);

      await new Promise(resolve => script2.onload = resolve);

      return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger };
    };

    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Set initial states
      gsap.set(svgRef.current, {
        opacity: 0,
        scaleY: 0.05,
        y: '100vh',
        transformOrigin: 'bottom'
      });

      gsap.set(textGridRef.current, { opacity: 0 });
      gsap.set(mainTitleRef.current, { opacity: 0 });

      // Get all wavelength labels
      const wavelengthLabels = textGridRef.current?.querySelectorAll('.wavelength-label');
      if (wavelengthLabels) {
        gsap.set(wavelengthLabels, { opacity: 0, y: 30, filter: 'blur(8px)' });
      }

      // Get main title lines
      const titleLines = mainTitleRef.current?.querySelectorAll('.title-line');
      if (titleLines) {
        gsap.set(titleLines, { opacity: 0, y: 30, filter: 'blur(8px)' });
      }

      // Create scroll-triggered animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          markers: false
        }
      });

      // Animate SVG spectrum rising
      if (svgRef.current) {
        tl.to(svgRef.current, { opacity: 1, duration: 0.01 }, 0);
      }
      if (textGridRef.current) {
        tl.to(textGridRef.current, { opacity: 1, duration: 0.01 }, 0);
      }
      if (mainTitleRef.current) {
        tl.to(mainTitleRef.current, { opacity: 1, duration: 0.01 }, 0);
      }

      if (svgRef.current) {
        tl.to(svgRef.current, {
          scaleY: 0.05,
          y: '-30px',
          duration: 0.3,
          ease: 'power2.out'
        }, 0)
        .to(svgRef.current, {
          scaleY: 1,
          y: '0px',
          duration: 0.8,
          ease: 'power2.out'
        }, 0.3);
      }

      // Animate text labels
      if (wavelengthLabels && titleLines) {
        tl.to([...Array.from(wavelengthLabels), ...Array.from(titleLines)], {
          duration: 1.2,
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.15,
          ease: 'power2.out'
        }, 0.9);
      }

      // Animate wavelength labels with different heights
      if (textGridRef.current) {
        const level5 = textGridRef.current.querySelectorAll('.level-5');
        const level4 = textGridRef.current.querySelectorAll('.level-4');
        const level3 = textGridRef.current.querySelectorAll('.level-3');
        const level2 = textGridRef.current.querySelectorAll('.level-2');
        const level1 = textGridRef.current.querySelectorAll('.level-1');

        tl.to(level5, { y: '-25vh', duration: 0.8, ease: 'power2.out' }, 0.9)
          .to(level4, { y: '-20vh', duration: 0.8, ease: 'power2.out' }, 0.9)
          .to(level3, { y: '-15vh', duration: 0.8, ease: 'power2.out' }, 0.9)
          .to(level2, { y: '-10vh', duration: 0.8, ease: 'power2.out' }, 0.9)
          .to(level1, { y: '-5vh', duration: 0.8, ease: 'power2.out' }, 0.9);
      }

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    });
  }, []);

  return (
    <div className="w-full bg-neutral-100">
      {/* Demo content to scroll through */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-neutral-800">Scroll Down</h1>
          <p className="text-xl text-neutral-600">↓ See the spectrum footer animate in ↓</p>
        </div>
      </div> */}

      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-200 to-neutral-300">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4 text-neutral-800">Keep Scrolling</h2>
          <p className="text-lg text-neutral-600">The magic happens below...</p>
        </div>
      </div> */}

      {/* Spacer before footer */}
      {/* <div className="h-[30vh] bg-neutral-300" /> */}

      {/* Footer section with scroll trigger */}
      <div ref={containerRef} className="relative h-screen bg-background overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute -top-1/4 -left-1/12 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #000000 0%, #FFFFFF 50%, transparent 100%)',
              filter: 'blur(40px)'
            }}
          />
          <div
            className="absolute top-1/3 -right-1/6 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFFFFF 0%, #000000 50%, transparent 100%)',
              filter: 'blur(40px)'
            }}
          />
        </div>

        {/* Fixed container for footer content */}
        <div ref={footerRef} className="fixed bottom-0 left-0 right-0 h-screen pointer-events-none z-10">
          {/* SVG Spectrum */}
          <div ref={svgRef} className="absolute bottom-0 left-0 right-0 h-screen">
            <svg
              className="w-full h-full"
              viewBox="0 0 1567 584"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <filter id="spectrum-blur" x="-30" y="-30" width="1627" height="644" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="15" />
                </filter>

              <linearGradient id="g0" x1="1306" y1="584" x2="1306" y2="184" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g1" x1="1132" y1="584" x2="1132" y2="104" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g2" x1="261" y1="584" x2="261" y2="184" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g3" x1="435" y1="584" x2="435" y2="104" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g4" x1="609.5" y1="584" x2="609.5" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g5" x1="957.5" y1="584" x2="957.5" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g6" x1="783.5" y1="584" x2="783.5" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g7" x1="87" y1="585" x2="87" y2="295" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="g8" x1="1480" y1="584" x2="1480" y2="294" gradientUnits="userSpaceOnUse">
                <stop stopColor="#000000" />
                <stop offset="0.5" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

                <clipPath id="spectrum-clip">
                  <rect width="1567" height="584" />
                </clipPath>
              </defs>

              <g clipPath="url(#spectrum-clip)" filter="url(#spectrum-blur)">
                <path d="M1219 584H1393V184H1219V584Z" fill="url(#g0)" />
                <path d="M1045 584H1219V104H1045V584Z" fill="url(#g1)" />
                <path d="M348 584H174V184H348V584Z" fill="url(#g2)" />
                <path d="M522 584H348V104H522V584Z" fill="url(#g3)" />
                <path d="M697 584H522V54H697V584Z" fill="url(#g4)" />
                <path d="M870 584H1045V54H870V584Z" fill="url(#g5)" />
                <path d="M870 584H697V0H870V584Z" fill="url(#g6)" />
                <path d="M174 585H0V295H174V585Z" fill="url(#g7)" />
                <path d="M1393 584H1567V294H1393V584Z" fill="url(#g8)" />
              </g>
            </svg>
          </div>

          {/* Main title */}
          <div ref={mainTitleRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs uppercase tracking-wide text-center z-20">
            <div className="title-line">Innoviksha: Where Code Becomes Innovation</div>
            <div className="title-line">Across the Infinite Spectrum</div>
          </div>

          {/* Text grid */}
          <div ref={textGridRef} className="absolute bottom-0 left-0 right-0 h-screen grid grid-cols-9 items-end pb-8 px-4 z-20">
            <div className="wavelength-label level-1 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Our Work</div>
              <div>2025.01</div>
            </div>
            <div className="wavelength-label level-2 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Services</div>
              <div>450nm</div>
            </div>
            <div className="wavelength-label level-3 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Custom Development</div>
              <div>490nm</div>
            </div>
            <div className="wavelength-label level-4 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>AI & Automation</div>
              <div>530nm</div>
            </div>
            <div className="wavelength-label level-5 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Web & Mobile Apps</div>
              <div>580nm</div>
            </div>
            <div className="wavelength-label level-4 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>System Modernization</div>
              <div>620nm</div>
            </div>
            <div className="wavelength-label level-3 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Contact Us</div>
            </div>
            <div className="wavelength-label level-2 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>info@innoviksha.xyz</div>
            </div>
            <div className="wavelength-label level-1 text-white text-xs uppercase tracking-wide text-center leading-tight mb-4">
              <div>Innoviksha HIE Agency</div>
              <div>800nm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
