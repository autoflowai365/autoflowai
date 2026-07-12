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
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="name" placeholder="Your Name" required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
      <input type="email" name="email" placeholder="Email Address" required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
      <input type="text" name="company" placeholder="Company Name" className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none text-white placeholder:text-white/60" />
      <textarea name="message" rows={5} placeholder="Tell us about your business..." required className="w-full rounded-xl bg-white/10 border border-white/20 p-4 outline-none resize-none text-white placeholder:text-white/60" />
      <button type="submit" className="w-full bg-white text-blue-700 rounded-xl py-4 font-bold hover:scale-105 transition-all duration-300">Send Message</button>
      {status === "success" && <p className="text-green-300 font-medium">✅ Thank you! Your message has been sent successfully.</p>}
      {status === "error" && <p className="text-red-300 font-medium">❌ Something went wrong. Please try again.</p>}
    </form>
  );
}
