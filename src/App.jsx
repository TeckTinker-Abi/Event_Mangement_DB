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

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (

    <div className="bg-black text-white min-h-screen flex flex-col font-sans antialiased">

      {/* ================= NAVBAR ================= */}
      <Navbar
        logoUrl={logo}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          {/* ✅ IMPORTANT: Category Dynamic Route */}
          <Route path="/services/:category" element={<CategoryPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-gray-800 text-gray-400">

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