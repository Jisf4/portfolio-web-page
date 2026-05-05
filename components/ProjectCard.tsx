"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
}: ProjectCardProps) {
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    show: {
      opacity: 1,
      y: 20,

      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl

        bg-white
        dark:bg-white/5
        shadow-lg shadow-slate-200/50 dark:shadow-black/20
        backdrop-blur-xl

        border border-white/10

        hover:border-cyan-500/30
        hover:-translate-y-2

        transition-all duration-500
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="
            w-full
            h-full
            object-cover

            transition-transform duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-semibold">{title}</h3>

        {/* Description */}
        <p
          className="
            mt-4
            text-slate-600 dark:text-slate-300
            leading-relaxed
          "
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                px-3 py-1
                rounded-full
                text-sm

                bg-cyan-500/10
                text-cyan-400

                border border-cyan-500/20
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2

              px-4 py-2
              rounded-xl

              bg-white/10
              hover:bg-cyan-500/20

              border border-white/10

              transition-all duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
