"use client";

import React, { useEffect, useState } from "react";

import {
  Leaf,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  Droplets,
  IndianRupee,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import BaseCard from "@/components/dashboard/BaseCard";
import ListItem from "@/components/dashboard/ListItem";
import StatusBadge from "@/components/dashboard/StatusBadge";
import FieldHealthChart from "@/components/dashboard/FieldHealthChart";
import WeatherSummary from "./WeatherSummary";
import dynamic from "next/dynamic";
import CurrentDate from "../common/CurrentDate";
import AnalyticsChart from "./AnalyticsChart";
import EconomicCalculator from "./EconomicCalculator";
import WeatherIntelligence from "./WeatherIntelligence";
import ReportsExport from "./ReportsExport";
import AlertsList from "./AlertsList";

export async function generateMetadata() {
  return {
    title: "Dashboard | KrishiRakshak AI",
  };
}

const statData = [
  {
    title: "Total Fields",
    value: "24",
    bgColor: "bg-[#EEF7ED]",
    trend: "↗ 3 new this month",
    color: "text-green-600",
    icon: <Leaf className="fill-green-600" size={24} />,
  },
  {
    title: "Healthy Fields",
    value: "10",
    bgColor: "bg-[#EEF7ED]",
    trend: "↗ 2 improvement",
    color: "text-green-500",
    icon: <ShieldCheck className="fill-green-600" size={24} />,
  },
  {
    title: "At Risk Fields",
    value: "8",
    bgColor: "bg-[#fdf5e6]",
    trend: "↘ 1 from yesterday",
    color: "text-orange-500",
    icon: <AlertTriangle className="fill-[#fba21d]" size={24} />,
  },
  {
    title: "Critical Fields",
    value: "6",
    bgColor: "bg-[#fdedea]",
    trend: "↘ 2 need attention",
    color: "text-red-600",
    icon: <AlertOctagon className="fill-[#df4230]" size={24} />,
  },
  {
    title: "Water Saved (Est.)",
    value: "15,420L",
    bgColor: "bg-[#eff4fb]",
    trend: "↗ 12% vs last week",
    color: "text-blue-500",
    icon: <Droplets className="fill-[#5b91d8]" size={24} />,
  },
  {
    title: "Cost Saved (Est.)",
    value: "₹12,540",
    bgColor: "bg-[#eff8ed]",
    trend: "↗ 15% vs last week",
    color: "text-green-600",
    icon: <IndianRupee className="text-green-600" size={24} />,
  },
];
const RiskMap = dynamic(() => import("@/components/dashboard/RiskMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 animate-pulse text-gray-400">
      Loading Map Data...
    </div>
  ),
});

