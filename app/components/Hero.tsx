import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-28 pb-16 px-4 md:pt-40 md:pb-28 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[44%_54%] gap-8 items-start">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">AI AUTOMATION AGENCY</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4">Automate Your Business.<br /><span className="text-blue-500">Grow Without Limits.</span></h1>
          <p className="mt-4 md:mt-8 text-base md:text-xl text-slate-300 max-w-3xl">AutoFlowAI builds intelligent automation systems that eliminate repetitive work, allowing your team to focus on growth, customers and innovation.</p>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-5">
            <Link href="/#contact" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base text-white text-center">Book a Free Call</Link>
            <Link href="/services" className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base text-white text-center">Explore Solutions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8 lg:mt-0">
          <div className="text-center">
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">MANUAL vs AUTOMATED</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-4 md:p-5">
              <p className="text-red-400 font-bold mb-2 md:mb-3 text-xs md:text-sm">Before</p>
              <ul className="space-y-1 md:space-y-2 text-slate-300 text-xs md:text-sm">
                <li>❌ Manual follow-ups</li>
                <li>❌ Missed leads</li>
                <li>❌ Slow replies</li>
                <li>❌ Spreadsheet chaos</li>
                <li>❌ Lost sales</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-4 md:p-5">
              <p className="text-green-400 font-bold mb-2 md:mb-3 text-xs md:text-sm">After AutoFlow AI</p>
              <ul className="space-y-1 md:space-y-2 text-slate-300 text-xs md:text-sm">
                <li>✅ Auto follow-ups</li>
                <li>✅ Leads captured</li>
                <li>✅ Instant replies</li>
                <li>✅ CRM updated</li>
                <li>✅ Deals closed</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-blue-800 bg-slate-900 p-5 md:p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-slate-400 text-xs md:text-sm">AutoFlow AI Agent</p>
                <h3 className="text-lg md:text-xl font-bold">Automation Running</h3>
              </div>
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {["Lead Captured","AI Qualified","CRM Updated","Proposal Sent","WhatsApp Sent","Appointment Booked"].map((item) => (
                <div key={item} className="flex justify-between items-center rounded-xl bg-slate-800 px-3 md:px-4 py-2 md:py-3">
                  <span className="text-xs md:text-sm">{item}</span>
                  <span className="text-green-400 font-bold text-xs md:text-sm">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
