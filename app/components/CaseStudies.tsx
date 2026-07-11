const caseStudies = [
  {
    industry: "Salon & Spa",
    before: ["Manual appointment booking","Missed WhatsApp enquiries","Double bookings"],
    after: ["AI books appointments 24/7","Automatic reminders","Instant confirmations"],
    result: "8+ Hours Saved Every Week",
  },
  {
    industry: "Real Estate",
    before: ["Slow lead response","Spreadsheet management","Lost enquiries"],
    after: ["AI qualifies every lead","CRM updates automatically","Instant WhatsApp follow-up"],
    result: "3x Faster Lead Response",
  },
  {
    industry: "E-commerce",
    before: ["Manual customer support","Repeated questions","Order update delays"],
    after: ["24/7 AI customer support","Automatic order updates","Instant FAQ replies"],
    result: "70% Fewer Support Tickets",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-4">BUSINESS TRANSFORMATIONS</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Before Automation vs After AutoFlow AI</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">Here is how businesses change after implementing intelligent AI automation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="rounded-3xl border border-slate-700 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]">
              <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">{study.industry}</div>
              <div className="mb-6">
                <h3 className="text-red-400 font-bold mb-4">Before</h3>
                <ul className="space-y-3">
                  {study.before.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2"><span className="text-red-500">✕</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-green-400 font-bold mb-4">After AutoFlow AI</h3>
                <ul className="space-y-3">
                  {study.after.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2"><span className="text-green-400">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 rounded-xl bg-blue-950 border border-blue-700 py-4 text-center font-semibold text-blue-300 animate-pulse">
                <p className="text-blue-400 font-bold">📈 {study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
