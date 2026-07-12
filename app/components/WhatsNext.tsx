"use client";
import { Phone, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Phone className="w-8 h-8" />,
    step: "01",
    title: "Book A Call",
    desc: "Schedule a free 30-minute strategy session. We learn about your business and identify your biggest automation opportunities.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    step: "02",
    title: "We Build",
    desc: "We design, build and test a custom AI automation system tailored specifically to your business — fully done for you.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    step: "03",
    title: "You Grow",
    desc: "Your automation goes live. Save hours every week, reduce costs, serve more customers and scale your business faster.",
  },
];

export default function WhatsNext() {
  return (
    <section className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold">WHAT HAPPENS NEXT</span>
          <h2 className="text-5xl font-black text-white mt-6">Your Journey To Automation</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">Three simple steps from first conversation to a fully automated business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative rounded-3xl border border-slate-700 bg-slate-800/50 p-10 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">{step.step}</div>
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-8">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/40">
            Start With A Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
