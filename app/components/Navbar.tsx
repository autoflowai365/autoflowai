"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050B18]/95 backdrop-blur-xl shadow-2xl border-b border-white/10" : "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <h1 className="text-xl md:text-3xl font-black text-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">AutoFlow AI</h1>
        <nav className="hidden md:flex gap-8 text-slate-200">
          <a href="#services" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Services</a>
          <a href="#how-it-works" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">How It Works</a>
          <a href="#contact" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Contact</a>
        </nav>
        <button className="hidden md:block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/40 text-white text-sm">Get Started</button>
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <a href="#services" className="block px-4 py-3 text-white hover:bg-slate-800 transition text-sm" onClick={() => setOpen(false)}>Services</a>
          <a href="#how-it-works" className="block px-4 py-3 text-white hover:bg-slate-800 transition text-sm" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#contact" className="block px-4 py-3 text-white hover:bg-slate-800 transition text-sm" onClick={() => setOpen(false)}>Contact</a>
          <div className="p-4">
            <button className="w-full bg-blue-600 py-3 rounded-full font-bold text-white hover:bg-blue-500 transition text-sm">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
