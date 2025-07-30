
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Link } from "react-router-dom";

// const navItems = [
//   { title: "Case Studies", href: "/case-studies" },
//   { title: "Services", href: "/services" },
//   { title: "Testimonials", href: "/testimonials" },
//   // { title: "Contact Us", href: "/contact-us" },
// ];

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
//       <div className="container mx-auto flex h-20 items-center justify-between">
//         <Link to="/" className="text-lg font-bold text-foreground">Innoviksha</Link>
//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link key={item.title} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none">
//               {item.title}
//             </Link>
//           ))}
//         </nav>
//         <Button asChild className="hidden md:inline-flex">
//             <Link to="/contact-us">Contact us</Link>
//         </Button>
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right">
//               <nav className="flex flex-col gap-6 mt-16 items-center">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.title}
//                     to={item.href}
//                     className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none"
//                   >
//                     {item.title}
//                   </Link>
//                 ))}
//                 <Button asChild className="mt-4">
//                   <Link to="https://cal.com/innoviksha">Schedule a Call</Link>
//                 </Button>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { Button } from "@/components/ui/button";
import { Menu, ChevronDownIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuPortal } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

// Navigation items
const navItems = [
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Testimonials", href: "/testimonials" }, // This will be handled in the JSX
];

// Studio items for dropdown
const studioItems = [
  { title: "Yin Studio", href: "/studio/yin", description: "Infrastructure & Systems" },
  { title: "Yang Studio", href: "/studio/yang", description: "AI & Automation" },
  { title: "Navasora Studio", href: "/studio/navasora", description: "UX & Digital Experience" },
];

// Free tools items for dropdown
const freeToolsItems = [
  { title: "URL Shortener", href: "/url-shortener" },
  { title: "Website Analyzer", href: "/website-analyzer" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="text-lg font-bold text-foreground">InnoV</Link>
        
        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Our Work Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none">
              Our Work
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent className="w-64">
                {studioItems.map((studio) => (
                  <DropdownMenuItem key={studio.title} asChild>
                    <Link 
                      to={studio.href}
                      className="cursor-none"
                    >
                      {studio.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          {/* Free Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none">
              Free Tools
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent className="w-64">
                {freeToolsItems.map((tool) => (
                  <DropdownMenuItem key={tool.title} asChild>
                    <Link 
                      to={tool.href}
                      className="cursor-none"
                    >
                      {tool.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          {navItems.map((item) => {
            // Check if the current item is "Testimonials"
            const isComingSoon = item.title === "Testimonials";

            return isComingSoon ? (
              // If it's "Coming Soon", render the disabled version with a tooltip
              <div key={item.title} className="relative group flex items-center">
                <span className="text-sm font-medium text-muted-foreground opacity-50 line-through cursor-not-allowed">
                  {item.title}
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-background bg-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
            ) : (
              // Otherwise, render the normal link
              <Link 
                key={item.title} 
                to={item.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <Button asChild className="hidden md:inline-flex">
            <Link to="/contact-us">Contact us</Link>
        </Button>
        
        {/* --- Mobile Navigation (Sheet) --- */}
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
                {/* Our Work Section - Mobile */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-lg font-medium text-foreground">Our Work</span>
                  <div className="flex flex-col gap-2 items-center">
                    {studioItems.map((studio) => (
                      <Link
                        key={studio.title}
                        to={studio.href}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-none text-center"
                      >
                        {studio.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Free Tools Section - Mobile */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-lg font-medium text-foreground">Free Tools</span>
                  <div className="flex flex-col gap-2 items-center">
                    {freeToolsItems.map((tool) => (
                      <Link
                        key={tool.title}
                        to={tool.href}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-none text-center"
                      >
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {navItems.map((item) => {
                  const isComingSoon = item.title === "Testimonials";

                  return isComingSoon ? (
                    // Disabled version for mobile (tooltip isn't effective on touch)
                    <span 
                      key={item.title}
                      className="text-lg font-medium text-muted-foreground opacity-50 line-through"
                    >
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline cursor-none"
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <Button asChild className="mt-4">
                  {/* It's good practice to use a more descriptive name like "Schedule a Discovery Call" */}
                  <Link to="https://cal.com/innoviksha">Schedule a Call</Link>
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
