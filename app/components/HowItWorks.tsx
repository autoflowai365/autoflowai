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
    <section id="how-it-works" className="px-6 py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            THE PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">How It Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            From first call to fully automated — in days, not months.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group relative flex flex-col items-center text-center bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-blue-400 font-black text-lg">{step.number}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-blue-500/30" />
              )}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

