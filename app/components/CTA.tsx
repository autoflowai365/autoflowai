export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl px-10 py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 pointer-events-none" />
          <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            FREE STRATEGY CALL
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call and we will show you exactly how automation can save you time and grow your revenue — no technical knowledge needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@autoflowai.com" className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-50 transition">
              Book Your Free Call
            </a>
            <a href="mailto:hello@autoflowai.com" className="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full text-lg hover:border-white transition">
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
