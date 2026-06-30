"use client";
import { ShieldCheck, AlertTriangle, Leaf, Map } from 'lucide-react';

export default function StatsHeader() {
  const stats = [
    { title: "Overall Risk Level", value: "Moderate", sub: "↗ 8% vs last week", valueColor: "text-orange-500", subColor: "text-orange-500", icon: ShieldCheck, iconBg: "bg-orange-50 text-orange-500" },
    { title: "High Risk Areas", value: "2", sub: "Fields 1 & 3", valueColor: "text-gray-900", subColor: "text-red-500", icon: AlertTriangle, iconBg: "bg-red-50 text-red-500" },
    { title: "Affected Fields", value: "6", sub: "Requiring attention", valueColor: "text-gray-900", subColor: "text-orange-500", icon: Leaf, iconBg: "bg-orange-50 text-orange-500" },
    { title: "Monitored Area", value: "48.6 ha", sub: "100% of your farm", valueColor: "text-gray-900", subColor: "text-[#65a30d]", icon: Map, iconBg: "bg-green-50 text-[#65a30d]" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-default">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-gray-500">{s.title}</p>
            <div className={`p-2.5 rounded-xl ${s.iconBg} ring-4 ring-white shadow-sm`}>
              <s.icon size={20} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className={`text-3xl font-black tracking-tight ${s.valueColor}`}>{s.value}</h3>
            <p className={`text-xs font-bold mt-2 ${s.subColor}`}>{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}