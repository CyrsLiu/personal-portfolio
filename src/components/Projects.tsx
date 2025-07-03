'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  img: string;
  description: string;
  skills: string[];
};

const projects: Project[] = [
  {
    title: 'Replayify',
    img: '/projects/replayify.png',
    description: `Replayify is a full‑stack Spotify analytics web app built with React and Express. It features OAuth2 via Spotify's authorization code flow for fetching users’ top tracks, a dark, responsive UI crafted with Chakra UI (including an interactive slider and sleek track cards), and CI/CD deployment using Vercel and Render to integrate frontend, backend, and cross‑origin flows seamlessly.`,
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Chakra UI', 'Vercel', 'Render'],
  },
  {
    title: 'ASL Recognition',
    img: '/projects/asl.png',
    description: `Developed a convolutional neural network using TensorFlow and OpenCV to recognize American Sign Language fingerspelling, achieving 99.2% test accuracy. Applied data augmentation techniques like shearing, flipping, and zooming to improve generalization and gain an additional 2% in validation accuracy.`,
    skills: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
  },
  {
    title: 'Wellness & Habit Builder',
    img: '/projects/wellness.png',
    description: `Built a responsive wellness and habit‑tracking web app with HTML, CSS, and JavaScript, featuring goal setting, habit tracking, and journal entries. Implemented user authentication and localStorage‑based persistence for personalized profiles, along with live clock/calendar displays, mood‑tagged journaling, search filters, and browser reminder notifications.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'Web Notifications'],
  },
  {
    title: 'UCI Search Engine',
    img: '/projects/search.png',
    description: `Led the development of a Python‑based search engine for indexing tens of thousands of documents using tf‑idf and NLP techniques. Optimized performance with an inverted index, precomputed norms for Cosine Similarity, and efficient memory handling using partial indexes and CSV‑based URL mapping, achieving sub‑300ms query response times.`,
    skills: ['Python', 'NLP', 'tf‑idf', 'Inverted Index', 'Cosine Similarity'],
  },
];

export default function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(projects.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
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
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => cardRefs.current.forEach(el => el && observer.unobserve(el));
  }, []);

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
            ref={el => (cardRefs.current[idx] = el)}
            className={`mx-auto max-w-7xl w-full border-2 border-blue-300 rounded-xl overflow-hidden shadow-lg transition duration-1000 transform ${
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


