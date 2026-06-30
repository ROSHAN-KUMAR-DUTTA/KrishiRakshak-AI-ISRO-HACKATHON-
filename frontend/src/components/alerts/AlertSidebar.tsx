"use client";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { CheckCircle2, Settings, History, PhoneCall, RefreshCcw } from 'lucide-react';

const pieData = [
  { name: "Critical", value: 2, color: "#e11d48" }, { name: "High", value: 4, color: "#ea580c" },
  { name: "Moderate", value: 6, color: "#f59e0b" }, { name: "Low", value: 3, color: "#10b981" },
];

const typeData = [
  { name: "Weather Alerts", val: 5, w: "80%", color: "bg-blue-600" }, { name: "Pest Alerts", val: 4, w: "60%", color: "bg-rose-600" },
  { name: "Disease Alerts", val: 2, w: "30%", color: "bg-amber-500" }, { name: "Operation Alerts", val: 2, w: "30%", color: "bg-orange-500" },
  { name: "Irrigation Alerts", val: 2, w: "30%", color: "bg-blue-500" },
];

export default function AlertSidebar() {
  return (
    <div className="space-y-6 flex flex-col h-full">
      
      {/* Top Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="flex-1 text-[12px] font-bold text-blue-700 bg-blue-50 border border-blue-100 py-2.5 rounded-xl hover:bg-blue-100 hover:border-blue-200 transition-all shadow-sm">Mark all as read</button>
        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"><RefreshCcw size={16} /></button>
        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"><Settings size={16} /></button>
      </div>

      {/* Alert Overview Donut Chart */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
        <h3 className="font-bold text-slate-900 text-[14px] tracking-tight mb-5">Alert Overview</h3>
        <div className="flex items-center justify-between">
          <div className="relative w-27.5 h-27.5">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip 
                  cursor={{fill: 'transparent'}} 
                  contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold'}}
                  itemStyle={{ color: '#0f172a' }}
                />
                <Pie data={pieData} innerRadius={35} outerRadius={50} paddingAngle={2} dataKey="value" stroke="#ffffff" strokeWidth={2}>
                  {pieData.map((e, i) => <Cell key={i} fill={e.color} className="hover:opacity-80 transition-opacity outline-none" />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[22px] leading-none font-black text-slate-900">15</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase mt-1 tracking-wider">Total</span>
            </div>
          </div>
          <div className="space-y-2.5 w-1/2">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: d.color }} />
                  <span className="text-[11px] font-bold text-slate-700">{d.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black text-slate-900">{d.value}</span>
                  <span className="text-[9px] text-slate-400 w-6 text-right">({Math.round((d.value/15)*100)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts by Type */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
        <h3 className="font-bold text-slate-900 text-[14px] tracking-tight mb-6">Alerts by Type</h3>
        <div className="space-y-4.5">
          {typeData.map((t, i) => (
            <div key={i} className="flex items-center justify-between gap-4 group cursor-default">
              <span className="text-[11px] font-bold text-slate-500 w-22.5 group-hover:text-slate-900 transition-colors">{t.name}</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full ${t.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: t.w }} />
              </div>
              <span className="text-[12px] font-black text-slate-900 w-4 text-right">{t.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex-1">
        <h3 className="font-bold text-slate-900 text-[14px] tracking-tight mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {[
            { title: "Mark all as read", sub: "Clear all alerts", icon: CheckCircle2, color: "text-emerald-600 border-emerald-100" },
            { title: "Alert Preferences", sub: "Manage alert settings", icon: Settings, color: "text-blue-600 border-blue-100" },
            { title: "Notification History", sub: "View all notifications", icon: History, color: "text-orange-600 border-orange-100" },
          ].map((act, i) => (
            <div key={i} className="flex items-center gap-4 p-3.5 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-md cursor-pointer transition-all duration-300 group bg-white">
              <div className={`p-2.5 rounded-xl bg-slate-50 border ${act.color} group-hover:scale-110 group-hover:bg-white transition-all shadow-sm`}>
                <act.icon size={18} strokeWidth={2.5}/>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-slate-900">{act.title}</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">{act.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts (Restored & Refined) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
        <h3 className="font-bold text-slate-900 text-[14px] tracking-tight mb-4">Emergency Contacts</h3>
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 shadow-sm">
              <PhoneCall size={20} strokeWidth={2.5}/>
            </div>
            <div>
              <h4 className="text-[15px] font-black text-slate-900 tracking-tight">1800-123-4567</h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Farm Support Helpline</p>
            </div>
          </div>
          <button className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <PhoneCall size={18} strokeWidth={2.5}/>
          </button>
        </div>
      </div>

    </div>
  );
}