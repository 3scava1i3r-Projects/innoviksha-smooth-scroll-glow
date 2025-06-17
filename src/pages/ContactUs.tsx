
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <section>
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground mt-4">
                Have a project in mind? We'd love to hear about it.
              </p>
            </div>
            <form className="max-w-2xl mx-auto mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." />
              </div>
              <div className="text-center">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
