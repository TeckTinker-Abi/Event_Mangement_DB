import { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar({ logoUrl, onOpenEnquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-transparent backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.location.reload();
            }
          }}
        >
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="h-15 lg:h-15 w-auto object-contain transition-all duration-300"
            />
          )}
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

          <button onClick={() => { setIsMobileMenuOpen(false); onOpenEnquiry(); }}
            className="bg-yellow-500 text-black font-bold px-4 py-2 lg:px-2 lg:py-2 rounded-lg text-xs lg:text-base hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-yellow-500/40" > INQUIRE NOW </button>
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="bg-yellow-500 text-black font-extrabold px-8 py-4 rounded-lg text-sm hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-yellow-500/40"
            >
              INQUIRE NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;