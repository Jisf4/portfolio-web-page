// 📘 ABOUT SECTION

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  
  const { t } = useLanguage();


  return (
    <section id="about" className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl tracking-tight font-bold mb-8 text-center"
      >
        {t.titles.about}
      </motion.h2>

      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-center"
      >
        {/* 🔴 EDIT THIS IN content.ts → about.text */}
        {t.about.text}
      </motion.p>
      </div>
    </section>
  );
}