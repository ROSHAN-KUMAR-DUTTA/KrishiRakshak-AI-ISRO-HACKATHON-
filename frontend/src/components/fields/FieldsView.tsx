"use client";
import BaseCard from "@/components/dashboard/BaseCard";
import StatsCard from "./StatsCard";
import FieldsTable from "./FieldsTable";
import InsightsCard, { InsightTone } from "./InsightsCard";
import { ClipboardCheck, Droplet, FileText, HeartPulse, Leaf, LucideIcon, Map, PlusCircle, Sprout } from "lucide-react";
export interface Insight {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tone: InsightTone;
}

// Mock data matching the reference design — swap for real computed insights once wired up.
export const defaultInsights: Insight[] = [
  {
    id: "attention",
    icon: Leaf,
    title: "2 fields need attention",
    description: "Cotton and Maize fields have low health score",
    tone: "green",
  },
  {
    id: "irrigation",
    icon: Droplet,
    title: "Irrigation required",
    description: "3 fields need irrigation in the next 2 days",
    tone: "blue",
  },
  {
    id: "performance",
    icon: Sprout,
    title: "Great performance",
    description: "Rice and Wheat fields are performing well",
    tone: "purple",
  },
];

const statData = [
  {
    title: "Total Fields",
    value: "24",
    bgColor: "bg-[#f1f7f2]",
    trend: "↗ 3 new this month",
    color: "text-green-600",
    icon: <Leaf className="" size={24} />,
  },
  {
    title: "Total Area",
    value: "48.6 ha",
    bgColor: "bg-[#f1f7f2]",
    trend: "↗ 5.2 ha vs last month",
    color: "text-green-500",
    icon: <ClipboardCheck className="" size={24} />,
  },
  {
    title: "Crops Growing",
    value: "6",
    bgColor: "bg-[#f1f7f2]",
    trend: "↗ 1 new crop",
    color: "text-orange-500",
    icon: <Sprout className="" size={24} />,
  },
  {
    title: "Avg. Health Score",
    value: "78%",
    bgColor: "bg-[#f1f7f2]",
    trend: "↗ 8% vs last month",
    color: "text-red-600",
    icon: <HeartPulse className="" size={24} />,
  },
];

export default function FieldsView() {
  return (
    // Pura page container
    <div className="flex flex-col gap-6 w-full p-5">
      {/* Header Section */}

      {/* 1. Top Stats (Padding fix) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {statData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* 2. Main Table Section (Padding removal inside BaseCard handled by FieldsTable) */}
      <FieldsTable />

      {/* 3. Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 bg-[#f8faf8] shadow-sm border-gray-100 rounded-2xl border px-6 py-5 ">
        {/* Field Insights — no outer card, sits flush on the page background like the reference */}
        <div className="lg:col-span-2 border-r">
          <h3 className="font-bold text-gray-900 mb-4">Field Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {defaultInsights.map((insight) => (
              <InsightsCard key={insight.id} {...insight} />
            ))}
          </div>
        </div>

        <div className=" flex flex-col">
          <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex gap-3">

          {/* Quick Actions buttons yahan add karo */}
          <button className="flex flex-col justify-center items-center space-y-1 border border-gray-100 rounded-2xl shadow-sm bg-white text-green-600 font-bold py-5 px-1 h-full w-full ">
          <PlusCircle/>
          <span className="text-sm">Add New Field</span>
          </button>
          <button className="flex flex-col justify-center items-center space-y-1 border border-gray-100 rounded-2xl shadow-sm bg-white text-green-600 font-bold py-5 px-1 h-full w-full ">
          <Map/>
          <span className="text-sm">View on Map</span>
          </button>
          <button className="flex flex-col justify-center items-center space-y-1 border border-gray-100 rounded-2xl shadow-sm bg-white text-green-600 font-bold py-5 px-1 h-full w-full ">
          <FileText/>
          <span className="text-sm">Field Report</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}