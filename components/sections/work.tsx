import { FadeIn } from "@/components/ui/fade-in";

const projects = [
  {
    title: "AI Dynamic Vulnerability Scanner",
    category: "Security / ASP.NET Core / Playwright",
    description:
      "A dynamic application security testing engine performing automated attack simulations and real-time vulnerability scoring.",
    metrics: ["DAST Engine", "Real-Time Scan", "Senior Thesis"],
  },
  {
    title: "Yasmineh-Alsaeed Motors Platform",
    category: "Full-Stack / Laravel / Multilingual",
    description:
      "High-performance digital showroom with multilingual admin controls, vehicle catalog management, and seamless inventory tracking.",
    metrics: ["Showroom CMS", "Multi-Language", "Tailwind UI"],
  },
  {
    title: "Fleet Maintenance & Daily Subscriptions",
    category: "Enterprise System / Laravel",
    description:
      "Internal operations management platform handling daily transit company subscriptions, vehicle logs, and maintenance auditing.",
    metrics: ["Fleet Logistics", "Audit Trail", "Internal Tool"],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-zinc-900">
      <FadeIn>
        <div className="mb-16">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            [ Selected Works ]
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering &amp; Security Audits
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.15}>
            <div className="group relative p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-mono px-2 py-0.5 border border-zinc-800 text-zinc-400"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm font-sans leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}