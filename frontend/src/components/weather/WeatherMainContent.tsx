"use client";
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { CloudSun, Sun, Cloud, Leaf, Droplet, Bug, Tractor } from 'lucide-react';

const chartData = [
  { day: '30 Jun', max: 28, min: 22, rain: 2 }, { day: '01 Jul', max: 27, min: 22, rain: 8 }, { day: '02 Jul', max: 29, min: 23, rain: 1 },
  { day: '03 Jul', max: 30, min: 24, rain: 2 }, { day: '04 Jul', max: 28, min: 23, rain: 12 }, { day: '05 Jul', max: 27, min: 22, rain: 15 }, { day: '06 Jul', max: 29, min: 23, rain: 1 },
];

const hourlyData = [
  { time: '8 AM', temp: '28°C', desc: 'Partly Cloudy', rain: '10%', icon: CloudSun }, { time: '11 AM', temp: '31°C', desc: 'Partly Cloudy', rain: '10%', icon: CloudSun },
  { time: '2 PM', temp: '32°C', desc: 'Sunny', rain: '10%', icon: Sun }, { time: '5 PM', temp: '29°C', desc: 'Partly Cloudy', rain: '20%', icon: CloudSun },
  { time: '8 PM', temp: '26°C', desc: 'Partly Cloudy', rain: '10%', icon: Cloud }, { time: '11 PM', temp: '24°C', desc: 'Clear', rain: '0%', icon: Cloud },
];

export default function WeatherMainContent() {
  return (
    <div className="space-y-6">
      
      {/* Chart */}
      <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-gray-900">Temperature & Rainfall (Next 7 Days)</h3>
          <select className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 outline-none font-bold text-gray-600 hover:bg-gray-50 cursor-pointer">
            <option>Next 7 Days</option>
          </select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 600}} dy={15} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 600}} domain={[0, 40]} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#94a3b8', fontWeight: 600}} domain={[0, 20]} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }} />
              <Bar yAxisId="right" dataKey="rain" fill="#3b82f6" barSize={32} radius={[6, 6, 0, 0]} />
              <Line yAxisId="left" type="monotone" dataKey="max" stroke="#f59e0b" strokeWidth={3} dot={{r: 5, fill: '#fff', strokeWidth: 3, stroke: '#f59e0b'}} activeDot={{r: 7}} />
              <Line yAxisId="left" type="monotone" dataKey="min" stroke="#22c55e" strokeWidth={3} dot={{r: 5, fill: '#fff', strokeWidth: 3, stroke: '#22c55e'}} activeDot={{r: 7}} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid for Hourly & Impact (Side-by-Side exact height match) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Hourly Forecast */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full">
          <h3 className="font-bold text-gray-900 mb-6">Hourly Forecast (Today)</h3>
          <div className="flex justify-between items-center px-2">
            {hourlyData.map((h, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <span className="text-[11px] font-bold text-gray-400 mb-4">{h.time}</span>
                <h.icon size={28} className={`mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 drop-shadow-sm ${h.icon === Sun ? "text-amber-400" : h.icon === CloudSun ? "text-orange-400" : "text-gray-400"}`} />
                <span className="text-sm font-black text-gray-900">{h.temp}</span>
                <span className="text-[10px] font-medium text-gray-500 mt-1">{h.desc}</span>
                <span className="text-[10px] font-bold text-blue-500 mt-3 bg-blue-50 px-2 py-1 rounded-full">💧 {h.rain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Farming Impact */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full">
          <h3 className="font-bold text-gray-900 mb-5">Weather Impact on Farming</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center p-2 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-xl"><Droplet size={18} /></div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-900 mb-0.5">Irrigation Need</h4>
                <p className="text-[11px] text-gray-500 font-medium">Low. Light rain expected in next 2 days.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-2 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl"><Bug size={18} /></div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Pest Risk</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Moderate pest risk due to humidity.</p>
                </div>
                <span className="text-[9px] font-black bg-orange-50 text-orange-600 px-2 py-1 rounded-md uppercase tracking-wider">Moderate</span>
              </div>
            </div>
            <div className="flex gap-4 items-center p-2 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Tractor size={18} /></div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Field Operations</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Good time for weeding/fertilization.</p>
                </div>
                <span className="text-[9px] font-black bg-green-50 text-green-600 px-2 py-1 rounded-md uppercase tracking-wider">Good</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Recommendation Banner */}
      <div className="bg-[#f0fdf4] border border-green-200 p-6 rounded-3xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-5 items-center">
          <div className="p-4 bg-white text-green-600 rounded-2xl shadow-sm"><Leaf size={24} strokeWidth={2.5}/></div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Weather Recommendation</h4>
            <p className="text-xs text-gray-600 mt-1.5 font-medium leading-relaxed">Light to moderate rain expected in next 2 days. Postpone irrigation and focus on field drainage. <br/>Apply fertilizer in low doses and monitor for pest attacks.</p>
          </div>
        </div>
        <button className="text-xs font-bold text-green-700 border-2 border-green-200 px-5 py-2.5 rounded-xl bg-white hover:bg-green-50 hover:scale-105 active:scale-95 transition-all whitespace-nowrap">View Detailed Advisory →</button>
      </div>
    </div>
  );
}