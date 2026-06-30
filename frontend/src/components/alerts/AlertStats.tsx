"use client";
import { AlertTriangle, AlertCircle, AlertOctagon, Info, BellRing } from 'lucide-react';

export default function AlertStats() {
  const stats = [
    { title: "Critical Alerts", val: "2", sub: "Require immediate action", icon: AlertOctagon, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "High Priority", val: "4", sub: "Need attention soon", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Moderate Alerts", val: "6", sub: "Monitor regularly", icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Low Priority", val: "3", sub: "Informational", icon: Info, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Total Alerts", val: "15", sub: "Across all fields", icon: BellRing, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-5 rounded-[20px] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default group">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[12px] font-bold text-slate-500">{s.title}</span>
            <div className={`p-2 rounded-xl ${s.bg} ${s.color} border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
              <s.icon size={18} strokeWidth={2.5}/>
            </div>
          </div>
          <div className={`text-[32px] leading-none font-black ${s.color} tracking-tighter mb-1.5`}>{s.val}</div>
          <div className={`text-[10px] font-bold ${s.color} opacity-90`}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}