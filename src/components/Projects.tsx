'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Project = { title: string; img: string; description: string; skills: string[] };

const projects: Project[] = [ /* project data as before */ ];

export default function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(projects.map(() => false));

  useEffect(() => {
    const refsArray = cardRefs.current.slice(); // 👈 capture current refs
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const idx = Number(entry.target.getAttribute('data-idx'));
        if (entry.isIntersecting) {
          setVisible(prev => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    refsArray.forEach(el => el && observer.observe(el));
    return () => {
      refsArray.forEach(el => el && observer.unobserve(el));
    };
  }, []); // ✅ Safe: no stale ref issues :contentReference[oaicite:1]{index=1}

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto space-y-12 px-4">
        <div className="w-full text-center">
          <h2 className="text-4xl font-semibold text-blue-700 mb-12">
            <span className="typewriter inline-block">Projects</span>
          </h2>
        </div>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            data-idx={idx}
            ref={el => { cardRefs.current[idx] = el; }}
            className={`mx-auto max-w-5xl w-full border-2 border-blue-300 rounded-xl overflow-hidden shadow-lg transition duration-1000 transform ${
              visible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="md:flex">
              <div className="md:basis-1/2 flex-shrink-0">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={600}
                  height={338}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:basis-1/2 p-6 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold mb-4 text-black">{proj.title}</h3>
                <p className="text-gray-800 mb-4 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-bold px-3 py-1 bg-gray-100 rounded text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


