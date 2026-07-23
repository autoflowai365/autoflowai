export const metadata = { title: "AI Automation Services | AutoFlow AI", description: "Explore our AI automation services." };

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const services = [
  { icon: "🤖", title: "AI Agents", description: "Deploy intelligent AI assistants that answer questions, qualify leads, schedule appointments and perform repetitive business tasks 24/7.", features: ["Customer Support","Lead Qualification","Appointment Booking","Internal AI Assistant"] },
  { icon: "⚙️", title: "Workflow Automation", description: "Replace manual work with automated workflows connecting all your business tools together.", features: ["Forms","CRM","Email","Notifications","Data Sync"] },
  { icon: "💬", title: "WhatsApp Automation", description: "Automatically respond to customers, follow up with leads, send reminders and close more sales.", features: ["Auto Replies","Broadcast","Lead Follow-up","Appointment Reminders"] },
  { icon: "📊", title: "CRM Automation", description: "Never lose another lead. Every customer automatically moves through your sales pipeline.", features: ["Lead Tracking","Pipeline Updates","Task Creation","Reports"] },
  { icon: "🎧", title: "AI Customer Support", description: "AI handles repetitive customer enquiries while your team focuses on higher-value conversations.", features: ["FAQ","Live Chat","Email","Ticket Routing"] },
  { icon: "🔗", title: "API Integrations", description: "Connect every tool your business uses into one seamless automated ecosystem.", features: ["Google","Airtable","Slack","HubSpot","Stripe","Calendars"] },
];

const steps = [
  { step: "01", title: "Discovery", desc: "We learn your business, identify bottlenecks and find automation opportunities.", icon: "🔍" },
  { step: "02", title: "Workflow Design", desc: "We map out exactly how your automation will work before writing a single line.", icon: "🗺️" },
  { step: "03", title: "Build", desc: "We build your automation system using the best tools for your use case.", icon: "🏗️" },
  { step: "04", title: "Testing", desc: "Every workflow is tested thoroughly before going anywhere near your business.", icon: "✅" },
  { step: "05", title: "Deployment", desc: "We go live, monitor everything and make sure it runs perfectly.", icon: "🚀" },
  { step: "06", title: "Support", desc: "We stay with you — maintaining, updating and optimising your systems.", icon: "🛡️" },
];

const tools = ["OpenAI","Claude","n8n","Make","Zapier","Google Workspace","WhatsApp","HubSpot","Slack","Notion","Airtable","Stripe","Calendly","Gmail","Google Sheets","Webhooks"];

const faqs = [
  { q: "How long does an automation project take?", a: "Most projects are completed within 1-3 weeks depending on complexity." },
  { q: "Can you work with my existing software?", a: "Yes. We integrate with hundreds of platforms using APIs and automation tools." },
  { q: "Do I need technical knowledge?", a: "No. We build, test, deploy and support everything for you." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer maintenance, updates and optimisation after launch." },
  { q: "Can AI replace my staff?", a: "No. Our goal is to remove repetitive work so your team can focus on higher-value tasks." },
  { q: "How much does it cost?", a: "Every project is different. We will recommend the most cost-effective solution during your strategy call." },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <section className="px-4 md:px-6 pt-32 md:pt-40 pb-16 md:pb-24 text-center max-w-5xl mx-auto">
        <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold px-4 md:px-5 py-2 rounded-full mb-4 md:mb-6">OUR SERVICES</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
          AI Automation Services<br />
          <span className="text-blue-500">Built To Save Time,</span><br />
          Reduce Costs &amp;<br />
          Scale Your Business
        </h1>
        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">We design intelligent AI systems that eliminate repetitive work, automate customer communication, streamline operations, and help businesses grow faster.</p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="/#contact" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 text-sm md:text-base">Book Strategy Call</a>
          <a href="/case-studies" className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base">See Case Studies</a>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">What We Build For You</h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">Every service is designed around one goal - saving your business time and money.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{s.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{s.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, j) => (<span key={j} className="bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs px-2 md:px-3 py-1 rounded-full">{f}</span>))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">Our Automation Process</h2>
            <p className="text-slate-400 text-sm md:text-lg">A structured approach that delivers results every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {steps.map((p, i) => (
              <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 md:p-8">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{p.icon}</div>
                <div className="text-blue-500 font-black text-xs md:text-sm mb-1 md:mb-2">{p.step}</div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">Technology Stack</h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">We choose the best tools for your business rather than forcing a one-size-fits-all solution.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 rounded-xl px-4 md:px-6 py-3 md:py-4 text-center text-xs md:text-sm font-semibold text-slate-300 hover:text-white">
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 bg-slate-900/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm md:text-lg">Everything you need to know before getting started.</p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-5 md:p-6">
                <h3 className="text-white font-bold mb-2 text-sm md:text-base">{f.q}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl px-6 md:px-10 py-12 md:py-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">Let Us Build Your First Automation</h2>
            <p className="text-blue-100 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">Book a free strategy session and discover how much time and money your business could save with intelligent automation.</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">Book Free Strategy Call</a>
              <a href="/#contact" className="border-2 border-white/50 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg hover:border-white hover:bg-white/10 transition-all duration-300">Calculate Your Savings</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}





