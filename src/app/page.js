import { Article } from "@/components/Article";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { MainContent } from "@/components/MainContent";
import Navbar from "@/components/NavBar";
import { Quote } from "@/components/Quote";
import { SmallBanner } from "@/components/SmallBanner";
import { Testimonials } from "@/components/Testimonials";
import { Vectors } from "@/components/Vectors";
import YellowCard from "@/components/YellowCard";

export default function Home() {
  return (
    <div className="bg-[#F8F7F0]">
      <Navbar />
      <Banner />
      <Vectors />
      <MainContent />
      <YellowCard />
      <Testimonials />
      <SmallBanner />
      <Quote />  
      <Article />  
      <Footer />
    </div>
  );
}
