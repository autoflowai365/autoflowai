"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "2348031234567";
  const msg = "Hi%20AutoFlow%20AI,%20I%20am%20interested%20in%20automation.";
  const url = "https://wa.me/" + phone + "?text=" + msg;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
      <FaWhatsapp size={28} />
      <span className="hidden sm:block font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
