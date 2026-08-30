"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative w-full py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <FadeIn delay={0.1}>
        <header className="mb-16 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium">
            03 // CAPABILITIES &amp; ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            <span className="text-white">Engineering Logic.</span>{" "}
            <span className="text-zinc-500">Securing Growth.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Delivering production-ready systems, hardened security layers, and custom business tools designed to scale seamlessly.
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto pt-2" />
        </header>
      </FadeIn>

      {/* Collaboration / Dual Core Layout */}
      <FadeIn delay={0.2}>
        <div className="relative space-y-8">
          
          {/* Side-by-Side Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            
            {/* Card 01: Core Development & Engineering */}
            <article className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 space-y-6 group">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">01</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Software &amp; Architecture
                  </h3>
                </div>
                <span className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Architecting end-to-end full-stack applications with clean database logic, multi-language support, and high-throughput APIs.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  "Full-Stack Web Applications",
                  "Custom Management Dashboards",
                  "RESTful APIs & DB Schemas",
                  "Multi-Language Localization",
                  "Scalable System Architecture"
                ].map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-xs text-zinc-300 font-light bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-900 group-hover:border-zinc-800 transition-colors">
                    <span className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Central Badge Connector */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-center my-2 lg:my-0">
              <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
              <div className="p-3 rounded-full bg-zinc-950 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            </div>

            {/* Card 02: Security, Auditing & Tools */}
            <article className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 space-y-6 group">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">02</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Security &amp; Automation
                  </h3>
                </div>
                <span className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Protecting assets through proactive vulnerability scanning, database audit protocols, and automated CLI scripts.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  "Vulnerability Assessment & Testing",
                  "Database Activity Auditing & Logs",
                  "Auth Hardening (JWT, OAuth, Roles)",
                  "Custom Scrapers & Automated Tasks",
                  "Fleet Tracking & Custom Tooling"
                ].map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-xs text-zinc-300 font-light bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-900 group-hover:border-zinc-800 transition-colors">
                    <span className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>

          </div>

          {/* Bottom Statement Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center gap-3 text-center">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 font-light">
              <span className="text-emerald-400 font-mono font-medium">Clean Architecture + Security Hardening =</span>{" "}
              <strong className="text-white font-semibold">Resilient Digital Systems</strong>
            </p>
          </div>

        </div>
      </FadeIn>

    </section>
  );
}