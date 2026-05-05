"use client";

import { motion, Variants } from "framer-motion";
import { Phone, ArrowUpRight, Copy, Check } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const { t, language } = useLanguage();

  const [copied, setCopied] = useState(false);

  const email = "josuesf4@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer id="contact" className="px-6 md:px-12 py-16">
      <motion.div
        initial={{ opacity: 0.8, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        whileHover={{
          scale: 1.02,
        }}
        viewport={{ once: false }}
        className="
          max-w-6xl
          mx-auto

          rounded-[40px]

          border border-slate-200 dark:border-slate-800

          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl

          shadow-2xl

          p-8 md:p-12
        "
      >
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9 }}
              className="
                text-5xl
                md:text-7xl

                font-black
                leading-none
                tracking-tight
              "
            >
              <span className="block">
                {language === "en" ? "BUILT" : "CREADO"}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-cyan-500
                  to-cyan-500

                  bg-clip-text
                  text-transparent
                "
              >
                {language === "en" ? "WITH CARE" : "CON PASIÓN"}
              </span>
            </motion.h2>

            <p
              className="
                mt-8

                text-lg
                leading-relaxed

                text-slate-600
                dark:text-slate-300
              "
            >
              {language === "en"
                ? "Thanks for exploring my work. Let's build meaningful solutions together."
                : "Gracias por explorar mi trabajo. Construyamos soluciones significativas juntos."}
            </p>
          </div>

          {/* DECORATION */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-52 h-52 opacity-40">
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-pulse" />

              <div className="absolute inset-4 rounded-full border border-blue-400/40" />

              <div className="absolute inset-8 rounded-full border border-pink-400/40" />

              <div className="absolute inset-12 rounded-full border border-cyan-300/40" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* REACH OUT */}
          <div>
            <h3
              className="
                text-sm
                tracking-[0.3em]
                uppercase
                font-bold

                text-cyan-500

                mb-6
              "
            >
              {language === "en" ? "Reach Out" : "Contacto"}
            </h3>

            {/* EMAIL */}
            <div
              className="
                flex items-center justify-between

                rounded-2xl

                border border-slate-200 dark:border-slate-800

                bg-white/80 dark:bg-slate-900/80

                px-5 py-4

                mb-4
              "
            >
              <a href={`mailto:${email}`} className="font-semibold break-all">
                {email}
              </a>

              <button
                onClick={copyEmail}
                className="
                  ml-4

                  p-2

                  rounded-xl

                  border border-slate-200 dark:border-slate-700

                  hover:scale-105

                  transition-all
                "
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* PHONE */}
            <a
              href="tel:+51948950173"
              className="
                flex items-center gap-3

                mb-6

                text-slate-600
                dark:text-slate-300

                hover:text-cyan-500

                transition-colors
              "
            >
              <Phone size={18} />

              <span>+51 948 950 173</span>
            </a>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Jisf4"
                target="_blank"
                className="
                  p-4

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/josue-s%C3%A1nchez-flores-820559196/"
                target="_blank"
                className="
                  p-4

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://leetcode.com/u/jisf4/"
                target="_blank"
                className="
                  p-4

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <SiLeetcode size={22} />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3
              className="
                text-sm
                tracking-[0.3em]
                uppercase
                font-bold

                text-cyan-500

                mb-6
              "
            >
              {language === "en" ? "Explore" : "Explorar"}
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  label: language === "en" ? "About" : "Sobre mí",
                  href: "#about",
                },
                {
                  label: language === "en" ? "Skills" : "Habilidades",
                  href: "#skills",
                },
                {
                  label: language === "en" ? "Projects" : "Proyectos",
                  href: "#projects",
                },
                {
                  label:
                    language === "en" ? "Certifications" : "Certificaciones",
                  href: "#certifications",
                },
                {
                  label: language === "en" ? "Education" : "Educación",
                  href: "#education",
                },
                {
                  label: language === "en" ? "Contact" : "Contacto",
                  href: "#contact",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="
                    px-5 py-3

                    rounded-2xl

                    border border-slate-200 dark:border-slate-800

                    bg-white/80 dark:bg-slate-900/80

                    font-medium

                    hover:-translate-y-1
                    hover:shadow-xl

                    transition-all duration-300
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div>
            <h3
              className="
                text-sm
                tracking-[0.3em]
                uppercase
                font-bold

                text-cyan-500

                mb-6
              "
            >
              {language === "en" ? "Quick Actions" : "Acciones rápidas"}
            </h3>

            <div className="space-y-4">
              <Link
                href="/resume/Josue_Sanchez_Flores-resume.pdf"
                target="_blank"
                className="
                  flex items-center justify-between

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  px-6 py-4

                  font-medium

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <span>
                  {language === "en" ? "Download Resume" : "Descargar CV"}
                </span>

                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/certifications"
                className="
                  flex items-center justify-between

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  px-6 py-4

                  font-medium

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <span>
                  {language === "en"
                    ? "View Certifications"
                    : "Ver Certificaciones"}
                </span>

                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/projects"
                className="
                  flex items-center justify-between

                  rounded-2xl

                  border border-slate-200 dark:border-slate-800

                  bg-white/80 dark:bg-slate-900/80

                  px-6 py-4

                  font-medium

                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all duration-300
                "
              >
                <span>
                  {language === "en" ? "View Projects" : "Ver Proyectos"}
                </span>

                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Josue. All rights reserved.
          </p>

          <a
            href="#home"
            className="
              flex items-center gap-2

              text-sm
              font-medium

              hover:text-cyan-500

              transition-colors
            "
          >
            {language === "en" ? "Back to top" : "Volver arriba"}

            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
