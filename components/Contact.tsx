// 📬 CONTACT SECTION

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl tracking-tight font-bold mb-8"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-600 dark:text-gray-300 mb-4"
      >
        {/* 🔴 EDIT IN content.ts */}
        {t.contact.email}
      </motion.p>

      <motion.p
        className="text-gray-600 dark:text-gray-300"
      >
        {t.contact.phone}
      </motion.p>

    </section>
  );
}