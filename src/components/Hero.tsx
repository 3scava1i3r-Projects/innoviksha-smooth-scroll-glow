
import { useCursor } from "@/contexts/CursorContext";
import { Award, BarChart, Code } from 'lucide-react';
import { motion } from "framer-motion";

const Hero = () => {
  const { setCursorType } = useCursor();
  return (
    <section 
      className="pt-40 pb-20"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
        >
          World-Class Digital Products
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground"
        >
          On-Time. On-Budget. On-Point.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
