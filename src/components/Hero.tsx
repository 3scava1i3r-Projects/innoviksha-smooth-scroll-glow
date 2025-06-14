import { useCursor } from "@/contexts/CursorContext";
import { Award, BarChart, Code } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const userTexts = [
  "SaaS Platforms. AI Agents. Internal Tools. MVPs.",
  "Custom Software. AI Workflows. Web Apps. Bots.",
  "Dashboards. Scripts. CRMs. Automation Pipelines.",
  "AI Integrations. Web Portals. APIs. Backend Systems.",
];

const allTexts = ["World-Class Digital Products", ...userTexts];

const Hero = () => {
  const { setCursorType } = useCursor();
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const detailsRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let textAnimationInterval: number;

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: h1Ref.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 100,
    })
    .add({
      targets: h2Ref.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, '-=600')
    .add({
      targets: detailsRef.current.children,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(100),
    }, '-=400');

    tl.finished.then(() => {
      textAnimationInterval = window.setInterval(() => {
        anime({
          targets: h1Ref.current,
          opacity: 0,
          translateY: -20,
          duration: 400,
          easing: 'easeInExpo',
          complete: () => {
            setTextIndex(prevIndex => (prevIndex + 1) % allTexts.length);
            anime({
              targets: h1Ref.current,
              translateY: [20, 0],
              opacity: 1,
              duration: 400,
              easing: 'easeOutExpo',
            });
          }
        });
      }, 3000);
    });

    return () => {
      if (textAnimationInterval) {
        clearInterval(textAnimationInterval);
      }
    }
  }, []);

  return (
    <section 
      className="pt-40 pb-20"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="container mx-auto text-center">
        <h1 
          ref={h1Ref}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight opacity-0 h-48 md:h-56 lg:h-72 flex items-center justify-center"
        >
          {allTexts[textIndex]}
        </h1>
        <h2 
          ref={h2Ref}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground opacity-0"
        >
          On-Time. On-Budget. On-Point.
        </h2>

        <div 
          ref={detailsRef}
          className="mt-12 flex justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
        >
            <div className="flex items-center gap-2 opacity-0">
                <Award size={16} />
                <span>Award-winning</span>
            </div>
            <div className="flex items-center gap-2 opacity-0">
                <BarChart size={16} />
                <span>Results-driven</span>
            </div>
            <div className="flex items-center gap-2 opacity-0">
                <Code size={16} />
                <span>Expert developers</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
