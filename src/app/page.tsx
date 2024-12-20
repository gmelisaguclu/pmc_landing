import Image from "next/image";
import Section from "./components/main/section1/Section";
import Section2 from "./components/main/section2/Section2";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Section />
      <Section2 />
    </div>
  );
}
