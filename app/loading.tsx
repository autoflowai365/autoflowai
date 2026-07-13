export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-black text-blue-500 mb-2">AutoFlow AI</h2>
          <p className="text-slate-400 text-sm">Loading your automation dashboard...</p>
        </div>
      </div>
    </div>
  );
}
