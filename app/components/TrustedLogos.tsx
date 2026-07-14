export default function TrustedLogos() {
  const logos = ["OpenAI","n8n","Claude","Google","Airtable","Zapier","Notion","Make","HubSpot"];
  return (
    <section className="bg-slate-950 border-y border-slate-800 py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-10">AUTOMATIONS BUILT WITH INDUSTRY-LEADING PLATFORMS</p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="rounded-xl border border-slate-800 bg-slate-900/50 py-3 md:py-5 text-slate-400 font-semibold hover:border-blue-500 hover:text-white hover:bg-slate-900 transition-all duration-300 text-xs md:text-sm">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
