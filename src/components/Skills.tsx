'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "Python", src: "/skills/python.webp" },
  { name: "C++", src: "/skills/c++.png" },
  { name: "Java", src: "/skills/java.webp" },
  { name: "JavaScript", src: "/skills/javascript.png" },
  { name: "TypeScript", src: "/skills/typescript.png" },
  { name: "HTML", src: "/skills/html.webp" },
  { name: "CSS", src: "/skills/css.png" },
  { name: "GitHub", src: "/skills/github.png" },
  { name: "React", src: "/skills/react.webp" },
  { name: "Git", src: "/skills/git.png" },
  { name: "SQL", src: "/skills/sql.png" },
  { name: "Excel", src: "/skills/excel.png" },
];

export default function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [gridVis, setGridVis] = useState<boolean[]>(skills.map(() => false));

  useEffect(() => {
    const tv = titleRef.current;
    if (tv) {
      const handler = () => {
        tv.classList.add('finished');
        tv.removeEventListener('animationend', handler);
      };
      tv.addEventListener('animationend', handler);
    }

    const refsArray = [...gridRefs.current];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-idx'));
          setGridVis(prev => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    refsArray.forEach(el => el && obs.observe(el));
    return () => refsArray.forEach(el => el && obs.unobserve(el));
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="typewriter text-4xl font-semibold mb-6 text-blue-700"
        >
          Skills
        </h2>
        <p className="text-black font-bold mb-12">
          Programming Languages, Tools, and Frameworks
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              data-idx={idx}
              ref={el => { gridRefs.current[idx] = el; }}
              className={`bg-white rounded-xl shadow p-4 flex flex-col items-center font-bold text-black hover:scale-105 transition transform ${
                gridVis[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain mb-2"
              />
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



