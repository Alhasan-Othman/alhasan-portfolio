"use client";

import { useState } from "react";

export function LangToggle() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  const toggleLanguage = () => {
    const nextLang = lang === "EN" ? "AR" : "EN";
    setLang(nextLang);
    document.documentElement.lang = nextLang.toLowerCase();
    document.documentElement.dir = nextLang === "AR" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="px-2.5 py-1 text-[10px] font-mono border border-zinc-800 dark:border-zinc-800 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white uppercase tracking-wider transition-colors"
      aria-label="Toggle Language"
    >
      [{lang === "EN" ? "AR" : "EN"}]
    </button>
  );
}