"use client";
import { Droplet, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function CalculationResults() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-slate-900 text-sm tracking-tight">Calculation Results</h2>
        <p className="text-[11px] text-slate-500 mt-1 mb-6 font-medium">Based on current conditions and crop data</p>

        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] border border-blue-100/50 rounded-2xl p-6 relative overflow-hidden mb-5 group shadow-inner">
          <Droplet size={100} className="absolute -right-6 -bottom-6 text-blue-200/40 group-hover:scale-110 transition-transform duration-700 ease-out" fill="currentColor" />
          <div className="relative z-10">
            <h4 className="text-[11px] font-bold text-blue-700 mb-1.5 tracking-wide">Total Water Requirement</h4>
            <h1 className="text-4xl font-black text-blue-600 tracking-tighter mb-1.5 drop-shadow-sm">25,350 L</h1>
            <p className="text-[11px] text-blue-500 font-bold">25.35 m³ for next 7 days</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Daily Requirement", val: "3,621 L", sub: "per day", icon: Droplet },
            { label: "Per Hectare", val: "10,140 L", sub: "per ha", icon: null },
            { label: "Irrigation Events", val: "2", sub: "in next 7 days", icon: Calendar },
            { label: "Duration per Event", val: "2.5 hours", sub: "each time", icon: Clock },
          ].map((s, i) => (
            <div key={i} className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all cursor-default">
              <p className="text-[10px] text-slate-500 font-bold mb-1.5">{s.label}</p>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">{s.val}</h3>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">{s.sub}</p>
                </div>
                {s.icon && <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg"><s.icon size={14} strokeWidth={2.5}/></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-[#f0fdf4] border border-emerald-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
        <div className="text-emerald-600 bg-white p-2 rounded-xl shadow-sm border border-emerald-50"><CheckCircle2 size={20} strokeWidth={2.5}/></div>
        <div>
          <h4 className="text-[11px] font-bold text-slate-600">Recommended Next Irrigation</h4>
          <p className="text-[13px] font-bold text-emerald-700 mt-0.5 tracking-tight">Tomorrow, 1 July 2026</p>
        </div>
      </div>
    </div>
  );
}