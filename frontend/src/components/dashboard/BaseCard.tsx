import React from 'react'
interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}
const BaseCard = ({children, className=""}:BaseCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.03)] border border-[#eaede9] p-5 ${className}`}>
    {children}
  </div>
  )
}

export default BaseCard
