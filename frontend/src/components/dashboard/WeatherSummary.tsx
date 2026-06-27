"use client";
import React from 'react';
import { CloudSun, Droplets, Wind, CloudRain } from 'lucide-react';

const forecastData = [
  { day: 'Tue', tempMax: 32, tempMin: 24, icon: <CloudSun size={20} className="text-orange-400" /> },
  { day: 'Wed', tempMax: 31, tempMin: 23, icon: <CloudRain size={20} className="text-blue-400" /> },
  { day: 'Thu', tempMax: 30, tempMin: 22, icon: <CloudSun size={20} className="text-orange-400" /> },
  { day: 'Fri', tempMax: 32, tempMin: 24, icon: <CloudSun size={20} className="text-orange-400" /> },
  { day: 'Sat', tempMax: 33, tempMin: 24, icon: <CloudSun size={20} className="text-orange-400" /> },
];

const WeatherSummary = () => {
  return (
    <div className="flex flex-col h-full w-full justify-between overflow-auto">
      {/* Current Weather Header */}
      <div className="flex items-center gap-4 mb-6">
        <CloudSun size={48} className="text-orange-400" />
        <div>
          <h3 className="text-3xl font-bold text-gray-800">32°C</h3>
          <p className="text-sm text-gray-500 font-medium">Partly Cloudy</p>
        </div>
      </div>

      {/* Weather Metrics */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-6">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Droplets size={14}/> Humidity</span>
          <span className="text-sm font-bold text-gray-800">62%</span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-1 flex items-center gap-1"><CloudRain size={14}/> Rainfall</span>
          <span className="text-sm font-bold text-gray-800">0 mm</span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Wind size={14}/> Wind</span>
          <span className="text-sm font-bold text-gray-800">12 km/h</span>
        </div>
      </div>

      {/* Mini Forecast */}
      <div className="flex justify-between items-center mt-auto">
        {forecastData.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-gray-500">{day.day}</span>
            {day.icon}
            <span className="text-xs font-bold text-gray-700">{day.tempMax}°<span className="text-gray-400">/{day.tempMin}°</span></span>
          </div>
        ))}
      </div>
      
      <button className="w-full text-center text-sm font-bold text-[#04321c] mt-4 pt-3 border-t border-gray-100">
        View Full Forecast
      </button>
    </div>
  );
};

export default WeatherSummary;