
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    category: "Web Design & Development",
    description: "Complete redesign of an e-commerce platform that increased conversion rates by 45% and improved user engagement.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["45% increase in conversion rate", "60% reduction in bounce rate", "3x faster page load times"],
    tags: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    client: "SecureBank",
    category: "Mobile App Development",
    description: "Revolutionary mobile banking app with advanced security features and intuitive user experience.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["1M+ downloads in first month", "4.8/5 app store rating", "50% increase in digital transactions"],
    tags: ["React Native", "Biometric Auth", "Real-time Analytics", "Cloud Security"]
  },
  {
    id: 3,
    title: "Healthcare Management System",
    client: "MediCare Solutions",
    category: "Web Application",
    description: "Comprehensive healthcare management system streamlining patient care and administrative processes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["40% reduction in admin time", "99.9% system uptime", "HIPAA compliant"],
    tags: ["Vue.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    client: "DataTech Corp",
    category: "Data Visualization",
    description: "Advanced analytics dashboard with AI-powered insights for better business decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["35% faster decision making", "Real-time data processing", "Custom ML models"],
    tags: ["D3.js", "TensorFlow", "GraphQL", "Docker"]
  },
  {
    id: 5,
    title: "Social Learning Platform",
    client: "EduConnect",
    category: "EdTech Platform",
    description: "Interactive learning platform connecting students and educators worldwide with gamification features.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["100K+ active users", "85% course completion rate", "Available in 12 languages"],
    tags: ["React", "Firebase", "WebRTC", "PWA"]
  },
  {
    id: 6,
    title: "Smart Home IoT Dashboard",
    client: "HomeAutomation Pro",
    category: "IoT Application",
    description: "Comprehensive IoT dashboard for smart home management with real-time monitoring and control.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    results: ["30% energy savings", "24/7 monitoring", "Voice control integration"],
    tags: ["Angular", "MQTT", "InfluxDB", "Raspberry Pi"]
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our Work</p>
              <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">Case Studies</h1>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <div className="overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardDescription className="text-sm text-primary font-medium">
                        {study.category}
                      </CardDescription>
                      <CardTitle className="text-lg md:text-xl leading-tight">{study.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-2">
                        Client: {study.client}
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-0">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {study.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold">Key Results:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm" className="w-full group">
                        View Details
                        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
