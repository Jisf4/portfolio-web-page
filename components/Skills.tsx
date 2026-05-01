"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Skills() {
  const { t } = useLanguage();

  // 🧠 Animation container (controls stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // 🧠 Animation per item
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl tracking-tight font-bold mb-12 text-center"
      >
        {t.titles.skills}
      </motion.h2>

      {/* GRID CONTAINER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {t.skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-2xl text-center
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-md
                        border border-slate-200 dark:border-slate-800
                        shadow-lg shadow-slate-200/50 dark:shadow-black/20
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
          >
            {/* ICON */}
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain mx-auto"
            />

            {/* NAME */}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}