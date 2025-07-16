
import { useCursor } from "@/contexts/CursorContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const works = [
  {
    title: "Conversational AI Voice Assistant for Call Center Automation",
    category: "Voice AI",
    imgSrc: "https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "AI-Based Personalized Fitness Plan Generator",
    category: "Health & Wellness Tech",
    imgSrc: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Customer Feedback Analyzer with Automated Review Generation",
    category: "Customer Experience",
    imgSrc: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
//   {
//     title: "AI Document Assistant for Legal Contract Review",
//     category: "LegalTech Automation",
//     imgSrc: "https://images.unsplash.com/photo-1616587892205-786b5c61603f?q=80&w=2070&auto=format&fit=crop",
//   },
  {
    title: "Real Estate Listing Auto-Poster for WhatsApp & Facebook Groups",
    category: "Real Estate Tools",
    imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Inventory & Sales Tracker for Small and Medium Farms",
    category: "AgriTech Software",
    imgSrc: "https://img.freepik.com/free-photo/farmer-with-tablet-close-up_23-2148579698.jpg?ga=GA1.1.183046129.1750250706&semt=ais_hybrid&w=740",
  },
  {
    title: "Intelligent Document Processing Engine for Legal, HR, and Real Estate",
    category: "Enterprise AI",
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Private Label Product & Review Tracker for Amazon FBA Sellers",
    category: "E-commerce Tools",
    imgSrc: "https://img.freepik.com/free-photo/medium-shot-woman-with-tablet_23-2148902535.jpg?ga=GA1.1.183046129.1750250706&semt=ais_hybrid&w=740",
  },
  {
    title: "End-to-End Job Management Platform for Local Service Providers",
    category: "Field Services Software",
    imgSrc: "https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-commerce platform for a fashion brand",
    category: "Web Design",
    imgSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // {
  //   title: "Enhanced electric scooter experience",
  //   category: "Mobile App",
  //   imgSrc: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  {
    title: "Lightweight and easy-to-use website for a cybersecurity startup",
    category: "Web Design",
    imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unique website with a beautiful presentation of sustainably-oriented toolbox",
    category: "Branding",
    imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Custom CRM System for Sales and Team Management",
    category: "Business Automation",
    imgSrc: "https://images.pexels.com/photos/7869320/pexels-photo-7869320.jpeg",
  },
  {
    title: "AI-Powered Chatbot for 24/7 Customer Support",
    category: "AI Integration",
    imgSrc: "https://www.shutterstock.com/image-photo/person-use-customer-service-support-600nw-2267815663.jpg",
  },
];


const Works = () => {
    const { setCursorType } = useCursor();
    return (

            <div className="bg-background">
      <Header />
      <main>
                <section>
            <div className="container mx-auto">
                <motion.div 
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our Work</p>
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
                        High-performing digital products with great designs.
                    </h2>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
                    {works.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
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

                {/* <div className="mt-20 text-center">
                    <Button variant="outline" size="lg">
                        See more work <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div> */}
            </div>
        </section>
      </main>
      <Footer />
    </div>

    );
}

export default Works;








