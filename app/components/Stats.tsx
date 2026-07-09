const stats = [
  { number: "500+", label: "Hours Saved Per Client" },
  { number: "50+", label: "Businesses Automated" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "24/7", label: "Systems Running Non-Stop" },
];

export default function Stats() {
  return (
    <section className="px-6 py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.number}
              </span>
              <span className="text-blue-100 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
