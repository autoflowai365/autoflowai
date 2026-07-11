"use client";
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
    <section className="py-28 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-widest text-sm">CLIENT SUCCESS</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Businesses Love Working With AutoFlow AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our automation systems save hundreds of hours and generate more revenue every month.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="rounded-3xl border border-blue-900 bg-[#0C1628] p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
              <Quote className="w-10 h-10 text-blue-500 mb-6" />
              <div className="flex mb-5">
                {[1,2,3,4,5].map((i) => (<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}
              </div>
              <p className="text-gray-300 leading-8 mb-8">"{item.text}"</p>
              <div className="border-t border-blue-900 pt-6">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-500">{item.company}</p>
                <div className="mt-4 inline-block bg-blue-500/10 text-blue-400 rounded-full px-4 py-2 text-sm">{item.result}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">80+</h3>
            <p className="text-gray-400 mt-2">Businesses Automated</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">5,000+</h3>
            <p className="text-gray-400 mt-2">Hours Saved</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">98%</h3>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">4.9★</h3>
            <p className="text-gray-400 mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
