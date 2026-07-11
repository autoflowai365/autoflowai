"use client";
import { motion } from "framer-motion";
import { Rocket, Bot, ShieldCheck, TrendingUp, Puzzle, Headset } from "lucide-react";

const features = [
  { icon: <Rocket className="w-8 h-8" />, title: "Fast Deployment", desc: "Most automation systems are designed, tested and launched within days—not months." },
  { icon: <Bot className="w-8 h-8" />, title: "Custom AI Solutions", desc: "Every workflow is built specifically for your business. No templates or one-size-fits-all systems." },
  { icon: <TrendingUp className="w-8 h-8" />, title: "ROI Focused", desc: "We build automations that save time, reduce costs and increase revenue from day one." },
  { icon: <Puzzle className="w-8 h-8" />, title: "Works With Your Tools", desc: "Integrates with WhatsApp, Google Workspace, Airtable, CRMs, payment systems and hundreds more." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliable & Secure", desc: "Your workflows are designed for stability, security and long-term business growth." },
  { icon: <Headset className="w-8 h-8" />, title: "Ongoing Support", desc: "We do not disappear after launch. We monitor, improve and support your automation whenever you need us." },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold">WHY CHOOSE AUTOFLOW AI</span>
          <h2 className="text-5xl font-black text-white mt-6">More Than Automation.<br />We Build Business Growth Systems.</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6">We combine AI, automation and business strategy to help companies save time, increase efficiency and grow faster without hiring more staff.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-8">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
