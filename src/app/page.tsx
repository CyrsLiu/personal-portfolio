import ProfilePhoto from "@/components/ProfilePhoto";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Greeting with animated photo */}
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8">
        <ProfilePhoto />
        <h1
          className="text-3d-enter text-5xl md:text-9xl font-extrabold text-transparent
                     bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 drop-shadow-lg"
        >
          Hi, I&apos;m Cyrus Liu
        </h1>

        {/* 💡 Social & Connect Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/cyrus-liu-uci/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
          >
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={20} className="mr-2" />
            LinkedIn
          </a>

          <a
            href="#contact"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
          >
            <Image src="/icons/connect.png" alt="Connect" width={20} height={20} className="mr-2" />
            Let’s Connect
          </a>

          <a
            href="https://github.com/CyrsLiu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
          >
            <Image src="/icons/github.png" alt="GitHub" width={20} height={20} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>

      {/* Other sections */}
      <About />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}






