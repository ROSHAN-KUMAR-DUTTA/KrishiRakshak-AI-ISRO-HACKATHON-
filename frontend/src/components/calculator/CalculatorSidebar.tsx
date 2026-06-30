"use client";
import { Droplet, Leaf, Sprout, Bug, IndianRupee, ChevronRight } from 'lucide-react';

export default function CalculatorSidebar() {
  const recents = [
    { title: "Irrigation", sub: "Field 7 - Rice\n22 Jun 2026", val: "25,350 L", icon: Droplet, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Fertilizer", sub: "Field 4 - Maize\n21 Jun 2026", val: "45 kg/ha", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Seed Rate", sub: "Field 2 - Cotton\n20 Jun 2026", val: "18 kg/ha", icon: Sprout, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Pesticide", sub: "Field 1 - Wheat\n19 Jun 2026", val: "240 ml/ha", icon: Bug, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Profit", sub: "Field 9 - Mustard\n18 Jun 2026", val: "₹ 18,750", icon: IndianRupee, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const actions = [
    { title: "Fertilizer\nCalculator", icon: Leaf, color: "text-emerald-600" },
    { title: "Seed Rate\nCalculator", icon: Sprout, color: "text-purple-600" },
    { title: "Pesticide\nCalculator", icon: Bug, color: "text-orange-600" },
    { title: "Profit\nCalculator", icon: IndianRupee, color: "text-amber-600" },
  ];

  return (
    <div className="space-y-6">
      
      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-slate-900 text-sm tracking-tight">Recent Calculations</h2>
          <span className="text-[11px] font-bold text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors">View All</span>
        </div>
        <div className="space-y-1">
          {recents.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 cursor-pointer group transition-all duration-200 border border-transparent hover:border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl ${r.bg} ${r.color} group-hover:scale-105 transition-transform`}><r.icon size={18} strokeWidth={2.5}/></div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-900">{r.title}</h4>
                  <p className="text-[10px] text-slate-500 whitespace-pre-line mt-0.5 font-medium leading-relaxed">{r.sub}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-[12px] font-black ${r.color}`}>{r.val}</span>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-600 transition-colors group-hover:translate-x-0.5" strokeWidth={3}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
        <h2 className="font-bold text-slate-900 text-sm mb-5 tracking-tight">Quick Insights</h2>
        <div className="space-y-5">
          {[
            { title: "Water Saving Tip", desc: "Drip irrigation can save up to 40-60% water compared to traditional methods.", icon: Droplet, color: "text-blue-600", bg: "bg-blue-50" },
            { title: "Best Time", desc: "Early morning irrigation reduces water loss due to evaporation.", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50" },
            { title: "Soil Moisture", desc: "Current soil moisture is optimal for irrigation.", icon: Sprout, color: "text-purple-600", bg: "bg-purple-50" }
          ].map((insight, i) => (
            <div key={i} className="flex gap-4 group">
              <div className={`p-2.5 h-fit ${insight.bg} ${insight.color} rounded-xl group-hover:scale-110 transition-transform`}><insight.icon size={18} strokeWidth={2.5}/></div>
              <div>
                <h4 className="text-[12px] font-bold text-slate-900 mb-0.5">{insight.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{insight.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
        <h2 className="font-bold text-slate-900 text-sm mb-5 tracking-tight">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          {actions.map((act, i) => (
            <div key={i} className="flex flex-col items-center justify-start text-center p-2 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer group transition-all">
              <div className={`p-3 bg-slate-50/80 rounded-xl border border-slate-100 ${act.color} mb-2.5 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all`}>
                <act.icon size={20} strokeWidth={2.5}/>
              </div>
              <span className="text-[10px] font-bold text-slate-600 whitespace-pre-line leading-tight group-hover:text-slate-900 transition-colors">{act.title}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}