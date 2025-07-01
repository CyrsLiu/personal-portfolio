const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "C", "Java", "Tailwind CSS", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-semibold text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
