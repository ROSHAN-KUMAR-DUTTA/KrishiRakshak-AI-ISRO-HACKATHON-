"use client";
import React, { useState } from 'react';

const EconomicCalculator = () => {
  const [area, setArea] = useState(2.5);
  const [waterUsage, setWaterUsage] = useState(5000);
  const [waterCost, setWaterCost] = useState(20);
  const [yieldExpected, setYieldExpected] = useState(20);

  // Mock calculation logic
  const dailySaved = (waterUsage * 0.3).toLocaleString();
  const monthlySaved = (waterUsage * 0.3 * 30).toLocaleString();
  const costReduction = (waterUsage * 0.3 * 30 * (waterCost/1000)).toLocaleString();
  const profit = 3600; 
  const totalBenefit = 7200;

  // Reusable input styling for consistency
  const inputStyles = "w-24 border border-gray-300 rounded p-1.5 text-right text-xs text-gray-900 font-medium bg-white focus:outline-none focus:border-[#04321c] focus:ring-1 focus:ring-[#04321c]";

  return (
    <div className="flex flex-col h-full">
      {/* Input Form */}
      <div className="flex flex-col gap-4 mb-6 flex-1">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-700">Field Area (Acres)</label>
          <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} className={inputStyles} />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-700">Current Water Usage (L/day)</label>
          <input type="number" value={waterUsage} onChange={(e) => setWaterUsage(Number(e.target.value))} className={inputStyles} />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-700">Water Cost (₹ per 1000 L)</label>
          <input type="number" value={waterCost} onChange={(e) => setWaterCost(Number(e.target.value))} className={inputStyles} />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-700">Crop Type</label>
          <select className={inputStyles}>
            <option>Rice</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-700">Expected Yield (Quintal/acre)</label>
          <input type="number" value={yieldExpected} onChange={(e) => setYieldExpected(Number(e.target.value))} className={inputStyles} />
        </div>
        <button className="w-full bg-[#04321c] text-white py-2 rounded font-bold text-xs mt-2 transition-colors hover:bg-[#032414]">
          Calculate Savings
        </button>
      </div>

      {/* Output Results */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-gray-600">Water Saved</span>
          <span className="font-bold text-gray-900">{dailySaved} L / day</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-gray-600">Monthly Water Saved</span>
          <span className="font-bold text-gray-900">{monthlySaved} L</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-gray-600">Irrigation Cost Reduction</span>
          <span className="font-bold text-gray-900">₹ {costReduction} / month</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-gray-600">Estimated Yield Improvement</span>
          <span className="font-bold text-gray-900">+8 %</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-gray-600">Additional Profit</span>
          <span className="font-bold text-gray-900">₹ {profit.toLocaleString()} / season</span>
        </div>
        
        {/* Total Highlight */}
        <div className="mt-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded p-3 flex flex-col items-center justify-center relative">
          <span className="text-xs font-bold text-[#166534]">Total Seasonal Benefit</span>
          <span className="text-xl font-bold text-[#14532d] mt-1">₹ {totalBenefit.toLocaleString()}</span>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 opacity-50">
             🌱
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicCalculator;