export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 text-blue-600 underline font-medium"
        >
          Download Resume (PDF)
        </a>
        {/* Optionally embed: */}
        <div className="hidden md:block mt-4">
          <iframe
            src="/resume.pdf"
            className="w-full h-96 rounded shadow"
            title="Resume PDF"
          />
        </div>
        <p className="mt-2 text-gray-400 text-sm">
          (For best viewing, use the download link above on mobile.)
        </p>
      </div>
    </section>
  );
}
