"use client";
import { Bug, Droplet, Leaf, Wind, Tractor, Sun, Search, Filter, MoreVertical } from 'lucide-react';

const alertsData = [
  { id: 1, alert: "Fall Armyworm Outbreak", sub: "High risk detected in 2 fields", field: "Field 7, Field 5", crop: "Rice", type: "Pest Alert", typeIcon: Bug, typeColor: "text-rose-600", typeBg: "bg-rose-50", severity: "Critical", date: "30 Jun 2026", time: "08:30 AM", status: "New" },
  { id: 2, alert: "Drought Stress Detected", sub: "Soil moisture below threshold", field: "Field 2, Field 4", crop: "Maize", type: "Weather Alert", typeIcon: Droplet, typeColor: "text-orange-600", typeBg: "bg-orange-50", severity: "High", date: "30 Jun 2026", time: "07:15 AM", status: "New" },
  { id: 3, alert: "Disease Risk Increased", sub: "Bacterial leaf blight risk high", field: "Field 3", crop: "Rice", type: "Disease Alert", typeIcon: Leaf, typeColor: "text-amber-500", typeBg: "bg-amber-50", severity: "Moderate", date: "29 Jun 2026", time: "06:40 PM", status: "In Progress" },
  { id: 4, alert: "Strong Winds Expected", sub: "Wind speed may reach 25 km/h", field: "All Fields", crop: "—", type: "Weather Alert", typeIcon: Wind, typeColor: "text-emerald-600", typeBg: "bg-emerald-50", severity: "Low", date: "29 Jun 2026", time: "05:20 PM", status: "New" },
  { id: 5, alert: "Fertilizer Reminder", sub: "Urea application due in 3 days", field: "Field 4", crop: "Maize", type: "Operation Alert", typeIcon: Tractor, typeColor: "text-amber-500", typeBg: "bg-amber-50", severity: "Moderate", date: "29 Jun 2026", time: "04:10 PM", status: "In Progress" },
  { id: 6, alert: "Irrigation Needed", sub: "Soil moisture is low", field: "Field 1, Field 3", crop: "Wheat", type: "Irrigation Alert", typeIcon: Droplet, typeColor: "text-blue-600", typeBg: "bg-blue-50", severity: "High", date: "28 Jun 2026", time: "03:30 PM", status: "New" },
  { id: 7, alert: "Pest Control Success", sub: "Pest level decreased", field: "Field 6", crop: "Cotton", type: "Info", typeIcon: Bug, typeColor: "text-emerald-600", typeBg: "bg-emerald-50", severity: "Low", date: "28 Jun 2026", time: "02:15 PM", status: "Resolved" },
  { id: 8, alert: "High Temperature Alert", sub: "Temperature may reach 38°C", field: "All Fields", crop: "—", type: "Weather Alert", typeIcon: Sun, typeColor: "text-amber-500", typeBg: "bg-amber-50", severity: "Moderate", date: "28 Jun 2026", time: "01:00 PM", status: "In Progress" },
];

export default function AlertList() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden">
      
      <div className="px-5 pt-5 border-b border-slate-100 flex flex-wrap justify-between items-end gap-4">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar">
          {[{n:"All Alerts (15)", a:true}, {n:"Critical (2)", a:false, c:"text-slate-500"}, {n:"High (4)", a:false, c:"text-orange-600"}, {n:"Moderate (6)", a:false, c:"text-amber-500"}, {n:"Low (3)", a:false, c:"text-emerald-500"}].map((t, i) => (
            <button key={i} className={`pb-3 text-[13px] font-bold border-b-2 whitespace-nowrap transition-colors ${t.a ? 'text-emerald-600 border-emerald-600' : `${t.c || 'text-slate-500'} border-transparent hover:border-slate-300`}`}>
              {t.n}
            </button>
          ))}
        </div>
        <div className="flex gap-3 pb-3">
          <div className="relative group">
            <Search size={14} className="absolute left-3.5 top-2.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            <input type="text" placeholder="Search alerts..." className="pl-9 pr-4 py-2 text-xs font-semibold text-slate-900 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 w-56 transition-all shadow-sm bg-slate-50/50 focus:bg-white" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm bg-white">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="text-[10px] text-slate-500 font-bold uppercase tracking-wider bg-slate-50/80 border-b border-slate-100">
            <tr>
              {['Alert', 'Field', 'Type', 'Severity', 'Detected On', 'Status', 'Action'].map(h => <th key={h} className="px-5 py-3.5">{h}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-[13px]">
            {alertsData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/80 transition-colors group cursor-default">
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${row.typeBg} ${row.typeColor} border border-white group-hover:scale-110 transition-transform shadow-sm`}>
                      <row.typeIcon size={16} strokeWidth={2.5}/>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-slate-900 text-[12px] leading-tight">{row.alert}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{row.sub}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-2.5">
                  <p className="font-bold text-slate-900 text-[12px] leading-tight">{row.field}</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{row.crop}</p>
                </td>
                <td className="px-5 py-2.5">
                  <div className={`flex items-center gap-1.5 font-bold ${row.typeColor}`}>
                    <row.typeIcon size={14} strokeWidth={2.5}/> <span className="text-[11px]">{row.type}</span>
                  </div>
                </td>
                <td className="px-5 py-2.5">
                  <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider ${
                    row.severity === 'Critical' ? 'bg-rose-50 text-rose-700' :
                    row.severity === 'High' ? 'bg-orange-50 text-orange-700' :
                    row.severity === 'Moderate' ? 'bg-amber-50 text-amber-700' :
                    'bg-emerald-50 text-emerald-700'
                  }`}>
                    {row.severity}
                  </span>
                </td>
                <td className="px-5 py-2.5">
                  <p className="font-bold text-slate-900 text-[11px] leading-tight">{row.date}</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{row.time}</p>
                </td>
                <td className="px-5 py-2.5">
                  <span className={`font-bold text-[10px] ${row.status === 'New' ? 'text-orange-600 bg-orange-50 px-2 py-1 rounded' : row.status === 'In Progress' ? 'text-blue-600 bg-blue-50 px-2 py-1 rounded' : 'text-slate-500 bg-slate-100 px-2 py-1 rounded'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <button className="text-[10px] font-bold text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm bg-white">
                      View Details
                    </button>
                    <button className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-bold text-slate-500 bg-slate-50/50">
        <span>Showing 1 to 8 of 15 alerts</span>
        <div className="flex gap-1.5">
          {['<', '1', '2', '>', '>|'].map((btn, i) => (
            <button key={i} className={`px-3 py-1.5 rounded-lg border transition-all ${btn === '1' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 shadow-sm'}`}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}