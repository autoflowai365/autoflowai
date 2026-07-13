"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
      </p>
      <div className="flex gap-3">
        <button onClick={accept} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 text-sm">
          Accept All
        </button>
        <button onClick={() => setVisible(false)} className="flex-1 border border-slate-600 hover:border-slate-400 text-slate-300 font-bold py-2 px-4 rounded-xl transition-all duration-300 text-sm">
          Decline
        </button>
      </div>
    </div>
  );
}
