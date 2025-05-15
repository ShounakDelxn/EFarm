export function MainContent(){
    return (
        <div className="px-40 bg-red-100 mt-30">
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

        </div>
    )
}