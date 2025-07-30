import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCursor } from '@/contexts/CursorContext';

const YingStudio = () => {
  const { setCursorType } = useCursor();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-20 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Ying</span> Studio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the harmony of design through minimalism and elegance. Ying Studio focuses on creating balanced, intuitive experiences that resonate with users.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-muted-foreground">
              At Ying Studio, we believe in the power of simplicity. Our approach emphasizes clean lines, 
              thoughtful interactions, and user-centered design principles that create meaningful digital experiences.
            </p>
            <p className="text-muted-foreground">
              We draw inspiration from Eastern philosophy, finding balance between form and function, 
              aesthetics and usability, tradition and innovation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Specializations</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Minimalist Web Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>User Experience Research</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Design Systems</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Brand Identity</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div 
                key={project}
                className="group cursor-none bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-4xl opacity-50">🎨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground text-sm">
                    A minimalist approach to digital storytelling with emphasis on clean typography and spatial relationships.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's collaborate to create something beautiful and meaningful together. 
            Contact Ying Studio to discuss your vision.
          </p>
          <button 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-none"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            Get in Touch
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YingStudio;
