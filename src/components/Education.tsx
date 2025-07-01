export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <ul className="space-y-6">
          <li>
            <div className="text-xl font-semibold">B.S. Computer Science</div>
            <div className="text-gray-600">University of California, Irvine</div>
            <div className="text-gray-500">Sep 2021 – Jun 2025</div>
          </li>
          {/* Add more degrees/schools as needed */}
        </ul>
      </div>
    </section>
  );
}
