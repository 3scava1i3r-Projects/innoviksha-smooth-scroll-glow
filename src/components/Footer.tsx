
import { useCursor } from "@/contexts/CursorContext"
import { Dribbble, Instagram, Twitter } from "lucide-react";

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
                            <li><a href="#" className="hover:text-foreground">Case Studies</a></li>
                            <li><a href="#" className="hover:text-foreground">Services</a></li>
                            <li><a href="#" className="hover:text-foreground">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Services</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="#" className="hover:text-foreground">Websites</a></li>
                            <li><a href="#" className="hover:text-foreground">Web Apps</a></li>
                            <li><a href="#" className="hover:text-foreground">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-foreground">AI Automation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Connect</h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground text-xs">
                            <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Innoviksha</h3>
                        <p className="text-muted-foreground mt-4 text-sm">World-Class Digital Products.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20}/></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Dribbble size={20}/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground flex justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Innoviksha. All rights reserved.</p>
                    <div className="flex gap-4 font-semibold">
                        <span>Awwwards</span>
                        <span>Clutch</span>
                        <span>FWA</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
