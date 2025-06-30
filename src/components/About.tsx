export default function About() {
  return (
    <section id="about" className="py-16 flex flex-col items-center">
      <img src="/profile.jpg" alt="Your Name" className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-center max-w-xl">
        {/* Add your bio here! */}
        As a computer science student and software developer, I'm driven to create impactful technology solutions that enhance user experiences. My foundation in software engineering, paired with a passion for continuous learning, motivates me to tackle new challenges and innovate in a constantly evolving tech landscape.

        I specialize in Full Stack Development, AI & Machine Learning, and algorithm optimization, and I'm always eager to collaborate and contribute to projects that push the boundaries of technology.

        Outside the tech world, you'll find me exploring new music, staying active, and enjoying quality time with friends and family. I thrive in dynamic environments and am always enthusiastic about opportunities to learn and make a meaningful impact!
      </p>
    </section>
  );
}
