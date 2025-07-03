'use client';
import { useEffect, useRef, useState } from 'react';

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);

    const tv = titleRef.current;
    if (tv) {
      const handler = () => {
        tv.classList.add('finished');
        tv.removeEventListener('animationend', handler);
      };
      tv.addEventListener('animationend', handler);
    }
  }, []);

  return (
    <section id="resume" className="py-20 bg-white">
      <div
        ref={containerRef}
        className={`max-w-3xl mx-auto border-2 text-center border-blue-200 rounded-xl p-8 transition-opacity transform duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2
          ref={titleRef}
          className="typewriter text-4xl font-semibold mb-6 text-blue-700"
        >
          Resume
        </h2>

        <div className="hidden md:block mt-4 mb-6">
          <iframe
            src="/resume.pdf"
            className="w-full h-96 rounded shadow"
            title="Resume PDF"
          />
        </div>

        <p className="mt-2 text-gray-400 text-sm mb-6 text-center">
          (For mobile view, please use the download link below.)
        </p>

        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}