export default function DashboardView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.5 seconds ka fake loading state
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* Stats Row Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
        ))}
      </div>

      {/* Main Grid Skeleton (Charts & Map) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Analytics & Map Area */}
        <div className="lg:col-span-8 h-[500px] bg-gray-200 rounded-xl"></div>
        
        {/* Weather & Alerts Area */}
        <div className="lg:col-span-4 h-[500px] bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
}
  return (
   
    <div className="flex flex-col gap-3 w-full p-5">
      {/* Row 1: Top 6 Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Row 2: Health, Irrigation, Weather, Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Field Health Overview */}
        <BaseCard className="lg:col-span-3 flex flex-col h-[350px]">
          <h2 className="font-bold text-gray-800 mb-4 shrink-0">
            Field Health Overview
          </h2>

          {/* The wrapper must have flex-1 and a strict minimum height */}
          <div className="flex-1 w-full relative min-h-[200px]">
            <FieldHealthChart />
          </div>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">
            Irrigation Recommendations
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            AI suggestions for your fields
          </p>
          <ListItem
            icon={<Leaf className="text-green-600" />}
            title="Field 7 - Rice"
            subtitle="Irrigate in next 1-2 days"
            rightNode={<StatusBadge status="High" />}
          />
          <ListItem
            icon={<Leaf className="text-orange-500" />}
            title="Field 4 - Maize"
            subtitle="Irrigate in next 2 days"
            rightNode={<StatusBadge status="Medium" />}
          />
          <ListItem
            icon={<Leaf className="text-green-600" />}
            title="Field 2 - Rice"
            subtitle="No irrigation needed"
            rightNode={<StatusBadge status="Low" />}
          />
          <button className="w-full mt-4 bg-[#04321c] text-white py-2 rounded-md text-sm font-medium">
            View All Advisory
          </button>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <h2 className="font-bold text-gray-800 mb-4">Weather Summary</h2>
          <div className="h-64">
            <WeatherSummary />
          </div>
        </BaseCard>

        <BaseCard className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-800">Recent Alerts</h2>
            <span className="text-xs text-gray-500 cursor-pointer">
              View All
            </span>
          </div>
          <ListItem
            icon={<AlertOctagon className="text-red-600" size={16} />}
            title="High moisture stress detected in Field 4"
            subtitle="Irrigation recommended within 24-48 hours."
            rightNode={
              <span className="text-xs text-gray-400">1 hour ago</span>
            }
          />
        </BaseCard>
      </div>

      {/* Row 3: Map & Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Map Card */}
        <BaseCard className="lg:col-span-8 flex flex-col p-0 overflow-hidden h-[500px]">
          <div className="p-4 flex justify-between items-start">
            <div>
              <h2 className="font-bold text-gray-800">
                Moisture Stress Risk Map
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Sentinel-1 + Sentinel-2 Fusion
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-200 text-xs text-gray-600 py-1.5 px-2 rounded">
                <option>All Fields</option>
              </select>
              <div className="text-black font-bold">
                <CurrentDate />
              </div>
              <button className="border border-gray-200 p-1.5 rounded text-gray-500">
                ⛶
              </button>
            </div>
          </div>
          <div className="w-full flex-1 relative z-0">
            <RiskMap />
          </div>
          <div className="p-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>📡</span> SAR helps monitoring even during cloudy
              conditions.
            </div>
            <span className="text-xs font-bold text-gray-700 cursor-pointer hover:underline">
              View All Fields
            </span>
          </div>
        </BaseCard>

        {/* Calculator Card */}
        <BaseCard className="lg:col-span-4 h-[500px] flex flex-col">
          <h2 className="font-bold text-gray-800 mb-1">
            Economic Impact Calculator
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            See how much you can save with smart irrigation
          </p>
          <div className="flex-1 overflow-y-auto">
            <EconomicCalculator />
          </div>
        </BaseCard>
      </div>

      {/* Row 4: Analytics, Weather, Alerts, Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 items-stretch">
        {/* Analytics Card */}
        <BaseCard className="lg:col-span-4 h-[350px] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-4 shrink-0">
            <div>
              <h2 className="font-bold text-gray-800 text-sm">
                Analytics & Trends
              </h2>
              <p className="text-[10px] text-gray-500">
                Track field health and performance
              </p>
            </div>
            <div className="flex gap-1.5">
              <select className="border border-gray-200 text-[10px] text-gray-600 py-1 px-1.5 rounded bg-white">
                <option>Field 4</option>
              </select>
              <select className="border border-gray-200 text-[10px] text-gray-600 py-1 px-1.5 rounded bg-white">
                <option>30 Days</option>
              </select>
            </div>
          </div>
          {/* Relative wrapper ensures Recharts stays bound inside this exact height */}
          <div className="flex-1 w-full min-h-0">
            <AnalyticsChart />
          </div>
        </BaseCard>

        {/* Weather Intelligence */}
        <BaseCard className="lg:col-span-3 h-[350px] flex flex-col overflow-hidden">
          <div className="p-2 border-b border-gray-100 shrink-0">
            <h2 className="font-bold text-gray-800 text-sm">
              Weather Intelligence
            </h2>
            <p className="text-[10px] text-gray-500">
              7-Day Forecast & Irrigation Suggestions
            </p>
          </div>
          <div className="flex-1 p-2 overflow-y-auto min-h-0 bg-white">
            <WeatherIntelligence />
          </div>
        </BaseCard>

        {/* Alerts & Notifications */}
        <BaseCard className="lg:col-span-3 h-[350px] flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center shrink-0">
            <div>
              <h2 className="font-bold text-gray-800 text-sm">
                Alerts & Notifications
              </h2>
              <p className="text-[10px] text-gray-500">Critical farm updates</p>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div className="flex-1 p-3 overflow-y-auto min-h-0 bg-white">
            <AlertsList />
          </div>
        </BaseCard>

        {/* Reports & Export */}
        <BaseCard className="lg:col-span-2 h-[350px] flex flex-col overflow-hidden p-4">
          <div className="mb-3 shrink-0">
            <h2 className="font-bold text-gray-800 text-sm">
              Reports & Export
            </h2>
            <p className="text-[10px] text-gray-500">
              Generate and download reports
            </p>
          </div>
          <div className="flex-1 min-h-0">
            <ReportsExport />
          </div>
        </BaseCard>
      </div>
    </div>
  );
}
