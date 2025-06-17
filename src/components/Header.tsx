
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
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

// No changes needed here
const navItems = [
  { title: "Case Studies", href: "/case-studies" },
  { title: "Services", href: "/services" },
  { title: "Testimonials", href: "/testimonials" }, // This will be handled in the JSX
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="text-lg font-bold text-foreground">Innoviksha</Link>
        
        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-6">
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