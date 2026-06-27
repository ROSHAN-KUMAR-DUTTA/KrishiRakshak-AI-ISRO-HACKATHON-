import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Healthy', value: 10, color: '#22c55e' },
  { name: 'At Risk', value: 8, color: '#f59e0b' },
  { name: 'Critical', value: 6, color: '#ef4444' },
];

const FieldHealthChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
   <div className="flex items-center justify-between h-48 w-full">
      {/* Chart Section */ }
      <div className="w-1/2 h-[180px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-gray-800">{total}</span>
          <span className="text-xs text-gray-500">Total Fields</span>
        </div>
      </div>

      {/* Legend Section */}
      <div className="w-1/2 flex flex-col gap-3 pl-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-gray-600 font-medium">{item.name}</span>
            </div>
            <span className="text-gray-500">
              {((item.value / total) * 100).toFixed(1)}% ({item.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldHealthChart;