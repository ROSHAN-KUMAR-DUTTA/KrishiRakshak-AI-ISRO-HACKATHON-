"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const healthData = [
  { name: 'Healthy (≥75%)', value: 10, percent: '41.7%', color: '#16a34a' },
  { name: 'Moderate (50-75%)', value: 8, percent: '33.3%', color: '#eab308' },
  { name: 'At Risk (25-50%)', value: 4, percent: '16.7%', color: '#f97316' },
  { name: 'Critical (<25%)', value: 2, percent: '8.3%', color: '#dc2626' },
];

const cropData = [
  { name: 'Rice', value: 18.2, percent: '37%', color: '#16a34a' },
  { name: 'Maize', value: 12.5, percent: '26%', color: '#8b5cf6' },
  { name: 'Wheat', value: 8.6, percent: '18%', color: '#eab308' },
  { name: 'Cotton', value: 5.1, percent: '10%', color: '#3b82f6' },
  { name: 'Mustard', value: 4.2, percent: '9%', color: '#64748b' },
];

export default function CategoryCharts({ type }: { type: 'health' | 'crop' }) {
  const isHealth = type === 'health';
  const data = isHealth ? healthData : cropData;
  const title = isHealth ? "Fields by Health Category" : "Crop Distribution by Area";
  
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow duration-300 w-full h-full flex flex-col group">
      <h3 className="text-[15px] font-bold text-slate-800 mb-2">{title}</h3>
      <div className="flex flex-col sm:flex-row items-center justify-between h-full gap-4 mt-2">
        <div className="w-full sm:w-[45%] h-48 relative group-hover:scale-105 transition-transform duration-500">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} innerRadius={60} outerRadius={75} paddingAngle={4} dataKey="value" stroke="none" cornerRadius={4}>
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} itemStyle={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold text-slate-800">{isHealth ? "24" : "48.6"}</span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{isHealth ? "Total Fields" : "Total ha"}</span>
          </div>
        </div>
        <div className="w-full sm:w-[55%]">
          <ul className="space-y-3.5">
            {data.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-[12px] group/item hover:bg-slate-50 p-1 -mx-1 rounded-lg transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-600 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-800">{isHealth ? item.value : `${item.value} ha`}</span>
                  <span className="text-slate-400 w-9 text-right font-medium">({item.percent})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}