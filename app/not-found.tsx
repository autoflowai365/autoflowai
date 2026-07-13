import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-black text-blue-500 mb-4">404</div>
        <div className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          WORKFLOW NOT FOUND
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Looks Like This Workflow Does Not Exist.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          The page you are looking for may have been moved, deleted, or never existed. Let us get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/40">
            Return Home
          </Link>
          <Link href="/#contact" className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-full transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
