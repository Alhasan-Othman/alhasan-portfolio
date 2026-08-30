"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

const TERMINAL_STEPS = [
  { text: "$ analyzing business requirements...", color: "text-emerald-400 font-semibold" },
  { text: "> building high-performance web solutions... [READY]", color: "text-zinc-400" },
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
    } else {
      const timeout = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, charIndex]);

  const isFinished = currentLineIndex >= TERMINAL_STEPS.length;
  const currentStep = TERMINAL_STEPS[currentLineIndex];

  return (
    <div className="py-3 space-y-2 font-mono text-xs sm:text-sm leading-relaxed min-h-[160px] flex flex-col justify-start">
      {/* عرض الأسطر التي اكتملت تماماً */}
      {completedSteps.map((step, index) => {
        const isLastLine = index === TERMINAL_STEPS.length - 1;
        return (
          <p key={index} className={step.color}>
            {isLastLine ? (
              <span className="flex items-center gap-2">
                <span>&gt;</span>
                <span className="text-emerald-400/90 font-medium">{step.text.replace("> ", "")}</span>
                {/* المؤشر المستمر في النهاية */}
                <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />
              </span>
            ) : (
              step.text
            )}
          </p>
        );
      })}

      {/* السطر الذي يتم كتابته حالياً */}
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
      
      <style jsx>{`
        @keyframes electricFlow {
          0% {
            stroke-dashoffset: 40;
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -40;
            opacity: 0.2;
          }
        }
        .electric-beam {
          stroke-dasharray: 12 28;
          animation: electricFlow 1.8s linear infinite;
        }
        .electric-beam-delayed-1 {
          animation-delay: 0.6s;
        }
        .electric-beam-delayed-2 {
          animation-delay: 1.2s;
        }
      `}</style>

      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div className="mb-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            02 // Why Choose Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
            Building Clean &amp; Secure Digital Solutions
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-12">
        
        {/* 1. TERMINAL AT THE TOP */}
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

        {/* 2. MAIN CORE CARD */}
        <FadeIn delay={0.3}>
          <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 backdrop-blur-sm text-center relative shadow-[0_0_30px_rgba(16,185,129,0.08)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
              CORE APPROACH
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Full-Stack Web Development
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light mt-3 leading-relaxed">
              Transforming complex requirements into smooth, high-performing applications with seamless user interfaces and robust server logic.
            </p>
          </div>
        </FadeIn>

        {/* SVG ELECTRICITY CONNECTIONS */}
        <div className="relative w-full h-16 hidden md:block my-2">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <path
              d="M 280 0 C 280 30, 160 30, 160 64"
              fill="none"
              stroke="#27272a"
              strokeWidth="2"
            />
            <path
              d="M 280 0 C 280 30, 160 30, 160 64"
              fill="none"
              stroke="#34d399"
              strokeWidth="2.5"
              className="electric-beam"
            />

            <path
              d="M 500 0 L 500 64"
              fill="none"
              stroke="#27272a"
              strokeWidth="2"
            />
            <path
              d="M 500 0 L 500 64"
              fill="none"
              stroke="#34d399"
              strokeWidth="2.5"
              className="electric-beam electric-beam-delayed-1"
            />

            <path
              d="M 720 0 C 720 30, 840 30, 840 64"
              fill="none"
              stroke="#27272a"
              strokeWidth="2"
            />
            <path
              d="M 720 0 C 720 30, 840 30, 840 64"
              fill="none"
              stroke="#34d399"
              strokeWidth="2.5"
              className="electric-beam electric-beam-delayed-2"
            />
          </svg>
        </div>

        {/* 3. THREE CORE PILLARS (Centered Titles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <FadeIn delay={0.4}>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                  FULL-STACK
                </span>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Interfaces &amp; Logic
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                Crafting clean, responsive front-end experiences backed by robust system logic and scalable data flows.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                  SECURITY
                </span>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Secure-by-Design
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                Implementing proactive vulnerability mitigation, audit principles, and hardened database protection protocols.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group text-center">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                  AI-POWERED
                </span>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Smart Automation
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                Integrating modern intelligent engines and automating tasks to elevate functionality and processing efficiency.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}