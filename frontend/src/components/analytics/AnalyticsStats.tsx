"use client";
import React from 'react';
import { Leaf, HeartPulse, Map, Droplet, TrendingUp } from 'lucide-react';

const stats = [
  { title: "Total Fields", value: "24", trend: "↗ 3 new vs last month", icon: Leaf, bg: "bg-green-50", color: "text-green-600" },
  { title: "Avg. Field Health", value: "78%", trend: "↗ 8% vs last month", icon: HeartPulse, bg: "bg-green-50", color: "text-green-600" },
  { title: "Total Area", value: "48.6 ha", trend: "↗ 5.2 ha vs last month", icon: Map, bg: "bg-green-50", color: "text-green-600" },
  { title: "Water Saved (Est.)", value: "15,420 L", trend: "↗ 12% vs last month", icon: Droplet, bg: "bg-blue-50", color: "text-blue-500" },
  { title: "Productivity Index", value: "1.24", trend: "↗ 0.15 vs last month", icon: TrendingUp, bg: "bg-purple-50", color: "text-purple-600" },
];

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 animate-fade-in">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between group cursor-default"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-[13px] font-semibold text-slate-500 tracking-wide">{stat.title}</h3>
            <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-800 tracking-tight">{stat.value}</p>
            <p className="text-[13px] text-green-600 font-semibold mt-1.5 flex items-center gap-1">
              {stat.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}