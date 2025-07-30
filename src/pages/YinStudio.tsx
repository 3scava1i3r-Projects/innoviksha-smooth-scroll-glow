import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCursor } from '@/contexts/CursorContext';
import { Link } from 'react-router-dom';

const YinStudio = () => {
  const { setCursorType } = useCursor();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-20 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Yin</span> Studio
          </h1>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto mb-4">
            The Calm, Deep Logic
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Yin Studio is the invisible force powering your systems — calm, strong, deeply rooted in engineering excellence.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Infrastructure & Systems</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In the balance of technology, Yin represents the foundational strength that enables everything else to flourish. 
              We build the bedrock of your digital presence with methodical precision, quiet confidence, and unwavering reliability.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Domain</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Custom Software Development */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-border pb-4 text-foreground">Custom Software Development</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We design, build, and scale bespoke software solutions that power your business. 
                From complex internal tools to customer-facing SaaS platforms, we deliver secure, scalable, and elegant code.
              </p>
              <div className="space-y-3">
                {[
                  'SaaS Platform Development',
                  'MVP & Product Prototyping', 
                  'Internal Tooling & Dashboards',
                  'API Design & Integration'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span className="text-sm font-medium text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Modernization */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-border pb-4 text-foreground">System Modernization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We help you upgrade legacy systems and unlock new capabilities. We specialize in modernizing codebases, 
                migrating to the cloud, and integrating AI into your existing infrastructure.
              </p>
              <div className="space-y-3">
                {[
                  'Legacy System Upgrades',
                  'Cloud Migration (AWS/GCP/Azure)',
                  'Performance Optimization', 
                  'Adding AI to Existing Apps'
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

        {/* Principles Section */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Foundation First</h3>
              <p className="text-sm text-muted-foreground">
                Strong architecture creates lasting solutions that scale gracefully with your growth.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Balanced Approach</h3>
              <p className="text-sm text-muted-foreground">
                We balance innovation with stability, ensuring reliable systems that embrace the future.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Methodical Craft</h3>
              <p className="text-sm text-muted-foreground">
                Every line of code is deliberate, every system designed with purpose and longevity in mind.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-background border border-border rounded-lg p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">The Yin Way</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Our approach is methodical, thoughtful, and deeply rooted in engineering best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2 text-foreground">Listen</h4>
              <p className="text-xs text-muted-foreground">Understanding your systems deeply before we act</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2 text-foreground">Plan</h4>
              <p className="text-xs text-muted-foreground">Careful architecture and thoughtful design decisions</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2 text-foreground">Build</h4>
              <p className="text-xs text-muted-foreground">Methodical development with precision and care</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">4</div>
              <h4 className="font-bold mb-2 text-foreground">Sustain</h4>
              <p className="text-xs text-muted-foreground">Long-term support and continuous improvement</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 text-foreground">Build on Solid Ground</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let Yin Studio provide the foundational strength your digital systems need to thrive.
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

export default YinStudio;
