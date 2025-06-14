
import { useCursor } from "@/contexts/CursorContext";
import { Award, BarChart, Code } from 'lucide-react';
import { useEffect, useRef } from "react";
import anime from "animejs";

const Hero = () => {
  const { setCursorType } = useCursor();
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight opacity-0"
        >
          World-Class Digital Products
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
