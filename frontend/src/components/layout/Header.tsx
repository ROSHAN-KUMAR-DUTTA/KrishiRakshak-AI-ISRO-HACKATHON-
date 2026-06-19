import { Bell, BellCheck, Menu, Sprout } from "lucide-react";
import React from "react";
import CurrentDate from "../common/CurrentDate";
interface HeaderProps {
  title: string;
  subtitle: string;
  rightContent: React.ReactNode; // Kyunki rightContent mein JSX elements hain
  toggleSidebar: () => void;     // Kyunki yeh ek function hai
}
const Header = ({title,subtitle,rightContent,toggleSidebar}:HeaderProps) => {
  return (
    <header className="bg-[#fefdfd] text-black w-full p-4 sticky top-0">
      <div className="flex justify-between font-bold">
        <div className="flex items-center space-x-5">
          <button className="active:scale-95 z-50 cursor-pointer" onClick={toggleSidebar}>
            <Menu size={20} />
          </button>
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-xl">{title}</h1>
              <Sprout className="text-green-600" size={20} />
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
