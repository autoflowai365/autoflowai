export default function CaseStudiesPage() {

  const caseStudies = [
    {
      industry: "Real Estate Agency",
      icon: "🏢",
      problem: ["Lost leads", "Slow response times", "Manual CRM updates"],
      solution: ["AI Lead Qualification", "Automated CRM", "WhatsApp Follow-up", "Email Sequences"],
      results: ["300+ Leads Automated", "30 Second Response Time", "60% Faster Follow-up"],
      tools: ["OpenAI", "n8n", "HubSpot", "WhatsApp"],
    },
    {
      industry: "E-commerce Store",
      icon: "🛍️",
      problem: ["Customer support overload", "Order status questions", "Refund request backlog"],
      solution: ["AI Support Chatbot", "Order Tracking Automation", "FAQ Automation"],
      results: ["70% Fewer Support Tickets", "24/7 Customer Support", "Faster Checkout"],
      tools: ["OpenAI", "Zapier", "Airtable", "Gmail"],
    },
    {
      industry: "Medical Clinic",
      icon: "🏥",
      problem: ["Missed appointments", "Long phone queues", "Manual reminder calls"],
      solution: ["AI Appointment Booking", "WhatsApp Reminders", "Calendar Sync"],
      results: ["40% Fewer No-shows", "12 Hours Saved Weekly", "Automated Reminders"],
      tools: ["n8n", "WhatsApp", "Google Calendar", "Airtable"],
    },
    {
      industry: "Law Firm",
      icon: "⚖️",
      problem: ["High volume enquiries", "Manual consultation booking", "Slow document collection"],
      solution: ["AI Intake Assistant", "Automated Scheduling", "CRM Integration"],
      results: ["Faster Client Onboarding", "Better Client Experience", "Zero Missed Enquiries"],
      tools: ["OpenAI", "n8n", "HubSpot", "Google Workspace"],
    },
    {
      industry: "School / Academy",
      icon: "🎓",
      problem: ["Admission enquiry overload", "Parent communication gaps", "Manual fee reminders"],
      solution: ["AI Admissions Assistant", "WhatsApp Parent Updates", "Fee Reminders"],
      results: ["Admissions Handled Automatically", "Reduced Admin Workload", "Happier Parents"],
      tools: ["OpenAI", "WhatsApp", "Gmail", "Google Sheets"],
    },
  ];

  const metrics = [
    { before: "6 Hours", after: "30 Seconds", label: "Lead Response Time" },
    { before: "Manual", after: "Automatic", label: "Appointment Booking" },
    { before: "Business Hours", after: "24/7", label: "Customer Support" },
    { before: "Days", after: "Minutes", label: "Lead Follow-up" },
  ];

  const industries = [
    { icon: "🏢", name: "Real Estate" },
    { icon: "🍽️", name: "Restaurants" },
    { icon: "🏨", name: "Hotels" },
    { icon: "🏥", name: "Medical" },
    { icon: "💇", name: "Salons & Spas" },
    { icon: "🎓", name: "Schools" },
    { icon: "⚖️", name: "Law Firms" },
    { icon: "🚚", name: "Logistics" },
    { icon: "🏗️", name: "Construction" },
    { icon: "⛪", name: "Churches" },
    { icon: "🤝", name: "NGOs" },
    { icon: "💰", name: "Finance" },
    { icon: "🛍️", name: "Retail" },
    { icon: "🏭", name: "Manufacturing" },
    { icon: "💼", name: "Professional Services" },
    { icon: "📦", name: "E-commerce" },
  ];

  const workflow = [
    { icon: "👤", label: "Customer" },
    { icon: "💬", label: "WhatsApp" },
    { icon: "🤖", label: "AI Agent" },
    { icon: "📊", label: "CRM" },
    { icon: "📅", label: "Calendar" },
    { icon: "📧", label: "Email" },
    { icon: "🏢", label: "Business Owner" },
  ];

  const stats = [
    { number: "500+", label: "Hours Saved" },
    { number: "35%", label: "Higher Productivity" },
    { number: "70%", label: "Support Cost Reduction" },
    { number: "24/7", label: "AI Availability" },
  ];

  const trustLogos = ["WhatsApp", "OpenAI", "Google Calendar", "Stripe", "Notion", "Slack", "Gmail"];

  return (
    <main className="animated-gradient grid-overlay min-h-screen text-white">

      {/* Hero */}
      <section className="px-6 pt-40 pb-20 text-center max-w-7xl mx-auto">
        <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold px-5 py-2 rounded-full mb-6">
          CASE STUDIES
        </span>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Real Automation.<br />
          <span className="text-blue-500">Real Business Results.</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
          Explore how intelligent automation transforms everyday business operations, saves thousands of hours, reduces costs, and creates better customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="mailto:autoflowai365@gmail.com" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)] px-8 py-4 rounded-full font-bold transition-all duration-300">
            Book Strategy Call
          </a>
          <a href="/services" className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 hover:scale-105 px-8 py-4 rounded-full transition-all duration-300">
            View Services
          </a>
        </div>

        {/* Trust Logos */}
        <div className="border-t border-slate-800 pt-10">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-6">Works With</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustLogos.map((logo, i) => (
              <span key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 text-slate-400 text-sm font-semibold px-5 py-2 rounded-full">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            FEATURED SUCCESS STORY
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            How A Salon Saved<br />
            <span className="text-blue-500">8 Hours Every Week</span><br />
            Using AI
          </h2>
          <p className="text-slate-400 text-lg">Complete WhatsApp automation, booking system and CRM — built in under 2 weeks.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-10">
            <h3 className="text-red-400 font-bold text-sm mb-6 uppercase tracking-wider">The Problem</h3>
            <ul className="space-y-4">
              {["Missed appointments costing revenue", "Double bookings causing chaos", "Staff spending hours on WhatsApp", "No automated reminders"].map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-base">
                  <span className="text-red-400 text-lg">✗</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-10">
            <h3 className="text-green-400 font-bold text-sm mb-6 uppercase tracking-wider">The Solution</h3>
            <ul className="space-y-4">
              {["WhatsApp AI Assistant", "Automated Appointment Booking", "Google Calendar Sync", "Automatic Reminders", "Customer CRM"].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-base">
                  <span className="text-green-400 text-lg">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "35%", label: "More Bookings" },
            { number: "8hrs", label: "Saved Weekly" },
            { number: "0", label: "Double Bookings" },
            { number: "24/7", label: "AI Responses" },
          ].map((r, i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">{r.number}</div>
              <div className="text-slate-400 text-sm">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="px-6 py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">How The Automation Flows</h2>
          <p className="text-slate-400 mb-12">Every touchpoint connected — no manual work required.</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {workflow.map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-slate-800/60 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 rounded-xl px-6 py-4 text-center min-w-[90px]">
                  <div className="text-3xl mb-2">{w.icon}</div>
                  <div className="text-xs text-slate-300 font-semibold">{w.label}</div>
                </div>
                {i < workflow.length - 1 && (
                  <span className="text-blue-500 font-bold text-2xl animate-pulse">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Before vs After Automation</h2>
          <p className="text-slate-400 text-lg">The difference intelligent automation makes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8 text-center">
              <p className="text-slate-500 text-xs font-semibold uppercase mb-3">Before</p>
              <p className="text-red-400 font-black text-2xl mb-5">{m.before}</p>
              <div className="text-blue-500 text-3xl mb-5 animate-bounce">↓</div>
              <p className="text-slate-500 text-xs font-semibold uppercase mb-3">After</p>
              <p className="text-green-400 font-black text-2xl mb-4">{m.after}</p>
              <p className="text-slate-400 text-xs border-t border-slate-700 pt-4 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Case Studies */}
      <section className="px-6 py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold px-5 py-2 rounded-full mb-4">
              EXAMPLE AUTOMATION SCENARIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">More Success Stories</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Representative solutions showing what AutoFlowAI can build for your industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-2xl p-8">
                <div className="text-4xl mb-4">{cs.icon}</div>
                <h3 className="text-xl font-bold text-white mb-5">{cs.industry}</h3>
                <div className="mb-5">
                  <p className="text-red-400 text-xs font-semibold uppercase mb-3">Problems Solved</p>
                  <ul className="space-y-2">
                    {cs.problem.map((p, j) => (
                      <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="text-red-400">✗</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-green-400 text-xs font-semibold uppercase mb-3">Results</p>
                  <ul className="space-y-2">
                    {cs.results.map((r, j) => (
                      <li key={j} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="text-green-400">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
                  {cs.tools.map((t, j) => (
                    <span key={j} className="bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Industries We Serve</h2>
          <p className="text-slate-400 text-lg">If your business has repetitive tasks, we can automate them.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-xl px-4 py-7 text-center">
              <div className="text-4xl mb-3">{ind.icon}</div>
              <div className="text-sm font-semibold text-slate-300">{ind.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Client Results At A Glance</h2>
            <p className="text-blue-100 text-lg">Representative metrics from automation scenarios we build.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-7xl font-black text-white mb-3">{s.number}</div>
                <div className="text-blue-100 text-base font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-12">
          <div className="text-5xl text-blue-500 mb-6">"</div>
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
            AutoFlow AI reduced our admin work by over 80%. We now respond to customers instantly and our bookings have never been higher.
          </p>
          <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
          <p className="text-slate-400 font-semibold">Sarah O. — Salon Owner</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
        <div className="max-w-5xl mx-auto text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Want Your Business To Be<br />Our Next Success Story?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Stop wasting time on repetitive tasks. Let us design an automation system tailored specifically to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <div className="text-blue-100 text-sm">✓ Free 30-minute strategy session</div>
              <div className="text-blue-100 text-sm">✓ No obligation</div>
              <div className="text-blue-100 text-sm">✓ Personalized automation roadmap</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:autoflowai365@gmail.com" className="bg-white text-blue-700 font-bold px-12 py-5 rounded-full text-lg hover:bg-blue-50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Book My Free Strategy Call
              </a>
              <a href="mailto:autoflowai365@gmail.com" className="border-2 border-white/50 text-white font-bold px-12 py-5 rounded-full text-lg hover:border-white hover:bg-white/10 transition-all duration-300">
                Calculate My Savings
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
