import Image from "next/image";
import Section from "./components/main/section1/Section";
import Section2 from "./components/main/section2/Section2";
import Section3 from "./components/main/section3/Section3";
import Section4 from "./components/main/section4/Section4";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
