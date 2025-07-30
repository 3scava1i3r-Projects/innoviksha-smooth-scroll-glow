import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCursor } from '@/contexts/CursorContext';
import { Link } from 'react-router-dom';

const YangStudio = () => {
  const { setCursorType } = useCursor();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-20 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Yang</span> Studio
          </h1>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto mb-4">
            The Bold, Forward Motion
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Yang Studio is the force of intelligence and motion — agile, proactive, always learning.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">AI & Automation</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In the balance of technology, Yang represents dynamic intelligence and forward momentum. 
              We harness the power of AI to create systems that learn, adapt, and evolve — 
              driving your business into the future with unstoppable force.
            </p>
          </div>
        </div>

        {/* AI & Automation Services */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Domain</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold mb-6 text-foreground">AI & Automation</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                We integrate intelligent automation into the core of your operations. By leveraging state-of-the-art AI models 
                and custom workflows, we help you work smarter, faster, and more efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'AI Agent Development',
                  'Business Process Automation',
                  'Custom AI Model Integration', 
                  'AI-Powered Workflow Design'
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

        {/* Yang Principles */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Intelligent</h3>
              <p className="text-sm text-muted-foreground">
                AI-driven solutions that learn from data and improve over time, making smart decisions autonomously.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Dynamic</h3>
              <p className="text-sm text-muted-foreground">
                Agile systems that adapt quickly to changing requirements and scale with explosive growth.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Progressive</h3>
              <p className="text-sm text-muted-foreground">
                Cutting-edge automation that pushes boundaries and creates competitive advantages.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Process */}
        <div className="bg-background border border-border rounded-lg p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">The Yang Way</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Our approach is bold, rapid, and results-driven — transforming your operations with intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2 text-foreground">Analyze</h4>
              <p className="text-xs text-muted-foreground">Identify automation opportunities with AI-powered insights</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2 text-foreground">Automate</h4>
              <p className="text-xs text-muted-foreground">Deploy intelligent agents and workflow automation</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2 text-foreground">Accelerate</h4>
              <p className="text-xs text-muted-foreground">Scale rapidly with self-improving AI systems</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-4">4</div>
              <h4 className="font-bold mb-2 text-foreground">Advance</h4>
              <p className="text-xs text-muted-foreground">Continuous evolution and competitive advantage</p>
            </div>
          </div>
        </div>

        {/* AI Applications */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-center mb-12 text-foreground">AI in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'AI Agents', desc: 'Autonomous systems that handle complex tasks' },
              { title: 'Smart Workflows', desc: 'Processes that optimize themselves over time' },
              { title: 'Predictive Analytics', desc: 'AI that anticipates future needs and trends' }
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
          <h2 className="text-xl font-bold mb-4 text-foreground">Accelerate with AI</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let Yang Studio unleash the power of intelligent automation in your business. 
            Move faster, think smarter, achieve more.
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

export default YangStudio;
