import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import logo from "./assets/logoEvent.png";
import { useState } from "react";
import EnquiryModal from "./components/EnquiryModal";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling while splash is visible
    document.body.style.overflow = showSplash ? "hidden" : "auto";
  }, [showSplash]);

  // If splash is open, show ONLY the splash screen
  if (showSplash) {
    return (

      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundColor: "#00001a" }} // Blinking background
      // , animation: "bgBlink 2s infinite alternate" 
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Dubai Events Logo"
          className="w-64 mb-6"
          style={{
            animation: "slideUpGrow 1s ease-out forwards",
          }}
        />

        {/* Running / appearing text lines */}
        <div className="text-center text-gray-400 mb-8">
          <p
            className="text-xl font-semibold"
            style={{
              animation: "slideUpText 1s ease-out forwards",
              animationDelay: "0.6s",
              opacity: 0,
            }}
          >
            Experience the Ultimate Luxury
          </p>
          <p
            className="text-lg font-light"
            style={{
              animation: "slideUpText 1s ease-out forwards",
              animationDelay: "1.2s",
              opacity: 0,
            }}
          >
            Dubai’s Party & Culture Awaits
          </p>
        </div>

        {/* Explore Button */}
        <button
          onClick={() => setShowSplash(false)}
          className="px-8 py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          style={{
            animation: "slideUpText 1s ease-out forwards, buttonPulse 2s ease-in-out infinite alternate",
            animationDelay: "1.8s",
            opacity: 0,
          }}
        >
          Explore
        </button>

        {/* Inline keyframes */}
        <style>
          {`
        /* Logo and text slide up */
        @keyframes slideUpGrow {
          0% { transform: translateY(100px) scale(0.5); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes slideUpText {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Button pulse glow */
        @keyframes buttonPulse {
          0% { transform: scale(1); box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3); }
          100% { transform: scale(1.05); box-shadow: 0 10px 25px rgba(255, 215, 0, 0.5); }
        }

        /* Background blinking */
        @keyframes bgBlink {
          0% { background-color: #00001f; }
          50% { background-color: #05002f; }
          100% { background-color: #00001f; }
        }
      `}
        </style>
      </div>
    )
  }


  // After Explore is clicked, render the full site
  return (

    <div className="text-white min-h-screen bg-[#00001a]">

      <Navbar
        logoUrl={logo}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        customClass="bg-transparent"
      />


      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />


      {/* ================= FOOTER ================= */}
      <footer
        className="border-t border-gray-800 text-gray-400"
        style={{ backgroundColor: "#00001a" }} // Custom night-dark background
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

          {/* COLUMN 1 – BRAND */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Dubai Events Logo"
                className="h-14 w-auto object-contain"
              />
              <h2 className="text-white text-xl font-bold tracking-wide">
                DUBAI <span className="text-yellow-500">EVENT</span>
              </h2>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-left">
              Crafting bespoke luxury events across Dubai with elegance,
              precision, and unforgettable experiences.
            </p>

            <p className="text-yellow-500 font-semibold text-left">
              +971 50 123 4567
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Signature Events
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/social" className="hover:text-yellow-500 transition">
                  Yacht Party
                </Link>
              </li>
              <li>
                <Link to="/services/social" className="hover:text-yellow-500 transition">
                  Private Yacht Dinner
                </Link>
              </li>
              <li>
                <Link to="/services/social" className="hover:text-yellow-500 transition">
                  Beach Party
                </Link>
              </li>
              <li>
                <Link to="/services/social" className="hover:text-yellow-500 transition">
                  Birthday Party
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Luxury Experiences
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/cultural" className="hover:text-yellow-500 transition">
                  Ramadan Iftar Event
                </Link>
              </li>
              <li>
                <Link to="/services/cultural" className="hover:text-yellow-500 transition">
                  Eid Celebration
                </Link>
              </li>
              <li>
                <Link to="/services/education" className="hover:text-yellow-500 transition">
                  Graduation Party
                </Link>
              </li>
              <li>
                <Link to="/services/entertainment" className="hover:text-yellow-500 transition">
                  Fashion Show
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@luxuryevents.com"
                  className="hover:text-yellow-500 transition"
                >
                  info@luxuryevents.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Dubai Events. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;