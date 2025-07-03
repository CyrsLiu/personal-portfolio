const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white border-b-2 border-gray-200 z-50">
      <div className="max-w-4xl mx-auto flex justify-center space-x-4 py-3">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="
              text-black-700 px-4 py-2 
              font-semibold
              border-b-2 border-transparent
              hover:border-blue-500 hover:text-blue-600
              transition
            "
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

