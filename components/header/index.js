import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { menuItems } from "@/utils";

const Header = () => {
  return (
    <header className="w-full max-w-6xl m-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={96} height={96} />
          </Link>
          <div>
            <Link href="/">
              <h4 className="font-poppin text-[20px] lg:text-[26px] font-semibold text-darkbule ">
                INDIA SARKARI NAUKRI
              </h4>
            </Link>
            <Link href="/">
              <span className="text-[16px] font-medium text-skyblue">
                Sarkari Naukri Website
              </span>
            </Link>
          </div>
        </div>
        {/* Search Bar */}
        <div className="relative flex mt-3 sm:mt-0 items-center w-full sm:w-auto">
          <input
            className="w-full sm:w-[300px] border border-[#A9DBED] py-2 px-2 rounded-3xl placeholder:text-sm placeholder:text-darkbule focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <RiSearchLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-darkbule" />
        </div>
      </div>
      {/* Menu */}
      <nav className="flex flex-wrap bg-darkbule text-textColor font-montserrat text-[15px] font-medium">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="relative group">
            <div
              className={` py-2 text-[5px] font-medium border-r border-textColor px-[7px] sm:text-[8px] sm:p-[10px] md:text-[10px] md:font-medium md:py-3 lg:text-[12px] xl:px-5 lg:py-4  ${
                index === menuItems.length - 1 ? "last:border-r-0" : ""
              }`}
            >
              <Link href={menuItem?.link || "#"}>
                {menuItem?.name || "Unnamed"}
              </Link>
            </div>
            {/* Submenu for items with options */}
            {menuItem?.subMenu && (
              <div className="absolute left-0 hidden group-hover:block bg-white -mt-1 shadow-lg z-10 w-full sm:w-[250px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-1">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100 text-black text-sm last:border-b-0"
                  >
                    <Link href={subItem.link}>{subItem.name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
