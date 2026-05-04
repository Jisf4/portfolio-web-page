// Experience section

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl tracking-tight font-bold mb-16 text-center"
        >
          {t.titles.experience}
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {t.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: -22 }}
              >
                <span
                  className="absolute w-4 h-4 bg-black dark:bg-white 
            rounded-full -left-2.5 mt-2"
                ></span>
              </motion.div>
              {/* DOT */}

              {/* CONTENT */}
              <h3 className="text-xl font-semibold">
                {/* 🔴 EDIT IN content.ts → experience */}
                {exp.role}
              </h3>

              <p className="text-sm text-gray-500 mb-1">
                {exp.company} | {exp.period}
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
