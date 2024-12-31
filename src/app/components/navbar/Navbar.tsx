import React from "react";

import HeaderLogo from "../Image/HeaderLogo";
import { HeaderLogoBorder } from "../Image/HeaderLogoBorder";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-center text-white px-1 my-8">
      {/* Buton - Sol tarafa sabitlenir */}
      <div className="absolute right-4 max-md:hidden z-10 cursor-pointer">
        <div className="bg-[#111817] text-[#4ee0c8] py-3 px-4 rounded-full text-center cursor-pointer shadow-md hover:shadow-lg transition-shadow text-sm ">
          Go to DAPP
        </div>
      </div>

      {/* Logo - Ortalanır */}
      <div className="flex flex-col items-center justify-center relative w-full">
        <HeaderLogo />
        <div className="-mt-3 w-full">
          <HeaderLogoBorder />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
