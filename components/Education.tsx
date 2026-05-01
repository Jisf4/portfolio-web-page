// 🎓 EDUCATION SECTION

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl tracking-tight font-bold mb-12 text-center"
      >
        {t.titles.education}
      </motion.h2>

      <div className="space-y-8">

        {t.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-4 rounded-2xl text-center
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-md
                        border border-slate-200 dark:border-slate-800
                        shadow-lg shadow-slate-200/50 dark:shadow-black/20
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
          >
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.period}</p>
          </motion.div>
        ))}

      </div>
     </div>
    </section>
  );
}