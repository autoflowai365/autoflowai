const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We learn about your business, your bottlenecks, and where automation will have the biggest impact. No technical knowledge needed.",
  },
  {
    number: "02",
    title: "We Build It",
    desc: "Our team designs and builds your custom AI automation system — fully tested and tailored to your exact workflow before delivery.",
  },
  {
    number: "03",
    title: "You Grow",
    desc: "Your system goes live. You save hours every week while your business runs smarter, faster, and more profitably.",
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            From first call to fully automated — in days, not months.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center mb-6">
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
