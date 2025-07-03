'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade-in on scroll
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

    // Stop the typewriter cursor after animation
    const tv = titleRef.current;
    if (tv) {
      const handler = () => {
        tv.classList.add('finished');
        tv.removeEventListener('animationend', handler);
      };
      tv.addEventListener('animationend', handler);
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <div
      ref={containerRef}
      className={`max-w-xl mx-auto text-center bg-white border-2 border-blue-200 rounded-xl p-8 transition-opacity transform duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <h2
        ref={titleRef}
        className="typewriter text-4xl font-semibold mb-4 text-blue-700"
      >
        Contact Me
      </h2>
      <p className="text-4x1 text-black mb-6">
        Feel free to contact me directly at{' '}
        <a href="mailto:dajcbcyrus@gmail.com" className="text-blue-600 underline">
          dajcbcyrus@gmail.com
        </a>{' '}
        or through this form!
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* form fields */}
        <div>
          <label className="block text-left font-medium">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-left font-medium">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-left font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition"
        >
          {status === 'sending'
            ? 'Sending...'
            : status === 'success'
            ? 'Sent!'
            : status === 'error'
            ? 'Error – retry'
            : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

