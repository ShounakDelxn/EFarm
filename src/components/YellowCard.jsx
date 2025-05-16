'use client'

import React, { useState } from 'react';

export function ProductCard({ name, price, image }) {
  return (
    <div className="flex items-center p-3 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mr-3 ml-3">
        <img src={image} alt={name} className="w-12 h-12 object-cover rounded-md" />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-700 font-semibold">{price}</p>
      </div>
    </div>
  );
}


export default function YellowCard() {

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "On Sale Products",
    "Fresh Organic Fruits",
    "Featured Products"
  ];

  return (
  <div className="flex flex-col items-center bg-[#EDDD5E] mt-20 py-8 px-4">
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center items-center mb-2">
        <button
          onClick={() => scrollToSection('products')}
          className="bg-white hover:bg-yellow-600 text-black font-light py-2 px-12 rounded-full text-xs"
        >
          OUR PRODUCTS
        </button>
      </div>

      <h1 className="text-4xl font-light text-center mb-8">
        Products Delivered to Home
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`col-span-1 cursor-pointer px-8 py-13 rounded-tl-4xl rounded-tr-4xl text-center transition-colors text-sm ${
              activeCategory === index
                ? "bg-white text-gray-800 shadow-md"
                : "bg-transparent text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </div>
        ))}
      </div>

      <div id="products" className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard name="Watermelon" price="$1.99" image="/images/fruits/new.png" />
          <ProductCard name="Banana" price="$0.99" image="/images/fruits/shop-img-10.png.png" />
          <ProductCard name="Orange" price="$1.49" image="/images/fruits/shop-img-09.png.png" />
          <ProductCard name="Corn" price="$2.49" image="/images/fruits/corn.png.png" />
          <ProductCard name="Carrot" price="$1.29" image="/images/fruits/carrot.png" />
          <ProductCard name="Kiwi" price="$1.99" image="/images/fruits/kiwi.png" />
          <ProductCard name="Strawberry" price="$3.99" image="/images/fruits/strawberry.jpg" />
          <ProductCard name="Tomato" price="$1.79" image="/images/fruits/tomato.png" />
          <ProductCard name="Lettuce" price="$1.19" image="/images/fruits/lettuce.png" />
        </div>
      </div>
    </div>
  </div>
);

}
