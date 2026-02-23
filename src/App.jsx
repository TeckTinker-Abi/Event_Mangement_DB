import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";

function App() {
  // Replace the string below with your actual logo path (e.g., "/logo.png")
  const myLogo = ""; 

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans antialiased">
      {/* Navbar with logo prop passed in */}
      <Navbar logoUrl={myLogo} />

      {/* Page Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Recommended: Simple Footer for User-Friendliness */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dubai Events. All rights reserved.
      </footer>
    </div>
  );
}

export default App;