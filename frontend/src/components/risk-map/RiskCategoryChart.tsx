"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Disease Risk", value: 2, percentage: "33%", color: "#ef4444" },
  { name: "Drought Risk", value: 2, percentage: "33%", color: "#f97316" },
  { name: "Pest Risk", value: 1, percentage: "17%", color: "#eab308" },
  { name: "Weather Risk", value: 1, percentage: "17%", color: "#65a30d" },
];

export default function RiskCategoryChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
      <h3 className="font-bold text-gray-900 mb-6">Risk by Category</h3>
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-40 h-40 shrink-0 group cursor-crosshair">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }} />
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={3} dataKey="value" className="group-hover:scale-105 transition-transform origin-center duration-300">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" className="hover:opacity-80 transition-opacity outline-none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-black text-gray-900 tracking-tight">6</span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Total Risks</span>
          </div>
        </div>
        <div className="flex-1 space-y-3.5">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm group cursor-default">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full shadow-inner group-hover:scale-125 transition-transform" style={{ backgroundColor: item.color }} />
                <span className="text-gray-600 font-semibold">{item.name}</span>
              </div>
              <span className="text-gray-900 font-black">
                {item.value} <span className="text-gray-400 font-medium text-xs">({item.percentage})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}