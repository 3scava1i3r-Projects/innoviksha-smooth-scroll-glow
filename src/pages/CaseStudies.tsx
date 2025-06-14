
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <section>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Case Studies</h1>
            <p className="text-muted-foreground mt-4">
              Our work speaks for itself. Explore our case studies to see how we've helped businesses like yours succeed.
            </p>
            <p className="text-muted-foreground mt-2">
              (Content coming soon)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
