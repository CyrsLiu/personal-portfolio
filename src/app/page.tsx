import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

// components or top of the page.tsx
function WaveText({ text }: { text: string }) {
  return (
    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 drop-shadow-lg select-none">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="wave"
          style={{
            animationDelay: `${i * 0.2}s`,
            display: "inline-block",
            minWidth: char === " " ? "0.5em" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <WaveText text="Hi, I'm Cyrus Liu" />
      </div>
      <About />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}



