// Home section

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { HiMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const { t } = useLanguage();
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center 
    items-center text-center px-6 relative md:px-12 overflow-hidden
    border-b border-slate-200 dark:border-slate-800"
    >
      <motion.div
        initial={{ opacity: 0.8, y: -800 }}
        animate={{ opacity: 1, y: -400 }}
        transition={{ duration: 4 }}
      >
        <div
          className="
          absolute
          top-[-300px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-cyan-500/20
          rounded-full
          blur-3xl
          pointer-events-none
        "
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* 🧠 ANIMATION CONTAINER */}

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="
        text-5xl sm:text-6xl md:text-8xl
        font-bold
        tracking-tight
        leading-none
      "
          >
            {t.hero.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="
        mt-6
        text-xl md:text-2xl
        text-cyan-500
        font-medium
      "
          >
            {t.hero.title}
          </motion.h2>

          <motion.p
            variants={item}
            className="
        mt-8
        max-w-2xl
        text-base md:text-lg
        leading-relaxed
        max-w-5xl
        text-slate-600 dark:text-slate-300
      "
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* VIEW PROJECTS */}
              <a href="#projects">
                <button
                  className="
            px-6 py-3 rounded-xl
            bg-cyan-500 hover:bg-cyan-400
            text-white font-medium
            transition-all duration-300
            hover:-translate-y-1
          "
                >
                  {t.buttons.projects}
                </button>
              </a>

              {/* DOWNLOAD CV */}
              <a href="/resume/Josue_Sanchez_Flores-resume.pdf" download>
                <button
                  className="
          px-6 py-3 rounded-xl
          border border-slate-300 dark:border-slate-700
          hover:bg-slate-100 dark:hover:bg-slate-900
          transition-all duration-300
          hover:-translate-y-1
          "
                >
                  {t.buttons.cv}
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex justify-center gap-6"
          >
            <a
              href="https://github.com/Jisf4"
              target="_blank"
              rel="noopener noreferrer"
              className="
          p-3 rounded-xl
          bg-white/60 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-800
          backdrop-blur-sm

          hover:-translate-y-1
          hover:text-cyan-500

          transition-all duration-300
        "
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/josue-s%C3%A1nchez-flores-820559196/"
              target="_blank"
              rel="noopener noreferrer"
              className="
          p-3 rounded-xl
          bg-white/60 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-800
          backdrop-blur-sm

          hover:-translate-y-1
          hover:text-cyan-500

          transition-all duration-300
        "
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://leetcode.com/u/jisf4/"
              target="_blank"
              rel="noopener noreferrer"
              className="
          p-3 rounded-xl
          bg-white/60 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-800
          backdrop-blur-sm

          hover:-translate-y-1
          hover:text-cyan-500

          transition-all duration-300
        "
            >
              <SiLeetcode size={22} />
            </a>

            <a
              href="mailto:josuesf4@gmail.com"
              className="
          p-3 rounded-xl
          bg-white/60 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-800
          backdrop-blur-sm

          hover:-translate-y-1
          hover:text-cyan-500

          transition-all duration-300
        "
            >
              <HiMail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
