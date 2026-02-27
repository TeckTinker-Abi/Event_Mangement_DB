// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar({ logoUrl, onOpenEnquiry }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
// <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent">    {/* <nav className="bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-50"> */}
//       <div className="px-6 lg:px-20 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="flex items-center"
//           onClick={() => {
//             if (window.location.pathname === "/") window.location.reload();
//           }}
//         >
//           {logoUrl && (
//             <img
//               src={logoUrl}
//               alt="Logo"
//               className="h-22 w-auto object-contain"
//             />
//           )}
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-500"
//                   : "text-gray-300 hover:text-yellow-500 transition"
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           <button
//             onClick={onOpenEnquiry}
//             className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
//           >
//             INQUIRE NOW
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
//           <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
//           <div className="w-6 h-0.5 bg-yellow-500"></div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden backdrop-blur-lg bg-black/60">
//           <div className="flex flex-col p-6 space-y-4">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-500 font-bold"
//                     : "text-gray-200 hover:text-yellow-500"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}

//             <button
//               onClick={() => {
//                 setIsMobileMenuOpen(false);
//                 onOpenEnquiry();
//               }}
//               className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg"
//             >
//               ENQUIRE NOW
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


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
              className="h-20 w-auto object-contain"
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

        {/* Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-yellow-500"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;