const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="max-w-4xl mx-auto flex justify-center gap-6 py-3">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-gray-700 hover:text-blue-600 font-semibold transition"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
