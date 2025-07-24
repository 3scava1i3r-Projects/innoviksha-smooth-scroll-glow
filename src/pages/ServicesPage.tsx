
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Services variant="light" />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
