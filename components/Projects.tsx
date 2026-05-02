"use client";

import ProjectCard from "./ProjectCard";

import { projects } from "@/data/content";

import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            {language === "en"
              ? "Featured Projects"
              : "Proyectos Destacados"}
          </h2>

          <div
            className="
              mt-6
              w-24 h-[2px]
              bg-cyan-500
              mx-auto
            "
          />
        </div>

        {/* Projects Grid */}
        <div
          className="
            mt-20

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            
            gap-8
          "
        >
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              
            <ProjectCard
              key={project.github}
              title={project.title[language]}
              description={
                project.description[language]
              }
              image={project.image}
              tech={project.tech}
              github={project.github}
  
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
        <Link
          href="/projects"
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
            ? "View All Projects"
            : "Ver Todos los Proyectos"}
        </Link>
        </div>

      </div>
    </section>
  );
}