"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: '16 Jun', value: 6500 }, { name: '17 Jun', value: 8000 }, { name: '18 Jun', value: 8800 },
  { name: '19 Jun', value: 6000 }, { name: '20 Jun', value: 7000 }, { name: '21 Jun', value: 7500 }, { name: '22 Jun', value: 5500 },
];

export default function WaterUsageChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[15px] font-bold text-slate-800">Water Usage Trend</h3>
        <button className="flex items-center gap-1.5 text-[12px] font-semibold border border-slate-200 rounded-lg bg-white px-3 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
          Last 7 Days <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>
      
      <div className="h-64 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }} barSize={22}>
            
            {/* Solid L-Shape Axes to match Health Chart */}
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
              tickFormatter={(val) => `${val / 1000}K`} 
              dx={-5}
            />
            
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1)' }}
              itemStyle={{ color: '#2563eb', fontWeight: 700, fontSize: '13px' }}
              labelStyle={{ color: '#64748b', fontSize: '11px', fontWeight: 700, marginBottom: '2px' }}
            />
            
            <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#3b82f6" className="hover:opacity-85 transition-opacity duration-300 cursor-pointer" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}