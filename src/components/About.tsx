
import { useCursor } from "@/contexts/CursorContext";
import { motion } from "framer-motion";

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
            <div className="container mx-auto text-center max-w-4xl">
                <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our ethos</p>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                    We are Innoviksha - an award-winning web design and AI automation agency focused on fostering relationships & a great work culture to deliver world-class digital products.
                </h2>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold">Awwwards</div>
                        <p className="text-xs mt-2 text-muted-foreground">Site of the Day</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold">Clutch</div>
                        <p className="text-xs mt-2 text-muted-foreground">Top B2B Company</p>
                    </div>
                     <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-muted-foreground/50 mx-auto flex items-center justify-center font-bold">FWA</div>
                        <p className="text-xs mt-2 text-muted-foreground">Favorite Website</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
