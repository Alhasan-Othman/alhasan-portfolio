"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Why Me", href: "#why-me" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/Alhasan-Othman" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Email", href: "mailto:contact@alhasan.dev" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md pt-16 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-12">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
            {/* Left Brand Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">
                  ALHASAN<span className="text-emerald-400">.DEV</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  FULL-STACK
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                Architecting high-performance web applications, resilient backend engines, and secure digital infrastructures.
              </p>
            </div>

            {/* Navigation Links Column */}
            <div className="md:col-span-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
                Navigation
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Column */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
                Connect
              </p>
              <ul className="space-y-2 text-xs font-mono text-zinc-400">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{social.name}</span>
                      <span className="text-zinc-600 group-hover:text-emerald-400 transition-colors">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Copyright & Status Bar */}
        <FadeIn delay={0.2}>
          <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>© {currentYear} Alhasan. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400">All systems operational</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}