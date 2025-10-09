// import { useCursor } from "@/contexts/CursorContext"
// import { Dribbble, Instagram, Linkedin, X } from "lucide-react";



// const Footer = () => {
//     const { setCursorType } = useCursor();
//     return (
//         <footer 
//             className="dark bg-background text-foreground py-20"
//             onMouseEnter={() => setCursorType('default')}
//             onMouseLeave={() => setCursorType('default')}
//         >
//             <div className="container mx-auto">
//                 <div className="grid md:grid-cols-4 gap-8">
//                     <div>
//                         <h3 className="font-bold text-lg">Company</h3>
//                         <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
//                             <li><a href="/works" className="hover:text-foreground cursor-none">Our Work</a></li>
//                             {/* <li><a href="/case-studies" className="hover:text-foreground cursor-none">Case Studies</a></li> */}
//                             <li><a href="/services" className="hover:text-foreground cursor-none">Services</a></li>
//                             {/* <li><a href="#" className="hover:text-foreground cursor-none">About Us</a></li> soon */}
//                             <li><a href="/contact-us" className="hover:text-foreground cursor-none">Contact</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-bold text-lg">Services</h3>
//                         <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
//                             <li><a href="#" className="hover:text-foreground cursor-none">Custom Software Development</a></li>
//                             <li><a href="#" className="hover:text-foreground cursor-none">AI & Automation</a></li>
//                             <li><a href="#" className="hover:text-foreground cursor-none">Web & Mobile Applications</a></li>
//                             <li><a href="#" className="hover:text-foreground cursor-none">System Modernization</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-bold text-lg">Connect</h3>
//                         {/* <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
//                             <li><a href="/terms-of-use" className="hover:text-foreground cursor-none">Terms of Use</a></li>
//                         </ul> */}
//                         <a href="mailto:info@innoviksha.xyz" className="block mt-4 text-sm text-muted-foreground hover:text-foreground cursor-none">
//                             info@innoviksha.xyz
//                         </a>
//                     </div>
//                     <div>
//                         <h3 className="font-bold text-lg">Innoviksha</h3>
//                         <p className="text-muted-foreground mt-4 text-sm">Building elegant software and intelligent automation for growing businesses.</p>
                        
//                         {/* Email added here */}
                        
                        
//                         {/* <div className="flex gap-4 mt-4">
//                             <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Instagram size={20}/></a>
//                             <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Dribbble size={20}/></a>
//                             <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Linkedin size={20}/></a>
//                             <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><X size={20}/></a>
//                         </div> */}
//                     </div>
//                 </div>
//                 <div className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground flex justify-between items-center">
//                     <p>© {new Date().getFullYear()} Innoviksha. All rights reserved.</p>
//                     <div className="flex gap-4 font-semibold">
//                         {/* <span className="cursor-none">Awwwards</span>
//                         <span className="cursor-none">Clutch</span>
//                         <span className="cursor-none">FWA</span> */}
//                         <a href="/terms-of-use" className="hover:text-foreground cursor-none">Terms of Use</a>
//                         {/* <a href="/privacy-policy" className="hover:text-foreground cursor-none">Privacy Policy</a> */}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer;




import { useCursor } from "@/contexts/CursorContext"
import { Dribbble, Instagram, Linkedin, X } from "lucide-react";



const Footer = () => {
    const { setCursorType } = useCursor();
    return (
        <footer 
            className="dark bg-background text-foreground py-20"
            onMouseEnter={() => setCursorType('default')}
            onMouseLeave={() => setCursorType('default')}
        >
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg">Company</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="/works" className="hover:text-foreground cursor-none">Our Work</a></li>
                            {/* <li><a href="/case-studies" className="hover:text-foreground cursor-none">Case Studies</a></li> */}
                            <li><a href="/services" className="hover:text-foreground cursor-none">Services</a></li>
                            {/* <li><a href="#" className="hover:text-foreground cursor-none">About Us</a></li> soon */}
                            <li><a href="/contact-us" className="hover:text-foreground cursor-none">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Services</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="#" className="hover:text-foreground cursor-none">Custom Software Development</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">AI & Automation</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Web & Mobile Applications</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">System Modernization</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Connect</h3>
                        {/* The email is now in a list to match the style of other columns */}
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li>
                                {/* <a href="mailto:info@innoviksha.xyz" className="hover:text-foreground cursor-none">
                                    info@innoviksha.xyz
                                </a> */}
                            </li>
                        </ul>
                        {/* <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="/terms-of-use" className="hover:text-foreground cursor-none">Terms of Use</a></li>
                        </ul> */}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">HIE Agency</h3>
                        <p className="text-muted-foreground mt-4 text-sm">Building elegant software and intelligent automation for growing businesses.</p>
                        
                        {/* Email added here */}
                        
                        
                        {/* <div className="flex gap-4 mt-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Instagram size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Dribbble size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Linkedin size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><X size={20}/></a>
                        </div> */}
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground flex justify-between items-center">
                    {/* <p>© {new Date().getFullYear()} HIE. All rights reserved. HIE is a brand of Innoviksha</p> */}
                    <div className="flex gap-4 font-semibold">
                        {/* <span className="cursor-none">Awwwards</span>
                        <span className="cursor-none">Clutch</span>
                        <span className="cursor-none">FWA</span> */}
                        <a href="/terms-of-use" className="hover:text-foreground cursor-none">Terms of Use</a>
                        {/* <a href="/privacy-policy" className="hover:text-foreground cursor-none">Privacy Policy</a> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;