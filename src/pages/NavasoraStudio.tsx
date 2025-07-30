import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCursor } from '@/contexts/CursorContext';
import { Link } from 'react-router-dom';

const NavasoreStudio = () => {
  const { setCursorType } = useCursor();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-20 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Navasora</span> Studio
          </h1>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto mb-4">
            The Interface Between Worlds
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Navasora Studio bridges human and digital — intuitive, elegant, always accessible.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">UX & Digital Experience</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In the balance of technology, Navasora represents the harmony between human intuition and digital capability. 
              We craft experiences that feel natural, responsive, and deeply connected to human needs — 
              creating interfaces that don't just work, but inspire.
            </p>
          </div>
        </div>

        {/* Web & Mobile Applications Services */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Domain</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold mb-6 text-foreground">Web & Mobile Applications</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                We create high-performance web and mobile applications that provide intuitive, engaging user experiences. 
                Our apps are built for performance, security, and growth on any device.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Progressive Web Apps (PWAs)',
                  'Cross-Platform Mobile Apps',
                  'Interactive User Interfaces', 
                  'Real-time Data Applications'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span className="text-sm font-medium text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navasora Principles */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Intuitive</h3>
              <p className="text-sm text-muted-foreground">
                Interfaces that feel natural and effortless, reducing cognitive load while maximizing functionality.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Elegant</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful design that serves purpose, creating memorable experiences through thoughtful aesthetics.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Accessible</h3>
              <p className="text-sm text-muted-foreground">
                Universal design that ensures everyone can interact with digital experiences seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Craft */}
        <div className="bg-background border border-border rounded-lg p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">The Navasora Way</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Our approach is human-centered, aesthetically mindful, and technologically sophisticated — creating bridges between intention and interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2 text-foreground">Understand</h4>
              <p className="text-xs text-muted-foreground">Deep empathy for user needs and behavioral patterns</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2 text-foreground">Design</h4>
              <p className="text-xs text-muted-foreground">Thoughtful interfaces that balance beauty and function</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2 text-foreground">Develop</h4>
              <p className="text-xs text-muted-foreground">Performant applications with seamless interactions</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">4</div>
              <h4 className="font-bold mb-2 text-foreground">Delight</h4>
              <p className="text-xs text-muted-foreground">Memorable experiences that inspire and engage</p>
            </div>
          </div>
        </div>

        {/* Digital Experiences */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Experience Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Mobile First', desc: 'Native-feeling experiences across all devices' },
              { title: 'Interactive', desc: 'Engaging interfaces that respond to user intent' },
              { title: 'Real-time', desc: 'Live data and collaborative experiences' }
            ].map((project, index) => (
              <div 
                key={index}
                className="text-center cursor-none bg-background border border-border rounded-lg p-6 hover:border-foreground/30 transition-all duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <h3 className="text-lg font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 text-foreground">Bridge the Digital Divide</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let Navasora Studio create digital experiences that feel as natural as human conversation. 
            Where technology serves humanity, not the other way around.
          </p>
          <Button asChild>
            <Link 
              to="/contact-us"
              className="cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Contact us
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NavasoreStudio;
