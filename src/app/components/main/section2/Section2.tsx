import React from "react";
import Card from "./Card";

const Section2 = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-14">
        <div className="md:font-bold font-medium text-3xl md:text-5xl mt-36	bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent leading-8">
          What We Offer
        </div>
        <div className="flex gap-12 mt-36 ">
          <div>
            <div className="flex font-bold text-3xl">
              <div>7.1M</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">TRANSACTIONS</div>
          </div>
          <div>
            <div className="flex font-bold text-3xl">
              <div>7.1M</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">TRANSACTIONS</div>
          </div>
          <div>
            <div className="flex font-bold text-3xl">
              <div>7.1M</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">TRANSACTIONS</div>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Section2;
