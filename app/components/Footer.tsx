export default function Footer() {
  return (
    <footer className="px-4 md:px-6 py-12 md:py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl md:text-2xl font-black text-blue-400 mb-3 md:mb-4">AutoFlow AI</div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We build intelligent automation systems that eliminate repetitive work and help businesses grow faster, smarter, and more profitably.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition">AI Agents</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">AI Customer Support</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Email Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="https://calendly.com/autoflowai365/free-strategy-call" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">autoflowai365@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">2025 AutoFlow AI. All rights reserved.</p>
          <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">Built with AI. Powered by Automation.</p>
        </div>
      </div>
    </footer>
  );
}
