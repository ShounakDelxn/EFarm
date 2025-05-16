export function About() {
  return (
    <div id="about" className="w-full flex mt-10 relative">
      <div className="w-1/2 flex items-center justify-center ml-8">
        <div className="relative">
          <div className="flex justify-end">
            <img
              src="/images/farmers.png"
              alt="Sample"
              className="h-96 w-auto" 
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-64 mt-6 flex items-start ml-10">
        <div>
          <div>
            <button
              type="button"
              className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-1.5 me-2 dark:focus:ring-yellow-900"
            >
              About Us
            </button>
          </div>
          <div>
            <h3 className="text-[#404A3D] mt-3 text-4xl">
              We're Best Agriculture & Organic Farms
            </h3>
            <p className="mt-6 text-md text-gray-600 w-full py-4">
              We focus on sustainable, chemical-free farming to grow fresh, healthy organic produce. Our commitment to nature ensures better food for you and a cleaner environment.
            </p>
          </div>

          <div className="flex mt-6">
            <div>
              <ul className="list-none p-0 m-0 space-y-1">
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

            <div className="ml-16">
              <ul className="list-none p-0 space-y-1 m-0">
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