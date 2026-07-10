export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight text-white">AutoFlow<span className="text-blue-500">AI</span></h1>
        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <a href="#services" className="hover:text-blue-400 transition-all duration-300">Services</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-all duration-300">How It Works</a>
          <a href="#contact" className="hover:text-blue-400 transition-all duration-300">Contact</a>
        </nav>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-white text-sm">
          Get Started
        </a>
      </div>
    </header>
  );
}
