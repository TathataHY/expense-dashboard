import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCurrencyLine } from "react-icons/ri";
import { Avatar } from "../assets";
import { ThemeSwitch } from "../components";

const links = ["Dashboard", "Transactions", "Accounts", "Settings"];

export const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
          <RiCurrencyLine className="text-3xl text-white hover:animate-spin" />
        </div>
        <span className="text-xl font-bold text-black dark:text-white">
          Personal Finance
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {links.map((link, index) => (
          <div
            key={index}
            className={`px-6 py-2 rounded-full ${
              index === selected
                ? "bg-black dark:bg-slate-800 text-white"
                : "text-gray-700 dark:text-gray-500"
            }`}
            onClick={() => setSelected(index)}
          >
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-10 2xl:gap-20">
        <ThemeSwitch />

        <div className="flex items-center gap-2">
          <img
            src={Avatar}
            alt="user"
            className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover cursor-pointer"
          />
          <div className="hidden md:block">
            <p className="text-black dark:text-gray-400 font-medium text-lg">
              Tathata
            </p>
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              andre.yovera1@gmail.com
            </span>
          </div>
          <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
