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
import Link from "next/link";
import React from "react";
const navItems = [
    { name: "Dashboard", path:"/", icon: <LayoutDashboard size={20} /> },
    { name: "Fields", path:"/fields", icon: <Map size={20} /> },
    { name: "Risk Map", path:"/risk-map", icon: <MapPinned size={20} /> },
    { name: "Advisory", path:"/advisory", icon: <Brain size={20} /> },
    { name: "Analytics", path:"/analytics", icon: <BarChart3 size={20} /> },
    { name: "Weather", path:"/weather", icon: <CloudSun size={20} /> },
    { name: "Calculator", path:"/calculator", icon: <TrendingUpIcon size={20} /> },
    { name: "Alerts", path:"/alerts", icon: <TriangleAlert size={20} /> },
    { name: "Reports", path:"/reoprts", icon: <FileText size={20} /> },
    { name: "Setting", path:"/settings", icon: <Settings size={20} /> },
  ];

const Sidebar = ({ activeName }:{activeName:string}) => {
  return (
    <aside className="h-screen flex flex-col bg-[#04251c] text-white w-full ">
      <div className="flex  flex-col text-left p-6">
        <div>
          <h2 className="text-2xl font-bold ">
            KrishiRakshak <span className="text-green-600">AI</span>
          </h2>
          <p className="text-xs text-[#a8b0a9]">Smart Farming, Better Tomorrow</p>
        </div>
      </div>
     
      <nav className="px-3 text-[#a8b0a9] space-y-1">
        {navItems.map((item) => {
          const isActive = activeName === item.name;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`p-3 text-sm flex items-center gap-3 transition rounded-2xl cursor-pointer 
                ${isActive ? "bg-[#103720] text-white" : "hover:bg-[#103720] hover:text-white"}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
