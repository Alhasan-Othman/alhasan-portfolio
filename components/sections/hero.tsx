"use client";

import { useLanguage } from "@/context/language-context";
import { FadeIn } from "@/components/ui/fade-in";
import { LineWaves } from "@/components/ui/visuals/line-waves";

export function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      name: "Alhasan Othman",
      title: "Software & Systems Engineer.",
      description: "Building high-security business systems, AI-integrated workflows, and scalable applications built for performance.",
      cta: "Let's Talk",
    },
    ar: {
      name: "الحسن عثمان",
      title: "مهندس برمجيات وأنظمة.",
      description: "بناء أنظمة أعمال عالية الأمان، وسير عمل مدعوم بالذكاء الاصطناعي، وتطبيقات قابلة للتوسع ومصممة للأداء العالي.",
      cta: "تواصل معي",
    },
  };

  const t = content[language];

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-12 pb-12 md:pb-20 overflow-hidden">
      {/* Background 3D Wave Visual */}
      <LineWaves />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full my-auto space-y-8">
        {/* Headline & Bio */}
        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {t.name} <br />
              <span className="text-zinc-300 font-normal">
                {t.title}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-200 max-w-3xl font-sans font-light leading-relaxed">
              {t.description}
            </p>
          </FadeIn>
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.3}>
          <div className="pt-4 flex justify-start items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-out bg-zinc-900/80 border border-zinc-700/80 rounded-xl backdrop-blur-md hover:bg-zinc-800 hover:border-zinc-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 tracking-wide">{t.cta}</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}