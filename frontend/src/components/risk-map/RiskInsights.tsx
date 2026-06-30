"use client";
import { Bug, Droplets, Leaf, Wind, ArrowRight } from 'lucide-react';

export default function RiskInsights() {
  const insights = [
    { icon: Bug, title: "Pest Risk", desc: "Armyworm in Field 1", badge: "High", color: "text-red-500", bg: "bg-red-50" },
    { icon: Leaf, title: "Disease Risk", desc: "BLB in Fields 3 & 9", badge: "High", color: "text-red-500", bg: "bg-red-50" },
    { icon: Droplets, title: "Drought", desc: "Deficit in Fields 2 & 6", badge: "Mod", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Wind, title: "Weather", desc: "Winds affecting Field 8", badge: "Low", color: "text-[#65a30d]", bg: "bg-green-50" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Risk Insights</h3>
        <button className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1 group">View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></button>
      </div>
      <div className="space-y-1">
        {insights.map((item, i) => (
          <div key={i} className="flex justify-between items-center p-3 -mx-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
            <div className="flex gap-3 items-center">
              <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}><item.icon size={18} strokeWidth={2.5} /></div>
              <div>
                <p className="font-bold text-sm text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${item.color} ${item.bg}`}>{item.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}