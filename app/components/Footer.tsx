export default function Footer() {
  return (
    <footer className="px-6 py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-white mb-4">AutoFlowAI</div><p className="text-blue-400 text-sm font-medium mb-4">Intelligent AI Automation for Modern Businesses</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We build intelligent automation systems that eliminate repetitive work and help businesses grow faster, smarter, and more profitably.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-all duration-300">AI Agents</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-all duration-300">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-all duration-300">AI Customer Support</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-all duration-300">Email Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-all duration-300">How It Works</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-all duration-300">Contact Us</a></li>
              <li><a href="mailto:hello@autoflowai.com" className="hover:text-blue-400 transition-all duration-300">autoflowai365@gmail.com</a></li><li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300">LinkedIn</a></li><li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 AutoFlowAI. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Designed to help businesses work smarter with AI.</p>
        </div>
      </div>
    </footer>
  );
}
