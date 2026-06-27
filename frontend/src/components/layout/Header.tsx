import { Bell, BellCheck, LucideIcon, Menu, Sprout } from "lucide-react";
import React, { ElementType } from "react";
import CurrentDate from "../common/CurrentDate";
interface HeaderProps {
  title: string;
  subtitle: string;
  icon:LucideIcon;
  rightContent: React.ReactNode; // Kyunki rightContent mein JSX elements hain
  toggleSidebar: () => void;     // Kyunki yeh ek function hai
}
const Header = ({title,subtitle,icon,rightContent,toggleSidebar}:HeaderProps) => {
  const Icon=icon;
  return (
    <header className="bg-[#fefdfd] text-black w-full p-4 sticky top-0 z-100">
      <div className="flex justify-between font-bold">
        <div className="flex items-center space-x-5">
          <button className="active:scale-95 active:text-green-600 hover:text-green-600 z-50 cursor-pointer" onClick={toggleSidebar}>
            <Menu size={20} />
          </button>
          <div className="flex flex-col">
            <div className="flex space-x-1 items-center">
              <h1 className="text-xl">{title}</h1>
              <Icon className="text-green-600 mb-1" size={20} />
              {/* <Sprout className="text-green-600" size={20} /> */}
            </div>
            <div>
              <p className="font-light text-xs">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div>
          {rightContent}
        </div>
      </div>
    </header>
  );
};

export default Header;
