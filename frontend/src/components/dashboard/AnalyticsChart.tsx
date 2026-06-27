"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock data matching the trend lines in your reference
const data = [
  { date: '12 Apr', NDVI: 0.35, NDMI: 0.20, SAVI: 0.28, EVI: 0.30 },
  { date: '17 Apr', NDVI: 0.38, NDMI: 0.22, SAVI: 0.30, EVI: 0.32 },
  { date: '22 Apr', NDVI: 0.40, NDMI: 0.25, SAVI: 0.31, EVI: 0.35 },
  { date: '27 Apr', NDVI: 0.45, NDMI: 0.29, SAVI: 0.34, EVI: 0.39 },
  { date: '2 May', NDVI: 0.42, NDMI: 0.28, SAVI: 0.33, EVI: 0.38 },
  { date: '7 May', NDVI: 0.39, NDMI: 0.26, SAVI: 0.31, EVI: 0.36 },
  { date: '12 May', NDVI: 0.42, NDMI: 0.28, SAVI: 0.33, EVI: 0.38 },
];

const AnalyticsChart = () => {
  
  return (
    <div className="h-full w-full flex flex-col relative">
      {/* Metric Summaries */}
      <div className="grid grid-cols-4 gap-4 mb-4 shrink-0">
        <div>
          <span className="text-xs text-gray-500 font-bold">NDVI</span>
          <div className="text-lg font-bold text-gray-800">0.42 <span className="text-xs text-green-500 font-normal">↗ 0.05</span></div>
        </div>
        <div>
          <span className="text-xs text-gray-500 font-bold">NDMI</span>
          <div className="text-lg font-bold text-gray-800">0.28 <span className="text-xs text-green-500 font-normal">↗ 0.03</span></div>
        </div>
        <div>
          <span className="text-xs text-gray-500 font-bold">SAVI</span>
          <div className="text-lg font-bold text-gray-800">0.33 <span className="text-xs text-green-500 font-normal">↗ 0.04</span></div>
        </div>
        <div>
          <span className="text-xs text-gray-500 font-bold">EVI</span>
          <div className="text-lg font-bold text-gray-800">0.38 <span className="text-xs text-green-500 font-normal">↗ 0.02</span></div>
        </div>
      </div>

      {/* Line Chart */}
     <div className="flex-1 w-full h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Line type="monotone" dataKey="NDVI" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="NDMI" stroke="#eab308" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="SAVI" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="EVI" stroke="#ec4899" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  );
};

export default AnalyticsChart;