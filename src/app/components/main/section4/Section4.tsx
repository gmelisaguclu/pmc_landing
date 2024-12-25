import React from "react";
import { Play } from "lucide-react";

function Section4() {
  return (
    <div className="flex items-center justify-center  flex-col text-center mt-3 pt-20 pb-20 max-w-full border-4 mr-10 ml-10">
      <div className="flex items-center justify-center  flex-col text-center max-w-[689px]  my-10">
        <div className="space-y-12">
          <h1 className="text-5xl font-normal leading-[55px] bg-gradient-to-r from-white to-[#FFFFFF33] bg-clip-text text-transparent tracking-wider ">
            Ready to Elevate Your Investment Game?
          </h1>
          <p className="text-[#77798F] text-lg">
            Sign up today and get instant access to in-depth market cap data and
            analytics. Whether you're refining your portfolio or scouting new
            opportunities, our platform has everything you need to succeed.
          </p>
        </div>
        <div className="flex items-center justify-center mt-7 gap-8">
          <button className="h-16 px-12 text-xl font-normal text-white bg-[#0B0B1A] rounded-full border border-[#00FFDD]/20 shadow-[0_0_30px_0_rgba(0,255,221,0.15)] hover:shadow-[0_0_40px_0_rgba(0,255,221,0.25)] transition-all">
            Get Started Now
          </button>
          <button className="h-16 px-12 text-xl font-normal text-white bg-[#0B0B1A] rounded-full border border-[#1E1F2E] flex items-center gap-3">
            <Play className="w-6 h-6 fill-current" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
