// 🧭 NAVBAR WITH TOGGLES

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { navbar } from "@/data/content";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const getSectionLink = (section: string) => {
    return pathname === "/"
      ? `${section}`
      : `/${section}`;
  };
  const navItems = [
    { label: navbar[language].home, href: "#home" },
    { label: navbar[language].about, href: "#about" },
    { label: navbar[language].skills, href: "#skills" },
    { label: navbar[language].projects, href: "#projects" },
    { label: navbar[language].experience, href: "#experience" },
    { label: navbar[language].education, href: "#education" },
    {
      label: navbar[language].certifications,
      href: "#certifications",
    },
    { label: navbar[language].contact, href: "#contact" },
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
          <Link
            href={getSectionLink(item.href)}
            className="
              text-sm font-medium
              text-slate-700 dark:text-slate-300
              hover:text-cyan-500
              transition-colors
            "
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      {/* RIGHT - CONTROLS */}
      <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">

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