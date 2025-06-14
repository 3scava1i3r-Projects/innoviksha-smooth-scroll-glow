
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCursor } from "@/contexts/CursorContext"
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can you deliver on a tight deadline?",
    answer: "Absolutely. We thrive on challenges and are well-equipped to handle time-sensitive projects. Our agile process allows us to deliver high-quality work on schedule. Let's discuss your timeline.",
  },
  {
    question: "How do we get started?",
    answer: "The first step is a discovery call where we understand your project goals, requirements, and vision. From there, we'll craft a detailed proposal and project plan. Just click 'Get a quote' to schedule a call.",
  },
  {
    question: "What is your design process like?",
    answer: "Our design process is collaborative and iterative. We start with research and strategy, move to wireframing and prototyping, and then to high-fidelity visual design. We involve you at every stage to ensure the final product aligns perfectly with your vision.",
  },
];

const FAQ = () => {
    const { setCursorType } = useCursor();
    return (
        <section>
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm font-semibold uppercase text-primary tracking-widest">FAQs</p>
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                        Simple answers to big questions.
                    </h2>
                    <Accordion type="single" collapsible className="w-full mt-8">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold text-left py-4 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
                 <motion.div 
                    className="w-full aspect-square bg-muted overflow-hidden sticky top-24"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                >
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team working" className="w-full h-full object-cover"/>
                </motion.div>
            </div>
        </section>
    );
}

export default FAQ;
