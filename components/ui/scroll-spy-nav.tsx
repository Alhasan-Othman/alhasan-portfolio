"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

interface Section {
  id: string;
  label: {
    en: string;
    ar: string;
  };
}

const SECTIONS: Section[] = [
  { id: "hero", label: { en: "Home", ar: "الرئيسية" } },
  { id: "about", label: { en: "About", ar: "من أنا" } },
  { id: "why-me", label: { en: "Why Me", ar: "لماذا أنا" } },
  { id: "services", label: { en: "Services", ar: "الخدمات" } },
  { id: "work", label: { en: "Work", ar: "الأعمال" } },
  { id: "contact", label: { en: "Contact", ar: "التواصل" } },
];

export function ScrollSpyNav() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Calculate total page scroll percentage (0% to 100%)
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(currentProgress);

      // 2. Force activate 'hero' when scroll is near top
      if (scrollY < 150) {
        setActiveSection("hero");
        return;
      }

      // 3. Identify currently visible section
      const scrollPosition = scrollY + window.innerHeight / 3;

      let currentActive = SECTIONS[0].id;

      for (let i = 0; i < SECTIONS.length; i++) {
        const section = SECTIONS[i];
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            currentActive = section.id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler targeting top of the page or specific section
  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label="Section navigation"
      className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center py-6 transition-all duration-300 ${
        language === "ar" ? "left-6 md:left-8" : "right-6 md:right-8"
      }`}
    >
      {/* Background track line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-zinc-300/40 dark:bg-zinc-800/60 -z-10 rounded-full overflow-hidden">
        {/* Dynamic scroll progress indicator */}
        <div
          className="w-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <ul className="flex flex-col gap-8 py-2">
        {SECTIONS.map((section, index) => {
          const isActive = activeSection === section.id;
          const labelText = section.label[language];

          return (
            <li key={section.id} className="relative flex items-center group">
              <button
                onClick={() => scrollTo(section.id)}
                aria-label={`Scroll to ${labelText}`}
                className={`relative flex items-center justify-center p-1 transition-all duration-300 ${
                  isActive ? "scale-125" : "hover:scale-110"
                }`}
              >
                {/* Node with adaptive glow effect */}
                <span
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)] dark:shadow-[0_0_16px_rgba(16,185,129,0.8)] scale-110"
                      : "bg-zinc-400 dark:bg-zinc-700 group-hover:bg-emerald-400/80"
                  }`}
                />
              </button>

              {/* Hover tooltip label */}
              <div
                className={`absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded-md border shadow-md ${
                  language === "ar"
                    ? "left-8 -translate-x-2 group-hover:translate-x-0"
                    : "right-8 translate-x-2 group-hover:translate-x-0"
                } bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm`}
              >
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold mr-1">
                  {`0${index + 1} //`}
                </span>{" "}
                {labelText}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}