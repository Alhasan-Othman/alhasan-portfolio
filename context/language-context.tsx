"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      // Restore after hydration so server and client markup match on first render
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("app_lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}