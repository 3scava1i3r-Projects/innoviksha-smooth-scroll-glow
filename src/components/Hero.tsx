// import { useCursor } from "@/contexts/CursorContext";
// import { Award, BarChart, Code } from 'lucide-react';
// import { useEffect, useRef, useState } from "react";
// import Anime from 'react-anime';

// const rotatingTexts = [
//   "SaaS Platforms",
//   "AI Agents",
//   "Internal Tools",
//   "MVPs",
//   "Custom Software",
//   "AI Workflows",
//   "Web Apps",
//   "Bots",
//   "Dashboards",
//   "Scripts",
//   "CRMs",
//   "Automation Pipelines",
//   "AI Integrations",
//   "Web Portals",
//   "APIs",
//   "Backend Systems",
// ];

// const Hero = () => {
//   const { setCursorType } = useCursor();
//   const h1Ref = useRef(null);
//   const h2Ref = useRef(null);
//   const detailsRef = useRef(null);
//   const [textIndex, setTextIndex] = useState(0);
//   const [animateDetails, setAnimateDetails] = useState(false);
//   const [animateH2, setAnimateH2] = useState(false);
//   const [animateH1, setAnimateH1] = useState(false);

//   useEffect(() => {
//     let textAnimationInterval: number;

//     // Start animations in sequence
//     const startAnimations = () => {
//       setTimeout(() => setAnimateH1(true), 100);
//       setTimeout(() => setAnimateH2(true), 200);
//       setTimeout(() => setAnimateDetails(true), 400);
      
//       // Start text rotation after initial animations
//       setTimeout(() => {
//         textAnimationInterval = window.setInterval(() => {
//           setTextIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
//         }, 3000);
//       }, 1200);
//     };

//     startAnimations();

//     return () => {
//       if (textAnimationInterval) {
//         clearInterval(textAnimationInterval);
//       }
//     };
//   }, []);

//   return (
//     <section 
//       className="pt-40 pb-20"
//       onMouseEnter={() => setCursorType('default')}
//       onMouseLeave={() => setCursorType('default')}
//     >
//       <div className="container mx-auto text-center">
//         <Anime
//           opacity={animateH1 ? [0, 1] : 0}
//           translateY={animateH1 ? [20, 0] : 20}
//           duration={800}
//           easing="easeOutExpo"
//         >
//           <h1 
//             ref={h1Ref}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight h-16 md:h-20 flex items-center justify-center"
//           >
//             <div className="w-[22ch] text-left">
//               <Anime
//                 _tagName="span"
//                 key={textIndex}
//                 opacity={[0, 1]}
//                 translateY={[20, 0]}
//                 duration={800}
//                 easing="easeOutExpo"
//               >
//                 {rotatingTexts[textIndex]}
//               </Anime>
//             </div>
//           </h1>
//         </Anime>

//         <Anime
//           opacity={animateH2 ? [0, 1] : 0}
//           translateY={animateH2 ? [20, 0] : 20}
//           duration={800}
//           easing="easeOutExpo"
//         >
//           <h2 
//             ref={h2Ref}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-muted-foreground"
//           >
//             On-Time. On-Budget. On-Point.
//           </h2>
//         </Anime>

//         <div 
//           ref={detailsRef}
//           className="mt-12 flex justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
//         >
//           <Anime
//             opacity={animateDetails ? [0, 1] : 0}
//             translateY={animateDetails ? [20, 0] : 20}
//             duration={800}
//             delay={0}
//             easing="easeOutExpo"
//           >
//             <div className="flex items-center gap-2">
//               <Award size={16} />
//               <span>Award-winning</span>
//             </div>
//           </Anime>

//           <Anime
//             opacity={animateDetails ? [0, 1] : 0}
//             translateY={animateDetails ? [20, 0] : 20}
//             duration={800}
//             delay={100}
//             easing="easeOutExpo"
//           >
//             <div className="flex items-center gap-2">
//               <BarChart size={16} />
//               <span>Results-driven</span>
//             </div>
//           </Anime>

//           <Anime
//             opacity={animateDetails ? [0, 1] : 0}
//             translateY={animateDetails ? [20, 0] : 20}
//             duration={800}
//             delay={200}
//             easing="easeOutExpo"
//           >
//             <div className="flex items-center gap-2">
//               <Code size={16} />
//               <span>Expert developers</span>
//             </div>
//           </Anime>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useCursor } from "@/contexts/CursorContext";
import { Award, Zap, Code } from 'lucide-react'; // Changed BarChart to Zap for a more 'AI/automation' feel
import { useEffect, useRef, useState } from "react";
import Anime from 'react-anime';

// --- NEW AGENCY-FOCUSED TEXTS ---
// This list is now tailored to services a modern software/AI agency offers.
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
  // Refs and state management remain the same - they are perfect.
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const detailsRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const [animateDetails, setAnimateDetails] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);
  const [animateH1, setAnimateH1] = useState(false);

  useEffect(() => {
    let textAnimationInterval;
    const startAnimations = () => {
      setTimeout(() => setAnimateH1(true), 100);
      setTimeout(() => setAnimateH2(true), 200);
      setTimeout(() => setAnimateDetails(true), 400);
      
      setTimeout(() => {
        textAnimationInterval = window.setInterval(() => {
          setTextIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
        }, 3000); // 3-second interval feels good for this kind of text
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
        {/* --- REVISED H1 - Action-Oriented Text --- */}
        <Anime
          opacity={animateH1 ? [0, 1] : 0}
          translateY={animateH1 ? [20, 0] : 20}
          duration={800}
          easing="easeOutExpo"
        >
          <h1 
            ref={h1Ref}
            // Adjusted height and alignment for better visual balance
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight h-20 md:h-24 flex items-center justify-center"
          >
            {/* Adjusted width to fit the new, longer text */}
            <div className="w-[25ch] text-left">
              <Anime
                _tagName="span"
                key={textIndex}
                opacity={[0, 1]}
                translateY={[20, 0]}
                duration={800}
                easing="easeOutExpo"
                // Added a key to the span to ensure React re-renders it on change
              >
                <span key={textIndex}>{rotatingTexts[textIndex]}</span>
              </Anime>
            </div>
          </h1>
        </Anime>

        {/* --- REVISED H2 - The Agency's Core Promise --- */}
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
            With Code and AI.
          </h2>
        </Anime>

        {/* --- REVISED DETAILS - Agency Value Propositions --- */}
        <div 
          ref={detailsRef}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
        >
          {/* Detail 1: Focus on Automation/Efficiency */}
          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={0}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <Zap size={16} /> {/* Zap icon implies speed and automation */}
              <span>AI-Powered Solutions</span>
            </div>
          </Anime>

          {/* Detail 2: Focus on Quality/Craftsmanship */}
          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={100}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span>Expert Development Team</span>
            </div>
          </Anime>

          {/* Detail 3: Focus on Reliability/Trust */}
          <Anime
            opacity={animateDetails ? [0, 1] : 0}
            translateY={animateDetails ? [20, 0] : 20}
            duration={800}
            delay={200}
            easing="easeOutExpo"
          >
            <div className="flex items-center gap-2">
              <Award size={16} /> {/* Award can now mean 'quality' or 'top-rated' */}
              <span>On-Time & On-Budget</span>
            </div>
          </Anime>
        </div>
      </div>
    </section>
  );
};

export default Hero;