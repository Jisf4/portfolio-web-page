// 🏆 CERTIFICATIONS SECTION

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";

import CertificationModal from "./CertificationModal";

export default function Certifications() {
  const { t, language } = useLanguage();

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
  const [selectedCert, setSelectedCert] = useState<{
  image: string;
  pdf:string;
  title: string;
} | null>(null);
  return (
    <section id="certifications" className="py-28 px-6 md:px-12 border-b 
    border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl tracking-tight 
        font-bold mb-12 text-center"
      >
        {t.titles.certifications}
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >

        {t.certifications
          .filter((cert) => cert.featured)
          .map((cert, index) => (
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
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-2xl text-center
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-md
                        border border-slate-200 dark:border-slate-800
                        shadow-lg shadow-slate-200/50 dark:shadow-black/20
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300 cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover "
            />

            <div className="p-4">
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.org}</p>
            </div>
            
          </motion.div>
        ))}
        
      </motion.div>
      
      <div className="mt-16 text-center">
        <Link
          href="/certifications"
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
            ? "All Certifications"
            : "Todos los Certificados"}
        </Link>
      </div>
      </div>

      <CertificationModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        pdf={selectedCert?.pdf || ""}
        title={selectedCert?.title || ""}
      />


    </section>
  );
}