'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
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
    ref.current && obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section id="education" className="py-16 bg-white">
      <div
        ref={ref}
        className={`fade-in ${
          visible ? 'visible' : ''
        } max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 border-2 border-blue-200 rounded-xl p-8`}
      >
        <div className="flex-shrink-0">
          <Image
            src="/uci-logo.png"
            alt="UC Irvine Logo"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="typewriter text-3xl font-semibold text-blue-700 mb-2">Education</h2>
          <div className="text-xl font-medium">
            University of California, Irvine
          </div>
          <div className="text-gray-600 mb-4">
            B.S. Computer Science | Sep 2021 – Jun 2025
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-semibold">Dean&apos;s Honor List:</span> 12× (all quarters)
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-semibold">Specialization:</span> Intelligent Systems – Artifical Intelligence &amp; Machine Learning
          </div>
          <div className="mt-4">
            <div className="font-semibold mb-2">Relevant Coursework:</div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Data Structures and Algorithms</li>
              <li>SQL / Database Management</li>
              <li>Information Retrieval</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning &amp; Data Mining</li>
              <li>Computer Organization &amp; Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


