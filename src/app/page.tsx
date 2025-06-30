import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <About />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

