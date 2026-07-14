"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxury Salon",
    result: "35% More Bookings",
    text: "AutoFlowAI now replies to every WhatsApp enquiry instantly. We never miss appointments anymore.",
  },
  {
    name: "David Martins",
    company: "Real Estate Agency",
    result: "300+ Leads Automated",
    text: "The AI qualifies every lead before my team speaks to them. Our response time dropped from hours to seconds.",
  },
  {
    name: "Grace Okafor",
    company: "Online Store",
    result: "70% Less Support",
    text: "Customers get answers instantly and my staff finally have time to focus on growing the business.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-blue-400 uppercase tracking-widest text-xs md:text-sm">CLIENT SUCCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Businesses Love Working With AutoFlow AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Our automation systems save hundreds of hours and generate more revenue every month.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-blue-900 bg-[#0C1628] p-6 md:p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-4 md:mb-6" />
              <div className="flex mb-3 md:mb-5">
                {[1,2,3,4,5].map((i) => (<Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />))}
              </div>
              <p className="text-gray-300 leading-7 md:leading-8 mb-6 md:mb-8 text-sm md:text-base">"{item.text}"</p>
              <div className="border-t border-blue-900 pt-4 md:pt-6">
                <h4 className="font-semibold text-base md:text-lg">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.company}</p>
                <div className="mt-3 md:mt-4 inline-block bg-blue-500/10 text-blue-400 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">{item.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24">
          <div className="text-center"><h3 className="text-3xl md:text-4xl font-bold text-blue-500">80+</h3><p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Businesses Automated</p></div>
          <div className="text-center"><h3 className="text-3xl md:text-4xl font-bold text-blue-500">5,000+</h3><p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Hours Saved</p></div>
          <div className="text-center"><h3 className="text-3xl md:text-4xl font-bold text-blue-500">98%</h3><p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Client Satisfaction</p></div>
          <div className="text-center"><h3 className="text-3xl md:text-4xl font-bold text-blue-500">4.9★</h3><p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Average Rating</p></div>
        </div>
      </div>
    </section>
  );
}
