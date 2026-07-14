const steps = [
  {
    number: "01",
    title: "Book a Discovery Call",
    desc: "We learn how your business operates, identify repetitive tasks, and uncover the biggest automation opportunities.",
  },
  {
    number: "02",
    title: "We Build Your AI System",
    desc: "We design, build, and test a custom automation tailored to your business using the best AI tools and workflows.",
  },
  {
    number: "03",
    title: "Save Time & Scale",
    desc: "Your automation goes live, freeing your team from repetitive work so you can focus on growth and serving customers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 md:px-6 py-16 md:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">THE PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 leading-tight">How It Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-lg">From first call to fully automated — in days, not months.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group relative flex flex-col items-center text-center bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-blue-400 font-black text-base md:text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
