"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNav(href: string) {
    setOpen(false);
    if (href.startsWith("/#")) {
      router.push("/");
      setTimeout(() => {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      router.push(href);
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050B18]/95 backdrop-blur-xl shadow-2xl border-b border-white/10" : "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <Link href="/" className="text-xl md:text-3xl font-black text-blue-500 transition-all duration-300 hover:scale-105">AutoFlow AI</Link>
        <nav className="hidden md:flex gap-8 text-slate-200">
          <Link href="/services" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Services</Link><Link href="/pricing" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Pricing</Link><Link href="/pricing" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Pricing</Link>
          <Link href="/#how-it-works" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">How It Works</Link>
          <Link href="/#contact" className="text-gray-300 transition-all duration-300 hover:text-blue-400 text-sm">Contact</Link>
        </nav>
        <Link href="/#contact" className="hidden md:block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/40 text-white text-sm">Get Started</Link>
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <button onClick={() => handleNav("/services")} className="block w-full text-left px-4 py-3 text-white hover:bg-slate-800 transition text-sm">Services</button>
          <button onClick={() => handleNav("/#how-it-works")} className="block w-full text-left px-4 py-3 text-white hover:bg-slate-800 transition text-sm">How It Works</button>
          <button onClick={() => handleNav("/#contact")} className="block w-full text-left px-4 py-3 text-white hover:bg-slate-800 transition text-sm">Contact</button>
          <div className="p-4">
            <button onClick={() => handleNav("/#contact")} className="block w-full bg-blue-600 py-3 rounded-full font-bold text-white hover:bg-blue-500 transition text-sm text-center">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
