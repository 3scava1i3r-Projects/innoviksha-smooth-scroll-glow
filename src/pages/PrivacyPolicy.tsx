import Header from "@/components/Header";
import Footer from "@/components/Footer";
// No other UI components are needed as we are using standard HTML tags

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="py-12 md:py-24">
        <section>
          <div className="container mx-auto">
            {/* Page Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Last Updated: June 13, 2024
              </p>
            </div>

            {/* Main Content Area */}
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="leading-7">
                Your privacy is important to us. It is [Your Company Name]'s
                policy to respect your privacy regarding any information we may
                collect from you across our website, [Your Website URL], and
                other sites we own and operate.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  1. Information We Collect
                </h2>
                <p className="leading-7">
                  We only ask for personal information when we truly need it to
                  provide a service to you. We collect it by fair and lawful
                  means, with your knowledge and consent. We also let you know
                  why we’re collecting it and how it will be used.
                </p>
                <p className="leading-7 mt-4">
                  Information we may collect includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 pl-4 leading-7">
                  <li>
                    <strong>Personal Information:</strong> Name, email address,
                    phone number, and any other data you provide via our
                    contact forms.
                  </li>
                  <li>
                    <strong>Log Data:</strong> Information that your browser
                    sends whenever you visit our site, such as your computer's
                    IP address, browser type, and the pages you visit.
                  </li>
                  <li>
                    <strong>Cookies:</strong> Data files that are placed on
                    your device or computer. For more information about
                    cookies, please see our section on Cookies below.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="leading-7">
                  We use the information we collect in various ways, including to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 pl-4 leading-7">
                  <li>Provide, operate, and maintain our website.</li>
                  <li>Improve, personalize, and expand our website.</li>
                  <li>
                    Understand and analyze how you use our website.
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners, for customer service, to provide you with updates
                    and other information relating to the website, and for
                    marketing and promotional purposes.
                  </li>
                  <li>Find and prevent fraud.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  3. Data Security
                </h2>
                <p className="leading-7">
                  We take the security of your data seriously and use
                  commercially acceptable means to protect your personal
                  information. However, remember that no method of transmission
                  over the internet, or method of electronic storage, is 100%
                  secure and reliable, and we cannot guarantee its absolute
                  security.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  4. Your Data Protection Rights
                </h2>
                <p className="leading-7">
                  You have certain data protection rights. We aim to take
                  reasonable steps to allow you to correct, amend, delete, or
                  limit the use of your Personal Data. If you wish to be
                  informed what Personal Data we hold about you and if you want
                  it to be removed from our systems, please contact us.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  5. Changes to This Privacy Policy
                </h2>
                <p className="leading-7">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy
                  on this page. You are advised to review this Privacy Policy
                  periodically for any changes.
                </p>
              </div>
              
              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                  6. Contact Us
                </h2>
                <p className="leading-7">
                  If you have any questions about this Privacy Policy, please
                  contact us by email at: [your.privacy.email@example.com].
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

export default PrivacyPolicy;