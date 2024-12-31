import React from "react";
import Text from "./Text";
import Image from "./Image";
import HomeIkon from "../../Image/HomeIcon";

const Section = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex items-center justify-center">
        <Text />
      </div>

      <div className="max-md:mt-28 w-full  flex items-center justify-center">
        <Image />
      </div>
      <div className="flex items-center justify-end mt-2 max-md:justify-center max-md:mt-5">
        <HomeIkon />
      </div>
    </div>
  );
};

export default Section;
