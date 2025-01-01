import React from "react";
import { Play } from "lucide-react";

function Section4() {
  return (
    <div className="flex items-center justify-center flex-col text-center mt-3 pt-20 pb-20 border-4">
      <div className="flex items-center justify-center flex-col text-center max-w-3xl my-10">
        <div className="space-y-12 flex items-center flex-col">
          <h1 className="text-5xl font-normal leading-[55px] bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent max-md:text-[32px] max-md:font-medium max-md:leading-9">
            Ready to Elevate Your Investment Game?
          </h1>
          <p className="text-[#77798F] text-center text-[15px] max-md:text-[13px] max-w-xl px-4">
            Sign up today and get instant access to in-depth market cap data and
            analytics. Whether you're refining your portfolio or scouting new
            opportunities, our platform has everything you need to succeed.
          </p>
        </div>
        <div className="flex items-center justify-center mt-7 gap-4 flex-wrap">
          {/* İlk buton */}
          <button className="h-16 px-12 text-xl font-normal text-white bg-[#010314] rounded-full border border-[#28A79B] hover:shadow-[0_0_40px_0_rgba(0,255,221,0.25)] transition-all max-md:h-12 max-md:px-6 max-md:text-sm">
            Get Started Now
          </button>
          {/* İkinci buton */}
          <button className="h-16 px-12 text-xl font-normal text-white bg-[#010314] rounded-full border border-[#2A2B3A] flex items-center gap-3 max-md:h-12 max-md:px-6 max-md:text-sm">
            <Play className="w-6 h-6 fill-current max-md:w-4 max-md:h-4" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
