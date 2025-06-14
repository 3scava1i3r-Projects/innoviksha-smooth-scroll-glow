
import { useCursor } from "@/contexts/CursorContext";
import { Award, BarChart, Code } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import Anime from 'react-anime';

const rotatingTexts = [
  "SaaS Platforms",
  "AI Agents",
  "Internal Tools",
  "MVPs",
  "Custom Software",
  "AI Workflows",
  "Web Apps",
  "Bots",
  "Dashboards",
  "Scripts",
  "CRMs",
  "Automation Pipelines",
  "AI Integrations",
  "Web Portals",
  "APIs",
  "Backend Systems",
];

const Hero = () => {
  const { setCursorType } = useCursor();
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const detailsRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const [animateDetails, setAnimateDetails] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);
  const [animateH1, setAnimateH1] = useState(false);

  useEffect(() => {
    let textAnimationInterval: number;

    // Start animations in sequence
    const startAnimations = () => {
      setTimeout(() => setAnimateH1(true), 100);
      setTimeout(() => setAnimateH2(true), 200);
      setTimeout(() => setAnimateDetails(true), 400);
      
      // Start text rotation after initial animations
      setTimeout(() => {
        textAnimationInterval = window.setInterval(() => {
          setTextIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
        }, 3000);
      }, 1200);
    };

    startAnimations();

    return () => {
      if (textAnimationInterval) {
        clearInterval(textAnimationInterval);
      }
    };
  }, []);

  return (
    <section 
      className="pt-40 pb-20"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="container mx-auto text-center">
        <Anime
          opacity={animateH1 ? [0, 1] : 0}
          translateY={animateH1 ? [20, 0] : 20}
          duration={800}
          easing="easeOutExpo"
        >
          <h1 
            ref={h1Ref}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight h-48 md:h-56 lg:h-72 flex items-center justify-center"
            key={textIndex}
          >
            World-Class {rotatingTexts[textIndex]}
          </h1>
        </Anime>

        <Anime
          opacity={animateH2 ? [0, 1] : 0}
          translateY={animateH2 ? [20, 0] : 20}
          duration={800}
          easing="easeOutExpo"
        >
          <h2 
            ref={h2Ref}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground"
          >
            On-Time. On-Budget. On-Point.
          </h2>
        </Anime>

        <div 
          ref={detailsRef}
          className="mt-12 flex justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
        >
          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={0}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <Award size={16} />
              <span>Award-winning</span>
            </div>
          </Anime>

          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={100}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <BarChart size={16} />
              <span>Results-driven</span>
            </div>
          </Anime>

          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={200}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span>Expert developers</span>
            </div>
          </Anime>
        </div>
      </div>
    </section>
  );
};

export default Hero;
