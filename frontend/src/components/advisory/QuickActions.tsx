"use client";
import { Droplet, Leaf, Bug } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { title: "Irrigation", sub: "Schedule", icon: Droplet, color: "text-blue-500", border: "hover:border-blue-500", bg: "hover:bg-blue-50" },
    { title: "Fertilizer", sub: "Calculator", icon: Leaf, color: "text-green-600", border: "hover:border-green-500", bg: "hover:bg-green-50" },
    { title: "Pest", sub: "Identifier", icon: Bug, color: "text-red-500", border: "hover:border-red-500", bg: "hover:bg-red-50" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
      <h3 className="font-bold text-gray-900 mb-5">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((act, i) => (
          <button key={i} className={`flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 transition-all duration-300 group cursor-pointer active:scale-95 ${act.border} ${act.bg}`}>
            <act.icon className={`${act.color} mb-2 group-hover:scale-110 group-hover:-translate-y-1 transition-transform`} size={24} strokeWidth={2} />
            <span className="text-xs font-bold text-gray-900">{act.title}</span>
            <span className="text-[10px] text-gray-500 font-medium mt-0.5">{act.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}