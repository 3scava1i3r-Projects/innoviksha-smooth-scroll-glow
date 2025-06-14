
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = ["Case Studies", "Services", "Contact Us"];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Innoviksha</h1>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <Button className="hidden md:inline-flex">Get a quote</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
    </header>
  );
};

export default Header;
