"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "🤖", title: "AI Agents", desc: "Intelligent agents that handle customer queries, bookings, and support 24/7 without human intervention." },
  { icon: "⚡", title: "Workflow Automation", desc: "Eliminate repetitive tasks by connecting your tools into seamless automated pipelines." },
  { icon: "📊", title: "Business Dashboards", desc: "Real-time dashboards that give you instant visibility into your business performance." },
  { icon: "💬", title: "AI Customer Support", desc: "Deploy AI-powered support bots on WhatsApp, your website, and more — always on, always fast." },
  { icon: "📧", title: "Email Automation", desc: "Automated email sequences, follow-ups, and campaigns that convert leads while you sleep." },
  { icon: "🔗", title: "API Integrations", desc: "Connect Airtable, Google Sheets, Slack, CRMs and more into one unified smart workflow." },
];

export default function Services() {
  return (
    <section id="services" className="px-4 md:px-6 py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">WHAT WE BUILD</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 leading-tight">What We Automate</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-lg">We build custom AI workflows tailored to your exact business needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-5 transition-transform duration-300 group-hover:scale-125">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition">{service.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
