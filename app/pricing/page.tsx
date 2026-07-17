import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Pricing | AutoFlow AI",
  description: "Transparent, affordable AI automation pricing for businesses of all sizes. Starting from 150,000 NGN. No hidden fees.",
};

const plans = [
  {
    name: "Starter",
    naira: "₦150,000",
    usd: "$100",
    description: "Perfect for businesses automating their first workflow.",
    delivery: "5-7 business days",
    features: [
      "1 Custom Automation",
      "WhatsApp Bot OR Lead Capture OR Email Automation",
      "Up to 2 platform integrations",
      "Testing & deployment",
      "2 weeks post-launch support",
      "Video walkthrough included",
    ],
    notIncluded: ["CRM Integration","Multi-step workflows","Priority support"],
    highlight: false,
    badge: "",
    cta: "Get Started",
  },
  {
    name: "Growth",
    naira: "₦350,000",
    usd: "$230",
    description: "For growing businesses ready to automate multiple operations.",
    delivery: "7-14 business days",
    features: [
      "2-3 Custom Automations",
      "WhatsApp Bot + CRM + Email Sequences",
      "Up to 5 platform integrations",
      "Full CRM setup & pipeline",
      "Lead qualification system",
      "1 month post-launch support",
      "Training session included",
      "Priority WhatsApp support",
    ],
    notIncluded: ["Unlimited revisions","Dedicated account manager"],
    highlight: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "Business",
    naira: "₦750,000+",
    usd: "$500+",
    description: "Full automation ecosystem built around your entire business.",
    delivery: "14-30 business days",
    features: [
      "Unlimited Custom Automations",
      "Full business automation audit",
      "AI Agent + WhatsApp + CRM + Email",
      "Unlimited platform integrations",
      "Custom AI workflows & logic",
      "3 months post-launch support",
      "Dedicated account manager",
      "Monthly performance reports",
      "Priority support 7 days a week",
    ],
    notIncluded: [],
    highlight: false,
    badge: "Best Value",
    cta: "Book a Call",
  },
];

const realProjects = [
  {
    icon: "👕",
    industry: "Laundry Business",
    title: "WhatsApp AI Receptionist",
    description: "A fully automated WhatsApp assistant that handles customer enquiries, provides pricing, books pickups and sends order updates — 24/7 without any human involvement.",
    results: ["24/7 customer responses","Automated order tracking","Zero missed enquiries","Staff freed from WhatsApp"],
    package: "Starter",
    tools: ["WhatsApp","OpenAI","n8n","Airtable"],
  },
  {
    icon: "🏦",
    industry: "Asset Recovery Company",
    title: "Asset Recovery Workflow",
    description: "An intelligent workflow that automates the entire asset recovery pipeline — from lead intake and document collection to follow-up sequences and status updates.",
    results: ["Automated lead intake","Document collection workflow","Automated follow-up sequences","Real-time status tracking"],
    package: "Growth",
    tools: ["n8n","Airtable","Gmail","OpenAI"],
  },
];

const faqs = [
  { q: "Can I start with Starter and upgrade later?", a: "Absolutely. Many clients start with a single automation and expand as they see results. We make it easy to scale up." },
  { q: "Do you charge monthly fees?", a: "No. Our pricing is a one-time project fee. The only recurring costs are third-party tools you may use (most have free tiers)." },
  { q: "How do I pay?", a: "We accept bank transfers (NGN) and international payments via Wise or Payoneer (USD). A 50% deposit is required to start." },
  { q: "What if I need changes after launch?", a: "All packages include post-launch support. Minor tweaks are free. Major changes are quoted separately." },
  { q: "How long does it take?", a: "Starter projects typically take 5-7 days. Growth projects 7-14 days. Business projects 2-4 weeks depending on complexity." },
  { q: "Do you work with businesses outside Nigeria?", a: "Yes. We work with clients across Africa and internationally. All communication is remote via WhatsApp and email." },
];

export default function PricingPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <section className="px-4 md:px-6 pt-32 md:pt-40 pb-16 md:pb-24 text-center max-w-5xl mx-auto">
        <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold px-4 md:px-5 py-2 rounded-full mb-4 md:mb-6">TRANSPARENT PRICING</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
          Simple, Honest Pricing.<br />
          <span className="text-blue-500">No Hidden Fees.</span>
        </h1>
        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-4">
          Every automation is custom-built for your business. Choose a starting point below and we will tailor the solution to your exact needs.
        </p>
        <p className="text-slate-500 text-sm">Prices shown in NGN and USD. 50% deposit to start, 50% on delivery.</p>
      </section>

      <section className="px-4 md:px-6 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-3xl p-6 md:p-8 flex flex-col border transition-all duration-300 hover:-translate-y-2 ${plan.highlight ? "border-blue-500 bg-blue-600/10 shadow-[0_0_40px_rgba(37,99,235,0.3)]" : "border-slate-700 bg-slate-900/60 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"}`}>
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${plan.highlight ? "bg-blue-600 text-white" : "bg-slate-700 text-blue-400"}`}>{plan.badge}</div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.naira}</span>
                </div>
                <div className="text-blue-400 font-semibold text-lg mb-2">{plan.usd}</div>
                <div className="text-slate-500 text-xs">Delivery: {plan.delivery}</div>
              </div>
              <div className="flex-1 mb-6">
                <p className="text-slate-400 text-xs font-semibold uppercase mb-3">Included:</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                {plan.notIncluded.length > 0 && (
                  <>
                    <p className="text-slate-500 text-xs font-semibold uppercase mb-3">Not Included:</p>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="mt-0.5 flex-shrink-0">✗</span>{f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <Link href="https://calendly.com/autoflowai365/free-strategy-call" target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-full font-bold text-center transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base ${plan.highlight ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "border border-slate-600 hover:border-blue-500 hover:bg-blue-600/10 text-white"}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-8">Not sure which package is right for you? <Link href="https://calendly.com/autoflowai365/free-strategy-call" target="_blank" className="text-blue-400 hover:text-blue-300 underline">Book a free strategy call</Link> and we will recommend the best fit.</p>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">REAL CLIENT PROJECTS</span>
            <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">What We Have Built Recently</h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">Real automations built for real Nigerian businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {realProjects.map((project, i) => (
              <div key={i} className="bg-slate-900 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl">{project.icon}</div>
                  <div>
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{project.industry}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6">{project.description}</p>
                <div className="mb-4 md:mb-6">
                  <p className="text-green-400 text-xs font-semibold uppercase mb-3">Results:</p>
                  <ul className="space-y-2">
                    {project.results.map((r, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                        <span className="text-green-400">✓</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t, j) => (
                      <span key={j} className="bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <span className="text-slate-500 text-xs">{project.package} Package</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">Pricing FAQs</h2>
          <p className="text-slate-400 text-sm md:text-lg">Everything you need to know before getting started.</p>
        </div>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-5 md:p-6">
              <h3 className="text-white font-bold mb-2 text-sm md:text-base">{f.q}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl px-6 md:px-10 py-12 md:py-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">Not Sure Where To Start?</h2>
            <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto">Book a free 30-minute strategy call. We will analyse your business, recommend the right package and give you an exact quote — no obligation.</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="https://calendly.com/autoflowai365/free-strategy-call" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">Book Free Strategy Call</Link>
              <Link href="/#contact" className="border-2 border-white/50 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg hover:border-white hover:bg-white/10 transition-all duration-300">Send Us a Message</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
