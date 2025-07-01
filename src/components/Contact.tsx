export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:youremail@example.com"
            className="text-blue-600 underline"
          >
            youremail@example.com
          </a>
        </p>
        {/* If you want a simple form instead, let me know! */}
        <p>
          Or connect on{" "}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
