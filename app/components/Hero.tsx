export default function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          AI AUTOMATION AGENCY
        </span>
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Automate Your Business.
          <br />
          <span className="text-blue-500">Grow Faster With AI.</span>
        </h1>
        <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
          AutoFlowAI builds intelligent automation systems that eliminate repetitive work,
          allowing your team to focus on growth, customers and innovation.
        </p>
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full font-bold">
            Book a Free Call
          </button>
          <button className="border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-full">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
