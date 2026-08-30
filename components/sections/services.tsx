import { FadeIn } from "@/components/ui/fade-in";

export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "FULL-STACK WEB APPLICATIONS",
      desc: "Architecting end-to-end web applications with modern frameworks, dynamic dashboards, structured multi-language support, and clean database integrations.",
      tech: ["Laravel", "Next.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      num: "02",
      title: "APPLICATION SECURITY & AUDITING",
      desc: "Identifying vulnerabilities, implementing secure authentication systems, dynamic application security testing, and optimizing database logging and audits.",
      tech: ["Vulnerability Scanning", "DB Auditing", "Auth Security", "Pentesting Protocols"],
    },
    {
      num: "03",
      title: "CUSTOM DIGITAL SYSTEMS",
      desc: "Building tailored software solutions like fleet management, vehicle maintenance tracking, automated tools, and business operations platforms.",
      tech: ["System Architecture", "RESTful APIs", "State Management", "Data Pipelines"],
    },
  ];

  return (
    <section id="services" className="p-8 md:p-16 max-w-5xl mx-auto border-t border-zinc-900 space-y-12">
      <FadeIn>
        <div className="text-xs font-mono uppercase text-zinc-500 tracking-widest">
          03 / SERVICES & CAPABILITIES
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white">
            WHAT I BUILD & DELIVER.
          </h2>
        </div>
      </FadeIn>

      <div className="divide-y divide-zinc-900 border-t border-b border-zinc-900">
        {services.map((item, index) => (
          <FadeIn key={item.num} delay={0.15 * index}>
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1 text-xs font-mono text-zinc-500">
                //{item.num}
              </div>
              <div className="md:col-span-5">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6 space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono border border-zinc-800 text-zinc-400 uppercase tracking-wider bg-zinc-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}