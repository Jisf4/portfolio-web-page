"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdf: string;
  title: string;
}

export default function CertificationModal({
  isOpen,
  onClose,
  pdf,
  title,
}: CertificationModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* DARK OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0
              z-40
              bg-black/70
              backdrop-blur-sm
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed inset-0
              z-40
              flex items-center
              justify-center
              p-6
            "
          >
            <div
              className="
                relative
                bg-white/30
                dark:bg-slate-500/30
                p-2
                max-w-5xl
                w-full
                h-215
                rounded-3xl
                overflow-hidden
                bg-slate-900
                border
                border-slate-800 
                dark:border-white/10
                shadow-2xl
              "
            >
              {/* CERTIFICATION IMAGE */}
              <iframe
                src={pdf}
                className="
                    w-full
                    h-full
                    rounded-2xl
                "
                title={title}
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                className="
                absolute
                top-18 left-5
                z-10
                w-10 h-10
                rounded-full
                bg-cyan-500/40
                hover:bg-cyan-500/80
                border border-cyan-500/90
                text-white
                transition-all duration-300

            "
              >
                <X size={28} className="w-full h-full" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
