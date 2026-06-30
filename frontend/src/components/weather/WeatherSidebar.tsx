"use client";
import { AlertTriangle, Droplet, Wind } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const sparklineData = [{v: 10}, {v: 15}, {v: 8}, {v: 20}, {v: 18}, {v: 25}, {v: 22}];

const Sparkline = ({ color }: { color: string }) => (
  <div className="h-10 w-full mt-3">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={sparklineData}>
        <Area type="monotone" dataKey="v" stroke={color} fill={color} fillOpacity={0.15} strokeWidth={2.5} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default function WeatherSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Alerts */}
      <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900">Weather Alerts</h3>
          <span className="text-xs font-bold text-green-600 cursor-pointer hover:underline">View All</span>
        </div>
        <div className="space-y-5">
          <div className="flex gap-4 items-start group p-3 -mx-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 group-hover:bg-orange-100 transition-all"><AlertTriangle size={18} strokeWidth={2.5} /></div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-xs font-bold text-gray-900">Heavy Rainfall Alert</h4>
                <span className="text-[9px] font-black bg-orange-50 text-orange-600 px-2 py-1 rounded-md uppercase tracking-wider">Moderate</span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">Heavy rainfall expected on 3-4 Jul.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start group p-3 -mx-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:scale-110 group-hover:bg-blue-100 transition-all"><Droplet size={18} strokeWidth={2.5} /></div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-xs font-bold text-gray-900">High Humidity Alert</h4>
                <span className="text-[9px] font-black bg-green-50 text-green-600 px-2 py-1 rounded-md uppercase tracking-wider">Low</span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">High humidity expected in next 2 days.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start group p-3 -mx-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="p-3 bg-purple-50 text-purple-500 rounded-xl group-hover:scale-110 group-hover:bg-purple-100 transition-all"><Wind size={18} strokeWidth={2.5} /></div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-xs font-bold text-gray-900">Strong Winds</h4>
                <span className="text-[9px] font-black bg-green-50 text-green-600 px-2 py-1 rounded-md uppercase tracking-wider">Low</span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">Wind speed may reach 25 km/h on 2 Jul.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sunrise & Sunset */}
      <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <h3 className="font-bold text-gray-900 mb-8">Sunrise & Sunset</h3>
        <div className="relative h-24 w-full mb-4">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
            <path d="M 5 45 A 40 40 0 0 1 95 45" fill="none" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="30" cy="18" r="5" fill="#eab308" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.6))' }} />
          </svg>
        </div>
        <div className="flex justify-between text-center relative -mt-6">
          <div><p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Sunrise</p><p className="font-black text-gray-900 text-sm">05:17 AM</p></div>
          <div className="mt-4"><p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Day Length</p><p className="font-bold text-gray-900 text-xs bg-gray-50 px-3 py-1 rounded-full">13h 36m</p></div>
          <div><p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Sunset</p><p className="font-black text-gray-900 text-sm">06:53 PM</p></div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <h3 className="font-bold text-gray-900 mb-6">Last 7 Days Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-100 p-4 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer"><p className="text-[10px] text-gray-500 font-bold mb-1">Avg. Temp</p><p className="font-black text-lg text-gray-900">27.6°C</p><Sparkline color="#f97316"/></div>
          <div className="border border-gray-100 p-4 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer"><p className="text-[10px] text-gray-500 font-bold mb-1">Total Rainfall</p><p className="font-black text-lg text-gray-900">35.8 mm</p><Sparkline color="#3b82f6"/></div>
          <div className="border border-gray-100 p-4 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer"><p className="text-[10px] text-gray-500 font-bold mb-1">Max Wind</p><p className="font-black text-lg text-gray-900">18 km/h</p><Sparkline color="#a855f7"/></div>
          <div className="border border-gray-100 p-4 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer"><p className="text-[10px] text-gray-500 font-bold mb-1">Avg. Humidity</p><p className="font-black text-lg text-gray-900">72%</p><Sparkline color="#22c55e"/></div>
        </div>
      </div>
    </div>
  );
}