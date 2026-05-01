// 🎬 HERO SECTION (Animated)

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";


export default function Hero() {
  const { t } = useLanguage();
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center 
    items-center text-center px-6
    border-b border-slate-200 dark:border-slate-800">

      {/* 🧠 ANIMATION CONTAINER */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4">
        {t.hero.name}
      </motion.h1>

      <motion.h2 variants={item} className="text-xl md:text-2xl text-cyan-500 dark:text-cyan-500 mb-6">
        {t.hero.title}
      </motion.h2>

      <motion.p variants={item} className="max-w-xl text-gray-500 dark:text-gray-400 mb-8">
        {t.hero.description}
      </motion.p>


      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >

        {/* VIEW PROJECTS */}
        <a href="#projects">
          <button className="px-6 py-3 rounded-lg font-medium bg-black text-white dark:bg-white dark:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
            {t.buttons.projects}
          </button>
        </a>

        {/* DOWNLOAD CV */}
        <a href="/cv.pdf" download>
          <button className="px-6 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg">
            {t.buttons.cv}
          </button>
        </a>


      </motion.div>
    </motion.div>
    </section>
  );
}