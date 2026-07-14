"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build an automation?",
    answer: "Most projects are completed within 5-14 days depending on complexity.",
  },
  {
    question: "Can AI work with my existing business tools?",
    answer: "Yes. We integrate with WhatsApp, Google Workspace, Airtable, CRMs, payment gateways, and hundreds of other platforms.",
  },
  {
    question: "Will I need technical knowledge?",
    answer: "Not at all. We build, test, deploy, and show your team how everything works.",
  },
  {
    question: "How much can automation save my business?",
    answer: "Every business is different, but many clients save hundreds of hours and millions of naira every year. Use our ROI Calculator to estimate your savings.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We monitor, improve, and maintain your automations so they continue running smoothly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-28 bg-[#07111F]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="uppercase tracking-widest text-blue-400 text-xs md:text-sm">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">Everything You Need To Know</h2>
          <p className="text-gray-400 text-sm md:text-base">Answers to the questions we hear most from business owners.</p>
        </div>
        <div className="space-y-3 md:space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-blue-900 bg-[#0C1628] overflow-hidden">
              <button onClick={() => setOpen(open === index ? null : index)} className="w-full flex justify-between items-center p-4 md:p-6 text-left gap-4">
                <span className="font-semibold text-sm md:text-lg">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 ${open === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-7 md:leading-8 text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
