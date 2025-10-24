
import { useCursor } from "@/contexts/CursorContext";
import { motion } from "framer-motion";
import { Rocket, BrainCircuit, ShieldCheck } from 'lucide-react';

const About = () => {
    const { setCursorType } = useCursor();
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setCursorType('default')}
            onMouseLeave={() => setCursorType('default')}
        >
            <div className="container mx-auto text-center max-w-4xl py-28">
                <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our ethos</p>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                    We are your dedicated engineering team, turning complex problems into elegant software and intelligent automation.
                </h2>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold"><Rocket size={40} strokeWidth={1} className="text-muted-foreground" /></div>
                        <p className="text-xs mt-2 text-muted-foreground">Rapid Innovation</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold"><BrainCircuit size={40} strokeWidth={1}  className="text-muted-foreground" /></div>
                        <p className="text-xs mt-2 text-muted-foreground">Intelligent Automation</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold"><ShieldCheck size={40} strokeWidth={1} className="text-muted-foreground" /></div>
                        <p className="text-xs mt-2 text-muted-foreground">Reliable Codebase</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;

// import { useCursor } from "@/contexts/CursorContext";
// import { motion } from "framer-motion";
// // You can add icons here if you wish to replace the text in the circles
// import { Rocket, BrainCircuit, ShieldCheck } from 'lucide-react';

// const About = () => {
//     const { setCursorType } = useCursor();
//     return (
//         <motion.section
//             // Framer motion props are great, no changes needed here.
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//             onMouseEnter={() => setCursorType('default')}
//             onMouseLeave={() => setCursorType('default')}
//             id="about" // Added an ID for potential anchor linking
//             className="py-24" // Added some padding for better spacing
//         >
//             <div className="container mx-auto text-center max-w-4xl">
//                 {/* --- REVISED SUBHEADING --- */}
//                 <p className="text-sm font-semibold uppercase text-primary tracking-widest">
//                     Who We Are
//                 </p>
                
//                 {/* --- REVISED MAIN HEADLINE --- */}
//                 <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
//                     We are your dedicated engineering team, turning complex problems into elegant software and intelligent automation.
//                 </h2>
                
//                 {/* --- REVISED 'SOCIAL PROOF' SECTION --- */}
//                 {/* This section now highlights core values/pillars instead of fake awards. */}
//                 {/* This is more authentic and impactful for a new agency. */}
//                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    
//                     {/* Pillar 1: Innovation & Speed */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center">
//                             <Rocket size={40} className="text-primary" />
//                         </div>
//                         <h3 className="mt-4 font-semibold">Rapid Innovation</h3>
//                         <p className="text-xs mt-1 text-muted-foreground">
//                             From MVP to market-leader, we build and iterate fast.
//                         </p>
//                     </div>
                     
//                     {/* Pillar 2: Intelligence & Automation */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center">
//                             <BrainCircuit size={40} className="text-primary" />
//                         </div>
//                         <h3 className="mt-4 font-semibold">Intelligent Automation</h3>
//                         <p className="text-xs mt-1 text-muted-foreground">
//                             We integrate AI to make your business smarter and more efficient.
//                         </p>
//                     </div>
                     
//                     {/* Pillar 3: Reliability & Quality */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center">
//                             <ShieldCheck size={40} className="text-primary" />
//                         </div>
//                         <h3 className="mt-4 font-semibold">Reliable Codebase</h3>
//                         <p className="text-xs mt-1 text-muted-foreground">
//                             We deliver secure, scalable, and maintainable software.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </motion.section>
//     );
// };

// export default About;