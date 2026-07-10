export default function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          AI AUTOMATION AGENCY
        </span>
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
  Stop Wasting Time On
  <br />
  <span className="text-blue-500">
    Repetitive Work.
  </span>
</h1>
  <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-8">
  We build AI agents and intelligent automation systems that save businesses
  hours every week, reduce costs, and allow teams to focus on growth instead
  of repetitive manual work.
</p>
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30 px-8 py-4 rounded-full font-bold">
            Book a Free Call
          </button>
          <button className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full">
            Explore Solutions
          </button>
        </div>
        <div className="mt-12 text-slate-400 text-sm">
  Trusted technologies we build with
</div>

<div className="flex flex-wrap justify-center gap-6 mt-6 text-slate-300 font-semibold">
  <span>OpenAI</span>
  <span>n8n</span>
  <span>Groq</span>
  <span>Claude</span>
  <span>Make</span>
  <span>Zapier</span>
</div>
      </div>
    </section>
  );
}
