"use client";

import { FadeIn } from "@/components/ui/fade-in";
import DepthCarousel, { DepthItem } from "@/components/ui/visuals/DepthCarousel";

const PROJECTS: DepthItem[] = [
  {
    id: "al-saad-roaster",
    title: "Al Saad Roaster",
    category: "E-Commerce & Web",
    description: "Explore our premium roasted products, nuts, and savory coffee selections with a seamless modern UI.",
    link: "https://alsaad-roaster.vercel.app/",
    features: [
      "Modern UI/UX Design System",
      "Scalable Architecture",
      "High Conversion Optimization"
    ],
    image: "https://basma-company-api.vercel.app/api/media/file/5e1c455c-d81f-4960-bea9-b0611edf19c0.png"
  },
  {
    id: "vulnerability-scanner",
    title: "AI Security Scanner",
    category: "Security & AI System",
    description: "Automated DAST engine with neural network payload classification and real-time threat detection.",
    link: "https://example.com/scanner",
    features: [
      "ASP.NET Core 8 & Playwright",
      "Neural network classification",
      "Dynamic execution tracing"
    ],
    image: "https://placehold.co/600x400/18181b/10b981?text=AI+Security+Scanner"
  },
  {
    id: "yasmineh-alsaeed",
    title: "Yasmineh-Alsaeed Motors",
    category: "Enterprise Fleet",
    description: "Multilingual automotive digital showroom and corporate fleet maintenance management engine.",
    link: "https://example.com/motors",
    features: [
      "Laravel 11 & Blade Engine",
      "Multilingual catalog (EN/AR)",
      "Automated maintenance logs"
    ],
    image: "https://placehold.co/600x400/18181b/3b82f6?text=Motors+Fleet+System"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="relative w-full pt-8 sm:pt-10 pb-6 px-4 sm:px-8 max-w-7xl mx-auto space-y-4 overflow-hidden">
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium">
              04 // SELECTED WORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-xs leading-relaxed">
            // Drag or use controls to navigate through featured software systems and enterprise projects.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="w-full h-[540px] sm:h-[600px] relative flex items-center justify-center">
          <DepthCarousel
            items={PROJECTS}
            cardWidth={500}
            cardHeight={500}
            spread={280}
            tilt={12}
            duration={400}
            loop={true}
          />
        </div>
      </FadeIn>
    </section>
  );
}

export default WorkSection;