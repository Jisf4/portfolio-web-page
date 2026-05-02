"use client";

import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/data/content";

import { useLanguage } from "@/context/LanguageContext";

import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Link from "next/link";

export default function ProjectsPage() {
  const { language } = useLanguage();

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
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            {language === "en"
              ? "All Projects"
              : "Todos los Proyectos"}
          </h1>

          <div
            className="
              mt-6
              w-24 h-[2px]
              bg-cyan-500
              mx-auto
            "
          />
        </div>

        <div className="mt-10 flex justify-center">
        <Link
            href="/#projects"
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
          {projects.map((project) => (
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

      </div>
    </main>
    </>
  );
}