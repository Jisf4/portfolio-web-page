import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main
      className="bg-slate-50 overflow-x-hidden dark:bg-slate-950 text-slate-900 
    dark:text-slate-100 min-h-screen transition-colors duration-300"
    >
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
