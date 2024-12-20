import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Text = () => {
  return (
    <div className="flex items-center max-w-3xl flex-col text-center  my-10 ">
      <h1 className="text-6xl font-bold leading-[72px] bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent mb-12 tracking-wider">
        ELEVANTE YOUR INVESMENT STRATEGY
      </h1>
      <p className="text-xl max-w-2xl bg-gradient-to-r from-[#28A79B] to-white bg-clip-text text-transparent tracking-wider leading-[27px]">
        Uncover insights on market capitalizations, sector trends, and emerging
        opportunities. Dive deeper into the numbers with our powerful data and
        analytics platform.
      </p>
      <button className="flex items-center text-[#2ED3C7] px-7 py-2 mt-14 text-center cursor-pointer hover:scale-105 hover:duration-100 transition-shadow font-normal gap-1.5 shadow-[0_0_10px_0_rgba(40,167,155,1)] rounded-full ">
        Start Invest
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Text;
