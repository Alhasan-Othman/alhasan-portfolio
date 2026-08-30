"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <span className="px-2.5 py-1 text-[10px] font-mono border border-zinc-800 text-zinc-500 uppercase tracking-wider">
        [THEME]
      </span>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="px-2.5 py-1 text-[10px] font-mono border border-zinc-800 dark:border-zinc-800 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-white uppercase tracking-wider transition-colors"
      aria-label="Toggle Theme"
    >
      [{isDark ? "LIGHT" : "DARK"}]
    </button>
  );
}