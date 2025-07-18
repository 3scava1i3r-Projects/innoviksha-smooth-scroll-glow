
import { useCursor } from "@/contexts/CursorContext";
import { motion } from "framer-motion";

const clientLogos = [
    { name: "Apollo", logo: "APOLLO" },
    { name: "Jasper", logo: "Jasper" },
    { name: "Unilever", logo: "Unilever" },
    { name: "Forbes", logo: "Forbes" },
    { name: "Pavlock", logo: "pavlock" },
    { name: "Wired", logo: "WIRED" },
    { name: "The Next Web", logo: "TNW" },
    { name: "Revolt", logo: "REVOLT" },
];

const testimonials = [
    {
        name: "John Doe, CEO of Apollo",
        text: "Working with Innoviksha was a game-changer. Their team is not just incredibly talented but also a pleasure to work with.",
        rating: 5,
    },
    {
        name: "Jane Smith, CTO of Jasper",
        text: "The final product exceeded our expectations. The attention to detail and commitment to quality is evident in every aspect of their work.",
        rating: 5,
    },
];

const Clients = () => {
    const { setCursorType } = useCursor();
    return (
        <section
            onMouseEnter={() => setCursorType('default')}
            onMouseLeave={() => setCursorType('default')}
        >
            <div className="container mx-auto">
                <motion.div 
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-semibold uppercase text-primary tracking-widest">Testimonials</p>
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                        Our clients love working with us!
                    </h2>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={testimonial.name} 
                            className="bg-card p-8 border"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
                                ))}
                            </div>
                            <p className="mt-4 text-lg">"{testimonial.text}"</p>
                            <p className="mt-6 font-semibold">{testimonial.name}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
                        {clientLogos.map((client) => (
                            <div key={client.name} className="text-muted-foreground font-bold text-xl grayscale hover:grayscale-0 transition-all duration-300">
                                {client.logo}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Clients;
