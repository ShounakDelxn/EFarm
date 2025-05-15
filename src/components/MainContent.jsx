import { About } from "./About";
import { Card } from "./Card";
import { Section } from "./Section";
import {WaveCornerCard} from "./WaveCard";
import WaveCard from "./WaveCard";

export function MainContent(){
    return (
        <div className="px-40 mt-30">
            <button type="button" className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-10 py-1.5 me-2  dark:focus:ring-yellow-900">Customer Choice</button>

            <div className="flex justify-between items-center w-full px-8">
                <h1 className="text-3xl mt-2 text-[#404A3D] font-light">Check Our Products</h1>
                <div className="flex">                
                    <img
                    src="/images/Button - Previous slide.png"
                    alt="Sample"
                    className="h-8 w-8 "
                    />
                    <img
                    src="/images/Button - Next slide.png"
                    alt="Sample"
                    className="h-8 w-8 "
                    />
                </div>
            </div>

            <div className="flex justify-around mt-15">
                <WaveCornerCard img="/images/corn.png.png" name="Corn"  price="10.00"  />
                <WaveCornerCard img="/images/tomato.png" name="Tomato"  price="18.00"  />
                <WaveCornerCard img="/images/kiwi.png" name="kiwi"  price="35.00"  />
                <WaveCornerCard img="/images/lettuce.png" name="Lettuce"  price="12.00"  />
            </div>
            <Section />

            <About />
            
        </div>
    )
}