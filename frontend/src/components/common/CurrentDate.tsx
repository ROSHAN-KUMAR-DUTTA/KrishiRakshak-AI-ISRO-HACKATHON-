import { Calendar, CalendarCheck } from 'lucide-react'
import React from 'react'
const date = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
}
)
const CurrentDate = () => {
  return (
    <div className='flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm'>
      <CalendarCheck size={18} className="text-gray-600" />
      <span className="">{date}</span>
    </div>
  )
}

export default CurrentDate
