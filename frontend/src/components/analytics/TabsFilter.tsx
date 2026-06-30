"use client";
import React, { useState } from 'react';

const tabs = ["Overview", "Field Health", "Water Usage", "Crops", "Risks", "Weather Impact", "Financials"];

export default function TabsFilter() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-2 py-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2.5 text-[13px] font-semibold rounded-xl whitespace-nowrap transition-all duration-200 ${
            activeTab === tab 
              ? "bg-green-50/80 border border-green-200 text-green-700 shadow-sm" 
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}