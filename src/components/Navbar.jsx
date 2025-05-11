import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1C1C1E] p-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#BFA980] font-[Playfair Display]">Luxora Interiors</h1>
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#BFA980] focus:outline-none"
        >
          ☰
        </button>
      </div>
      <nav className="hidden lg:flex space-x-6">
        <a href="/" className="hover:text-[#BFA980] transition">Home</a>
        <a href="/gallery" className="hover:text-[#BFA980] transition">Gallery</a>
      </nav>
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-[#1C1C1E] px-6 py-4 absolute top-full left-0 w-full space-y-4">
          <a href="/" className="hover:text-[#BFA980] transition">Home</a>
          <a href="/gallery" className="hover:text-[#BFA980] transition">Gallery</a>
        </div>
      )}
    </header>
  );
}
