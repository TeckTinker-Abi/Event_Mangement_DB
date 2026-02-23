import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      <h1 className="text-2xl font-bold text-yellow-500">
        Dubai Events
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
        <Link to="/services" className="hover:text-yellow-500 transition">Services</Link>
        <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
        <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;