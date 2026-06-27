"use client";
import React from 'react';
import { CloudSun, CloudRain, Sun, Cloud, Droplet } from 'lucide-react';

const forecast = [
  { day: 'Tue', date: '13 May', tempH: 32, tempL: 24, rain: '40%', icon: <CloudSun size={24} className="text-orange-400" /> },
  { day: 'Wed', date: '14 May', tempH: 31, tempL: 23, rain: '70%', icon: <CloudRain size={24} className="text-blue-500" /> },
  { day: 'Thu', date: '15 May', tempH: 30, tempL: 22, rain: '80%', icon: <CloudRain size={24} className="text-blue-500" /> },
  { day: 'Fri', date: '16 May', tempH: 32, tempL: 24, rain: '30%', icon: <CloudSun size={24} className="text-orange-400" /> },
  { day: 'Sat', date: '17 May', tempH: 33, tempL: 24, rain: '10%', icon: <Sun size={24} className="text-orange-500" /> },
  { day: 'Sun', date: '18 May', tempH: 34, tempL: 25, rain: '10%', icon: <Sun size={24} className="text-orange-500" /> },
  { day: 'Mon', date: '19 May', tempH: 33, tempL: 25, rain: '10%', icon: <Cloud size={24} className="text-gray-400" /> },
];

const WeatherIntelligence = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Forecast Grid */}
      <div className="flex justify-between items-center w-full gap-1 overflow-x-auto">
        {forecast.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <div className="text-center mb-1">
              <p className="text-[11px] font-bold text-gray-800">{item.day}</p>
              <p className="text-[9px] text-gray-500">{item.date}</p>
            </div>
            {item.icon}
            <p className="text-[10px] font-bold text-gray-800 mt-1">
              {item.tempH}°<span className="text-gray-400 font-normal">/{item.tempL}°</span>
            </p>
            <div className="flex items-center gap-0.5 text-blue-500 mt-0.5">
              <Droplet size={8} fill="currentColor" />
              <span className="text-[9px] font-medium text-gray-500">{item.rain}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggestion Box */}
      <div className="mt-auto bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-2.5 flex items-start gap-2">
        <div className="text-green-600 mt-0.5 shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </div>
        <p className="text-[10px] text-gray-700 leading-tight">
          <span className="font-bold text-[#166534]">AI Suggestion:</span> Rain expected in next 24-48 hours. Postpone irrigation in Field 2, Field 3 and Field 7.
        </p>
      </div>
    </div>
  );
};

export default WeatherIntelligence;