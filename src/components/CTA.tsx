
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto text-center">
                <p className="text-sm font-semibold uppercase text-primary tracking-widest">Got a project?</p>
                <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl mx-auto">
                    Let's build or improve your digital product
                </h2>
                <div className="mt-10 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link to="/contact-us">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button size="lg" variant="outline">Schedule a call</Button>
                </div>
            </div>
        </motion.section>
    )
}

export default CTA;
