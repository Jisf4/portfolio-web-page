"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;

  image: string;
  title: string;
}



export default function CertificationModal({
  isOpen,
  onClose,
  image,
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

        window.addEventListener(
        "keydown",
        handleEsc
        );
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";

        window.removeEventListener(
        "keydown",
        handleEsc
        );
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
              onClick={onClose}
              className="
                relative
                
                max-w-5xl
                w-full

                rounded-3xl
                overflow-hidden

                bg-slate-900
                border border-white/10

                shadow-2xl
              "
            >


              {/* CERTIFICATION IMAGE */}
              <img
                src={image}
                alt={title}

                className="
                  w-full
                  h-auto
                  object-contain
                  
                "
              />

            {/* CLOSE BUTTON */}
            <button
            onClick={onClose}

            className="
                absolute
                top-4 right-4

                z-10

                w-10 h-10

                rounded-full

                bg-black/50
                hover:bg-black/70

                text-white
                text-xl

                transition-all duration-300
            "
            >
            ✕
            </button>
            </div>
            

          </motion.div>

          
        </>
      )}
      
    </AnimatePresence>
  );
}