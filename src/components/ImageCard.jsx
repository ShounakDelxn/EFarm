import { CalendarDays } from "lucide-react";

export default function ImageCard({ image, heading, date, text }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={heading}
          className="w-full h-56 object-cover"
        />
        <div className="absolute  top-1 left-1 ml-3.5 bg-white bg-opacity-80 text-black text-sm px-6 py-1 rounded-full">
          {heading}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-600 text-sm mb-1">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-gray-800 font-semibold text-base">{text}</p>
      </div>
    </div>
  );
}
