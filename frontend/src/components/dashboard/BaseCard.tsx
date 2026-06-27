import { motion } from 'framer-motion';
import React from 'react'
interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}
const BaseCard = ({children, className=""}:BaseCardProps) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white p-4 rounded-xl border border-gray-100 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
  )
}

export default BaseCard
