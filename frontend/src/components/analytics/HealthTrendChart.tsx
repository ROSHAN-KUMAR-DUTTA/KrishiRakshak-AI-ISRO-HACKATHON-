"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, ChevronDown } from 'lucide-react';

const data = [
  { name: '16 Jun', value: 58 }, { name: '17 Jun', value: 71 }, { name: '18 Jun', value: 73 },
  { name: '19 Jun', value: 82 }, { name: '20 Jun', value: 77 }, { name: '21 Jun', value: 75 }, { name: '22 Jun', value: 72 },
];

// Custom Tooltip exactly like the image
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-100 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] rounded-lg p-3 flex flex-col gap-1.5 z-50">
        <p className="text-[11px] text-slate-500 font-bold">{`${label} 2026`}</p>
        <div className="flex items-center gap-2">
          {/* Green Diamond Icon */}
          <div className="w-1.5 h-1.5 rotate-45 bg-green-600 rounded-[1px]"></div>
          <p className="text-[12px] font-bold text-slate-600">
            Health Score: <span className="text-slate-900">{payload[0].value}%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function HealthTrendChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-1.5 cursor-pointer">
          Field Health Trend <Info className="w-4 h-4 text-slate-400" />
        </h3>
        <button className="flex items-center gap-1.5 text-[12px] font-semibold border border-slate-200 rounded-lg bg-white px-3 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
          Last 7 Days <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>
      
      <div className="h-64 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            {/* Defining the green gradient fade for the area */}
            <defs>
              <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            {/* Solid L-Shape Axes, removed Grid */}
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#e2e8f0', strokeWidth: 1.5 }} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} 
              dy={15} 
            />
            
            <YAxis 
              axisLine={{ stroke: '#e2e8f0', strokeWidth: 1.5 }} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} 
              domain={[0, 100]} 
              ticks={[0, 25, 50, 75, 100]} 
              tickFormatter={(val) => `${val}%`} 
              dx={-10}
            />
            
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} 
            />
            
            {/* The actual line with gradient fill */}
            <Area 
              type="linear" 
              dataKey="value" 
              stroke="#16a34a" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#colorHealth)" 
              dot={{ r: 4.5, fill: '#16a34a', strokeWidth: 0 }} 
              activeDot={{ r: 6, fill: '#fff', stroke: '#16a34a', strokeWidth: 2.5 }} 
              animationDuration={1500} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}