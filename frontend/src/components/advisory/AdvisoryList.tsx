"use client";
import { Search, Filter, Droplets, Leaf, Bug, ChevronRight, Calendar, Sprout } from 'lucide-react';

export default function AdvisoryList() {
  const pills = [
    { label: "All Fields (6)", active: true }, 
    { label: "Irrigation (3)", active: false },
    { label: "Fertilization (2)", active: false }, 
    { label: "Pest Control (1)", active: false }, 
    { label: "General (0)", active: false }
  ];

  const advisories = [
    { id: 7, name: "Field 7 - North Plot", crop: "Rice • 2.5 ha", type: "Irrigation Recommended", desc: "Irrigate in next 1-2 days. Soil moisture is low.", rec: "25-30 mm of water", priority: "High Priority", date: "Today", icon: Droplets, color: "blue", grad: "from-[#059669] to-[#0f766e]" },
    { id: 4, name: "Field 4 - Central Plot", crop: "Maize • 3.2 ha", type: "Fertilizer Application", desc: "Apply urea (46% N) for better growth.", rec: "45 kg/ha", priority: "Medium Priority", date: "Tomorrow", icon: Leaf, color: "orange", grad: "from-[#f59e0b] to-[#ea580c]" },
    { id: 2, name: "Field 2 - West Plot", crop: "Cotton • 4.1 ha", type: "Pest Control Advised", desc: "Monitor for whitefly and apply neem oil spray.", rec: "Neem oil 5ml/L", priority: "High Priority", date: "In 2 Days", icon: Bug, color: "red", grad: "from-[#059669] to-[#0f766e]" },
    { id: 1, name: "Field 1 - East Plot", crop: "Wheat • 5.0 ha", type: "Top Dressing", desc: "Apply potash for better grain quality.", rec: "MOP 25 kg/ha", priority: "Medium Priority", date: "In 3 Days", icon: Leaf, color: "green", grad: "from-[#f59e0b] to-[#ea580c]" },
    { id: 9, name: "Field 9 - South Plot", crop: "Mustard • 2.8 ha", type: "General Advisory", desc: "Good crop condition. Continue regular monitoring.", rec: "Keep monitoring weather updates", priority: "Low Priority", date: "Ongoing", icon: Leaf, color: "green", grad: "from-[#f59e0b] to-[#ea580c]" },
    { id: 5, name: "Field 5 - South East Plot", crop: "Rice • 3.0 ha", type: "Irrigation Recommended", desc: "Irrigate in next 2-3 days.", rec: "20-25 mm of water", priority: "High Priority", date: "In 2 Days", icon: Droplets, color: "blue", grad: "from-[#059669] to-[#0f766e]" },
  ];

  // Helper for Icon Backgrounds
  const getCircleColor = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 text-blue-500';
      case 'orange': return 'bg-orange-50 text-orange-500';
      case 'red': return 'bg-red-50 text-red-500';
      case 'green': return 'bg-green-50 text-green-500';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      
      {/* Header & Filter */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-gray-900">Field Advisory List</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input type="text" placeholder="Search fields..." className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-400 focus:outline-none font-bold focus:border-green-500 w-56" />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-semibold text-gray-700 hover:bg-gray-50">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>
        
        {/* Navigation Pills */}
        <div className="flex gap-2">
          {pills.map((p, i) => (
            <button key={i} className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-colors ${p.active ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Advisory Rows */}
      <div className="divide-y divide-gray-50">
        {advisories.map((adv, i) => (
          <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50/50 cursor-pointer group">
            
            {/* 1. Gradient Image Icon & Name */}
            <div className="flex items-center gap-4 w-[30%]">
              <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-white shadow-sm bg-gradient-to-br ${adv.grad}`}>
                <Sprout size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[13px]">{adv.name}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">{adv.crop}</p>
              </div>
            </div>

            {/* 2. Advisory Info & Type Icon (FIXED) */}
            <div className="flex items-start gap-4 w-[45%]">
              <div className={`p-2.5 rounded-full shrink-0 ${getCircleColor(adv.color)} group-hover:scale-110 transition-transform`}>
                <adv.icon size={20} strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-[13px]">{adv.type}</h5>
                <p className="text-[11px] text-gray-500 mt-0.5">{adv.desc}</p>
                <p className="text-[11px] text-gray-700 font-semibold mt-1">Recommended: {adv.rec}</p>
              </div>
            </div>

            {/* 3. Priority Badge & Date */}
            <div className="flex flex-col items-end gap-2 w-[20%] pr-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${adv.priority === 'High Priority' ? 'bg-red-50 text-red-600' : adv.priority === 'Medium Priority' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                {adv.priority}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                <Calendar size={12} /> {adv.date}
              </div>
            </div>

            {/* 4. Action Arrow */}
            <ChevronRight className="text-gray-300 w-[5%] group-hover:text-green-500 transition-colors" size={16} />
          </div>
        ))}
      </div>
    </div>
  );
}