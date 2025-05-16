import { About } from "./About";
import { Section } from "./Section";
import {WaveCornerCard} from "./WaveCard";

export function MainContent(){
    return (
        <div className="px-40 mt-28">
            <button type="button" className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-10 py-1.5 me-2  dark:focus:ring-yellow-900">Customer Choice</button>

            <div className="flex justify-between items-center w-full px-8">
                <h1 className="text-3xl mt-2 text-[#404A3D] font-light">Check Our Products</h1>
                <div className="flex">
                    <div className="border p-2.5 rounded-md">                
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="border p-2.5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
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