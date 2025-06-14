
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section>
            <div className="container mx-auto text-center">
                <p className="text-sm font-semibold uppercase text-primary tracking-widest">Got a project?</p>
                <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl mx-auto">
                    Let's build or improve your digital product
                </h2>
                <div className="mt-10 flex justify-center gap-4">
                    <Button size="lg">Get a quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    <Button size="lg" variant="outline">Schedule a call</Button>
                </div>
            </div>
        </section>
    )
}

export default CTA;
