import React from 'react'
interface ListItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  rightNode: React.ReactNode;
}
const ListItem = ({icon,title,subtitle,rightNode}:ListItemProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#eaede9] last:border-0 last:pb-0">
    <div className="flex items-center gap-4">
      <div className="shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-[#04321c]">{title}</span>
        <span className="text-xs font-medium text-[#767c82]">{subtitle}</span>
      </div>
    </div>
    <div className="shrink-0 text-right">
      {rightNode}
    </div>
  </div>
  )
}

export default ListItem
