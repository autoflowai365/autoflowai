export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          AutoFlow AI
        </h1>
        <nav className="hidden md:flex gap-8 text-slate-200">
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
