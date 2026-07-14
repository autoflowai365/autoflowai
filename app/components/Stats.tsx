"use client";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { start = end; clearInterval(timer); }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
}

const stats = [
  { number: "500+", label: "Hours Automated" },
  { number: "1000+", label: "Tasks Automated" },
  { number: "24/7", label: "AI Systems Running" },
  { number: "99%", label: "Automation Uptime" },
];

export default function Stats() {
  return (
    <section className="px-4 md:px-6 py-14 md:py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2">
                {stat.number === "500+" && <Counter end={500} suffix="+" />}
                {stat.number === "1000+" && <Counter end={1000} suffix="+" />}
                {stat.number === "99%" && <Counter end={99} suffix="%" />}
                {stat.number === "24/7" && "24/7"}
              </span>
              <span className="text-blue-100 text-xs md:text-sm font-medium uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
