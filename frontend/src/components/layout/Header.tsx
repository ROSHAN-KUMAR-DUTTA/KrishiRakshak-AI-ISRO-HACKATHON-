import { Bell, BellCheck, Menu, Sprout } from "lucide-react";
import React from "react";
import CurrentDate from "../common/CurrentDate";

const Header = () => {
  return (
    <header className="bg-[#fefdfd] text-black w-full p-4 sticky top-0">
      <div className="flex justify-between font-bold">
        <div className="flex items-center space-x-5">
          <button>
            <Menu size={20}/>
          </button>
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-xl">DashBoard Overview</h1>
              <Sprout className="text-green-600" size={20} />
            </div>
            <div>
              <p className="font-light text-xs">Real-time overview of your farm fields</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <CurrentDate />
          <button className='flex items-center bg-[#f1f1f1] p-2 rounded-xl'>
            <Bell />
          </button>
          <select name="area" id="" className='flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium'>
            <option value="Sindri, Jharkhand">Sindri, Jharkhand</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
