"use client";
import { ExternalLink } from 'lucide-react';

export default function CalculatorGuideTable() {
  const guideData = [
    { crop: "Rice", stage: "Vegetative (20-40 DAT)", req: "5.0 - 7.0 mm", days: 20, total: "1,000 - 1,400", icon: "🌾", bg: "bg-amber-50" },
    { crop: "Maize", stage: "Vegetative (15-30 DAT)", req: "4.0 - 6.0 mm", days: 15, total: "600 - 900", icon: "🌽", bg: "bg-green-50" },
    { crop: "Cotton", stage: "Flowering (60-90 DAT)", req: "6.0 - 8.0 mm", days: 30, total: "1,800 - 2,400", icon: "☁️", bg: "bg-slate-100" },
    { crop: "Wheat", stage: "Tillering (25-45 DAT)", req: "4.5 - 6.5 mm", days: 20, total: "900 - 1,300", icon: "🌾", bg: "bg-amber-50" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-slate-100">
        <div>
          <h2 className="font-bold text-slate-900 text-sm tracking-tight">Crop Water Requirement Guide</h2>
          <p className="text-[11px] text-slate-500 mt-1 font-medium">Reference water requirement for different crops</p>
        </div>
        <button className="text-[11px] font-bold text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-1.5 shadow-sm">
          <ExternalLink size={14} strokeWidth={2.5}/> View Full Guide
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="text-[10px] text-slate-500 font-bold uppercase tracking-wider bg-slate-50/80 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Crop</th>
              <th className="px-6 py-4">Growth Stage</th>
              <th className="px-6 py-4">Water Req (mm/day)</th>
              <th className="px-6 py-4 text-center">Duration (Days)</th>
              <th className="px-6 py-4 text-right">Total Water (m³/ha)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-[13px]">
            {guideData.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors cursor-default">
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-3.5">
                  <span className={`text-lg ${row.bg} w-9 h-9 flex items-center justify-center rounded-xl shadow-sm border border-slate-100`}>{row.icon}</span> 
                  {row.crop}
                </td>
                <td className="px-6 py-4 font-medium text-slate-600">{row.stage}</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md font-bold text-[11px] tracking-tight">💧 {row.req}</span>
                </td>
                <td className="px-6 py-4 text-center font-bold text-slate-600">{row.days}</td>
                <td className="px-6 py-4 text-right font-black text-slate-800">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}