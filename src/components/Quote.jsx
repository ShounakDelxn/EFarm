export function Quote() {
  return (
    <div className=" mt-10 py-8 px-4 font-serif text-[#666666]">
        <div className="max-w-5xl mx-auto flex h-80 bg-white rounded-3xl ">
            <div className=" w-1/2 flex  justify-center">
                <div className="">
                    <img className="h-70 mt-2" src="/images/fruitsss.png" />
                </div>
            </div>

            <div className="w-1/2 flex items-center ">
                <div className="">
                    <div>
                        <button
                        type="button"
                        className="focus:outline-none text-black bg-slate-200 hover:bg-slate-100 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-1.5 me-2 dark:focus:ring-yellow-900"
                        >
                        Quote
                        </button>
                        <div className="w-80 py-4 text-black text-4xl">
                            <p>Organic Vegetables in our Store</p>
                        </div>
                        <div className="text-xs">
                            <p>Our store offers fresh, chemical-free organic vegetables straight from the farm.
                                Grown with care using sustainable methods, they’re packed with nutrients and flavor.
                                Eat healthy, live better—naturally.</p>
                        </div>

                        <div className="mt-6">
                            <button
                            type="button"
                            className="focus:outline-none text-white bg-[#5B8C51] hover:bg-green-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-10 py-2.5 me-2 dark:focus:ring-yellow-900"
                            >
                            Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
