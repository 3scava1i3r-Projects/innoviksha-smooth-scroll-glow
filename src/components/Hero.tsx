
import { useCursor } from "@/contexts/CursorContext";
import { Award, BarChart, Code } from 'lucide-react';

const Hero = () => {
  const { setCursorType } = useCursor();
  return (
    <section 
      className="pt-40 pb-20"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
          World-Class Digital Products
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground">
          On-Time. On-Budget. On-Point.
        </h2>

        <div className="mt-12 flex justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Award size={16} />
                <span>Award-winning</span>
            </div>
            <div className="flex items-center gap-2">
                <BarChart size={16} />
                <span>Results-driven</span>
            </div>
            <div className="flex items-center gap-2">
                <Code size={16} />
                <span>Expert developers</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
