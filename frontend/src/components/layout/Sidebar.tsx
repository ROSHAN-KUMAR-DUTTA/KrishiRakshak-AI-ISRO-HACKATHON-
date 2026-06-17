import {
  BarChart3,
  Brain,
  CloudSun,
  FileText,
  LayoutDashboard,
  Map,
  MapPinned,
  Settings,
  TrendingUpIcon,
  TriangleAlert,
} from "lucide-react";
import React from "react";
const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Fields", icon: <Map size={20} /> },
    { name: "Risk Map", icon: <MapPinned size={20} /> },
    { name: "Advisory", icon: <Brain size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Weather", icon: <CloudSun size={20} /> },
    { name: "Calculator", icon: <TrendingUpIcon size={20} /> },
    { name: "Alerts", icon: <TriangleAlert size={20} /> },
    { name: "Reports", icon: <FileText size={20} /> },
    { name: "Setting", icon: <Settings size={20} /> },
  ];

const Sidebar = () => {
  return (
    <aside className="h-screen flex flex-col bg-[#04251c] text-white w-62 ">
      <div className="flex  flex-col text-left p-6">
        <div>
          <h2 className="text-2xl font-bold ">
            KrishiRakshak <span className="text-green-600">AI</span>
          </h2>
          <p className="text-xs text-[#a8b0a9]">Smart Farming, Better Tomorrow</p>
        </div>
      </div>
     
      <nav className="px-3 text-[#a8b0a9] space-y-1">
        {navItems.map((item) => (
          <div key={item.name} className="p-3 text-sm flex items-center gap-3 transition hover:bg-[#103720] hover:text-white active:scale-95 rounded-2xl cursor-pointer">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
