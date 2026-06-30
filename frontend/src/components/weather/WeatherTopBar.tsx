"use client";
import { Droplet, Wind, Gauge, Eye, Sun, CloudRain, CloudSun } from 'lucide-react';

export default function WeatherTopBar() {
  const forecast = [
    { day: 'Tue', date: '30 Jun', max: '28°C', min: '22°C', rain: '20%', icon: CloudSun, active: true },
    { day: 'Wed', date: '1 Jul', max: '27°C', min: '22°C', rain: '60%', icon: CloudRain, active: false },
    { day: 'Thu', date: '2 Jul', max: '29°C', min: '23°C', rain: '10%', icon: CloudSun, active: false },
    { day: 'Fri', date: '3 Jul', max: '30°C', min: '24°C', rain: '70%', icon: CloudRain, active: false },
    { day: 'Sat', date: '4 Jul', max: '28°C', min: '23°C', rain: '70%', icon: CloudRain, active: false },
    { day: 'Sun', date: '5 Jul', max: '27°C', min: '22°C', rain: '80%', icon: CloudRain, active: false },
    { day: 'Mon', date: '6 Jul', max: '29°C', min: '23°C', rain: '10%', icon: Sun, active: false },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Current Weather Card */}
      <div className="lg:col-span-1 bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-3xl p-7 text-white shadow-[0_8px_30px_rgba(37,99,235,0.2)] relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 opacity-20 animate-[spin_20s_linear_infinite]">
          <Sun size={200} />
        </div>
        
        <div className="relative z-10">
          <h3 className="font-semibold text-blue-100 text-sm tracking-wide mb-1">Current Weather</h3>
          <h2 className="text-xl font-bold mb-6">Sindri, Jharkhand</h2>
          
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-[80px] leading-none font-black tracking-tighter">28°<span className="text-5xl">C</span></h1>
          </div>
          
          <p className="font-bold text-lg mb-1">Partly Cloudy</p>
          <p className="text-sm text-blue-200 mb-8 font-medium">Feels like 30°C</p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[11px] font-bold text-white bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2"><Droplet size={14} className="text-blue-200"/> Humidity: 65%</div>
            <div className="flex items-center gap-2"><Wind size={14} className="text-blue-200"/> Wind: 12 km/h NE</div>
            <div className="flex items-center gap-2"><Gauge size={14} className="text-blue-200"/> Pressure: 1006 hPa</div>
            <div className="flex items-center gap-2"><Eye size={14} className="text-blue-200"/> Visibility: 10 km</div>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900">7-Day Forecast</h3>
          <button className="text-xs font-bold text-green-600 hover:text-green-700 hover:underline transition-all">View Full Forecast →</button>
        </div>
        
        <div className="flex justify-between items-center h-full gap-2">
          {forecast.map((f, i) => (
            <div key={i} className={`flex flex-col items-center justify-center w-full py-4 rounded-2xl transition-all duration-300 cursor-pointer ${
              f.active 
                ? 'bg-[#f0fdf4] border border-green-200 shadow-md scale-105 transform' 
                : 'hover:bg-gray-50 border border-transparent hover:scale-105'
            }`}>
              <span className={`text-xs font-bold mb-1 ${f.active ? 'text-green-700' : 'text-gray-900'}`}>{f.day}</span>
              <span className="text-[10px] font-medium text-gray-400 mb-4">{f.date}</span>
              <f.icon size={28} className={`mb-4 drop-shadow-sm ${f.icon === Sun ? "text-amber-400" : f.icon === CloudSun ? "text-orange-400" : "text-blue-400"}`} />
              <span className="text-sm font-black text-gray-900">{f.max}</span>
              <span className="text-[11px] font-bold text-gray-400 mt-0.5">{f.min}</span>
              <span className="text-[10px] font-bold text-blue-500 mt-3 flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full"><Droplet size={10}/> {f.rain}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}