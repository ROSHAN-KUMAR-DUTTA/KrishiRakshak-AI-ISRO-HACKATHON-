"use client";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useState } from "react";
import CurrentDate from "@/components/common/CurrentDate";
import { Bell, SearchX } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_CONFIG } from "@/lib/nav-config";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentConfig = NAV_CONFIG[pathname] || {
    title: "Page Not Found",
    subtitle: "404 not found",
    name: "",
    icon: SearchX,
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
        <div
          className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-64" : "w-0"} h-screen sticky top-0 overflow-hidden whitespace-nowrap`}
        >
          <Sidebar activeName={currentConfig.name} />
        </div>

        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Header
            title={currentConfig.title}
            subtitle={currentConfig.subtitle}
            icon={currentConfig.icon}
            rightContent={
              <div className="flex items-center space-x-5">
                <CurrentDate />
                <button className="flex items-center bg-[#f1f1f1] p-2 rounded-xl">
                  <Bell />
                </button>
                <select
                  name="area"
                  id=""
                  className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium"
                >
                  <option value="Sindri, Jharkhand">Sindri, Jharkhand</option>
                </select>
              </div>
            }
            toggleSidebar={() => {
              console.log("clicked");
              setIsSidebarOpen(!isSidebarOpen);
            }}
          />
          <main className="flex-1 bg-gray-50">{children}</main>
        </div>
    </>
  );
}
