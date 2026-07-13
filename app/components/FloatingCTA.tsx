"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / document.documentElement.scrollHeight;
      if (scrolled > 0.3 && !dismissed) setVisible(true);
      else if (scrolled <= 0.3) setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-24 left-6 z-50 max-w-xs bg-slate-900 border border-blue-500/30 rounded-2xl p-5 shadow-2xl shadow-blue-500/10 animate-[fadeSlideIn_0.4s_ease_forwards]">
      <button onClick={() => setDismissed(true)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition">
        <X size={16} />
      </button>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-green-400 text-xs font-semibold">Available Now</span>
      </div>
      <h4 className="text-white font-bold mb-1">Need AI Automation?</h4>
      <p className="text-slate-400 text-sm mb-4">Book a free strategy call today.</p>
      <a href="#contact" onClick={() => setDismissed(true)} className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 text-sm text-center">
        Book Free Strategy Call
      </a>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
