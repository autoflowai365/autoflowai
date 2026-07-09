const testimonials = [
  {
    name: "Sarah Adeyemi",
    role: "CEO, Lagos Spa & Wellness",
    text: "AutoFlow AI built us a WhatsApp booking system that runs 24/7. We went from missing appointments to being fully booked every week. Incredible.",
    avatar: "SA",
  },
  {
    name: "Emeka Okonkwo",
    role: "Founder, SwiftDeliver Logistics",
    text: "They automated our entire order tracking and customer update system. Our team now focuses on delivery, not answering the same questions all day.",
    avatar: "EO",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Director, ProRealty Nigeria",
    text: "Our lead qualification used to take hours. AutoFlow AI built a pipeline that filters, scores, and follows up with leads automatically. Game changer.",
    avatar: "FA",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            CLIENT RESULTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real businesses. Real results. Real automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-400 text-sm">{t.role}</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 text-yellow-400 text-sm">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
