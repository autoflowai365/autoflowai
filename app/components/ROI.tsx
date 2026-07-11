"use client";

import { useMemo, useState } from "react";

export default function ROI() {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(5000);

  const yearlySavings = useMemo(() => {
    return employees * hours * hourlyRate * 52;
  }, [employees, hours, hourlyRate]);

  const monthlySavings = Math.round(yearlySavings / 12);

  return (
    <section className="py-28 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-5 py-2 rounded-full bg-blue-600/20 text-blue-400 font-semibold">ROI CALCULATOR</span>
          <h2 className="text-5xl font-black text-white mt-6">See How Much Money Automation Can Save</h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">Move the sliders below to estimate how much your business could save every year with AI automation.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
            <div className="mb-10">
              <label className="text-white font-semibold block mb-3">Number of Employees</label>
              <input type="range" min="1" max="50" value={employees} onChange={(e)=>setEmployees(Number(e.target.value))} className="w-full" />
              <div className="text-blue-400 mt-2 font-bold">{employees} Employees</div>
            </div>
            <div className="mb-10">
              <label className="text-white font-semibold block mb-3">Hours Wasted Per Employee Weekly</label>
              <input type="range" min="1" max="40" value={hours} onChange={(e)=>setHours(Number(e.target.value))} className="w-full" />
              <div className="text-blue-400 mt-2 font-bold">{hours} Hours</div>
            </div>
            <div>
              <label className="text-white font-semibold block mb-3">Hourly Employee Cost (N)</label>
              <input type="range" min="1000" max="20000" step="500" value={hourlyRate} onChange={(e)=>setHourlyRate(Number(e.target.value))} className="w-full" />
              <div className="text-blue-400 mt-2 font-bold">N{hourlyRate.toLocaleString()}/hour</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-cyan-500 rounded-3xl p-10 flex flex-col justify-center">
            <div className="text-white/80 uppercase tracking-widest mb-4">Estimated Savings</div>
            <div className="text-6xl font-black text-white mb-6">N{yearlySavings.toLocaleString()}</div>
            <div className="text-white text-xl mb-8">Per Year</div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-white/80">Monthly Savings</span>
                <span className="font-bold text-white">N{monthlySavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Weekly Savings</span>
                <span className="font-bold text-white">N{Math.round(yearlySavings/52).toLocaleString()}</span>
              </div>
            </div>
            <button className="mt-10 bg-white text-blue-700 font-bold rounded-full py-4 hover:scale-105 transition">Book a Free Automation Strategy Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}
