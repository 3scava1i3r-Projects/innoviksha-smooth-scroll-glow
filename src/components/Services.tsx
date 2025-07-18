// // import {
// //     Accordion,
// //     AccordionContent,
// //     AccordionItem,
// //     AccordionTrigger,
// // } from "@/components/ui/accordion"
// // import { useCursor } from "@/contexts/CursorContext"
// // import { motion } from "framer-motion";

// // // const services = [
// // //     {
// // //         title: "Websites",
// // //         description: "We build high-performing, beautiful websites that are fast, secure, and easy to manage. Our websites are designed to convert visitors into customers.",
// // //         subServices: ["Strategy & Prototyping", "Web & Mobile Design", "Front-end Development", "CMS & E-commerce"],
// // //     },
// // //     {
// // //         title: "Web Apps",
// // //         description: "From complex enterprise platforms to user-friendly consumer apps, we build scalable and robust web applications that solve real-world problems.",
// // //          subServices: ["Product Discovery", "UX/UI Design", "Full-stack Development", "API Integrations"],
// // //     },
// // //     {
// // //         title: "Mobile Apps",
// // //         description: "We design and develop native and cross-platform mobile apps for iOS and Android that deliver engaging experiences to your users.",
// // //         subServices: ["iOS Development", "Android Development", "React Native", "Firebase Integration"],
// // //     },
// // //     {
// // //         title: "AI Automation",
// // //         description: "Leverage the power of AI to automate your business processes, improve efficiency, and drive growth. We build custom AI solutions tailored to your needs.",
// // //         subServices: ["Process Analysis", "AI Model Integration", "Custom Chatbots", "Workflow Automation"],
// // //     },
// // // ];

// // const services = [
// //     {
// //         title: "Custom Software Development",
// //         description: "We design, build, and scale bespoke software solutions that power your business. From complex internal tools to customer-facing SaaS platforms, we deliver secure, scalable, and elegant code.",
// //         subServices: [
// //             "SaaS Platform Development",
// //             "MVP & Product Prototyping",
// //             "Internal Tooling & Dashboards",
// //             "API Design & Integration"
// //         ],
// //     },
// //     {
// //         title: "AI & Automation",
// //         description: "We integrate intelligent automation into the core of your operations. By leveraging state-of-the-art AI models and custom workflows, we help you work smarter, faster, and more efficiently.",
// //          subServices: [
// //             "AI Agent Development",
// //             "Business Process Automation",
// //             "Custom AI Model Integration",
// //             "AI-Powered Workflow Design"
// //         ],
// //     },
// //     {
// //         title: "Web & Mobile Applications",
// //         description: "We create high-performance web and mobile applications that provide intuitive, engaging user experiences. Our apps are built for performance, security, and growth on any device.",
// //         subServices: [
// //             "Progressive Web Apps (PWAs)",
// //             "Cross-Platform Mobile Apps",
// //             "Interactive User Interfaces",
// //             "Real-time Data Applications"
// //         ],
// //     },
// //     // Optional fourth service, focused on existing systems
// //     {
// //         title: "System Modernization",
// //         description: "We help you upgrade legacy systems and unlock new capabilities. We specialize in modernizing codebases, migrating to the cloud, and integrating AI into your existing infrastructure.",
// //         subServices: [
// //             "Legacy System Upgrades",
// //             "Cloud Migration (AWS/GCP/Azure)",
// //             "Performance Optimization",
// //             "Adding AI to Existing Apps"
// //         ],
// //     },
// // ];

// // const Services = () => {
// //     const { setCursorType } = useCursor();
// //     return (
// //         <section 
// //             className="dark bg-background text-foreground"
// //             onMouseEnter={() => setCursorType('default')}
// //             onMouseLeave={() => setCursorType('default')}
// //         >
// //             <div className="container mx-auto">
// //                 <div className="max-w-2xl">
// //                     <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our Services</p>
// //                     <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
// //                         World-class digital products and five-star services.
// //                     </h2>
// //                 </div>

