"use client";
import { useMemo, useState, useEffect } from "react";

function useCountUp(target: number, duration = 800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const steps = 40;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else { setValue(Math.round(start)); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

export default function ROI() {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(5000);

  const yearlySavings = useMemo(() => employees * hours * hourlyRate * 52, [employees, hours, hourlyRate]);
  const monthlySavings = Math.round(yearlySavings / 12);
  const weeklySavings = Math.round(yearlySavings / 52);
  const fullTimeEquivalent = Math.round(yearlySavings / (hourlyRate * 40 * 52));
  const hoursSaved = employees * hours * 52;

  const animatedYearly = useCountUp(yearlySavings);
  const animatedMonthly = useCountUp(monthlySavings);
  const animatedWeekly = useCountUp(weeklySavings);

  return (
    <section className="py-16 md:py-28 bg-slate-950 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 md:mb-16">
          <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-semibold text-xs md:text-sm">ROI CALCULATOR</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 md:mt-6">See How Much Money Automation Can Save</h2>
          <p className="text-slate-400 mt-3 md:mt-5 max-w-3xl mx-auto text-sm md:text-lg">Move the sliders below to estimate how much your business could save every year with AI automation.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-14">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10">
            <div className="mb-6 md:mb-10">
              <label className="text-white font-semibold block mb-2 md:mb-3 text-sm md:text-base">Number of Employees</label>
              <input type="range" min="1" max="50" value={employees} onChange={(e)=>setEmployees(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer" />
              <div className="text-blue-400 mt-2 font-bold text-sm md:text-base">{employees} Employees</div>
            </div>
            <div className="mb-6 md:mb-10">
              <label className="text-white font-semibold block mb-2 md:mb-3 text-sm md:text-base">Hours Wasted Per Employee Weekly</label>
              <input type="range" min="1" max="40" value={hours} onChange={(e)=>setHours(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer" />
              <div className="text-blue-400 mt-2 font-bold text-sm md:text-base">{hours} Hours</div>
            </div>
            <div>
              <label className="text-white font-semibold block mb-2 md:mb-3 text-sm md:text-base">Hourly Employee Cost (N)</label>
              <input type="range" min="1000" max="20000" step="500" value={hourlyRate} onChange={(e)=>setHourlyRate(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer" />
              <div className="text-blue-400 mt-2 font-bold text-sm md:text-base">N{hourlyRate.toLocaleString()}/hour</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-cyan-500 rounded-3xl p-6 md:p-10 flex flex-col justify-center shadow-[0_0_60px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-all duration-300">
            <div className="text-white/80 uppercase tracking-widest mb-2 md:mb-4 text-xs md:text-sm">Estimated Savings</div>
            <div className="text-4xl md:text-6xl font-black text-white mb-2">N{animatedYearly.toLocaleString()}</div>
            <div className="text-white text-base md:text-xl mb-4 md:mb-6">Per Year</div>
            <div className="bg-white/10 rounded-2xl p-4 md:p-5 mb-4 md:mb-6">
              <p className="text-white/80 font-semibold mb-2 md:mb-3 text-sm md:text-base">Equivalent to:</p>
              <ul className="space-y-1 md:space-y-2 text-white text-sm md:text-base">
                <li>✓ {fullTimeEquivalent > 0 ? fullTimeEquivalent : 1} Full-Time Employee{fullTimeEquivalent > 1 ? "s" : ""} Salary</li>
                <li>✓ {hoursSaved.toLocaleString()} Hours Saved Every Year</li>
                <li>✓ ROI achieved within weeks</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex justify-between mb-3 md:mb-4">
                <span className="text-white/80 text-sm md:text-base">Monthly Savings</span>
                <span className="font-bold text-white text-sm md:text-base">N{animatedMonthly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80 text-sm md:text-base">Weekly Savings</span>
                <span className="font-bold text-white text-sm md:text-base">N{animatedWeekly.toLocaleString()}</span>
              </div>
            </div>
            <button className="bg-slate-950 text-white hover:bg-slate-900 font-bold rounded-full py-3 md:py-4 transition duration-300 shadow-lg text-sm md:text-base">
              See How We Can Save Your Business Millions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
