
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Case Studies", href: "/case-studies" },
  { title: "Services", href: "/services" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="text-lg font-bold text-foreground">Innoviksha</Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.title} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none">
              {item.title}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
            <Link to="/contact-us">Contact us</Link>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-16 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none"
                  >
                    {item.title}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link to="/contact-us">Contact us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
