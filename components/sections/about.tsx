"use client";

import { FadeIn } from "@/components/ui/fade-in";

const SKILL_CATEGORIES = [
  {
    category: "Backend & Core",
    skills: ["Laravel", "Node.js", "ASP.NET Core", "PHP", "C#", "REST APIs"],
  },
  {
    category: "Frontend & UI",
    skills: ["Next.js", "React", "Tailwind CSS", "Blade", "JavaScript", "HTML5/CSS3"],
  },
  {
    category: "Security & AI",
    skills: ["App Security", "OWASP", "Vulnerability Assessment", "LLM / RAG"],
  },
  {
    category: "Databases & DevOps",
    skills: ["PostgreSQL", "MySQL", "Oracle", "Docker", "Linux", "CI/CD"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-10">
      
      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            01 // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3">
            Engineering secure backend systems &amp; intelligent web architectures.
          </h2>
        </div>
      </FadeIn>

      {/* Top Grid: Narrative (Left) + Tech Stack Categories (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left / Narrative */}
        <FadeIn delay={0.2} className="lg:col-span-6 space-y-5 text-zinc-300 font-light leading-relaxed text-base sm:text-lg flex flex-col justify-center">
          <p>
            I am a software developer specializing in <strong className="text-white font-medium">high-security business systems</strong> and modern web architectures, utilizing both <strong className="text-zinc-100 font-medium">Laravel</strong> and <strong className="text-zinc-100 font-medium">ASP.NET Core</strong>.
          </p>
          <p>
            My work bridges rigorous backend engineering with application security and AI integration—ranging from automated vulnerability scanners to scalable enterprise platforms.
          </p>
        </FadeIn>

        {/* Right / Tech Stack Categories with Electric Hover Effect */}
        <FadeIn delay={0.3} className="lg:col-span-6 flex flex-col justify-center">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 font-medium block">
              // TECHNICAL EXPERTISE &amp; STACK
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat, index) => (
                <div 
                  key={index}
                  className="group relative p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 space-y-1.5 shadow-md overflow-hidden"
                >
                  {/* Electric corner accent line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-400 transition-all duration-500" />

                  <h4 className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {cat.skills.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Bottom Full-Width Card: Pure Academic Foundation */}
      <FadeIn delay={0.4}>
        <div className="w-full p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
          
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block font-medium">
                ACADEMIC FOUNDATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                Syrian Private University
              </h3>
              <p className="text-sm font-mono text-emerald-400 font-medium">
                B.Sc. in Artificial Intelligence Engineering
              </p>
            </div>
            
            {/* Separated Department and Name */}
            <div className="text-left md:text-right font-mono space-y-1">
              <span className="block text-xs uppercase tracking-widest text-zinc-400 font-medium">
                Department of
              </span>
              <span className="text-sm sm:text-base text-zinc-100 font-semibold block">
                Intelligent Information Security Systems Engineering
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200">Theoretical &amp; Engineering Core</h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Grounded in artificial intelligence foundations, mathematical modeling, algorithmic problem-solving, and advanced computational architectures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200">Specialized Security Track</h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Focused study on intelligent information security, network defense structures, threat analysis principles, and secure system design methodologies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>

    </section>
  );
}