// //                 <div className="mt-16">
// //                     <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
// //                         {services.map((service, index) => (
// //                             <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
// //                                 <AccordionTrigger className="text-2xl md:text-3xl font-bold py-8 hover:no-underline text-left">
// //                                     {service.title}
// //                                 </AccordionTrigger>
// //                                 <AccordionContent className="pb-8">
// //                                     <div className="grid md:grid-cols-2 gap-8">
// //                                         <motion.p
// //                                           initial={{ opacity: 0, x: -20 }}
// //                                           animate={{ opacity: 1, x: 0 }}
// //                                           transition={{ duration: 0.5, delay: 0.1 }}
// //                                           className="text-muted-foreground"
// //                                         >
// //                                           {service.description}
// //                                         </motion.p>
// //                                         <div className="grid grid-cols-2 gap-4 text-sm">
// //                                             {service.subServices.map((sub, i) => (
// //                                                 <motion.p 
// //                                                   key={sub}
// //                                                   initial={{ opacity: 0, x: -20 }}
// //                                                   animate={{ opacity: 1, x: 0 }}
// //                                                   transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
// //                                                 >
// //                                                   {sub}
// //                                                 </motion.p>
// //                                             ))}
// //                                         </div>
// //                                     </div>
// //                                 </AccordionContent>
// //                             </AccordionItem>
// //                         ))}
// //                     </Accordion>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Services;


// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import { useCursor } from "@/contexts/CursorContext"
// import { motion } from "framer-motion";

// // ... (services array remains the same)

// const services = [
//     {
//         title: "Custom Software Development",
//         description: "We design, build, and scale bespoke software solutions that power your business. From complex internal tools to customer-facing SaaS platforms, we deliver secure, scalable, and elegant code.",
//         subServices: [
//             "SaaS Platform Development",
//             "MVP & Product Prototyping",
//             "Internal Tooling & Dashboards",
//             "API Design & Integration"
//         ],
//     },
//     {
//         title: "AI & Automation",
//         description: "We integrate intelligent automation into the core of your operations. By leveraging state-of-the-art AI models and custom workflows, we help you work smarter, faster, and more efficiently.",
//          subServices: [
//             "AI Agent Development",
//             "Business Process Automation",
//             "Custom AI Model Integration",
//             "AI-Powered Workflow Design"
//         ],
//     },
//     {
//         title: "Web & Mobile Applications",
//         description: "We create high-performance web and mobile applications that provide intuitive, engaging user experiences. Our apps are built for performance, security, and growth on any device.",
//         subServices: [
//             "Progressive Web Apps (PWAs)",
//             "Cross-Platform Mobile Apps",
//             "Interactive User Interfaces",
//             "Real-time Data Applications"
//         ],
//     },
//     {
//         title: "System Modernization",
//         description: "We help you upgrade legacy systems and unlock new capabilities. We specialize in modernizing codebases, migrating to the cloud, and integrating AI into your existing infrastructure.",
//         subServices: [
//             "Legacy System Upgrades",
//             "Cloud Migration (AWS/GCP/Azure)",
//             "Performance Optimization",
//             "Adding AI to Existing Apps"
//         ],
//     },
// ];


// const Services = () => {
//     const { setCursorType } = useCursor();
//     return (
//         <section 
//             className="dark bg-background text-foreground py-20"
//             onMouseEnter={() => setCursorType('default')}
//             onMouseLeave={() => setCursorType('default')}
//         >
//             <div className="container mx-auto">
//                 <div className="max-w-2xl">
//                     <p className="text-sm font-semibold uppercase text-primary tracking-widest">Our Services</p>
//                     <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
//                         World-class digital products and five-star services.
//                     </h2>
//                 </div>

