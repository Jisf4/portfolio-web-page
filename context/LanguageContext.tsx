// 🌐 LANGUAGE CONTEXT
// This controls EN / ES across the entire app

"use client";

import { createContext, useContext, useState } from "react";
import { content } from "@/data/content";

// Define types
type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof content.en; // current language content
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Select content dynamically
  const t = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for easy usage
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within provider");
  return context;
};