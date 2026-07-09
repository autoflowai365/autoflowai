const services = [
  { icon: "🤖", title: "AI Chatbots & Assistants", desc: "24/7 AI receptionists and customer service bots for WhatsApp, websites, and more." },
  { icon: "📅", title: "Booking & Scheduling", desc: "Automated appointment booking, reminders, and calendar management — zero manual work." },
  { icon: "📊", title: "Lead Generation & CRM", desc: "Capture, qualify, and follow up with leads automatically using smart AI pipelines." },
  { icon: "📧", title: "Email & Marketing Flows", desc: "Automated email sequences, newsletters, and campaigns that convert while you sleep." },
  { icon: "🔗", title: "System Integrations", desc: "Connect your tools — Airtable, Google Sheets, Slack, and more — into one smooth workflow." },
  { icon: "📈", title: "Reporting & Analytics", desc: "Automatic reports delivered to your inbox so you always know how your business is performing." },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What We Automate</h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          We build custom AI workflows tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
