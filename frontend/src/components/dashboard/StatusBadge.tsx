import React from 'react'

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  
  const colorMap: { [key: string]: string } = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-orange-100 text-orange-700",
    Low: "bg-green-100 text-green-700",
    Healthy: "bg-green-100 text-green-700",
    Critical: "bg-red-100 text-red-700",
  };

  const style = colorMap[status] || "bg-gray-100 text-gray-700";

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${style}`}>
      {status}
    </span>
  )
}

export default StatusBadge