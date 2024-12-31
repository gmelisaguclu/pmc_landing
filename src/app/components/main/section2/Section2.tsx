import React from "react";
import Card from "./Card";

const Section2 = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-14">
        <div className="font-bold  text-5xl max-md:text-3xl max-md:mt-44 max-md:font-medium max-md:tracking-wider mt-36	bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent leading-8  ">
          WHAT WE OFFER
        </div>
        <div className="flex gap-12 mt-36 max-md:mt-6 ">
          <div>
            <div className="flex font-bold text-3xl max-md:text-3xl ">
              <div>7.1M</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">TRANSACTIONS</div>
          </div>
          <div>
            <div className="flex font-bold text-3xl max-md:text-4xl">
              <div>2.1M</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">CUSTOMERS</div>
          </div>
          <div>
            <div className="flex font-bold text-3xl max-md:text-4xl">
              <div>850</div>
              <div className="text-[#2ED3C7]">+</div>
            </div>
            <div className="text-[#898698] text-xs">INTERGRATIONS</div>
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
