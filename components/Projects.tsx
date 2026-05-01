// 🚀 PROJECTS SECTION

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

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
    <section id="projects" className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl tracking-tight font-bold mb-12 text-center"
      >
        {t.titles.projects}
      </motion.h2>

      {/* GRID */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {t.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-2xl text-center
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-md
                        border border-slate-200 dark:border-slate-800
                        shadow-lg shadow-slate-200/50 dark:shadow-black/20
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
          >

            {/* 🔴 EDIT project.title */}
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* 🔴 EDIT project.description */}
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-2 py-1 border rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINK */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Project →
              </a>
            )}

          </motion.div>
        ))}

      </motion.div>
      </div>
    </section>
  );
}