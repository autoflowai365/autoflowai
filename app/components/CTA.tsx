export default function CTA() {
  return (
    <section className="px-6 py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl px-10 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Ready to Automate Your Business?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          In a free 30-minute strategy session, we&apos;ll identify the biggest automation opportunities in your business and show you practical ways AI can save time, reduce costs, and improve productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@autoflowai.com" className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Book Your Free Call
          </a>
          <a href="mailto:hello@autoflowai.com" className="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full text-lg hover:border-white hover:bg-white/10 transition-all duration-300">
            Send Us a Message
          </a>
        </div>
        <div className="mt-10 text-blue-100 text-sm">
          ✓ Free consultation &nbsp;•&nbsp; ✓ No obligation &nbsp;•&nbsp; ✓ Custom automation strategy
        </div>
      </div>
    </section>
  );
}
