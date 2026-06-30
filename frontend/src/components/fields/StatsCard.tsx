"use client";
import  BaseCard  from "@/components/dashboard/BaseCard";
interface StatCardProps {
  title: string;
  value: string;
  bgColor: string;
  trend: string;
  trendColor?: string;
  icon: React.ReactNode;
}
export default function StatsCard({ title, value,bgColor="bg-[#f1f7f2]", trend, trendColor = "text-green-600", icon }:StatCardProps) {
  

  return (
    <BaseCard className="flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-2">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#767c82]">{title}</span>
        <span className="text-3xl font-bold text-[#04321c] mt-1">{value}</span>
      </div>
      <div className={`p-2 ${bgColor} rounded-lg text-[#187040]`}>
        {icon}
      </div>
    </div>
    <div className={`text-xs font-bold mt-2 ${trendColor}`}>
      {trend}
    </div>
  </BaseCard>
  );
}
