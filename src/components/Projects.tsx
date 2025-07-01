const projects = [
  {
    title: "Wellness & Habit Builder",
    description:
      "A responsive web app for habit tracking, journaling, and goal setting, built with HTML, CSS, and JavaScript.",
    link: "https://github.com/yourusername/wellness-app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ZotReg Registration System",
    description:
      "A C-based multi-client registration system supporting real-time requests and safe concurrency.",
    link: "https://github.com/yourusername/zotreg",
    tech: ["C", "Sockets"],
  },
  {
    title: "ASL Recognition",
    description:
      "Deep learning model for American Sign Language recognition, achieving 99.2% test accuracy using TensorFlow.",
    link: "https://github.com/yourusername/asl-recognition",
    tech: ["Python", "TensorFlow"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="mb-2 text-sm text-gray-500">{project.tech.join(" • ")}</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-600 hover:underline font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
