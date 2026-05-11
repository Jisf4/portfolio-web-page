// About section

"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const { t } = useLanguage();

  const terminalRef = useRef(null);

  const isInView = useInView(terminalRef, {
    once: true,
  });

  const [visibleChars, setVisibleChars] = useState(0);
  const terminalLines = [
    `const ${t.terminalCard.const} = {`,
    `${t.terminalCard.name}`,
    `${t.terminalCard.role}`,
    `${t.terminalCard.location}`,
    `${t.terminalCard.education}`,
    `${t.terminalCard.language}`,
    `};`,
    ``,
    `${t.terminalCard.build}`,
  ];
  const fullTextLength = terminalLines.join("\n").length;

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= fullTextLength) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [isInView, fullTextLength]);

  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-5xl mx-auto ">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-center"
        >
          <div
            className="
          mt-16

          grid
          grid-cols-1
          lg:grid-cols-[460px_1fr]
       
          gap-5
          items-stretch
        "
          >
            {/* ABOUT TEXT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
            rounded-3xl

            bg-white/70
            dark:bg-slate-900/70

            backdrop-blur-xl

            border border-slate-200
            dark:border-slate-800
            
            p-8 md:p-10

            shadow-xl
          "
            >
              <h3
                className="
              text-3xl md:text-4xl
              font-bold
              mb-6
            "
              >
                {t.titles.about}
              </h3>

              <div
                className="
              max-w-5xl h-[3px]

              bg-cyan-500

              rounded-full

              mb-8
            "
              />

              <div
                className="
              text-slate-600
              dark:text-slate-300

              text-lg
              leading-relaxed
            "
              >
                {t.about.text}
              </div>
            </motion.div>

            {/* TERMINAL CARD */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              ref={terminalRef}
              className="
            rounded-3xl
            bg-white/70
            dark:bg-slate-900/80
            backdrop-blur-xl
            border border-slate-200
            dark:border-slate-800      
            border-white/10
            shadow-2xl
            overflow-hidden
          "
            >
              {/* TERMINAL HEADER */}
              <div
                className="
              flex items-center gap-2

              px-5 py-4

              border-b
              border-gray-300 
              dark:border-white/10
            "
              >
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

                <span
                  className="
                ml-4
                text-xs
                text-slate-400
              "
                >
                  portfolio.ts
                </span>
              </div>

              {/* TERMINAL BODY */}
              <div
                className="
              p-6

              font-mono
              text-xs md:text-sm

              leading-7

              text-left
            "
              >
                {(() => {
                  let currentCharCount = 0;

                  return terminalLines.map((line, index) => {
                    const visiblePart = line.slice(
                      0,
                      Math.max(0, visibleChars - currentCharCount),
                    );

                    currentCharCount += line.length + 1;

                    return (
                      <div
                        key={index}
                        className="
                        flex
                        items-start
                      "
                      >
                        {/* LINE NUMBER */}
                        <span
                          className="
                          w-10
                          shrink-0

                          text-slate-500
                        "
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                        {/* CODE */}
                        <div className="flex flex-wrap">
                          {/* LINE 1 */}
                          {index === 0 && (
                            <>
                              <span className="text-cyan-400">
                                {visiblePart.slice(0, 5)}
                              </span>

                              <span className="text-slate-800 dark:text-white">
                                &nbsp;
                                {visiblePart.slice(5)}
                              </span>
                            </>
                          )}

                          {/* LINES 2-5 */}
                          {[1, 2, 3, 4, 5].includes(index) && (
                            <>
                              <span className="text-slate-700 dark:text-slate-300">
                                &nbsp;&nbsp;
                                {visiblePart.split('"')[0]}
                              </span>

                              {visiblePart.includes('"') && (
                                <span className="text-purple-400">
                                  &nbsp; "{visiblePart.split('"')[1]}"
                                  {visiblePart.endsWith('",') ? "," : ""}
                                </span>
                              )}
                            </>
                          )}

                          {/* LINE 6 */}
                          {index === 6 && (
                            <span className="text-slate-700 dark:text-slate-300">
                              {visiblePart}
                            </span>
                          )}

                          {/* EMPTY LINE */}
                          {index === 7 && <span>{visiblePart}</span>}

                          {/* FINAL LINE */}
                          {index === 8 && (
                            <>
                              <span className="text-slate-800 dark:text-white">
                                {visiblePart.slice(0, visiblePart.indexOf("."))}
                              </span>

                              <span className="text-pink-400">
                                {visiblePart.slice(visiblePart.indexOf("."))}
                              </span>

                              {/* CURSOR */}
                              {visibleChars >= fullTextLength && (
                                <motion.span
                                  animate={{
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                  }}
                                  className="
                                  ml-1
                                  text-cyan-800
                                  dark:text-cyan-400
                                  font-bold
                                "
                                >
                                  _
                                </motion.span>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
