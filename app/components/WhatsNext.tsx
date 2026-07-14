"use client";
import { Phone, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />,
    step: "01",
    title: "Book A Call",
    time: "30 minutes",
    desc: "Schedule a free 30-minute strategy session. We learn about your business and identify your biggest automation opportunities.",
    highlight: true,
  },
  {
    icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" />,
    step: "02",
    title: "We Build",
    time: "5-10 business days",
    desc: "We design, build and test a custom AI automation system tailored specifically to your business — fully done for you.",
    highlight: false,
  },
  {
    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
    step: "03",
    title: "You Grow",
    time: "Immediately",
    desc: "Your automation goes live. Save hours every week, reduce costs, serve more customers and scale your business faster.",
    highlight: false,
  },
];

export default function WhatsNext() {
  return (
    <section className="py-16 md:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">WHAT HAPPENS NEXT</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 md:mt-6">Your Journey To Automation</h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mt-3 md:mt-6">Three simple steps from first conversation to a fully automated business.</p>
        </div>
        <div className="relative">
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-blue-500/20 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`group relative rounded-3xl border p-6 md:p-10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all duration-300 ${step.highlight ? "border-blue-500 bg-blue-600/10 shadow-[0_0_30px_rgba(37,99,235,0.2)]" : "border-slate-700 bg-slate-800/50 hover:border-blue-500"}`}>
                <div className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs md:text-sm">{step.step}</div>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 ${step.highlight ? "bg-blue-600 text-white" : "bg-blue-600/20 text-blue-400"}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                <span className="inline-block text-blue-400 text-xs md:text-sm font-semibold mb-3 md:mb-4 bg-blue-600/10 px-3 py-1 rounded-full">⏱ {step.time}</span>
                <p className="text-slate-400 text-sm md:text-base leading-7 md:leading-8">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10 md:mt-16">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/40 text-sm md:text-base">
            Book My Free Strategy Call →
          </a>
        </div>
      </div>
    </section>
  );
}
