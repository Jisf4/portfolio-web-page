// 🧭 NAVBAR WITH TOGGLES

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from 'react';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left0
     w-full flex justify-between items-center 
     px-6 py-4 bg-white/70 dark:bg-slate-950/70 
     backdrop-blur-md z-50
     border-b border-slate-200 dark:border-slate-800">
      {mobileMenuOpen && (
  <div
          className="
            md:hidden
            fixed top-16 left-0 w-full
            bg-white/90 dark:bg-slate-950/90
            backdrop-blur-md
            border-b border-slate-200 dark:border-slate-800
            px-6 py-8
            flex flex-col gap-6
            z-40
          "
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                text-lg font-medium
                text-slate-700 dark:text-slate-300
                hover:text-cyan-500
                transition-colors
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="
              text-sm font-medium
              text-slate-700 dark:text-slate-300
              hover:text-cyan-500
              transition-colors
            "
          >
            {item.label}
          </a>
        ))}
      </div>
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