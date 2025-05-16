// components/Footer.js
import { Phone, Mail } from "lucide-react";
import { FooterContent } from "./FooterContent";


function Circle(){
    return (
        <div className="h-1.5 w-1.5 bg-white rounded-full">

        </div>
    )
}
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 ">
      <div className="bg-[#EDDD5E] text-black py-8 px-22 flex flex-col md:flex-row justify-between items-center text-sm">
        <ul className="flex items-center space-x-6 mb-2 md:mb-0">
            <Circle />
          <li className="cursor-pointer hover:text-green-700">Farmers</li>
          <Circle />
          <li className="cursor-pointer hover:text-green-700">Organic</li>
          <Circle />
          <li className="cursor-pointer hover:text-green-700">Home</li>
          <Circle />
          <li className="cursor-pointer hover:text-green-700">Product</li>
          <Circle />
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>info@example.com</span>
          </div>
        </div>
      </div>
      <FooterContent />
    </footer>
  );
}
