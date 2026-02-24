import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ logoUrl }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
<div className="px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 lg:gap-3"
        >
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          )}
          <h1 className="text-lg lg:text-2xl font-bold tracking-tight uppercase">
            <span className="text-yellow-500">Dubai</span>
            <span className="text-white ml-1">Event</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-8 text-xs lg:text-sm font-medium uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${isActive
                    ? "text-yellow-500"
                    : "text-gray-400 hover:text-yellow-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button className="bg-yellow-500 text-black text-[11px] lg:text-xs font-black px-6 py-3 rounded-sm hover:bg-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(234,179,8,0.3)] active:translate-y-1">
            INQUIRE NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest ${isActive
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button className="bg-yellow-500 text-black font-black py-4 rounded-sm text-sm">
              INQUIRE NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;