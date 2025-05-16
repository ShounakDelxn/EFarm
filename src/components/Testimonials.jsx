export function Testimonials() {
  return (
    <div className=" mt-10 py-8 px-4 ">
      <div className="max-w-6xl mx-auto flex h-70 ">
        <div className=" w-1/2 flex  justify-center border-r  ">
          <div className="">
            <div className="ml-28">
                <button
                type="button"
                className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-1.5 me-2 mb-3 dark:focus:ring-yellow-900"
                >
              Testimonials
            </button>
            <div className="w-70">
                <h1  className="text-4xl ">What our Clients say About Us</h1>
            </div>

                <div className="flex mt-5">
                    <div className="border p-2.5 mr-2 rounded-md">                
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
          </div>
        </div>

        <div className="w-1/2 flex ">
          <div className=" px-25" >
            <div >
                <div className="flex  mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">★</span>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <p className="text-lg">"I’ve tried many organic farms, but this one truly stands out. Their quality and consistency are unmatched! "</p>
            </div>

            <div className="flex mt-2">
                <div className="mt-2">
                    <div className={`w-8 h-8 rounded-full bg-cyan-200`}></div>
                </div>
                <div className="ml-3">
                    <p className="text-md">Phil Dunphy</p>
                    <p className="text-sm">Student</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
