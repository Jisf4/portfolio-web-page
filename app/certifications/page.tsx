"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

import { useState } from "react";

import CertificationModal from "@/components/CertificationModal";

export default function CertificationsPage() {
  const { t, language } = useLanguage();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    pdf: string;
    title: string;
  } | null>(null);

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main
        className="
          min-h-screen
          overflow-x-hidden

          bg-slate-50
          dark:bg-slate-950
          text-slate-900 
          dark:text-slate-100

          px-6 md:px-12
          py-28
        "
      >
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-5xl md:text-6xl
              font-bold
              text-center
            "
          >
            {language === "en"
              ? "All Certifications"
              : "Todos los Certificados"}
          </motion.h1>

          {/* LINE */}
          <div
            className="
              mt-6
              w-24 h-[2px]
              bg-cyan-500
              mx-auto
            "
          />

          {/* RETURN BUTTON */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/#certifications"
              className="
              inline-flex items-center

              px-8 py-4
              rounded-2xl

              bg-cyan-500/10
              hover:bg-cyan-500/20

              border border-cyan-500/20

              text-cyan-400
              font-medium

              transition-all duration-300
              hover:-translate-y-1
              "
            >
              {language === "en"
                ? "Back to Main Page"
                : "Volver a la Página Principal"}
            </Link>
          </div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="
              mt-20

              grid
              sm:grid-cols-2
              md:grid-cols-3

              gap-6
            "
          >
            {t.certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                onClick={() =>
                  setSelectedCert({
                    image: cert.image,
                    pdf: cert.pdf,
                    title: cert.title,
                  })
                }
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  p-4
                  rounded-2xl
                  text-center

                  bg-white/80
                  dark:bg-slate-900/80

                  backdrop-blur-md

                  border
                  border-slate-200
                  dark:border-slate-800

                  shadow-lg
                  shadow-slate-200/50
                  dark:shadow-black/20

                  hover:-translate-y-2
                  hover:shadow-2xl
                  cursor-pointer
                  transition-all duration-300
                "
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-40
                    object-cover
                  "
                />

                <div className="p-4">
                  <h3 className="font-semibold">{cert.title}</h3>

                  <p className="text-sm text-gray-500">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CertificationModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          pdf={selectedCert?.pdf || ""}
          title={selectedCert?.title || ""}
        />
      </main>
    </>
  );
}
