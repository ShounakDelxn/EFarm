import Banner from "@/components/Banner";
import { MainContent } from "@/components/MainContent";
import Navbar from "@/components/NavBar";
import { Vectors } from "@/components/Vectors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8F7F0]">
      <Navbar />
      <Banner />
      <Vectors />
      <MainContent />
    </div>
  );
}
