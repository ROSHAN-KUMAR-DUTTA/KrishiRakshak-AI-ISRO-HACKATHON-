"use client";

import React from "react";

import { Leaf, ShieldCheck, AlertTriangle, AlertOctagon, Droplets, IndianRupee } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import BaseCard from "@/components/dashboard/BaseCard";
import ListItem from "@/components/dashboard/ListItem";
import StatusBadge from "@/components/dashboard/StatusBadge";
import FieldHealthChart from "@/components/dashboard/FieldHealthChart";

export async function generateMetadata() {
  return {
    title: "Dashboard | KrishiRakshak AI",
  };
}

const statData = [
  { title: "Total Fields", value: "24", trend: "↗ 3 new this month", color: "text-green-600", icon: <Leaf size={24} /> },
  { title: "Healthy Fields", value: "10", trend: "↗ 2 improvement", color: "text-green-500", icon: <ShieldCheck size={24} /> },
  { title: "At Risk Fields", value: "8", trend: "↘ 1 from yesterday", color: "text-orange-500", icon: <AlertTriangle size={24} /> },
  { title: "Critical Fields", value: "6", trend: "↘ 2 need attention", color: "text-red-600", icon: <AlertOctagon size={24} /> },
  { title: "Water Saved (Est.)", value: "15,420 L", trend: "↗ 12% vs last week", color: "text-blue-500", icon: <Droplets size={24} /> },
  { title: "Cost Saved (Est.)", value: "₹ 12,540", trend: "↗ 15% vs last week", color: "text-green-600", icon: <IndianRupee size={24} /> },
];

export default function DashboardView() {
  return (
    <div className="flex flex-col gap-6 w-full p-5">
      
      {/* Row 1: Top 6 Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Row 2: Health, Irrigation, Weather, Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Field Health Overview</h2>
          <FieldHealthChart />
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Irrigation Recommendations</h2>
          <p className="text-xs text-gray-500 mb-4">AI suggestions for your fields</p>
          <ListItem icon={<Leaf className="text-green-600" />} title="Field 7 - Rice" subtitle="Irrigate in next 1-2 days" rightNode={<StatusBadge status="High" />} />
          <ListItem icon={<Leaf className="text-orange-500" />} title="Field 4 - Maize" subtitle="Irrigate in next 2 days" rightNode={<StatusBadge status="Medium" />} />
          <ListItem icon={<Leaf className="text-green-600" />} title="Field 2 - Rice" subtitle="No irrigation needed" rightNode={<StatusBadge status="Low" />} />
          <button className="w-full mt-4 bg-[#04321c] text-white py-2 rounded-md text-sm font-medium">View All Advisory</button>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Weather Summary</h2>
          <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg text-sm text-gray-400">Weather API Data Here</div>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-800">Recent Alerts</h2>
            <span className="text-xs text-gray-500 cursor-pointer">View All</span>
          </div>
          <ListItem icon={<AlertOctagon className="text-red-600" size={16}/>} title="High moisture stress detected in Field 4" subtitle="Irrigation recommended within 24-48 hours." rightNode={<span className="text-xs text-gray-400">1 hour ago</span>} />
        </BaseCard>
      </div>

      {/* Row 3: Map & Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BaseCard className="lg:col-span-8 min-h-100">
          <h2 className="font-bold text-gray-800 mb-4">Moisture Stress Risk Map</h2>
          <div className="w-full h-80 bg-green-900/20 rounded-lg flex items-center justify-center text-gray-500">Mapbox / Leaflet Component Here</div>
        </BaseCard>

        <BaseCard className="lg:col-span-4">
          <h2 className="font-bold text-gray-800 mb-4">Economic Impact Calculator</h2>
          <p className="text-xs text-gray-500 mb-6">See how much you can save with smart irrigation</p>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg text-sm text-gray-400">Calculator Form State Here</div>
        </BaseCard>
      </div>

      {/* Row 4: Analytics, Weather Intel, Alerts, Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BaseCard className="lg:col-span-4">
          <h2 className="font-bold text-gray-800 mb-4">Analytics & Trends</h2>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg text-sm text-gray-400">Line Chart Here</div>
        </BaseCard>
        
        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Weather Intelligence</h2>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg text-sm text-gray-400">7-Day Forecast Here</div>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Alerts & Notifications</h2>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg text-sm text-gray-400">Notifications List Here</div>
        </BaseCard>

        <BaseCard className="lg:col-span-2">
          <h2 className="font-bold text-gray-800 mb-4">Reports & Export</h2>
          <button className="w-full mt-auto bg-[#04321c] text-white py-2 rounded-md text-sm font-medium">Export All Reports (PDF)</button>
        </BaseCard>
      </div>

    </div>
  );
}