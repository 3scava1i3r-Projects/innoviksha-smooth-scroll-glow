
import { useCursor } from "@/contexts/CursorContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "PPD Calculator - AI sass product",
    category: "Web Development",
    imgSrc: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/nbpvkofeorqi6mi1ajau.webp",
  },
//   {
//     title: "Enhanced electric scooter experience",
//     category: "Mobile App",
//     imgSrc: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
  {
    title: "TurboETH",
    category: "Integration/Infrastructure",
    imgSrc: "https://user-images.githubusercontent.com/3408362/212647352-4c6e8683-d38f-414f-9d9d-3d55babb8d05.png?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mask Network x mStable",
    category: "Web Design",
    imgSrc: "https://media.contra.com/image/upload/w_800,q_auto/u4zi7nla9zpu5toikg9b.avif",
  },
    {
    title: "Vega",
    category: "Branding",
    imgSrc: "https://media.contra.com/image/upload/fl_progressive/q_auto:best/tqs2lz33ob08kewgxpwg.webp",
  },
];

const CasesStudies = () => {
    const { setCursorType } = useCursor();
    return (
        <section>
            <div className="container mx-auto">
                <motion.div 
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-semibold uppercase text-primary tracking-widest">Case Studies</p>
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                        High-performing digital products with great designs.
                    </h2>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
                    {caseStudies.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a href="#">
                                <div 
                                    className="overflow-hidden bg-muted aspect-video"
                                    onMouseEnter={() => setCursorType('hover')}
                                    onMouseLeave={() => setCursorType('default')}
                                >
                                    <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-muted-foreground">{project.category}</p>
                                    <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                      <Link to="/case-studies">

                    <Button variant="outline" size="lg">
                        Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CasesStudies;
