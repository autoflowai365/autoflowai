"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mrenzyrl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) { setStatus("success"); form.reset(); }
    else { setStatus("error"); }
  }

  return (
    <div
      style={{
        boxShadow: "0 0 40px rgba(37,99,235,.25), 0 20px 60px rgba(0,0,0,.4)",
        borderRadius: "1.5rem",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="name" placeholder="Your Name" required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
        <input type="email" name="email" placeholder="Email Address" required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
        <input type="text" name="company" placeholder="Company Name" className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
        <textarea name="message" rows={5} placeholder="Tell us about your business..." required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none resize-none text-white placeholder:text-white/60" />
        <button
          type="submit"
          className="w-full bg-white text-blue-700 rounded-xl py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,99,235,.45)]"
        >
          Send Message
        </button>
        {status === "success" && (
          <p className="text-green-300 font-medium animate-[fadeIn_.4s_ease_forwards]" style={{ animation: "fadeSlideIn 0.4s ease forwards" }}>
            ✅ Thank you! Your message has been sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-300 font-medium" style={{ animation: "fadeSlideIn 0.4s ease forwards" }}>
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