//                 <div className="mt-16">
//                     <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
//                         {services.map((service, index) => (
//                             <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
//                                 <AccordionTrigger className="text-2xl md:text-3xl font-bold py-8 hover:no-underline text-left">
//                                     {service.title}
//                                 </AccordionTrigger>
//                                 <AccordionContent className="pb-8">
//                                     <div className="grid md:grid-cols-2 gap-8">
//                                         <motion.p
//                                           // Animate when the component is in the viewport
//                                           initial={{ opacity: 0, x: -20 }}
//                                           whileInView={{ opacity: 1, x: 0 }}
//                                           viewport={{ once: true }} // Ensures animation runs only once
//                                           transition={{ duration: 0.5, delay: 0.1 }}
//                                           className="text-muted-foreground"
//                                         >
//                                           {service.description}
//                                         </motion.p>
//                                         <div className="grid grid-cols-2 gap-4 text-sm">
//                                             {service.subServices.map((sub, i) => (
//                                                 <motion.p 
//                                                   key={sub}
//                                                   // Animate each sub-service when it's in the viewport
//                                                   initial={{ opacity: 0, x: -20 }}
//                                                   whileInView={{ opacity: 1, x: 0 }}
//                                                   viewport={{ once: true }} // Ensures animation runs only once
//                                                   transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
//                                                 >
//                                                   {sub}
//                                                 </motion.p>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </AccordionContent>
//                             </AccordionItem>
//                         ))}
//                     </Accordion>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Services;

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCursor } from "@/contexts/CursorContext"
import { motion } from "framer-motion";

const services = [
    {
        title: "Custom Software Development",
        description: "We design, build, and scale bespoke software solutions that power your business. From complex internal tools to customer-facing SaaS platforms, we deliver secure, scalable, and elegant code.",
        subServices: [
            "SaaS Platform Development",
            "MVP & Product Prototyping",
            "Internal Tooling & Dashboards",
            "API Design & Integration"
        ],
    },
    {
        title: "AI & Automation",
        description: "We integrate intelligent automation into the core of your operations. By leveraging state-of-the-art AI models and custom workflows, we help you work smarter, faster, and more efficiently.",
         subServices: [
            "AI Agent Development",
            "Business Process Automation",
            "Custom AI Model Integration",
            "AI-Powered Workflow Design"
        ],
    },
    {
        title: "Web & Mobile Applications",
        description: "We create high-performance web and mobile applications that provide intuitive, engaging user experiences. Our apps are built for performance, security, and growth on any device.",
        subServices: [
            "Progressive Web Apps (PWAs)",
            "Cross-Platform Mobile Apps",
            "Interactive User Interfaces",
            "Real-time Data Applications"
        ],
    },
    {
        title: "System Modernization",
        description: "We help you upgrade legacy systems and unlock new capabilities. We specialize in modernizing codebases, migrating to the cloud, and integrating AI into your existing infrastructure.",
        subServices: [
            "Legacy System Upgrades",
            "Cloud Migration (AWS/GCP/Azure)",
            "Performance Optimization",
            "Adding AI to Existing Apps"
        ],
    },
];

const Services = () => {
    const { setCursorType } = useCursor();
    return (
        <section 
            className="dark bg-background text-foreground py-40"
            onMouseEnter={() => setCursorType('default')}
            onMouseLeave={() => setCursorType('default')}
        >
            <div className="container mx-auto">
                <div className="max-w-2xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-sm font-semibold uppercase text-primary tracking-widest"
                    >
                        Our Services
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-3xl md:text-4xl font-bold leading-tight tracking-tighter"
                    >
                        World-class digital products and five-star services.
                    </motion.h2>
                </div>

                <div className="mt-16">
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                        {services.map((service, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-2xl md:text-3xl font-bold py-8 hover:no-underline text-left">
                                    {service.title}
                                </AccordionTrigger>
                                <AccordionContent className="pb-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <motion.p
                                          initial={{ opacity: 0, x: -20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }} 
                                          transition={{ duration: 0.5, delay: 0.1 }}
                                          className="text-muted-foreground"
                                        >
                                          {service.description}
                                        </motion.p>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            {service.subServices.map((sub, i) => (
                                                <motion.p 
                                                  key={sub}
                                                  initial={{ opacity: 0, x: -20 }}
                                                  whileInView={{ opacity: 1, x: 0 }}
                                                  viewport={{ once: true }} 
                                                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                                                >
                                                  {sub}
                                                </motion.p>
                                            ))}
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Services;