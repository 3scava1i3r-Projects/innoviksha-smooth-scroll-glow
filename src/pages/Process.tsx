
import React from "react";

const processes = [
  {
    title: "Discovery & Strategy",
    description:
      "We start with a deep-dive into your business goals, users and unique value. Through collaborative workshops, we identify opportunities and define outcomes.",
  },
  {
    title: "Product & UX Design",
    description:
      "Our design team crafts user flows, wireframes and prototypes. We create simple, beautiful experiences that solve real problems for your users.",
  },
  {
    title: "Development & Launch",
    description:
      "Using modern frameworks and best-practices, we build scalable products. We collaborate throughout, and launch only once it’s battle-tested and ready for real users.",
  },
  {
    title: "Ongoing Support",
    description:
      "We stay by your side post-launch: monitoring, iterating, and supporting your digital product as it grows with your business.",
  },
];

const ProcessPage = () => {
  return (
    <main className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Build or improve your digital product with an award-winning team</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Our proven process delivers results, clarity and momentum – from discovery to launch and beyond.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=cover&w=500&q=80"
          alt="Team working together"
          className="w-full max-w-xs object-cover aspect-video border"
          style={{ borderRadius: 0 }}
        />
      </section>

      {/* Process Overview */}
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {processes.map((proc) => (
          <div key={proc.title}>
            <h2 className="text-2xl font-semibold mb-2">{proc.title}</h2>
            <p className="text-md text-muted-foreground">{proc.description}</p>
          </div>
        ))}
      </section>

      {/* Highlights/Recent Work - simplified */}
      <section className="container max-w-5xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-6">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=cover&w=320&q=80",
              title: "AI Dashboard",
              desc: "Realtime automation dashboard for enterprise client",
            },
            {
              img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=cover&w=320&q=80",
              title: "Research Platform",
              desc: "Custom research workflow builder for SaaS",
            },
            {
              img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=cover&w=320&q=80",
              title: "DevOps Tool Suite",
              desc: "Modernized developer toolchain for teams",
            },
          ].map((proj) => (
            <div key={proj.title} className="border p-5 flex flex-col gap-2" style={{ borderRadius: 0 }}>
              <img src={proj.img} alt={proj.title} className="object-cover h-32 w-full mb-2 border" style={{ borderRadius: 0 }} />
              <div className="font-medium">{proj.title}</div>
              <div className="text-sm text-muted-foreground">{proj.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="container max-w-5xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-6">Tools & Technology</h2>
        <div className="flex flex-wrap gap-4">
          {["React", "Typescript", "AI APIs", "Vercel", "AWS", "Supabase", "Figma", "Next.js", "Tailwind", "Python"].map((tool) => (
            <span key={tool} className="border px-4 py-2 text-sm font-light" style={{ borderRadius: 0 }}>
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-3xl mx-auto text-center mt-16">
        <h3 className="text-2xl font-normal mb-4">Ready to build or improve your digital product?</h3>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 mt-4 bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary font-medium transition-colors"
          style={{ borderRadius: 0 }}
        >
          Get in touch
        </a>
      </section>
    </main>
  );
};

export default ProcessPage;
