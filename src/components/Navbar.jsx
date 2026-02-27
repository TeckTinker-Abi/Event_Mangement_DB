import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ logoUrl, onOpenEnquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50
        transition-transform duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        bg-transparent`}
      >
        <div className="px-6 lg:px-20 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            {logoUrl && (
              <img
                src="https://res.cloudinary.com/dsa0chszi/image/upload/v1772170948/logoEvent_ciose0.png"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            )}
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-500 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={onOpenEnquiry}
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              INQUIRE NOW
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-yellow-500"></span>
            <span className="w-6 h-0.5 bg-yellow-500"></span>
            <span className="w-6 h-0.5 bg-yellow-500"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE HALF SCREEN DRAWER */}
      {/* Overlay (click outside to close) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* TOP HALF SCREEN MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-1/2
  bg-black/60 backdrop-blur-lg
  shadow-2xl
  flex flex-col items-center justify-center space-y-6
  transform transition-transform duration-500 ease-in-out
  ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
  z-40 md:hidden`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-lg uppercase tracking-wider"
                : "text-gray-200 hover:text-yellow-500 transition text-lg uppercase tracking-wider"
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
          className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-lg"
        >
          INQUIRE NOW
        </button>
      </div>
    </>
  );
}

export default Navbar;