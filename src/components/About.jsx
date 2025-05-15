export function About() {
  return (
    <div className="w-full h-66 flex mt-10">
      {/* Text Content (Left) */}
      <div className="w-1/2 h-full flex items-center justify-center rounded-xl ml-8">
        <div className="">
          <div className="flex justify-end">
            <img
              src="/images/farmers.png"
              alt="Sample"
              className="h-72 ml-30 w-72 top-2 right-2"
            />
          </div>
        </div>
      </div>

      {/* Image (Right) */}
      <div className="w-1/2 h-full flex items-center ml-5 pr-8">
        <div>
          <div>
            <button
              type="button"
              className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-10 py-1.5 me-2 dark:focus:ring-yellow-900"
            >
              About Us
            </button>
          </div>
          <div>
            <h3 className="text-[#404A3D] mt-3 text-4xl">
              We're Best Agriculture & Organic Farms
            </h3>
            {/* Random content below the heading */}
            <p className="mt-4 text-gray-600 max-w-md">
              We focus on sustainable, chemical-free farming to grow fresh, healthy organic produce. Our commitment to nature ensures better food for you and a cleaner environment.
            </p>
          </div>

        <div className="flex mt-3">
            <div>
                <ul className="list-none p-0 m-0 space-y-2">
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Garlic Farming</p>
                    </li>
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Lavender Farming</p>
                    </li>
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Gourmet Mushrooms</p>
                    </li>
                </ul>
            </div>

            <div className="ml-3">
                <ul className="list-none p-0 space-y-2 m-0">
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Fertilizer Distribution</p>
                    </li>
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Poultry Farming</p>
                    </li>
                    <li className="flex items-center">
                        <img src="/images/check.png" alt="tick" className="mr-2 h-4 w-4" />
                    <p>Organic Fertilizers</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
