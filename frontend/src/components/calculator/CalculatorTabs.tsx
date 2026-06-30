"use client";
import { Droplet, Leaf, Sprout, Bug, IndianRupee } from 'lucide-react';

export default function CalculatorTabs() {
  const tabs = [
    { title: "Irrigation Calculator", sub: "Water requirement for crops", icon: Droplet, color: "text-blue-600", bg: "bg-blue-50", activeBg: "bg-blue-100", border: "border-blue-500 ring-4 ring-blue-50", active: true },
    { title: "Fertilizer Calculator", sub: "Fertilizer recommendation", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50", activeBg: "bg-emerald-100", border: "border-transparent hover:border-emerald-200", active: false },
    { title: "Seed Rate Calculator", sub: "Calculate seed quantity", icon: Sprout, color: "text-purple-600", bg: "bg-purple-50", activeBg: "bg-purple-100", border: "border-transparent hover:border-purple-200", active: false },
    { title: "Pesticide Calculator", sub: "Pesticide dosage guide", icon: Bug, color: "text-orange-600", bg: "bg-orange-50", activeBg: "bg-orange-100", border: "border-transparent hover:border-orange-200", active: false },
    { title: "Profit Calculator", sub: "Estimate profit & returns", icon: IndianRupee, color: "text-amber-600", bg: "bg-amber-50", activeBg: "bg-amber-100", border: "border-transparent hover:border-amber-200", active: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {tabs.map((t, i) => (
        <div key={i} className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-300 ease-out cursor-pointer ${t.active ? `bg-white shadow-sm ${t.border}` : `bg-white border-slate-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 ${t.border}`}`}>
          <div className={`p-2.5 rounded-xl ${t.color} ${t.active ? t.activeBg : t.bg} ${t.active ? 'scale-105' : ''} transition-transform`}>
            <t.icon size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className={`text-[13px] font-bold ${t.active ? 'text-slate-900' : 'text-slate-700'}`}>{t.title}</h3>
            <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{t.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}