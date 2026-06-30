"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Irrigation", value: 3, percentage: "50%", color: "#3b82f6" },
  { name: "Fertilization", value: 2, percentage: "33%", color: "#f97316" },
  { name: "Pest Control", value: 1, percentage: "17%", color: "#ef4444" },
  { name: "General", value: 0, percentage: "0%", color: "#22c55e" },
];

export default function AdvisoryChart() {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-sm font-bold text-gray-900 mb-6">Advisory by Category</h3>
      <div className="flex items-center justify-between gap-4">
        
        <div className="relative w-36 h-36 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '11px', fontWeight: 'bold' }} />
              {/* Thicker donut parameters */}
              <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-black text-gray-900 leading-none">6</span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 mt-1">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-600 font-medium">{item.name}</span>
              </div>
              <span className="text-gray-900 font-bold">
                {item.value} <span className="text-gray-400 font-normal text-[10px] ml-1">({item.percentage})</span>
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}