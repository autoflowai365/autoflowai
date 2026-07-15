"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "2348120068497";
  const msg = "Hi%20AutoFlow%20AI,%20I%20am%20interested%20in%20automation.";
  const url = "https://wa.me/" + phone + "?text=" + msg;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
      <FaWhatsapp size={28} />
    </a>
  );
}
