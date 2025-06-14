
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
                            <li><a href="#" className="hover:text-foreground cursor-none">Case Studies</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Services</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Services</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="#" className="hover:text-foreground cursor-none">Websites</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Web Apps</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">AI Automation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Connect</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="#" className="hover:text-foreground cursor-none">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground cursor-none">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Innoviksha</h3>
                        <p className="text-muted-foreground mt-4 text-sm">World-Class Digital Products.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Instagram size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Dribbble size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><Linkedin size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground cursor-none"><X size={20}/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground flex justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Innoviksha. All rights reserved.</p>
                    <div className="flex gap-4 font-semibold">
                        <span className="cursor-none">Awwwards</span>
                        <span className="cursor-none">Clutch</span>
                        <span className="cursor-none">FWA</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
