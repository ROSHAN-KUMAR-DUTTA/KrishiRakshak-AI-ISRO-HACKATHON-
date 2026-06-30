"use client";
import { Bug, Droplets, Leaf, ArrowRight } from 'lucide-react';

export default function RecommendedActions() {
  const actions = [
    { 
      icon: Bug, title: "Monitor Fall Armyworm", desc: "Increase monitoring in high risk fields", 
      iconBg: "bg-red-50 text-red-500" 
    },
    { 
      icon: Droplets, title: "Irrigation Recommended", desc: "Consider irrigation in drought stress fields", 
      iconBg: "bg-orange-50 text-orange-500" 
    },
    { 
      icon: Leaf, title: "Disease Prevention", desc: "Apply preventive spray in susceptible fields", 
      iconBg: "bg-orange-50 text-orange-500" 
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-gray-900">Recommended Actions</h3>
          <button className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1 group">
            View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Interactive List */}
        <div className="space-y-2">
          {actions.map((item, i) => (
            <div key={i} className="group flex justify-between items-center p-3 -mx-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
              
              <div className="flex gap-3 items-center">
                <div className={`p-2.5 rounded-xl h-fit ${item.iconBg} shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                  <item.icon size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
              
              {/* Button Action */}
              <button className="border border-gray-200 text-gray-600 bg-white px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-md active:scale-95 transition-all whitespace-nowrap">
                Action
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Meta */}
      <p className="text-[10px] text-gray-400 font-bold px-2 text-center uppercase tracking-widest">
        Risk assessment based on AI & Sentinel-2 Data
      </p>
    </div>
  );
}