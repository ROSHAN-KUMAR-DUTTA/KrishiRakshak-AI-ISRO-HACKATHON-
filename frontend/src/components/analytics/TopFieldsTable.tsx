"use client";
import React from 'react';

const fields = [
  { id: 1, name: "Field 1 - East Plot", crop: "Rice", area: "5.0 ha", health: 91, efficiency: "High", prodIndex: "1.45", img: "🌾" },
  { id: 9, name: "Field 9 - South Plot", crop: "Mustard", area: "2.8 ha", health: 88, efficiency: "High", prodIndex: "1.32", img: "🌼" },
  { id: 4, name: "Field 4 - Central Plot", crop: "Maize", area: "3.2 ha", health: 82, efficiency: "Medium", prodIndex: "1.18", img: "🌽" },
];

export default function TopFieldsTable() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow duration-300 overflow-x-auto w-full">
      <h3 className="text-[15px] font-bold text-slate-800 mb-5">Top Performing Fields</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-[11px] text-slate-400 border-b border-slate-100 uppercase tracking-wider font-bold">
            <th className="px-4 py-3 rounded-tl-lg">Field Name</th>
            <th className="px-4 py-3">Crop</th>
            <th className="px-4 py-3">Area</th>
            <th className="px-4 py-3">Health Score</th>
            <th className="px-4 py-3">Water Efficiency</th>
            <th className="px-4 py-3">Productivity Index</th>
            <th className="px-4 py-3 rounded-tr-lg text-right">Trend</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {fields.map((field) => (
            <tr key={field.id} className="hover:bg-slate-50/80 transition-colors group cursor-default">
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform">
                    {field.img}
                  </div>
                  <span className="font-semibold text-slate-800">{field.name}</span>
                </div>
              </td>
              <td className="px-4 py-3.5 text-slate-600 font-medium">{field.crop}</td>
              <td className="px-4 py-3.5 text-slate-600 font-medium">{field.area}</td>
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-slate-800 font-bold w-9">{field.health}%</span>
                  <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-green-500 rounded-full relative" style={{ width: `${field.health}%` }}>
                      <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3.5">
                <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide ${
                  field.efficiency === 'High' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-orange-50 text-orange-600 border border-orange-100'
                }`}>
                  {field.efficiency}
                </span>
              </td>
              <td className="px-4 py-3.5 text-slate-800 font-bold">{field.prodIndex}</td>
              <td className="px-4 py-3.5 text-right">
                {/* Updated SVG with exact curve and green drop-shadow */}
                <svg className="w-15 h-6 inline-block overflow-visible" viewBox="0 0 60 24" fill="none">
                  <path 
                    d="M4 16 C 12 10, 16 19, 28 13 C 40 7, 46 5, 56 8" 
                    stroke="#16a34a" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    className="drop-shadow-[0_4px_3px_rgba(22,163,74,0.35)] group-hover:stroke-green-600 transition-colors duration-300"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}