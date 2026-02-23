import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-8 lg:h-10 w-auto object-contain" />
          ) : (
            <h1 className="text-xl lg:text-2xl font-bold tracking-tighter uppercase">
              <span className="text-yellow-500">Dubai</span>
              <span className="text-white ml-1">Events</span>
            </h1>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8 lg:gap-10 text-xs lg:text-sm font-medium uppercase tracking-[0.15em] mr-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="bg-yellow-500 text-black text-[11px] lg:text-xs font-black px-6 py-3 rounded-sm hover:bg-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(234,179,8,0.3)] active:translate-y-1">
            INQUIRE NOW
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500"></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 text-sm font-bold uppercase tracking-widest hover:text-yellow-500"
              >
                {link.name}
              </Link>
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