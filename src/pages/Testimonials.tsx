
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe, CEO of Apollo",
        text: "Working with Innoviksha was a game-changer. Their team is not just incredibly talented but also a pleasure to work with.",
        rating: 5,
        category: "Clutch #1"
    },
    {
        name: "Jane Smith, CTO of Jasper",
        text: "The final product exceeded our expectations. The attention to detail and commitment to quality is evident in every aspect of their work.",
        rating: 5,
        category: "Top-rated"
    },
    {
        name: "Samuel Green, Marketing Head",
        text: "It's been about a month, and we've already more than doubled our conversion. The results speak for themselves.",
        rating: 5,
        category: "Results-driven"
    },
    {
        name: "Elara Vance, Product Owner",
        text: "They were one of the best UX designers and developers I've worked with. Their friendliness set them apart.",
        rating: 5,
        category: "Expert-vetted"
    },
    {
        name: "Chen Lin, Founder",
        text: "Their people are super kind, thoughtful, helpful, and fun to work with. Each person is there to help the process and thinks about how they can make our project better.",
        rating: 5,
        category: "Collaborative"
    }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`text-left ${!isEven ? 'md:order-last' : ''} flex flex-col items-start`}>
        <motion.p 
          className="text-2xl md:text-4xl font-bold leading-tight tracking-tighter"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "{testimonial.text}"
        </motion.p>
      </div>
      <motion.div 
        className="text-left"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-sm font-semibold uppercase text-primary tracking-widest">{testimonial.category}</p>
        <div className="flex items-center gap-1 mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
            ))}
        </div>
        <p className="mt-6 font-semibold">{testimonial.name}</p>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <section>
          <div className="container mx-auto text-center">
            <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              Building trust and delivering real results.
            </motion.h1>
            <motion.p 
                className="text-muted-foreground mt-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our clients are our partners. We're proud to have worked with amazing companies and helped them achieve their goals. Here's what they have to say about us.
            </motion.p>
          </div>
        </section>

        <section>
            <div className="container mx-auto space-y-24 md:space-y-32">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} index={i} />
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
