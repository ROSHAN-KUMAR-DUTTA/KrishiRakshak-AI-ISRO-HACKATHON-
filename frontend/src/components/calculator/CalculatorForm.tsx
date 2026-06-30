"use client";
import { ChevronDown, RefreshCw, Calculator } from 'lucide-react';

export default function CalculatorForm() {
  const fields = [
    { label: "Select Field", value: "Field 7 - North Plot (Rice)", meta: "2.5 ha • Sindri, Jharkhand" },
    { label: "Area", value: "2.5", unit: "ha" },
    { label: "Crop", value: "Rice" },
    { label: "Irrigation Method", value: "💧 Drip Irrigation" },
    { label: "Growth Stage", value: "🌱 Vegetative (20-40 DAT)" },
    { label: "Weather Based On", value: "⛅ Current Weather Forecast" },
    { label: "Soil Type", value: "🟤 Clay Loam" },
    { label: "Efficiency (%)", value: "85", unit: "%" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-slate-900 text-sm tracking-tight">Irrigation Calculator</h2>
        <p className="text-[11px] text-slate-500 mt-1 mb-6 font-medium">Calculate water requirement for your crops</p>
        
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          {fields.map((f, i) => (
            <div key={i} className="col-span-1">
              <label className="block text-[10px] font-bold text-slate-600 mb-1.5 uppercase tracking-wider">{f.label}</label>
              <div className="relative group">
                {f.unit ? (
                  <input type="text" defaultValue={f.value} className="w-full text-[13px] font-semibold text-slate-900 border border-slate-200 rounded-xl pl-3.5 pr-8 py-2.5 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all shadow-sm" />
                ) : (
                  <select className="w-full text-[13px] font-semibold text-slate-900 border border-slate-200 rounded-xl px-3.5 py-2.5 appearance-none outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all shadow-sm cursor-pointer">
                    <option>{f.value}</option>
                  </select>
                )}
                {f.unit ? (
                  <span className="absolute right-3.5 top-2.75 text-[11px] font-bold text-slate-400">{f.unit}</span>
                ) : (
                  <ChevronDown size={14} className="absolute right-3.5 top-3 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                )}
              </div>
              {f.meta && <p className="text-[10px] text-emerald-600 font-semibold mt-2 flex items-center gap-1.5"><span>🕒</span> {f.meta}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_4px_12px_rgba(5,150,105,0.2)]">
          <Calculator size={16} strokeWidth={2.5}/> Calculate Requirement
        </button>
        <button className="px-5 text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
          <RefreshCw size={14} strokeWidth={2.5}/> Reset
        </button>
      </div>
    </div>
  );
}