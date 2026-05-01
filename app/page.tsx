import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="bg-slate-50 overflow-x-hidden dark:bg-slate-950 text-slate-900 
    dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}