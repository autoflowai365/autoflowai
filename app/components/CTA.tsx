"use client";
import { CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 opacity-95" />
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-white/10 blur-3xl -top-40 -left-20" />
      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-cyan-300/10 blur-3xl bottom-0 right-0" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase">Free Strategy Call</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-8 leading-tight">Ready To Save<br />Hundreds Of Hours<br />Every Month?</h2>
            <p className="mt-4 md:mt-8 text-base md:text-xl text-blue-100 leading-7 md:leading-9">Discover how AI automation can eliminate repetitive work, increase revenue, reduce operating costs, and give your team more time to focus on growth.</p>
            <div className="mt-6 md:mt-10 space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4"><CheckCircle className="text-green-300 w-5 h-5 flex-shrink-0" /><span className="text-sm md:text-base">30-minute AI strategy session</span></div>
              <div className="flex items-center gap-3 md:gap-4"><CheckCircle className="text-green-300 w-5 h-5 flex-shrink-0" /><span className="text-sm md:text-base">Business automation roadmap</span></div>
              <div className="flex items-center gap-3 md:gap-4"><CheckCircle className="text-green-300 w-5 h-5 flex-shrink-0" /><span className="text-sm md:text-base">ROI estimate for your company</span></div>
              <div className="flex items-center gap-3 md:gap-4"><CheckCircle className="text-green-300 w-5 h-5 flex-shrink-0" /><span className="text-sm md:text-base">No obligation. Completely free.</span></div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
