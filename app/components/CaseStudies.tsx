"use client";
import { motion } from "framer-motion";
import { Scissors, Building2, ShoppingCart, TrendingUp, Clock, DollarSign } from "lucide-react";

const studies = [
  {
    industry: "Salon & Spa",
    before: ["Missed WhatsApp bookings","Double bookings","Manual appointment reminders"],
    after: ["AI books appointments 24/7","Automatic reminders","Instant confirmations"],
    stats: [{ label: "35% More Bookings" },{ label: "8+ Hours Saved Weekly" }],
  },
  {
    industry: "Real Estate",
    before: ["Slow lead response","Spreadsheet management","Lost enquiries"],
    after: ["AI qualifies every lead","CRM updated automatically","Instant WhatsApp follow-up"],
    stats: [{ label: "300+ Leads Automated" },{ label: "30 Second Response" }],
  },
  {
    industry: "E-commerce",
    before: ["Manual customer support","Repeated questions","Order update delays"],
    after: ["24/7 AI customer support","Automatic order updates","Instant FAQ replies"],
    stats: [{ label: "70% Fewer Support Tickets" },{ label: "Higher Customer Satisfaction" }],
  },
];

const icons = [
  <Scissors className="w-6 h-6" />,
  <Building2 className="w-6 h-6" />,
  <ShoppingCart className="w-6 h-6" />,
];

const statIcons = [
  [<TrendingUp size={18} />, <Clock size={18} />],
  [<TrendingUp size={18} />, <Clock size={18} />],
  [<DollarSign size={18} />, <TrendingUp size={18} />],
];

export default function CaseStudies() {
  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex rounded-full bg-blue-600/20 px-5 py-2 text-blue-400 text-sm font-semibold">SUCCESS STORIES</div>
          <h2 className="text-5xl font-black text-white mt-6">Businesses Transformed With AI</h2>
          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">Here are examples of how intelligent automation changes businesses across different industries.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-3xl border border-blue-900/40 bg-[#0B1120] p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">{icons[i]}</div>
                <div>
                  <p className="text-white font-bold text-xl">{study.industry}</p>
                  <p className="text-blue-400 text-sm">AI Automation Case Study</p>
                </div>
              </div>
              <h4 className="text-red-400 font-bold mb-4">Before</h4>
              <ul className="space-y-3 mb-8">
                {study.before.map((item) => (<li key={item} className="text-gray-300 flex gap-2">❌ {item}</li>))}
              </ul>
              <hr className="border-slate-700 mb-8" />
              <h4 className="text-green-400 font-bold mb-4">After AutoFlow AI</h4>
              <ul className="space-y-3 mb-8">
                {study.after.map((item) => (<li key={item} className="text-white flex gap-2">✅ {item}</li>))}
              </ul>
              <div className="space-y-3">
                {study.stats.map((stat, j) => (
                  <div key={stat.label} className="rounded-xl bg-blue-600/10 border border-blue-500/20 p-4 flex items-center gap-3 text-blue-300 font-semibold">
                    {statIcons[i][j]}
                    {stat.label}
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
