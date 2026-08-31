"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/config/site";

// Social Icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.2 9.35h3.35v9.7H5.2v-9.7ZM6.88 4.95a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM10.65 9.35h3.2v1.32c.6-.93 1.66-1.58 3.2-1.58 2.34 0 3.95 1.52 3.95 4.78v5.18h-3.34v-4.62c0-1.54-.56-2.38-1.75-2.38-1.25 0-1.92.87-1.92 2.38v4.62h-3.34v-9.7Z" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { name: "WhatsApp", href: siteConfig.links.whatsapp, icon: WhatsappIcon },
  { name: "Email", href: siteConfig.links.email, icon: EmailIcon },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md pt-16 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-emerald-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start justify-between">
            {/* Brand Block - Identical to Header */}
            <div className="lg:col-span-5 space-y-4">
              <Link href="#" className="flex items-center gap-2 group">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {siteConfig.name}
                  <span className="text-emerald-400">{siteConfig.domainExtension}</span>
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                {siteConfig.description}
              </p>

              {/* Social Icon Links */}
              <ul className="flex items-center gap-3 pt-2" aria-label="Social Links">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.name}
                        title={social.name}
                        className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-zinc-800/80 transition-all flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Links Grid Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {siteConfig.footerColumns.map((column) => (
                <div key={column.title} className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
                    {column.title}
                  </h3>
                  <ul className="space-y-2 text-xs font-mono text-zinc-400">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="hover:text-emerald-400 transition-colors block py-0.5"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.2}>
          <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>© {currentYear} {siteConfig.fullName}. All rights reserved.</p>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400 text-[11px]">{siteConfig.availability}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}