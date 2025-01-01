import React from "react";
import Chart1 from "../../Image/Chart1";
import Chart2 from "../../Image/Chart2";
import Chart3 from "../../Image/Chart3";
import Section2arrow from "../../Image/Section2arrow";
import Section2rate from "../../Image/Section2rate";

const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 w-full">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center backdrop-blur-lg backdrop-filter p-10 shadow-lg w-full max-w-[380px] h-[440px] border-2 rounded-3xl mx-auto">
        <div className="mb-4">
          <Chart1 />
        </div>
        <h3 className="text-3xl font-semibold mb-2 text-center bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent ">
          Comprehensive Market Cap Data
        </h3>
        <p className="text-center bg-gradient-to-r from-[#28A79B] to-white bg-clip-text text-transparent">
          Explore market caps across a spectrum of industries and sectors. Our
          data covers large-cap, mid-cap, and small-cap companies, letting you
          compare and contrast with ease.
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative flex flex-col items-center justify-center backdrop-blur-lg backdrop-filter text-white p-10 shadow-lg w-full max-w-[380px] h-[440px] border-2 rounded-3xl mx-auto">
        <div className="absolute top-3 left-3 pt-7 pl-11 flex items-center gap-3">
          <Section2arrow />
          <Section2rate />
        </div>

        <div className="mb-4">
          <Chart2 />
        </div>
        <h3 className="text-3xl font-semibold mb-2 text-center bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent">
          Real-Time Analytics
        </h3>
        <p className="text-center bg-gradient-to-r from-[#28A79B] to-white bg-clip-text text-transparent">
          Stay informed with real-time data, customizable alerts, and trend
          analysis tailored to your interests. Make quicker, data-driven
          decisions and respond instantly to market shifts.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center backdrop-blur-lg backdrop-filter text-white p-10 shadow-lg w-full max-w-[380px] h-[440px] border-2 rounded-3xl mx-auto">
        <div className="mb-4">
          <Chart3 />
        </div>
        <h3 className="text-3xl font-semibold mb-2 text-center bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent">
          Sector & Market Comparison
        </h3>
        <p className="text-center bg-gradient-to-r from-[#28A79B] to-white bg-clip-text text-transparent">
          Analyze companies by industry, location, or growth phase with powerful
          comparison tools. Discover patterns and correlations to refine your
          portfolio strategy.
        </p>
      </div>
    </div>
  );
};

export default Card;
