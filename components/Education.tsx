// Education section

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
export default function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800"
    >
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
              <div className="flex justify-center mb-5">
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={70}
                  height={70}
                  className="
                  rounded-2xl
                  object-contain
                  bg-slate-200/30
                  dark:bg-white/5
                  p-2
                  border border-slate-400 
                  dark:border-white/10
                "
                />
              </div>
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.period}</p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="
                    px-3 py-1
                    rounded-full
                    text-sm
                    bg-cyan-500/10
                    text-cyan-400
                    border border-cyan-500/20
                  "
                  >
                    {course}
                  </span>
                ))}
              </div>

              <div
                className="mt-6 space-y-2 text-left rounded-2xl p-6  
              border border-cyan-500/20 bg-cyan-500/10"
              >
                {edu.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="
                    flex items-center gap-2
                    font-semibold
                    text-sm
                    text-gray-600 dark:text-gray-300
                  "
                  >
                    <span className=" text-cyan-400  ">•</span>

                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
