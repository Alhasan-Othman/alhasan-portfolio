"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

const TERMINAL_STEPS = [
  { text: "$ analyzing business requirements...", color: "text-emerald-400 font-semibold" },
  { text: "> building high-performance solutions... [READY]", color: "text-zinc-400" },
  { text: "> designing seamless interfaces & robust logic... [CONNECTED]", color: "text-zinc-300" },
  { text: "> status: delivering scalable applications that grow your business.", color: "text-emerald-400 font-semibold" },
  { text: "> Ready to elevate your next project ?", color: "text-emerald-400/90 font-medium" },
];

function TypewriterTerminal() {
  const [completedSteps, setCompletedSteps] = useState<typeof TERMINAL_STEPS>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_STEPS.length) return;

    const currentStep = TERMINAL_STEPS[currentLineIndex];

    if (charIndex < currentStep.text.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, currentStep]);
      setCurrentLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, 400);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, charIndex]);

  const isFinished = currentLineIndex >= TERMINAL_STEPS.length;
  const currentStep = TERMINAL_STEPS[currentLineIndex];

  return (
    <div className="py-3 space-y-2 font-mono text-xs sm:text-sm leading-relaxed min-h-[160px] flex flex-col justify-start">
      {completedSteps.map((step, index) => {
        const isFinalStep = index === TERMINAL_STEPS.length - 1;
        return (
          <p key={index} className={step.color}>
            {isFinalStep ? (
              <span className="flex items-center gap-2">
                <span>&gt;</span>
                <span className="text-emerald-400/90 font-medium">
                  {step.text.replace("> ", "")}
                </span>
                <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />
              </span>
            ) : (
              step.text
            )}
          </p>
        );
      })}

      {!isFinished && currentStep && (
        <p className={currentStep.color}>
          {currentStep.text.slice(0, charIndex)}
          <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />
        </p>
      )}
    </div>
  );
}

export function WhyMeSection() {
  return (
    <section id="why-me" className="relative w-full py-24 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div className="mb-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            02 // Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
            Engineered for Performance &amp; Scalability
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {/* Terminal Card Component */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>
            <TypewriterTerminal />
          </div>
        </FadeIn>

        {/* Integrated Network Architecture Block (Main Card -> Beams -> Sub-Cards) */}
        <div className="flex flex-col items-center">
          {/* Main Core Philosophy Card */}
          <FadeIn delay={0.3} className="w-full">
            <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 backdrop-blur-sm text-center relative shadow-[0_0_30px_rgba(16,185,129,0.08)] z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                CORE PHILOSOPHY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Production-Ready Engineering
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-light mt-3 leading-relaxed">
                I don&apos;t just write code; I design sustainable architectures. From database optimization to fluid user interfaces, every component is built to scale smoothly with your growth.
              </p>
            </div>
          </FadeIn>

          {/* Desktop Extended Electric Beams (Exact 110px height to connect seamlessy to the top of sub-cards) */}
          <div className="relative w-full h-[110px] hidden md:block z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 110" preserveAspectRatio="none">
              <defs>
                <style>{`
                  @keyframes electricFlow {
                    0% { stroke-dashoffset: 40; opacity: 0.2; }
                    50% { opacity: 1; }
                    100% { stroke-dashoffset: -40; opacity: 0.2; }
                  }
                  .electric-beam {
                    stroke-dasharray: 12 28;
                    animation: electricFlow 1.8s linear infinite;
                  }
                `}</style>
              </defs>

              {/* Left Beam: Directly touches top-center of Left Feature Card */}
              <path d="M 280 0 C 280 60, 166 60, 166 110" fill="none" stroke="#27272a" strokeWidth="2" />
              <path d="M 280 0 C 280 60, 166 60, 166 110" fill="none" stroke="#34d399" strokeWidth="2.5" className="electric-beam" />

              {/* Center Beam: Vertical connection touching top-center of Middle Feature Card */}
              <path d="M 500 0 L 500 110" fill="none" stroke="#27272a" strokeWidth="2" />
              <path d="M 500 0 L 500 110" fill="none" stroke="#34d399" strokeWidth="2.5" className="electric-beam" style={{ animationDelay: "0.6s" }} />

              {/* Right Beam: Directly touches top-center of Right Feature Card */}
              <path d="M 720 0 C 720 60, 833 60, 833 110" fill="none" stroke="#27272a" strokeWidth="2" />
              <path d="M 720 0 C 720 60, 833 60, 833 110" fill="none" stroke="#34d399" strokeWidth="2.5" className="electric-beam" style={{ animationDelay: "1.2s" }} />
            </svg>
          </div>

          {/* Mobile Vertical Electric Connector */}
          <div className="relative w-full h-12 block md:hidden z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible">
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#27272a" strokeWidth="2" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#34d399" strokeWidth="2.5" className="electric-beam" />
            </svg>
          </div>

          {/* Feature Pillars Grid (Hard connected to the bottom tips of the beams via negative margin overlay) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full -mt-[1px]">
            <FadeIn delay={0.4}>
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center h-full flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                      ARCHITECTURE
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    End-to-End Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                    Seamless integration between intuitive frontend experiences and resilient backend APIs designed for high reliability.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center h-full flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                      SECURITY FIRST
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Hardened Systems
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                    Proactive vulnerability management, data protection standards, and robust auth mechanisms baked into the core.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center h-full flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                      INTELLIGENCE
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Smart Automation
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                    Leveraging modern AI services and dynamic workflows to automate complex business processes and cut overhead.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}