import React from 'react'
import BaseCard from './BaseCard'
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendColor?: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, trend, trendColor = "text-green-600", icon }:StatCardProps) => {
  return (
    <BaseCard className="flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-2">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#767c82]">{title}</span>
        <span className="text-3xl font-bold text-[#04321c] mt-1">{value}</span>
      </div>
      <div className="p-2 bg-[#f8faf7] rounded-lg text-[#04321c]">
        {icon}
      </div>
    </div>
    <div className={`text-xs font-bold mt-2 ${trendColor}`}>
      {trend}
    </div>
  </BaseCard>
  )
}

export default StatCard
