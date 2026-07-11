"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-black text-blue-500">AutoFlow AI</h1>
        <nav className="hidden md:flex gap-8 text-slate-200">
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition">Get Started</button>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <a href="#services" className="block px-6 py-4 text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Services</a>
          <a href="#how-it-works" className="block px-6 py-4 text-white hover:bg-slate-800" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#contact" className="block px-6 py-4 text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Contact</a>
          <div className="p-6">
            <button className="w-full bg-blue-600 py-3 rounded-full font-bold text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
