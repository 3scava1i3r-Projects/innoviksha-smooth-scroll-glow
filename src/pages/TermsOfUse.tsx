import Header from "@/components/Header";
import Footer from "@/components/Footer";
// No need to import Label, Input, Button, Textarea, or typography components

const TermsOfUse = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="py-12 md:py-24">
        <section>
          <div className="container mx-auto">
            {/* Page Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Terms of Use
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Last Updated: June 13, 2024
              </p>
            </div>

            {/* Main Content Area */}
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="leading-7">
                Welcome to our website! These terms and conditions outline the
                rules and regulations for the use of our company's Website,
                located at Innoviksha.xyz. By accessing this website we assume
                you accept these terms and conditions. Do not continue to use
                our services if you do not agree to all of the terms and
                conditions stated on this page.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  1. Intellectual Property Rights
                </h2>
                <p className="leading-7">
                  Other than the content you own, under these Terms, Innoviksha and/or its licensors own all the intellectual
                  property rights and materials contained in this Website. You
                  are granted a limited license only for purposes of viewing
                  the material contained on this Website.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  2. Restrictions
                </h2>
                <p className="leading-7">
                  You are specifically restricted from all of the following:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 pl-4 leading-7">
                  <li>Publishing any Website material in any other media.</li>
                  <li>
                    Selling, sublicensing and/or otherwise commercializing any
                    Website material.
                  </li>
                  <li>
                    Publicly performing and/or showing any Website material.
                  </li>
                  <li>
                    Using this Website in any way that is or may be damaging to
                    this Website.
                  </li>
                  <li>
                    Using this Website contrary to applicable laws and
                    regulations, or in any way may cause harm to the Website,
                    or to any person or business entity.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  3. Your Content
                </h2>
                <p className="leading-7">
                  In these Website Standard Terms and Conditions, “Your Content”
                  shall mean any audio, video text, images or other material
                  you choose to display on this Website. By displaying Your
                  Content, you grant Innoviksha a non-exclusive,
                  worldwide irrevocable, sub-licensable license to use,
                  reproduce, adapt, publish, translate and distribute it in any
                  and all media.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  4. Limitation of Liability
                </h2>
                <p className="leading-7">
                  In no event shall Innoviksha, nor any of its
                  officers, directors and employees, be held liable for
                  anything arising out of or in any way connected with your use
                  of this Website whether such liability is under contract.
                  Innoviksha, including its officers, directors and
                  employees shall not be held liable for any indirect,
                  consequential or special liability arising out of or in any
                  way related to your use of this Website.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  5. Governing Law & Jurisdiction
                </h2>
                <p className="leading-7">
                  These Terms will be governed by and interpreted in accordance
                  with the laws of the State/Country of Uttar Pradesh, India, and you submit to the non-exclusive
                  jurisdiction of the state and federal courts located in Uttar Pradesh, India for the resolution of any disputes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;