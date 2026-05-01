// 🧭 NAVBAR WITH TOGGLES

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left0
     w-full flex justify-between items-center 
     px-6 py-4 bg-white/70 dark:bg-slate-950/70 
     backdrop-blur-md z-50
     border-b border-slate-200 dark:border-slate-800">
      
      {/* LEFT - NAME */}
      <h1 className="font-bold text-lg">
        Josué
      </h1>

      {/* RIGHT - CONTROLS */}
      <div className="flex items-center gap-4">

        {/* 🌐 LANGUAGE TOGGLE */}
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="px-3 py-1 border rounded"
        >
          {language.toUpperCase()}
        </button>

        {/* 🌙 THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>


      </div>
    </nav>
  );
}