import React from "react";
import Text from "./Text";
import Image from "./Image";

const Section = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex items-center justify-center">
        <Text />
      </div>

      <div className="flex items-center justify-center w-full border-2 rounded-2xl py-10 shadow-lg backdrop-blur-3xl my-10 backdrop-filter max-w-sm mx-auto">
        <Image />
      </div>
    </div>
  );
};

export default Section;
