"use client";
import { FileText, Droplets, CloudSun, CloudRain } from 'lucide-react';

export default function AdvisoryStats() {
  const stats = [
    { 
      title: "Advisory for Today", value: "6 Fields", sub: "Active recommendations", 
      valueColor: "text-gray-900", subColor: "text-green-600", 
      icon: FileText, iconColor: "text-green-600",
      cardBg: "bg-[#f0fdf4]" // Light green bg
    },
    { 
      title: "Irrigation Needed", value: "3 Fields", sub: "Require irrigation", 
      valueColor: "text-gray-900", subColor: "text-blue-500", 
      icon: Droplets, iconColor: "text-blue-500",
      cardBg: "bg-[#eff6ff]" // Light blue bg
    },
    { 
      title: "Weather Outlook", value: "Partly Cloudy", sub: "28°C / 22°C", 
      valueColor: "text-orange-500", subColor: "text-gray-500", 
      icon: CloudSun, iconColor: "text-orange-500",
      cardBg: "bg-[#fff7ed]" // Light orange bg
    },
    { 
      title: "Next Rainfall", value: "3 Days", sub: "24 June 2026", 
      valueColor: "text-purple-700", subColor: "text-purple-700", 
      icon: CloudRain, iconColor: "text-purple-600",
      cardBg: "bg-[#faf5ff]" // Light purple bg
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className={`${s.cardBg} p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-[140px] hover:-translate-y-1 transition-transform duration-300 cursor-default`}>
          <div className="flex justify-between items-start">
            <p className="text-xs font-semibold text-gray-500 mt-1">{s.title}</p>
            <div className={`p-0 bg-transparent`}>
              <s.icon size={22} className={s.iconColor} strokeWidth={2} />
            </div>
          </div>
          <div>
            <h3 className={`text-2xl font-black tracking-tight ${s.valueColor}`}>{s.value}</h3>
            <p className={`text-[11px] font-bold mt-1 ${s.subColor}`}>{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}