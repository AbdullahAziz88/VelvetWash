import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-foam/95 backdrop-blur border-b border-chrome">
      <div className="mx-auto px-3 sm:px-8 grid grid-cols-[auto_1fr_auto] items-center h-16 gap-4">

        <NavLink
          to="/"
          className="font-display text-lg font-semibold text-ink tracking-tight shrink-0"
        >
          Velvet Wash
        </NavLink>

        <nav className="flex items-center justify-center gap-6 overflow-x-auto whitespace-nowrap">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors shrink-0 ${
                  isActive
                    ? "text-hose-deep"
                    : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/booking"
          className="inline-flex items-center rounded-md bg-hose px-4 py-2 text-sm font-medium text-foam hover:bg-hose-deep transition-colors shrink-0"
        >
          Book a wash
        </NavLink>

      </div>
    </header>
  );
}