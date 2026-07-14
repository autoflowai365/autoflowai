"use client";
import { motion } from "framer-motion";
import { Scissors, Building2, ShoppingCart, TrendingUp, Clock, DollarSign } from "lucide-react";

const studies = [
  {
    industry: "Salon & Spa",
    before: ["Missed WhatsApp bookings","Double bookings","Manual appointment reminders"],
    after: ["AI books appointments 24/7","Automatic reminders","Instant confirmations"],
    stats: [{ icon: "↗", value: "+35%", label: "More Bookings" },{ icon: "⏱", value: "8+", label: "Hours Saved Weekly" }],
  },
  {
    industry: "Real Estate",
    before: ["Slow lead response","Spreadsheet management","Lost enquiries"],
    after: ["AI qualifies every lead","CRM updated automatically","Instant WhatsApp follow-up"],
    stats: [{ icon: "↗", value: "300+", label: "Leads Automated" },{ icon: "⏱", value: "30s", label: "Response Time" }],
  },
  {
    industry: "E-commerce",
    before: ["Manual customer support","Repeated questions","Order update delays"],
    after: ["24/7 AI customer support","Automatic order updates","Instant FAQ replies"],
    stats: [{ icon: "$", value: "70%", label: "Fewer Support Tickets" },{ icon: "↗", value: "High", label: "Customer Satisfaction" }],
  },
];

const icons = [
  <Scissors className="w-5 h-5 md:w-6 md:h-6" />,
  <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />,
];

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-blue-400 text-xs md:text-sm font-semibold">SUCCESS STORIES</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 md:mt-6">Businesses Transformed With AI</h2>
          <p className="text-gray-400 mt-3 md:mt-5 max-w-3xl mx-auto text-sm md:text-lg">Here are examples of how intelligent automation changes businesses across different industries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-3xl border border-blue-900/40 bg-[#0B1120] p-6 md:p-8 shadow-xl hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-6">{icons[i]}</div>
                <div>
                  <p className="text-white font-bold text-lg md:text-xl">{study.industry}</p>
                  <p className="text-blue-400 text-xs md:text-sm">AI Automation Case Study</p>
                </div>
              </div>
              <h4 className="text-red-400 font-bold mb-3 md:mb-4 text-sm md:text-base">Before</h4>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {study.before.map((item) => (<li key={item} className="text-gray-300 flex gap-2 text-xs md:text-sm">❌ {item}</li>))}
              </ul>
              <hr className="border-slate-700 mb-6 md:mb-8" />
              <h4 className="text-green-400 font-bold mb-3 md:mb-4 text-sm md:text-base">After AutoFlow AI</h4>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {study.after.map((item) => (<li key={item} className="text-white flex gap-2 text-xs md:text-sm">✅ {item}</li>))}
              </ul>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-blue-600/10 border border-blue-500/20 p-3 md:p-4 text-center group-hover:bg-blue-600/20 transition-all duration-300">
                    <div className="text-blue-300 text-lg md:text-xl font-black mb-1">{stat.icon} {stat.value}</div>
                    <div className="text-blue-400 text-xs font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
