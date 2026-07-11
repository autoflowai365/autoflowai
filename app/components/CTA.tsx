"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 opacity-95" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl -top-40 -left-20" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-300/10 blur-3xl bottom-0 right-0" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm tracking-widest uppercase">Free Strategy Call</span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight">Ready To Save<br />Hundreds Of Hours<br />Every Month?</h2>
            <p className="mt-8 text-xl text-blue-100 leading-9">Discover how AI automation can eliminate repetitive work, increase revenue, reduce operating costs, and give your team more time to focus on growth.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">What You Will Get</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4"><CheckCircle className="text-green-300" /><span>30-minute AI strategy session</span></div>
              <div className="flex items-center gap-4"><CheckCircle className="text-green-300" /><span>Business automation roadmap</span></div>
              <div className="flex items-center gap-4"><CheckCircle className="text-green-300" /><span>ROI estimate for your company</span></div>
              <div className="flex items-center gap-4"><CheckCircle className="text-green-300" /><span>No obligation. Completely free.</span></div>
            </div>
            <button className="mt-10 w-full rounded-xl bg-white text-blue-700 font-bold py-5 hover:scale-105 transition flex items-center justify-center gap-3">
              Book Free Strategy Call
              <ArrowRight size={20} />
            </button>
            <button className="mt-5 w-full rounded-xl border border-white/40 py-5 hover:bg-white/10 transition">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
