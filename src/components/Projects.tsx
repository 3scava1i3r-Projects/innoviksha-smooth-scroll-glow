
import { useCursor } from "@/contexts/CursorContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce platform for a fashion brand",
    category: "Web Design",
    imgSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Enhanced electric scooter experience",
    category: "Mobile App",
    imgSrc: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lightweight and easy-to-use website for a cybersecurity startup",
    category: "Web Design",
    imgSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    title: "Unique website with a beautiful presentation of sustainably-oriented toolbox",
    category: "Branding",
    imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
    const { setCursorType } = useCursor();
    return (
        <section>
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our Work</p>
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                        High-performing digital products with great designs.
                    </h2>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
                    {projects.map((project, index) => (
                        <div key={index} className="group"
                             onMouseEnter={() => setCursorType('hover')}
                             onMouseLeave={() => setCursorType('default')}
                        >
                            <a href="#">
                                <div className="overflow-hidden bg-muted aspect-video">
                                    <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-muted-foreground">{project.category}</p>
                                    <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button variant="outline" size="lg">
                        See more work <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
