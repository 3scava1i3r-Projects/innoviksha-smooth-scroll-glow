
// // // // import Header from "@/components/Header";
// // // // import Footer from "@/components/Footer";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { Label } from "@/components/ui/label";

// // // // const ContactUs = () => {
// // // //   return (
// // // //     <div className="bg-background">
// // // //       <Header />
// // // //       <main>
// // // //         <section>
// // // //           <div className="container mx-auto">
// // // //             <div className="max-w-2xl mx-auto text-center">
// // // //               <h1 className="text-4xl font-bold">Contact Us</h1>
// // // //               <p className="text-muted-foreground mt-4">
// // // //                 Have a project in mind? We'd love to hear about it.
// // // //               </p>
// // // //             </div>
// // // //             <form className="max-w-2xl mx-auto mt-12 space-y-6">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                 <div className="space-y-2">
// // // //                   <Label htmlFor="name">Name</Label>
// // // //                   <Input id="name" placeholder="Your Name" />
// // // //                 </div>
// // // //                 <div className="space-y-2">
// // // //                   <Label htmlFor="email">Email</Label>
// // // //                   <Input id="email" type="email" placeholder="your@email.com" />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 <Label htmlFor="message">Message</Label>
// // // //                 <Textarea id="message" placeholder="Tell us about your project..." />
// // // //               </div>
// // // //               <div className="text-center">
// // // //                 <Button type="submit">Send Message</Button>
// // // //               </div>
// // // //             </form>
// // // //           </div>
// // // //         </section>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ContactUs;


// // // import Header from "@/components/Header";
// // // import Footer from "@/components/Footer";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Label } from "@/components/ui/label";

// // // const ContactUs = () => {
// // //   return (
// // //     <div className="bg-background">
// // //       <Header />
// // //       <main>
// // //         <section>
// // //           <div className="container mx-auto">
// // //             <div className="max-w-2xl mx-auto text-center">
// // //               <h1 className="text-4xl font-bold">Contact Us</h1>
// // //               <p className="text-muted-foreground mt-4">
// // //                 Have a project in mind? We'd love to hear about it.
// // //               </p>
// // //             </div>
// // //             <form className="max-w-2xl mx-auto mt-12 space-y-6">
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <div className="space-y-2">
// // //                   <Label htmlFor="name">Name</Label>
// // //                   <Input
// // //                     id="name"
// // //                     placeholder="Your Name"
// // //                     className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
// // //                   />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   <Label htmlFor="email">Email</Label>
// // //                   <Input
// // //                     id="email"
// // //                     type="email"
// // //                     placeholder="your@email.com"
// // //                     className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-2">
// // //                 <Label htmlFor="message">Message</Label>
// // //                 <Textarea
// // //                   id="message"
// // //                   placeholder="Tell us about your project..."
// // //                   className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
// // //                 />
// // //               </div>
// // //               <div className="text-center">
// // //                 <Button
// // //                   type="submit"
// // //                   className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
// // //                 >
// // //                   Send Message
// // //                 </Button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </section>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default ContactUs;


// // "use client";

// // import { motion } from "framer-motion";
// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";

// // const ContactUs = () => {
// //   return (
// //     <div className="bg-background">
// //       <Header />

// //       <motion.main
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //       >
// //         <section>
// //           <div className="container mx-auto">
// //             <div className="max-w-2xl mx-auto text-center">
// //               <h1 className="text-4xl font-bold">Contact Us</h1>
// //               <p className="text-muted-foreground mt-4">
// //                 Have a project in mind? We'd love to hear about it.
// //               </p>
// //             </div>

// //             <form className="max-w-2xl mx-auto mt-12 space-y-6">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div className="space-y-2">
// //                   <Label htmlFor="name">Name</Label>
// //                   <Input
// //                     id="name"
// //                     placeholder="Your Name"
// //                     className="focus:outline-none focus:ring-0 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <Label htmlFor="email">Email</Label>
// //                   <Input
// //                     id="email"
// //                     type="email"
// //                     placeholder="your@email.com"
// //                     className="focus:outline-none focus:ring-0 focus:border-transparent"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="message">Message</Label>
// //                 <Textarea
// //                   id="message"
// //                   placeholder="Tell us about your project..."
// //                   className="focus:outline-none focus:ring-0 focus:border-transparent"
// //                 />
// //               </div>

// //               <div className="text-center">
// //                 <Button
// //                   type="submit"
// //                   className="focus:outline-none focus:ring-0 focus:border-transparent"
// //                 >
// //                   Send Message
// //                 </Button>
// //               </div>
// //             </form>
// //           </div>
// //         </section>
// //       </motion.main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ContactUs;
// "use client";

// import { motion } from "framer-motion";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// const ContactUs = () => {
//   return (
//     <div className="bg-background">
//       <Header />

//       <motion.main
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <section>
//           <div className="container mx-auto">
//             <div className="max-w-2xl mx-auto text-center">
//               <h1 className="text-4xl font-bold">Contact Us</h1>
//               <p className="text-muted-foreground mt-4">
//                 Have a project in mind? We'd love to hear about it.
//               </p>
//             </div>

//             <form className="max-w-2xl mx-auto mt-12 space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     placeholder="Your Name"
//                     className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell us about your project..."
//                   className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
//                 />
//               </div>

//               <div className="text-center">
//                 <Button
//                   type="submit"
//                   className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
//                 >
//                   Send Message
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </motion.main>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <div className="bg-background">
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section>
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground mt-4">
                Have a project in mind? We'd love to hear about it.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto mt-12 space-y-6"
            >
              {/* Netlify needs this hidden input to identify the form */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" disabled={formState === "submitting"}>
                  {formState === "submitting"
                    ? "Sending..."
                    : formState === "success"
                    ? "Sent!"
                    : "Send Message"}
                </Button>

                {/* Success Message */}
                {formState === "success" && (
                  <p className="mt-4 text-green-500">
                    Thanks! We'll get back to you soon.
                  </p>
                )}

                {/* Error Message */}
                {formState === "error" && (
                  <p className="mt-4 text-red-500">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default ContactUs;