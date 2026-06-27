"use client";
import React from 'react';
import { FileText, Download } from 'lucide-react';

const reportTypes = [
  { id: 1, title: "Field Health Report", desc: "Summary of field health & indices" },
  { id: 2, title: "Irrigation Report", desc: "Irrigation recommendations" },
  { id: 3, title: "Economic Report", desc: "Cost reduction & profit analysis" },
  { id: 4, title: "Seasonal Summary", desc: "Overall performance summary" },
];

const ReportsExport = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-3 overflow-hidden">
      {/* Reports List */}
      <div className="flex flex-col gap-2 overflow-y-auto pr-1">
        {reportTypes.map((report) => (
          <div key={report.id} className="flex items-center justify-between gap-2 p-2 border border-gray-100 rounded-lg bg-white shadow-sm w-full">
            {/* Left Side: Icon + Text (min-w-0 is critical here to prevent wrapping out of bounds) */}
            <div className="flex items-start gap-1.5 flex-1 min-w-0">
              <FileText size={14} className="text-gray-400 mt-0.5 shrink-0" />
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[11px] font-bold text-gray-800 leading-tight truncate">{report.title}</span>
                <span className="text-[9px] text-gray-400 leading-tight mt-0.5 truncate">{report.desc}</span>
              </div>
            </div>
            
            {/* Right Side: Generate Button (shrink-0 keeps its size rigid) */}
            <button className="text-[9px] font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors shrink-0">
              Generate
            </button>
          </div>
        ))}
      </div>

      {/* Primary Export Button */}
      <button className="w-full bg-[#04321c] text-white py-2 rounded text-xs font-bold flex justify-center items-center gap-2 transition-colors hover:bg-[#032414] mt-auto shrink-0">
        Export All (PDF) <span className="text-white/70">↓</span>
      </button>
    </div>
  );
};

export default ReportsExport;