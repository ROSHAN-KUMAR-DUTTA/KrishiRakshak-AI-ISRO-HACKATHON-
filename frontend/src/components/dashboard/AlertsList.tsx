"use client";
import React from 'react';
import { AlertTriangle, CloudRain, ShieldCheck, RefreshCw } from 'lucide-react';

const alerts = [
  { id: 1, text: "High moisture stress detected in Field 4", time: "1 hour ago", icon: <AlertTriangle size={16} className="text-red-500" />, bg: "bg-red-50" },
  { id: 2, text: "Rain expected tomorrow", time: "3 hours ago", icon: <CloudRain size={16} className="text-blue-500" />, bg: "bg-blue-50" },
  { id: 3, text: "NDVI dropped in Field 5", time: "5 hours ago", icon: <AlertTriangle size={16} className="text-orange-500" />, bg: "bg-orange-50" },
  { id: 4, text: "New satellite data available", time: "8 hours ago", icon: <RefreshCw size={16} className="text-green-500" />, bg: "bg-green-50" },
];

const AlertsList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-start justify-between gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex gap-2.5">
            <div className={`p-1.5 rounded-md ${alert.bg} shrink-0 mt-0.5`}>
              {alert.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-800 leading-snug">{alert.text}</span>
              <span className="text-[10px] text-gray-400 mt-0.5">{alert.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;