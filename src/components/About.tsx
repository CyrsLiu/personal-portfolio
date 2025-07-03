'use client';

import { useRef, useEffect, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState<boolean[]>([false, false]);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = +entry.target.getAttribute('data-idx')!;
          setVisible(v => Object.assign([...v], { [idx]: true }));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    refs.current.forEach(el => el && obs.observe(el));
  }, []);

  const paragraphs = [
    `As a computer science student and software developer, I'm driven to create impactful technology solutions that enhance user experiences...`,
    `Outside the tech world, you'll find me exploring new music, staying active...`
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center border-2 border-blue-300 rounded-xl p-8 bg-white">
        <h2 className="typewriter text-4xl font-semibold mb-6 text-blue-700">
          About Me
        </h2>
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            ref={el => { refs.current[idx] = el; }}
            data-idx={idx}
            className={`fade-in text-lg text-black mb-6 leading-relaxed ${
              visible[idx] ? 'visible' : ''
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}






