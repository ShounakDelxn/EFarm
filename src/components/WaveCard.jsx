import React from "react";

export const WaveCornerCard = ({ img, name, price }) => {
  return (
    <div className="max-w-72 h-68 bg-white rounded-3xl shadow-md relative p-4 flex flex-col items-center overflow-hidden">
      
      <div className="mb-2">
        <img
          src={img}
          alt={name}
          className="w-38 h-38 object-contain"
        />
      </div>

      <div className="flex justify-center mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>

      <h3 className="text-gray-700 text-base font-medium mb-1 text-center">
        {name}
      </h3>

      <p className="text-green-600 text-sm font-medium">${price}</p>

      
      <svg 
        className="absolute bottom-0 right-0 z-0" 
        width="80" 
        height="80" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M120 120V30C120 30 105 30 90 45C75 60 60 90 40 105C25 115 10 120 0 120H120Z" 
          fill="#F8F7F0" 
        />
      </svg>
      <img
        src="/images/shopping.png"
        alt="Overlay"
        className="absolute bottom-2 right-2 w-6 h-6 z-10 object-contain"
      />
    </div>
  );
};
