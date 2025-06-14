
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = ["Case Studies", "Services", "Contact Us"];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <h1 className="text-lg font-bold text-foreground">Innoviksha Solutions LLP</h1>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <Button className="hidden md:inline-flex">Get a quote</Button>
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
                  <a
                    key={item}
                    href="#"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Button className="mt-4">Get a quote</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
