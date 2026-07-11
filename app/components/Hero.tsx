export default function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">AI AUTOMATION AGENCY</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Automate Your Business.
            <br />
            <span className="text-blue-500">Grow Without Limits.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-300 max-w-3xl">
            AutoFlowAI builds intelligent automation systems that eliminate repetitive work, allowing your team to focus on growth, customers and innovation.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30 px-8 py-4 rounded-full font-bold">Book a Free Call</button>
            <button className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full">Explore Solutions</button>
          </div>
          <div className="mt-12">
            <p className="text-slate-500 text-sm mb-5">Trusted technologies we build with</p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-slate-400 font-semibold">
              <span>OpenAI</span>
              <span>n8n</span>
              <span>GPT-4</span>
              <span>Claude</span>
              <span>Make</span>
              <span>Zapier</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-900 border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-slate-400 text-sm">AutoFlow AI Agent</p>
                <h3 className="text-white text-2xl font-bold">Workflow Running</h3>
              </div>
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between bg-slate-800 rounded-xl p-4"><span className="text-slate-300">New Lead Received</span><span className="text-green-400">✓</span></div>
              <div className="flex justify-between bg-slate-800 rounded-xl p-4"><span className="text-slate-300">AI Qualified Lead</span><span className="text-green-400">✓</span></div>
              <div className="flex justify-between bg-slate-800 rounded-xl p-4"><span className="text-slate-300">CRM Updated</span><span className="text-green-400">✓</span></div>
              <div className="flex justify-between bg-slate-800 rounded-xl p-4"><span className="text-slate-300">Email Sent</span><span className="text-green-400">✓</span></div>
              <div className="flex justify-between bg-slate-800 rounded-xl p-4"><span className="text-slate-300">WhatsApp Follow-up</span><span className="text-green-400">✓</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
