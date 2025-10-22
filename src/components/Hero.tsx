import { useCursor } from "@/contexts/CursorContext";
import { Award, Zap, Code } from 'lucide-react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { getPerformanceMode } from '@/utils/performance';

const rotatingTexts = [
  "Build Your Custom SaaS",
  "Automate Your Business",
  "Launch Your MVP",
  "Develop Your AI Agent",
  "Integrate AI Workflows",
  "Create Internal Tools",
  "Modernize Your Web App",
  "Scale with Custom Bots",
  "Design Your API",
  "Build Your Data Dashboard",
];

const Hero = () => {
  const { setCursorType } = useCursor();
  const [textIndex, setTextIndex] = useState(0);
  const performanceMode = getPerformanceMode();

  useEffect(() => {
    // Slower rotation on Mac Chrome for better performance
    const interval = performanceMode.reduceAnimations ? 4000 : 3000;
    
    const textAnimationInterval = window.setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
    }, interval);

    return () => {
      clearInterval(textAnimationInterval);
    };
  }, [performanceMode.reduceAnimations]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: performanceMode.reduceAnimations ? 0.5 : 0.8,
        ease: "easeOut",
        delay: performanceMode.reduceAnimations ? delay * 0.7 : delay
      }
    })
  };

  return (
    <section 
      className="pt-40 pb-20"
      onMouseEnter={() => setCursorType('default')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight h-20 md:h-24 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <div className="w-[25ch] text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {rotatingTexts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          With Code and AI.
        </motion.h2>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <motion.div className="flex items-center gap-2" variants={containerVariants} custom={0.4}>
            <Zap size={16} />
            <span>AI-Powered Solutions</span>
          </motion.div>
          <motion.div className="flex items-center gap-2" variants={containerVariants} custom={0.5}>
            <Code size={16} />
            <span>Expert Development Team</span>
          </motion.div>
          <motion.div className="flex items-center gap-2" variants={containerVariants} custom={0.6}>
            <Award size={16} />
            <span>On-Time & On-Budget</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
