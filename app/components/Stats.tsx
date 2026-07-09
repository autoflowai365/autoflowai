const stats = [
  { number: "500+", label: "Hours Saved Per Client" },
  { number: "50+", label: "Businesses Automated" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "24/7", label: "Systems Running Non-Stop" },
];

export default function Stats() {
  return (
    <section className="px-6 py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
      <div className="max-w-6xl mx-auto"><div className="text-center mb-16"><span className="inline-block bg-white/10 px-5 py-2 rounded-full text-sm font-semibold text-white mb-4">RESULTS THAT MATTER</span><h2 className="text-4xl md:text-5xl font-black text-white mb-4">Numbers That Speak For Themselves</h2><p className="text-blue-100 max-w-2xl mx-auto text-lg">Every automation we build is designed to save time, reduce costs, and help businesses grow faster with AI.</p></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <span className="text-5xl md:text-6xl font-black text-white mb-2">
                {stat.number}
              </span>
              <span className="text-blue-50 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
