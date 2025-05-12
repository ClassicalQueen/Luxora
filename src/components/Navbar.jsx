import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-[#1C1C1E] p-6 shadow-md flex justify-between items-center relative">
      <h1 className="text-2xl font-bold text-[#BFA980] font-[Playfair Display]">Luxora Interiors</h1>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#BFA980] focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex space-x-6">
        <Link to="/" className="hover:text-[#BFA980] transition">Home</Link>
        <Link to="/gallery" className="hover:text-[#BFA980] transition">Gallery</Link>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-[#1C1C1E] px-6 py-4 absolute top-full left-0 w-full space-y-4 z-50">
          <Link to="/" className="hover:text-[#BFA980] transition" onClick={handleLinkClick}>Home</Link>
          <Link to="/gallery" className="hover:text-[#BFA980] transition" onClick={handleLinkClick}>Gallery</Link>
        </div>
      )}
    </header>
  );
}
